document.getElementById('nav-contact').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
});

document.getElementById('modal-submit').addEventListener('click', function() {
    document.querySelector('.bg-modal').style.display = 'none';
});