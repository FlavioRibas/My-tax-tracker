# Physio Tax & Receipt Tracker - V4 Full

This version reverts from the clean-only OCR branch and implements the fuller V4 feature set.

## New V4 Features

- Automatic category suggestion
  - Example: Staples -> Office & Medical Supplies / General Office Supplies
- Automatic HST calculation when HST is missing
  - Uses Ontario 13% HST estimate from tax-included total
- Monthly tax dashboard
  - Monthly totals, deductible totals, HST, receipt count
- Annual CRA tax report
  - Yearly summary by category
  - Total, deductible amount, HST, receipt coverage
- Cloud backup support
  - Full JSON backup includes expenses, receipt images, vehicle log, and settings
  - Share Backup button can save to iCloud Drive or Google Drive on supported devices
- Receipt duplicate detection
  - Checks vendor + date + amount before saving

## Notes

Direct automatic Google Drive sync requires Google Cloud OAuth and is not included in this single-file static PWA.
The Share Backup / JSON Backup approach works well for personal use.

OCR uses Tesseract.js from CDN for first load:
https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js
