app.usecase.addEmployee = {
    create: function () {
        var addEmployee;
        
        addEmployee = {
            execute: function (id, firstName, lastName, title, email, city, state, phone1, phone2) {
                var employeeAdded = {};

                employeeAdded.id = id;
                employeeAdded.first_name = firstName;
                employeeAdded.last_name = lastName;
                employeeAdded.job_title = title;
                employeeAdded.email = email;
                employeeAdded.city = city;
                employeeAdded.state = state;
                employeeAdded.phone1 = phone1;
                employeeAdded.phone2 = phone2;
                employeeAdded.search = firstName + ' ' + lastName + ' ' + title + ' ' + email + ' ' + city + ' ' + state;

                app.employees.unshift(employeeAdded);
                
                app.idIndex = id + 1;
                localStorage.setItem("idIndex", app.idIndex);
                localStorage.setItem("employees", JSON.stringify(app.employees));

                return employeeAdded;
            }
        };

        return addEmployee;

    }
};