app.view.listController = {
    create: function (listView, getEmployees, getEmployee, searchEmployees, deleteEmployee, employeeController, addEmployee) {
        var listController = Object.create(app.usecase.usecaseBase.create()),
            employees;

        function getEmployeeEventHandler(e) {
            var employeeReturned = getEmployee.execute(listView.getViewData().data.employees, e.id);
            employeeController.execute(employeeReturned[0]);
        }

        function addEmployeeEventHandler() {
            //alert('win');
            //var employeeReturned = getEmployee.execute(listView.getViewData().data.employees, e.id);
            //employeeController.execute(employeeReturned);

        }

        function searchEmployeesEventHandler(e) {
            listView.getViewData().data.employees = searchEmployees.execute(e.search);
            listView.render();
            listView.initEventHandlers();
        }

        function deleteEmployeeEventHandler(e) {
            deleteEmployee.execute(e.id);
            listView.getViewData().data.employees = getEmployees.execute(75);
            listView.render();
            listView.initEventHandlers();
        }

        function initEventHandlers() {
            listController.initEventHandler('addEmployee', addEmployeeEventHandler);
            listController.initEventHandler('searchEmployees', searchEmployeesEventHandler);
            listController.initEventHandler('deleteEmployee', deleteEmployeeEventHandler);
            listController.initEventHandler('getEmployee', getEmployeeEventHandler);
        }

        listController.execute = function () {
                listView.getViewData().data.employees = getEmployees.execute(75);
                listView.render();
                listView.initEventHandlers();
                initEventHandlers();
        }

        return listController;
    }
};