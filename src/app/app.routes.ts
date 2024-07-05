import {RouterModule, Routes} from '@angular/router';
import {SignupFormComponent} from "./pages/signup-form/signup-form.component";
import {NgModule} from "@angular/core";
import {LoginFormComponent} from "./pages/login-form/login-form.component";
import {TextAnalyzerComponent} from "./pages/text-analyzer/text-analyzer.component";

export const routes: Routes = [
  { path: 'signup', component: SignupFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'analyze', component: TextAnalyzerComponent },
  { path: '', redirectTo: '/signup', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutes { }
