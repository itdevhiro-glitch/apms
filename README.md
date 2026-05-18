# Atlantis PMS (Project Management System)

Web project management kompleks berbasis Firebase Auth + Realtime Database. Siap dipush ke GitHub dan dijalankan lewat Vite.

## Fitur utama
- Login, register, logout via Firebase Authentication.
- Role system: owner, admin, manager, member, viewer.
- Dashboard realtime: project, task, team, invoice, activity log.
- CRUD Project dengan progress, status, priority, deadline, budget.
- CRUD Task dengan assignee, deadline, label, komentar, checklist, status kanban.
- Team directory dan role viewer.
- Finance tracker: income, expense, invoice, cashflow summary.
- Reports: summary otomatis dari data realtime.
- Settings profile lokal dan theme preference.
- UI responsive desktop/tablet/mobile dengan wallpaper Atlantis.

## Cara jalanin lokal
```bash
npm install
npm run dev
```

## Build untuk GitHub Pages
```bash
npm run build
```
Push repo ke GitHub, lalu aktifkan GitHub Pages. Untuk Vite static, deploy folder `dist` atau pakai GitHub Actions yang sudah disiapkan di `.github/workflows/deploy.yml`.

## Setup Firebase
1. Aktifkan Firebase Authentication dengan Email/Password.
2. Aktifkan Realtime Database.
3. Import rules dari `firebase/database.rules.json`.
4. User pertama bisa register, lalu di Database tambahkan role manual:
```json
users/UID/role = "owner"
```

## Catatan keamanan
Config Firebase web memang boleh terlihat di frontend. Keamanan utamanya ada di Firebase Auth dan Database Rules, bukan menyembunyikan apiKey.
