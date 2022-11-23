function change_img(r1,r2){
    document.querySelectorAll("img")[0].src = "images/dice" + r1 + ".png";
    document.querySelectorAll("img")[1].src = "images/dice" + r2 + ".png"; 
}

var r1 = Math.floor(Math.random() * 6 + 1);
var r2 = Math.floor(Math.random() * 6 + 1);

change_img(r1,r2);
if(r1 == r2){
    document.querySelector("h1").innerHTML = "Draw!";
}else if(r1 > r2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else{
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}