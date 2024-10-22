import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MultiplechoiceComponent } from '../multiplechoice/multiplechoice.component';

@Component({
  selector: 'app-base-question',
  standalone: true, // Standalone component
  imports: [MultiplechoiceComponent], // Import the MultipleChoiceComponent directly
  templateUrl: './basequestion.component.html',
  styleUrls: ['./basequestion.component.css']
})
export class BasequestionComponent {
  @Input() questionId!: number;
  @Output() delete = new EventEmitter<void>();

  onDelete() {
    this.delete.emit();
  }
}
