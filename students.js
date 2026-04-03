/* ══════════════════════════════════════════════════════════
   students.js — Topper data & card rendering
   ══════════════════════════════════════════════════════════ */

const toppers = [
  {
    name: "Sharad Rajput",
    class: "Class 12",
    subject: "Science",
    marks: "90.4%",
    image: "logo.png",
    year: "2025-26"
  },
  {
    name: "Priya Sharma",
    class: "Class 12",
    subject: "Science",
    marks: "88.6%",
    image: "logo.png",
    year: "2025-26"
  },
  {
    name: "Sohan Kumar",
    class: "Class 12",
    subject: "Commerce",
    marks: "95%",
    image: "logo.png",
    year: "2025-26"
  },
  {
    name: "Anjali Verma",
    class: "Class 12",
    subject: "Arts",
    marks: "92%",
    image: "logo.png",
    year: "2024-25"
  },
  {
    name: "Riya Verma",
    class: "Class 10",
    subject: "",
    marks: "96%",
    image: "logo.png",
    year: "2024-25"
  },
  {
    name: "Mohit Singh",
    class: "Class 10",
    subject: "",
    marks: "93.8%",
    image: "logo.png",
    year: "2025-26"
  },
  {
    name: "Kavya Gupta",
    class: "Class 10",
    subject: "",
    marks: "91.2%",
    image: "logo.png",
    year: "2024-25"
  },  {
    name: "Sharad Rajput",
    class: "Class 12",
    subject: "Science",
    marks: "90.4%",
    image: "logo.png",
    year: "2025-26"
  },
  {
    name: "Priya Sharma",
    class: "Class 12",
    subject: "Science",
    marks: "88.6%",
    image: "logo.png",
    year: "2025-26"
  },
  {
    name: "Sohan Kumar",
    class: "Class 12",
    subject: "Commerce",
    marks: "95%",
    image: "logo.png",
    year: "2025-26"
  },
  {
    name: "Anjali Verma",
    class: "Class 12",
    subject: "Arts",
    marks: "92%",
    image: "logo.png",
    year: "2024-25"
  },
  {
    name: "Riya Verma",
    class: "Class 10",
    subject: "",
    marks: "96%",
    image: "logo.png",
    year: "2024-25"
  },
  {
    name: "Mohit Singh",
    class: "Class 10",
    subject: "",
    marks: "93.8%",
    image: "logo.png",
    year: "2025-26"
  },
  {
    name: "Kavya Gupta",
    class: "Class 10",
    subject: "",
    marks: "91.2%",
    image: "logo.png",
    year: "2024-25"
  },  {
    name: "Sharad Rajput",
    class: "Class 12",
    subject: "Science",
    marks: "90.4%",
    image: "logo.png",
    year: "2025-26"
  },
  {
    name: "Priya Sharma",
    class: "Class 12",
    subject: "Science",
    marks: "88.6%",
    image: "logo.png",
    year: "2025-26"
  },
  {
    name: "Sohan Kumar",
    class: "Class 12",
    subject: "Commerce",
    marks: "95%",
    image: "logo.png",
    year: "2025-26"
  },
  {
    name: "Anjali Verma",
    class: "Class 12",
    subject: "Arts",
    marks: "92%",
    image: "logo.png",
    year: "2024-25"
  },
  {
    name: "Riya Verma",
    class: "Class 10",
    subject: "",
    marks: "96%",
    image: "logo.png",
    year: "2024-25"
  },
  {
    name: "Mohit Singh",
    class: "Class 10",
    subject: "",
    marks: "93.8%",
    image: "logo.png",
    year: "2025-26"
  },
  {
    name: "Kavya Gupta",
    class: "Class 10",
    subject: "",
    marks: "91.2%",
    image: "logo.png",
    year: "2024-25"
  }
];

/* ── Sort: Year (latest first) → Subject order ─────────────── */
const subjectOrder = ["Science", "Commerce", "Arts", ""];
toppers.sort((a, b) => {
  const yearCmp = b.year.localeCompare(a.year);
  if (yearCmp !== 0) return yearCmp;
  return subjectOrder.indexOf(a.subject) - subjectOrder.indexOf(b.subject);
});

/* ── Map class to container id ─────────────────────────────── */
const classContainerMap = {
  "Class 12": "class-12",
  "Class 10": "class-10"
};

/* ── Rank badges per container ─────────────────────────────── */
const rankCounters = {};

/* ── Render cards ──────────────────────────────────────────── */
toppers.forEach(student => {
  const containerId = classContainerMap[student.class];
  if (!containerId) return;

  const container = document.getElementById(containerId);
  if (!container) return;

  // Increment rank for this class
  if (!rankCounters[containerId]) rankCounters[containerId] = 0;
  rankCounters[containerId]++;
  const rank = rankCounters[containerId];

  const card = document.createElement("div");
  card.classList.add("topper-card");
  if (rank === 1) card.classList.add("rank-1");
  if (rank === 2) card.classList.add("rank-2");
  if (rank === 3) card.classList.add("rank-3");

  const subjectText = student.subject ? ` – ${student.subject}` : "";

  /* Rank medal emoji */
  const medal = rank === 1 ? "🥇" : rank === 2 ? "🥈" : rank === 3 ? "🥉" : `#${rank}`;

  card.innerHTML = `
    <span class="year-badge">${student.year}</span>
    <img src="${student.image}" alt="${student.name}" loading="lazy" />
    <h3>${student.name}</h3>
    <p class="class">${student.class}${subjectText}</p>
    <div class="marks">
      <span>${student.marks}</span>
    </div>
  `;

  container.appendChild(card);
});

/* ── Inject rank medal style if not in CSS ──────────────────── */
(function injectMedalStyle() {
  const s = document.createElement('style');
  s.textContent = `.rank-medal { font-size: 22px; margin-bottom: 6px; line-height: 1; }`;
  document.head.appendChild(s);
})();
