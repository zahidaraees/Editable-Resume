// Capture form elements
var form = document.getElementById('resume-form');
var generateBtn = document.getElementById('generate-btn');
var resumeOutput = document.getElementById('resumeOutput');
// Function to handle form submission and generate the resume
generateBtn.addEventListener('click', function (event) {
    event.preventDefault();
    // Capture input data from the form
    var profilepicInput = document.getElementById('profilepic');
    var userName = document.getElementById('username').value;
    var fullName = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var skills = document.getElementById('skills').value;
    var qualification = document.getElementById('Qualification').value;
    var professionalQualification = document.getElementById('education').value;
    var experience = document.getElementById('Experience').value;
    // Validate the form
    if (!userName || !fullName || !email || !phone || !address || !skills || !qualification || !professionalQualification || !experience) {
        alert("Please fill out all fields.");
        return;
    }
    // Read the uploaded profile picture (if any)
    var profilePicDataUrl = null;
    if (profilepicInput.files && profilepicInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            profilePicDataUrl = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            displayResume(profilePicDataUrl);
        };
        reader.readAsDataURL(profilepicInput.files[0]);
    }
    else {
        displayResume(null);
    }
    // Function to display the resume with or without profile picture
    function displayResume(profilePicDataUrl) {
        var resumeHTML = "\n      <div class=\"resume-container\">\n        <h2><u>".concat(fullName, "</u></h2>\n        ").concat(profilePicDataUrl ? "<p><img src=\"".concat(profilePicDataUrl, "\" alt=\"Profile Picture\" style=\"width: 180px; height: 180px; object-fit: cover; border-radius: 50%;\"></p>") : '', "\n        <hr>\n        <p><strong>Username:</strong> ").concat(userName, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <p><strong>Residential Address:</strong><br>").concat(address, "</p>\n        <h3>Skills:</h3> \n        <p>").concat(skills, "</p>\n        <h3>Education:</h3>\n        <p><strong>Academic Qualification:</strong><br>").concat(qualification, "</p>\n        <p><strong>Professional Qualification:</strong><br>").concat(professionalQualification, "</p>\n        <h3>Work Experience:</h3>\n        <p>").concat(experience, "</p>\n      </div>\n    ");
        resumeOutput.innerHTML = resumeHTML;
    }
});
