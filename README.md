# Edu-Track - Student Management System

## Overview
Edu-Track is a Node.js-based student management system that supports:
- User management (Students, Faculty, Admin)
- Course management
- Student enrollment
- Grade entry and tracking
- Attendance management
- Reporting & analytics
- Real-time dashboard updates using Socket.io

## Features
### 1️⃣ User Management
- Student registration & profile management
- Faculty account creation with department association
- Admin dashboard for system oversight
- Secure authentication with hashed passwords (bcrypt)

### 2️⃣ Academic Management
- Course creation & faculty assignment
- Student enrollment in courses
- Grade entry and real-time broadcasting of grades
- Attendance marking and tracking

### 3️⃣ Reporting & Analytics
- Student performance reports
- Course-wise analytics
- Attendance reports
- Export functionality (planned extension)

## Technical Stack
- **Backend:** Node.js + Express
- **Database:** MySQL
- **Real-time:** Socket.io
- **Validation:** express-validator
- **Authentication:** JWT

## Setup Instructions
### Prerequisites
- Node.js & npm installed
- MySQL server running locally

### Clone & Install
```bash
git clone https://github.com/yashwardhan174/Edu-Track.git
cd Edu-Track
npm install
