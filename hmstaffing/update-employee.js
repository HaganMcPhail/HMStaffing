app.usecase.updateEmployee = {
    create: function () {
        var updateEmployee;
        
        updateEmployee = {
            execute: function (id, firstName, lastName, title, email, city, state, phone1, phone2) {
                var employeeUpdated,
                    deletedEmployee;
 
                for(var i=0;i<app.employees.length;i++){
                    if (app.employees[i].id == id) {
                        var splice = i;
                        employeeUpdated = app.employees[i];
                        break;
                    }
                };

                app.employees.splice(splice, 1);

                employeeUpdated.id = id;
                employeeUpdated.first_name = firstName;
                employeeUpdated.last_name = lastName;
                employeeUpdated.job_title = title;
                employeeUpdated.email = email;
                employeeUpdated.city = city;
                employeeUpdated.state = state;
                employeeUpdated.phone1 = phone1;
                employeeUpdated.phone2 = phone2;
                employeeUpdated.search = firstName + ' ' + lastName + ' ' + title + ' ' + email + ' ' + city + ' ' + state;

                app.employees.push(employeeUpdated);
                
                localStorage.setItem("employees", JSON.stringify(app.employees));
                console.log(app.employees);

                return employeeUpdated;
            }
        };

        return updateEmployee;

    }
};