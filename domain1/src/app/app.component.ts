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
  
  
 

  
}
