// ================= PROJECTS =================

fetch("/api/projects")
    .then(response => response.json())
    .then(projects => {

        const projectContainer =
            document.getElementById("project-container");

        projects.forEach(project => {

            const projectCard =
                document.createElement("div");

            projectCard.classList.add("project-card");

            // Create technology badges
            const technologiesHTML =
                project.technologies
                    .map(technology => `
                        <span class="technology-badge">
                            ${technology}
                        </span>
                    `)
                    .join("");

            projectCard.innerHTML = `

                <h3>${project.title}</h3>

                <p>
                    ${project.description}
                </p>

                <div class="technologies">

                    <strong>Technologies:</strong>

                    <div class="technology-list">
                        ${technologiesHTML}
                    </div>

                </div>

                <div class="project-links">

                    <a
                        href="${project.github}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                        href="${project.live}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Demo
                    </a>

                </div>

            `;

            projectContainer.appendChild(projectCard);

        });

    })
    .catch(error => {

        console.error(
            "Error loading projects:",
            error
        );

        const projectContainer =
            document.getElementById("project-container");

        projectContainer.innerHTML = `
            <p class="api-error">
                Unable to load projects. Please try again later.
            </p>
        `;

    });



// ================= ABOUT =================

fetch("/api/about")
    .then(response => response.json())
    .then(about => {

        const aboutText =
            document.getElementById("about-text");

        aboutText.textContent =
            about.description;

    })
    .catch(error => {

        console.error(
            "Error loading about information:",
            error
        );

        document.getElementById("about-text")
            .textContent =
            "Unable to load information at the moment.";

    });



// ================= SKILLS =================

fetch("/api/skills")
    .then(response => response.json())
    .then(data => {

        const skillsContainer =
            document.getElementById("skills-container");

        data.skills.forEach(skill => {

            const skillCard =
                document.createElement("span");

            skillCard.classList.add("skill-card");

            skillCard.textContent = skill;

            skillsContainer.appendChild(skillCard);

        });

    })
    .catch(error => {

        console.error(
            "Error loading skills:",
            error
        );

        document.getElementById("skills-container")
            .innerHTML = `
                <p class="api-error">
                    Unable to load skills at the moment.
                </p>
            `;

    });



// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contact-form");

contactForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const email =
            document.getElementById("email").value;

        const message =
            document.getElementById("message").value;

        fetch("/api/contact", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })

        })
        .then(response => response.json())
        .then(data => {

            const formMessage =
                document.getElementById("form-message");

            formMessage.textContent =
                data.message;

            contactForm.reset();

        })
        .catch(error => {

            console.error(
                "Error sending message:",
                error
            );

            document.getElementById("form-message")
                .textContent =
                "Something went wrong. Please try again.";

        });

    }
);



// ================= MOBILE MENU =================

const menuToggle =
    document.getElementById("menu-toggle");

const navLinks =
    document.getElementById("nav-links");

menuToggle.addEventListener(
    "click",
    function() {

        navLinks.classList.toggle("active");

    }
);


const navItems =
    navLinks.querySelectorAll("a");

navItems.forEach(function(link) {

    link.addEventListener(
        "click",
        function() {

            navLinks.classList.remove("active");

        }
    );

});



// ================= DARK / LIGHT MODE =================

const themeToggle =
    document.getElementById("theme-toggle");

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.textContent = "☀️";

}


themeToggle.addEventListener(
    "click",
    function() {

        document.body.classList.toggle("dark-mode");

        if (
            document.body.classList.contains("dark-mode")
        ) {

            themeToggle.textContent = "☀️";

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            themeToggle.textContent = "🌙";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    }
);