app.usecase.loginUser = {
    create: function () {
        var usernames = ['haganmcphail@gmail.com', 'cedric@headspring.com', 'staff@hmstaffing.com'],
            loginUser;

        loginUser = {
            execute: function (username, password) {

                if (username != "" && password != "") {
                    return true;
                } else {
                    return false;
                }
            }
        };

        return loginUser;

    }
};