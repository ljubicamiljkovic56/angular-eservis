import { DocumentType } from "./document-type";
import { Student } from "./student";

export class Document {
    public id: number;
    public documentType: DocumentType;
    public student: Student;
}
