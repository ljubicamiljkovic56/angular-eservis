import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from '../model/document';
import { DocumentType } from '../model/document-type';
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
 
  studentId: number;
  typeId: number;
  id: number;
  students: Student[];
  types: DocumentType[];
  document: Document = new Document();
  type: DocumentType = new DocumentType();
  form: FormGroup;

  constructor(private documentService: DocumentService,
    private studentService: StudentService,
    private documentTypeService: DocumentTypeService,
    private route: ActivatedRoute, private router: Router,
    private formBuilder: FormBuilder, private httpClient: HttpClient
    ) {
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
    this.studentId = this.form.value['students'];
    this.typeId = this.form.value['types'];
    this.studentService.getStudentById(this.studentId).subscribe(data => {
      console.log(data);
      this.document.student = data;
      this.documentTypeService.getDocumentTypeById(this.typeId).subscribe(data => {
        console.log(data);
        this.type.id = this.typeId;
        this.document.type = this.type;
        this.documentService.updateDocument(this.id, this.document).subscribe(data => {
          console.log(data);
          this.document = new Document();
          this.goToDocumentsList();
        },error => console.error(error));
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

  goToLogin(){
    this.router.navigate(['/login']);
  }

  logout(){
    localStorage.removeItem('id');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('role');

    console.log('Logout');

    this.goToLogin();
  }
}
