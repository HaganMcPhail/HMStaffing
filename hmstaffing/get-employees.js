app.usecase.getEmployees = {
    create: function () {
        var getEmployees;
        
        getEmployees = {
            execute: function (limit) {
                var employees;

                employees = app.employees.slice(0,100);
                
                return employees;
            }
        };

        return getEmployees;

    }
};