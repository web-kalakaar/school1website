/* ══════════════════════════════════════════════════════════
   teachers.js — Teacher data & card rendering
   ══════════════════════════════════════════════════════════ */

const teachers = [
  /* ── Coordinators ─────────────────────────────────────── */
  {
    name: "Ravi Sharma",
    subject: "Mathematics",
    degree: "M.Sc, B.Ed",
    experience: "10+ Years",
    phone: "9876543210",
    image: "logo.png",
    group: "Coordinators",
  },
  {
    name: "Sunita Gupta",
    subject: "Senior Coordinator",
    degree: "M.A, B.Ed",
    experience: "12+ Years",
    phone: "9876543211",
    image: "logo.png",
    group: "Coordinators",
  },

  /* ── Class 11–12 ──────────────────────────────────────── */
  {
    name: "Anita Verma",
    subject: "Physics",
    degree: "M.Sc, B.Ed",
    experience: "8+ Years",
    phone: "9876543212",
    image: "logo.png",
    group: "seniorsecondary",
  },
  {
    name: "Ramesh Patel",
    subject: "Chemistry",
    degree: "M.Sc, B.Ed",
    experience: "6+ Years",
    phone: "9876543213",
    image: "logo.png",
    group: "seniorsecondary",
  },
  {
    name: "Kavita Joshi",
    subject: "Biology",
    degree: "M.Sc, B.Ed",
    experience: "5+ Years",
    phone: "9876543214",
    image: "logo.png",
    group: "seniorsecondary",
  },
  {
    name: "Deepak Yadav",
    subject: "Accounts",
    degree: "M.Com, B.Ed",
    experience: "7+ Years",
    phone: "9876543215",
    image: "logo.png",
    group: "seniorsecondary",
  },
  {
    name: "Meena Tiwari",
    subject: "English",
    degree: "M.A, B.Ed",
    experience: "9+ Years",
    phone: "9876543216",
    image: "logo.png",
    group: "seniorsecondary",
  },

  /* ── Class 8–10 ───────────────────────────────────────── */
  {
    name: "Suresh Kumar",
    subject: "English",
    degree: "M.A, B.Ed",
    experience: "7+ Years",
    image: "logo.png",
    group: "secondary",
  },
  {
    name: "Preeti Singh",
    subject: "Mathematics",
    degree: "M.Sc, B.Ed",
    experience: "5+ Years",
    image: "logo.png",
    group: "secondary",
  },
  {
    name: "Amit Chauhan",
    subject: "Science",
    degree: "M.Sc, B.Ed",
    experience: "4+ Years",
    image: "logo.png",
    group: "secondary",
  },
  {
    name: "Rekha Mishra",
    subject: "Social Studies",
    degree: "M.A, B.Ed",
    experience: "6+ Years",
    image: "logo.png",
    group: "secondary",
  },
  {
    name: "Vinod Sharma",
    subject: "Hindi",
    degree: "M.A, B.Ed",
    experience: "8+ Years",
    image: "logo.png",
    group: "secondary",
  },

  /* ── Play Group – 7th ─────────────────────────────────── */
  {
    name: "Pooja Singh",
    subject: "Class Teacher",
    degree: "B.A, B.Ed",
    experience: "4+ Years",
    image: "logo.png",
    group: "primary",
  },
  {
    name: "Nisha Rathi",
    subject: "Art & Craft",
    degree: "B.F.A",
    experience: "3+ Years",
    image: "logo.png",
    group: "primary",
  },
  {
    name: "Hemant Bansal",
    subject: "Sports",
    degree: "B.P.Ed",
    experience: "5+ Years",
    image: "logo.png",
    group: "primary",
  },
  {
    name: "Lata Bhatt",
    subject: "Primary Teacher",
    degree: "D.El.Ed",
    experience: "6+ Years",
    image: "logo.png",
    group: "primary",
  },  {
    name: "Ravi Sharma",
    subject: "Mathematics",
    degree: "M.Sc, B.Ed",
    experience: "10+ Years",
    phone: "9876543210",
    image: "logo.png",
    group: "Coordinators",
  },
  {
    name: "Sunita Gupta",
    subject: "Senior Coordinator",
    degree: "M.A, B.Ed",
    experience: "12+ Years",
    phone: "9876543211",
    image: "logo.png",
    group: "Coordinators",
  },

  /* ── Class 11–12 ──────────────────────────────────────── */
  {
    name: "Anita Verma",
    subject: "Physics",
    degree: "M.Sc, B.Ed",
    experience: "8+ Years",
    phone: "9876543212",
    image: "logo.png",
    group: "seniorsecondary",
  },
  {
    name: "Ramesh Patel",
    subject: "Chemistry",
    degree: "M.Sc, B.Ed",
    experience: "6+ Years",
    phone: "9876543213",
    image: "logo.png",
    group: "seniorsecondary",
  },
  {
    name: "Kavita Joshi",
    subject: "Biology",
    degree: "M.Sc, B.Ed",
    experience: "5+ Years",
    phone: "9876543214",
    image: "logo.png",
    group: "seniorsecondary",
  },
  {
    name: "Deepak Yadav",
    subject: "Accounts",
    degree: "M.Com, B.Ed",
    experience: "7+ Years",
    phone: "9876543215",
    image: "logo.png",
    group: "seniorsecondary",
  },
  {
    name: "Meena Tiwari",
    subject: "English",
    degree: "M.A, B.Ed",
    experience: "9+ Years",
    phone: "9876543216",
    image: "logo.png",
    group: "seniorsecondary",
  },

  /* ── Class 8–10 ───────────────────────────────────────── */
  {
    name: "Suresh Kumar",
    subject: "English",
    degree: "M.A, B.Ed",
    experience: "7+ Years",
    image: "logo.png",
    group: "secondary",
  },
  {
    name: "Preeti Singh",
    subject: "Mathematics",
    degree: "M.Sc, B.Ed",
    experience: "5+ Years",
    image: "logo.png",
    group: "secondary",
  },
  {
    name: "Amit Chauhan",
    subject: "Science",
    degree: "M.Sc, B.Ed",
    experience: "4+ Years",
    image: "logo.png",
    group: "secondary",
  },
  {
    name: "Rekha Mishra",
    subject: "Social Studies",
    degree: "M.A, B.Ed",
    experience: "6+ Years",
    image: "logo.png",
    group: "secondary",
  },
  {
    name: "Vinod Sharma",
    subject: "Hindi",
    degree: "M.A, B.Ed",
    experience: "8+ Years",
    image: "logo.png",
    group: "secondary",
  },

  /* ── Play Group – 7th ─────────────────────────────────── */
  {
    name: "Pooja Singh",
    subject: "Class Teacher",
    degree: "B.A, B.Ed",
    experience: "4+ Years",
    image: "logo.png",
    group: "primary",
  },
  {
    name: "Nisha Rathi",
    subject: "Art & Craft",
    degree: "B.F.A",
    experience: "3+ Years",
    image: "logo.png",
    group: "primary",
  },
  {
    name: "Hemant Bansal",
    subject: "Sports",
    degree: "B.P.Ed",
    experience: "5+ Years",
    image: "logo.png",
    group: "primary",
  },
  {
    name: "Lata Bhatt",
    subject: "Primary Teacher",
    degree: "D.El.Ed",
    experience: "6+ Years",
    image: "logo.png",
    group: "primary",
  },  {
    name: "Ravi Sharma",
    subject: "Mathematics",
    degree: "M.Sc, B.Ed",
    experience: "10+ Years",
    phone: "9876543210",
    image: "logo.png",
    group: "Coordinators",
  },
  {
    name: "Sunita Gupta",
    subject: "Senior Coordinator",
    degree: "M.A, B.Ed",
    experience: "12+ Years",
    phone: "9876543211",
    image: "logo.png",
    group: "Coordinators",
  },

  /* ── Class 11–12 ──────────────────────────────────────── */
  {
    name: "Anita Verma",
    subject: "Physics",
    degree: "M.Sc, B.Ed",
    experience: "8+ Years",
    phone: "9876543212",
    image: "logo.png",
    group: "seniorsecondary",
  },
  {
    name: "Ramesh Patel",
    subject: "Chemistry",
    degree: "M.Sc, B.Ed",
    experience: "6+ Years",
    phone: "9876543213",
    image: "logo.png",
    group: "seniorsecondary",
  },
  {
    name: "Kavita Joshi",
    subject: "Biology",
    degree: "M.Sc, B.Ed",
    experience: "5+ Years",
    phone: "9876543214",
    image: "logo.png",
    group: "seniorsecondary",
  },
  {
    name: "Deepak Yadav",
    subject: "Accounts",
    degree: "M.Com, B.Ed",
    experience: "7+ Years",
    phone: "9876543215",
    image: "logo.png",
    group: "seniorsecondary",
  },
  {
    name: "Meena Tiwari",
    subject: "English",
    degree: "M.A, B.Ed",
    experience: "9+ Years",
    phone: "9876543216",
    image: "logo.png",
    group: "seniorsecondary",
  },

  /* ── Class 8–10 ───────────────────────────────────────── */
  {
    name: "Suresh Kumar",
    subject: "English",
    degree: "M.A, B.Ed",
    experience: "7+ Years",
    image: "logo.png",
    group: "secondary",
  },
  {
    name: "Preeti Singh",
    subject: "Mathematics",
    degree: "M.Sc, B.Ed",
    experience: "5+ Years",
    image: "logo.png",
    group: "secondary",
  },
  {
    name: "Amit Chauhan",
    subject: "Science",
    degree: "M.Sc, B.Ed",
    experience: "4+ Years",
    image: "logo.png",
    group: "secondary",
  },
  {
    name: "Rekha Mishra",
    subject: "Social Studies",
    degree: "M.A, B.Ed",
    experience: "6+ Years",
    image: "logo.png",
    group: "secondary",
  },
  {
    name: "Vinod Sharma",
    subject: "Hindi",
    degree: "M.A, B.Ed",
    experience: "8+ Years",
    image: "logo.png",
    group: "secondary",
  },

  /* ── Play Group – 7th ─────────────────────────────────── */
  {
    name: "Pooja Singh",
    subject: "Class Teacher",
    degree: "B.A, B.Ed",
    experience: "4+ Years",
    image: "logo.png",
    group: "primary",
  },
  {
    name: "Nisha Rathi",
    subject: "Art & Craft",
    degree: "B.F.A",
    experience: "3+ Years",
    image: "logo.png",
    group: "primary",
  },
  {
    name: "Hemant Bansal",
    subject: "Sports",
    degree: "B.P.Ed",
    experience: "5+ Years",
    image: "logo.png",
    group: "primary",
  },
  {
    name: "Lata Bhatt",
    subject: "Primary Teacher",
    degree: "D.El.Ed",
    experience: "6+ Years",
    image: "logo.png",
    group: "primary",
  },  {
    name: "Ravi Sharma",
    subject: "Mathematics",
    degree: "M.Sc, B.Ed",
    experience: "10+ Years",
    phone: "9876543210",
    image: "logo.png",
    group: "Coordinators",
  },
  {
    name: "Sunita Gupta",
    subject: "Senior Coordinator",
    degree: "M.A, B.Ed",
    experience: "12+ Years",
    phone: "9876543211",
    image: "logo.png",
    group: "Coordinators",
  },

  /* ── Class 11–12 ──────────────────────────────────────── */
  {
    name: "Anita Verma",
    subject: "Physics",
    degree: "M.Sc, B.Ed",
    experience: "8+ Years",
    phone: "9876543212",
    image: "logo.png",
    group: "seniorsecondary",
  },
  {
    name: "Ramesh Patel",
    subject: "Chemistry",
    degree: "M.Sc, B.Ed",
    experience: "6+ Years",
    phone: "9876543213",
    image: "logo.png",
    group: "seniorsecondary",
  },
  {
    name: "Kavita Joshi",
    subject: "Biology",
    degree: "M.Sc, B.Ed",
    experience: "5+ Years",
    phone: "9876543214",
    image: "logo.png",
    group: "seniorsecondary",
  },
  {
    name: "Deepak Yadav",
    subject: "Accounts",
    degree: "M.Com, B.Ed",
    experience: "7+ Years",
    phone: "9876543215",
    image: "logo.png",
    group: "seniorsecondary",
  },
  {
    name: "Meena Tiwari",
    subject: "English",
    degree: "M.A, B.Ed",
    experience: "9+ Years",
    phone: "9876543216",
    image: "logo.png",
    group: "seniorsecondary",
  },

  /* ── Class 8–10 ───────────────────────────────────────── */
  {
    name: "Suresh Kumar",
    subject: "English",
    degree: "M.A, B.Ed",
    experience: "7+ Years",
    image: "logo.png",
    group: "secondary",
  },
  {
    name: "Preeti Singh",
    subject: "Mathematics",
    degree: "M.Sc, B.Ed",
    experience: "5+ Years",
    image: "logo.png",
    group: "secondary",
  },
  {
    name: "Amit Chauhan",
    subject: "Science",
    degree: "M.Sc, B.Ed",
    experience: "4+ Years",
    image: "logo.png",
    group: "secondary",
  },
  {
    name: "Rekha Mishra",
    subject: "Social Studies",
    degree: "M.A, B.Ed",
    experience: "6+ Years",
    image: "logo.png",
    group: "secondary",
  },
  {
    name: "Vinod Sharma",
    subject: "Hindi",
    degree: "M.A, B.Ed",
    experience: "8+ Years",
    image: "logo.png",
    group: "secondary",
  },

  /* ── Play Group – 7th ─────────────────────────────────── */
  {
    name: "Pooja Singh",
    subject: "Class Teacher",
    degree: "B.A, B.Ed",
    experience: "4+ Years",
    image: "logo.png",
    group: "primary",
  },
  {
    name: "Nisha Rathi",
    subject: "Art & Craft",
    degree: "B.F.A",
    experience: "3+ Years",
    image: "logo.png",
    group: "primary",
  },
  {
    name: "Hemant Bansal",
    subject: "Sports",
    degree: "B.P.Ed",
    experience: "5+ Years",
    image: "logo.png",
    group: "primary",
  },
  {
    name: "Lata Bhatt",
    subject: "Primary Teacher",
    degree: "D.El.Ed",
    experience: "6+ Years",
    image: "logo.png",
    group: "primary",
  },
];

/* ── Map group key → container id ─────────────────────────── */
const groupContainerMap = {
  "Coordinators": "Coordinators",
  "seniorsecondary": "seniorsecondary",
  "secondary": "secondary",
  "primary": "primary",
};

/* ── Render teacher cards ──────────────────────────────────── */
teachers.forEach((teacher) => {
  const containerId = groupContainerMap[teacher.group];
  if (!containerId) return;

  const container = document.getElementById(containerId);
  if (!container) return;

  const card = document.createElement("div");
  card.classList.add("teacher-card");

  card.innerHTML = `
    <img src="${teacher.image}" alt="${teacher.name}" loading="lazy" />
    <h3>${teacher.name}</h3>
    <p class="subject">${teacher.subject}</p>
    <div class="info">
      <p>🎓 ${teacher.degree}</p>
      <p>🧑‍🏫 ${teacher.experience}</p>
      ${teacher.phone ? `<p>📞 ${teacher.phone}</p>` : ""}
    </div>
  `;

  container.appendChild(card);
});
