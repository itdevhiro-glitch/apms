import { db, auth } from '../core/firebase.js';
import { ref, push, set, update, remove, onValue, get } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js';

export function listen(path, cb){ return onValue(ref(db,path), s => cb(s.exists()?s.val():{})); }
export const once = async path => (await get(ref(db,path))).val() || {};
export async function createItem(path, data){ const r=push(ref(db,path)); await set(r,{...data,id:r.key,createdAt:Date.now(),createdBy:auth.currentUser?.uid||'system'}); await log(`Membuat data di ${path}`, data.name||data.title||r.key); return r.key; }
export async function updateItem(path,id,data){ await update(ref(db,`${path}/${id}`),{...data,updatedAt:Date.now()}); await log(`Update data di ${path}`, data.name||data.title||id); }
export async function deleteItem(path,id){ await remove(ref(db,`${path}/${id}`)); await log(`Menghapus data di ${path}`, id); }
export async function log(action,target){ const r=push(ref(db,'activity')); await set(r,{id:r.key,action,target,uid:auth.currentUser?.uid||'system',user:auth.currentUser?.displayName||auth.currentUser?.email||'System',time:Date.now()}); }
