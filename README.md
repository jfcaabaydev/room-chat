# Room Chat

> Find your people. Talk about what you love.

**Live demo:** https://jfcaabaydev.github.io/room-chat/

![Room Chat screenshot](https://github.com/user-attachments/assets/45346dce-9a46-4896-a05d-b1ef2a9ad523)

## What is Room Chat?

Room Chat is a group messaging web app where users can join topic rooms and talk with people who share the same interests.

The good thing about the internet is that we can all connect with each other from different places in the world. With a group messaging app like Room Chat, users can create an account in a few steps and have fun conversations with strangers who share the same passion, whether that's giving recommendations, discussing niche topics, or meeting new people.

## Why I built it

I like interacting with friends online who share the same interests as me, so I built a communication app like Discord, but focused on topic-based groups.

Room Chat has topic rooms, each one labeled with a niche subject. Messaging is real-time: when a user sends a message, everyone else in that room sees it immediately.

## Features

- Register, log in, and log out
- Protected pages: only logged-in users can enter the rooms
- Topic rooms: Anime, One-Piece, Video-games, Books, and Music
- Real-time messaging
- Your own messages look different from other people's
- Responsive layout with a collapsible sidebar on small screens

## Tech stack

- React + Vite
- React Router
- Firebase Authentication
- Cloud Firestore
- HTML and CSS (no UI library)

## Running locally

1. Clone the repo and install dependencies:
   ```bash
   git clone https://github.com/jfcaabaydev/room-chat.git
   cd room-chat
   npm install
   ```
   
2. Create your own Firebase project at https://console.firebase.google.com. Enable **Email/Password** under Authentication, and create a **Firestore** database.

3. Create a `.env` file in the project root and fill in the values from your Firebase config:
   ```
   VITE_FIREBASE_API_KEY=
   VITE_FIREBASE_AUTH_DOMAIN=
   VITE_FIREBASE_PROJECT_ID=
   VITE_FIREBASE_STORAGE_BUCKET=
   VITE_FIREBASE_MESSAGING_SENDER_ID=
   VITE_FIREBASE_APP_ID=
   ```

4. Start the app:
   ```bash
   npm run dev
   ```

## What I learned

- How Firestore's `onSnapshot` listener makes messages appear in real time
- How to protect routes with Firebase Authentication and React context
- Why GitHub Pages needs `HashRouter` for React Router apps
- How to write Firestore security rules so users can only send messages as themselves

## Built by

John Francis A. Caabay
