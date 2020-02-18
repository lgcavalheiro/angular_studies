import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @Input() name: string;

  constructor() {

  }

  ngOnInit(): void {
    this.setUpperCase();
    console.log(this.name);
  }

  setUpperCase() {
    this.name = this.name.toUpperCase();
  }

  displayName() {
    alert(this.name);
  }

}
