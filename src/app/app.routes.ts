import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

// export const routes: Routes = [
//     { path: '', redirectTo: 'login', pathMatch: 'full' },
//     { path: 'login', loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent) },
//     {
//         path: 'dashboard',
//         canActivate: [authGuard],
//         loadComponent: () =>
//             import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
//     }
// ];
export const routes: Routes = [
    // Public Routes (Login, Forgot Password etc.)
    {
        path: '',
        loadComponent: () =>
            import('./layout/auth-layout/auth-layout.component').then(m => m.AuthLayoutComponent),
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {
                path: 'login',
                loadComponent: () =>
                    import('./features/auth/login/login.component').then(m => m.LoginComponent),
            }
        ]
    },

    // Secured Routes (Dashboard, Profile etc.)
    {
        path: '',
        canActivate: [authGuard],
        loadComponent: () =>
            import('./layout/main-layout/main-layout.component').then(m => m.MainLayoutComponent),
        children: [
            {
                path: 'dashboard',
                loadComponent: () =>
                    import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
            },
            // Add more secured routes here
        ]
    },

    // Wildcard fallback (optional)
    {
        path: '**',
        redirectTo: 'login'
    }
];