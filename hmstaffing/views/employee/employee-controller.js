app.view.employeeController = {
    create: function (employeeView, updateEmployee) {
        var employeeController = Object.create(app.usecase.usecaseBase.create());


        function updateEmployeeEventHandler(e){
            //
            //employeeView.getEmployeeUpdates(employee);
            updateEmployee.execute(app.employees, e.id, e.firstName, e.lastName, e.title, e.email, e.city, e.state, e.phone1, e.phone2);
        }

        function initEventHandlers() {
            // employeeController.initEventHandler('addEmployee', addEmployeeEventHandler);
            employeeController.initEventHandler('updateEmployee', updateEmployeeEventHandler);
            // employeeController.initEventHandler('deleteEmployee', deleteEmployeeEventHandler);
        }

        employeeController.execute = function (employee) {
                if (employee) {
                    employeeView.getViewData().data.employee = employee;
                }
                employeeView.render();
                employeeView.initEventHandlers();
                initEventHandlers();
        }

        return employeeController;
    }
};