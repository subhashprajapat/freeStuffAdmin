
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
    selector: 'app-delete-dialog',
    templateUrl: './deleteCategory.component.html'
})
export class DeleteCategoryComponent implements OnInit {
    ngOnInit() {}
    constructor(
        public dialogRef: MatDialogRef<DeleteCategoryComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}