import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about-modal',
  templateUrl: './about-modal.component.html',
  styleUrls: ['./about-modal.component.css']
})
export class AboutModalComponent implements OnInit {

  info = {
    quotaBytesTotal: 1000,
    quotaBytesUsed: 400
  };

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
  }

}
