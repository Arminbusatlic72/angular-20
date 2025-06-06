import { Routes } from '@angular/router';
import { User } from './user/user';
import { DataBinding } from './data-binding/data-binding';
import { StructuralDirectiveNgforVsFo } from './structural-directive-ngfor-vs-fo/structural-directive-ngfor-vs-fo';
import { Signals } from './signals/signals';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  // { path: '', component: User }, heandling empty or non existing path
  { path: '', redirectTo: 'user', pathMatch: 'full' }, // Redirect to user component for empty path
  { path: 'user', component: User },
  { path: 'data-binding', component: DataBinding },
  { path: 'structural-directives', component: StructuralDirectiveNgforVsFo },
  { path: 'signals', component: Signals },
  { path: '**', component: PageNotFound }, // Redirect to pageNotFound component for any non-existing path
];
