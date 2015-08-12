app.usecase.searchEmployees = {
    create: function () {
        var searchEmployees;
        
        searchEmployees = {
            execute: function (searchID) {
                app.results = [];

                for(var i=0;i<app.employees.length;i++){
                    if (app.employees[i].search.toLowerCase().indexOf(searchID.toLowerCase()) != -1) {
                        app.results.push(app.employees[i]);
                    }
                }    

                return app.results.slice(0, 100);
            }
        };

        return searchEmployees;

    }
};