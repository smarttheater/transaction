import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { factory } from '@cinerino/sdk';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';
import { Models } from '../../../../..';
import { getEnvironment } from '../../../../../../environments/environment';
import { ActionService, UtilService } from '../../../../../services';
import * as reducers from '../../../../../store/reducers';
import { PurchaseSeatTicketModalComponent } from '../../../../shared/components/parts/purchase/seat-ticket-modal/seat-ticket-modal.component';

@Component({
    selector: 'app-purchase-ticket',
    template: '',
})
export class PurchaseTicketComponent implements OnInit {
    public purchase: Observable<reducers.IPurchaseState>;
    public user: Observable<reducers.IUserState>;
    public isLoading: Observable<boolean>;
    public additionalTicketText: string;
    public environment = getEnvironment();
    public translateName: string;
    public isSelectedTicket: boolean;

    constructor(
        private store: Store<reducers.IState>,
        private router: Router,
        private modal: BsModalService,
        private utilService: UtilService,
        private actionService: ActionService,
        private translate: TranslateService
    ) {}

    /**
     * 初期化
     */
    public async ngOnInit() {
        try {
            this.purchase = this.store.pipe(select(reducers.getPurchase));
            this.user = this.store.pipe(select(reducers.getUser));
            this.isLoading = this.store.pipe(select(reducers.getLoading));
            this.translateName =
                this.environment.VIEW_TYPE === 'cinema'
                    ? 'purchase.cinema.ticket'
                    : 'purchase.event.ticket';
            this.additionalTicketText = '';
            this.isSelectedTicket =
                (await this.getUnselectedTicketReservations()).length === 0;
            await this.checkMyMembershipProduct();
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
        }
    }

    /**
     * マイメンバーシップ認証
     */
    public async checkMyMembershipProduct() {
        const { checkProducts } = await this.actionService.purchase.getData();
        const { login } = await this.actionService.user.getData();
        if (!login || checkProducts.length > 0) {
            return;
        }
        const membershipOwnershipInfos =
            await this.actionService.ownershipInfo.searchMyMemberships();
        if (membershipOwnershipInfos.length === 0) {
            return;
        }
        await this.actionService.purchase.payment.checkProduct({
            ownershipInfoId: membershipOwnershipInfos[0].id,
        });
    }

    /**
     * 券種未選択の予約取得
     */
    public async getUnselectedTicketReservations() {
        const { reservations } = await this.actionService.purchase.getData();
        return reservations.filter((reservation) => {
            return reservation.ticket === undefined;
        });
    }

    /**
     * 券種決定
     */
    public async onSubmit() {
        try {
            const { reservations } =
                await this.actionService.purchase.getData();
            const validResult = reservations.filter((reservation) => {
                if (reservation.ticket === undefined) {
                    return false;
                }
                const priceComponent =
                    reservation.ticket.ticketOffer.priceSpecification
                        .priceComponent;
                const UnitPriceSpecification =
                    factory.chevre.priceSpecificationType
                        .UnitPriceSpecification;
                const unitPriceSpecifications = priceComponent.filter(
                    (p) => p.typeOf === UnitPriceSpecification
                );
                const filterResult = reservations.filter(
                    (targetReservation) => {
                        return (
                            reservation.ticket !== undefined &&
                            targetReservation.ticket !== undefined &&
                            reservation.ticket.ticketOffer.id ===
                                targetReservation.ticket.ticketOffer.id
                        );
                    }
                );
                const findResult = unitPriceSpecifications.find(
                    (unitPriceSpecification) => {
                        const value =
                            unitPriceSpecification.typeOf ===
                                UnitPriceSpecification &&
                            unitPriceSpecification.referenceQuantity.value !==
                                undefined
                                ? unitPriceSpecification.referenceQuantity.value
                                : 1;

                        return filterResult.length % value !== 0;
                    }
                );

                return findResult !== undefined;
            });
            if (validResult.length > 0) {
                this.utilService.openAlert({
                    title: this.translate.instant('common.error'),
                    body: this.translate.instant(
                        `${this.translateName}.alert.ticketCondition`
                    ),
                });
                return;
            }
            const additionalTicketText = this.additionalTicketText;
            const screeningEventSeats =
                await this.actionService.purchase.event.getScreeningEventSeats();
            await this.actionService.purchase.transaction.authorizeSeatReservation(
                {
                    reservations,
                    additionalTicketText,
                    screeningEventSeats,
                }
            );
            const navigate =
                this.environment.VIEW_TYPE === 'cinema'
                    ? '/purchase/input'
                    : '/purchase/event/schedule';
            this.router.navigate([navigate]);
        } catch (error) {
            console.error(error);
            this.router.navigate(['/error']);
        }
    }

    /**
     * 券種一覧表示
     * @param reservation
     */
    public async openTicketList(
        reservation: Models.Purchase.Reservation.IReservation
    ) {
        const {
            authorizeSeatReservation,
            screeningEventTicketOffers,
            checkMovieTickets,
            checkProducts,
            reservations,
            pendingMovieTickets,
        } = await this.actionService.purchase.getData();
        this.modal.show(PurchaseSeatTicketModalComponent, {
            initialState: {
                authorizeSeatReservation,
                screeningEventTicketOffers,
                checkMovieTickets,
                checkProducts,
                reservations,
                reservation,
                pendingMovieTickets,
                cb: async (
                    ticket: Models.Purchase.Reservation.IReservationTicket
                ) => {
                    this.actionService.purchase.selectTickets([
                        { ...reservation, ticket },
                    ]);
                    this.isSelectedTicket =
                        (await this.getUnselectedTicketReservations())
                            .length === 0;
                },
            },
            class: 'modal-dialog-centered',
        });
    }
}
