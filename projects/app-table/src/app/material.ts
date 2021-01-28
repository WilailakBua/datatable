import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import { NgModule } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSortModule } from "@angular/material/sort";

@NgModule({
    imports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatSelectModule, 
        MatSlideToggleModule, 
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatAutocompleteModule,
        MatTableModule,
        MatPaginatorModule,
        MatTabsModule,
        MatSortModule
        ],
    exports: [
        MatButtonModule, 
        MatCheckboxModule, 
        MatSelectModule,
         MatSlideToggleModule, 
         MatDatepickerModule,
         MatNativeDateModule,
         MatFormFieldModule,
        MatInputModule,
        MatRadioModule,
        MatAutocompleteModule,
        MatTableModule,
        MatPaginatorModule,
        MatTabsModule,
        MatSortModule
        ],

})
export class MaterialModule {}