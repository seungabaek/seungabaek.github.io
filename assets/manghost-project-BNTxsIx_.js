const e=`---\r
title: 'Manghost Café'\r
description: '3D single player restaurant game with AI pathfinding and real-time gameplay mechanics'\r
pubDate: 'May 20 2025'\r
heroImage: 'manghost-cafe.png'\r
additionalImages: ['manghost.png', 'manghostPlay.png']\r
skills: ['Unity', 'C#', 'NavMesh', 'Git']\r
date: 'January 2025 - May 2025'\r
demo: 'https://youtu.be/0rmjGE1Ev24'\r
source: 'https://github.gatech.edu/sbaek74/MangoTankGames'\r
---\r
\r
# Introduction\r
\r
Manghost Café is a 3D restaurant simulation game made in Unity that combines strategic gameplay with real-time coordination. Players manage a bustling mango-themed café by switching between two key roles: **Waiter** and **Chef**. The game challenges players to efficiently serve AI customers with varying orders within strict time constraints.\r
\r
The core gameplay revolves around role management, where players must strategically switch between seating customers, taking orders, cooking mango-based items, and serving completed dishes. Success depends on balancing speed, accuracy, and customer satisfaction across a two-story café environment.\r
\r
---\r
\r
## Game Concept & Mechanics\r
\r
### Role-Switching System\r
Players can seamlessly switch between two essential roles:\r
\r
**Waiter Role (Default Start)**\r
- **Customer Seating**: Use the host stand to assign tables to waiting customers\r
- **Order Taking**: Interact with seated customers to receive their mango smoothie orders\r
- **Food Serving**: Pick up completed orders from the counter and deliver to customers\r
- **Customer Management**: Ensure all customers are served before the time limit\r
\r
**Chef Role (Press 'T' to Switch)**\r
- **Mango Preparation**: Use capsule "Mangoes" in the blender for smoothies\r
- **Alternative Cooking**: Use box "Mangoes" in the oven for different preparations\r
- **Timing Management**: Remove items before overcooking (visual cues show cooking progress)\r
- **Order Fulfillment**: Place completed items on pickup spots for the Waiter\r
\r
### Win/Lose Conditions\r
- **Victory**: Serve all customers their orders within the time limit (~2 minutes)\r
- **Defeat**: Fail to complete all orders before time runs out\r
- **Progression**: Planned levels with increased customer count and difficulty\r
\r
---\r
\r
## Technical Implementation\r
\r
### AI Customer Behavior\r
The game features sophisticated AI customers that operate on state machines:\r
\r
- **Queue Management**: Customers automatically form lines while waiting for table assignments\r
- **Pathfinding**: NavMesh-based movement allows customers to navigate the two-story café\r
- **Table Assignment**: AI customers move to assigned tables and wait for service\r
- **Order Behavior**: Customers display patience and satisfaction based on service speed\r
- **Dynamic Spawning**: Customer spawner manages flow and difficulty scaling\r
\r
### Multi-Level Environment\r
- **Two-Story Design**: Café features ground floor and second floor dining areas\r
- **Interactive Objects**: Host stand, tables, blender, oven, pickup counters, trash cans\r
- **Navigation Systems**: Stairs and walkways enable fluid movement between floors\r
- **Strategic Layout**: Design encourages efficient player movement and role switching\r
\r
### Control System\r
- **Movement**: WASD keys for character navigation\r
- **Interactions**: E key for customer/object interactions, Q key for pickup/serving\r
- **Role Switch**: T key toggles between Waiter and Chef roles\r
- **Intuitive Design**: Clear visual feedback for all interactive elements\r
\r
---\r
\r
## Development Challenges\r
\r
### Team Coordination\r
Working with a five-person team required careful coordination of assets and code:\r
\r
**UI & Customer Systems (Seung-a Baek)**\r
- Customer AI prefab development\r
- Complete UI design and scene materials\r
- Customer state machine, spawning, and queue management systems\r
- All background music/interaction sounds integration\r
\r
**Environment & Debugging (Jason Katz)**\r
- Multi-story café structure with walls and stairs\r
- Interactive furniture: tables, cooking equipment, trash cans\r
- Mango ingredient prefabs (capsule and box variants)\r
\r
**Interaction Systems (Jiyoon Lee)**\r
- Player role mechanics (Chef and Waiter functionality)\r
- Pickup and serving interaction systems\r
- Counter and pickup spot placement\r
\r
**Game Flow & Polish (Hojin Kim)**\r
- Win/lose screen implementation\r
- Customer order management\r
- UI text and labeling systems\r
\r
**Core Systems (Deniz Timurturkan)**\r
- Initial scene setup and main menu\r
- Customer pathfinding and line management\r
- Host stand functionality and camera systems\r
\r
### Technical Hurdles\r
\r
**AI State Management**\r
- Implementing complex customer behavior states\r
- Coordinating queue positioning based on customer count\r
- Ensuring smooth transitions between waiting, seated, and served states\r
\r
**Interaction Systems**\r
- Creating intuitive role-switching mechanics\r
- Implementing precise timing for cooking systems\r
- Designing clear visual feedback for player actions\r
\r
---\r
\r
## Current Implementation Status\r
\r
### Completed Features\r
- Full role-switching between Waiter and Chef\r
- AI customer spawning, queuing, and table assignment\r
- Complete cooking system with timing mechanics\r
- Multi-story café environment with navigation\r
- Win/lose conditions with restart functionality\r
- Basic food preparation and serving mechanics\r
\r
### Planned Improvements\r
- **Audio Integration**: Sound effects for all interactions and ambient café sounds\r
- **Animation Systems**: Character joint movement and cooking animations\r
- **Progress Indicators**: Customer patience indicatiors and cooking progress bell\r
- **Level Progression**: Multiple difficulty levels with varying customer counts\r
\r
### Known Technical Issues\r
- **Visual Polish**: Cooking progress bars and customer patience indicators pending\r
\r
---\r
\r
## Lessons Learned\r
\r
This project taught valuable lessons about collaborative game development and Unity optimization. Managing a complex state-driven game with multiple interacting systems required careful architecture planning and frequent team communication.\r
\r
The challenge of creating engaging single-player gameplay while maintaining the frantic energy of restaurant management games like Overcooked helped us understand the importance of clear visual feedback and intuitive controls. Implementing AI customers that feel alive and responsive while maintaining performance was particularly educational.\r
\r
Most importantly, working with a diverse team where each member contributed both assets and code taught us how to integrate different development skills into a cohesive final product.`;export{e as default};
