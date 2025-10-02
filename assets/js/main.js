// ===============================
// NAVBAR
// ===============================
(function initNavbarToggle() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");
    if (!hamburger || !navLinks) return;

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });
})();

// ===============================
// PROYECTOS (Filtro)
// ===============================
(function initProjectFilter(defaultCategory = "destacado") {
    const buttons = document.querySelectorAll(".filter-buttons .btn");
    const projects = document.querySelectorAll(".project-card");

    if (!buttons.length || !projects.length) return;

    function filterProjects(category) {
        projects.forEach((project) => {
            project.style.display =
                category === "all" || project.classList.contains(category)
                    ? "block"
                    : "none";
        });

        // marcar el botón activo
        buttons.forEach((btn) => {
            btn.classList.toggle("active", btn.dataset.filter === category);
        });
    }

    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const filter = btn.dataset.filter || "all";
            filterProjects(filter);
        });
    });

    // filtro inicial
    filterProjects(defaultCategory);
})();

// ===============================
// FOOTER (Año actual)
// ===============================
(function setCurrentYear() {
    const el = document.getElementById("current-year");
    if (el) el.textContent = new Date().getFullYear();
})();
