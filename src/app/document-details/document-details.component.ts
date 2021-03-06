import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentService } from '../services/document.service';
import {Document} from '../model/document';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css']
})
export class DocumentDetailsComponent implements OnInit {

  id: number;
  document: Document;
  constructor(private route: ActivatedRoute, private router: Router,
    private documentService: DocumentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.document = new Document();
    this.documentService.getDocumentById(this.id).subscribe(data => {
      this.document = data;
    });
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
