$(document).ready(
    //213
    function(){
        let przycisk=false
        let guzik=false
        let knefel=false
        $("#g1,#g2,#g3").click(
            function(){
                $("#kod").fadeOut(0);
            }
        );
        $("#g1").click(
            function(){
                if (przycisk==false && guzik==true && knefel==false){
                    $("#g1").fadeOut(200);
                    przycisk=true
                }
                else{
                    guzik=false
                    knefel=false
                    przycisk=false
                    $("#g1,#g2,#g3").fadeIn(200);
                }
            }
        );
        $("#g2").click(
            function(){
                if (przycisk==false && guzik==false && knefel==false){
                    $("#g2").fadeOut(200);
                    guzik=true
                }
                else{
                    guzik=false
                    knefel=false
                    przycisk=false
                    $("#g1,#g2,#g3").fadeIn(200);
                }
            }
        );
        $("#g3").click(
            function(){
                if (przycisk==true && guzik==true && knefel==false){
                    $("#g3").fadeOut(200);
                    $("#kod").delay(200).fadeIn(200)
                    guzik=true
                }
                else{
                    guzik=false
                    knefel=false
                    przycisk=false
                    $("#g1,#g2,#g3").fadeIn(200);
                }
            }
        );
    }
);