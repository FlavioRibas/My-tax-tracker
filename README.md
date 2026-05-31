# Tax Tracker Cloud Storage Update

## What this update adds

- Firebase configuration is already inserted.
- Google Login remains active.
- Firestore stores expense records.
- Firebase Storage stores receipt images.
- Firestore no longer stores large base64 receipt images.
- Auto-sync after saving remains active.
- Manual Sync to Cloud / Sync from Cloud remains active.
- Receipt images can sync across iPhone and webpage.

## Upload to GitHub

Upload these files directly to your GitHub repository root:

- index.html
- manifest.webmanifest
- icon.png
- README.md
- firestore.rules
- storage.rules

## Firebase Storage Setup

In Firebase Console:

1. Go to Build > Storage.
2. Click Get started.
3. Choose production mode.
4. Use the same region if available.
5. Open Storage > Rules.
6. Paste the rules from storage.rules.
7. Publish.

## Test

1. Open the GitHub Pages app.
2. Sign in with Google.
3. Add an expense with a receipt photo.
4. Save.
5. Sync to Cloud.
6. Check Firebase Storage for uploaded receipt.
7. Open on iPhone or another browser.
8. Sign in.
9. Sync from Cloud.
