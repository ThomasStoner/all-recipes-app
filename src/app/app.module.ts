import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './navigation/top-nav-bar/top-nav-bar.component';
import { SecondaryNavBarComponent } from './navigation/secondary-nav-bar/secondary-nav-bar.component';
import { DinnerSelectionComponent } from './pages/dinners-selection-layout.component';
import { MealsSelectionComponent } from './pages/meals-selection-layout.component';
import { IngredientsSelectionComponent } from './pages/ingredients-selection-layout.component';
import { OccasionsSelectionComponent } from './pages/occasions-selction-layout.component';
import { CuisinesSelectionComponent } from './pages/cuisines-selection-layout.component';
import { HomeComponent } from './pages/home-layout.component';
import { UserNavBarComponent } from './user-page/user-navbar.component';
import { UserBlurbComponent } from './user-page/user-blurb.component';
import { HttpClientModule } from "@angular/common/http";
import { UserInfoComponent } from './user-info/user-info.component';


@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SecondaryNavBarComponent,
    DinnerSelectionComponent,
    MealsSelectionComponent,
    IngredientsSelectionComponent,
    OccasionsSelectionComponent,
    CuisinesSelectionComponent,
    HomeComponent,
    UserNavBarComponent,
    UserBlurbComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
