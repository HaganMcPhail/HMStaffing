app.view.listController = {
    create: function (listView, getEmployees, searchEmployees, deleteEmployee, employeeController) {
        var listController = Object.create(app.usecase.usecaseBase.create()),
            employees;

        function getEmployeeEventHandler(e) {
            var employeeReturned = getEmployee.execute(listView.getViewData().data.employees, e.id);
            //employeeController.execute(employeeReturned);
        }

        function searchEmployeesEventHandler(e) {
            listView.getViewData().data.employees = searchEmployees.execute(e.search);
            listView.render(app.results);
            listView.initEventHandlers();
        }

        function deleteEmployeeEventHandler(e) {
            //alert('yes');
            deleteEmployee.execute(e.id);
            if (typeof app.results !== 'undefined'){
                listView.getViewData().data.employees = app.results;
                listView.render(app.results);
            } else {
                listView.getViewData().data.employees = getEmployees.execute(75);
                listView.render();
            }
            listView.initEventHandlers();
        }

        function initEventHandlers() {
            // listController.initEventHandler('addEmployee', addEmployeeEventHandler);
            listController.initEventHandler('searchEmployees', searchEmployeesEventHandler);
            listController.initEventHandler('deleteEmployee', deleteEmployeeEventHandler);
            //listController.initEventHandler('getEmployee', getEmployeeEventHandler);
        }

        listController.execute = function () {
                listView.getViewData().data.employees = getEmployees.execute(75);
                listView.render();
                listView.initEventHandlers();
                initEventHandlers();
                employeeController.execute();
        }

        return listController;
    }
};