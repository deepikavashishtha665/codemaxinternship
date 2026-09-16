document.addEventListener("DOMContentLoaded", () => {
    // 1. Handle Login Form Submit
    const loginForm = document.querySelector("form[action='']");
    
    // Check if we are on Login page
    if (window.location.pathname.includes("login.html")) {
        const form = document.querySelector("form");
        if (form) {
            form.addEventListener("submit", (e) => {
                e.preventDefault();
                alert("Login successful! Redirecting to dashboard...");
                window.location.href = "dashboard.html";
            });
        }
    }

    // 2. Handle Register Form Submit
    if (window.location.pathname.includes("register.html")) {
        const form = document.querySelector("form");
        if (form) {
            form.addEventListener("submit", (e) => {
                e.preventDefault();
                alert("Account created successfully! Please login.");
                window.location.href = "login.html";
            });
        }
    }

    // 3. Handle Create Blog Form Submit
    if (window.location.pathname.includes("create-blog.html")) {
        const form = document.querySelector("form");
        if (form) {
            form.addEventListener("submit", (e) => {
                e.preventDefault();
                alert("Blog post published successfully!");
                window.location.href = "dashboard.html";
            });
        }
    }
});