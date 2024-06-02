const time = new Date();
const hours = time.getHours();
const greeting = document.querySelector('.lg-text');
const avatar = document.querySelector('.avatar');

console.log(hours);

if(hours >= 5 && hours <= 11){
    greeting.textContent = "Good Morning🌞🌅";
}
else if(hours >= 12 && hours <= 17){
    greeting.textContent = "Good Afternoon🌤️☕";
}
else{
    greeting.textContent = "Good Night⭐🌌";
    avatar.src = 'night-cat-avatar.jpg';
}