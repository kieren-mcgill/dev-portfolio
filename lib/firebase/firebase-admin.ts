// lib/firebase/admin.ts

import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage'; // Note: Cloud Storage for Firebase with Admin SDK uses firebase-admin/storage, not the getStorage from client SDK

// --- IMPORTANT: Service Account Key ---
// You need to generate a private key for your service account.
// Go to Firebase Console -> Project settings -> Service accounts -> Generate new private key.
// Save this JSON file securely. DO NOT commit it to your repository!
// Best practice is to load it from an environment variable as a JSON string,
// or as a path to a file (when deploying to environments like Cloud Run which App Hosting uses).
// For local development, you might place it in a file and refer to its path.

// Example using an environment variable for the service account key JSON string
// In your .env.local: GOOGLE_APPLICATION_CREDENTIALS='{"type": "service_account", "project_id": "...", "private_key_id": "...", ...}'
// OR if you save the file, GOOGLE_APPLICATION_CREDENTIALS=/path/to/your/serviceAccountKey.json
// Read more here: https://firebase.google.com/docs/admin/setup#initialize_the_sdk_in_non-google_environments
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string); // Make sure it's a JSON string

// Initialize Firebase Admin only once
if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID, // You can reuse your projectId env var
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET // For Admin SDK Cloud Storage
  });
}

export const adminDb = getFirestore();
export const adminStorage = getStorage();

// You might also need other admin services, e.g., for authentication:
// import { getAuth } from 'firebase-admin/auth';
// export const adminAuth = getAuth();

