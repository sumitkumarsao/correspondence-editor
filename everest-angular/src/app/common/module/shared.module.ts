import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DirectiveModule } from './directive.module';
import { PipeModule } from './pipe.module';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
        DirectiveModule,
        PipeModule,
        NgxWebstorageModule.forRoot({ prefix: 'everest|' }),
        NgbModule,
        AngularFontAwesomeModule
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
        DirectiveModule,
        PipeModule,
        NgxWebstorageModule,
        NgbModule,
        AngularFontAwesomeModule
    ]
})
export class SharedModule { }
