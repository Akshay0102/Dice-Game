var randomnumber1=Math.floor(Math.random()*6)+1;
var randomDiceimage="images/dice"+randomnumber1+".png";
var image1=document.querySelectorAll("img")[0].setAttribute("src",randomDiceimage);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomDiceimage2="images/dice"+randomnumber2+".png";
var image2=document.querySelectorAll("img")[1].setAttribute("src",randomDiceimage2);

/* if player wins or lose */
if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 1 WINS";
}
else if(randomnumber2>randomnumber1)
{
    document.querySelector("h1").innerHTML="Player 2 WINS";
}
else 
{
    document.querySelector("h1").innerHTML="DRAW";
}