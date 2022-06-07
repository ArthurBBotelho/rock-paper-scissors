const btn = document.querySelector('#send');

btn.addEventListener('click', function(e) {

    e.preventDefault();

    const player = document.querySelector('#player');

    const value = player.value;

    console.log(value);

})

let moves = ['Rock', 'Paper', 'Scissors']

const index = 3

function getIndex(index) {
    return Math.floor(Math.random() * index);
}

function computerPlay () {

}