import { Component, OnInit, OnDestroy } from '@angular/core';
import { Details } from 'src/app/common/model/common.model';
import { AuthService } from 'src/app/common/service/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'pdf-component',
    templateUrl: './pdf.component.html',
    styleUrls: ['./pdf.component.scss']
})

export class PdfComponent implements OnDestroy {
    subscription: Subscription;
    details: Details = {
        name: '',
        age: null,
        country: ''
    };

    constructor(private authService: AuthService) { }

    onSubmit() {
        this.subscription = this.authService.generatePdfDocument(this.details).subscribe(value => {
            if (value) {
                alert('PDF created successfully !!!');
                this.details.age = null;
                this.details.name = '';
                this.details.country = '';
            } else {
                alert('Failed to create PDF !!!');
            }
        })
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    get isSubscription(): boolean {
        if (this.subscription && !this.subscription.closed) {
            return true;
        } else {
            return false;
        }
    }

}
