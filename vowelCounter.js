
let input = document.querySelector("#inputText");
const checkBtn = document.querySelector(".checkBtn");
const vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;


function inputLength() {
    return input.value.length;
}


function vowelCounter(input) {
    console.log('test');
    for (let i = 0; i < input.value.length; i++) {
        if(input.value[i] == 'a' || input.value[i] == 'e' || input.value[i] == 'i' || input.value[i] == 'o' || input.value[i] == 'u') {
            count++;
        }
    }

    alert('There are ' + count + ' vowels');
}

function check() {
    if (inputLength() > 0) {
        vowelCounter();
    }
}

checkBtn.addEventListener('click', check);