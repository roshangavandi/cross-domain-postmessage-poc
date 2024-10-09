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

### Running Domain 2

1. Open a new terminal window and navigate to the `domain2` directory:
    ```bash
    cd domain2
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Run the application:
    ```bash
    ng serve --port 4300
    ```

4. **Domain 2** will be loaded in an iframe within **Domain 1** at `http://localhost:4200`.

## New Flow: iframe Integration and Token Storage

1. **Domain 1** sends a JWT token to **Domain 2** embedded in an iframe using the `window.postMessage()` API.
2. **Domain 2** listens for the token, stores it in `localStorage`, and confirms the token has been stored by sending a message back to **Domain 1**.
3. Once the token is stored in **Domain 2**, **Domain 1** can redirect to **Domain 2** in the same tab.

### Usage Instructions

1. Navigate to **Domain 1** (`http://localhost:4200`).
2. Click the "Send Token and Go to Domain 2" button.
3. **Domain 2** will receive the token and store it in `localStorage`. Once stored, you will be redirected to **Domain 2** in the same tab.

## Example Code

### Domain 1: Sending Token via `postMessage()`

```typescript
sendTokenAndRedirect(): void {
  const jwtToken = 'yourJWTTokenHere';  // Simulate JWT token

  // Get the iframe element
  const iframeElement = document.getElementById('domain2Iframe') as HTMLIFrameElement;
  
  // Ensure the iframe is loaded before sending the token
  iframeElement.onload = () => {
    console.log('Iframe (Domain 2) loaded, sending postMessage');

    // Use postMessage to send the JWT token to Domain 2
    iframeElement.contentWindow?.postMessage(jwtToken, 'http://localhost:4300');

    // Set up a listener to detect when Domain 2 confirms it has received the token
    window.addEventListener('message', (event) => {
      if (event.origin === 'http://localhost:4300' && event.data === 'token-stored') {
        console.log('Token stored in Domain 2, redirecting now...');
        // Redirect to Domain 2 once token is confirmed to be stored
        window.location.href = 'http://localhost:4300';
      }
    });
  };
}
