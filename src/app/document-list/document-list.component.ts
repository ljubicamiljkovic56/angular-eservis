import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from '../services/document.service';
import { Document } from '../model/document';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: Document[];

  constructor(private documentService: DocumentService,
    private router: Router) { }

  ngOnInit(): void {
    this.getDocuments();
  }

  private getDocuments(){
    this.documentService.getDocumentsList().subscribe(data => {
      this.documents = data;
      console.log(data);
    });
  }

  updateDocument(id: number){
    this.router.navigate(['update-document',  id]);
  }

  deleteDocument(id: number) {
    this.documentService.deleteDocument(id).subscribe(data => {
      console.log(data);
      this.getDocuments();
    });
  }

  documentDetails(id: number) {
    this.router.navigate(['document-details', id]);
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
