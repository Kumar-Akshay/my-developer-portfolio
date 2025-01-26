import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experience = [
    {
      position: '.NET Developer',
      company: 'LOXAM',
      period: 'May 2024 - Present',
      points: [
        'Enhanced API performance by integrating Service Bus Trigger Functions',
        'Implemented Azure B2C role-based authentication',
        'Optimized API performance through caching implementation'
      ]
    },
    {
      position: '.NET Developer',
      company: 'LOXAM',
      period: 'May 2024 - Present',
      points: [
        'Enhanced API performance by integrating Service Bus Trigger Functions',
        'Implemented Azure B2C role-based authentication',
        'Optimized API performance through caching implementation'
      ]
    },
    {
      position: '.NET Developer',
      company: 'LOXAM',
      period: 'May 2024 - Present',
      points: [
        'Enhanced API performance by integrating Service Bus Trigger Functions',
        'Implemented Azure B2C role-based authentication',
        'Optimized API performance through caching implementation'
      ]
    },
    {
      position: '.NET Developer',
      company: 'Upwork',
      period: 'August 2019 - May 2024',
      points: [
        'Designed and implemented microservices using Azure Service Fabric',
        'Developed payment solutions using Stripe and PayPal REST API',
        'Implemented layer architecture and RESTful APIs'
      ]
    }
  ];
}
