import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AboutModalComponent } from '../about-modal/about-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private modalService: NgbModal) {}

  ngOnInit() {
  }

  open() {
    console.log("Open");
  }

  save() {
    console.log("Save");
  }

  about() {
    this.modalService.open(AboutModalComponent);
  }

  signIn() {
    console.log("TODO: sign in");
  }

}
