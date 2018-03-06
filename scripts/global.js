$(document).ready(function(){

    //social
    $('#insta_icon').mouseover(function(){
        $('#footer_caption').text("@asianshyguy's sketches");
    });
    $('#vimeo_icon').mouseover(function(){
        $('#footer_caption').text("@asianshyguy's nicer stuff");
    });
    $('#medium_icon').mouseover(function(){
        $('#footer_caption').text("@asianshyguy's food blog");
    });
    $('#twitter_icon').mouseover(function(){
        $('#footer_caption').text("@asianshyguy has no followers");
    });
    $('#insta_icon, #vimeo_icon, #medium_icon, #twitter_icon').mouseout(function(){
        $('#footer_caption').text("@asianshyguy");
    });

    

});