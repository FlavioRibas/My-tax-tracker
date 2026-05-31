# Tax Tracker Cloud - Firebase + Google Login

## What this version adds

- Google Login
- Firebase Firestore cloud sync
- Sync iPhone and webpage
- Manual Sync to Cloud
- Manual Sync from Cloud
- Auto-sync after saving an expense when signed in
- Keeps improved OCR quality
- Keeps receipt image storage inside the synced JSON data
- Includes Firestore security rules

## Files to upload to GitHub root

- index.html
- manifest.webmanifest
- icon.png
- README.md
- firestore.rules

## Firebase setup steps

1. Go to Firebase Console.
2. Create a project.
3. Add a Web App.
4. Copy the Firebase config.
5. Open index.html.
6. Replace this placeholder block:

```js
const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY_HERE",
  authDomain: "PASTE_YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};
```

7. In Firebase Authentication, enable Google provider.
8. In Firebase Authentication > Settings > Authorized domains, add:
   - your GitHub Pages domain, for example: yourusername.github.io

9. In Firestore Database:
   - Create database.
   - Start in production mode.
   - Add the rules from firestore.rules.

## How sync works

The app stores one cloud document here:

users/{yourGoogleUserId}/taxTracker/main

Only your signed-in Google user can read/write that document.

## Note about receipt images

Receipt images are stored in the synced JSON document as base64 strings. This is simple and works for personal use. For heavy usage, the next upgrade should move receipt images to Firebase Storage.
