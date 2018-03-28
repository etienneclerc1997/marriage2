import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [MatButtonModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatDialogModule, MatTooltipModule],
  exports: [MatButtonModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatCardModule, MatIconModule, MatDialogModule, MatTooltipModule],
})
export class MaterialModule { }