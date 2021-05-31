import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Element } from './shop-element';
import { ProductDialogComponent, ProductDialogResult } from './elements/product-dialog/product-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  biedronka: Element[] = [
    {title: 'buy milk', description: 'go, buy milk', important: true},
    {title: 'create canban', description: 'read title', important: true}
  ];
  other: Element[] = [];
  lidl: Element[] = [];
  netto: Element[] = [];
  kaufland: Element[] = [];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  newProduct(): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '25wv',
      data:{
        element: {

        }
      }
    });
    dialogRef
      .afterClosed()
      .subscribe((result: ProductDialogResult) => this.other.push(result.element))
  }

  editElement(list: 'biedronka' | 'lidl' | 'netto' | 'kaufland' | 'other', element: Element): void {
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '25wv',
      data:{
        element,
        enableDelete: true
      }
    })
    dialogRef.afterClosed().subscribe((result: ProductDialogResult) => {
      if (!result) {
        return;
      }
      const dataList = this[list];
      const elementIndex = dataList.indexOf(element);
      if(result.delete) {
        dataList.splice(elementIndex, 1)
      } else {
        dataList[elementIndex] = element;
        console.log(element)
      }
    })
  }

  drop(event: CdkDragDrop<Element[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
