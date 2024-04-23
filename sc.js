$(document).ready(
    //41253
    function(){
        let przycisk=false
        let guzik=false
        let knefel=false
        let button=false
        let key=false
        $("#g1,#g2,#g3,#g4,#g5").click(
            function(){
                $("#kod").fadeOut(0);
            }
        );
        $("#g1").click(
            function(){
                if (przycisk==false && guzik==false && knefel==false && button==false && key==false){
                    $("#g1").fadeOut(200);
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
        $("#g2").click(
            function(){
                if (przycisk==true && guzik==false && knefel==false && button==true && key==false){
                    $("#g2").fadeOut(200);
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
            }
        );
        $("#strzala").click(
            function(){
                $(this).addClass("strz");
                $("#g4").delay(5500).animate({"top":"0"},400);
            }
        );
        let waz=false
        $("#waz").click(
            function(){
                $(this).animate({"top":"80%", "left":"8%"},2000);
                waz=true
            }
        );
        $("#kran").click(
            function(){
                if(waz==true){
                    $("#puste").fadeOut(2000);
                    $("#waz").delay(2500).animate({"top":"110%","left":"0%"},2000)
                }

            }
        );
    }
);