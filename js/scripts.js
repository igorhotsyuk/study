$(document).ready(function(){
    $('.sec1, .block').mouseenter(function(){
        $('.block').slideDown();
    });$('.sec1, .block').mouseleave(function(){
        $('.block').slideUp();
    });
       $('.sec3-2, .block2').click(function(){
        $('.block2').slideDown();
    });$('.sec3-2,.block2').mouseleave(function(){
        $('.block2').slideUp();
    });
    $('#manexp, .exp-block').click(function(){
        $('.exp-block').slideDown();
    }); $('#manexp, .exp-block').mouseleave(function(){
        $('.exp-block').slideUp();
    });
    $('.email-help-icon').mouseenter(function(){
        $('.email-help').slideDown();
    }); $('.email-help-icon, .email-help').mouseleave(function(){
        $('.email-help').slideUp();
    });

    $('#is_subscribed').click(function () {
        $(".if-checked").toggle(this.checked);
    });

   // $("select").msDropDown();
    //$('input[type=text]').focus(function(){
    //    $(this).css({border: '2px solid red', background: '#999'});
    //}).blur(function(){
    //    var newVal = $(this).val().replace(/\s/g, '');
    //    $(this).val().trim();
    //    $(this).val(newVal);
    //    if ($(this).val() == "" ) {
    //        $(this).css({border: '1px solid red', background: '#FBACAC'})
    //    }
    //}).change(function(){
    //    if ($(this).val() == "" ) {
    //        $(this).css({border: '1px solid red', background: '#FBACAC'})
    //    }
    //});
    $('#pass').blur(function() {
               if($(this).val().length < 6){
            alert("ent >6");
        }
    });

    $('#clickMe').click(function(){
        $('#popupWrapper').show();
    });
    $('#close').click(function(){
        $('#popupWrapper').hide();
    });


    $('.bxslider').bxSlider({
        auto: true,
        autoControls: false
    });
});
