app.view.employeeController = {
    create: function (employeeView) {
        var employeeController = Object.create(app.usecase.usecaseBase.create());

        function getEmployeeEventHandler(e) {
            
        }

        function initEventHandlers() {
            // employeeController.initEventHandler('addEmployee', addEmployeeEventHandler);
            // employeeController.initEventHandler('searchEmployees', searchEmployeesEventHandler);
            //employeeController.initEventHandler('deleteEmployee', deleteEmployeeEventHandler);
            employeeController.initEventHandler('getEmployee', getEmployeeEventHandler);
        }

        employeeController.execute = function (employeeReturned) {

                employeeView.getViewData().data.employee = employeeReturned;
                employeeView.render();
                employeeView.initEventHandlers();
                initEventHandlers();
        }

        return employeeController;
    }
};