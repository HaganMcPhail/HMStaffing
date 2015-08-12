app.view.listView = {
    create: function (xhr, iViewData) {
        'use strict';
        var viewData = iViewData || {
                container_id: 'list-view',
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

        function bindDeleteEmployee() {
            $('.delete').click(function () {
                var id = $(this).attr('data-id');
                deleteEmployeeEvent(id);
            });
        }

        function searchEmployeesEvent(search) {
            $('#main').trigger({
                type: 'searchEmployees',
                search : search
            });
        }

        function bindSearchEmployees() {
            $('.search button').click(function () {
                var search = $('.search input').val();
                console.log(search);
                if (search != ''){
                    searchEmployeesEvent(search);
                }
            });
            // $(".search input").keyup(function () {
            //     var search = $('.search input').val();
            //     console.log(search);
            //     if (search != ''){
            //         searchEmployeesEvent(search);
            //     }
            // });
        }

        function removeBackgroundImage() {
            $('html, body').css('background-image','none');
            $('html, body').css('background-color','#DDDDDD');
        }

        function init() {
            bindDeleteEmployee();
            bindSearchEmployees();
            removeBackgroundImage();
        }

        listView.initEventHandlers = function() {
            init();
        };

        return listView;
    }
};