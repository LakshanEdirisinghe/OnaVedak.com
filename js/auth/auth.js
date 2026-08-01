// Shared auth utilities for OnaVedak demo
// NOTE: This is a front-end only demo. Passwords are stored as plaintext in localStorage.
// DO NOT use this approach in production. Implement server-side authentication & proper password hashing.

// This file uses an IIFE (Immediately Invoked Function Expression) to keep helper variables
// private while exposing only the functions we need on window (e.g., saveUser, findUserByEmail).
// An IIFE runs immediately and prevents accidental global variable leakage.
(function () {
  // Expose functions globally for the simple demo pages
  window.readFileAsDataURL = function (file) {
    return new Promise(function (resolve, reject) {
      const reader = new FileReader();
      reader.onload = function (e) { resolve(e.target.result); };
      reader.onerror = function (e) { reject(e); };
      reader.readAsDataURL(file);
    });
  };

  const USERS_KEY = 'ov_users';
  const CURRENT_USER_KEY = 'ov_currentUser'; // stores id of current user (either in sessionStorage or localStorage)

  // Get users array from localStorage
  window.getUsers = function () {
    try {
      const raw = localStorage.getItem(USERS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      console.error('Failed to parse users from localStorage', e);
      return [];
    }
  };

  window.saveUsers = function (users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users || []));
  };

  window.findUserByEmail = function (email) {
    if (!email) return null;
    const users = getUsers();
    return users.find(u => u.email && u.email.toLowerCase() === email.toLowerCase()) || null;
  };

  window.getUserById = function (id) {
    const users = getUsers();
    return users.find(u => u.id === id) || null;
  };

  window.saveUser = function (user) {
    const users = getUsers();
    users.push(user);
    saveUsers(users);
  };

  window.updateUser = function (updated) {
    const users = getUsers();
    const idx = users.findIndex(u => u.id === updated.id);
    if (idx === -1) return false;
    users[idx] = updated;
    saveUsers(users);
    return true;
  };

  // set current user id; if remember true store in localStorage, else in sessionStorage
  window.setCurrentUser = function (userId, remember) {
    if (remember) {
      localStorage.setItem(CURRENT_USER_KEY, userId);
      sessionStorage.removeItem(CURRENT_USER_KEY);
    } else {
      sessionStorage.setItem(CURRENT_USER_KEY, userId);
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  };

  window.getCurrentUserId = function () {
    return sessionStorage.getItem(CURRENT_USER_KEY) || localStorage.getItem(CURRENT_USER_KEY) || null;
  };

  window.getCurrentUser = function () {
    const id = getCurrentUserId();
    if (!id) return null;
    return getUserById(id);
  };

  window.clearCurrentUser = function () {
    sessionStorage.removeItem(CURRENT_USER_KEY);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

})();

// === Development helper: seed a demo user automatically ===
// This block will create a demo/test account in localStorage if it doesn't already exist.
// By default it only runs on local development (localhost, 127.0.0.1) or when loaded from file://
// Remove or adjust the hostname checks if you want it to run on other hosts.
(function seedDemoUserIfDev() {
  try {
    const hostname = (location && location.hostname) || '';
    if (!(hostname === 'localhost' || hostname === '127.0.0.1' || location.protocol === 'file:')) {
      // Don't auto-seed on production hosts
      return;
    }

    const demoEmail = 'test.user@example.com';

    if (typeof findUserByEmail === 'function' && !findUserByEmail(demoEmail)) {
      const demoUser = {
        id: 'u_test_001',
        name: 'Test User',
        email: demoEmail,
        password: 'TestPass123', // demo plaintext (matches existing auth logic)
        contact: '+94771234567',
        location: 'Colombo',
        skills: 'Plumbing',
        // tiny placeholder image so an image appears in dashboard
        idPhoto: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==',
        createdAt: new Date().toISOString()
      };

      if (typeof saveUser === 'function') {
        saveUser(demoUser);
        console.log('[seedDemoUser] Demo user created:', demoEmail);
      } else {
        // fallback if saveUser isn't available yet
        const KEY = 'ov_users';
        const users = JSON.parse(localStorage.getItem(KEY) || '[]');
        users.push(demoUser);
        localStorage.setItem(KEY, JSON.stringify(users));
        console.log('[seedDemoUser] Demo user saved via fallback:', demoEmail);
      }
    } else {
      console.log('[seedDemoUser] Demo user already exists or helper missing.');
    }
  } catch (err) {
    console.warn('[seedDemoUser] failed to seed demo user:', err);
  }
})();