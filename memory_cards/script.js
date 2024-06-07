// Select all elements with the class 'card'
const cards = document.querySelectorAll('.card');

// Initialize a counter and an array to track flipped cards
let flip_count = 0;
let flipped_cards = [];

// Create a function to handle card flipping 
cards.forEach(function (card) {
    card.addEventListener("click", function () {
        if (flip_count < 2) {
            card.style.visibility = 'hidden';
            flip_count++;
            flipped_cards.push(card);
        }
        else if (flip_count === 2) {
            setTimeout(() => {
                flipped_cards[0].style.visibility = 'visible';
                flipped_cards[1].style.visibility = 'visible';
                flipped_cards = [];
                flip_count = 0;
            }, 100);
        }
    });
});

