import { Component, OnInit, Input} from '@angular/core';
import { DocumentsService } from '../services/documents.service';
import { Document } from '../Model/document';
import { log } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @Input()
  document = new Document;

  i: number = 1;

  x = new Document;


 

  constructor(private service: DocumentsService, private router: Router) {}

  ngOnInit() {
    this.service.getAllDocuments().subscribe(data => this.service.documents = data);
  }

  public addDocument() {
    this.document.id = this.i++;
    this.document.createDate = new Date;
    this.document.updateDate = new Date;
    this.service.addDocument(this.document).subscribe(
      data => {
        console.log("Post successful", data);
        this.service.documents.push(this.document);
        console.log(this.service.documents);
        this.document = new Document;
      },
      error => {
        console.log("Error", error);
      }
    );
    
  }


  public editDocument(i: number) {
    this.router.navigate(['/edit',i+1]);
  }

  public deleteDocument(id,i) {
    this.service.removeDocument(id).subscribe(
      data => {
        console.log("Remove successful", data);
        console.log(id);
        this.service.documents.splice(i, 1);
        console.log(this.service.documents);
      },
      error => {
        console.log("Error", error);
      }
    );
  }

}
