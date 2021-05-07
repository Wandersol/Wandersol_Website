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

