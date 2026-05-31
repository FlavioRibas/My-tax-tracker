# Physio Tax & Receipt Tracker - OCR Update

Version 3 adds automatic receipt OCR and auto-extraction.

## New Features
- Scan receipt photos using in-browser OCR
- Auto-fill vendor
- Auto-fill date
- Auto-fill total amount
- Auto-fill HST/GST/tax where detected
- Store OCR text with each expense
- Search OCR text in the Expenses tab
- Export OCR text and HST in CSV
- Full JSON backup includes receipt images and OCR text

## Important
OCR is not perfect. Always review the extracted vendor, date, HST, and amount before saving.

The first OCR scan requires internet access to load Tesseract.js from CDN:
https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js

Your app data and receipts remain stored locally in your browser.
