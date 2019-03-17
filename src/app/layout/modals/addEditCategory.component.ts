import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef } from '@angular/material';

@Component({
  selector: 'category-dialog',
  templateUrl: './addEditCategory.html',
})
export class AddEditCategoryComponent implements OnInit{
    ngOnInit() {}
    constructor(
        public dialogRef: MatDialogRef<AddEditCategoryComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}