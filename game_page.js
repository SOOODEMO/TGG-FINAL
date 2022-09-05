player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1 + " : ";
document.getElementById("player2_name").innerHTML = player2 + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowerCase = " + word);
    
    c1 = word.charAt(1);
    console.log(c1);

    length2 = Math.floor(word.length/2);
    c2 = word.charAt(length2);
    console.log(c2);

    length1 = word.length - 1;
    c3 = word.charAt(length1);
    console.log(c3);

    r1 = word.replace(c1, "_");
    r2 = r1.replace(c2, "_");
    r3 = r2.replace(c3, "_");
    console.log(r3);

    question_word = "<h4 id='word_display'> Q."+r3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}
question_turn = "player1";
answer_turn = "player2";

function check(){
get_answer = document.getElementById("input_check_box").value;
answer = get_answer.toLowerCase();
console.log("answer in lowercase - " + answer);
if(answer == word)

{
    if(answer_turn == "player1")
    {
        player1_score = player1_score+1;
        document.getElementById("player1_score").innerHTML = player1_score;
    }
    else
    {
    player2_score = player2_score+1;
    document.getElementById("player2_score"),innerHTML = player2_score;
    }
}

if (question_turn == "player1")
{
    question_turn = "player2";
    document.getElementById("player_question").innerHTML="Question Turn -" + player1;
}

else{

    question_turn="player1";
    document.getElementById("player_question").innerHTML="Question -" + player2;
}


if (answer_turn == "player1")
{
    answer_turn = "player2";
    document.getElementById("player_answer").innerHTML="Answer Turn -" + player1;
}

else{

    answer_turn = "player1"

    document.getElementById("player_answer").innerHTML="Answer Turn -" + player2;
}
}