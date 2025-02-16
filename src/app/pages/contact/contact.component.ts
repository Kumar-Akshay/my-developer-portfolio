import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Define an interface for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData: FormData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Add form submission logic here
    this.resetForm(); // Call the reset method
  }

  // Method to reset form data
  private resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}
