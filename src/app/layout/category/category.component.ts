import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AddEditCategoryComponent } from '../modals/addEditCategory.component';
import { DeleteCategoryComponent } from '../modals/deleteCategory.component';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

    displayedColumns = ['id', 'name', 'progress', 'color'];
    dataSource: MatTableDataSource<UserData>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(public dialog: MatDialog) {
        // Create 100 users
        const users: UserData[] = [];
        for (let i = 1; i <= 100; i++) {
            users.push(createNewUser(i));
        }

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }


    openDialog(type): void {
        const dialogRef = this.dialog.open(AddEditCategoryComponent, {
            width: '900px',
            data: type
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');

        });
    }

    deleteDialog(): void {
        const dialogRef = this.dialog.open(DeleteCategoryComponent, {
            width: '350px',
            //data: { name: this.name, animal: this.animal }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            //this.animal = result;
        });
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

}



/** Constants used to fill up our data base. */
const COLORS = [
    'maroon',
    'red',
    'orange',
    'yellow',
    'olive',
    'green',
    'purple',
    'fuchsia',
    'lime',
    'teal',
    'aqua',
    'blue',
    'navy',
    'black',
    'gray'
];
const NAMES = [
    'Maia',
    'Asher',
    'Olivia',
    'Atticus',
    'Amelia',
    'Jack',
    'Charlotte',
    'Theodore',
    'Isla',
    'Oliver',
    'Isabella',
    'Jasper',
    'Cora',
    'Levi',
    'Violet',
    'Arthur',
    'Mia',
    'Thomas',
    'Elizabeth'
];

export interface UserData {
    id: string;
    name: string;
    progress: string;
    color: string;
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
    const name =
        NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
        ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
        '.';

    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
    };
}

