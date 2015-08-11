app.view.loginController = {
    create: function (loginView, loginUser, listController) {
        var loginController = Object.create(app.usecase.usecaseBase.create());
        console.log(listController);

        function loginUserEventHandler(e) {
            if (loginUser.execute(e.username, e.password) === true) {
                console.log('login success');
                listController.execute();
            } else {
                loginView.displayMessage("Username and Password combination was not found");
                alert('login failed');
            }
        }

        function initEventHandlers() {
            loginController.initEventHandler('loginUser', loginUserEventHandler);
        }

        loginController.execute = function () {
            loginView.render();
            loginView.initEventHandlers();
            initEventHandlers();
        };

        return loginController;
    }
};