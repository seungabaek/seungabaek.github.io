const e=`---
title: 'Manghost Café'
description: '3D single player restaurant game with AI pathfinding and real-time gameplay mechanics'
pubDate: 'May 20 2025'
heroImage: 'manghost-cafe.png'
skills: ['Unity', 'C#', 'NavMesh', 'Git']
date: 'January 2025 - May 2025'
demo: ''
source: 'https://github.gatech.edu/sbaek74/MangoTankGames'
---

# Introduction

Manghost Café is a 3D restaurant simulation game made in Unity that combines strategic gameplay with real-time coordination. Players manage a bustling mango-themed café by switching between two key roles: **Waiter** and **Chef**. The game challenges players to efficiently serve AI customers with varying orders within strict time constraints.

The core gameplay revolves around role management, where players must strategically switch between seating customers, taking orders, cooking mango-based items, and serving completed dishes. Success depends on balancing speed, accuracy, and customer satisfaction across a two-story café environment.

---

## Game Concept & Mechanics

### Role-Switching System
Players can seamlessly switch between two essential roles:

**Waiter Role (Default Start)**
- **Customer Seating**: Use the host stand to assign tables to waiting customers
- **Order Taking**: Interact with seated customers to receive their mango smoothie orders
- **Food Serving**: Pick up completed orders from the counter and deliver to customers
- **Customer Management**: Ensure all customers are served before the time limit

**Chef Role (Press 'T' to Switch)**
- **Mango Preparation**: Use capsule "Mangoes" in the blender for smoothies
- **Alternative Cooking**: Use box "Mangoes" in the oven for different preparations
- **Timing Management**: Remove items before overcooking (visual cues show cooking progress)
- **Order Fulfillment**: Place completed items on pickup spots for the Waiter

### Win/Lose Conditions
- **Victory**: Serve all customers their orders within the time limit (~2 minutes)
- **Defeat**: Fail to complete all orders before time runs out
- **Progression**: Planned levels with increased customer count and difficulty

---

## Technical Implementation

### AI Customer Behavior
The game features sophisticated AI customers that operate on state machines:

- **Queue Management**: Customers automatically form lines while waiting for table assignments
- **Pathfinding**: NavMesh-based movement allows customers to navigate the two-story café
- **Table Assignment**: AI customers move to assigned tables and wait for service
- **Order Behavior**: Customers display patience and satisfaction based on service speed
- **Dynamic Spawning**: Customer spawner manages flow and difficulty scaling

### Multi-Level Environment
- **Two-Story Design**: Café features ground floor and second floor dining areas
- **Interactive Objects**: Host stand, tables, blender, oven, pickup counters, trash cans
- **Navigation Systems**: Stairs and walkways enable fluid movement between floors
- **Strategic Layout**: Design encourages efficient player movement and role switching

### Control System
- **Movement**: WASD keys for character navigation
- **Interactions**: E key for customer/object interactions, Q key for pickup/serving
- **Role Switch**: T key toggles between Waiter and Chef roles
- **Intuitive Design**: Clear visual feedback for all interactive elements

---

## Development Challenges

### Team Coordination
Working with a five-person team required careful coordination of assets and code:

**Art & Environment (Jason Katz)**
- Multi-story café structure with walls and stairs
- Interactive furniture: tables, cooking equipment, trash cans
- Mango ingredient prefabs (capsule and box variants)

**UI & Customer Systems (Seung-a Baek)**
- Customer AI prefab development
- Complete UI design and scene materials
- Customer spawning and queue management systems

**Interaction Systems (Jiyoon Lee)**
- Player role mechanics (Chef and Waiter functionality)
- Pickup and serving interaction systems
- Counter and pickup spot placement

**Game Flow & Polish (Hojin Kim)**
- Win/lose screen implementation
- Customer order management
- UI text and labeling systems
- Background music integration

**Core Systems (Deniz Timurturkan)**
- Initial scene setup and main menu
- Customer pathfinding and line management
- Host stand functionality and camera systems

### Technical Hurdles

**AI State Management**
- Implementing complex customer behavior states
- Coordinating queue positioning based on customer count
- Ensuring smooth transitions between waiting, seated, and served states

**Performance Optimization**
- Managing multiple AI agents simultaneously
- Efficient pathfinding across two-story environment
- Maintaining 60fps during peak customer periods

**Interaction Systems**
- Creating intuitive role-switching mechanics
- Implementing precise timing for cooking systems
- Designing clear visual feedback for player actions

---

## Current Implementation Status

### Completed Features
- Full role-switching between Waiter and Chef
- AI customer spawning, queuing, and table assignment
- Complete cooking system with timing mechanics
- Multi-story café environment with navigation
- Win/lose conditions with restart functionality
- Basic food preparation and serving mechanics

### Planned Improvements
- **Audio Integration**: Sound effects for all interactions and ambient café sounds
- **Animation Systems**: Character joint movement and cooking animations
- **Progress Indicators**: Customer patience bars and cooking progress meters
- **Performance Optimization**: Better handling of native resolution builds
- **Level Progression**: Multiple difficulty levels with varying customer counts

### Known Technical Issues
- **Resolution Performance**: Game performance decreases significantly at native resolution
- **Audio Implementation**: Sound system planned for final iteration
- **Visual Polish**: Cooking progress bars and customer patience indicators pending

---

## Lessons Learned

This project taught valuable lessons about collaborative game development and Unity optimization. Managing a complex state-driven game with multiple interacting systems required careful architecture planning and frequent team communication.

The challenge of creating engaging single-player gameplay while maintaining the frantic energy of restaurant management games like Overcooked helped us understand the importance of clear visual feedback and intuitive controls. Implementing AI customers that feel alive and responsive while maintaining performance was particularly educational.

Most importantly, working with a diverse team where each member contributed both assets and code taught us how to integrate different development skills into a cohesive final product.`;export{e as default};
