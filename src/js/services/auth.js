import { auth, db } from '../core/firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js';
import { ref, set, get, update, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js';

const OWNER_UID = 'VWk87KKm3edSLdIoEhl0oJyiO6m1';
export const watchAuth = (cb) => onAuthStateChanged(auth, cb);
export const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const logout = () => signOut(auth);
export async function register(name, email, password){
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(cred.user, { displayName:name });
  await set(ref(db, `users/${cred.user.uid}`), { uid:cred.user.uid, name, email, role:cred.user.uid === OWNER_UID ? 'owner' : 'member', title:cred.user.uid === OWNER_UID ? 'Project Owner' : 'Project Member', avatar:'', createdAt:Date.now(), lastLogin:Date.now() });
  return cred;
}
export async function getUserProfile(uid){
  const snap = await get(ref(db, `users/${uid}`));
  return snap.exists() ? snap.val() : null;
}
export async function touchUser(user){
  await update(ref(db, `users/${user.uid}`), { lastLogin:Date.now(), name:user.displayName || user.email, ...(user.uid === OWNER_UID ? { role:'owner', title:'Project Owner' } : {}) });
}
