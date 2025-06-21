---
title: 'Live Thrive CHaRM Mobile App'
description: 'Cross-platform full-stack mobile scheduling system for Live Thrive'
pubDate: 'May 20 2025'
heroImage: 'livethrive3D.png'
additionalImages: ['juniorDesign.png']
skills: ['Flutter', 'Dart', 'C#', '.NET 8', 'SQL', 'Azure', 'Firebase', 'Figma']
date: 'August 2024 - May 2025'
demo: ''
source: 'https://github.com/seungabaek/JIC-4302-LiveThrive'
---

My first completely full-stack application from scratch for a client!

### Introduction
For my junior capstone project, I worked with a team of 4 other CS students to create a full-stack mobile application compatible on both iOS and Android platforms for a local nonprofit. As background, Live Thrive's CHaRM (Center for Hard to Recycle Materials) facilities encourage a sustainable Atlanta community by providing a place for local residents and businesses to drop off "hard-to-recycle" materials. This can range from appliances to chemicals to compost and etc.

To drop off materials, an appointment is required. They used SimplyBook as a 3rd-party booking system to manage all appointments. This meant limited control and a lot of complaints. Our team of five Georgia Tech CS students developed a comprehensive mobile platform that consolidates scheduling, check-in processes, and recycling information into a single cross-platform application. The app not only simplifies the recycling drop-off experience but also provides a foundation for future expansion into facility tours, volunteer scheduling, and educational events.

The project spanned two semesters:
1. Planning - User research, prototyping, and system design
2. Execution - Development, testing, and deployment

I worked with the same team and same client for both semesters, mimicking a real world client-teamwork environment. We had a team charter, had a client charter, did user research, did peer evaluations, used Figma for prototyping, used Maze for usability testing, conducted strict sprints under a Scrum framework, and demoed after each Sprint. As long as the project duration was, we were able to take it step-by-step and learn how to go from ideation to launch.

---

### Team & Contributions

This was our junior capstone project with rotating roles so all members were exposed to new skills:

- **Seung-a Baek (me)** - Category selection, FAQ system, location views, API integration
- **Joshua Buchsbaum** - API development, QR code generation, appointment management
- **Keegan Thompson** - Calendar widget, home screen, facility management
- **Ryan Seo** - Check-in page, appointment booking flow, signup integration
- **Joseph Atkinson** - Staff features, location filtering, admin appointment management

---

### The Problem

Live Thrive's existing appointment system faced several critical issues:

- Live Thrive's existing appointment system was done through a third-party system (SimplyBook)
- No consolidated platform for scheduling recycling drop-offs
- Lack of real-time availability information for multiple facility locations
- Manual check-in process causing delays and confusion
- Limited accessibility to information about accepted items and fees
- No distinction between resident, business, and VIP appointment types

---

### System Architecture

We designed a three-tier architecture prioritizing security, scalability, and cross-platform compatibility:

- **Frontend**: Flutter/Dart for unified iOS/Android development
- **Backend**: .NET 8 API hosted on Azure App Service
- **Database**: Azure SQL Database with stored procedures
- **Authentication**: Firebase for secure user management
- **External Services**: QR code generation for contactless check-in

---

### Design Process

Our design process centered on Nielsen's usability heuristics and Live Thrive's brand identity:

- Minimalist interface with large, intuitive buttons for accessibility
- Consistent color scheme matching Live Thrive's branding
- Error prevention through confirmation dialogs and input validation
- Real-world metaphors (calendar icons, map pins, phone symbols)
- Comprehensive FAQ system with 'flippable card' design

---

### Technical Implementation

## Frontend (Flutter/Dart)
- Single codebase for both iOS and Android platforms
- Custom calendar widget for intuitive date selection
- QR code generation and scanning for contactless check-in
- Responsive design adapting to various screen sizes
- State management for real-time appointment updates

## API (.NET 8/C#)
- RESTful endpoints with HTTPS encryption
- JSON data format for efficient client-server communication
- Azure App Service hosting for reliable uptime
- Stored procedure calls for optimized database operations
- Role-based access control for admin/staff features

## Database (Azure SQL)
- Relational schema with 6 core entities: users, appointments, facilities, facility_days, recyclable_items, example_items
- Foreign key relationships ensuring data integrity
- Stored procedures for complex queries and business logic
- Appointment type system (Resident, Business, VIP)
- Facility-specific scheduling with dynamic availability

---

### Key Features Implemented

## User Experience Features

#### Smart Appointment Booking
Multi-step booking process with location selection, category choice, and real-time availability calendar

#### QR Code Check-in System
Contactless check-in system generating unique QR codes for each appointment

#### Comprehensive Items Database
Searchable catalog of accepted recyclable items with fees and examples

#### Real-time Facility Information
Current hours, addresses, and contact information for multiple CHaRM locations

## Administrative Features

#### Multi-User Role System
Role-based access for residents, businesses, VIP users, staff, and administrators

#### Admin Dashboard
Comprehensive tools for viewing weekly appointment volumes, managing availability, and canceling bookings

#### Staff Management Tools
Backend administrative controls for managing facility operations and user accounts

## Technical Features

#### Cross-Platform Compatibility
Single Flutter codebase running natively on both iOS and Android devices

#### Secure Authentication
Firebase integration preventing password storage in main database

#### Real-time Data Synchronization
Live updates for appointment availability and facility information

---

### UI/UX Highlights

- Color-coded appointment density visualization for admins (green-orange-red scale)
- Flippable FAQ cards for intuitive information discovery
- Consistent back navigation throughout the app
- Error prevention through grayed-out buttons and confirmation dialogs
- Visual feedback for all user actions

---

### Security Measures

- Firebase Authentication preventing password storage in main database
- HTTPS encryption for all API communications
- Azure firewall restricting database access
- Role-based permissions system
- Secure handling of minimal PII (only emails and zip codes)

---

### Development Challenges

Working on this project presented several technical and collaborative challenges:

- Coordinating development across a 5-person team
- Integrating multiple technologies (Flutter, .NET, SQL) seamlessly
- Designing intuitive UI for diverse user types (residents, businesses, admins)
- Implementing real-time appointment availability across multiple facilities
- Balancing feature richness with app performance

---

### Future Enhancements

The foundation we built allows for exciting future expansions:

- Facility tour scheduling integration
- Volunteer event management system
- Payment processing for recycling fees
- Push notifications for appointment reminders
- Multi-language support for broader accessibility
- Analytics dashboard for facility usage patterns

---

### Impact

This project transformed Live Thrive's appointment scheduling from a fragmented manual process to a streamlined digital experience. The cross-platform solution ensures accessibility for all users regardless of device preference, while the admin tools provide unprecedented visibility into facility operations.

---

### Lessons Learned

Working on a team of five taught me valuable lessons about collaborative development, from coordinating API integrations to maintaining consistent UI/UX across different developers' contributions. The project reinforced the importance of user-centered design, especially when creating solutions for diverse user groups with varying technical expertise.

The experience of working directly with a client throughout the entire development lifecycle was invaluable. Regular demos and feedback sessions helped us iterate quickly and ensure we were building something that truly met their needs. This project solidified my passion for creating technology that makes a real difference in communities.