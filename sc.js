$(document).ready(
    //24153
    function(){
        let przycisk=false
        let guzik=false
        let knefel=false
        let button=false
        let key=false
        let woda=false
        let waz=false
        $("#g1,#g2,#g3,#g4,#g5").click(
            function(){
                $("#kod").fadeOut(0);
            }
        );
        $("#g2").click(
            function(){
                if (przycisk==false && guzik==false && knefel==false && button==false && key==false){
                    $("#g2").fadeOut(200);
                    button=true
                }
                else{
                    guzik=false
                    knefel=false
                    przycisk=false
                    key=false
                    button=false
                    $("#g1,#g2,#g3,#g4,#g5").fadeIn(200);
                }
            }
        );
        $("#g1").click(
            function(){
                if (przycisk==true && guzik==false && knefel==false && button==true && key==false){
                    $("#g1").fadeOut(200);
                    guzik=true
                }
                else{
                    guzik=false
                    knefel=false
                    przycisk=false
                    key=false
                    button=false
                    $("#g1,#g2,#g3,#g4,#g5").fadeIn(200);
                }
            }
        );
        $("#g3").click(
            function(){
                if (przycisk==true && guzik==true && knefel==false && button==true && key==true){
                    $("#g3").fadeOut(200);
                    $("#kod").delay(200).animate({"opacity":"1"},0).fadeIn(200);
                    guzik=true
                }
                else{
                    guzik=false
                    knefel=false
                    przycisk=false
                    key=false
                    button=false
                    $("#g1,#g2,#g3,#g4,#g5").fadeIn(200);
                }
            }
        );
        $("#g4").click(
            function(){
                if (przycisk==false && guzik==false && knefel==false && button==true && key==false){
                    $("#g4").fadeOut(200);
                    przycisk=true
                }
                else{
                    guzik=false
                    knefel=false
                    przycisk=false
                    key=false
                    button=false
                    $("#g1,#g2,#g3,#g4,#g5").fadeIn(200);
                }
            }
        );
        $("#g5").click(
            function(){
                if (przycisk==true && guzik==true && knefel==false && button==true && key==false){
                    $("#g5").fadeOut(200);
                    key=true
                }
                else{
                    guzik=false
                    knefel=false
                    przycisk=false
                    key=false
                    button=false
                    $("#g1,#g2,#g3,#g4,#g5").fadeIn(200);
                }
            }
        );
        $("#klapa,#klamka").click(
            function(){
                $("#klapa").addClass("animacja");
                $("#g1").delay(1000).animate({"top":"0px"},800);
                $("#klapa").delay(3000).fadeOut(500);
            }
        );
        $("#strzala").click(
            function(){
                $(this).addClass("strz").delay(5100).fadeOut(0);
                $("#g4").delay(5500).animate({"top":"0"},800);
                $("#dis").delay(6000).fadeOut(500);
            }
        );
        $("#waz").click(
            function(){
                if(woda==false){
                    $(this).animate({"top":"80%", "left":"8%"},2000);
                    waz=true
                    woda=true
                }
                    else{
                        $(this).delay(200)
                    }
            }
        );
        $("#kran").click(
            function(){
                if(waz==true){
                    $(".puste").fadeOut(2000);
                    $("#waz").delay(2500).animate({"top":"110%","left":"0%"},2000).fadeOut(1000);
                    $("#kran").delay(4500).fadeOut(1000);
                }
                    else{(this).fadeOut(200)}
            }
        );
    }
);