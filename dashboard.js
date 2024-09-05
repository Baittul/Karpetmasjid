document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulasi login sederhana
    if (username === 'admin' && password === '12345') {
        localStorage.setItem('loggedInUser', username); // Simpan nama pengguna
        window.location.href = 'https://github.com/Baittul/Karpetmasjid/tree/main'; // Redirect ke dashboard
    } else {
        document.getElementById('message').textContent = 'Invalid username or password';
    }
});
