app.view.loginView = {
    create: function (xhr, iViewData) {
        'use strict';
        var viewData = iViewData || {
                container_id: 'main',
                template: { url: 'views/login/login-view.html'},
                data: {
                    username: null,
                    password: null
                }
            },
            loginView = Object.create(app.view.htmlView.create(xhr, viewData));

        function displayMessage(message){
            $('span.user-message').text(message);
        }

        function sendLoginEvent(username, password) {
            $('#main').trigger({
                type: 'loginUser',
                username: username,
                password: password
            });
        }

        function bindSubmit() {
            $('.popup-container').click(function () {
                //alert('submit click');
                $('span.user-message').text('');
                sendLoginEvent(
                    $('#username').val(),
                    $('#password').val()
                );
            });
        }

        function init() {
            bindSubmit();
        }

        loginView.initEventHandlers = function () {
            init();
        };

        loginView.displayMessage = displayMessage;

        return loginView;
    }
};