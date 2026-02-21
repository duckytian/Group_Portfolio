
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("show");
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

function navigateToPortfolio(url) {
  window.location.href = url;
}

window.addEventListener("load", function () {
  document.body.style.opacity = "0";
  document.body.style.transition = "opacity 0.5s ease";
  setTimeout(() => {
    document.body.style.opacity = "1";
  }, 100);
});

window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

document.querySelectorAll(".member-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

document.addEventListener("click", function (e) {
  const menu = document.getElementById("navMenu");
  const mobileBtn = document.querySelector(".mobile-menu");

  if (!menu.contains(e.target) && !mobileBtn.contains(e.target)) {
    menu.classList.remove("show");
  }
});

function updateGreeting() {
  const hour = new Date().getHours();
  const heroText = document.querySelector(".hero p");

  if (hour < 12) {
    heroText.textContent =
      "Good morning! Hi! Ready to create amazing digital experiences?";
  } else if (hour < 18) {
    heroText.textContent =
      "Good afternoon! Hi! Let's build something incredible today.";
  } else {
    heroText.textContent =
      "Good evening! Hi! Crafting tomorrow's digital experiences.";
  }
}

updateGreeting();

// CEIS
// Greeting modal
function showGreeting() {
  const modal = document.getElementById("myModal");
  const title = document.getElementById("modalTitle");
  const text = document.getElementById("modalText");

  const greetings = [
    {
      title: "Hello there! 👋",
      text: "Thanks for visiting my portfolio! I'm passionate about creating user-centered designs that make a difference.",
    },
    {
      title: "Welcome! 🌟",
      text: "I love turning complex problems into simple, beautiful solutions. Let's create something amazing together!",
    },
    {
      title: "Hey! 🎨",
      text: "Design is not just what it looks like - design is how it works. Let's make it work beautifully!",
    },
  ];

  const randomGreeting =
    greetings[Math.floor(Math.random() * greetings.length)];
  title.textContent = randomGreeting.title;
  text.textContent = randomGreeting.text;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Skill card animation
function animateSkill(card) {
  card.style.transform = "rotate(360deg) scale(1.1)";
  setTimeout(() => {
    card.style.transform = "rotate(0deg) scale(1)";
  }, 600);
}

// Project details
function showProjectDetails(projectName) {
  const modal = document.getElementById("myModal");
  const title = document.getElementById("modalTitle");
  const text = document.getElementById("modalText");

  title.textContent = projectName;
  text.textContent = `This is one of my favorite projects! I'd love to tell you more about the design process and challenges we solved. Feel free to reach out!`;
  modal.style.display = "block";
}

let showingMore = false;
function toggleProjects() {
  const btn = event.target;
  if (!showingMore) {
    btn.textContent = "Show Less Projects";
    document.querySelectorAll(".project-card").forEach((card, index) => {
      setTimeout(() => {
        card.style.transform = "scale(1.05)";
        setTimeout(() => {
          card.style.transform = "scale(1)";
        }, 200);
      }, index * 100);
    });
    showingMore = true;
  } else {
    btn.textContent = "Show More Projects";
    showingMore = false;
  }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const modal = document.getElementById("myModal");
    const title = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");

    title.textContent = "Copied! 📋";
    modalText.textContent = `Email address "${text}" has been copied to your clipboard!`;
    modal.style.display = "block";
  });
}

window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress-fill");
  progressBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const width = bar.style.width;
      bar.style.width = "0%";
      setTimeout(() => {
        bar.style.width = width;
      }, 200);
    }
  });
}

window.addEventListener("scroll", () => {
  animateProgressBars();
});

window.addEventListener("load", () => {
  setTimeout(animateProgressBars, 1000);
});
// LUGO
// Greeting modal
function showGreeting() {
  const modal = document.getElementById("myModal");
  const title = document.getElementById("modalTitle");
  const text = document.getElementById("modalText");

  const greetings = [
    {
      title: "Hey there! 🚀",
      text: "Ready to create content that actually converts? Let's turn your brand story into results!",
    },
    {
      title: "Welcome! 📝",
      text: "Great content isn't just about words - it's about creating connections that drive action.",
    },
    {
      title: "Let's Talk! 💡",
      text: "Every brand has a story worth telling. I help you tell yours in a way that resonates and converts.",
    },
  ];

  const randomGreeting =
    greetings[Math.floor(Math.random() * greetings.length)];
  title.textContent = randomGreeting.title;
  text.textContent = randomGreeting.text;
  modal.style.display = "block";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
// Service card animation
function animateService(card) {
  card.style.transform = "scale(1.1) rotate(2deg)";
  setTimeout(() => {
    card.style.transform = "scale(1) rotate(0deg)";
  }, 400);
}
// Portfolio details
function showPortfolioDetails(projectName) {
  const modal = document.getElementById("myModal");
  const title = document.getElementById("modalTitle");
  const text = document.getElementById("modalText");

  const projectDetails = {
    
  };

  title.textContent = projectName + " Case Study";
  text.textContent =
    projectDetails[projectName] ||
    "This project showcases strategic content development that drives real business results. I'd love to discuss how we can create similar success for your brand!";
  modal.style.display = "block";
}
// Schedule modal
function showScheduleModal() {
  const modal = document.getElementById("myModal");
  const title = document.getElementById("modalTitle");
  const text = document.getElementById("modalText");

  title.textContent = "Let's Schedule! 📅";
  text.textContent =
    "I'd love to discuss your content goals and how we can achieve them together. Reach out via email to book a free 30-minute strategy session!";
  modal.style.display = "block";
}
// Copy to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const modal = document.getElementById("myModal");
    const title = document.getElementById("modalTitle");
    const modalText = document.getElementById("modalText");

    title.textContent = "Copied! 📋";
    modalText.textContent = `Email address "${text}" has been copied to your clipboard! I look forward to hearing from you.`;
    modal.style.display = "block";
  });
}
// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// Animate portfolio metrics on scroll
function animateMetrics() {
  const metrics = document.querySelectorAll(".metric-number");
  metrics.forEach((metric) => {
    const rect = metric.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const finalValue = metric.textContent;
      const isPercentage = finalValue.includes("%");
      const numericValue = parseInt(finalValue);

      let currentValue = 0;
      const increment = numericValue / 30;
      const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= numericValue) {
          currentValue = numericValue;
          clearInterval(timer);
        }
        metric.textContent =
          Math.floor(currentValue) + (isPercentage ? "%" : "");
      }, 50);
    }
  });
}
// Timeline animation
function animateTimeline() {
  const timelineItems = document.querySelectorAll(".timeline-item");
  timelineItems.forEach((item, index) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setTimeout(() => {
        item.style.transform = "translateX(20px)";
        setTimeout(() => {
          item.style.transform = "translateX(0)";
        }, 200);
      }, index * 100);
    }
  });
}
// Scroll animations
window.addEventListener("scroll", () => {
  animateMetrics();
  animateTimeline();
});
// Initialize animations on load
window.addEventListener("load", () => {
  setTimeout(animateMetrics, 1000);
  setTimeout(animateTimeline, 1500);
});

// BORJA
// Random coding quotes

function showRandomQuote() {
  const modal = document.getElementById("myModal");
  const title = document.getElementById("modalTitle");
  const text = document.getElementById("modalText");
  const codeSnippet = document.getElementById("codeSnippet");
const codingQuotes = [
  {
    quote: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
  },
  {
    quote: "First, solve the problem. Then, write the code.",
    author: "John Johnson",
  },
  {
    quote: "Experience is the name everyone gives to their mistakes.",
    author: "Oscar Wilde",
  },
  {
    quote: "The best error message is the one that never shows up.",
    author: "Thomas Fuchs",
  },
];


  const randomQuote =
    codingQuotes[Math.floor(Math.random() * codingQuotes.length)];
  title.textContent = "💻 Developer Wisdom";
  text.innerHTML = `"${randomQuote.quote}"<br><br><em>- ${randomQuote.author}</em>`;
  codeSnippet.style.display = "none";
  modal.style.display = "block";
}

// Show tech stack details
function showTechDetails(category) {
  const modal = document.getElementById("myModal");
  const title = document.getElementById("modalTitle");
  const text = document.getElementById("modalText");
  const codeSnippet = document.getElementById("codeSnippet");

  const techDetails = {
    Frontend: {
      description:
        "I specialize in creating responsive, interactive user interfaces with modern frameworks and libraries.",
      code: `// React Component Example\nconst UserProfile = ({ user }) => {\n  const [isLoading, setIsLoading] = useState(false);\n  \n  return (\n    <div className="profile-card">\n      <h2>{user.name}</h2>\n      <p>{user.role}</p>\n    </div>\n  );\n};`,
    },
    Backend: {
      description:
        "Building robust APIs and server-side applications with scalable architecture and best practices.",
      code: `// Express.js API Route\napp.post('/api/users', async (req, res) => {\n  try {\n    const user = await User.create(req.body);\n    res.status(201).json(user);\n  } catch (error) {\n    res.status(400).json({ error: error.message });\n  }\n});`,
    },
    Database: {
      description:
        "Designing efficient database schemas and optimizing queries for performance.",
      code: `// MongoDB Aggregation\ndb.users.aggregate([\n  { $match: { active: true } },\n  { $group: { _id: "$role", count: { $sum: 1 } } },\n  { $sort: { count: -1 } }\n]);`,
    },
    DevOps: {
      description:
        "Implementing CI/CD pipelines and containerized deployments for reliable software delivery.",
      code: `# Dockerfile\nFROM node:16-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD ["npm", "start"]`,
    },
  };

  const detail = techDetails[category];
  title.textContent = `${category} Technologies`;
  text.textContent = detail.description;
  codeSnippet.textContent = detail.code;
  codeSnippet.style.display = "block";
  modal.style.display = "block";
}

// Show project code
function showProjectCode(projectName) {
  const modal = document.getElementById("myModal");
  const title = document.getElementById("modalTitle");
  const text = document.getElementById("modalText");
  const codeSnippet = document.getElementById("codeSnippet");

  const projectCodes = {
    "Task Manager": `// WebSocket connection for real-time updates\nconst socket = io();\n\nsocket.on('taskUpdate', (task) => {\n  updateTaskInUI(task);\n});\n\nconst updateTask = async (taskId, updates) => {\n  const response = await fetch(\`/api/tasks/\${taskId}\`, {\n    method: 'PATCH',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(updates)\n  });\n  \n  socket.emit('taskUpdated', await response.json());\n};`,
    "E-Commerce": `// Payment processing service\nclass PaymentService {\n  async processPayment(paymentData) {\n    const stripe = require('stripe')(process.env.STRIPE_SECRET);\n    \n    const paymentIntent = await stripe.paymentIntents.create({\n      amount: paymentData.amount,\n      currency: 'usd',\n      customer: paymentData.customerId\n    });\n    \n    return paymentIntent;\n  }\n}`,
    "API Gateway": `// Rate limiting middleware\nconst rateLimit = require('express-rate-limit');\n\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 100, // limit each IP to 100 requests per windowMs\n  message: 'Too many requests from this IP'\n});\n\napp.use('/api/', limiter);`,
  };

  title.textContent = `${projectName} - Code Sample`;
  text.textContent = "Here's a code snippet from this project:";
  codeSnippet.textContent = projectCodes[projectName];
  codeSnippet.style.display = "block";
  modal.style.display = "block";
}

// Animate counter
function animateCounter(card) {
  const counter = card.querySelector(".stat-number");
  const target = parseInt(counter.getAttribute("data-target"));
  const duration = 2000;
  const increment = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      counter.textContent = target + (target === 99 ? "+" : "");
      clearInterval(timer);
    } else {
      counter.textContent = Math.floor(current);
    }
  }, 16);
}

// Execute custom terminal command
function executeCommand() {
  const commands = [
    {
      cmd: "git status",
      output:
        "On branch main\nYour branch is up to date with origin/main.\nnothing to commit, working tree clean",
    },
    {
      cmd: "npm test",
      output:
        "Test Suites: 12 passed, 12 total\nTests: 89 passed, 89 total\nSnapshots: 0 total",
    },
    {
      cmd: "docker ps",
      output:
        'CONTAINER ID   IMAGE     COMMAND   STATUS\n3f2a1b4c5d6e   app:latest   "npm start"   Up 2 hours',
    },
    {
      cmd: "uptime",
      output:
        "System uptime: 42 days, 13 hours, 37 minutes\nCoffee level: Critical ☕",
    },
  ];

  const randomCmd = commands[Math.floor(Math.random() * commands.length)];
  const modal = document.getElementById("myModal");
  const title = document.getElementById("modalTitle");
  const text = document.getElementById("modalText");
  const codeSnippet = document.getElementById("codeSnippet");

  title.textContent = `Terminal Output`;
  text.textContent = `$ ${randomCmd.cmd}`;
  codeSnippet.textContent = randomCmd.output;
  codeSnippet.style.display = "block";
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Auto-animate counters on scroll
function animateCountersOnScroll() {
  const counters = document.querySelectorAll(".stat-number");
  counters.forEach((counter) => {
    const rect = counter.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      if (counter.textContent === "0") {
        animateCounter(counter.parentElement);
      }
    }
  });
}

window.addEventListener("scroll", animateCountersOnScroll);