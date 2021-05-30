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
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'

import { BannerComponent } from './pages/home/elements/banner/banner.component';
import { SecPicLeftComponent } from './pages/home/elements/sec-pic-left/sec-pic-left.component';
import { SecPicRightComponent } from './pages/home/elements/sec-pic-right/sec-pic-right.component';
import { ColumnsComponent } from './pages/home/elements/columns/columns.component';
import { FormSectionComponent } from './pages/home/elements/form-section/form-section.component';



const appRoues: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipies', component: RecipiesComponent},
  {path: 'list', component: ListComponent},
]

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, RecipiesComponent, ListComponent, ButtonComponent, BannerComponent, SecPicLeftComponent, SecPicRightComponent, ColumnsComponent, FormSectionComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, MatTabsModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatButtonModule, FormsModule, MatIconModule, RouterModule.forRoot(appRoues, {enableTracing: true})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
