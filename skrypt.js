let duze=false
$(document).ready(
    function(){
        $("#przycisk").click(
            function(){
                    $("#Flaga").fadeIn(500).animate({"width":"100vw","height":"100vh","left":"0%","top":"0%","border-radius":"0"},1000);
                    $("#tekst_flaga").delay(1500).fadeIn(200).animate({"width":"50vw","height":"80vh","left":"25vw","top":"10vh","margin":"0px"},1000);
                    }
                );
        $("#Flaga,#tekst_flaga").click(
            function(){
                $("#tekst_flaga").animate({"width":"10vw","height":"10vh","left":"50vw","top":"40vh","margin-left":"-5vw"},1000).fadeOut(200);
                $("#Flaga").delay(1000).animate({"width":"5vw","height":"5vh","left":"45vw","top":"45vh","border-radius":"15px"},1000).fadeOut(200);
            }
        );
    }
);