import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Element } from '../../shop-element';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent implements OnInit {
  private backupProduct: Partial<Element> = {... this.data.element};
  constructor(public dialogRef: MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductDialogData
    ) { 
  }

  ngOnInit(): void {
  }

  cancel(): void {
    this.data.element.title = this.backupProduct.title;
    this.data.element.description = this.backupProduct.description;
    this.dialogRef.close(this.data);
  }
}

export interface ProductDialogData {
  element: Element;
  enableDelete: boolean;
}

export interface ProductDialogResult {
  element: Element;
  delete?: boolean;
}