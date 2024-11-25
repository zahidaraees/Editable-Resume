// capture values from form elements.
const form = document.getElementById('resume-form') as HTMLFormElement;
const generateBtn = document.getElementById('generate-btn') as HTMLButtonElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

// To generate the resume, here is the function to handle form submission process.  
generateBtn.addEventListener('click', (event: Event) => {
  event.preventDefault();

  // Capture or assign, input data from the HTML form
  const profilepicInput = document.getElementById('profilepic') as HTMLInputElement;
  const userName = (document.getElementById('username') as HTMLInputElement).value;
  const fullName = (document.getElementById('fullname') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const address = (document.getElementById('address') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
  const qualification = (document.getElementById('Qualification') as HTMLTextAreaElement).value;
  const professionalQualification = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('Experience') as HTMLTextAreaElement).value;

  // Validate the form
  if (!userName || !fullName || !email || !phone || !address || !skills || !qualification || !professionalQualification || !experience) {
    alert("Please fill out all fields.");
    return;
  }

  // Read the uploaded profile picture. (if any)

  let profilePicDataUrl: string | null = null;

  if (profilepicInput.files && profilepicInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function(event) {
      profilePicDataUrl = event.target?.result as string;
      displayResume(profilePicDataUrl);
    };

    reader.readAsDataURL(profilepicInput.files[0]);
  } else {
    displayResume(null);
  }

  // Function to display resume with or without profile picture.

  function displayResume(profilePicDataUrl: string | null) {
    const resumeHTML = `
      <div class="resume-container">
        <h2><u>${fullName}</u></h2>
        ${profilePicDataUrl ? `<p><img src="${profilePicDataUrl}" alt="Profile Picture" style="width: 180px; height: 180px; object-fit: cover; border-radius: 50%;"></p>` : ''}
        <hr>
        <p><strong>Username:</strong> ${userName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Residential Address:</strong><br>${address}</p>
        <h3>Skills:</h3> 
        <p>${skills}</p>

        <h3>Education:</h3>
        <p><strong>Academic Qualification:</strong><br>${qualification}</p>
        <p><strong>Professional Qualification:</strong><br>${professionalQualification}</p>
        <h3>Work Experience:</h3>
        <p>${experience}</p>
      </div>
    `;
    resumeOutput.innerHTML = resumeHTML;
  }
});
