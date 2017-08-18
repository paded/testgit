$(document).ready(function(){
    
    $(".bottom-panel").click(function(){
        if($(this).hasClass('expanded')){
             $(".search-box").animate({"top":"10px"},200);
            $(this).removeClass('expanded').stop().animate({"bottom":"-92%"},200,function(){
                $("#down-arrow").remove();
                 var txt2 = $("<i></i>",{id:"up-arrow","class": "material-icons md-36"}).text("keyboard_arrow_up");
                            $("#more-btn-icon").text(txt2);
                 $(this).css({"border-radius":"16px 16px 0px 0px"},200);
            });
        }else{
            $(".search-box").animate({"top":"-200px"},200);
            $(this).addClass('expanded').stop().animate({"bottom":"0"},200,function(){
                    $(this).css({"border-radius":"0px 0px 0px 0px"},200)
            });
            $("#up-arrow").remove();
            var txt2 = $("<i></i>",{id:"down-arrow","class": "material-icons md-36"}).text("keyboard_arrow_down");
            $("#more-btn-icon").append(txt2);
        }
    });

    $("#search-btn").click(function() {
       $('.bottom-panel').show();
    });
    
    var trigger = document.querySelector(".dropdown-trigger");
    trigger.addEventListener("click", function(event) {
      document.querySelector(".dropdown-items").classList.toggle("is-open");
    });
    
});
