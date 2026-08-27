import { Routes } from '@angular/router';
import { StartHer } from './pages/start-her/start-her';
import { Kropsterapi } from './pages/kropsterapi/kropsterapi';
import { Lyd } from './pages/lyd/lyd';
import { Reiki } from './pages/reiki/reiki';
import { Budskaber } from './pages/budskaber/budskaber';

export const routes: Routes = [
    { path: '', component: StartHer },
    { path: 'kropsterapi', component: Kropsterapi },
    { path: 'lyd', component: Lyd },
    { path: 'reiki', component: Reiki },
    { path: 'budskaber', component: Budskaber }
];
