const form = document.getElementById("form");

const fullName = document.getElementById("full-name");
const place = document.getElementById("place");
const gender = document.getElementById("gender");
const email = document.getElementById("email");
const contactNumber = document.getElementById("contact-number");
const employmentStatus = document.getElementById("employment-status");
const qualification = document.getElementById("qualification");
const college = document.getElementById("college");
const graduationYear = document.getElementById("graduation-year");
const aboutAs = document.getElementById("about-as");
const joinSps = document.getElementById("join-sps");
const motives = document.getElementById("motives");
const learnAboutSps = document.getElementById("learn-about-sps");
const checkBox = document.getElementById("check-box");

function validateForm() {
  if (fullName.value == "") {
    document.getElementById("name-error").style.display = "block";

    fullName.scrollIntoView();
    fullName.style.borderColor = "red";
  }

  if (place.value == "") {
    document.getElementById("place-error").style.display = "block";

    place.scrollIntoView();
    place.style.borderColor = "red";
  }

  if (gender.value === "Gender") {
    document.getElementById("gender-error").style.display = "block";

    gender.scrollIntoView();
    gender.style.borderColor = "red";
  }

  if (email.value === "") {
    document.getElementById("email-error").style.display = "block";

    email.scrollIntoView();
    email.style.borderColor = "red";
  }

  if (email.value === "") {
    document.getElementById("email-error").style.display = "block";

    email.scrollIntoView();
    email.style.borderColor = "red";
  }

  if (contactNumber.value === "") {
    document.getElementById("contact-number-error").style.display = "block";

    contactNumber.scrollIntoView();
    contactNumber.style.borderColor = "red";
  }

  if (employmentStatus.value === "Employment Status") {
    document.getElementById("employment-status-error").style.display = "block";

    employmentStatus.scrollIntoView();
    employmentStatus.style.borderColor = "red";
  }

  if (qualification.value === "Educational Qualification") {
    document.getElementById("qualification-error").style.display = "block";

    qualification.scrollIntoView();
    qualification.style.borderColor = "red";
  }

  if (college.value === "") {
    document.getElementById("college-error").style.display = "block";

    college.scrollIntoView();
    college.style.borderColor = "red";
  }

  if (graduationYear.value === "") {
    document.getElementById("graduation-year-error").style.display = "block";

    graduationYear.scrollIntoView();
    graduationYear.style.borderColor = "red";
  }

  if (aboutAs.value === "") {
    document.getElementById("about-as-error").style.display = "block";

    aboutAs.scrollIntoView();
    aboutAs.style.borderColor = "red";
  }

  if (joinSps.value === "") {
    document.getElementById("join-sps-error").style.display = "block";

    joinSps.scrollIntoView();
    joinSps.style.borderColor = "red";
  }

  if (motives.value === "") {
    document.getElementById("motives-error").style.display = "block";

    motives.scrollIntoView();
    motives.style.borderColor = "red";
  }

  if (learnAboutSps.value === "From where did you learn about SPS?") {
    document.getElementById("learn-about-sps-error").style.display = "block";

    learnAboutSps.scrollIntoView();
    learnAboutSps.style.borderColor = "red";
  }

  if (checkBox.checked === false) {
    document.getElementById("check-box-error").style.display = "block";

    checkBox.scrollIntoView();
    checkBox.style.borderColor = "red";
  }

  if (
    (fullName.value == "") |
    (place.value == "") |
    (gender.value === "Gender") |
    (email.value === "") |
    (contactNumber.value === "") |
    (employmentStatus.value === "Employment Status") |
    (qualification.value === "Educational Qualification") |
    (college.value === "") |
    (graduationYear.value === "") |
    (aboutAs.value === "") |
    (joinSps.value === "") |
    (learnAboutSps.value === "From where did you learn about SPS?") |
    (checkBox.checked === false)
  ) {
    return false;
  }
}
