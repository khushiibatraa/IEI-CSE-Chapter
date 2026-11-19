/**
 * IEI Students' Chapter - Department of Computer Science & Engineering
 * Central Club Data & Configuration File
 * 
 * Beginner-friendly and easy to edit: Update any section's content,
 * events, team members, or links below.
 */

export const clubData = {
  chapter: {
    name: "IEI Students' Chapter",
    department: "Department of Computer Science & Engineering",
    parentBody: "The Institution of Engineers (India)",
    tagline: "Engineering Ideas. Building Tomorrow.",
    estd: "1920",
    royalCharter: "1935",
    motto: "सर्वभूतहिते रताः (Committed to the Welfare of All)",
    description: "The official Computer Science and Engineering Students' Chapter of The Institution of Engineers (India). We cultivate engineering excellence, scientific inquiry, practical systems development, and high-caliber technical leadership among undergraduate and postgraduate engineers."
  },

  stats: [
    { value: "100+", label: "Years of IEI Heritage", detail: "Estd. 1920, Royal Charter 1935" },
    { value: "500+", label: "Active Student Members", detail: "CSE & Allied Disciplines" },
    { value: "40+", label: "Annual Technical Events", detail: "Workshops, Seminars & Sprints" },
    { value: "100%", label: "Peer-Led Innovation", detail: "Hands-on projects & open source" }
  ],

  about: {
    overview: "Established under the aegis of The Institution of Engineers (India)—the pioneer national body that represents India's engineering fraternity—our CSE Students' Chapter serves as a hub of scholarly and applied technical pursuits.",
    mission: "To foster an environment of technical rigor, continuous inquiry, and ethical engineering by organizing cutting-edge workshops, hackathons, research symposiums, and real-world software engineering initiatives.",
    vision: "To develop globally competent computer science professionals and ethical innovators equipped to solve critical societal and industrial challenges through computing sciences.",
    values: [
      {
        title: "Technical Rigor",
        description: "Focusing on core fundamentals of computer science, algorithmic complexity, systems engineering, and modern toolchains."
      },
      {
        title: "Collaborative Engineering",
        description: "Promoting team-based problem solving, open-source contribution, and cross-disciplinary research."
      },
      {
        title: "Professional Ethics",
        description: "Upholding the proud code of ethics established by The Institution of Engineers (India) for responsible technology."
      },
      {
        title: "Mentorship & Growth",
        description: "Structured peer mentoring pathways pairing senior scholars and alumni with junior undergraduates."
      }
    ]
  },

  activities: [
    {
      id: "workshops",
      category: "Technical Workshops",
      title: "Hands-On Systems & Modern Tech Workshops",
      badge: "Hands-on Lab",
      description: "Intensive weekend masterclasses covering modern systems programming, cloud architecture, deep learning pipelines, and cryptographic security.",
      topics: ["Distributed Systems", "Cloud & Docker / K8s", "Applied Machine Learning", "Secure Code Audit"],
      schedule: "Bi-Weekly on Saturdays"
    },
    {
      id: "hackathons",
      category: "Hackathons",
      title: "Ideate, Build & Ship Hackathons",
      badge: "Flagship Sprint",
      description: "Fast-paced 24-to-36-hour hackathons where interdisciplinary student squads engineer functional prototypes tackling real-world domain challenges.",
      topics: ["36-Hour National Sprint", "FinTech & Web3", "Smart City Infrastructure", "Healthcare Tech"],
      schedule: "Annual Flagship + Semester Minis"
    },
    {
      id: "competitions",
      category: "Coding Competitions",
      title: "Algorithmic Challenges & CP Contests",
      badge: "Competitive Track",
      description: "Regular competitive programming contests and debugging sprints designed to strengthen algorithmic intuition, data structures, and ICPC readiness.",
      topics: ["ICPC Format Sprints", "Graph Algorithms & DP", "Bug Hunting Contests", "Code Golf & Speed Coding"],
      schedule: "Monthly Contests"
    },
    {
      id: "lectures",
      category: "Guest Lectures & Seminars",
      title: "Distinguished Academic & Industry Seminars",
      badge: "Distinguished Series",
      description: "Invited technical talks by seasoned engineers, distinguished researchers, and industry leaders discussing production software and computing frontiers.",
      topics: ["System Design at Scale", "Quantum Computing Basics", "Research Paper Writing", "Engineering Leadership"],
      schedule: "Monthly Sessions"
    },
    {
      id: "projects",
      category: "Technical Projects",
      title: "Open Source Initiatives & Applied Research",
      badge: "Research & Build",
      description: "Guided project incubation where student teams build production-grade campus software systems, contribute to open-source, and author conference papers.",
      topics: ["Campus Automation Suite", "Federated Learning Lab", "Autonomous Robotics Vision", "Research Paper Grants"],
      schedule: "Year-Round Incubation"
    }
  ],

  events: [
    {
      id: 1,
      type: "upcoming",
      category: "Workshop",
      title: "Production-Grade Docker & Kubernetes for Engineers",
      date: "December 5, 2026",
      time: "10:00 AM – 4:00 PM IST",
      venue: "Advanced Computing Lab 4 & Hybrid Stream",
      speaker: "DevOps Engineer & Alumni Mentor",
      description: "A deep dive into containerization, multi-stage builds, container orchestration, service discovery, and declarative deployment manifests.",
      status: "Registrations Open",
      seats: "45 seats remaining",
      prerequisites: "Basic Linux terminal commands, fundamentals of HTTP networking."
    },
    {
      id: 2,
      type: "upcoming",
      category: "Hackathon",
      title: "HackIEI 2026: 36-Hour National Student Hackathon",
      date: "January 16 – 18, 2027",
      time: "Friday 6:00 PM – Sunday 10:00 AM",
      venue: "University Technology Innovation Center",
      speaker: "Jury from Industry & Academic Scholars",
      description: "Our premier annual hackathon with cash rewards, internship opportunities, and industry mentorship across 4 dedicated tracks: AI Systems, Infrastructure, Sustainability, and Cybersecurity.",
      status: "Team Application Open",
      seats: "60 Teams Max",
      prerequisites: "Teams of 3 to 4 undergraduate engineering students."
    },
    {
      id: 3,
      type: "upcoming",
      category: "Seminar",
      title: "Demystifying Large Language Models: Architecture to Inference",
      date: "December 18, 2026",
      time: "2:30 PM – 5:00 PM IST",
      venue: "Main Auditorium, Block C",
      speaker: "Research Scientist, AI Foundations Lab",
      description: "Explore the internal mathematics of attention mechanisms, tensor parallel inference, quantization techniques, and ethical AI deployment.",
      status: "Open to All",
      seats: "Auditorium seating",
      prerequisites: "Open to all students and faculty members."
    },
    {
      id: 4,
      type: "past",
      category: "Competition",
      title: "ByteCode 2026: Inter-College Algorithmic Showdown",
      date: "October 12, 2026",
      time: "Completed",
      venue: "Online Contest Platform",
      speaker: "IEI CP Wing",
      description: "Over 350 competitive programmers solved 8 challenging problems spanning dynamic programming, segment trees, and network flow over 3 hours.",
      status: "Completed",
      seats: "380 Participants",
      prerequisites: "Archived leaderboard and problem editorial available on GitHub."
    },
    {
      id: 5,
      type: "past",
      category: "Workshop",
      title: "Secure Coding & Web Vulnerability Assessment (OWASP Top 10)",
      date: "September 20, 2026",
      time: "Completed",
      venue: "Cyber Security Research Center",
      speaker: "Certified Ethical Hacker & Alumni",
      description: "Hands-on exploitation and defense drills focusing on SQL injection prevention, SSRF mitigations, JWT best practices, and secure API architecture.",
      status: "Completed",
      seats: "80 Participants",
      prerequisites: "Lab recordings and sample vulnerability repositories distributed."
    }
  ],

  team: {
    faculty: [
      {
        id: "fac-1",
        name: "Dr. K. S. Ramanathan",
        role: "Chief Patron & Head of Department",
        department: "Department of Computer Science & Engineering",
        qualification: "Ph.D., FIE, Senior Member IEEE",
        bio: "Over 25 years of research and teaching expertise in High-Performance Computing, Distributed Systems, and Institutional Leadership."
      },
      {
        id: "fac-2",
        name: "Prof. Ananya Sengupta",
        role: "Faculty Advisor & Chapter Counselor",
        department: "Department of Computer Science & Engineering",
        qualification: "M.Tech, MIE, Ph.D. Scholar",
        bio: "Specializing in Natural Language Processing and Software Engineering. Passionate about mentoring students in competitive innovation and institutional chapters."
      }
    ],
    students: [
      {
        id: "stu-1",
        name: "Aarav Sharma",
        role: "President",
        year: "Final Year, B.Tech CSE",
        focus: "Distributed Systems & Cloud",
        email: "aarav.sharma@chapter.iei.edu"
      },
      {
        id: "stu-2",
        name: "Devika Menon",
        role: "Vice President",
        year: "Final Year, B.Tech CSE",
        focus: "Machine Learning & Research",
        email: "devika.menon@chapter.iei.edu"
      },
      {
        id: "stu-3",
        name: "Rohan Kulkarni",
        role: "Technical Head",
        year: "Third Year, B.Tech CSE",
        focus: "Systems Architecture & Rust/Go",
        email: "rohan.k@chapter.iei.edu"
      },
      {
        id: "stu-4",
        name: "Sneha Patel",
        role: "General Secretary",
        year: "Third Year, B.Tech CSE",
        focus: "Operations & Community Outreach",
        email: "sneha.p@chapter.iei.edu"
      },
      {
        id: "stu-5",
        name: "Aditya Verma",
        role: "Competitive Programming Lead",
        year: "Third Year, B.Tech CSE",
        focus: "Algorithms, Graphs & ICPC",
        email: "aditya.v@chapter.iei.edu"
      },
      {
        id: "stu-6",
        name: "Meera Nair",
        role: "Design & Media Coordinator",
        year: "Second Year, B.Tech CSE",
        focus: "UI/UX & Creative Engineering",
        email: "meera.n@chapter.iei.edu"
      }
    ]
  },

  membership: {
    eligibility: "Open to all enrolled students in B.Tech / M.Tech Computer Science and allied engineering departments.",
    benefits: [
      "Official IEI Student Membership Credentials recognized nationally across engineering bodies.",
      "Priority registration and subsidized entry fees for technical workshops, seminars, and certification courses.",
      "Access to project incubation mentorship, hardware labs, and student research paper funding grants.",
      "Eligibility to participate in regional, national, and state-level IEI student conventions and awards.",
      "Peer-driven collaborative study groups, ICPC competitive training, and alumni referral networks.",
      "Leadership opportunities in coordinating flagship symposiums, hackathons, and community outreach."
    ],
    steps: [
      { step: "01", title: "Fill Details", desc: "Submit your basic academic details and areas of technical interest." },
      { step: "02", title: "Review & Verification", desc: "Our executive committee verifies enrollment with department records." },
      { step: "03", title: "Welcome & Induction", desc: "Receive your chapter membership kit, Discord/Slack access, and orientation schedule." }
    ]
  },

  contact: {
    email: "iei.cse@university.edu.in",
    secondaryEmail: "adviser.iei@university.edu.in",
    phone: "+91 (0) 11 2875 4321",
    office: "Room 304, Department of Computer Science & Engineering, Academic Block 2",
    campus: "University Institute of Technology & Engineering Campus",
    hours: "Monday – Friday: 9:00 AM – 5:30 PM",
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com", label: "linkedin.com/company/iei-cse" },
      { name: "GitHub", url: "https://github.com", label: "github.com/iei-cse-chapter" },
      { name: "Twitter/X", url: "https://twitter.com", label: "@IEI_CSE_Chapter" },
      { name: "Instagram", url: "https://instagram.com", label: "@iei_cse_chapter" }
    ]
  }
};
