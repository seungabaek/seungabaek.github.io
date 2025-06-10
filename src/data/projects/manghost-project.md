---
title: 'Manghost Cafe, a 3D Unity Game'
description: '3D single player restaurant game with AI pathfinding and real-time gameplay mechanics'
pubDate: 'May 20 2025'
heroImage: '/projects/manghost-cafe.png'
skills: ['Unity', 'C#', 'NavMesh', 'Git']
date: 'January 2025 - May 2025'
demo: ''
source: 'https://github.gatech.edu/sbaek74/MangoTankGames'
---

A 3D single player game inspired by Overcooked!

---

### Introduction

Manghost Café is a 3D restaurant simulation game made in Unity that combines strategic gameplay with real-time coordination. Players take on multiple roles to manage a bustling café, serving varying orders from customers within time constraints. The game draws inspiration from Overcooked (my favorite multiplayer game) and Not Your Neighbor.

Although the final game strayed a bit from the original vision, the goal of the game is to successfully switch between multiple roles to seat/take orders from customers, cook mango-themed desserts, and serve the correct order to customers all within a time constraint. It has multiple difficulty levels and a multi-level map. Players must balance speed, accuracy, and customer happiness to succeed.

---

### Game Design & Concept

The game draws inspiration from popular cooking games like Overcooked and Not Your Neighbor, but adds unique mechanics focused on single-player role management and customer satisfaction. The core gameplay loop revolves around managing multiple aspects of restaurant operations simultaneously - from seating customers to cooking and serving their orders within strict time limits.

---

### Technical Architecture

## State Machine Implementation
Each player character operates on a finite state machine:

- **Idle** - Awaiting player input
- **Moving** - Navigating to target location
- **Cooking** - Preparing food items
- **Carrying** - Transporting items
- **Serving** - Delivering orders to customers

## AI Customer Behavior
NavMesh-based pathfinding creates realistic customer movement:

- Dynamic obstacle avoidance for crowded restaurants
- Patience meters that affect tipping and reviews
- Group behavior for parties dining together
- Varied customer types with different preferences and patience levels

---

### Game Mechanics

## Order System
- Dynamic order generation based on restaurant level
- Combo system for serving multiple orders quickly
- Special orders with bonus rewards
- Rush hour events with increased customer flow

## Interactive UI Elements
- Order tickets that update dynamically
- Customer satisfaction indicators
- Revenue and tip tracking
- Upgrade menu for restaurant improvements

---

### Performance Optimization

To ensure smooth gameplay across various hardware configurations, I implemented several optimization techniques:

- **Object Pooling**: Reusing customer and food objects
- **LOD System**: Reduced detail for distant objects
- **Batch Rendering**: Combining similar sprites
- **Efficient Pathfinding**: Caching common paths

---

### Art Style & Audio

## Visual Style
- 3D sprites with smooth animations
- Particle effects for cooking and serving
- Dynamic lighting for atmosphere

## Audio Design
- Cheerful background music with intensity scaling
- Satisfying sound effects for every action

---

### Level Design

The game features progressively challenging levels:

- **Easy**: Simple layout for learning mechanics
- **Medium**: Standard difficulty with balanced customer flow
- **Hard**: High-pressure environment with rapid customer turnover

---

### Player Progression

- Experience points for completed orders
- Unlockable recipes and equipment
- Restaurant customization options
- Leaderboards for competitive players

---

### Development Challenges

Creating a single-player restaurant management game came with unique challenges:

- **State Synchronization**: Ensuring all game systems update consistently
- **Pathfinding Conflicts**: Handling multiple AI agents in tight spaces
- **Performance on Low-End Devices**: Optimizing for broad compatibility
- **Balancing Difficulty**: Creating fun challenges for all skill levels

---

### Future Updates

The game's modular architecture allows for exciting future content:

- Workshop support for custom restaurants
- Seasonal events with special recipes
- Competitive tournament mode
- Mobile port with cross-platform play

---

### Lessons Learned

This project taught me valuable lessons about game development, particularly in creating engaging AI behaviors and optimizing performance for real-time gameplay. Working with Unity's NavMesh system gave me deep insights into pathfinding algorithms, while implementing the state machine pattern helped me create more maintainable and extensible code.

The challenge of balancing gameplay difficulty while maintaining fun was particularly educational. Through extensive playtesting and iteration, I learned how small tweaks to timing, customer patience, and order complexity can dramatically affect the player experience.