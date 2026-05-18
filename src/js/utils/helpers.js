export const $ = (q, el=document) => el.querySelector(q);
export const $$ = (q, el=document) => [...el.querySelectorAll(q)];
export const rupiah = n => new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(Number(n||0));
export const date = v => v ? new Date(v).toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'}) : '-';
export const esc = s => String(s ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
export function toast(msg){ const el=document.createElement('div'); el.className='toast'; el.textContent=msg; document.body.appendChild(el); setTimeout(()=>el.remove(),2600); }
export const list = obj => Object.values(obj||{}).sort((a,b)=>(b.createdAt||0)-(a.createdAt||0));
export const uid = () => Math.random().toString(36).slice(2,9);
