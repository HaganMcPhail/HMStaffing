app.view.employeeView = {
    create: function (xhr, iViewData) {
        'use strict';
        var viewData = iViewData || {
                container_id: 'employee-view',
                template: { url: 'views/employee/employee-view.html'},
                data: { employee: null }
            },
            employeeView = Object.create(app.view.htmlView.create(xhr, viewData));

        function deleteEmployeeEvent(id) {
            $('#main').trigger({
                type: 'deleteEmployee',
                id : id
            });
        }

        function updateEmployeeEvent(id, firstName, lastName, title, email, city, state, phone1, phone2) {
            $('#main').trigger({
                type: 'updateEmployee',
                id : id,
                firstName: firstName,
                lastName: lastName,
                title: title,
                email: email,
                city: city,
                state: state,
                phone1: phone1,
                phone2: phone2
            });
        }

        function bindOpenModule() {
            $('.employee-popup').click(function () {
                openEmployeeModule();
            });
        }

        function bindDelete() {
            $('.delete').click(function () {
                var id = $(this).attr('data-id');
                deleteEmployeeEvent(id);
            });
        }

        function openEmployeeModule() {
            $('#myModal').modal('show');        
        }

        function bindEditEmployee(){
            $('.employee-edit-btn').click(function(){
                $('.edit-btn-container').hide();
                $('.save-btn-container').show();
                $('.name-hide').show();
                $('.form-employee input').prop('disabled', false);
            });
        }

        function bindUpdateEmployee(){
            $('.employee-save-btn').click(function(){
                $('.save-btn-container').hide();
                $('.edit-btn-container').show();
                $('.name-hide').hide();
                var id = $(this).attr('data-id'),
                    firstName = $('#firstName').val(),
                    lastName = $('#lastName').val(),
                    title = $('#title').val(),
                    email = $('#email').val(),
                    city = $('#city').val(),
                    state = $('#state').val(),
                    phone1 = $('#phone1').val(),
                    phone2 = $('#phone2').val()
                $('h2.employee-name').text(firstName + ' ' + lastName);
                updateEmployeeEvent(id, firstName, lastName, title, email, city, state, phone1, phone2);
                $('.form-employee input').prop('disabled', true);
            });
        }

        function init() {
            
            bindEditEmployee();
            bindUpdateEmployee();
            openEmployeeModule();
            
        }

        employeeView.getEmployeeUpdates = function(employee){

        }

        employeeView.initEventHandlers = function() {
            init();
        };

        return employeeView;
    }
};