app.view.headerController = {
    create: function (headerView, listController) {
        var headerController = Object.create(app.usecase.usecaseBase.create());

        function reloadDataEventHandler() {
            listController.execute();
        }

        function initEventHandlers() {
            loginController.initEventHandler('reloadData', reloadDataEventHandler);
        }

        headerController.execute = function () {
                headerView.render();
                headerView.init();
                listController.execute();
        }

        return headerController;
    }
};