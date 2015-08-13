app.view.listController = {
    create: function (listView, getEmployees, getEmployee, searchEmployees, deleteEmployee, employeeController) {
        var listController = Object.create(app.usecase.usecaseBase.create()),
            employees;

        function getEmployeeEventHandler(e) {
            var employeeReturned = getEmployee.execute(listView.getViewData().data.employees, e.id);
            employeeController.renderView(employeeReturned[0]);
        }

        function getAddEmployeeClickEventHandler(){
            employeeController.renderView();   
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
            if(typeof app.results != 'undefined') {listView.triggerSearch(app.searchID)};
        }

        function initEventHandlers() {
            listController.initEventHandler('searchEmployees', searchEmployeesEventHandler);
            listController.initEventHandler('deleteEmployee', deleteEmployeeEventHandler);
            listController.initEventHandler('getEmployee', getEmployeeEventHandler);
            listController.initEventHandler('addEmployeeClick', getAddEmployeeClickEventHandler);
        }

        listController.execute = function () {
                employeeController.execute();
                listView.getViewData().data.employees = getEmployees.execute(75);
                listView.render();
                listView.initEventHandlers();
                initEventHandlers();
        }

        return listController;
    }
};