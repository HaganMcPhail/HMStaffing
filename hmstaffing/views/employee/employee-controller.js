app.view.employeeController = {
    create: function (employeeView, updateEmployee, addEmployee) {
        var employeeController = Object.create(app.usecase.usecaseBase.create());

        function addEmployeeEventHandler(e){
            //console.log(e.employee);
            addEmployee.execute(e.employee);
        }

        function updateEmployeeEventHandler(e){
            updateEmployee.execute(e.employee);
        }

        function initEventHandlers() {
            employeeController.initEventHandler('addEmployee', addEmployeeEventHandler);
            employeeController.initEventHandler('updateEmployee', updateEmployeeEventHandler);
        }

        employeeController.renderView = function (employee) {
                if (employee) {
                    employeeView.getViewData().data.employee = employee;
                }
                employeeView.render();
                employeeView.initEventHandlers(employee);
        }

        employeeController.execute = function () {
                initEventHandlers();
        }

        return employeeController;
    }
};