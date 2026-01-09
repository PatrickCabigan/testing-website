function toggleTheme() {
    const body = document.body;
    
    // 1. Toggle the Dark Mode class
    body.classList.toggle("dark-theme");

    // 2. Futuristic "Pop" Effect
    // Shrinks the page slightly and bounces back for a high-tech feel
    body.style.transform = "scale(0.98)";
    
    setTimeout(() => {
        body.style.transform = "scale(1)";
    }, 150);
}