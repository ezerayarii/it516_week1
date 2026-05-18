<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

<header>
    <h1>Welcome to My Website</h1>
</header>

<nav>
    <a href="index.php">Home</a>
    <a href="about.php">About</a>
    <a href="contact.php">Contact</a>
</nav>

<img src="https://tse2.mm.bing.net/th/id/OIP.ac8SS3sITKocmuoR_TWCNwAAAA?pid=Api&h=220&P=0" alt="Sample Image">

<section>
    <h2>About Me</h2>
    <p>Hello, my name is Ezer. This is my first web project.</p>
    <button onclick="toggleMode()" tabindex="0">Toggle Dark Mode</button>
</section>

<section>
    <h2>Contact Form</h2>

    <form id="contactForm">
<input type="text" id="name" placeholder="Your Name" required aria-label="Name">
<input type="email" id="email" placeholder="Your Email" required aria-label="Email">
        <button type="submit">Submit</button>
    </form>

    <p id="error"></p>
</section>

<section>
    <h2>My Skills</h2>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>GitHub</li>
    </ul>
</section>

<footer>
    <p>© 2026 Ezer Ayari</p>
</footer>

<script>
function toggleMode() {
    document.body.classList.toggle("dark");
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let error = document.getElementById("error");

    if (name === "" || email === "") {
        error.textContent = "Please fill all fields.";
        error.style.color = "red";
    } else {
        error.textContent = "Form submitted successfully!";
        error.style.color = "green";
    }
});

document.addEventListener("keydown", function(e) {
    if (e.key === "d" || e.key === "D") {
        toggleMode();
    }
});
</script>

</body>
</html>