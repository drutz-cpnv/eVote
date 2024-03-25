import {Routes} from '@angular/router';
import {ComponentPageComponent} from "./component-page/component-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {AdmPageComponent} from "./adm-page/adm-page.component";
import {NewSubjectPageComponent} from "./new-subject-page/new-subject-page.component";

export const routes: Routes = [
  {
    path: "components",
    component: ComponentPageComponent
  },
  {
    path: "admin",
    component: AdmPageComponent
  },
  {
    path: "admin/subject/new",
    component: NewSubjectPageComponent
  },
  {
    path: "",
    component: MainPageComponent
  }
];
