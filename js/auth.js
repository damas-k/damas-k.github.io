// ═══════════════════════════════════════
// AUTH - Google Sign-In
// ═══════════════════════════════════════
const GOOGLE_CLIENT_ID = '78249533590-tdti4sh5173jjq3agueqkbdmn75uobbc.apps.googleusercontent.com';

function initGoogleSignIn() {
  if (typeof google === 'undefined' || !google.accounts) { setTimeout(initGoogleSignIn, 300); return; }
  google.accounts.id.initialize({ client_id: GOOGLE_CLIENT_ID, callback: handleGISCredentialResponse, auto_select: false, cancel_on_tap_outside: true });
}

function handleGoogleSignIn() {
  if (typeof google === 'undefined' || !google.accounts) { showToast('Google Sign-In is loading, please try again.', 'error'); return; }
  google.accounts.id.prompt((notification) => {
    if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
      const container = document.getElementById('gsi-button-container');
      google.accounts.id.renderButton(container, { type: 'standard', theme: 'outline', size: 'large', width: 340 });
      const btn = container.querySelector('div[role=button]') || container.firstElementChild;
      if (btn) btn.click();
    }
  });
}

function handleGISCredentialResponse(response) {
  try {
    const token = response.credential;
    const parts = token.split('.');
    if (parts.length !== 3) throw new Error('Invalid JWT');
    const payload = JSON.parse(atob(parts[1].replace(/-/g,'+').replace(/_/g,'/')));
    const user = { name: payload.name || payload.email.split('@')[0], email: payload.email || '', picture: payload.picture || '', sub: payload.sub || '' };
    localStorage.setItem('voltage_token', token);
    localStorage.setItem('voltage_user', JSON.stringify(user));
    state.user = user;
    loginSuccess(user);
  } catch(err) {
    console.error('GIS credential parse error:', err);
    showToast('Sign-in failed — please try again.', 'error');
  }
}

function loginSuccess(user) {
  document.getElementById('view-login').classList.remove('active');
  document.getElementById('view-app').classList.add('active');
  document.getElementById('sidebarUserName').textContent = user.name;
  document.getElementById('sidebarUserRole').textContent = state.year;
  const avatarEl = document.getElementById('sidebarAvatar');
  if (user.picture) { avatarEl.innerHTML = `<img src="${user.picture}" alt="${user.name}" referrerpolicy="no-referrer">`; }
  else { avatarEl.textContent = user.name.charAt(0).toUpperCase(); }
  document.getElementById('dashboardName').textContent = user.name.split(' ')[0];
  document.getElementById('settingsEmail').textContent = user.email;
  document.getElementById('topbarYearBadge').textContent = state.year;
  document.getElementById('yearSelect').value = state.year;
  document.getElementById('fabContainer').style.display = 'flex';
  renderDashboard();
  renderQuickStart();
  init();
}

function signOut() {
  if (typeof google !== 'undefined' && google.accounts && state.user && state.user.email) {
    google.accounts.id.revoke(state.user.email, () => {});
  }
  state.user = null;
  localStorage.removeItem('voltage_token');
  localStorage.removeItem('voltage_user');
  document.getElementById('view-app').classList.remove('active');
  document.getElementById('view-login').classList.add('active');
  document.getElementById('fabContainer').style.display = 'none';
  showToast('Signed out successfully', 'info');
}

(function checkSavedSession(){
  const token=localStorage.getItem('voltage_token');
  const rawUser=localStorage.getItem('voltage_user');
  if(!token||!rawUser)return;
  try{
    const parts=token.split('.');
    const payload=JSON.parse(atob(parts[1].replace(/-/g,'+').replace(/_/g,'/')));
    const now=Math.floor(Date.now()/1000);
    if(payload.exp&&payload.exp<now){
      localStorage.removeItem('voltage_token');
      localStorage.removeItem('voltage_user');
      return;
    }
    const user=JSON.parse(rawUser);
    state.user=user;
    loginSuccess(user);
  }catch(e){
    localStorage.removeItem('voltage_token');
    localStorage.removeItem('voltage_user');
  }
})();
