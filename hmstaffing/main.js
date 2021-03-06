app.main.run = function () {
    'use strict';
    var loginController,
        xhr = app.entity.xhr.create(),
        webStorageCreator = app.entity.webStorage,
        storage = app.storage.employeeStorageAdapter.create(webStorageCreator),
        loginView = app.view.loginView.create(xhr),
        headerView = app.view.headerView.create(xhr),
        loginUser = app.usecase.loginUser.create(),
        listView = app.view.listView.create(xhr),
        searchEmployees = app.usecase.searchEmployees.create(),
        addEmployee = app.usecase.addEmployee.create(),
        deleteEmployee = app.usecase.deleteEmployee.create(),
        employeeView = app.view.employeeView.create(xhr),
        getEmployees = app.usecase.getEmployees.create(),
        getEmployee = app.usecase.getEmployee.create(),
        updateEmployee = app.usecase.updateEmployee.create(storage),
        employeeController = app.view.employeeController.create(
            employeeView,
            updateEmployee,
            addEmployee,
            deleteEmployee
        ),
        listController = app.view.listController.create(
            listView,
            getEmployees,
            getEmployee,
            searchEmployees,
            deleteEmployee,
            employeeController,
            addEmployee
        ),
        headerController = app.view.headerController.create(
            headerView,
            listController
        );
    
    loginController = app.view.loginController.create(loginView, loginUser, headerController, deleteEmployee);
    employeeController = app.view.employeeController.create(employeeView, updateEmployee, addEmployee, deleteEmployee);
    loginController.execute();
};