
// for(var i=0;i<app.employees.length;i++){
//     app.employees[i].search = app.employees[i].first_name + ' ' + app.employees[i].last_name + ' ' + app.employees[i].job_title + ' ' + app.employees[i].email + ' ' + app.employees[i].city + ' ' + app.employees[i].state;
//     data.push(app.employees[i]);
// }
//console.log(app.employees);

var data = [], e = {},base,inc;

base = 16000
inc = (base + 4000);
// for(i=base;i<inc;i++){
//     e = employees[i];
//     data.push('{"id":'+(i+1)+',"first_name":"'+e.first_name+'","last_name":"'+e.last_name+'","email":"'+e.email+'","job_title":"'+e.job_title+'","city":"'+e.city+'","state":"'+e.state+'","phone1":"'+e.phone1+'","phone2":"'+""+'"}');
// }
for(var i=base;i<inc;i++){
    e = employees[i];
    var search = employees[i].first_name + ' ' + employees[i].last_name + ' ' + employees[i].job_title + ' ' + employees[i].email + ' ' + employees[i].city + ' ' + employees[i].state;
    data.push('{"id":'+(i+1)+',"first_name":"'+e.first_name+'","last_name":"'+e.last_name+'","email":"'+e.email+'","job_title":"'+e.job_title+'","city":"'+e.city+'","state":"'+e.state+'","phone1":"'+e.phone1+'","phone2":"'+e.phone2+'","search":"'+search+'"}');
}

var data = data;
var url = 'data:text/json;charset=utf8,' + encodeURIComponent(data);
window.open(url, '_blank');
window.focus();