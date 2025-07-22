// Mobile Menu Toggle
document.querySelector(".menu-toggle").addEventListener("click", function () {
  const navLinks = document.querySelector(".nav-links");
  const headerActions = document.querySelector(".header-actions");

  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
    headerActions.style.display = "none";
  } else {
    navLinks.style.display = "flex";
    headerActions.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.position = "absolute";
    navLinks.style.top = "60px";
    navLinks.style.left = "0";
    navLinks.style.right = "0";
    navLinks.style.background = "white";
    navLinks.style.padding = "20px";
    navLinks.style.gap = "15px";
    navLinks.style.borderBottom = "1px solid var(--border-color)";

    headerActions.style.flexDirection = "column";
    headerActions.style.position = "absolute";
    headerActions.style.top = "calc(60px + 180px)"; // Adjust based on nav height
    headerActions.style.left = "0";
    headerActions.style.right = "0";
    headerActions.style.background = "white";
    headerActions.style.padding = "20px";
    headerActions.style.gap = "15px";
  }
});

// Newsletter Form Submission
document
  .querySelector(".newsletter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = this.querySelector("input").value;
    if (email) {
      alert(
        `Thank you for subscribing with ${email}! You'll receive our next newsletter.`
      );
      this.querySelector("input").value = "";
    } else {
      alert("Please enter a valid email address.");
    }
  });

// Article Click Tracking
document
  .querySelectorAll(".grid-article, .secondary-article, .main-article")
  .forEach((article) => {
    article.addEventListener("click", function () {
      const headline = this.querySelector("h2, h3").textContent;
      console.log(`Article clicked: ${headline}`);
      // In a real app, you would send this data to your analytics service
    });
  });
