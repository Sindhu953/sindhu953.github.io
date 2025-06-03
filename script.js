
        const userForm = document.getElementById("userForm");
        const username = document.getElementById("username");
        const email = document.getElementById("email");
        const feedback = document.getElementById("feedback");

        userForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const user = username.value.trim();
            const mail = email.value.trim();
            feedback.textContent = "";

            if (user.length < 3) {
                feedback.textContent = "Username must be at least 3 characters long.";
                feedback.className = "error";
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(mail)) {
                feedback.textContent = "Please enter a valid email address.";
                feedback.className = "error";
                return;
            }

            feedback.textContent = "Form submitted successfully!";
            feedback.className = "success";
            userForm.reset();
        });