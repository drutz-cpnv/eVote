import { Routes } from '@angular/router';
import {MainPageComponent} from "./features/main-page/main-page.component";
import {ComponentPageComponent} from "./features/component-page/component-page.component";

export const routes:Routes = [{
  path: "",
  loadChildren: () => import("./features/user-routes.module").then((m) => m.routes)
},
];
