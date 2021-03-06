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

        function bindAddEmployeeClick() {
            $('.add-employee-btn').click(function () {
                addEmployeeClick();
            });
        }

        function addEmployeeClick(){
            $('#main').trigger({
                type: 'addEmployeeClick'
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
                $(this).prop('disabled', true);
                searchEmployeesEvent(search);
            });
            $(".search input").keyup(function(event){
                if(event.keyCode == 13){
                    var search = $('.search input').val();
                    $('.search button').prop('disabled', true);
                    searchEmployeesEvent(search);
                }
            });
        }

        function removeBackgroundImage() {
            $('html, body').css('background-image','none');
            $('html, body').css('background-color','#DDDDDD');
        }

        function init() {

            $('.search button').prop('disabled', false);
            bindDeleteEmployee();
            bindSearchEmployees();
            bindAddEmployeeClick();
            bindGetEmployee();
            removeBackgroundImage();
        }

        listView.triggerSearch = function(searchID){
            searchEmployeesEvent(searchID);
        }

        listView.initEventHandlers = function() {
            init();
        };

        return listView;
    }
};