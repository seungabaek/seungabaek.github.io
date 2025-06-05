---
title: 'Manghost Cafe, a 3D Unity Game'
description: '3D single player restaurant game with AI pathfinding and real-time gameplay mechanics'
pubDate: 'May 20 2025'
heroImage: '/projects/recycling-app.png'
---

A 3D single player game inspired by Overcooked!

----

### Introduction

Manghost Café is a 3D restaurant simulation game made in Unity that combines strategic gameplay with real-time coordination. 
Players take on multiple roles to manage a bustling café, serving varying orders from customers within time constraints.
The game draws inspiration from Overcooked (my favorite multiplayer game) and Not Your Neighbor. 

Although the final game strayed a bit from the original vision, 
the goal of the game is to successfully switch between multiple roles to seat/take orders from
customers, cook mango-themed desserts, and serve the correct order to customers all within a time constraint. It has multiple 
difficulty levels and a multi-level map. 

### Technical Architecture

## State Machine Implementation
Each player character operates on a finite state machine:

Idle - Awaiting player input
Moving - Navigating to target location
Cooking - Preparing food items
Carrying - Transporting items
Serving - Delivering orders to customers

