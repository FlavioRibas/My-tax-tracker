# Physio Tax & Receipt Tracker PWA - Version 2

A private, offline-first web app designed for a self-employed physiotherapist/contractor.

## Included Features

- Expense tracking with custom CRA-friendly categories
- Receipt photo/PDF attachment for each expense
- Receipt library
- Searchable receipt text / OCR-ready field
- Vehicle mileage log
- Home office calculator
- Dashboard with yearly deductible totals
- Expense CSV export
- Vehicle CSV export
- Full JSON backup/restore, including receipt images
- Offline support after first load
- Local PIN lock

## Important Notes

- Data is stored locally in your browser using IndexedDB.
- Export a full JSON backup regularly.
- Real automated OCR and Face ID require additional online services/native integrations. This version includes receipt photo capture and an OCR-ready searchable text field.

## Install on iPhone

1. Host this folder online using GitHub Pages, Netlify, Vercel, or private hosting.
2. Open the hosted link in Safari on your iPhone.
3. Tap Share.
4. Tap Add to Home Screen.

## Files

- index.html
- manifest.webmanifest
- service-worker.js
- icon.svg
