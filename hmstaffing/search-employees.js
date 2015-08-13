app.usecase.searchEmployees = {
    create: function () {
        var searchEmployees;
        
        searchEmployees = {
            execute: function (searchID) {
                app.results = [];
                app.searchID = searchID;

                for(var i=0;i<app.employees.length;i++){
                    if (app.employees[i].search.toLowerCase().indexOf(searchID.toLowerCase()) != -1) {
                        app.results.push(app.employees[i]);
                    }
                }    

                app.results.slice(0, 100);

                for(var i=0;i<app.results.length;i++){
                    if (i % 2 == 0) {
                        app.results[i].oddEven = "even";
                    } else {
                        app.results[i].oddEven = "odd";
                    }
                }

                return app.results;
            }
        };

        return searchEmployees;

    }
};