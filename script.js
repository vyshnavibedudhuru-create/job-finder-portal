const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Hyderabad",
    description: "Looking for a skilled frontend engineer with React experience."
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "TCS",
    location: "Bangalore",
    description: "Analyze business data and prepare reports using Python & Power BI."
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Infosys",
    location: "Chennai",
    description: "Creative designer with experience in Figma and Adobe XD."
  }
];

const container = document.getElementById("jobContainer");

function showJobs(list) {
  container.innerHTML = "";
  list.forEach(job => {
    container.innerHTML += `
      <div class="job-card">
        <h3>${job.title}</h3>
        <p><b>Company:</b> ${job.company}</p>
        <p><b>Location:</b> ${job.location}</p>
        <a href="#" class="view-btn" onclick="openJob(${job.id})">View Details</a>
      </div>
    `;
  });
}

showJobs(jobs);

// Popup Handling
const popup = document.getElementById("jobPopup");
const closeBtn = document.getElementById("closePopup");

function openJob(id) {
  const job = jobs.find(j => j.id === id);

  document.getElementById("popupTitle").innerText = job.title;
  document.getElementById("popupCompany").innerText = "Company: " + job.company;
  document.getElementById("popupLocation").innerText = "Location: " + job.location;
  document.getElementById("popupDesc").innerText = job.description;

  popup.classList.remove("hidden");
}

closeBtn.onclick = () => popup.classList.add("hidden");
popup.onclick = (e) => { if (e.target === popup) popup.classList.add("hidden"); };

// Search Jobs
document.getElementById("searchBox").addEventListener("input", function() {
  const text = this.value.toLowerCase();
  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(text) ||
    job.company.toLowerCase().includes(text) ||
    job.location.toLowerCase().includes(text)
  );
  showJobs(filtered);
});
