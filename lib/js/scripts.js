$(document).ready(function(){

    var e = {"id":1,"first_name":"Hagan","last_name":"McPhail","email":"haganmcphail@gmail.com","job_title":"Front-End Developer","city":"Dallas","state":"Texas","phone1":"(601) 517-5300","phone2":""}
    
    $('#first_name').val(e.first_name);
    $('#last_name').val(e.last_name);
    $('#job_title').val(e.job_title);
    $('#city').val(e.city);
    $('#state').val(e.state);
    $('#email').val(e.email);
    $('#phone1').val(e.phone1);
    $('#phone2').val(e.phone2);
    
    $('.employee-edit-btn').click(function(){
        $('.name-hide').show();
        $('form.form-employee input').removeAttr('disabled');
        $('.employee-edit-btn').hide();
        $('.employee-save-btn').show();
    }); 
    $('.employee-save-btn').click(function(){
        $('.name-hide').hide();
        $('form.form-employee input').attr('disabled', '');
        $('.employee-save-btn').hide();
        $('.employee-edit-btn').show();
    });  
});