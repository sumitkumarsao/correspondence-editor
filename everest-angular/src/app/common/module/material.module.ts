import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, MatCardModule, MatDividerModule, MatIconModule,
  MatSidenavModule, MatToolbarModule, MatListModule, MatTooltipModule, MatTabsModule, MatTableModule,
  MatFormFieldModule, MatInputModule, MatDialogModule, MatButtonToggleModule, MatSelectModule, MatMenuModule, MatProgressSpinnerModule,
  MatGridListModule, MatAutocompleteModule, MatRadioModule, MatChipsModule, MatSnackBarModule, MatBadgeModule
} from '@angular/material';


const DECLARE_MAT_MODULE = [MatFormFieldModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatCheckboxModule,
  MatListModule, MatCardModule, MatButtonToggleModule, MatSelectModule, MatMenuModule, MatProgressSpinnerModule,
  MatInputModule, MatTabsModule, MatGridListModule, MatAutocompleteModule, MatRadioModule, MatChipsModule, MatDialogModule,
  MatDividerModule, MatSnackBarModule, MatBadgeModule,
  MatTooltipModule, MatTableModule
];

@NgModule({

  imports: [DECLARE_MAT_MODULE],
  exports: [DECLARE_MAT_MODULE]
})
export class MaterialModule { }
