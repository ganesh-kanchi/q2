var text = document.querySelector("#text");
var input = document.querySelector("#input");
var increase = document.querySelector("#plus");
var decrease = document.querySelector("#minus");

var number = 32 ;
var increment = 4 ;
var textSize = text.style.fontSize;

input.addEventListener( "input" , () => {
    text.innerText = input.value ;
});

function increaseSize(){
    text.style.fontSize = `${number+ increment}px`;
    number+=  increment;
}

function decreaseSize(){
    text.style.fontSize = `${number- increment}px`;
    number-=  increment;
}

increase.addEventListener("wheel" , increaseSize);

decrease.addEventListener("wheel" , decreaseSize);

increase.addEventListener("click" , increaseSize);

decrease.addEventListener("click" , decreaseSize);
