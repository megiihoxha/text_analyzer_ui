import { Component, ViewChild } from '@angular/core';
import { ResultsDisplayComponent } from '../../components/results-display/results-display.component';

@Component({
  selector: 'app-text-analyzer',
  templateUrl: './text-analyzer.component.html',
  styleUrls: ['./text-analyzer.component.css']
})
export class TextAnalyzerComponent {
  title = 'WordWise';
  @ViewChild('resultsDisplay') resultsDisplay!: ResultsDisplayComponent;

  onAnalysisDone(results: any[]): void {
    console.log('Received analysis event:', results); // Debugging line
    if (this.resultsDisplay) {
      console.log('Updating results display with:', results[0]); // Debugging line
      this.resultsDisplay.updateResults(results[0]); // Assuming results is an array and you want to add the first item
    }
  }
}
