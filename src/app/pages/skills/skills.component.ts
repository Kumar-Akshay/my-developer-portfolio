import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faCode, 
  faDesktop, 
  faDatabase, 
  faCloud,
  faGears,
  faCubes,
  faNetworkWired,
  faShieldHalved,
  faBrain
} from '@fortawesome/free-solid-svg-icons';
import {
  faJava,
  faPython,
  faNodeJs,
  faAngular,
  faReact,
  faHtml5,
  faCss3,
  faAws,
  faDocker
} from '@fortawesome/free-brands-svg-icons';

interface SkillCategory {
  name: string;
  skills: Array<{
    name: string;
    icon: any;
    color: string;
  }>;
  icon: any;
  color: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  // Add new category icons
  faGears = faGears;
  faCubes = faCubes;
  faNetworkWired = faNetworkWired;
  faShieldHalved = faShieldHalved;
  faBrain = faBrain;
  // Category icons
  faCode = faCode;
  faDesktop = faDesktop;
  faDatabase = faDatabase;
  faCloud = faCloud;

  skillCategories: SkillCategory[] = [
    {
      name: 'Core Backend',
      icon: faCode,
      color: 'text-indigo-600',
      skills: [
        { name: 'C#', icon: faCode, color: 'text-purple-600' },
        { name: '.NET Core', icon: faCode, color: 'text-purple-700' },
        { name: 'ASP.NET Core', icon: faCode, color: 'text-purple-500' },
        { name: 'Entity Framework', icon: faDatabase, color: 'text-blue-600' },
        { name: 'LINQ', icon: faCode, color: 'text-blue-500' },
        { name: 'Web API', icon: faNetworkWired, color: 'text-green-600' },
        { name: 'SignalR', icon: faNetworkWired, color: 'text-red-500' }
      ]
    },
    {
      name: 'Microservices',
      icon: faCubes,
      color: 'text-rose-600',
      skills: [
        { name: 'Service Discovery', icon: faNetworkWired, color: 'text-blue-500' },
        { name: 'API Gateway', icon: faNetworkWired, color: 'text-green-600' },
        { name: 'Event-Driven', icon: faCubes, color: 'text-purple-600' },
        { name: 'RabbitMQ', icon: faCubes, color: 'text-orange-500' },
        { name: 'Azure Service Bus', icon: faCloud, color: 'text-blue-600' },
        { name: 'Kafka', icon: faCubes, color: 'text-red-500' },
        { name: 'gRPC', icon: faNetworkWired, color: 'text-green-500' }
      ]
    },
    {
      name: 'Architecture Patterns',
      icon: faGears,
      color: 'text-amber-600',
      skills: [
        { name: 'DDD', icon: faBrain, color: 'text-purple-600' },
        { name: 'CQRS', icon: faGears, color: 'text-blue-600' },
        { name: 'Event Sourcing', icon: faGears, color: 'text-green-600' },
        { name: 'Clean Architecture', icon: faCode, color: 'text-indigo-600' },
        { name: 'Hexagonal', icon: faCode, color: 'text-orange-600' },
        { name: 'Vertical Slice', icon: faCode, color: 'text-pink-600' },
        { name: 'Repository Pattern', icon: faDatabase, color: 'text-blue-500' }
      ]
    },
    {
      name: 'Scalability',
      icon: faNetworkWired,
      color: 'text-emerald-600',
      skills: [
        { name: 'Load Balancing', icon: faNetworkWired, color: 'text-blue-500' },
        { name: 'Azure Cache', icon: faDatabase, color: 'text-red-500' },
        { name: 'Distributed Cache', icon: faDatabase, color: 'text-green-500' },
        { name: 'Data Sharding', icon: faDatabase, color: 'text-purple-500' },
        { name: 'Azure Scale Sets', icon: faCloud, color: 'text-blue-600' },
        { name: 'Performance Tuning', icon: faGears, color: 'text-yellow-500' }
      ]
    },
    {
      name: '.NET Ecosystem',
      icon: faGears,
      color: 'text-purple-600',
      skills: [
        { name: 'MediatR', icon: faCubes, color: 'text-red-500' },
        { name: 'AutoMapper', icon: faGears, color: 'text-green-500' },
        { name: 'FluentValidation', icon: faShieldHalved, color: 'text-pink-500' },
        { name: 'Serilog', icon: faCode, color: 'text-blue-500' },
        { name: 'Polly', icon: faShieldHalved, color: 'text-purple-500' },
        { name: 'Hangfire', icon: faCubes, color: 'text-red-600' }
      ]
    },
    {
      name: 'Database',
      icon: faDatabase,
      color: 'text-green-600',
      skills: [
        { name: 'SQL Server', icon: faDatabase, color: 'text-red-500' },
        { name: 'MongoDB', icon: faDatabase, color: 'text-green-500' },
        { name: 'PostgreSQL', icon: faDatabase, color: 'text-blue-400' },
        { name: 'Entity Framework', icon: faDatabase, color: 'text-blue-500' },
        { name: 'Dapper', icon: faDatabase, color: 'text-green-500' },
        { name: 'Azure CosmosDB', icon: faCloud, color: 'text-blue-600' },
        { name: 'Redis', icon: faDatabase, color: 'text-red-600' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: faCloud,
      color: 'text-cyan-600',
      skills: [
        { name: 'Azure', icon: faCloud, color: 'text-blue-500' },
        { name: 'AWS', icon: faAws, color: 'text-orange-500' },
        { name: 'Docker', icon: faDocker, color: 'text-blue-600' },
        { name: 'Kubernetes', icon: faCloud, color: 'text-blue-500' },
        { name: 'Azure DevOps', icon: faCloud, color: 'text-blue-600' },
        { name: 'GitHub Actions', icon: faCode, color: 'text-purple-500' },
        { name: 'Azure App Service', icon: faCloud, color: 'text-blue-600' },
        { name: 'Azure Functions', icon: faCloud, color: 'text-yellow-500' }
      ]
    },
    {
      name: 'Security & Testing',
      icon: faShieldHalved,
      color: 'text-violet-600',
      skills: [
        { name: 'OAuth 2.0', icon: faShieldHalved, color: 'text-green-600' },
        { name: 'xUnit', icon: faCode, color: 'text-blue-500' },
        { name: 'NUnit', icon: faCode, color: 'text-green-500' },
        { name: 'Moq', icon: faCode, color: 'text-purple-500' },
        { name: 'FluentAssertions', icon: faCode, color: 'text-yellow-500' },
        { name: 'Integration Tests', icon: faGears, color: 'text-blue-600' },
        { name: 'BDD/SpecFlow', icon: faBrain, color: 'text-green-600' },
        { name: 'Security Patterns', icon: faShieldHalved, color: 'text-red-500' }
      ]
    }
  ];
}
