import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillCategories = [
    {
      name: 'Backend',
      skills: ['C#', '.NET Core', 'Python', 'Node.js', 'Java']
    },
    {
      name: 'Frontend',
      skills: ['Angular', 'React', 'TypeScript', 'HTML/CSS', 'Tailwind']
    },
    {
      name: 'Database',
      skills: ['SQL Server', 'MongoDB', 'PostgreSQL', 'Redis']
    },
    {
      name: 'Cloud & DevOps',
      skills: ['Azure', 'AWS', 'Docker', 'CI/CD']
    }
  ];
}
