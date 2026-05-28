# Sunflower Dashboard

Dashboard HTML lokal yang sudah diadaptasi menjadi project Next.js.

## Menjalankan Project

Di Windows PowerShell, gunakan `npm.cmd` jika perintah `npm` diblokir oleh execution policy:

```powershell
npm.cmd install
npm.cmd run dev
```

Setelah server berjalan, buka:

```text
http://localhost:3000
```

## Struktur Utama

- `app/page.js` berisi halaman dashboard.
- `app/components/Sidebar.js` berisi menu sidebar dengan status aktif berdasarkan route.
- `app/components/RevenueChart.js` berisi Chart.js yang berjalan di client.
- `app/globals.css` berisi styling dashboard.

## Catatan Migrasi

- Link CSS Bootstrap dan Bootstrap Icons dari CDN dipindahkan menjadi import package di `app/layout.js`.
- Script Chart.js dipindahkan menjadi komponen React client-side.
- Script active sidebar diganti dengan `usePathname()` dari Next.js.
