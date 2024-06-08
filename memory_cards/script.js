// Select all elements with the class 'card'
const cards = document.querySelectorAll('.card');

// Hidden cards array
const hidden_cards = shuffle();
//console.log(hidden_cards);

// Initialize a counter and an array to track flipped cards
let flip_count = 0;
let flipped_cards = [];

// Create an array to track matched cards
let matched_cards = [];

// Create a function to handle card flipping 
cards.forEach(function (card) {
    card.addEventListener("click", function () {
        if (flip_count < 2) {
            card.style.visibility = 'hidden';
            flip_count++;
            flipped_cards.push(card);
        }
        else if (flip_count === 2) {
            /*
            if(flipped_cards[0] == flipped_vards[1])
            matched_cards.push(flipped_cards[0]);
            matched_cards.push(flipped_cards[1]);
            flipped_cards = [];
             */
            setTimeout(() => {
                flipped_cards[0].style.visibility = 'visible';
                flipped_cards[1].style.visibility = 'visible';
                flipped_cards = [];
                flip_count = 0;
            }, 100);
        }
    });
});

// Function to shuffle cards
function shuffle(){
    // Create an array with numbers 1 to 8, each repeated twice
    let array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

    // Shuffle
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    // Return array
    return array;
}

