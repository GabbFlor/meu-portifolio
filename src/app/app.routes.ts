import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';
import { HomePage } from './routes/home-page/home-page';
import { EmptyLayout } from './layouts/empty-layout/empty-layout';
import { ErrorNotFound } from './routes/error-not-found/error-not-found';

export const routes: Routes = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                component: HomePage
            }
        ]
    },
    {
        path: '',
        component: EmptyLayout,
        children: [
            {
                path: 'not-found',
                component: ErrorNotFound
            }
        ]
    },
    {
        path: "**",
        redirectTo: 'not-found'
    }
];
