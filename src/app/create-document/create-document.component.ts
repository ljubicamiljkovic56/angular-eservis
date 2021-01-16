import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { Document } from '../model/document';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DocumentService } from '../services/document.service';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DocumentTypeService } from '../services/document-type.service';

@Component({
  selector: 'app-create-document',
  templateUrl: './create-document.component.html',
  styleUrls: ['./create-document.component.css']
})
export class CreateDocumentComponent implements OnInit {

  students: Student[];
  types: DocumentType[];
  id: number;
  typeId: number;
  document: Document = new Document();
  form: FormGroup;
  constructor(private documentService: DocumentService,
    private studentService: StudentService, private router: Router,
    private documentTypeService: DocumentTypeService,
    private formBuilder: FormBuilder, private httpClient: HttpClient) {

      this.form = this.formBuilder.group({
        types: [''],
        students : ['']
      });
     }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:8080/api/students').subscribe(
      data => {
        this.students = data as Student[];
      }, error => console.error(error));
      this.httpClient.get('http://localhost:8080/api/types').subscribe(
        data => {
          this.types = data as DocumentType[];
        }, error => console.error(error));
  }

  saveDocument() {
    this.document = this.form.value;
    this.id = this.form.value['students'];
    this.typeId = this.form.value['types'];
    console.log(this.id);
    this.documentTypeService.getDocumentTypeById(this.typeId).subscribe(data => {
      console.log(this.typeId)
      this.document.type.id = this.typeId;
      
    });
     this.studentService.getStudentById(this.id).subscribe(data =>{
       this.document.student = data;
       console.log(data);
       this.documentService.createDocument(this.document).subscribe(data => {
        console.log(this.document.id)
        console.log(data);
        this.document = new Document();
        this.goToDocumentsList();
      }, error => console.error(error));
    }, error => console.error(error));
  
  }

  goToDocumentsList(){
    this.router.navigate(['/documents']);
  }

  onSubmit() {
    console.log(this.document);
    this.saveDocument();
  }
}
