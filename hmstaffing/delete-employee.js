app.usecase.deleteEmployee = {
    create: function () {
        var deleteEmployee;
        
        deleteEmployee = {
            execute: function (searchID) {
                var deletedEmployee;
 
                for(var i=0;i<app.employees.length;i++){
                    if (app.employees[i].id == searchID) {
                        var splice = i;
                        deletedEmployee = app.employees[i];
                        break;
                    }
                }    

                app.employees.splice(splice, 1);
                localStorage.setItem("employees", JSON.stringify(app.employees));

                return deletedEmployee;
            }
        };

        return deleteEmployee;

    }
};