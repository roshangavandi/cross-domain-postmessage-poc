import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyAngApp';
 
  login(): void {
    const jwtToken = 'yourJWTTokenHere';  // Example JWT token

    // Open Domain 2 in a new window or tab
    const domain2Window = window.open('http://localhost:4300', '_blank');

    // Check if the window opened successfully
    if (domain2Window) {
      console.log('Domain 2 window opened successfully');

      // Wait 2 seconds to ensure Domain 2 is loaded, then send the JWT token via postMessage
      setTimeout(() => {
        console.log('Sending JWT token via postMessage to Domain 2');
        domain2Window.postMessage(jwtToken, 'http://localhost:4300');
      }, 2000);  // Adjust the delay if necessary
    } else {
      console.error('Failed to open Domain 2 window');
    }
  }
  
  // Simulates sending the JWT token to Domain 2
  sendTokenToDomain2(): void {
    const jwtToken = 'yourJWTTokenHere';  // Example JWT token

    // Get the iframe element (if using an iframe)
    const iframeElement = document.getElementById('domain2Iframe') as HTMLIFrameElement;
    console.log('start Iframe (Domain 2) loaded, sending postMessage');
    // Ensure the iframe is loaded before sending the token
    
      console.log('Iframe (Domain 2) loaded, sending postMessage');
       // Wait 2 seconds to ensure Domain 2 is loaded, then send the JWT token via postMessage
      setTimeout(() => {
        console.log('Sending JWT token via postMessage to Domain 2');
        iframeElement.contentWindow?.postMessage(jwtToken, 'http://localhost:4300');
      }, 1000);  // Adjust the delay if necessary
      // Use postMessage to send the JWT token to the iframe (Domain 2)
      setTimeout(() => {
        console.log('Redirect to Domain 2 once token is confirmed to be stored');
           // Redirect to Domain 2 once token is confirmed to be stored
           window.location.href = 'http://localhost:4300';
      }, 2000);  // Adjust the delay if necessary
     
    
  }

  // Simulate URL change after storing the token
  redirectToDomain2(): void {
    window.location.href = 'http://localhost:4300';
  }
  
 

  
}
