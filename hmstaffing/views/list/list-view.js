app.view.listView = {
    create: function (xhr, iViewData) {
        'use strict';
        var viewData = iViewData || {
                container_id: 'main',
                template: { url: 'views/list/list-view.html'},
                data: { employees: [] }
            },
            listView = Object.create(app.view.htmlView.create(xhr, viewData));

        function deleteEmployeeEvent(id) {
            $('#main').trigger({
                type: 'deleteEmployee',
                id : id
            });
        }

        function bindDelete() {
            $('.delete').click(function () {
                var id = $(this).attr('data-id');
                deleteEmployeeEvent(id);
            });
        }

        function removeBackgroundImage() {
            $('html, body').css('background-image','none');
            $('html, body').css('background-color','#DDDDDD');
        }

        function init() {
            bindDelete();
            //bindGetEmployee();
            removeBackgroundImage();
        }

        listView.initEventHandlers = function() {
            init();
        };

        return listView;
    }
};