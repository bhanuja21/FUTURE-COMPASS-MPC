// roadmap.js - MBiPC Career Roadmap Viewer (Updated for Mermaid v11+)

const careerRoadmaps = {
    /* ===== TECHNICAL CAREERS ===== */
    "BTech Computer Science": `
        graph LR
        A[Foundation] --> A1["Programming (Python/C++)"]
        A --> A2[Discrete Mathematics]
        A --> A3[Computer Architecture]

        B[Core CS] --> B1[Data Structures]
        B --> B2[Algorithms]
        B --> B3[Operating Systems]

        C[Specialization] --> C1[AI/ML]
        C --> C2[Cybersecurity]
        C --> C3[Cloud Computing]

        D[Tools] --> D1[Git/Docker]
        D --> D2[SQL/NoSQL]
        D --> D3[AWS/GCP]

        E[Career Paths] --> E1[Software Engineer]
        E --> E2[Research Scientist]
        E --> E3[Tech Entrepreneur]
    `,

    "BTech Aerospace Engineering": `
        graph LR
        A[Core] --> A1[Fluid Mechanics]
        A --> A2[Thermodynamics]
        A --> A3[Flight Dynamics]

        B[Systems] --> B1[Avionics]
        B --> B2[Propulsion]
        B --> B3[Structural Design]

        C[Tools] --> C1["CAD (CATIA)"]
        C --> C2[MATLAB/Simulink]
        C --> C3[ANSYS CFD]

        D[Specialization] --> D1[Space Tech]
        D --> D2[Drone Systems]
        D --> D3[Aircraft Design]
    `,

    "BSc Physics (Hons)": `
graph LR
A[Core] --> A1[Classical Mechanics]
A --> A2[Quantum Physics]
A --> A3[Electromagnetism]

B[Math] --> B1[Linear Algebra]
B --> B2[Complex Analysis]
B --> B3[Differential Equations]

C[Labs] --> C1[Optics]
C --> C2[Solid State]
C --> C3[Nuclear]

D[Specialization] --> D1[Astrophysics]
D --> D2[Condensed Matter]
D --> D3[Particle Physics]

E[Career] --> E1[Research Scientist]
E --> E2[Academia]
E --> E3[Defense Tech]
`,

    "BSc Chemistry (Hons)": `
graph LR
A[Core] --> A1[Organic Chemistry]
A --> A2[Inorganic Chemistry]
A --> A3[Physical Chemistry]

B[Techniques] --> B1[Chromatography]
B --> B2[Spectroscopy]
B --> B3[Electrochemistry]

C[Labs] --> C1[Synthesis]
C --> C2[Analysis]
C --> C3[Computational]

D[Specialization] --> D1[Medicinal]
D --> D2[Material Science]
D --> D3[Environmental]

E[Career] --> E1[Pharma R&D]
E --> E2[CSIR Labs]
E --> E3[Chemical Analyst]
`,

    "BSc Mathematics (Hons)": `
graph LR
A[Core] --> A1[Real Analysis]
A --> A2[Abstract Algebra]
A --> A3[Topology]

B[Applied] --> B1[Numerical Methods]
B --> B2[Operations Research]
B --> B3[Statistics]

C[Tools] --> C1[MATLAB]
C --> C2[Python/R]
C --> C3[LaTeX]

D[Specialization] --> D1[Cryptography]
D --> D2[Financial Math]
D --> D3[Data Theory]

E[Career] --> E1[Quant Analyst]
E --> E2[Academia]
E --> E3[AI Researcher]
`,

    "BS-MS (IISER/NISER)": `
graph LR
A[Foundation] --> A1[Core Sciences]
A --> A2[Research Methods]
A --> A3[Interdisciplinary]

B[Specialization] --> B1[Biology+Chemistry]
B --> B2[Physics+Math]
B --> B3[Earth Sciences]

C[Research] --> C1[Lab Rotations]
C --> C2[Thesis Work]
C --> C3[Publications]

D[Tools] --> D1[Python]
D --> D2[Lab Equipment]
D --> D3[Data Analysis]

E[Career] --> E1[PhD Abroad]
E --> E2[CSIR/DRDO]
E --> E3[Science Policy]
`,

    "Dual Degree (BTech + MSc)": `
graph LR
A[Engineering] --> A1[Core Discipline]
A --> A2[Technical Electives]
A --> A3[Industry Training]

B[Science] --> B1[Advanced Math]
B --> B2[Physics/Chem]
B --> B3[Research Thesis]

C[Integration] --> C1[Computational]
C --> C2[Experimental]
C --> C3[Theoretical]

D[Career Paths] --> D1[R&D Engineer]
D --> D2[Tech Consultant]
D --> D3[Entrepreneur]

E[Exams] --> E1[GATE]
E --> E2[GRE]
E --> E3[CAT]
`,

    "BTech Electronics (DRDO Sponsorship)": `
graph LR
A[Core] --> A1[Circuit Theory]
A --> A2[Signals & Systems]
A --> A3[Microprocessors]

B[Defense Tech] --> B1[Radar Systems]
B --> B2[Avionics]
B --> B3[EW Systems]

C[Tools] --> C1[VHDL/Verilog]
C --> C2[CADENCE]
C --> C3[MATLAB DSP]

D[Training] --> D1[DRDO Labs]
D --> D2[Military Standards]
D --> D3[Security Protocols]

E[Career] --> E1[Defense PSUs]
E --> E2[ISRO]
E --> E3[Armed Forces]
`,

    "BSc Data Science": `
graph LR
A[Math] --> A1[Probability]
A --> A2[Linear Algebra]
A --> A3[Calculus]

B[Programming] --> B1[Python]
B --> B2[SQL]
B --> B3[Spark]

C[ML] --> C1[Regression]
C --> C2[Classification]
C --> C3[Deep Learning]

D[Visualization] --> D1[Matplotlib]
D --> D2[Tableau]
D --> D3[Plotly]

E[Domains] --> E1[Finance]
E --> E2[Healthcare]
E --> E3[IoT]
`
};

function loadRoadmap() {
    const container = document.getElementById("roadmap-container");
    const career = localStorage.getItem("selectedCareer");

    if (!career || !careerRoadmaps[career]) {
        container.innerHTML = `
            <div class="error">
                <h2>Roadmap Not Available</h2>
                <p>We couldn't find the requested career path.</p>
                <a href="results.html">← Back to Results</a>
                <p>Technical details: ${career ? `"${career}" not found` : "No career selected"}</p>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <h2>${career} Roadmap</h2>
        <div class="mermaid">${careerRoadmaps[career]}</div>
        <div style="margin-top: 1rem;">
            <button onclick="window.history.back()">← Back</button>
            <button onclick="window.print()">Print Roadmap</button>
        </div>
    `;

    if (window.mermaid) {
        window.mermaid.run();
    } else {
        console.error("Mermaid.js not loaded");
    }
}

document.addEventListener("DOMContentLoaded", loadRoadmap);