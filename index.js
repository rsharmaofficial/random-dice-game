var randomnumber1=Math.floor(Math.random()*6)+1;        
var randomdiceimage= "dice" + randomnumber1 + ".png";
var randomImageSource= "images/" + randomdiceimage;
var Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src",randomImageSource);



var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomImageSource2="images/dice" +randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);






if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins"
}else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 wins"
}
else if(randomnumber2=randomnumber1){
    document.querySelector("h1").innerHTML="Draw"
}