import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { ByeComponent } from './bye/bye.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'isLeft' },
  },
  {
    path: 'game',
    component: GameComponent,
    data: { animation: 'isRight' },
  },
  {
    path: 'bye',
    component: ByeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
