import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, transferArrayItem, moveItemInArray } from '@angular/cdk/drag-drop';
import { Element } from './shop-element';
import { ProductDialogComponent, ProductDialogResult } from './elements/product-dialog/product-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import {FirebaseService} from '../../services/firebase.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  biedronka = this.store.collection('biedronka').valueChanges({idField: 'id'});
  other = this.store.collection('other').valueChanges({idField: 'id'});
  lidl = this.store.collection('lidl').valueChanges({idField: 'id'});
  netto = this.store.collection('netto').valueChanges({idField: 'id'});
  kaufland = this.store.collection('kaufland').valueChanges({idField: 'id'});
  visible = false;
  constructor(private dialog: MatDialog, private store: AngularFirestore, public firebaseService: FirebaseService) { }

  ngOnInit(): void {
    if(this.firebaseService.isLoggedIn === true) {
      this.visible = true
    } else {
      this.visible = false
    }
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
      .subscribe((result: ProductDialogResult) => this.store.collection('biedronka').add(result.element));
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
      if (result.delete) {
        this.store.collection(list).doc(element.id).delete();
      } else {
        this.store.collection(list).doc(element.id).update(element);
      }
    })
  }

  drop(event: CdkDragDrop<Element[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
    const item = event.previousContainer.data[event.previousIndex]
    this.store.firestore.runTransaction(() => {
      const promise = Promise.all([
        this.store.collection(event.previousContainer.id).doc(item.id).delete(),
        this.store.collection(event.container.id).add(item),
      ]);
      return promise;
    })
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
