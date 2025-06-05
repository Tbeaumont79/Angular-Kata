import { Routes } from '@angular/router';
import { ChildOne } from './components/child-one/child-one';
import { ChildTwo } from './components/child-two/child-two';
import { ChildThree } from './components/child-three/child-three';
import { Home } from './components/home/home';
export const routes: Routes = [
  { path: 'child-1', component: ChildOne },
  { path: 'child-2', component: ChildTwo },
  { path: 'child-3', component: ChildThree },
  { path: '', component: Home },
];
