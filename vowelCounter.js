
let input = document.querySelector("input").value;
const checkBtn = document.querySelector(".checkBtn");
const vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;

/*
function inputLength() {
    return input.value.length;
}
*/

function vowelCounter(input) {
    
    for (let i = 0; i < input.length; i++) {
        if(input[i] == 'a' || input[i] == 'e' || input[i] == 'i' || input[i] == 'o' || input[i] == 'u') {
            count++;
        }
    }

    alert('There are ' + count + ' vowels');
}

function check() {
    console.log('test');
    if (input > 0) {
        vowelCounter();
    }
}

checkBtn.addEventListener('click', check);