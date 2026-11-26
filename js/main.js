/*functions for form validation*/

// form validation function: marks every empty required field in red
// and shows a single alert listing all the problems
function validateForm(form) {
  let messages = [];
  let missing = [];

  form.querySelectorAll("[required]").forEach(function (field) {
    let empty = field.value.trim() === "";
    field.classList.toggle("error", empty);
    if (empty) {
      missing.push(form.querySelector('label[for="' + field.id + '"]').textContent);
    }
  });

  if (missing.length > 0) {
    messages.push("Please fill out: " + missing.join(", "));
  }

  let phone = form["phone"];
  if (phone.value != "" && !/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(phone.value)) {
    phone.classList.add("error");
    messages.push("Please enter a valid phone number.");
  }

  let email = form["email"];
  if (email.value != "" && (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1)) {
    email.classList.add("error");
    messages.push("Please enter a valid email address.");
  }

  if (messages.length > 0) {
    alert(messages.join("\n"));
    return false;
  }

  return true;
}

// remove the red as soon as the user starts fixing a field
let contactForm = document.querySelector("form");
if (contactForm) {
  contactForm.addEventListener("input", function (event) {
    event.target.classList.remove("error");
  });
}
