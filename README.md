# Realtime Taskflow

Projet personnel de niveau débutant imaginé et développé par **Akou Melvin**, développeur full‑stack junior. L’objectif est de pratiquer Next.js, TypeScript et Firebase à travers une todo list temps réel où un utilisateur peut s’inscrire, se connecter et gérer ses tâches du quotidien.

## Fonctionnalités
- Page d’accueil simple (`/`) avec navigation.
- Parcours d’inscription et de connexion via Firebase Authentication (création de compte, envoi d’email de vérification, connexion).
- Tableau de bord `/todolist` : formulaire d’ajout, édition (modale) et suppression de tâches, persistance dans Firebase Realtime Database.
- Gestion globale de l’état avec Zustand (`Store/TodoList.ts`) en conservant le profil utilisateur dans `localStorage`.
- Notifications de succès/erreur grâce à React Toastify (conteneur monté dans `app/layout.tsx`).

## Stack technique
- **Framework** : Next.js 16 (App Router) + React 19 + TypeScript.
- **UI** : Tailwind CSS 4 et DaisyUI pour styliser rapidement.
- **État client** : Zustand pour partager les tâches et l’utilisateur courant.
- **Backend** : Firebase Authentication et Realtime Database (via axios) depuis des routes API (`app/api`) et Server Actions (`server/`).
- **Notifications** : React Toastify.

## Structure rapide
```text
app/
  page.tsx                -> landing page
  connexion/page.tsx      -> formulaire de connexion (client component)
  inscription/page.tsx    -> formulaire d’inscription (client component)
  todolist/page.tsx       -> dashboard (AddTask + ListTask)
components/               -> UI (Navbar, AddTask, ListTask, UpdateTask, …)
controllers/              -> logique client (login, signup, CRUD tâches, logout)
server/                   -> server actions Firebase (auth)
app/api/                  -> routes CRUD tâches (Add/Delete/Update/Get)
Store/TodoList.ts         -> store Zustand
firebase/firebase_config.ts -> configuration Firebase côté client
```

### Parcours Authentification
- `app/inscription/page.tsx` → `controllers/Sigin.ts` → `server/SendSiginServer.ts` : crée l’utilisateur Firebase Auth, envoie l’email de vérification, sauvegarde le profil dans `users-list/{uid}`.
- `app/connexion/page.tsx` → `controllers/Login.ts` → `server/SendLoginServer.ts` : authentifie, vérifie que l’email est validé, récupère le profil, stocke `localStorage.user` et redirige vers `/todolist`.
- `controllers/Logout.ts` : supprime le cache, affiche un toast et renvoie vers la page d’accueil.

### Parcours Tâches
- `components/AddTask.tsx` → `controllers/SendServer.ts` → `POST /api/AddTaskServer` : ajoute une tâche dans `tasks/{userId}` (Realtime DB) et met à jour le store local.
- `components/ListTask.tsx` → `controllers/GetServer.ts` → `GET /api/GetTaskServer` : charge les tâches et hydrate le store.
- `components/UpdateTask.tsx` → `controllers/EditTaskServer.ts` → `POST /api/UpdateTask` : met à jour partiellement une tâche.
- `controllers/DeleteItemServer.ts` → `DELETE /api/DeleteStackServer` : supprime la tâche, puis met à jour le store.

## Prise en main
1. **Installer les dépendances**
   ```bash
   npm install
   ```
2. **Configurer Firebase**
   - Créer un projet Firebase.
   - Activer Authentication (Email/Password) et la Realtime Database (mode sécurisé).
   - Récupérer la configuration web (API key, domain…).
3. **Envoyer les variables d’environnement** dans `.env` ou `.env.local` :
   ```ini
   DATABASE_URL=https://votre-projet-default-rtdb.region.firebasedatabase.app/

   NEXT_PUBLIC_FIREBASE_API_KEY=xxxx
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=votre-projet.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=votre-projet
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=votre-projet.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxxx
   NEXT_PUBLIC_FIREBASE_APP_ID=1:xxxx:web:xxxx
   ```
4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```
   L’application tourne sur `http://localhost:3000`.

## Scripts npm utiles
- `npm run dev` : mode développement Next.js (avec Webpack).
- `npm run build` : build de production.
- `npm run start` : serveur Next.js après build.
- `npm run lint` : analyse ESLint (config Next.js 16).


Projet conçu et développé par **Akou Melvin**, développeur full stack junior.
