import { Component, Inject, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogComponent {
  // message: string;
  constructor(@Inject(MAT_DIALOG_DATA) public message: string, private dialogRef: MatDialogRef<DialogComponent>) {
    if (message) {
      this.message = message;
    }
    this.dialogRef.updateSize('300vw', '300vw');
  }
  close(): void {
    this.dialogRef.close();
  }
}
