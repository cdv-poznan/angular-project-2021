import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { CardComponent } from './game/card/card.component';
import { HomeButtonComponent } from './home-button/home-button.component';
import { HitButtonComponent } from './hit-button/hit-button.component';
import { StandButtonComponent } from './game/stand-button/stand-button.component';
import { StartButtonComponent } from './home/start-button/start-button.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ByeComponent } from './bye/bye.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    CardComponent,
    HomeButtonComponent,
    HitButtonComponent,
    StandButtonComponent,
    StartButtonComponent,
    ByeComponent,
    DialogComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatDialogModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
