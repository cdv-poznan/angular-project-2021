import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
export const moveLeft = trigger('routeAnimations', [
  // route 'enter' transition
  transition(':enter', [
    // css styles at start of transition
    style({ opacity: 0 }),

    // animation and styles at end of transition
    animate('3s', style({ opacity: 1 })),
  ]),
]);
