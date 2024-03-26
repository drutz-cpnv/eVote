import {Routes} from '@angular/router';
import {ComponentPageComponent} from "./component-page/component-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {AdmPageComponent} from "./adm-page/adm-page.component";
import {NewSubjectPageComponent} from "./new-subject-page/new-subject-page.component";
import {AdmSubjectPageComponent} from "./adm-subject-page/adm-subject-page.component";
import {VotePageComponent} from "./vote-page/vote-page.component";
import {UpdateSubjectPageComponent} from "./update-subject-page/update-subject-page.component";

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
    path: "admin/subject/update/:id",
    component: UpdateSubjectPageComponent
  },
  {
    path: "admin/subject/new",
    component: NewSubjectPageComponent
  },
  {
    path: "vote/:id",
    component: VotePageComponent
  },
  {
    path: "admin/subject",
    component: AdmSubjectPageComponent
  },
  {
    path: "",
    component: MainPageComponent
  }
];
