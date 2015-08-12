app.view.headerView = {
    create: function (xhr, iViewData) {
        'use strict';
        var viewData = iViewData || {
                container_id: 'main',
                template: { url: 'views/list/header-view.html'},
                data: {}
            },
            headerView = Object.create(app.view.htmlView.create(xhr, viewData));

        return headerView;
    }
};