$(document).ready(function(){
    
    var employees = [{"id":11,"first_name":"Ruby","last_name":"Parker","email":"rparkera@jugem.jp","job_title":"Electrical Engineer","city":"Tulsa","state":"Oklahoma","phone1":"7-(154)652-3604"},
    {"id":12,"first_name":"Judith","last_name":"Hawkins","email":"jhawkinsb@netvibes.com","job_title":"Chemical Engineer","city":"Columbia","state":"South Carolina","phone1":"6-(381)453-0744"},
    {"id":13,"first_name":"Phillip","last_name":"Roberts","email":"probertsc@globo.com","job_title":"VP Marketing","city":"Palmdale","state":"California","phone1":"9-(947)281-7325","phone2":"4-(541)460-0675"},
    {"id":14,"first_name":"Billy","last_name":"Wallace","email":"bwallaced@oakley.com","job_title":"Programmer I","city":"Lancaster","state":"Pennsylvania","phone1":"4-(727)942-8473","phone2":"1-(423)528-8829"},
    {"id":15,"first_name":"Ruth","last_name":"White","email":"rwhitee@twitpic.com","job_title":"Sales Associate","city":"Montgomery","state":"Alabama","phone1":"5-(835)118-6098","phone2":"8-(771)925-0008"},
    {"id":16,"first_name":"Brandon","last_name":"Stanley","email":"bstanleyf@php.net","job_title":"Nuclear Power Engineer","city":"Philadelphia","state":"Pennsylvania","phone1":"1-(618)181-7975"},
    {"id":17,"first_name":"Aaron","last_name":"Rivera","email":"ariverag@unc.edu","job_title":"Chief Design Engineer","city":"Charlottesville","state":"Virginia","phone1":"3-(882)342-3490","phone2":"8-(038)877-4163"},
    {"id":18,"first_name":"Mark","last_name":"Vasquez","email":"mvasquezh@tuttocitta.it","job_title":"Technical Writer","city":"Topeka","state":"Kansas","phone1":"8-(042)218-2543"},
    {"id":19,"first_name":"Henry","last_name":"Franklin","email":"hfranklini@webs.com","job_title":"Office Assistant II","city":"Mountain View","state":"California","phone1":"0-(566)682-7794"},
    {"id":20,"first_name":"Jack","last_name":"Miller","email":"jmillerj@prlog.org","job_title":"Cost Accountant","city":"Montpelier","state":"Vermont","phone1":"0-(316)541-7011"}]

    for(i=0;i<employees.length;i++){
        var e = employees[i];
        var row;

        if(i % 2){row = 'even'}else{row = 'odd'}
        var str=e.email;
        var n=str.lastIndexOf("@");
        var str2 = str.substring(0,n)+"<wbr>"+str.substring(n);
        console.log(e.email);
        $('.employee-list').append(
            '<div class="row employee-record ' + row + '">'+
                '<div class="col-xs-11">'+
                    '<div class="row">'+
                        '<div class="col-xs-9 col-sm-4 col-lg-2">'+
                            '<div class="label-input">Name:</div>'+
                            '<div>' + e.first_name + ' ' + e.last_name + '</div>'+
                        '</div>'+
                        '<div class="col-xs-3 visible-xs">'+
                            '<div class="text-right"><i class="fa fa-trash-o"></i></div>'+
                        '</div>'+
                        '<div class="col-xs-12 col-sm-4 col-lg-2">'+
                            '<div class="label-input">Title:</div>'+
                            '<div>' + e.job_title + '</div>'+
                        '</div>'+
                        '<div class="col-xs-12 col-sm-4 col-lg-2">'+
                            '<div class="label-input">Email:</div>'+
                            '<div class="wrap">' + str2 + '</div>'+
                        '</div>'+
                        '<div class="col-xs-12 col-sm-4 col-lg-2">'+
                            '<div class="label-input">Phone:</div>'+
                            '<div>' + e.phone1 + '</div>'+
                        '</div>'+
                        '<div class="col-xs-6 col-sm-4 col-lg-2">'+
                            '<div class="label-input">City:</div>'+
                            '<div class="wrap">' + e.city + '</div>'+
                        '</div>'+
                        '<div class="col-xs-6 col-sm-4 col-lg-2">'+
                            '<div class="label-input">State:</div>'+
                            '<div class="wrap">' + e.state + '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="col-xs-1 hidden-xs">'+
                    '<div class="row">'+
                        '<div class="hidden-xs">'+
                            '<div class="text-right"><i class="fa fa-trash-o"></i></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'
        );
    }
});