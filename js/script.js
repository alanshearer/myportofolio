// event pada saat link di link
$('.page-scroll').on('click', function(e){

//ambil tulisan href
var tujuan = $(this).attr('href');

// tangkap elemen ybs
var elemenTujuan =$(tujuan);


// pindahkan scroll
$('html, body').animate ({
    scrollTop: elemenTujuan.offset().top - 50
},1500,'easeInOutBack');

e.preventDefault();

});


//about
$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

// parallax
$(window).scroll(function(){
 var wScroll = $(this).scrollTop();
    //jumbotron
    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

     
    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

     
    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });


    $('.jumbotron .text-1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    //portfolio
    if (wScroll > $('.portfolio').offset().top - 250 ){
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function() {
             $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
      
    }

});