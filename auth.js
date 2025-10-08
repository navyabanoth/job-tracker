const AUTH_KEY = 'jt_auth_user';

export function isAuthenticated() {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    return !!raw;
  } catch {
    return false;
  }
}

export function getUser() {
  try {
    const raw = localStorage.getItem(AUTH_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function signup({ name, email, password }) {
  const user = { name, email };
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  return user;
}

export function login({ email }) {
  // Demo: accept any email/password, create minimal user
  const existing = getUser();
  const user = existing || { name: email.split('@')[0] || 'User', email };
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
  return user;
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}






