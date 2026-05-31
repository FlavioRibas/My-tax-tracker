# Physio Tax & Receipt Tracker - V4.3 Stable

## Why this version exists
V4.2 could crash on reload because of aggressive service-worker/cache behavior and automatic OCR starting immediately after receipt upload.

## Fixes
- Service worker caching disabled to prevent reload crash.
- Old caches are cleared.
- OCR no longer starts automatically on photo selection.
- You manually tap: Scan Receipt & Auto-Fill Fields.
- OCR still auto-populates the form after scan:
  - Vendor
  - Date
  - Amount
  - HST
  - Category
  - Sub-category
  - OCR text
- Duplicate detection remains active.
- Monthly dashboard, CRA annual report, and backup/share remain included.

## Important iPhone/GitHub Pages reset steps
1. Upload these files to GitHub root.
2. Open the GitHub Pages URL in Safari.
3. Tap aA / page menu > Website Settings > Clear Website Data if available.
4. Or go to iPhone Settings > Safari > Advanced > Website Data > find github.io > Delete.
5. Reopen the GitHub Pages URL.
6. Add to Home Screen again.
