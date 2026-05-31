# Physio Tax & Receipt Tracker - V4.2 Autofill Fix

## Fix
This package fixes the GitHub Pages/iPhone issue where OCR completed but fields did not populate visibly.

## Changes
- Files are packaged at the ZIP root for easier GitHub upload.
- New service-worker cache name to stop loading the old version.
- Old caches are automatically deleted.
- OCR starts automatically after a receipt photo is selected.
- OCR still has a manual button: Scan Receipt & Auto-Fill Fields.
- Vendor, date, amount, HST, category, sub-category, and OCR text are written directly into the form fields.
- Field change/input events are triggered after auto-fill.

## Upload
Upload these extracted files directly to the root of your GitHub repository:
- index.html
- manifest.webmanifest
- service-worker.js
- icon.svg
- README.md

Do not upload the folder itself.
