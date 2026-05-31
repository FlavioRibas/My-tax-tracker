# Tax Tracker - Improved OCR Quality

## Improvements
This version improves receipt OCR quality by:

- Resizing large receipt images before OCR
- Converting image to grayscale
- Increasing contrast
- Applying dynamic black/white thresholding
- Normalizing common OCR mistakes
- Better vendor detection
- Better date detection, including:
  - YYYY-MM-DD
  - DD/MM/YYYY
  - MM/DD/YYYY
  - Jan 15, 2026
  - 15 Jan 2026
- Better total amount detection
- Better HST/GST/tax detection
- HST estimate when tax is missing

## Usage Tips
For best OCR:
- Put the receipt on a dark flat surface
- Use bright light
- Keep the phone parallel to the receipt
- Avoid shadows and curled paper
- Crop so the receipt fills most of the photo
- Use a clear original receipt, not a blurry screenshot

## Upload
Upload these files directly to the GitHub repository root:

- index.html
- manifest.webmanifest
- icon.png
- README.md

No service worker is included, to avoid GitHub Pages/iPhone reload crashes.
