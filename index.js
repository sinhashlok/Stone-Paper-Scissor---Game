    
    // button click
document.querySelector("button").addEventListener("click", function () {
    this.classList.add("pressed");
    setTimeout(() => {
        this.classList.remove("pressed");
    }, "100")

    btnclicked();
})

function btnclicked () {
    var player1 =  Math.floor(Math.random() * 3) + 1;
    var player2 =  Math.floor(Math.random() * 3) + 1;

    var pla1 = document.getElementsByClassName("game-id");
    for (var i = 1; i <= 3; i++)
    {
        if (player1 == 1)
            pla1[0].innerHTML = "Stone";
        else if (player1 == 2)
            pla1[0].innerHTML = "Paper";
        else
            pla1[0].innerHTML = "Scissor";
    
        if (player2 == 1)
            pla1[1].innerHTML = "Stone";
        else if (player2 == 2)
            pla1[1].innerHTML = "Paper";
        else
            pla1[1].innerHTML = "Scissor";
    }

    // var p1wins = document.querySelector("h1").innerHTML = "🎉Player 1 wins";
    // var p2wins = document.querySelector("h1").innerHTML = "Player 2 wins🎉";

    if (player1 == player2)
        document.querySelector("h1").innerHTML = "TIE";
    else if  (player1 == 1)
    {
        if (player2 == 3)
            document.querySelector("h1").innerHTML = "🎉Player 1 wins";
        else
            document.querySelector("h1").innerHTML = "Player 2 wins🎉";
    }
    else if (player1 == 2)
    {
        if (player2 == 1)
            document.querySelector("h1").innerHTML = "🎉Player 1 wins";
        else
            document.querySelector("h1").innerHTML = "Player 2 wins🎉";
    }
    else
    {
        if (player2 == 2)
            document.querySelector("h1").innerHTML = "🎉Player 1 wins";
        else
            document.querySelector("h1").innerHTML = "Player 2 wins🎉";
    }

}