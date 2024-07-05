import { Component, OnInit } from '@angular/core';
import { TextAnalysisService } from '../../services/text-analysis.service';

@Component({
  selector: 'app-results-display',
  templateUrl: './results-display.component.html',
  styleUrls: ['./results-display.component.css']
})
export class ResultsDisplayComponent implements OnInit {
  results: any[] = [];

  constructor(private textAnalysisService: TextAnalysisService) {}

  ngOnInit(): void {
    this.fetchHistory();
  }

  fetchHistory(): void {
    this.textAnalysisService.getHistory().subscribe(
      response => {
        this.results = response;
        console.log('History fetched successfully', response);
      },
      error => {
        console.error('Failed to fetch history', error);
      }
    );
  }

  updateResults(newResult: any): void {
    this.results.unshift(newResult); // Add new result at the beginning of the array
    console.log('Results updated:', this.results); // Debugging line
  }
}
