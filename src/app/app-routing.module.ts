import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuisinesSelectionComponent } from './pages/cuisines-selection-layout.component';
import { DinnerSelectionComponent } from './pages/dinners-selection-layout.component';
import { HomeComponent } from './pages/home-layout.component';
import { IngredientsSelectionComponent } from './pages/ingredients-selection-layout.component';
import { MealsSelectionComponent } from './pages/meals-selection-layout.component';
import { OccasionsSelectionComponent } from './pages/occasions-selction-layout.component';

const routes: Routes = [
  {path: 'dinners-selection', component: DinnerSelectionComponent},
  {path: 'meals-selection', component: MealsSelectionComponent},
  {path: 'ingredients-selection', component: IngredientsSelectionComponent},
  {path: 'occasions-selection', component: OccasionsSelectionComponent},
  {path: 'cuisines-selection', component: CuisinesSelectionComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
