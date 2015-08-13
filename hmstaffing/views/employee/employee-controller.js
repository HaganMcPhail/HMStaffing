app.view.employeeController = {
    create: function (employeeView) {
        var employeeController = Object.create(app.usecase.usecaseBase.create());


        function initEventHandlers() {
            // employeeController.initEventHandler('addEmployee', addEmployeeEventHandler);
            // employeeController.initEventHandler('searchEmployees', searchEmployeesEventHandler);
            //employeeController.initEventHandler('deleteEmployee', deleteEmployeeEventHandler);
            //employeeController.initEventHandler('getEmployee', getEmployeeEventHandler);
        }

        employeeController.execute = function (employee) {
                console.log(employee);
                if (employee) {
                employeeView.getViewData().data.employee = employee;
            }
                employeeView.render();
                employeeView.initEventHandlers();
                //initEventHandlers();
        }

        return employeeController;
    }
};