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
    {"id":20,"first_name":"Jack","last_name":"Miller","email":"jmillerj@prlog.org","job_title":"Cost Accountant","city":"Montpelier","state":"Vermont","phone1":"0-(316)541-7011"},
    {"id":620,"first_name":"Maria","last_name":"Harrison","email":"mharrisonh7@weather.com","job_title":"General Manager","city":"El Paso","state":"Texas","phone1":"5-(255)218-8120"},
    {"id":621,"first_name":"Stephen","last_name":"Nichols","email":"snicholsh8@t-online.de","job_title":"VP Quality Control","city":"Birmingham","state":"Alabama","phone1":"1-(241)830-9331","phone2":"5-(155)074-9179"},
    {"id":622,"first_name":"Aaron","last_name":"Chavez","email":"achavezh9@weibo.com","job_title":"Assistant Media Planner","city":"Grand Rapids","state":"Michigan","phone1":"8-(980)764-8536"},
    {"id":623,"first_name":"Linda","last_name":"Peterson","email":"lpetersonha@desdev.cn","job_title":"Safety Technician IV","city":"Dayton","state":"Ohio","phone1":"8-(194)857-6163"},
    {"id":624,"first_name":"Julie","last_name":"Morales","email":"jmoraleshb@weebly.com","job_title":"Financial Advisor","city":"Mesa","state":"Arizona","phone1":"3-(477)007-7154"},
    {"id":625,"first_name":"Gregory","last_name":"Fernandez","email":"gfernandezhc@state.gov","job_title":"Account Coordinator","city":"Wilmington","state":"Delaware","phone1":"5-(967)967-7938"},
    {"id":626,"first_name":"Keith","last_name":"Stevens","email":"kstevenshd@indiatimes.com","job_title":"Executive Secretary","city":"Phoenix","state":"Arizona","phone1":"1-(563)527-0742","phone2":"1-(308)318-0849"},
    {"id":627,"first_name":"Ruby","last_name":"Collins","email":"rcollinshe@va.gov","job_title":"Budget/Accounting Analyst II","city":"Saint Paul","state":"Minnesota","phone1":"6-(085)449-9132","phone2":"8-(569)663-8915"},
    {"id":628,"first_name":"Karen","last_name":"Stanley","email":"kstanleyhf@ning.com","job_title":"Internal Auditor","city":"Houston","state":"Texas","phone1":"0-(050)652-2430"},
    {"id":629,"first_name":"Betty","last_name":"Frazier","email":"bfrazierhg@comcast.net","job_title":"Speech Pathologist","city":"Stockton","state":"California","phone1":"3-(062)165-7774","phone2":"7-(126)796-0058"},
    {"id":630,"first_name":"Alan","last_name":"Carpenter","email":"acarpenterhh@pen.io","job_title":"Software Engineer III","city":"Houston","state":"Texas","phone1":"1-(075)903-8870","phone2":"8-(253)137-9855"},
    {"id":631,"first_name":"Catherine","last_name":"Carter","email":"ccarterhi@ning.com","job_title":"Actuary","city":"San Jose","state":"California","phone1":"9-(352)404-5978","phone2":"2-(060)631-2620"},
    {"id":632,"first_name":"Rebecca","last_name":"Williamson","email":"rwilliamsonhj@blinklist.com","job_title":"VP Sales","city":"Atlanta","state":"Georgia","phone1":"3-(929)036-5744"},
    {"id":633,"first_name":"Ronald","last_name":"Cunningham","email":"rcunninghamhk@ft.com","job_title":"Payment Adjustment Coordinator","city":"Springfield","state":"Massachusetts","phone1":"4-(038)601-8661","phone2":"3-(018)622-5002"},
    {"id":634,"first_name":"Frances","last_name":"Gray","email":"fgrayhl@theatlantic.com","job_title":"VP Marketing","city":"Tucson","state":"Arizona","phone1":"6-(545)599-1662"},
    {"id":635,"first_name":"Henry","last_name":"Chapman","email":"hchapmanhm@arstechnica.com","job_title":"Mechanical Systems Engineer","city":"Detroit","state":"Michigan","phone1":"0-(036)702-7699","phone2":"1-(450)446-7218"},
    {"id":636,"first_name":"Arthur","last_name":"Day","email":"adayhn@dmoz.org","job_title":"Senior Cost Accountant","city":"Houston","state":"Texas","phone1":"3-(145)403-5156","phone2":"6-(921)177-5153"},
    {"id":637,"first_name":"Ronald","last_name":"Wagner","email":"rwagnerho@bbc.co.uk","job_title":"Financial Analyst","city":"Huntington","state":"West Virginia","phone1":"9-(397)891-3841"},
    {"id":638,"first_name":"Donald","last_name":"Gonzales","email":"dgonzaleshp@acquirethisname.com","job_title":"Social Worker","city":"Mesquite","state":"Texas","phone1":"9-(678)411-1338"},
    {"id":639,"first_name":"Mary","last_name":"Stewart","email":"mstewarthq@un.org","job_title":"Quality Engineer","city":"Scottsdale","state":"Arizona","phone1":"5-(086)532-3731","phone2":"4-(250)932-3752"},
    {"id":640,"first_name":"Michelle","last_name":"Hunt","email":"mhunthr@people.com.cn","job_title":"Chief Design Engineer","city":"Brooklyn","state":"New York","phone1":"7-(085)044-3723"},
    {"id":641,"first_name":"Ashley","last_name":"Weaver","email":"aweaverhs@theatlantic.com","job_title":"Account Executive","city":"Indianapolis","state":"Indiana","phone1":"4-(171)505-2701"},
    {"id":642,"first_name":"Sharon","last_name":"Crawford","email":"scrawfordht@aboutads.info","job_title":"Electrical Engineer","city":"El Paso","state":"Texas","phone1":"1-(402)532-1570","phone2":"1-(160)791-9524"},
    {"id":643,"first_name":"Debra","last_name":"Oliver","email":"doliverhu@army.mil","job_title":"Chemical Engineer","city":"Denver","state":"Colorado","phone1":"6-(257)397-6037"},
    {"id":644,"first_name":"Christopher","last_name":"Harvey","email":"charveyhv@examiner.com","job_title":"Assistant Manager","city":"Kansas City","state":"Kansas","phone1":"8-(936)392-1907"},
    {"id":645,"first_name":"Jennifer","last_name":"Edwards","email":"jedwardshw@blinklist.com","job_title":"Nuclear Power Engineer","city":"West Palm Beach","state":"Florida","phone1":"7-(335)808-0489"},
    {"id":646,"first_name":"Steven","last_name":"Ellis","email":"sellishx@tripod.com","job_title":"Graphic Designer","city":"Fargo","state":"North Dakota","phone1":"6-(572)416-5453"},
    {"id":647,"first_name":"Maria","last_name":"Thomas","email":"mthomashy@pen.io","job_title":"Project Manager","city":"Helena","state":"Montana","phone1":"7-(396)356-5087"},
    {"id":648,"first_name":"Ann","last_name":"Fuller","email":"afullerhz@google.cn","job_title":"Technical Writer","city":"Atlanta","state":"Georgia","phone1":"6-(903)473-0649"},
    {"id":649,"first_name":"Teresa","last_name":"Payne","email":"tpaynei0@geocities.jp","job_title":"Software Test Engineer IV","city":"Pittsburgh","state":"Pennsylvania","phone1":"8-(223)580-5410"},
    {"id":650,"first_name":"Earl","last_name":"Mills","email":"emillsi1@yahoo.co.jp","job_title":"Analyst Programmer","city":"New York City","state":"New York","phone1":"5-(230)830-8604"},
    {"id":651,"first_name":"Ann","last_name":"Lane","email":"alanei2@wp.com","job_title":"Assistant Professor","city":"Fort Lauderdale","state":"Florida","phone1":"4-(102)665-8846"},
    {"id":652,"first_name":"Eric","last_name":"Dunn","email":"edunni3@newyorker.com","job_title":"VP Sales","city":"Orlando","state":"Florida","phone1":"4-(681)879-0509"},
    {"id":653,"first_name":"Nicole","last_name":"West","email":"nwesti4@dot.gov","job_title":"Research Nurse","city":"Dallas","state":"Texas","phone1":"3-(688)575-9139"},
    {"id":654,"first_name":"Marilyn","last_name":"Moore","email":"mmoorei5@zimbio.com","job_title":"Environmental Tech","city":"Largo","state":"Florida","phone1":"6-(488)408-2878"},
    {"id":655,"first_name":"Deborah","last_name":"Marshall","email":"dmarshalli6@ovh.net","job_title":"Tax Accountant","city":"Lakewood","state":"Washington","phone1":"9-(504)029-8912"},
    {"id":656,"first_name":"Mark","last_name":"Dunn","email":"mdunni7@photobucket.com","job_title":"Systems Administrator IV","city":"Peoria","state":"Illinois","phone1":"2-(167)109-7886","phone2":"2-(449)248-7893"},
    {"id":657,"first_name":"Virginia","last_name":"Jackson","email":"vjacksoni8@java.com","job_title":"Chemical Engineer","city":"Springfield","state":"Illinois","phone1":"3-(045)818-3912"},
    {"id":658,"first_name":"Terry","last_name":"Williams","email":"twilliamsi9@washingtonpost.com","job_title":"Cost Accountant","city":"Washington","state":"District of Columbia","phone1":"6-(835)049-4711"},
    {"id":659,"first_name":"Aaron","last_name":"Johnson","email":"ajohnsonia@fema.gov","job_title":"Design Engineer","city":"Springfield","state":"Massachusetts","phone1":"7-(641)757-3170"},
    {"id":660,"first_name":"Harry","last_name":"Johnson","email":"hjohnsonib@clickbank.net","job_title":"Nurse Practicioner","city":"Mesquite","state":"Texas","phone1":"8-(042)848-3151","phone2":"9-(932)338-6647"},
    {"id":661,"first_name":"Albert","last_name":"Stephens","email":"astephensic@nasa.gov","job_title":"Nurse","city":"Saint Petersburg","state":"Florida","phone1":"8-(461)515-6153","phone2":"7-(374)062-6572"},
    {"id":662,"first_name":"Sharon","last_name":"Jenkins","email":"sjenkinsid@youku.com","job_title":"Nurse Practicioner","city":"Columbia","state":"Missouri","phone1":"2-(570)474-0532","phone2":"5-(559)224-2093"},
    {"id":663,"first_name":"Jennifer","last_name":"Hawkins","email":"jhawkinsie@reuters.com","job_title":"Paralegal","city":"Albuquerque","state":"New Mexico","phone1":"6-(331)422-3253"},
    {"id":664,"first_name":"Stephanie","last_name":"Ortiz","email":"sortizif@apple.com","job_title":"Registered Nurse","city":"Albuquerque","state":"New Mexico","phone1":"3-(309)713-0789","phone2":"3-(458)617-5397"},
    {"id":665,"first_name":"Keith","last_name":"Reed","email":"kreedig@utexas.edu","job_title":"VP Accounting","city":"Las Vegas","state":"Nevada","phone1":"6-(301)788-4355","phone2":"8-(314)265-7558"},
    {"id":666,"first_name":"Edward","last_name":"Tucker","email":"etuckerih@tinyurl.com","job_title":"Web Developer IV","city":"Rochester","state":"New York","phone1":"6-(696)953-7196","phone2":"2-(867)109-0922"},
    {"id":667,"first_name":"Bobby","last_name":"Willis","email":"bwillisii@jalbum.net","job_title":"Sales Associate","city":"Chesapeake","state":"Virginia","phone1":"5-(656)457-2439","phone2":"7-(989)005-4578"},
    {"id":668,"first_name":"Mildred","last_name":"Carpenter","email":"mcarpenterij@acquirethisname.com","job_title":"Legal Assistant","city":"Albuquerque","state":"New Mexico","phone1":"9-(880)793-1545","phone2":"0-(768)477-1246"},
    {"id":669,"first_name":"Jennifer","last_name":"Snyder","email":"jsnyderik@alexa.com","job_title":"Chief Design Engineer","city":"Amarillo","state":"Texas","phone1":"0-(628)379-7403"},
    {"id":670,"first_name":"Lori","last_name":"Carroll","email":"lcarrollil@zdnet.com","job_title":"Analog Circuit Design manager","city":"Denver","state":"Colorado","phone1":"2-(327)716-8540"},
    {"id":671,"first_name":"Heather","last_name":"Welch","email":"hwelchim@mlb.com","job_title":"Payment Adjustment Coordinator","city":"Macon","state":"Georgia","phone1":"7-(067)541-9729"},
    {"id":672,"first_name":"Melissa","last_name":"Perkins","email":"mperkinsin@etsy.com","job_title":"Staff Accountant IV","city":"Madison","state":"Wisconsin","phone1":"9-(307)025-8533","phone2":"6-(609)585-9502"},
    {"id":673,"first_name":"Maria","last_name":"Burton","email":"mburtonio@amazon.co.uk","job_title":"Project Manager","city":"Jackson","state":"Mississippi","phone1":"2-(436)814-3014"},
    {"id":674,"first_name":"Catherine","last_name":"Ray","email":"crayip@indiegogo.com","job_title":"Professor","city":"Amarillo","state":"Texas","phone1":"7-(256)443-1170","phone2":"6-(102)329-0859"},
    {"id":675,"first_name":"Anne","last_name":"Moreno","email":"amorenoiq@thetimes.co.uk","job_title":"Director of Sales","city":"Chicago","state":"Illinois","phone1":"6-(768)561-3790","phone2":"8-(336)551-8407"},
    {"id":676,"first_name":"Lisa","last_name":"Owens","email":"lowensir@webnode.com","job_title":"Geologist IV","city":"Decatur","state":"Georgia","phone1":"2-(675)647-2341"},
    {"id":677,"first_name":"Aaron","last_name":"Carroll","email":"acarrollis@usatoday.com","job_title":"Account Coordinator","city":"Tucson","state":"Arizona","phone1":"2-(766)440-7758"},
    {"id":678,"first_name":"Irene","last_name":"Ward","email":"iwardit@alexa.com","job_title":"Compensation Analyst","city":"Duluth","state":"Minnesota","phone1":"4-(000)375-1378","phone2":"2-(929)511-7008"},
    {"id":679,"first_name":"Lawrence","last_name":"Sanchez","email":"lsancheziu@jimdo.com","job_title":"VP Accounting","city":"Gadsden","state":"Alabama","phone1":"9-(474)971-7651"},
    {"id":680,"first_name":"Laura","last_name":"Knight","email":"lknightiv@umn.edu","job_title":"Staff Scientist","city":"San Bernardino","state":"California","phone1":"0-(968)864-1322"},
    {"id":681,"first_name":"Juan","last_name":"Fuller","email":"jfulleriw@admin.ch","job_title":"Data Coordiator","city":"Tacoma","state":"Washington","phone1":"9-(006)229-2625"},
    {"id":682,"first_name":"Betty","last_name":"Brooks","email":"bbrooksix@ed.gov","job_title":"Executive Secretary","city":"Austin","state":"Texas","phone1":"6-(421)998-6922"},
    {"id":683,"first_name":"Robert","last_name":"Hudson","email":"rhudsoniy@posterous.com","job_title":"Administrative Assistant II","city":"Louisville","state":"Kentucky","phone1":"4-(563)977-9622"},
    {"id":684,"first_name":"David","last_name":"Porter","email":"dporteriz@cnet.com","job_title":"Recruiter","city":"Petaluma","state":"California","phone1":"8-(107)445-3916"},
    {"id":685,"first_name":"Michael","last_name":"Hudson","email":"mhudsonj0@archive.org","job_title":"Analog Circuit Design manager","city":"South Bend","state":"Indiana","phone1":"6-(447)018-8765"},
    {"id":686,"first_name":"Kimberly","last_name":"Warren","email":"kwarrenj1@amazon.co.uk","job_title":"Cost Accountant","city":"Washington","state":"District of Columbia","phone1":"2-(054)711-2116"},
    {"id":687,"first_name":"Jesse","last_name":"James","email":"jjamesj2@hubpages.com","job_title":"Professor","city":"Tyler","state":"Texas","phone1":"4-(638)939-5934","phone2":"4-(292)890-5204"},
    {"id":688,"first_name":"Bobby","last_name":"Carter","email":"bcarterj3@usnews.com","job_title":"Design Engineer","city":"Grand Rapids","state":"Michigan","phone1":"5-(172)118-0701"},
    {"id":689,"first_name":"Jeremy","last_name":"Watson","email":"jwatsonj4@phpbb.com","job_title":"Senior Sales Associate","city":"El Paso","state":"Texas","phone1":"2-(792)212-4270","phone2":"4-(747)942-0055"},
    {"id":690,"first_name":"Benjamin","last_name":"Gutierrez","email":"bgutierrezj5@i2i.jp","job_title":"Programmer III","city":"Eugene","state":"Oregon","phone1":"2-(669)895-2254"},
    {"id":691,"first_name":"Chris","last_name":"Patterson","email":"cpattersonj6@slashdot.org","job_title":"Programmer IV","city":"Washington","state":"District of Columbia","phone1":"0-(340)629-6734","phone2":"0-(968)812-5985"},
    {"id":692,"first_name":"Benjamin","last_name":"Welch","email":"bwelchj7@pagesperso-orange.fr","job_title":"Structural Engineer","city":"Peoria","state":"Arizona","phone1":"9-(504)081-4380"},
    {"id":693,"first_name":"Katherine","last_name":"Stanley","email":"kstanleyj8@sohu.com","job_title":"VP Sales","city":"Santa Monica","state":"California","phone1":"3-(167)828-4430"},
    {"id":694,"first_name":"Melissa","last_name":"George","email":"mgeorgej9@bloglines.com","job_title":"Pharmacist","city":"Texarkana","state":"Texas","phone1":"2-(329)862-7358"},
    {"id":695,"first_name":"Steve","last_name":"Day","email":"sdayja@i2i.jp","job_title":"Community Outreach Specialist","city":"Colorado Springs","state":"Colorado","phone1":"9-(303)846-8411"},
    {"id":696,"first_name":"Eugene","last_name":"George","email":"egeorgejb@apache.org","job_title":"Account Executive","city":"Peoria","state":"Illinois","phone1":"7-(406)902-0662"},
    {"id":697,"first_name":"Carlos","last_name":"Turner","email":"cturnerjc@chron.com","job_title":"Engineer IV","city":"Flint","state":"Michigan","phone1":"6-(901)295-6905","phone2":"7-(075)653-4812"},
    {"id":698,"first_name":"Roger","last_name":"Alvarez","email":"ralvarezjd@hao123.com","job_title":"Project Manager","city":"Colorado Springs","state":"Colorado","phone1":"4-(669)293-3383"},
    {"id":699,"first_name":"Bobby","last_name":"Sanders","email":"bsandersje@opensource.org","job_title":"Physical Therapy Assistant","city":"Des Moines","state":"Iowa","phone1":"8-(031)305-2808","phone2":"7-(575)907-6386"},
    {"id":700,"first_name":"Melissa","last_name":"Perkins","email":"mperkinsjf@amazon.co.jp","job_title":"Food Chemist","city":"Montgomery","state":"Alabama","phone1":"9-(808)621-7000"}]

    //v

    function showSavedDisplay(){
        $('.form-employee h2').text($('#first_name').val() + ' ' + $('#last_name').val());
    }

    function resetPopup(){
        //$('.form')
    }

    function initialDisplay(result){
        $('.form-employee h2').html(result.first_name + ' ' + result.last_name);
        $('#first_name').val(result.first_name);
        $('#last_name').val(result.last_name);
        $('#job_title').val(result.job_title);
        $('#city').val(result.city);
        $('#state').val(result.state);
        $('#email').val(result.email);
        $('#phone1').val(result.phone1);
        $('#phone2').val(result.phone2);
    }
    
    $('.employee-edit-btn').click(function(){
        $('.name-hide').show();
        $('form.form-employee input').removeAttr('disabled');
        $('.edit-btn-container').hide();
        $('.save-btn-container').show();
    }); 
    $('.employee-save-btn').click(function(){
        $('.name-hide').hide();
        $('form.form-employee input').attr('disabled', '');
        $('.save-btn-container').hide();
        $('.edit-btn-container').show();
        showSavedDisplay();
    });

    //initialDisplay();

    

    for(i=0;i<employees.length;i++){
        var e = employees[i];
        var row;

        if(i % 2){row = 'even'}else{row = 'odd'}
        var str=e.email;
        var n=str.lastIndexOf("@");
        var str2 = str.substring(0,n)+"<wbr>"+str.substring(n);
        var phn=e.phone1;
        var phone = phn.substring(2);

        $('.employee-list').append(
            '<div class="row employee-record ' + row + '">'+
                '<div class="col-xs-11 employee-popup" data-id="' + e.id + '">'+
                    '<div class="row">'+
                        '<div class="col-xs-9 col-sm-4 col-lg-2">'+
                            '<div class="label-input hidden-lg">Name:</div>'+
                            '<div>' + e.first_name + ' ' + e.last_name + '</div>'+
                        '</div>'+
                        '<div class="col-xs-3 visible-xs">'+
                            '<div class="text-right"><i class="fa fa-trash-o"></i></div>'+
                        '</div>'+
                        '<div class="col-xs-12 col-sm-4 col-lg-2">'+
                            '<div class="label-input hidden-lg">Title:</div>'+
                            '<div>' + e.job_title + '</div>'+
                        '</div>'+
                        '<div class="col-xs-12 col-sm-4 col-lg-2">'+
                            '<div class="label-input hidden-lg">Email:</div>'+
                            '<div class="wrap">' + str2 + '</div>'+
                        '</div>'+
                        '<div class="col-xs-12 col-sm-4 col-lg-2">'+
                            '<div class="label-input hidden-lg">Phone:</div>'+
                            '<div>' + phone + '</div>'+
                        '</div>'+
                        '<div class="col-xs-6 col-sm-4 col-lg-2">'+
                            '<div class="label-input hidden-lg">City:</div>'+
                            '<div class="wrap">' + e.city + '</div>'+
                        '</div>'+
                        '<div class="col-xs-6 col-sm-4 col-lg-2">'+
                            '<div class="label-input hidden-lg">State:</div>'+
                            '<div class="wrap">' + e.state + '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="col-xs-1 hidden-xs">'+
                    '<div class="row">'+
                        '<div class="hidden-xs">'+
                            '<div class="text-center"><i class="fa fa-trash-o"></i></div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'
        );
    }

    $('.employee-popup').click(function(){
        var id = $(this).attr('data-id');
        var result = $.grep(employees, function(e){
            return e.id == id; 
        });
        initialDisplay(result[0]);
        $('#employeeViewModal').modal('show');
    });

    $('button.close').click(function(){
        $('#employeeViewModal').modal('hide'); 
    });  
});






