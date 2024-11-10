
const generateBtn = document.getElementById('generate-btn');
const toggleBtn = document.getElementById('toggle-btn');
const downloadBtn = document.getElementById('download-btn');
const shareBtn = document.getElementById('share-btn');
const resumeContainer = document.getElementById('resume-container');


generateBtn.addEventListener('click', generateResume);
toggleBtn.addEventListener('click', toggleResume);
downloadBtn.addEventListener('click', downloadResume);
shareBtn.addEventListener('click', shareResume);


function generateResume() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const contact = document.getElementById('contact').value;
  const company = document.getElementById('company').value;
  const role = document.getElementById('role').value;
  const duration = document.getElementById('duration').value;
  const institution = document.getElementById('institution').value;
  const degree = document.getElementById('degree').value;
  const eduration = document.getElementById('eduration').value;
  const skill1 = document.getElementById('skill1').value;
  const skill2 = document.getElementById('skill2').value;
  const skill3 = document.getElementById('skill3').value;

  const resumeHtml = `
    <div class="resume-header">${name}</div>
    <div class="resume-section">
      <h3>Contact Info</h3>
      <p class="resume-text">Email: ${email}</p>
      <p class="resume-text">Contact No: ${contact}</p>
    </div>
    <div class="resume-section">
      <h3>Work Experience</h3>
      <p class="resume-text">${company}, ${role} (${duration})</p>
    </div>
    <div class="resume-section">
      <h3>Education</h3>
      <p class="resume-text">${institution}, ${degree} (${eduration})</p>
    </div>
    <div class="resume-section">
      <h3>Skills</h3>
      <p class="resume-text">${skill1}, ${skill2}, ${skill3}</p>
    </div>
  `;

  resumeContainer.innerHTML = resumeHtml;
}


function toggleResume() {
  resumeContainer.classList.toggle('hidden');
}


function downloadResume() {
  const resumeHtml = resumeContainer.innerHTML;
  const pdf = new jsPDF();
  pdf.fromHTML(resumeHtml);
  pdf.save('resume.pdf');
}


function shareResume() {
  const resumeUrl = URL.createObjectURL(new Blob([resumeContainer.innerHTML], { type: 'text/html' }));
  navigator.share({ title: 'Resume', url: resumeUrl });
}


