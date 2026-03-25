# SSE Next.js + Express App

Bu loyiha 2 ta moduldan tashkil topgan:
- `client/`: Next.js front-end
- `server/`: Express backend (SSE - Server-Sent Events endpoint)

## Texnologiyalar
- Next.js (React + TypeScript)
- Node.js + Express
- Server-sent events (SSE)

## 1. Talablar
- Node.js 18+ (yoki so‘nggi LTS)
- npm yoki yarn

## 2. Loyihani o‘rnatish
### Server
```bash
cd server
npm install
```

### Client
```bash
cd ../client
npm install
```

## 3. Ishga tushirish
### Server
```bash
cd server
node app.js
```
(Yoki package.json scripts bo‘lsa `npm start`)

### Client
```bash
cd client
npm run dev
```

Keyin:
- Frontend: `http://localhost:3000`
- Backend SSE: `http://localhost:5000/events` (agar `server/app.js` bu portga ishlasa)

## 4. GitHub deploy
1. Git repozitoriya yarating (`sse-nextjs-express`, `sse-app`, va h.k.)
2. Rootda `.gitignore` bo‘lishi kerak (avtomatik node_modules, /client/.next/ va boshqalar)
3. `git init`, `git add .`, `git commit -m "Initial commit"`
4. `git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git`
5. `git push -u origin main`

## 5. Foydalanuvchi qulayligi
- `.env` faylida `PORT`, `NEXT_PUBLIC_API_URL` kabi sozlamalarni saqlang.
- `client/app/page.tsx` bo‘yicha SSE kabi harakatlar testini ham qo‘ying.

## 6. Qo‘shimcha tavsiyalar
- `README` ichiga demo screenshot yoki manzil qo‘shing.
- `LICENSE` qo‘shing (MIT, Apache 2.0 va h.k.)
- GitHub Actions: `./github/workflows/nodejs.yml` yarating.

## 7. Foydali buyruqlar
- `git status`
- `git log --oneline --graph --all`
- `git branch -M main`
- `npm run lint` (agar mavjud bo‘lsa)

---
## Strukturani tekshirish
```
SSE/
  .gitignore
  README.md
  client/
    package.json
    app/...
  server/
    app.js
    package.json
```

Hozircha qo‘shimcha kerak bo‘lmasa, bu tayyor. Klarizatsiya kerak bo‘lsa qo‘shimcha `CI/CD`, `Docker`, `deploy` bo‘limlarini ham yozaman.