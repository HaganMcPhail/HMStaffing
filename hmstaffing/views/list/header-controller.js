app.view.headerController = {
    create: function (headerView, listController) {
        var headerController = Object.create(app.usecase.usecaseBase.create());

        headerController.execute = function () {
                headerView.render();
                headerView.init();
                listController.execute();
        }

        return headerController;
    }
};