import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Document } from '../Model/document';
import { DocumentsService } from '../services/documents.service';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input()
  document = new Document;
  index: number;

  constructor(private service: DocumentsService, private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((param: any) => {
      this.index = param.i - 1;
      this.document = this.service.documents[this.index];
      console.log(param);
      console.log(this.document);
    });
  }


  ngOnInit() {
    
  }


  saveDocument() {
    this.document.updateDate = new Date;
    this.service.updateDocument(this.document).subscribe(
      data => {
        console.log("Save successful", data);
        this.service.documents[this.index] = this.document;
        console.log(this.service.documents);
        this.router.navigate(['/home']);
      },
      error => {
        console.log("Error", error);
      }
    );
  }
  
}
