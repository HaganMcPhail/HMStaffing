app.usecase.addEmployee = {
    create: function () {
        var addEmployee;
        
        addEmployee = {
            execute: function (employee) {

                employee.search = employee.first_name + ' ' + employee.last_name + ' ' + employee.title + ' ' + employee.email + ' ' + employee.city + ' ' + employee.state;

                app.employees.unshift(employee);
                
                app.idIndex = employee.id + 1;
                localStorage.setItem("idIndex", app.idIndex);
                localStorage.setItem("employees", JSON.stringify(app.employees));

                console.log(employee);

                return employee;
            }
        };

        return addEmployee;

    }
};