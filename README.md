<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jabari Jones | Portfolio</title>
    <link rel="stylesheet" href="styles.css">

    <!-- BotUI CDN for chatbot -->
    <link href="https://cdn.jsdelivr.net/npm/botui/build/botui.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/botui/build/botui.min.js"></script>
</head>
<body>
    <header>
        <h1>Welcome to Jabari Jones' Portfolio</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <section id="home">
        <h2>About Me</h2>
        <p>Hi, I'm Jabari Jones, a Computer Technology Engineering student passionate about cybersecurity, Linux, and software development.</p>
        <p>Skills: Snort, Python, Kali Linux, Network Security, Machine Learning in Cybersecurity</p>
        <p>Education: Currently pursuing CTEC degree</p>
        <img src="qr_code.png" alt="QR Code to Portfolio">
    </section>
    
    <section id="projects">
        <h2>Projects</h2>
        <ul>
            <li><a href="https://github.com/JabariJones/project1">Project 1</a></li>
            <li><a href="https://github.com/JabariJones/project2">Project 2</a></li>
        </ul>
    </section>
    
    <section id="resume">
        <h2>Resume</h2>
        <a href="resume.pdf" download>Download Resume</a>
    </section>
    
    <section id="contact">
        <h2>Contact Me</h2>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" required>
            <label for="message">Message:</label>
            <textarea id="message" required></textarea>
            <button type="submit">Send</button>
        </form>
    </section>

    <!-- Chatbot -->
    <div id="botui-app"></div>

    <script src="script.js"></script>
</body>
</html>
