import { Component } from '@angular/core';
import { BasequestionComponent } from '../basequestion/basequestion.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-survey-doc',
  standalone: true, 
  
  imports: [BasequestionComponent, CommonModule], // Import child components directly
  templateUrl: './surveydoc.component.html',
  styleUrls: ['./surveydoc.component.css']
})
export class SurveydocComponent {
  questions: Array<{ id: number }> = [];
  nextId: number = 1;

  addQuestion() {
    this.questions.push({ id: this.nextId++ });
  }

  deleteQuestion(id: number) {
    console.log(`Deleting question with ID: ${id}`);
    this.questions = this.questions.filter(question => question.id !== id);
    this.questions.forEach((question, index) => {
      question.id = index + 1; 
    });
    this.nextId = this.questions.length + 1;
  }
}
