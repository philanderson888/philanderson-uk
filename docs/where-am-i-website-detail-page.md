# Where Am I?

A personal time-tracking app that lets you check in to custom places with one tap and visualise where your day actually goes.

---

## About

Where Am I? is a personal time-tracking app built for iOS. Rather than passively tracking your GPS position, it puts you in control — you check in to a place when you arrive, and check out when you leave. The app logs every session and builds up a clear picture of how your time is distributed across the places that matter to you.

The idea is simple: most people have a rough sense of where they spend their time, but no real data to back it up. Where Am I? gives you that data, presented cleanly without the overhead of a full productivity suite.

---

## Key Features

- One-tap check-in to any custom place, with automatic check-out from the previous location
- Real-time elapsed time display while a session is active
- Visual statistics showing time per location as a percentage of your day, week, or month
- Full session history grouped by date, filterable by today, this week, or this month
- Custom places with 24+ icons and 12+ colour options
- Separate tracking category for travel and commuting
- Data synced securely to the cloud — accessible across devices
- No GPS or background location access — fully privacy respecting

---

## Technical Details

### Architecture

- Tab-based navigation with nested stack navigators using Expo Router file-system routing
- Authentication and data layer fully managed through Supabase (email/password auth, Row Level Security)
- Singleton Supabase client with typed database schema throughout
- Session state managed via React context with real-time auth state listener

### Technologies Used

- React Native (Expo SDK 54, new architecture enabled)
- TypeScript — strict typing end to end
- Expo Router — file-system based navigation
- Supabase — PostgreSQL database, authentication, and Row Level Security
- React Native Reanimated — smooth animations and transitions
- Lucide React Native — consistent iconography
- EAS Build and EAS Submit — cloud build and App Store delivery pipeline

### Challenges

- Ensuring check-in sessions remain consistent when a user checks in to a new place without explicitly checking out of the previous one
- Displaying accurate elapsed time for an active session without unnecessary re-renders
- Designing a statistics view that remains meaningful with only one or two data points, as well as a full day of check-ins
- Keeping the check-in flow fast enough that users actually adopt the habit

### Solutions

- Implemented an atomic checkout-then-checkin pattern in the database layer so a new check-in always closes any open session first, regardless of client state
- Used a lightweight interval-based timer scoped only to the active session card, isolated from the rest of the screen render tree
- Stats bars scale relative to the longest session rather than total time, keeping single-item views readable and proportional
- Reduced the check-in flow to a single tap from the home screen — no confirmation dialog, no loading spinner blocking the UI

---

## Visit Project

[View on the App Store](https://apps.apple.com/app/id6772089017)
