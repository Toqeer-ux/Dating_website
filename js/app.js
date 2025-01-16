document.addEventListener('DOMContentLoaded', function () {
    const languageButton = document.getElementById('languageButton');
    const languageDropdown = document.getElementById('languageDropdown');
  
    // Toggle dropdown visibility
    languageButton.addEventListener('click', function (e) {
      e.preventDefault();
      languageDropdown.style.display = languageDropdown.style.display === 'block' ? 'none' : 'block';
    });
  
    // Update selected language
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
      item.addEventListener('click', function (e) {
        e.preventDefault();
  
        const selectedFlag = item.querySelector('.flag-icon').className;
        const selectedLanguage = item.textContent.trim();
  
        // Update the button text and flag
        languageButton.innerHTML = `<span class="${selectedFlag}"></span> ${selectedLanguage}`;
  
        // Hide the dropdown
        languageDropdown.style.display = 'none';
      });
    });
  
    // Close dropdown if clicked outside
    document.addEventListener('click', function (e) {
      if (!languageButton.contains(e.target) && !languageDropdown.contains(e.target)) {
        languageDropdown.style.display = 'none';
      }
    });
  });
//   // Nav links select
//   // JavaScript to handle active class toggle and preserve it across pages
// document.addEventListener("DOMContentLoaded", function () {
//   // Select all nav links
//   const navLinks = document.querySelectorAll(".nav-link");

//   // Function to remove active class from all links and add to the clicked one
//   navLinks.forEach(link => {
//     link.addEventListener("click", function () {
//       navLinks.forEach(nav => nav.classList.remove("active"));
//       this.classList.add("active");

//       // Save the active href to localStorage
//       localStorage.setItem("activeNavLink", this.getAttribute("href"));
//     });
//   });

//   // On page load, set the active class based on localStorage
//   const activeHref = localStorage.getItem("activeNavLink");
//   if (activeHref) {
//     navLinks.forEach(link => {
//       if (link.getAttribute("href") === activeHref) {
//         link.classList.add("active");
//       } else {
//         link.classList.remove("active");
//       }
//     });
//   }
// });