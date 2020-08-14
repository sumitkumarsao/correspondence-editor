import { Component } from '@angular/core';
import { DocumentTypeList } from 'src/app/common/model/common.model';
@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
    selectedDocumentType: string = 'PDF';
    documentTypeList: DocumentTypeList[] = [
        {
            name: 'PDF Document',
            code: 'PDF'
        },
        {
            name: 'XLS Document',
            code: 'XLS'
        },
        {
            name: 'Text Document',
            code: 'TEXT'
        }
    ];
}
