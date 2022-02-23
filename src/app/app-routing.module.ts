import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathComponent } from './components/math/math.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [
  { path: 'math', component: MathComponent },
  { path: 'weather', component: WeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
