app.usecase.getEmployees = {
    create: function () {
        var getEmployees;
        
        getEmployees = {
            execute: function (limit) {
                return app.employees;
            }
        };

        return getEmployees;

    }
};