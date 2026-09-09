let points =0;

function addpoints() {
  points = points + 1;
  alert("Great! You earned 10 points.");
}
// 
document.addEventListener("DOMContentLoaded", function () {

    const reportBtn = document.getElementById("reportbtn");
    const issueSelect = document.getElementById("issue");
    const reportMessage = document.getElementById("reportMessage");
    const description = document.getElementById("description");
    const issuePhoto = document.getElementById("issuePhoto");

    reportBtn.addEventListener("click", function () {

        const issue = issueSelect.value;
        const details = description.value;
        if (details === "" ) {
          reportMessage.textContent = "Please describe the issue ."; 
          return;
        }

        if (issue === "") {
            reportMessage.textContent = "Please select an issue first.";
            return;
        }

        reportMessage.textContent =
            "Your " + issue + " has been reported successfully!";
            points = points + 10;
            document.getElementById("points").textContent = points;
            document.getElementById("myPoints").textContent = points;
            const issueBox = document.getElementById("reportedIssues");

const newIssue = document.createElement("div");

newIssue.className = "issue-card";

newIssue.innerHTML = `
    <strong>${issue.value}</strong>
    <p>${description.value}</p>
    <p>📍 ${locationInput.value}</p>
`;

issueBox.appendChild(newIssue);



        description.value = "";
        issuePhoto.value = "";
        location.value = "";
        issueSelect.value = "";
    });

});

document.querySelectorAll(".challenge-btn").forEach(function(button) {
    button.addEventListener("click", function() {
        points += 10;
        document.getElementById("points").textContent = points;

        button.textContent = "Completed ✓";
        button.disabled = true;

        alert("Great! You earned 10 points.");
    });
});


