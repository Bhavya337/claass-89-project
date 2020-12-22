
 player1_name = localStorage.getItem("player1");
 player2_name = localStorage.getItem("player2");
 
 player1_score = 0;
 player2_score = 0;
 document.getElementById("Player1_name").innerHTML=player1_name+ ":";
 document.getElementById("Player2_name").innerHTML=player2_name+ ":";
 
 document.getElementById("score_payer1").innerHTML=player1_score;
 document.getElementById("score_payer2").innerHTML=player2_score;
 
 document.getElementById("player_question").innerHTML=" Question turn - " + player1_name ; 
 document.getElementById("player_answer").innerHTML=" Answer  turn - " + player2_name ; 
  
 function send(){
   var number1=document.getElementById("number1").value;
   var number2=document.getElementById("number2").value;
   answer= paresInt(number1)* paresInt(number2);
 var question_word="<h4 id= 'word_display'>Q. "+ number1+"X"+ number2 + "</h4>";
 var input_box="<br> answer: <input type='text' id='input_check_box'>" ;
check_button="<br><br> <button class='btn btn-info' onclick='check()'>check</button>";
row= question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("Number1").value="";
document.getElementById("Number2").value="";
 }
