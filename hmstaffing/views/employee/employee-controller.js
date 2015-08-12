app.view.employeeController = {
    create: function (employeeView, getEmployee) {
        var employeeController = Object.create(app.usecase.usecaseBase.create());

        function getEmployeeEventHandler(e) {
            // employeeView.getViewData().data.employee = getEmployee.execute(app.employees, e.id);
            // console.log(employeeView.getViewData().data.employee);
        }

        function initEventHandlers() {
            // employeeController.initEventHandler('addEmployee', addEmployeeEventHandler);
            // employeeController.initEventHandler('searchEmployees', searchEmployeesEventHandler);
            //employeeController.initEventHandler('deleteEmployee', deleteEmployeeEventHandler);
            employeeController.initEventHandler('getEmployee', getEmployeeEventHandler);
        }

        employeeController.execute = function () {
                //employeeView.getViewData().data.employee = employeeReturned;
                employeeView.render();
                employeeView.initEventHandlers();
                initEventHandlers();
        }

        return employeeController;
    }
};