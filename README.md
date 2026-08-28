# Portofolio DKV — React + Vite

## Cara menjalankan
```bash
npm install
npm run dev
```
Buka http://localhost:5173

## Build untuk production
```bash
npm run build
```
Hasilnya ada di folder `dist/`, siap di-deploy ke Netlify/Vercel/GitHub Pages.

## Struktur proyek
```
src/
  components/   -> semua komponen reusable (Navbar, Hero, Button, Tag, ProjectCard, dst)
  data/         -> isi konten (nav.js, skills.js, projects.js) — edit di sini, bukan di komponen
  hooks/        -> useReveal.js, hook animasi scroll-reveal
  App.jsx       -> merangkai semua section
  index.css     -> semua styling
```

## Yang perlu kamu ganti
- Nama & judul di `src/components/Navbar.jsx`, `Hero.jsx`, `Footer.jsx`
- Foto kamu: taruh file di `public/`, lalu isi prop `photoSrc` di `<Hero photoSrc="/foto-kamu.jpg" />` pada `App.jsx`
- Data skill: `src/data/skills.js`
- Data proyek & gambar preview: `src/data/projects.js` (isi field `image` dengan path, mis. `/proyek-1.png`)
- Email & sosial media: `src/components/Contact.jsx`
