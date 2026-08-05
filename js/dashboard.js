const Dashboard = (() => {
  const SIDEBAR_TOGGLE_KEY = "dashboard_sidebar_toggle";
  let currentMode = localStorage.getItem("userMode") || "hire";
  let currentUser = null;

  const menuConfig = {
    hire: [
      { id: "home", label: "Home", icon: "bi-house-door-fill", active: true },
      {
        id: "notifications",
        label: "Notifications",
        icon: "bi-bell-fill",
        badge: 3,
      },
      { id: "jobs", label: "My Jobs", icon: "bi-briefcase-fill" },
      { id: "contracts", label: "Contracts", icon: "bi-file-earmark-text" },
      { id: "payments", label: "Payments", icon: "bi-credit-card" },
      {
        id: "messages",
        label: "Messages",
        icon: "bi-chat-dots-fill",
        badge: 2,
      },
      { id: "help", label: "Help", icon: "bi-question-circle-fill" },
    ],
    tasker: [
      { id: "home", label: "Home", icon: "bi-house-door-fill", active: true },
      {
        id: "notifications",
        label: "Notifications",
        icon: "bi-bell-fill",
        badge: 5,
      },
      { id: "tasks", label: "Available Tasks", icon: "bi-list-task" },
      { id: "active", label: "Active Tasks", icon: "bi-play-circle-fill" },
      { id: "earnings", label: "Earnings", icon: "bi-graph-up" },
      {
        id: "messages",
        label: "Messages",
        icon: "bi-chat-dots-fill",
        badge: 1,
      },
      { id: "portfolio", label: "Portfolio", icon: "bi-images" },
      { id: "help", label: "Help", icon: "bi-question-circle-fill" },
    ],
  };

  const onboardingSteps = {
    hire: [
      {
        id: "phone",
        title: "Verify your phone number",
        description: "Confirm it's you to publish your first job post.",
        icon: "📱",
        required: true,
        completed: false,
      },
      {
        id: "billing",
        title: "Add a billing method",
        description: "This can increase your hiring speed by up to 3x.",
        icon: "💳",
        required: true,
        completed: false,
      },
      {
        id: "email",
        title: "Email address verified",
        description: "Confirmed and ready to hire.",
        icon: "✉️",
        required: true,
        completed: true,
      },
    ],
    tasker: [
      {
        id: "phone",
        title: "Verify your phone number",
        description: "Required to start accepting tasks.",
        icon: "📱",
        required: true,
        completed: false,
      },
      {
        id: "profile",
        title: "Complete your profile",
        description: "Add a photo, skills, and experience summary.",
        icon: "👤",
        required: true,
        completed: false,
      },
      {
        id: "payment",
        title: "Add payment method",
        description: "Where we'll send your earnings.",
        icon: "💰",
        required: true,
        completed: false,
      },
      {
        id: "identity",
        title: "Verify your identity",
        description: "Complete identity verification for security.",
        icon: "🔐",
        required: true,
        completed: false,
      },
    ],
  };

  const init = () => {
    if (typeof getCurrentUser === "function") {
      currentUser = getCurrentUser();
      if (!currentUser) {
        window.location.href = "/pages/auth/login_Version1.html";
        return;
      }
    }
    renderSidebar();
    renderTopbar();
    renderOnboarding();
    renderOverview();
    renderJobsSection();
    setupEventListeners();
  };

  const renderSidebar = () => {
    const sidebar = document.querySelector(".dashboard-sidebar");
    if (!sidebar) return;

    const menu = menuConfig[currentMode] || menuConfig.hire;
    const modeLabel =
      currentMode.charAt(0).toUpperCase() + currentMode.slice(1);
    const userInitials = currentUser
      ? currentUser.name.substring(0, 2).toUpperCase()
      : "U";

    let html = `
      <div class="sidebar-header">
        <div class="sidebar-user">
          <div class="sidebar-user-avatar">${userInitials}</div>
          <div class="sidebar-user-info">
            <h5>${currentUser ? currentUser.name : "User"}</h5>
            <p>${currentUser ? currentUser.email : "user@example.com"}</p>
          </div>
        </div>
        <div class="user-mode-badge ${currentMode}">${modeLabel}</div>
      </div>
      <ul class="sidebar-nav">
    `;

    menu.forEach((item) => {
      const badge = item.badge
        ? `<span class="badge bg-danger rounded-pill ms-auto">${item.badge}</span>`
        : "";
      const activeClass = item.active ? "active" : "";
      html += `
        <li class="sidebar-nav-item">
          <a href="#" class="sidebar-nav-link ${activeClass}" data-page="${item.id}">
            <i class="bi ${item.icon}"></i>
            <span>${item.label}</span>
            ${badge}
          </a>
        </li>
      `;
    });

    html += `
      </ul>
      <div style="padding: 15px 20px; border-top: 1px solid #dee2e6;">
        <button class="btn btn-sm btn-outline-danger w-100" id="logoutBtn">
          <i class="bi bi-box-arrow-right"></i> Logout
        </button>
      </div>
      <div class="d-flex justify-content-center opacity-25 mt-4 mb-3">
        <a class="navbar-brand fw-bold fs-5" style="text-decoration: none; color: #0c1526;">Ona<span style="color: #2f5bff;">Vedak</span>.com
        </a>
      </div>
    `;

    sidebar.innerHTML = html;

    const logoutBtn = sidebar.querySelector("#logoutBtn");
    if (logoutBtn && typeof clearCurrentUser === "function") {
      logoutBtn.addEventListener("click", () => {
        clearCurrentUser();
        window.location.href = "/index.html";
      });
    }
  };

  const renderTopbar = () => {
    const topbar = document.querySelector(".dashboard-topbar");
    if (!topbar) return;

    const modeLabel =
      currentMode.charAt(0).toUpperCase() + currentMode.slice(1);
    const oppositeMode = currentMode === "hire" ? "tasker" : "hire";
    const modeIcon = currentMode === "hire" ? "💼" : "🚀";
    const modeBgColor = currentMode === "hire" ? "#e3f2fd" : "#f3e5f5";
    const modeTextColor = currentMode === "hire" ? "#2f5bff" : "#7c3aed";

    topbar.innerHTML = `
      <div class="dashboard-topbar-title">
        <div style="display: flex; align-items: center; gap: 12px;">
          <h1>${modeLabel} Dashboard</h1>
          <span style="
            background: ${modeBgColor};
            color: ${modeTextColor};
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 6px;
          ">
            <span style="font-size: 14px;">${modeIcon}</span>
            ${modeLabel}
          </span>
        </div>
      </div>
      <div class="dashboard-topbar-actions">
        <button class="mode-switch-btn" id="modeSwitchBtn" data-mode="${oppositeMode}" 
          title="Switch to ${oppositeMode.charAt(0).toUpperCase() + oppositeMode.slice(1)} mode">
          <i class="bi bi-arrow-left-right"></i>
          Switch to ${oppositeMode.charAt(0).toUpperCase() + oppositeMode.slice(1)}
        </button>
        <button class="sidebar-toggle" id="sidebarToggle">
          <i class="bi bi-list"></i>
        </button>
      </div>
    `;
  };

  const renderOnboarding = () => {
    const container = document.querySelector('[data-section="onboarding"]');
    if (!container) return;

    const steps = onboardingSteps[currentMode] || [];
    const completedCount = steps.filter((s) => s.completed).length;
    const totalCount = steps.length;
    const progressPercent = Math.round((completedCount / totalCount) * 100);

    let html = `
      <div class="onboarding-section">
        <h3 class="onboarding-title">
          Last steps before ${currentMode === "hire" ? "hiring" : "earning"}
        </h3>
        <div style="margin-bottom: 20px;">
          <div class="progress" style="height: 8px;">
            <div class="progress-bar" role="progressbar" style="width: ${progressPercent}%" 
              aria-valuenow="${progressPercent}" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <small style="color: #6c757d;">${completedCount} of ${totalCount} completed</small>
        </div>
        <div class="onboarding-steps">
    `;

    steps.forEach((step) => {
      const badgeClass = step.completed
        ? "completed"
        : step.required
          ? "required"
          : "";
      const badgeText = step.completed
        ? "Completed"
        : step.required
          ? "Required"
          : "Optional";
      const actionText = step.completed ? "Completed" : "Complete";

      html += `
        <div class="onboarding-step ${badgeClass}">
          <div class="onboarding-step-badge">${badgeText}</div>
          <div class="onboarding-step-icon">${step.icon}</div>
          <h4 class="onboarding-step-title">${step.title}</h4>
          <p class="onboarding-step-description">${step.description}</p>
          <button class="onboarding-step-action" data-step="${step.id}" 
            ${step.completed ? "disabled" : ""}>
            ${actionText}
          </button>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    container.innerHTML = html;

    container.querySelectorAll(".onboarding-step-action").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const stepId = e.target.dataset.step;
        if (!e.target.disabled) {
          completeOnboardingStep(stepId);
        }
      });
    });
  };

  const renderOverview = () => {
    const container = document.querySelector('[data-section="overview"]');
    if (!container) return;

    let html;

    if (currentMode === "hire") {
      html = `
        <div class="overview-section">
          <div class="overview-grid">
            <div class="overview-card">
              <div class="overview-card-label">Active Jobs</div>
              <div class="overview-card-value">3</div>
              <div class="overview-card-footer">2 accepting applications</div>
            </div>
            <div class="overview-card warning">
              <div class="overview-card-label">Pending</div>
              <div class="overview-card-value">2</div>
              <div class="overview-card-footer">Waiting for tasker response</div>
            </div>
            <div class="overview-card success">
              <div class="overview-card-label">Completed</div>
              <div class="overview-card-value">12</div>
              <div class="overview-card-footer">All tasks completed</div>
            </div>
            <div class="overview-card">
              <div class="overview-card-label">Total Spent</div>
              <div class="overview-card-value">Rs. 45K</div>
              <div class="overview-card-footer">This month</div>
            </div>
          </div>
        </div>
      `;
    } else {
      html = `
        <div class="overview-section">
          <div class="overview-grid">
            <div class="overview-card success">
              <div class="overview-card-label">Active Tasks</div>
              <div class="overview-card-value">5</div>
              <div class="overview-card-footer">In progress</div>
            </div>
            <div class="overview-card">
              <div class="overview-card-label">This Month Earnings</div>
              <div class="overview-card-value">Rs. 25K</div>
              <div class="overview-card-footer">From 8 completed tasks</div>
            </div>
            <div class="overview-card">
              <div class="overview-card-label">Rating</div>
              <div class="overview-card-value">4.8 ⭐</div>
              <div class="overview-card-footer">From 24 reviews</div>
            </div>
            <div class="overview-card warning">
              <div class="overview-card-label">Completion Rate</div>
              <div class="overview-card-value">98%</div>
              <div class="overview-card-footer">Tasks on time</div>
            </div>
          </div>
        </div>
      `;
    }

    container.innerHTML = html;
  };

  const renderJobsSection = () => {
    const container = document.querySelector('[data-section="jobs"]');
    if (!container) return;

    let html;

    if (currentMode === "hire") {
      html = `
        <div class="jobs-section">
          <div class="jobs-header">
            <h2>My Jobs</h2>
            <button class="btn btn-primary" style="background: #2f5bff; border: none;">
              <i class="bi bi-plus-lg"></i> Post a New Job
            </button>
          </div>
          <ul class="jobs-tabs">
            <li class="jobs-tab active" data-filter="all">All</li>
            <li class="jobs-tab" data-filter="active">Active (3)</li>
            <li class="jobs-tab" data-filter="completed">Completed (12)</li>
            <li class="jobs-tab" data-filter="closed">Closed (5)</li>
          </ul>
          <div class="jobs-content">
            <div class="empty-state">
              <div class="empty-state-icon">💼</div>
              <h3 class="empty-state-title">No jobs yet</h3>
              <p class="empty-state-description">Post your first job to get started. Let talented taskers know what you need help with.</p>
              <div class="empty-state-actions">
                <button class="empty-state-btn empty-state-btn-primary">
                  <i class="bi bi-plus-lg"></i> Post a Job
                </button>
                <button class="empty-state-btn empty-state-btn-secondary">
                  Browse Taskers
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    } else {
      html = `
        <div class="jobs-section">
          <div class="jobs-header">
            <h2>Available Tasks</h2>
          </div>
          <ul class="jobs-tabs">
            <li class="jobs-tab active" data-filter="all">All</li>
            <li class="jobs-tab" data-filter="active">Active (5)</li>
            <li class="jobs-tab" data-filter="applied">Applied (8)</li>
            <li class="jobs-tab" data-filter="completed">Completed (42)</li>
          </ul>
          <div class="jobs-content">
            <div class="empty-state">
              <div class="empty-state-icon">📋</div>
              <h3 class="empty-state-title">No available tasks</h3>
              <p class="empty-state-description">Check back soon! More tasks are being posted by customers in your area.</p>
              <div class="empty-state-actions">
                <button class="empty-state-btn empty-state-btn-primary">
                  View My Active Tasks
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    container.innerHTML = html;

    container.querySelectorAll(".jobs-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        container
          .querySelectorAll(".jobs-tab")
          .forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        // TODO: Filter jobs based on selected tab
      });
    });
  };

  const completeOnboardingStep = (stepId) => {
    const steps = onboardingSteps[currentMode];
    const step = steps.find((s) => s.id === stepId);
    if (step) {
      step.completed = true;
      localStorage.setItem(`onboarding_${currentMode}_${stepId}`, "completed");
      renderOnboarding();
    }
  };

  const showModeSwitchModal = (newMode, onConfirm) => {
    const newModeLabel = newMode.charAt(0).toUpperCase() + newMode.slice(1);
    const currentModeLabel =
      currentMode.charAt(0).toUpperCase() + currentMode.slice(1);

    const changesList =
      newMode === "hire"
        ? [
            "Menu will show: My Jobs, Contracts, Payments",
            "Overview will display hiring statistics",
            "Job posting and management tools",
            "Separate onboarding verification steps",
          ]
        : [
            "Menu will show: Available Tasks, Active Tasks, Earnings, Portfolio",
            "Overview will display earnings and ratings",
            "Task application and management tools",
            "Separate onboarding verification steps",
          ];

    const modal = document.createElement("div");
    modal.id = "modeSwitchModal";
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10000;
      animation: fadeIn 0.2s ease;
    `;

    const content = document.createElement("div");
    content.style.cssText = `
      background: white;
      border-radius: 12px;
      padding: 32px;
      max-width: 450px;
      width: 90%;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      animation: scaleIn 0.3s ease;
    `;

    let changesList_html = changesList
      .map(
        (item) =>
          `<li style="margin-bottom: 12px; display: flex; gap: 10px;">
        <span style="color: #2f5bff; font-weight: 600;">✓</span>
        <span style="color: #6c757d;">${item}</span>
      </li>`,
      )
      .join("");

    content.innerHTML = `
      <h2 style="color: #0c1526; margin-bottom: 8px; font-size: 22px;">Switch to ${newModeLabel} Mode?</h2>
      <p style="color: #6c757d; margin-bottom: 24px; font-size: 14px;">You're currently in ${currentModeLabel} mode. Switching will change your dashboard layout and features.</p>
      
      <div style="background: #f8f9fa; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
        <p style="color: #6c757d; font-size: 12px; text-transform: uppercase; font-weight: 600; margin-bottom: 12px;">What will change:</p>
        <ul style="list-style: none; margin: 0; padding: 0;">
          ${changesList_html}
        </ul>
      </div>

      <div style="display: flex; gap: 12px;">
        <button id="confirmModeSwitchBtn" style="
          flex: 1;
          background: #2f5bff;
          color: white;
          border: none;
          padding: 12px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.2s ease;
        " onmouseover="this.style.background='#1e4d99'" onmouseout="this.style.background='#2f5bff'">
          Switch to ${newModeLabel}
        </button>
        <button id="cancelModeSwitchBtn" style="
          flex: 1;
          background: transparent;
          color: #2f5bff;
          border: 2px solid #2f5bff;
          padding: 12px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.2s ease;
        " onmouseover="this.style.background='#e3f2fd'" onmouseout="this.style.background='transparent'">
          Keep ${currentModeLabel}
        </button>
      </div>
    `;

    modal.appendChild(content);
    document.body.appendChild(modal);

    const confirmBtn = document.getElementById("confirmModeSwitchBtn");
    const cancelBtn = document.getElementById("cancelModeSwitchBtn");

    confirmBtn.addEventListener("click", () => {
      modal.style.animation = "fadeOut 0.2s ease";
      setTimeout(() => {
        modal.remove();
        onConfirm();
      }, 200);
    });

    cancelBtn.addEventListener("click", () => {
      modal.style.animation = "fadeOut 0.2s ease";
      setTimeout(() => {
        modal.remove();
      }, 200);
    });

    // Close on outside click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.animation = "fadeOut 0.2s ease";
        setTimeout(() => {
          modal.remove();
        }, 200);
      }
    });
  };

  const fadeOutSection = (section) => {
    section.style.opacity = "0.5";
    section.style.transition = "opacity 0.2s ease";
  };

  const fadeInSection = (section) => {
    section.style.opacity = "1";
    section.style.transition = "opacity 0.3s ease";
  };

  const showModeNotification = (mode) => {
    const modeLabel = mode.charAt(0).toUpperCase() + mode.slice(1);
    const icon = mode === "hire" ? "💼" : "🚀";

    let toast = document.getElementById("modeNotification");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "modeNotification";
      toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #2f5bff, #4f7bff);
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(47, 91, 255, 0.3);
        font-weight: 600;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 12px;
        animation: slideInUp 0.3s ease;
        max-width: 350px;
      `;
      document.body.appendChild(toast);
    }

    toast.innerHTML = `<span style="font-size: 20px;">${icon}</span><span>Switched to ${modeLabel} mode</span>`;
    toast.style.display = "flex";

    setTimeout(() => {
      toast.style.animation = "slideOutDown 0.3s ease";
      setTimeout(() => {
        toast.style.display = "none";
      }, 300);
    }, 2500);
  };

  const setupEventListeners = () => {
    const modeSwitchBtn = document.getElementById("modeSwitchBtn");
    if (modeSwitchBtn) {
      modeSwitchBtn.addEventListener("click", () => {
        const newMode = modeSwitchBtn.dataset.mode;
        showModeSwitchModal(newMode, () => switchMode(newMode));
      });
    }

    const sidebarToggle = document.getElementById("sidebarToggle");
    if (sidebarToggle) {
      sidebarToggle.addEventListener("click", () => {
        const sidebar = document.querySelector(".dashboard-sidebar");
        sidebar.classList.toggle("show");
      });
    }

    document.querySelectorAll(".sidebar-nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        document
          .querySelectorAll(".sidebar-nav-link")
          .forEach((l) => l.classList.remove("active"));
        link.classList.add("active");

        const sidebar = document.querySelector(".dashboard-sidebar");
        if (window.innerWidth <= 768) {
          sidebar.classList.remove("show");
        }

        console.log("Navigating to:", page);
      });
    });

    document.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) {
        const sidebar = document.querySelector(".dashboard-sidebar");
        const sidebarToggle = document.getElementById("sidebarToggle");
        if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
          sidebar.classList.remove("show");
        }
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.altKey && e.key === "m") {
        e.preventDefault();
        const modeSwitchBtn = document.getElementById("modeSwitchBtn");
        if (modeSwitchBtn) {
          modeSwitchBtn.click();
        }
      }
    });
  };

  const switchMode = (newMode) => {
    currentMode = newMode;
    localStorage.setItem("userMode", currentMode);

    // Fade out content sections
    const onboardingSection = document.querySelector(
      '[data-section="onboarding"]',
    );
    const overviewSection = document.querySelector('[data-section="overview"]');
    const jobsSection = document.querySelector('[data-section="jobs"]');

    if (onboardingSection) fadeOutSection(onboardingSection);
    if (overviewSection) fadeOutSection(overviewSection);
    if (jobsSection) fadeOutSection(jobsSection);

    // Re-render after brief delay for visual effect
    setTimeout(() => {
      renderSidebar();
      renderTopbar();
      renderOnboarding();
      renderOverview();
      renderJobsSection();

      // Fade back in
      if (onboardingSection) fadeInSection(onboardingSection);
      if (overviewSection) fadeInSection(overviewSection);
      if (jobsSection) fadeInSection(jobsSection);

      // Show notification
      showModeNotification(newMode);
    }, 200);
  };

  // Public API
  return {
    init: init,
    switchMode: switchMode,
  };
})();

// Initialize dashboard when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  Dashboard.init();
});
