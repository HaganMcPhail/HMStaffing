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

        function bindOpenModal() {
            $('.add-employee-btn').off().on('click', function(){
                employeeView.openAddEmployeeModule();
            });
        }

        function addEmployeeEvent(id, firstName, lastName, title, email, city, state, phone1, phone2) {
            $('#main').trigger({
                type: 'addEmployee',
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

        function bindDelete() {
            $('.delete').off().on('click', function () {
                var id = $(this).attr('data-id');
                deleteEmployeeEvent(id);
            });
        }

        function openEmployeeModule() {
            $('#myModal').modal('show');        
        }

        function bindEditEmployee(){
            $('.employee-edit-btn').off().on('click', function(){
                $('.edit-btn-container').hide();
                $('.save-btn-container').show();
                $('.name-hide').show();
                $('.form-employee input').prop('disabled', false);
            });
        }

        function bindAddEmployee(){
            console.log('*** bindAddEmployee ***');
            $('#addEmployee .employee-save-btn').off().on('click', function(){
                $('#addEmployee .save-btn-container').hide();
                $('#addEmployee .edit-btn-container').show();
                $('#addEmployee .name-hide').hide();
                var id = app.idIndex,
                    firstName = $('#addEmployee #firstName').val(),
                    lastName = $('#addEmployee #lastName').val(),
                    title = $('#addEmployee #title').val(),
                    email = $('#addEmployee #email').val(),
                    city = $('#addEmployee #city').val(),
                    state = $('#addEmployee #state').val(),
                    phone1 = $('#addEmployee #phone1').val(),
                    phone2 = $('#addEmployee #phone2').val()
                $('#addEmployee h2.employee-name').text(firstName + ' ' + lastName);
                addEmployeeEvent(id, firstName, lastName, title, email, city, state, phone1, phone2);
                $('#addEmployee').modal('hide');
            });
        }

        function bindUpdateEmployee(){
            $('#myModal .employee-save-btn').off().on('click', function(){
                $('#myModal .save-btn-container').hide();
                $('#myModal .edit-btn-container').show();
                $('#myModal .name-hide').hide();
                var id = $(this).attr('data-id'),
                    firstName = $('#myModal #firstName').val(),
                    lastName = $('#myModal #lastName').val(),
                    title = $('#myModal #title').val(),
                    email = $('#myModal #email').val(),
                    city = $('#myModal #city').val(),
                    state = $('#myModal #state').val(),
                    phone1 = $('#myModal #phone1').val(),
                    phone2 = $('#myModal #phone2').val()
                $('#myModal h2.employee-name').text(firstName + ' ' + lastName);
                updateEmployeeEvent(id, firstName, lastName, title, email, city, state, phone1, phone2);
                $('#myModal .form-employee input').prop('disabled', true);
            });
        }

        function init(employee) {
            bindEditEmployee();
            bindUpdateEmployee();
            bindAddEmployee();
            bindOpenModal();
            if (typeof employee != 'undefined'){
                openEmployeeModule();
            } else {
                employeeView.openAddEmployeeModule();
            }
        }


        employeeView.openAddEmployeeModule = function() {
            $('#addEmployee .name-hide').show();
            $('#addEmployee .form-employee input').prop('disabled', false);
            $('#addEmployee .save-btn-container').show();
            $('#addEmployee').modal('show');
        }

        employeeView.initEventHandlers = function(employee) {
            init(employee);
        };

        return employeeView;
    }
};