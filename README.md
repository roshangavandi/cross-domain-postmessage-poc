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
Domain 2 will be loaded in an iframe within Domain 1 at http://localhost:4200.

New Flow: iframe Integration and Token Storage
Domain 1 sends a JWT token to Domain 2 embedded in an iframe using the window.postMessage() API.
Domain 2 listens for the token, stores it in localStorage, and confirms the token has been stored by sending a message back to Domain 1.
Once the token is stored in Domain 2, Domain 1 can redirect to Domain 2 in the same tab.
Usage Instructions
Navigate to Domain 1 (http://localhost:4200).
Click the "Send Token and Go to Domain 2" button.
Domain 2 will receive the token and store it in localStorage. Once stored, you will be redirected to Domain 2 in the same tab.
Example Code
Domain 1: Sending Token via postMessage()

sendTokenAndRedirect(): void {
  const jwtToken = 'yourJWTTokenHere';

  const iframeElement = document.getElementById('domain2Iframe') as HTMLIFrameElement;
  iframeElement.onload = () => {
    iframeElement.contentWindow?.postMessage(jwtToken, 'http://localhost:4300');

    window.addEventListener('message', (event) => {
      if (event.origin === 'http://localhost:4300' && event.data === 'token-stored') {
        window.location.href = 'http://localhost:4300';
      }
    });
  };
}
Domain 2: Storing the Token in localStorage

window.addEventListener('message', (event) => {
  if (event.origin === 'http://localhost:4200') {
    const token = event.data;
    localStorage.setItem('jwtToken', token);
    event.source?.postMessage('token-stored', event.origin);
  }
});

License
This project is licensed under the MIT License - see the LICENSE file for details.

---

### Changes made to the README:
1. **Updated Flow**: Explained the new iframe integration and how **Domain 1** sends a JWT token to **Domain 2** within the iframe.
2. **Code Example**: Provided examples of how **Domain 1** sends the token and how **Domain 2** stores it in `localStorage`.
3. **Usage Section**: Added a step-by-step guide on using the updated iframe integration.
4. **Screenshots (Optional)**: You can update the paths to screenshots that reflect the iframe change.

Once this `README.md` file is ready, you can add it to your repository and push it as part of the next commit.

### Command to commit the updated README:

```bash
git add README.md
git commit -m "Updated README with iframe implementation and JWT token storage details"
git push
