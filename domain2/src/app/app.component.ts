import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'MyAngApp';
  jwtToken: string | null = null;

  ngOnInit(): void {
    // Ensure window is available (in case of SSR scenarios)
    if (typeof window !== 'undefined') {
      console.log('Listening for postMessage event from Domain 1');

      // Listen for the message from Domain 1
      window.addEventListener(
        'message',
        (event) => {
          console.log('Message received from origin:', event.origin);

          // Validate the origin of the message to prevent malicious messages
          if (event.origin !== 'http://localhost:4200') {
            console.warn('Invalid origin:', event.origin);
            return;
          }

          // Extract and store the JWT token from the message
          this.jwtToken = event.data;
          sessionStorage.setItem('jwtToken', event.data);
          localStorage.setItem('jwtToken', event.data);
          console.log('JWT Token stored in sessionStorage:', this.jwtToken);
        
        },
        false
      );
    }
    // Check if the JWT token exists in localStorage
    this.getJwtToken();
  }

  // Method to get the JWT token from localStorage
  getJwtToken(): void {
    // Retrieve the token from localStorage
    const token = localStorage.getItem('jwtToken');

    // Check if token exists and is not null
    if (token) {
      this.jwtToken = token;  // Set the token in the component's variable
      console.log('JWT Token found:', this.jwtToken);
    } else {
      console.log('No JWT Token found in localStorage');
    }
  }
}




