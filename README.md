# Cross-Domain Communication with `postMessage()` in Angular

This project is a **Proof of Concept (PoC)** for secure cross-domain communication using the `window.postMessage()` API. It involves two separate Angular applications, **Domain 1** and **Domain 2**, which communicate by passing data (JWT tokens) between them.

## Project Structure

This repository contains two standalone Angular applications:
- **Domain 1**: Simulates a login process and sends a JWT token to Domain 2 using `postMessage()`.
- **Domain 2**: Listens for and receives the JWT token from Domain 1, displaying it on the UI.

## Technologies Used

- **Angular** (v14+)
- **Node.js** (v14+)
- **HTML/CSS**
- **JWT (JSON Web Token)** for token simulation

## Getting Started

### Prerequisites

To run the project locally, you will need:
- [Node.js](https://nodejs.org/en/download/) (v14 or higher)
- [Angular CLI](https://angular.io/cli) installed globally: 
    ```bash
    npm install -g @angular/cli
    ```

### Clone the Repository

```bash
git clone https://github.com/roshangavandi/cross-domain-postmessage-poc
cd cross-domain-postmessage-poc


Running Domain 1
Navigate to the domain1 directory:


cd domain1
Install the necessary dependencies:


npm install
Run the application:


ng serve --port 4200
Access Domain 1 at http://localhost:4200.

Running Domain 2
Open a new terminal window and navigate to the domain2 directory:


cd domain2
Install the necessary dependencies:


npm install
Run the application:


ng serve --port 4300
Access Domain 2 at http://localhost:4300.

Communication Flow
Domain 1 opens Domain 2 in a new tab and simulates sending a JWT token after a simulated login process.
Domain 2 listens for the postMessage() event and retrieves the JWT token sent by Domain 1.
The JWT token is displayed on the UI in Domain 2, or a waiting message is shown until the token is received.
Usage
To trigger communication:

Navigate to Domain 1 (http://localhost:4200).
Click the "Login and Go to Domain 2" button.
Domain 2 (http://localhost:4300) will display the JWT token sent from Domain 1.
