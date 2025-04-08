import { Component } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-story',
  templateUrl: './project-story.component.html',
  styleUrls: ['./project-story.component.css']
})
export class ProjectStoryComponent {
  @Input() title: string = '';
  @Input() story: string = '';
}
