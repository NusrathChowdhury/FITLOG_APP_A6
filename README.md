# FitLog

FitLog is a modern and responsive workout library and workout planning web application built with Next.js. Users can explore workouts, view detailed exercise information, add workouts to today's plan, save workouts for later, search workouts, and track their workout activities.

## Technologies Used

* Next.js
* React
* TypeScript
* Tailwind CSS
* DaisyUI
* React Toastify
* Next.js Image
* REST API
* LocalStorage

## Key Features

* Browse all available workouts with images, muscle groups, equipment, duration, calories, and ratings.
* View detailed workout information including difficulty, sets, reps, description, and instructions.
* Add workouts to today's plan with a maximum of 5 workouts.
* Save workouts for later and manage saved workouts.
* Persist today's plan and saved workouts using LocalStorage.
* Search workouts by workout name, muscle group, or equipment.
* View total exercises, workout duration, and calories for today's plan.
* Mark workouts as completed and remove workouts from the plan.
* Sort workouts by duration, calories, and rating.
* Responsive design for mobile, tablet, and desktop devices.
* Loading states for better user experience.
* Toast notifications for workout actions.
* Custom 404 page for invalid routes.

## API

FitLog uses the following API to load workout data.

### All Workouts

https://api.abcz.workers.dev/api/fitlog

### Single Workout

https://api.abcz.workers.dev/api/fitlog/:id](https://fitlog-app-a6-git-main-fnc9.vercel.app/)
## Pages

### Home Page

The home page contains a workout hero section and the complete workout library. Users can browse all available workouts, search by workout name, muscle group, or equipment, and select a workout to view its details.

### Workout Details Page

The workout details page provides complete information about a selected workout, including:

* Workout image
* Workout name
* Muscle groups
* Equipment
* Difficulty
* Sets and reps
* Duration
* Calories burned
* Rating
* Description
* Instructions

Users can add the workout to today's plan or save it for later.

### My Plan Page

The My Plan page allows users to manage their workouts.

It includes:

* Today's Plan
* Saved workouts
* Workout search
* Total exercises
* Total minutes
* Total calories
* Sorting options
* View Details
* Mark as Done
* Remove workout

## Data Persistence

Today's plan and saved workouts are stored in the browser's LocalStorage. This allows the workout data to remain available after refreshing or reopening the page.

## Project Structure

```text
src/
├── app/
│   ├── my-plan/
│   │   ├── loading.tsx
│   │   └── page.tsx
│   ├── workout/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   └── page.tsx
│
├── components/
│   ├── homepage/
│   │   ├── Banner.tsx
│   │   ├── Library.tsx
│   │   └── WorkoutSearch.tsx
│   │
│   ├── shared/
│   │   ├── AppCard.tsx
│   │   ├── Footer.tsx
│   │   └── Navber.tsx
│   │
│   └── workout/
│       └── WorkoutActions.tsx
│
├── context/
│   └── WorkoutContext.tsx
│
├── lib/
│   └── apps.tsx
│
└── types/
    └── app.type.ts
```

## Installation

Install the project dependencies:

```bash
npm install
```

## Run Locally

Start the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Production Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Responsive Design

FitLog is designed to work across:

* Mobile devices
* Tablets
* Laptops
* Desktop screens

The workout library, navigation, workout cards, details page, search functionality, and My Plan page are responsive across different screen sizes.
