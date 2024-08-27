document.addEventListener('DOMContentLoaded', function() {
    var loggedInUser = localStorage.getItem('loggedInUser');

    if (!loggedInUser) {
        window.location.href = 'index.html'; // Redirect ke halaman login jika tidak ada user yang login
    } else {
        document.getElementById('usernameDisplay').textContent = loggedInUser;
    }

    document.getElementById('logoutButton').addEventListener('click', function() {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'Index1.html'; // Redirect ke halaman login setelah logout
    });
});
