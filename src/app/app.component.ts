import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { moveLeft } from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [moveLeft],
})
export class AppComponent implements OnInit {
  public title = 'Black Jack';

  public ngOnInit() {}

  animateRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
