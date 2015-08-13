app.view.loginController = {
    create: function (loginView, loginUser, headerController) {
        var loginController = Object.create(app.usecase.usecaseBase.create());

        function loginUserEventHandler(e) {
            if (loginUser.execute(e.username, e.password) === true) {
                headerController.execute();
            } else {
                loginView.displayMessage("Please Enter A Username and Password");
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