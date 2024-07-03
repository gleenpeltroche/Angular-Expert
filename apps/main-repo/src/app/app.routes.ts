import { Route } from '@angular/router';
import { componentRoutes } from './components/guides/component/component.routes';

export const appRoutes: Route[] = [
    {
        path: 'components',
        children: componentRoutes
    },
];
