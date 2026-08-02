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

(function seedDemoUserIfDev() {
  try {
    const hostname = (location && location.hostname) || '';
    if (!(hostname === 'localhost' || hostname === '127.0.0.1' || location.protocol === 'file:')) {
      // Don't auto-seed on production hosts
      return;
    }

    const demoEmail = 'ayomall30@gmail.com';

    if (typeof findUserByEmail === 'function' && !findUserByEmail(demoEmail)) {
      const demoUser = {
        id: 'u_test_001',
        name: 'Test User',
        email: demoEmail,
        password: '4523@829', 
        contact: '0714026489',
        location: 'Colombo',
        skills: 'Plumbing',
        // tiny placeholder image so an image appears in dashboard
        idPhoto: 'https://bootdey.com/img/Content/avatar/avatar7.png',
        createdAt: new Date().toISOString()
      };

      if (typeof saveUser === 'function') {
        saveUser(demoUser);
        console.log('[seedDemoUser] Demo user created:', demoEmail);
      } else {
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

// Call from pages to securely update password (demo-local only)
window.resetPasswordByEmailAndContact = function (email, contact, newPassword) {
  if (!email || !contact || !newPassword) {
    return { success: false, message: 'Email, contact and new password are required.' };
  }
  if (typeof newPassword !== 'string' || newPassword.length < 8) {
    return { success: false, message: 'New password must be at least 8 characters.' };
  }

  const user = findUserByEmail(email);
  if (!user) {
    return { success: false, message: 'No account found with that email.' };
  }
  if ((user.contact || '').trim() !== contact.trim()) {
    return { success: false, message: 'Contact number does not match our records.' };
  }

  user.password = newPassword; // DEMO: plaintext
  const ok = updateUser(user);
  if (!ok) {
    return { success: false, message: 'Failed to update password. Please try again.' };
  }
  return { success: true, message: 'Password updated successfully.' };
};