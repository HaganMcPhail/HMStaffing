app.usecase.getEmployee = {
    create: function () {
        var getEmployee;
        
        getEmployee = {
            execute: function (employeeList, id) {
                var employeeReturned;

                employeeReturned = $.grep(employeeList, function(a) {
                    return a.id == id;
                });
                console.log(employeeReturned);
                return employeeReturned;
            }
        };

        return getEmployee;

    }
};