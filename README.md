# Tax Tracker - Simple OCR App

## Files
Upload these files directly to the root of your GitHub repository:

- index.html
- manifest.webmanifest
- icon.png
- README.md

## Features
- Uses your Tax Tracker icon
- Simple receipt OCR using Tesseract.js
- Auto-populates:
  - Vendor
  - Date
  - Amount
  - HST estimate
  - Category
  - Sub-category
- Stores receipt image with the expense
- Detects possible duplicates
- Expense list
- Receipt library
- Annual tax report
- CSV export
- JSON backup/restore
- No service worker, to avoid GitHub Pages/iPhone reload crashes

## Notes
OCR requires internet access because Tesseract.js is loaded from a CDN.
Always review OCR results before saving.
