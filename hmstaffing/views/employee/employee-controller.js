app.view.employeeController = {
    create: function (employeeView, updateEmployee, addEmployee) {
        var employeeController = Object.create(app.usecase.usecaseBase.create());

        function addEmployeeEventHandler(e){
            addEmployee.execute(e.id, e.firstName, e.lastName, e.title, e.email, e.city, e.state, e.phone1, e.phone2);
        }

        function updateEmployeeEventHandler(e){
            updateEmployee.execute(e.id, e.firstName, e.lastName, e.title, e.email, e.city, e.state, e.phone1, e.phone2);
        }

        function initEventHandlers() {
            employeeController.initEventHandler('addEmployee', addEmployeeEventHandler);
            employeeController.initEventHandler('updateEmployee', updateEmployeeEventHandler);
            // employeeController.initEventHandler('deleteEmployee', deleteEmployeeEventHandler);
        }

        employeeController.execute = function (employee) {
                if (employee) {
                    employeeView.getViewData().data.employee = employee;
                }
                employeeView.render();
                employeeView.initEventHandlers(employee);
                initEventHandlers();
        }

        return employeeController;
    }
};