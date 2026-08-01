// Shared auth utilities for OnaVedak demo
// NOTE: This is a front-end only demo. Passwords are stored as plaintext in localStorage.
// DO NOT use this approach in production. Implement server-side authentication & proper password hashing.


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