$(document).ready(function(){
    $("#hideBtn").click(function(){
        $("#catImage").hide();
        $("#status").text("¡No tenemos ninguna imagen!");
    });
    $("#showBtn").click(function(){
        $("#catImage").show();
        $("#status").text("¡Mirá la siguiente imagen!");
    });
});
