
import { Component } from '@angular/core';
import { PurchaseSeatComponent } from '../../purchase-seat/purchase-seat.component';

@Component({
    selector: 'app-purchase-event-seat',
    templateUrl: './purchase-event-seat.component.html',
    styleUrls: ['./purchase-event-seat.component.scss']
})
export class PurchaseEventSeatComponent extends PurchaseSeatComponent {
    public async prev() {
        try {
            const authorizeSeatReservation = (await this.purchaseService.getData()).authorizeSeatReservation;
            if (authorizeSeatReservation !== undefined) {
                await this.purchaseService.cancelTemporaryReservations([authorizeSeatReservation]);
            }
            this.router.navigate(['/purchase/event/ticket']);
        } catch (error) {
            console.error(error);
        }
    }
}