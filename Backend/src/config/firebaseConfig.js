import admin from "firebase-admin";
import { readFileSync } from "fs";
import path from "path";

const serviceAccountPath = path.resolve("src/config/firebaseServiceAccount.json");
const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, "utf-8"));

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://console.firebase.google.com/project/jobportal-41bf3/database/jobportal-41bf3-default-rtdb/data/~2F", // Change this based on your project
});

export default admin;
