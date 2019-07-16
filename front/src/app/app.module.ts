import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PerformancesComponent } from './performances/performances.component';
import { RouterModule, Routes } from "@angular/router";
import { PricesComponent } from './prices/prices.component';
import { SchoolComponent } from './school/school.component';
import { ContactComponent } from './contact/contact.component';
import { GalerieComponent } from './galerie/galerie.component';

const routes: Routes = [
    
  // {
  //   path: "admin", pathMatch: "full", component: AdministrationComponent
  // },
  // {
  //   path : '' , redirectTo : '/home' , pathMatch:'full'
  // },
  // { path: "home", component: FrontComponent, children: 
  //  [
      { path: "home", pathMatch: "full", component: HomeComponent },
      { path: "performances", pathMatch: "full", component: PerformancesComponent },
      // { path: "prices", pathMatch: "full", component: PricesComponent },
      // { path: "school", pathMatch: "full", component: SchoolComponent },
      // { path: "contact", pathMatch: "full", component: ContactComponent },
      // { path: "galerie", pathMatch: "full", component: GalerieComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PerformancesComponent,
    PricesComponent,
    SchoolComponent,
    ContactComponent,
    GalerieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      routes,      
      {
        useHash: false,
        enableTracing: false,
        anchorScrolling: "enabled",
        onSameUrlNavigation: "reload",
        scrollPositionRestoration: "enabled",
      }
      ) 
    ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
