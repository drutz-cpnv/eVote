import {SubjectRef, VotationRef} from "../../../graphql/generated/graphql";
import {SubjectFormGroupData} from "./subject-form-group.service";

export function subjectInput(subject:SubjectFormGroupData):SubjectRef {
    return {
      title: subject.title,
      description: subject.description,
    }
}
