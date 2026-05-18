import { renderAuth } from './pages/authPage.js';
import { watchAuth, getUserProfile, touchUser } from './services/auth.js';
import { shell, bindLayout } from './ui/layout.js';
import { $ } from './utils/helpers.js';
import * as dashboard from './pages/dashboard.js';
import * as projects from './pages/projects.js';
import * as tasks from './pages/tasks.js';
import * as team from './pages/team.js';
import * as finance from './pages/finance.js';
import * as reports from './pages/reports.js';
import * as settings from './pages/settings.js';
const app=document.getElementById('app');
document.addEventListener('pointermove', e=>{
  document.documentElement.style.setProperty('--mx', `${(e.clientX/window.innerWidth)*100}%`);
  document.documentElement.style.setProperty('--my', `${(e.clientY/window.innerHeight)*100}%`);
}, {passive:true});
const modules={dashboard,projects,tasks,team,finance,reports,settings};
let profile=null;
watchAuth(async user=>{ if(!user){renderAuth(app); return;} profile=await getUserProfile(user.uid); await touchUser(user).catch(()=>{}); app.className='layout'; app.innerHTML=shell(user,profile); bindLayout((page,title)=>renderPage(page,title)); renderPage('dashboard','Dashboard'); });
function renderPage(page,title){
  $('#pageTitle').textContent=title.replace(/[⌘◆▦◉₿◌⚙]/g,'').trim()||'Dashboard';
  const view=$('#view');
  view.classList.remove('page-enter');
  view.innerHTML='<div class="empty">Loading...</div>';
  requestAnimationFrame(()=>{
    modules[page]?.mount(view, profile);
    view.classList.add('page-enter');
  });
}
