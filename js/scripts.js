$(function(){

  $(.userInput).submit(function(){
    var question1 = $("input#question1").val();
    var question2 = $("input#question2").val();
    var question3 = $("input#question3").val();

    $("#question1").text(question1);
    $("#question2").text(question2);
    $("#question3").text(question3);

  });
});
