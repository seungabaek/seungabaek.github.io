const e=`---\r
title: 'Live Thrive CHaRM Mobile App'\r
description: 'Cross-platform full-stack mobile scheduling system for Live Thrive'\r
pubDate: 'May 20 2025'\r
heroImage: 'livethrive3D.png'\r
additionalImages: ['juniorDesign.png']\r
skills: ['Flutter', 'Dart', 'C#', '.NET 8', 'SQL', 'Azure', 'Firebase', 'Figma']\r
date: 'August 2024 - May 2025'\r
demo: ''\r
source: 'https://github.com/seungabaek/JIC-4302-LiveThrive'\r
---\r
\r
My first completely full-stack application from scratch for a client!\r
\r
### Introduction\r
For my junior capstone project, I worked with a team of 4 other CS students to create a full-stack mobile application compatible on both iOS and Android platforms for a local nonprofit. As background, Live Thrive's CHaRM (Center for Hard to Recycle Materials) facilities encourage a sustainable Atlanta community by providing a place for local residents and businesses to drop off "hard-to-recycle" materials. This can range from appliances to chemicals to compost and etc.\r
\r
To drop off materials, an appointment is required. They used SimplyBook as a 3rd-party booking system to manage all appointments. This meant limited control and a lot of complaints. Our team of five Georgia Tech CS students developed a comprehensive mobile platform that consolidates scheduling, check-in processes, and recycling information into a single cross-platform application. The app not only simplifies the recycling drop-off experience but also provides a foundation for future expansion into facility tours, volunteer scheduling, and educational events.\r
\r
The project spanned two semesters:\r
1. Planning - User research, prototyping, and system design\r
2. Execution - Development, testing, and deployment\r
\r
I worked with the same team and same client for both semesters, mimicking a real world client-teamwork environment. We had a team charter, had a client charter, did user research, did peer evaluations, used Figma for prototyping, used Maze for usability testing, conducted strict sprints under a Scrum framework, and demoed after each Sprint. As long as the project duration was, we were able to take it step-by-step and learn how to go from ideation to launch.\r
\r
---\r
\r
### Team & Contributions\r
\r
This was our junior capstone project with rotating roles so all members were exposed to new skills:\r
\r
- **Seung-a Baek (me)** - Category selection, FAQ system, location views, API integration\r
- **Joshua Buchsbaum** - API development, QR code generation, appointment management\r
- **Keegan Thompson** - Calendar widget, home screen, facility management\r
- **Ryan Seo** - Check-in page, appointment booking flow, signup integration\r
- **Joseph Atkinson** - Staff features, location filtering, admin appointment management\r
\r
---\r
\r
### The Problem\r
\r
Live Thrive's existing appointment system faced several critical issues:\r
\r
- Live Thrive's existing appointment system was done through a third-party system (SimplyBook)\r
- No consolidated platform for scheduling recycling drop-offs\r
- Lack of real-time availability information for multiple facility locations\r
- Manual check-in process causing delays and confusion\r
- Limited accessibility to information about accepted items and fees\r
- No distinction between resident, business, and VIP appointment types\r
\r
---\r
\r
### System Architecture\r
\r
We designed a three-tier architecture prioritizing security, scalability, and cross-platform compatibility:\r
\r
- **Frontend**: Flutter/Dart for unified iOS/Android development\r
- **Backend**: .NET 8 API hosted on Azure App Service\r
- **Database**: Azure SQL Database with stored procedures\r
- **Authentication**: Firebase for secure user management\r
- **External Services**: QR code generation for contactless check-in\r
\r
---\r
\r
### Design Process\r
\r
Our design process centered on Nielsen's usability heuristics and Live Thrive's brand identity:\r
\r
- Minimalist interface with large, intuitive buttons for accessibility\r
- Consistent color scheme matching Live Thrive's branding\r
- Error prevention through confirmation dialogs and input validation\r
- Real-world metaphors (calendar icons, map pins, phone symbols)\r
- Comprehensive FAQ system with 'flippable card' design\r
\r
---\r
\r
### Technical Implementation\r
\r
## Frontend (Flutter/Dart)\r
- Single codebase for both iOS and Android platforms\r
- Custom calendar widget for intuitive date selection\r
- QR code generation and scanning for contactless check-in\r
- Responsive design adapting to various screen sizes\r
- State management for real-time appointment updates\r
\r
## API (.NET 8/C#)\r
- RESTful endpoints with HTTPS encryption\r
- JSON data format for efficient client-server communication\r
- Azure App Service hosting for reliable uptime\r
- Stored procedure calls for optimized database operations\r
- Role-based access control for admin/staff features\r
\r
## Database (Azure SQL)\r
- Relational schema with 6 core entities: users, appointments, facilities, facility_days, recyclable_items, example_items\r
- Foreign key relationships ensuring data integrity\r
- Stored procedures for complex queries and business logic\r
- Appointment type system (Resident, Business, VIP)\r
- Facility-specific scheduling with dynamic availability\r
\r
---\r
\r
### Key Features Implemented\r
\r
## User Experience Features\r
\r
#### Smart Appointment Booking\r
Multi-step booking process with location selection, category choice, and real-time availability calendar\r
\r
#### QR Code Check-in System\r
Contactless check-in system generating unique QR codes for each appointment\r
\r
#### Comprehensive Items Database\r
Searchable catalog of accepted recyclable items with fees and examples\r
\r
#### Real-time Facility Information\r
Current hours, addresses, and contact information for multiple CHaRM locations\r
\r
## Administrative Features\r
\r
#### Multi-User Role System\r
Role-based access for residents, businesses, VIP users, staff, and administrators\r
\r
#### Admin Dashboard\r
Comprehensive tools for viewing weekly appointment volumes, managing availability, and canceling bookings\r
\r
#### Staff Management Tools\r
Backend administrative controls for managing facility operations and user accounts\r
\r
## Technical Features\r
\r
#### Cross-Platform Compatibility\r
Single Flutter codebase running natively on both iOS and Android devices\r
\r
#### Secure Authentication\r
Firebase integration preventing password storage in main database\r
\r
#### Real-time Data Synchronization\r
Live updates for appointment availability and facility information\r
\r
---\r
\r
### UI/UX Highlights\r
\r
- Color-coded appointment density visualization for admins (green-orange-red scale)\r
- Flippable FAQ cards for intuitive information discovery\r
- Consistent back navigation throughout the app\r
- Error prevention through grayed-out buttons and confirmation dialogs\r
- Visual feedback for all user actions\r
\r
---\r
\r
### Security Measures\r
\r
- Firebase Authentication preventing password storage in main database\r
- HTTPS encryption for all API communications\r
- Azure firewall restricting database access\r
- Role-based permissions system\r
- Secure handling of minimal PII (only emails and zip codes)\r
\r
---\r
\r
### Development Challenges\r
\r
Working on this project presented several technical and collaborative challenges:\r
\r
- Coordinating development across a 5-person team\r
- Integrating multiple technologies (Flutter, .NET, SQL) seamlessly\r
- Designing intuitive UI for diverse user types (residents, businesses, admins)\r
- Implementing real-time appointment availability across multiple facilities\r
- Balancing feature richness with app performance\r
\r
---\r
\r
### Future Enhancements\r
\r
The foundation we built allows for exciting future expansions:\r
\r
- Facility tour scheduling integration\r
- Volunteer event management system\r
- Payment processing for recycling fees\r
- Push notifications for appointment reminders\r
- Multi-language support for broader accessibility\r
- Analytics dashboard for facility usage patterns\r
\r
---\r
\r
### Impact\r
\r
This project transformed Live Thrive's appointment scheduling from a fragmented manual process to a streamlined digital experience. The cross-platform solution ensures accessibility for all users regardless of device preference, while the admin tools provide unprecedented visibility into facility operations.\r
\r
---\r
\r
### Lessons Learned\r
\r
Working on a team of five taught me valuable lessons about collaborative development, from coordinating API integrations to maintaining consistent UI/UX across different developers' contributions. The project reinforced the importance of user-centered design, especially when creating solutions for diverse user groups with varying technical expertise.\r
\r
The experience of working directly with a client throughout the entire development lifecycle was invaluable. Regular demos and feedback sessions helped us iterate quickly and ensure we were building something that truly met their needs. This project solidified my passion for creating technology that makes a real difference in communities.`;export{e as default};
