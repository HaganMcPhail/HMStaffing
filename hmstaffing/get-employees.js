app.usecase.getEmployees = {
    create: function () {
        var getEmployees;
        
        getEmployees = {
            execute: function (limit) {
                var employees, oddEven;

                for(var i=0;i<app.employees.length;i++){
                    if (i % 2 == 0) {
                        app.employees[i].oddEven = "even";
                    } else {
                        app.employees[i].oddEven = "odd";
                    }
                }   

                employees = app.employees.slice(0, 100);
                
                return employees;
            }
        };

        return getEmployees;

    }
};