app.view.employeeView = {
    create: function (xhr, iViewData) {
        'use strict';
        var viewData = iViewData || {
                container_id: 'employee-view',
                template: { url: 'views/employee/employee-view.html'},
                data: { employee: [] }
            },
            employeeView = Object.create(app.view.htmlView.create(xhr, viewData));

        function deleteEmployeeEvent(id) {
            $('#main').trigger({
                type: 'deleteEmployee',
                id : id
            });
        }

        function bindOpenModule() {
            // $('.employee-popup').click(function () {
            //     employeeView.getViewData().data.employee = 10;
            //     openEmployeeModul();
            // });
        }

        function bindDelete() {
            $('.delete').click(function () {
                var id = $(this).attr('data-id');
                deleteEmployeeEvent(id);
            });
        }

        // function openEmployeeModul() {
        //     $('#myModal').modal('show');        
        // }

        function init() {
            bindOpenModule();
            //openEmployeeModul();
        }

        employeeView.initEventHandlers = function() {
            init();
        };

        return employeeView;
    }
};