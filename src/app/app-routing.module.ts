import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathComponent } from './components/math/math.component';
import { WeatherComponent } from './components/weather/weather.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'math', component: MathComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
