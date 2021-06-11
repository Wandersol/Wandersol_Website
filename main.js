//---------- Pop Up Modal ---------
//Recognizes when user clicks "Contact" and opens window
document.getElementById('nav-contact').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';   
});

//Closes window when "x" is clicked
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
});

//Closes window when "submit" is clicked
document.getElementById('modal-submit').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
});

//------------ Backpacks Donated Counter ----------

////////////////// Counter Section ////////////////////////
//From MDN random number page
//Will return a random integer between the given values
//I made the counter stop after awhile so that it doesn't run forever. 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


var currentDonations = 134312323;
var countdown = setInterval(function() {
    //This will increment the number up by a random integer value
    currentDonations = currentDonations + getRandomInt(1, 3);
    //Updates the number on the webpage.
    document.getElementById("number").innerHTML = currentDonations;

    //Keeps the number from going up into perpetuity...
    if(currentDonations === 134312400) {
        clearInterval(countdown);
    }
//This should update the number at a random interval.
//So instead of every second, every second, plus a random
//number from 1-5000.
}, 1000 + getRandomInt(1, 5000));

