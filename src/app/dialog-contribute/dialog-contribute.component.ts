import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-contribute',
  templateUrl: './dialog-contribute.component.html',
  styleUrls: ['./dialog-contribute.component.css']
})
export class DialogContributeComponent implements OnInit {

  public data: any;
  id: any

  constructor() { }

  ngOnInit() {
    this.id = this.data.id;
    console.log(this.id);
  }

}
