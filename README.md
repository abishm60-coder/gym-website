# JRL Gym Website

A modern, responsive React website for **JRL Gym** in Villukuri.

## Features

- Built with React (Vite) and styled with Tailwind CSS.
- Responsive design for mobile, tablet, and desktop.
- Editable data file for easy updates to programs, schedule, trainers, memberships, and contact info.
- Fully accessible with keyboard-friendly navigation.

## Setup Instructions

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation
Open your terminal in the project directory and run:

```bash
npm install
```

### 3. Development Server
To start the local development server:

```bash
npm run dev
```
Then, open the URL provided in the terminal (usually `http://localhost:5173`).

### 4. Editing Gym Data
All the content for the gym (trainers, schedules, memberships, descriptions, and contact info) is stored in a single easy-to-edit file:
`src/data/gymData.js`

You can update this file to reflect the actual programs, coach names, and pricing for JRL Gym.

### 5. Building for Production
When you're ready to deploy the website, run:

```bash
npm run build
```
This will create a `dist` folder with optimized static assets ready for deployment.
