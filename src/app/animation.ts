import { animate, group, query, style, transition, trigger } from '@angular/animations';
export const moveAside = trigger('routeAnimations', [
  transition('* => isRight', slideAnimation('right')),
  transition('* => isLeft', slideAnimation('left')),
]);

function slideAnimation(direction) {
  const optional = { optional: true };
  return [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%',
        }),
      ],
      optional,
    ),
    query(':enter', [style({ [direction]: '-100%' })]),
    group([
      query(':leave', [animate('200ms ease', style({ [direction]: '100%' }))], optional),
      query(':enter', [animate('200ms ease', style({ [direction]: '0%' }))]),
    ]),
  ];
}
