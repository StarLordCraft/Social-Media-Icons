function expand(){
    if(!expanded){
        menu.style.transform = "scale(3)"
        plus.style.transform = 'rotate(360deg)'
        
        expanded = true;
    }else{
        menu.style.transform = "scale(0)";
        plus.style.transform = "rotate(0deg)";

        expanded = false;
    }
}

let expanded = false;

const plus = document.getElementById('plus')
const menu = document.getElementById('menu');

plus.addEventListener('click', expand);