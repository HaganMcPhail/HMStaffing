app.usecase.updateEmployee = {
    create: function () {
        var updateEmployee;
        
        updateEmployee = {
            execute: function (employeeUpdated) {
 
                for(var i=0;i<app.employees.length;i++){
                    if (app.employees[i].id == employeeUpdated.id) {
                        var splice = i;
                        employeeUpdated = app.employees[i];
                        break;
                    }
                };

                app.employees.splice(splice, 1);

                employeeUpdated.search = employeeUpdated.first_name + ' ' + 
                    employeeUpdated.last_name + ' ' + 
                    employeeUpdated.job_title + ' ' + 
                    employeeUpdated.email + ' ' + 
                    employeeUpdated.city + ' ' + 
                    employeeUpdated.state;

                app.employees.unshift(employeeUpdated);
                
                localStorage.setItem("employees", JSON.stringify(app.employees));
                console.log(app.employees);

                return employeeUpdated;
            }
        };

        return updateEmployee;

    }
};