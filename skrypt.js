$(document).ready(
    function(){
        let open = false
        $("#slime_icon").click(
            function(){
                if(open == false){
                    $(".rycerz").animate({"top":"15%"},500);
                    open = true
                    $("#napis").fadeOut(300)
                }
                else{
                    $(".stone").animate({"top":"115%"},500);
                    $(".rycerz").animate({"top":"15%"},500);
                }
            }
                );
        $("#stone_icon").click(
            function(){
                if(open == false){
                    $(".stone").animate({"top":"15%"},500);
                    $("#napis").fadeOut(300)
                    open = true
                }
                else{
                    $(".rycerz").animate({"top":"-75%"},500);
                    $(".stone").animate({"top":"15%"},500);
                }
            }
        );
        $(".ob1").click(function(){$(".img_rycerz").css({"background-image":" url(rycerz_1.png)"},1500);});
        $(".ob2").click(function(){$(".img_rycerz").css({"background-image":" url(rycerz_2.png)"},1500);});
        $(".ob3").click(function(){$(".img_rycerz").css({"background-image":" url(rycerz_3.png)"},1500);});
        $(".ob4").click(function(){$(".img_rycerz").css({"background-image":" url(rycerz_4.png)"},1500);});

        $(".ob5").click(function(){$(".img_stone").css({"background-image":" url(stone_1.png)"},1500);});
        $(".ob6").click(function(){$(".img_stone").css({"background-image":" url(stone_2.png)"},1500);});


    }
);