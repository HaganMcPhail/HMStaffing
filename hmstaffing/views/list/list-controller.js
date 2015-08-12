app.view.listController = {
    create: function (listView, getEmployees) {
        var listController = Object.create(app.usecase.usecaseBase.create()),
            employees;

        function deleteEmployeeEventHandler(e) {
            //console.log(e.id);
            $.getJSON("http://www.haganmcphail.com/api.php?method=deleteEmployee&id="+e.id+"&jsoncallback=?",
                function(){
                $('div#'+e.id).hide();
            });
        }

        function getEmployeeEventHandler() {
            employees = getEmployees.execute(50);
            displayEmployees(employees);
            listView.bindDelete();
            listView.bindGetEmployee();    
        }

        function initEventHandlers() {
            // listController.initEventHandler('addEmployee', addEmployeeEventHandler);
            // listController.initEventHandler('searchEmployees', searchEmployeesEventHandler);
            listController.initEventHandler('deleteEmployee', deleteEmployeeEventHandler);
            listController.initEventHandler('getEmployee', getEmployeeEventHandler);
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