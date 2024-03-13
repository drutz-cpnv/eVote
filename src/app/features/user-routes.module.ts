import { Routes } from '@angular/router';
import {ComponentPageComponent} from "./component-page/component-page.component";
import {MainPageComponent} from "./main-page/main-page.component";

export const routes:Routes = [
    {
        path: "components",
        component: ComponentPageComponent
    },
    {
        path:"",
        component: MainPageComponent
    }
];
