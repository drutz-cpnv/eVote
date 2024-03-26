import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {GetSubjectGQL, UpdateSubjectGQL} from "../../../graphql/generated/graphql";
import {firstValueFrom, lastValueFrom} from "rxjs";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-update-subject-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HeaderComponent,
  ],
  templateUrl: './update-subject-page.component.html',
  styleUrl: './update-subject-page.component.css'
})
export class UpdateSubjectPageComponent {
  title = new FormControl('');
  description = new FormControl('');
  constructor(private route: ActivatedRoute, private getSubjectByIdGQL: GetSubjectGQL, private updateSubjectGQL: UpdateSubjectGQL) {
    this.fillForm().then(r => console.log(r));

  }
  async fillForm() {
    const myId = this.route.snapshot.params["id"];
    const subject = await firstValueFrom(this.getSubjectByIdGQL.fetch({subject_id: myId}));
    const title = subject?.data?.getSubject?.title ?? ''
    const description = subject?.data?.getSubject?.description ?? '';
    this.title.setValue(title);
    this.description.setValue(description);
  }

  async onUpdateClicked() {
    const title = this.title.value ?? '';
    const description = this.description.value ?? '';

    const result = await lastValueFrom(this.updateSubjectGQL.mutate({subjectId: this.route.snapshot.params["id"], title: title, description: description}));
    console.log(result)
    alert('Sujet Modifié !');
  }

}
