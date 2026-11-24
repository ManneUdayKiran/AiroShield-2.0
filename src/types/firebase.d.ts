// ============================================================
// src/types/firebase.d.ts
// Ambient type definitions for Firebase SDK integration
// Enables seamless zero-warning TypeScript compilation (tsc -b)
// ============================================================

declare module 'firebase/app' {
  export interface FirebaseApp {
    name: string;
    options: Record<string, unknown>;
  }
  export function initializeApp(options: Record<string, unknown>, name?: string): FirebaseApp;
  export function getApps(): FirebaseApp[];
  export function getApp(name?: string): FirebaseApp;
}

declare module 'firebase/auth' {
  export interface User {
    uid: string;
    email: string | null;
    displayName: string | null;
    photoURL: string | null;
  }
  export interface UserCredential {
    user: User;
  }
  export interface Auth {
    currentUser: User | null;
  }
  export function getAuth(app?: any): Auth;
  export function signInWithEmailAndPassword(auth: Auth, email: string, pass: string): Promise<UserCredential>;
  export function createUserWithEmailAndPassword(auth: Auth, email: string, pass: string): Promise<UserCredential>;
  export function sendPasswordResetEmail(auth: Auth, email: string): Promise<void>;
  export function signOut(auth: Auth): Promise<void>;
  export function updateProfile(user: User, profile: { displayName?: string; photoURL?: string }): Promise<void>;
}

declare module 'firebase/firestore' {
  export interface DocumentReference {
    id: string;
    path: string;
  }
  export interface DocumentSnapshot {
    exists(): boolean;
    data(): Record<string, unknown> | undefined;
  }
  export interface Firestore {
    app: any;
  }
  export function getFirestore(app?: any): Firestore;
  export function doc(db: Firestore, path: string, ...pathSegments: string[]): DocumentReference;
  export function setDoc(reference: DocumentReference, data: Record<string, any>, options?: { merge?: boolean }): Promise<void>;
  export function getDoc(reference: DocumentReference): Promise<DocumentSnapshot>;
}
