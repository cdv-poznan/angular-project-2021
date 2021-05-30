import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { RecipiesComponent } from './pages/recipies/recipies.component';
import { ListComponent } from './pages/list/list.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { ButtonComponent } from './elements/button/button.component';
import { MatButtonModule } from '@angular/material/button';



const appRoues: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipies', component: RecipiesComponent},
  {path: 'list', component: ListComponent},
]

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, RecipiesComponent, ListComponent, ButtonComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, MatTabsModule, MatButtonModule, RouterModule.forRoot(appRoues, {enableTracing: true})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
