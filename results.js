// Career matching configuration (20 careers)
const careerMatcher = {
    "BTech Computer Science": {
        matches: [
            { q: 0, a: "Mathematics (love proofs/theory)" },
            { q: 4, a: "Theoretical textbooks" },
            { q: 11, a: "Logical reasoning" }
        ]
    },
    "BTech Aerospace Engineering": {
        matches: [
            { q: 0, a: "Physics (problem-solving)" },
            { q: 8, a: "Research lab (ISRO/DRDO)" },
            { q: 17, a: "Space technology" }
        ]
    },
    "BTech Chemical Engineering": {
        matches: [
            { q: 0, a: "Chemistry (labs/reactions)" },
            { q: 2, a: "Chemical synthesis" },
            { q: 18, a: "Pharma/Chemicals" }
        ]
    },
    "BSc Physics (Hons)": {
        matches: [
            { q: 0, a: "Physics (problem-solving)" },
            { q: 7, a: "Theoretical (proofs/concepts)" },
            { q: 15, a: "Academic research" }
        ]
    },
    "BSc Chemistry (Hons)": {
        matches: [
            { q: 0, a: "Chemistry (labs/reactions)" },
            { q: 3, a: "Chemical synthesis" },
            { q: 19, a: "Sustainable materials" }
        ]
    },
    "BSc Mathematics (Hons)": {
        matches: [
            { q: 0, a: "Mathematics (love proofs/theory)" },
            { q: 12, a: "Solve Olympiad problems" },
            { q: 16, a: "Mathematical biology" }
        ]
    },
    "BS-MS (IISER/NISER)": {
        matches: [
            { q: 7, a: "Mix of both" },
            { q: 8, a: "Research lab (ISRO/DRDO)" },
            { q: 13, a: "IISER/NEST (Science)" }
        ]
    },
    "Dual Degree (BTech + MSc)": {
        matches: [
            { q: 5, a: "Math olympiads" },
            { q: 9, a: "Tech company (Google, Tesla)" },
            { q: 14, a: "JEE (Engineering)" }
        ]
    },
    "BTech Electronics (DRDO Sponsorship)": {
        matches: [
            { q: 1, a: "Numericals (Physics)" },
            { q: 10, a: "Defense/Aerospace" },
            { q: 17, a: "Quantum computing" }
        ]
    },
    "BSc Data Science": {
        matches: [
            { q: 0, a: "Equal in all" },
            { q: 6, a: "Data analysis" },
            { q: 20, a: "Technical challenges" }
        ]
    }
};

// Recommend top 3 careers
function recommendCareers(answers) {
    const scoredCareers = Object.entries(careerMatcher).map(([career, data]) => {
        const score = data.matches.reduce((total, { q, a }) =>
            answers[q] === a ? total + 1 : total, 0);
        return { career, score };
    });

    return scoredCareers
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
}

// Display top 3 careers (titles only, clickable)
document.addEventListener('DOMContentLoaded', function () {
    const userAnswers = JSON.parse(localStorage.getItem("userAnswers")) || [];
    const topCareers = recommendCareers(userAnswers);

    const resultsContainer = document.getElementById("career-results");
    resultsContainer.innerHTML = `
        <h2>Your Top 3 Career Recommendations</h2>
        <ul class="career-list">
            ${topCareers.map(career => `
                <li onclick="viewRoadmap('${career.career.replace(/'/g, "\\'")}')">
                    ${career.career}
                </li>
            `).join('')}
        </ul>
    `;
});

// View roadmap function
function viewRoadmap(career) {
    localStorage.setItem("selectedCareer", career);
    window.location.href = "roadmap.html";
}
