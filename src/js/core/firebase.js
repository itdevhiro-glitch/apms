import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js';
import { getAnalytics, isSupported } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js';

export const firebaseConfig = {
  apiKey: 'AIzaSyD9lfH7kslpRJNlwMfPVjx3Rnx2diF3MM4',
  authDomain: 'atlpms.firebaseapp.com',
  databaseURL: 'https://atlpms-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'atlpms',
  storageBucket: 'atlpms.firebasestorage.app',
  messagingSenderId: '3454561362',
  appId: '1:3454561362:web:6e41bf35917b1136c8438b',
  measurementId: 'G-CFX55RSCRP'
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
isSupported().then(ok => ok && getAnalytics(app)).catch(() => {});
