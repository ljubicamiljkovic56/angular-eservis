import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from '../model/document';
import { Student } from '../model/student';
import { DocumentTypeService } from '../services/document-type.service';
import { DocumentService } from '../services/document.service';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-update-document',
  templateUrl: './update-document.component.html',
  styleUrls: ['./update-document.component.css']
})
export class UpdateDocumentComponent implements OnInit {
  students: Student[];
  type: DocumentType = new DocumentType();
  types: DocumentType[];
  id: number;
  studentId: number;
  typeId: number;
  document: Document = new Document();
  form: FormGroup;
  constructor(private documentService: DocumentService,
    private studentService: StudentService, private router: Router,
    private documentTypeService: DocumentTypeService,
    private formBuilder: FormBuilder, private httpClient: HttpClient,
    private route: ActivatedRoute) {
      this.form = this.formBuilder.group({
        types: [''],
        students : ['']
      });
    }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.documentService.getDocumentById(this.id).subscribe(data => {
      this.document = data;
    }, error => console.log(error));
    this.httpClient.get('http://localhost:8080/api/students').subscribe(
      data => {
        this.students = data as Student[];
      }, error => console.error(error));
      this.httpClient.get('http://localhost:8080/api/types').subscribe(
        data => {
          this.types = data as DocumentType[];
        }, error => console.error(error));
  }

  updateDocument() {
    this.document = this.form.value;
    this.document.id = this.id;
    this.document.type.id = 0;
    this.studentId = this.form.value['students'];
    this.typeId = this.form.value['types'];
    console.log(this.id);
    console.log(this.studentId);
    console.log(this.typeId);
    this.documentTypeService.getDocumentTypeById(this.typeId).subscribe(data => {
      console.log(data);
      console.log(this.typeId);
      this.document.type.id = this.typeId;
      console.log(this.document.type.id);
     // this.type.id = this.typeId;
      this.document.type.id = this.typeId;
    });  
     this.studentService.getStudentById(this.studentId).subscribe(data =>{
       this.document.student = data;
       console.log(data);
       this.documentService.updateDocument(this.id, this.document).subscribe(data => {
        console.log(this.document.id)
        console.log(data);
        //this.document = new Document();
        this.goToDocumentsList();
      }, error => console.error(error));
    }, error => console.error(error));
  
  }

  goToDocumentsList(){
    this.router.navigate(['/documents']);
  }

  onSubmit() {
    console.log(this.document);
    this.updateDocument();
  }

}
