import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { DialogContributeComponent } from './dialog-contribute/dialog-contribute.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public dialog: MatDialog) {}

  openDialog(giftId): void {
    let dialogRef = this.dialog.open(DialogContributeComponent, {
      width: 'auto',
    });
    dialogRef.componentInstance.data= {
      id: giftId
    };
  }
}
