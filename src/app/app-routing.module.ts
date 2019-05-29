import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './modules/shared/components/error/error.component';
import { AuthGuard } from './modules/shared/guards/auth.guard';
import { AdminGuard } from './modules/shared/guards/admin.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', canActivate: [AuthGuard], children: [
    { path: 'user',
      loadChildren: () => import('./modules/user/user.module').then(module => module.UserModule),
    },
    { path: 'admin',
      canLoad: [AdminGuard],
      loadChildren: () => import('./modules/admin/admin.module').then(module => module.AdminModule)
    }
   ]
  },
  { path: '**', redirectTo: 'error' },
  { path: 'error', component: ErrorComponent }
];

@NgModule({
  imports: [

    RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
