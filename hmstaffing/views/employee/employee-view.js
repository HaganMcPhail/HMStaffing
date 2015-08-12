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
            $('.employee-popup').click(function () {
                openEmployeeModul();
            });
        }

        function bindDelete() {
            $('.delete').click(function () {
                var id = $(this).attr('data-id');
                deleteEmployeeEvent(id);
            });
        }

        function getEmployeeEvent(id) {
            $('body').trigger({
                type: 'getEmployee',
                id: id
            });
        }

        function bindGetEmployee() {
            $('.employee-popup').click(function () {
                var id = $(this).attr('id');
                getEmployeeEvent(id);
            });
        }

        function openEmployeeModul() {
            $('#myModal').modal('show');        
        }

        function bindEditEmployee(){
            $('.employee-edit-btn').click(function(){
                $('.edit-btn-container').hide();
                $('.save-btn-container').show();
            });
        }

        function bindUpdateEmployee(){
            $('.employee-save-btn').click(function(){
                $('.save-btn-container').hide();
                $('.edit-btn-container').show();
            });
        }

        function init() {
            bindOpenModule();
            bindGetEmployee();
            bindEditEmployee();
            bindUpdateEmployee();
        }

        employeeView.initEventHandlers = function() {
            init();
        };

        return employeeView;
    }
};