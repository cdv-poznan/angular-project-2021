import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';
// export const moveLeft = trigger('routeAnimations', [
//   // route 'enter' transition
//   transition(':enter', [
//     // css styles at start of transition
//     style({ opacity: 0 }),

//     // animation and styles at end of transition
//     animate('3s', style({ opacity: 1 })),
//   ]),
// ]);
export const moveAside = trigger('routeAnimations',[
  transition('* => isRight', slideAnimation('right')),
  transition('* => isLeft', slideAnimation('left'))
]);

function slideAnimation(direction){
  const optional = { optional: true };
return [
  query(':enter, :leave',[
    style({
      position: 'absolute',
      top: 0,
      [direction]:0,
      width: '100%' })], optional),
query(':enter',[
  style({[direction]: '-100%'})
]),
group([
  query(':leave', [
    animate('200ms ease', style({[direction]: '100%'}))], optional),
    query(':enter', [
      animate('200ms ease', style({[direction]: '0%'}))
    ])
  ])
];
}