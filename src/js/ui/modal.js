export function modal(title, body){
  const wrap=document.createElement('div'); wrap.className='modal';
  wrap.innerHTML=`<div class="modal-panel card"><div class="row space"><h2>${title}</h2><button class="btn ghost" data-close>✕</button></div>${body}</div>`;
  document.body.appendChild(wrap); wrap.addEventListener('click',e=>{ if(e.target===wrap||e.target.dataset.close!==undefined) wrap.remove(); });
  return wrap;
}
