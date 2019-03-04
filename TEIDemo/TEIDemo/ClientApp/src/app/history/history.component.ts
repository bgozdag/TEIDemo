import { Component, OnInit, Input } from '@angular/core';
import { Document } from '../Model/document';
import { DocumentsService } from '../services/documents.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  document = new Document;
  @Input()
  i: number;

  constructor(private service: DocumentsService) { }

  ngOnInit() {
  }

}
