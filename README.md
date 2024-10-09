# Cross-Domain Communication with `postMessage()` in Angular (Using iframe)

This project demonstrates secure cross-domain communication using the `window.postMessage()` API within an iframe context. The project consists of two standalone Angular applications, **Domain 1** and **Domain 2**, which communicate by passing a JWT token between them. **Domain 2** is embedded inside **Domain 1** using an iframe, and the token is securely transferred and stored in localStorage.

## Project Structure

This repository contains two Angular applications:
- **Domain 1**: Simulates a login process and sends a JWT token to Domain 2 using `postMessage()`, with Domain 2 embedded inside an iframe.
- **Domain 2**: Listens for the JWT token message, stores it in localStorage, and displays the token in the user interface.

## Technologies Used

- **Angular** (v14+)
- **Node.js** (v14+)
- **JWT (JSON Web Token)** for token simulation
- **window.postMessage()** for cross-domain communication

## Setup Instructions

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [Angular CLI](https://angular.io/cli) installed globally: 
  ```bash
  npm install -g @angular/cli
