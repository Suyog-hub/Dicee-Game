
 //random number 1   
var randomNumber1 =Math.floor(Math.random()*6)+1;
   //random number 2
var randomNumber2 =Math.floor(Math.random()*6)+1; 

//for image 1

var randomeImage1 = "./images/dice"+randomNumber1+".png";
var image1 = document.querySelector(".img1");
image1.setAttribute("src", randomeImage1);


//for Image 2 
var randomeImage2 = "./images/dice"+randomNumber2+".png";
var image2 = document.querySelector(".img2");
image2.setAttribute("src", randomeImage2);

//for declaring winner:
if(randomNumber1 === randomNumber2){
 document.querySelector("h1").innerHTML="Draw Match! Refresh me";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1st Wins!"; 
    
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2nd Wins!"; 
}
else{
    document.querySelector("h1").innerHTML="Refresh again!";
}
