app.view.listView = {
    create: function (xhr, iViewData) {
        'use strict';
        var viewData = iViewData || {
                container_id: 'main',
                template: { url: 'views/list/list-view.html'},
                data: {
                    username: null,
                    password: null
                }
            },
            listView = Object.create(app.view.htmlView.create(xhr, viewData));

        // function displayMessage(message){
        //     $('span.user-message').text(message);
        // }

        // function sendLoginEvent(username, password) {
        //     $('#main').trigger({
        //         type: 'loginUser',
        //         username: username,
        //         password: password
        //     });
        // }

        function removeBackgroundImage() {
            $('html, body').css('background-image','none');
            $('html, body').css('background-color','#DDDDDD');
        }

        function bindSubmit() {
            $('#submit-login').click(function () {
                //alert('submit click');
                $('span.user-message').text('');
                sendLoginEvent(
                    $('#username').val(),
                    $('#password').val()
                );
            });
        }

        function init() {
            removeBackgroundImage();
            bindSubmit();
        }

        listView.initEventHandlers = function () {
            init();
        };

        // loginView.displayMessage = displayMessage;

        return listView;
    }
};