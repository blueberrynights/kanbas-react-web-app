document.querySelector('.sidebar a[href="/kanbas/assignment2/profile/index.html"]').addEventListener('click', function(e) {
    e.preventDefault();  // Prevent the default link action
    const shelf = document.getElementById('account-shelf');
    const mainContent = document.querySelector('.main-content');
    
    if (shelf.classList.contains('shelf-open')) {
        shelf.classList.remove('shelf-open');  // hides the shelf
    } else {
        shelf.classList.add('shelf-open');  // shows the shelf
    }
    
    
});

const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', function() {
        // First, remove the selected class from all links
        links.forEach(innerLink => innerLink.classList.remove('selected'));

        // Then, add the selected class to the clicked link
        this.classList.add('selected');
    });
});
