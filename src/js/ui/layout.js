import { logout } from '../services/auth.js';
import { $ } from '../utils/helpers.js';
export const pages=[['dashboard','⌘','Dashboard'],['projects','◆','Projects'],['tasks','▦','Tasks'],['team','◉','Team'],['finance','₿','Finance'],['reports','◌','Reports'],['settings','⚙','Settings']];
export function shell(user, profile){
return `<aside class="sidebar" id="sidebar"><div class="logo"><div class="logo-mark">A</div><div><b>Atlantis PMS</b><div class="muted">Project Management</div></div></div><nav class="nav">${pages.map((p,i)=>`<button class="${i?'':'active'}" data-page="${p[0]}"><span>${p[1]}</span>${p[2]}</button>`).join('')}</nav><div class="userbox"><b>${profile?.name||user.email}</b><div class="muted">${profile?.role||'member'} • ${profile?.title||'Atlantis Crew'}</div><button class="btn danger" id="logoutBtn" style="width:100%;margin-top:12px">Logout</button></div></aside><main class="main"><div class="topbar"><button class="btn ghost mobile-menu" id="menuBtn">☰ Menu</button><div class="page-title"><h1 id="pageTitle">Dashboard</h1><div class="muted">Realtime workspace untuk project, task, team, finance, dan report.</div></div><span class="pill">Live Firebase</span></div><section id="view"></section></main>`;
}
export function bindLayout(onPage){
  $('#logoutBtn').onclick=logout; $('#menuBtn')?.addEventListener('click',()=>$('#sidebar').classList.toggle('open'));
  document.querySelectorAll('.nav button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.nav button').forEach(x=>x.classList.remove('active'));b.classList.add('active');$('#sidebar').classList.remove('open');onPage(b.dataset.page,b.textContent.trim());});
}
