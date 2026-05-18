# Gospel-Blooms-Kitengela
Gospel Blooms Kitengela is a web application designed to help a church facility manage operations and improve communication through one centralized platform. It brings together key functions like announcements, events, and facility booking so leaders, members, and visitors can access accurate information anytime from a phone or computer.

## Why This Exists

Running a church involves a lot of moving parts — announcements go out on WhatsApp, event details get shared verbally, and booking the hall or a counseling room usually means calling someone directly. Information gets lost, people miss things, and there's no single place to check what's happening.

This app changes that. Everything lives in one place: updates, events, facility bookings, and a clean public face for the church. Leaders manage it easily; members and visitors access it from any device.

---

## What It Does

### Public Pages
Anyone visiting the site can find out who Gospel Blooms Kitengela is, when services happen, where the church is located, and how to get in touch. No login needed.

### Announcements
Admins post updates once — members see them immediately. No more chasing people across WhatsApp groups or hoping the paper notice on the board gets read.

### Events
Upcoming services, conferences, youth meetings, and special programs are listed in a clear calendar view. Members can see what's coming and plan ahead.

### Facility Booking
Need to use the main hall? A counseling room? Equipment for an event? Submit a booking request through the app — with the date, time, purpose, and your contact info. Admins review it and approve or reject it. You'll see the status update in real time: **Pending**, **Approved**, or **Rejected**.

### Online Meetings
The platform includes a space for hybrid church — supporting both in-person gatherings and members joining remotely.

### Admin Dashboard
A protected area for church leaders and administrators. Log in, manage announcements, add or remove events, and handle booking requests — all from one dashboard.

---

## Tech Stack

| Layer | Technology | Why |
|---|---|---|
| Frontend | React (JavaScript) | Component-based, fast, and easy to maintain |
| Styling | Tailwind CSS | Responsive design out of the box, consistent look across devices |
| Auth | Firebase Authentication | Secure admin login with minimal setup |
| Database | Cloud Firestore | Real-time updates, no server to manage |

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [Firebase](https://firebase.google.com/) project with Firestore and Authentication enabled

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/gospel-blooms-kitengela.git

# Move into the project folder
cd gospel-blooms-kitengela

# Install dependencies
npm install
```

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a new project
2. Enable **Firestore Database** and **Authentication** (Email/Password)
3. Copy your Firebase config and create a `.env` file in the root:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### Run Locally

```bash
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

---
## Admin Access

The admin dashboard is only accessible to authenticated users. To create an admin account:

1. Go to Firebase Console → Authentication → Add User
2. Add the email and password for the church administrator
3. Log in at `/admin/login` on the deployed app

Admin users can:
- Create, edit, and delete announcements
- Add and remove events
- Approve or reject facility booking requests

*Built with care for the Gospel Blooms Kitengela community.*
