app.view.listController = {
    create: function (listView, getEmployees, deleteEmployee) {
        var listController = Object.create(app.usecase.usecaseBase.create()),
            employees;

        function getEmployeeEventHandler(e) {
            var employeeReturned = getEmployee.execute(listView.getViewData().data.employees, e.id);
            //employeeController.execute(employeeReturned);
        }

        function deleteEmployeeEventHandler(e) {
            //alert('yes');
            deleteEmployee.execute(e.id);
            listController.execute();
        }

        function initEventHandlers() {
            // listController.initEventHandler('addEmployee', addEmployeeEventHandler);
            // listController.initEventHandler('searchEmployees', searchEmployeesEventHandler);
            listController.initEventHandler('deleteEmployee', deleteEmployeeEventHandler);
            //listController.initEventHandler('getEmployee', getEmployeeEventHandler);
        }

        listController.execute = function () {
                listView.getViewData().data.employees = getEmployees.execute(50);
                listView.render();
                listView.initEventHandlers();
                initEventHandlers();
        }

        return listController;
    }
};