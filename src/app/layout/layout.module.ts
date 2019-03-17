import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatCardModule,
    MatSlideToggleModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { UsersComponent } from './users/users.component';
import { CategoryComponent } from './category/category.component';
import { AddEditCategoryComponent } from './modals/addEditCategory.component';
import { DeleteCategoryComponent } from './modals/deleteCategory.component';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatDialogModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        TranslateModule,
        MatTableModule,
        MatFormFieldModule,
        MatPaginatorModule,
        MatCardModule,
        MatSlideToggleModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [LayoutComponent, NavComponent, TopnavComponent, SidebarComponent, UsersComponent, CategoryComponent,AddEditCategoryComponent,DeleteCategoryComponent],
    entryComponents: [
        AddEditCategoryComponent, DeleteCategoryComponent
    ]
})
export class LayoutModule {}
