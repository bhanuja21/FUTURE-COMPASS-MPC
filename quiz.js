const questions = [
    { question: "Which MPC subject is your strongest?", options: ["Mathematics (love proofs/theory)", "Physics (problem-solving)", "Chemistry (labs/reactions)", "Equal in all"] },
    { question: "What type of problems do you enjoy most?", options: ["Derivations (Math)", "Numericals (Physics)", "Balancing equations (Chem)", "Visualizing concepts"] },
    { question: "Your lab performance is best in:", options: ["Physics experiments (optics/circuits)", "Chemical synthesis", "Data analysis", "None"] },
    { question: "When stuck on a concept, you:", options: ["Solve similar problems", "Ask teachers", "Watch tutorials", "Refer textbooks"] },

    // Learning Preferences
    { question: "Preferred study material?", options: ["Theoretical textbooks", "Video lectures", "Hands-on projects", "Case studies"] },
    { question: "Favorite class activity?", options: ["Math olympiads", "Physics demos", "Chemistry experiments", "Group discussions"] },
    { question: "Your project approach?", options: ["Detailed calculations", "Experimental verification", "Creative modeling", "Literature review"] },

    // Career Goals
    { question: "Post-12th goal?", options: ["BTech (Engineering)", "BSc (Pure Sciences)", "Integrated MSc (Research)", "Other"] },
    { question: "Dream workplace?", options: ["Research lab (ISRO/DRDO)", "Tech company (Google, Tesla)", "University/Teaching", "Startup"] },
    { question: "Most exciting innovation area?", options: ["AI algorithms", "Space technology", "Sustainable materials", "Quantum computing"] },

    // Skills & Preparation
    { question: "Your academic superpower?", options: ["Logical reasoning", "Experimental design", "Pattern recognition", "Teaching concepts"] },
    { question: "Comfort with advanced math?", options: ["Solve Olympiad problems", "Manage board exam level", "Need help", "Dislike math"] },
    { question: "Competitive exam plan?", options: ["JEE (Engineering)", "IISER/NEST (Science)", "CUET (University)", "Undecided"] },

    // Personality & Workstyle
    { question: "Preferred work environment?", options: ["Structured labs", "Flexible startups", "Academic research", "Corporate MNCs"] },
    { question: "Problem-solving style?", options: ["Step-by-step logic", "Creative experimentation", "Data-driven", "Team collaboration"] },
    { question: "Stress response during exams?", options: ["Analyze systematically", "Seek expert help", "Try multiple approaches", "Redo basics"] },

    // Future Trends
    { question: "Emerging field of interest?", options: ["Quantum tech", "Nanomaterials", "Astrochemistry", "Mathematical biology"] },
    { question: "Industry attraction?", options: ["Aerospace/Defense", "Renewable Energy", "Pharma/Chemicals", "Data Science"] },
    { question: "Primary career driver?", options: ["Technical challenges", "Scientific discovery", "Social impact", "Financial success"] },
    { question: "5-year vision?", options: ["Research scientist", "Engineer at top firm", "University professor", "Tech entrepreneur"] }
];

const questionContainer = document.getElementById("question-container");

// Generate Questions
questions.forEach((q, index) => {
    let questionHTML = `<p>${index + 1}. ${q.question}</p>`;
    q.options.forEach(option => {
        questionHTML += `<label><input type="radio" name="q${index}" value="${option}"> ${option}</label><br>`;
    });
    questionContainer.innerHTML += questionHTML + "<br>";
});

// Handle Form Submission
document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let selectedAnswers = [];
    questions.forEach((q, index) => {
        let selected = document.querySelector(`input[name="q${index}"]:checked`);
        selectedAnswers.push(selected ? selected.value : "None");
    });

    localStorage.setItem("userAnswers", JSON.stringify(selectedAnswers));
    window.location.href = "results.html";
}); 