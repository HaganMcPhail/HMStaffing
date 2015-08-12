app.usecase.loginUser = {
    create: function () {
        var usernames = ['haganmcphail@gmail.com', 'cedric@headspring.com', 'staff@hmstaffing.com'],
            loginUser;

        loginUser = {
            execute: function (username, password) {

                if (usernames.indexOf(username) !== -1) {
                    return true;
                } else {
                    return false;
                }
            }
        };

        return loginUser;

    }
};