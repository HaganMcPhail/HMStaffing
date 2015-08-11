app.view.listController = {
    create: function (listView) {
        var listController = Object.create(app.usecase.usecaseBase.create());

        function addEmployeeEventHandler() {

        }   

        function searchEmployeesEventHandler() {

        }   

        function deleteEmployeeEventHandler() {

        }

        function getEmployeeEventHandler() {

        }

        function initEventHandlers() {
            // listController.initEventHandler('addEmployee', addEmployeeEventHandler);
            // listController.initEventHandler('searchEmployees', searchEmployeesEventHandler);
            // listController.initEventHandler('deleteEmployee', deleteEmployeeEventHandler);
            // listController.initEventHandler('getEmployee', getEmployeeEventHandler);
        }

        listController = {
            execute: function () {
                listView.render();
                listView.initEventHandlers();
                initEventHandlers();
            }
        };

        return listController;
    }
};