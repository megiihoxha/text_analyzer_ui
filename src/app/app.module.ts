import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ResultsDisplayComponent } from './components/results-display/results-display.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatFormFieldModule } from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import {SignupFormComponent} from "./pages/signup-form/signup-form.component";
import {LoginFormComponent} from "./pages/login-form/login-form.component";
import { MatCardModule} from "@angular/material/card";
import { MatIconModule} from "@angular/material/icon";
import { HttpClientModule } from '@angular/common/http';
import {AppRoutes} from "./app.routes";
import {TextAnalyzerComponent} from "./pages/text-analyzer/text-analyzer.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextInputComponent,
    ResultsDisplayComponent,
    LoginFormComponent,
    SignupFormComponent,
    TextAnalyzerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    AppRoutes
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
