import { Component, Output, EventEmitter } from '@angular/core';
import { TextAnalysisService } from '../../services/text-analysis.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  textToAnalyze: string = '';
  @Output() analysisEvent = new EventEmitter<any[]>();

  constructor(private textAnalysisService: TextAnalysisService) {}

  analyzeText() {
    if (this.textToAnalyze) {
      this.textAnalysisService.analyzeText(this.textToAnalyze).subscribe(
        response => {
          this.analysisEvent.emit([response]); // Emit the response as an array
          console.log('Analysis successful', response);
        },
        error => {
          console.error('Analysis failed', error);
        }
      );
    }
  }
}
