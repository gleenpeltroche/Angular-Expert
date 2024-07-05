import { Route } from '@angular/router';

export const componentRoutes: Route[] = [
  {
    path: 'selectors',
    loadComponent: () =>
      import('@shared-ui/test-components').then((m) => m.PseudoClassComponent),
  },
  {
    path: 'style-scoping',
    loadComponent: () =>
      import('@shared-ui/test-components').then((m) => m.GuideStylingComponent),
  },
  {
    path: 'output',
    loadComponent: () =>
      import('@shared-ui/test-components').then(
        (m) => m.OutputFunctionComponent
      ),
  },
  {
    path: 'host-elements',
    loadComponent: () =>
      import('@shared-ui/test-components').then((m) => m.HostElementsComponent),
  },
  {
    path: 'lifecycle',
    loadComponent: () =>
      import('@shared-ui/test-components').then((m) => m.LifeCycleComponent),
  },
];
