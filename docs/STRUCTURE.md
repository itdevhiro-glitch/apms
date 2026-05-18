# Struktur Folder Atlantis PMS

```txt
atlantis-pms/
├─ assets/
│  ├─ img/atlantis-wallpaper.png       # wallpaper utama web
│  └─ icons/favicon.svg                # favicon aplikasi
├─ src/
│  ├─ css/main.css                     # semua styling utama
│  └─ js/
│     ├─ core/firebase.js              # konfigurasi Firebase
│     ├─ services/auth.js              # login, register, logout, profile
│     ├─ services/db.js                # CRUD Realtime Database + activity log
│     ├─ ui/layout.js                  # sidebar, shell, navigasi
│     ├─ ui/modal.js                   # reusable modal
│     ├─ utils/helpers.js              # formatter, escape, toast
│     └─ pages/                        # modul halaman dashboard
├─ firebase/database.rules.json         # rules keamanan database
├─ .github/workflows/deploy.yml         # deploy GitHub Pages otomatis
├─ index.html
├─ package.json
└─ README.md
```

## Data path Firebase
- `users/{uid}`: profile, role, title.
- `projects/{projectId}`: project detail.
- `tasks/{taskId}`: task kanban.
- `finance/{financeId}`: transaksi income/expense.
- `activity/{activityId}`: audit log realtime.
