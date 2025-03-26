/*document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Simple validation
        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        // Simulate signup process
        alert('Sign up successful!');
        // Redirect to login page or another page
        window.location.href = 'login.html';
    });
});*/
// Initialize Supabase (Replace with your actual URL & key)
const supabase = window.supabase.createClient(
  import.meta.env.VITE_SUPABASE_URL, 
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

document.getElementById("signupForm").addEventListener("submit", async (event) => {
    event.preventDefault(); // Prevent form from refreshing

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Call Supabase Auth API for signup
    const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    if (error) {
        console.error("Signup error:", error.message);
        alert("Error: " + error.message);
    } else {
        console.log("Signup successful! User:", user);
        alert("Signup successful! Check your email.");
    }
});
