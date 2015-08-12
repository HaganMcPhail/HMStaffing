app.main.run = function () {
    'use strict';
    var loginController,
        xhr = app.entity.xhr.create(),
        webStorageCreator = app.entity.webStorage,
        storage = app.storage.employeeStorageAdapter.create(webStorageCreator),
        loginView = app.view.loginView.create(xhr),
        loginUser = app.usecase.loginUser.create(),
        listView = app.view.listView.create(xhr),
        // searchEmployees = app.usecase.searchEmployees.create(storage),
        deleteEmployee = app.usecase.deleteEmployee.create(),
        employeeView = app.view.employeeView.create(xhr),
        getEmployees = app.usecase.getEmployees.create(),
        getEmployee = app.usecase.getEmployee.create(),
        // updateEmployee = app.usecase.updateEmployee.create(storage),
        //employeeController = app.view.employeeController.create(
            //employeeView,
            //getEmployee
        //  updateEmployee,
        //  deleteEmployee
        //),
        listController = app.view.listController.create(
            listView,
            getEmployees,
            //employeeView,
            // searchEmployees,
            deleteEmployee
            //employeeController
            // employeeController
        );
    
    loginController = app.view.loginController.create(loginView, loginUser, listController, deleteEmployee);
    //employeeController = app.view.employeeController.create(employeeView, getEmployee);
    loginController.execute();
};