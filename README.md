# 1 - Introduction
Simple project for understanding the basics of Express.js, a web framework for Node.js. For the same reason, databases is not required: Just need Arrays 
 
- **Objective**: Create an API that takes requests and send back responses

## What to know first
 - JavaScript Fundamentals, Basic Node.js & NPM
 - HTTP & API Concepts 
 
## Learning Objectives:
 - Basic Server Syntax
 - Route Handling
 - Middleware Concepts

# 2 - Getting Started 
- Initializing the project: ``npm init -y``
- Adding: 
  - Global Dependencies: ``npm install express uuid`` then 
  - Dev Dependencies: ``npm install nodemon -D`` 
- Add scripts to package.json: 
  ```
  "scripts": {
    "start": "node index",
    "dev": "nodemon index"
    }
  ```
- Run the server: ``npm run dev``