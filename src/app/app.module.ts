import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
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
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { BannerComponent } from './pages/home/elements/banner/banner.component';
import { SecPicLeftComponent } from './pages/home/elements/sec-pic-left/sec-pic-left.component';
import { SecPicRightComponent } from './pages/home/elements/sec-pic-right/sec-pic-right.component';
import { ColumnsComponent } from './pages/home/elements/columns/columns.component';
import { FormSectionComponent } from './pages/home/elements/form-section/form-section.component';
import { ShopElementComponent } from './pages/list/elements/shop-element/shop-element.component';
import { ProductDialogComponent } from './pages/list/elements/product-dialog/product-dialog.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { CaloriesFormComponent } from './pages/calculator/calories-form/calories-form.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment'



const appRoues: Routes = [
  {path: '', component: HomeComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'list', component: ListComponent},
]

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, ListComponent, ButtonComponent, BannerComponent, SecPicLeftComponent, SecPicRightComponent, ColumnsComponent, FormSectionComponent, ShopElementComponent, ProductDialogComponent, CalculatorComponent, CaloriesFormComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatToolbarModule, MatTabsModule, MatAutocompleteModule, DragDropModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatButtonModule, MatRadioModule, ReactiveFormsModule, HttpClientModule, FormsModule, MatIconModule, MatCardModule, MatDialogModule, MatCheckboxModule, AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule, NgxChartsModule, RouterModule.forRoot(appRoues, {enableTracing: true})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
