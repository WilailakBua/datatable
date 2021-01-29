import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule, MatPaginatorIntl} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import { MatSortModule } from "@angular/material/sort";
import { getDutchPaginatorIntl } from './dutch-paginator-intl';

@NgModule({
    imports: [

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
        providers: [
            {provide: MatPaginatorIntl, useValue: getDutchPaginatorIntl()}
        ],

})
export class MaterialModule {}