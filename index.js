var text = document.querySelector("#text");
var input = document.querySelector("#input");
var increase = document.querySelector("#plus");
var decrease = document.querySelector("#minus");

var number = 32 ;
var increment = 4 ;
var textSize = text.style.fontSize;

input.addEventListener( "input" , () => {
    // console.log(this.change)
    // text.innerText = "Welcome, " + input.value ;
    text.innerText = input.value ;
});

increase.addEventListener("wheel" , () => {
    text.style.fontSize = `${number+ increment}px`;
    number+=  increment;
});

decrease.addEventListener("wheel" , () => {
    text.style.fontSize = `${number - increment}px`;
    number -= increment;
});

increase.addEventListener("click" , () => {
    text.style.fontSize = `${number+ increment}px`;
    number+=  increment;
});

decrease.addEventListener("click" , () => {
    text.style.fontSize = `${number - increment}px`;
    number -= increment;
});