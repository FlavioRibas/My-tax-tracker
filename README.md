# Physio Tax & Receipt Tracker - V4 Clean OCR

## V4 Change Requested
OCR now extracts only:

1. Vendor Name
2. Value
3. Date
4. Category - suggested, must be confirmed by user
5. Sub-Category - suggested, must be confirmed by user

## Removed from OCR extraction
- HST/GST/tax auto-extraction
- Full OCR text storage/export as a main field

## Notes
The app still stores the receipt photo and an internal OCR summary, but the user-facing fields and CSV export are limited to the requested fields.

The first OCR scan requires internet access to load Tesseract.js from CDN:
https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js
