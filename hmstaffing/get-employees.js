app.usecase.getEmployees = {
    create: function () {
        var getEmployees;
        
        getEmployees = {
            execute: function (limit) {
                var employees;

                // $.ajax({
                //       dataType: "jsonp",
                //       async: false,
                //       url: "http://www.haganmcphail.com/api.php?method=getAllEmployees&end="+limit+"&jsoncallback=?",
                //       success: function(data){
                //         employees = data;
                //       }
                //     });
                return app.employees;
            }
        };

        return getEmployees;

    }
};