import { factory } from '@cinerino/api-javascript-client';
import { Action } from '@ngrx/store';
import { IGmoTokenObject } from '../../functions';
import { IMovieTicket, IReservation, IReservationSeat } from '../../models';

/**
 * Action types
 */
export enum ActionTypes {
    Delete = '[Purchase] Delete',
    UnsettledDelete = '[Purchase] Unsettled Delete',
    GetSeller = '[Purchase] Select Seller',
    GetSellerSuccess = '[Purchase] Select Seller Success',
    GetSellerFail = '[Purchase] Select Seller Fail',
    SelectTheater = '[Purchase] Select Theater',
    SelectScheduleDate = '[Purchase] Select Schedule Date',
    GetPreScheduleDates = '[Purchase] Get Pre Schedule',
    GetPreScheduleDatesSuccess = '[Purchase] Get Pre Schedule Success',
    GetPreScheduleDatesFail = '[Purchase] Get Pre Schedule Fail',
    GetScreeningEvent = '[Purchase] Get Screening Event',
    GetScreeningEventSuccess = '[Purchase] Get Screening Event Success',
    GetScreeningEventFail = '[Purchase] Get Screening Event Fail',
    StartTransaction = '[Purchase] Start Transaction',
    StartTransactionSuccess = '[Purchase] Start Transaction Success',
    StartTransactionFail = '[Purchase] Start Transaction Fail',
    CancelTransaction = '[Purchase] Cancel Transaction',
    CancelTransactionSuccess = '[Purchase] Cancel Transaction Success',
    CancelTransactionFail = '[Purchase] Cancel Transaction Fail',
    GetScreen = '[Purchase] Get Screen',
    GetScreenSuccess = '[Purchase] Get Screen Success',
    GetScreenFail = '[Purchase] Get Screen Fail',
    GetScreeningEventOffers = '[Purchase] Get ScreeningEvent Offers',
    GetScreeningEventOffersSuccess = '[Purchase] Get ScreeningEvent Offers Success',
    GetScreeningEventOffersFail = '[Purchase] Get ScreeningEvent Offers Fail',
    SelectSeats = '[Purchase] Select Seats',
    CancelSeats = '[Purchase] Cancel Seats',
    GetTicketList = '[Purchase] Get Ticket List',
    GetTicketListSuccess = '[Purchase] Get Ticket List Success',
    GetTicketListFail = '[Purchase] Get Ticket List Fail',
    SelectTickets = '[Purchase] Select Tickets',
    TemporaryReservation = '[Purchase] Temporary Reservation',
    TemporaryReservationSuccess = '[Purchase] Temporary Reservation Success',
    TemporaryReservationFail = '[Purchase] Temporary Reservation Fail',
    CancelTemporaryReservations = '[Purchase] Cancel Temporary Reservation',
    CancelTemporaryReservationsSuccess = '[Purchase] Cancel Temporary Reservation Success',
    CancelTemporaryReservationsFail = '[Purchase] Cancel Temporary Reservation Fail',
    RegisterCreditCard = '[Purchase] Register Credit Card',
    RemoveCreditCard = '[Purchase] Remove Credit Card',
    RegisterContact = '[Purchase] Register Contact',
    RegisterContactSuccess = '[Purchase] Register Contact Success',
    RegisterContactFail = '[Purchase] Register Contact Fail',
    AuthorizeCreditCard = '[Purchase] Authorize Credit Card',
    AuthorizeCreditCardSuccess = '[Purchase] Authorize Credit Card Success',
    AuthorizeCreditCardFail = '[Purchase] Authorize Credit Card Fail',
    AuthorizeMovieTicket = '[Purchase] Authorize Movie Ticket',
    AuthorizeMovieTicketSuccess = '[Purchase] Authorize Movie Ticket Success',
    AuthorizeMovieTicketFail = '[Purchase] Authorize Movie Ticket Fail',
    CheckMovieTicket = '[Purchase] Check Movie Ticket',
    CheckMovieTicketSuccess = '[Purchase] Check Movie Ticket Success',
    CheckMovieTicketFail = '[Purchase] Check Movie Ticket Fail',
    EndTransaction = '[Purchase] End Transaction',
    EndTransactionSuccess = '[Purchase] End Transaction Success',
    EndTransactionFail = '[Purchase] End Transaction Fail',
    CreateGmoTokenObject = '[Purchase] Create Gmo Token Object',
    CreateGmoTokenObjectSuccess = '[Purchase] Create Gmo Token Object Success',
    CreateGmoTokenObjectFail = '[Purchase] Create Gmo Token Object Fail',
    ConvertExternalToPurchase = '[Purchase] Convert External To Purchase',
    ConvertExternalToPurchaseSuccess = '[Purchase] Convert External To Purchase Success',
    ConvertExternalToPurchaseFail = '[Purchase] Convert External To Purchase Fail',
}

/**
 * Delete
 */
export class Delete implements Action {
    public readonly type = ActionTypes.Delete;
    constructor(public payload?: {}) { }
}

/**
 * UnsettledDelete
 */
export class UnsettledDelete implements Action {
    public readonly type = ActionTypes.UnsettledDelete;
    constructor(public payload?: {}) { }
}

/**
 * SelectScheduleDate
 */
export class SelectScheduleDate implements Action {
    public readonly type = ActionTypes.SelectScheduleDate;
    constructor(public payload: { scheduleDate: string }) { }
}

/**
 * GetSeller
 */
export class GetSeller implements Action {
    public readonly type = ActionTypes.GetSeller;
    constructor(public payload: { id: string; }) { }
}

/**
 * GetSellerSuccess
 */
export class GetSellerSuccess implements Action {
    public readonly type = ActionTypes.GetSellerSuccess;
    constructor(public payload: {
        seller: factory.seller.IOrganization<factory.seller.IAttributes<factory.organizationType>>
    }) { }
}

/**
 * GetSellerFail
 */
export class GetSellerFail implements Action {
    public readonly type = ActionTypes.GetSellerFail;
    constructor(public payload: { error: Error }) { }
}

/**
 * SelectTheater
 */
export class SelectTheater implements Action {
    public readonly type = ActionTypes.SelectTheater;
    constructor(public payload: { theater: factory.chevre.place.movieTheater.IPlaceWithoutScreeningRoom }) { }
}

/**
 * GetPreScheduleDates
 */
export class GetPreScheduleDates implements Action {
    public readonly type = ActionTypes.GetPreScheduleDates;
    constructor(public payload: {
        superEvent: {
            ids?: string[];
            /**
             * 親イベント(劇場の上映イベント)が実施される場所の識別子リスト
             */
            locationBranchCodes?: string[];
            /**
             * イベントで上演される作品識別子リスト
             */
            workPerformedIdentifiers?: string[];
        };
    }) { }
}

/**
 * GetPreScheduleDatesSuccess
 */
export class GetPreScheduleDatesSuccess implements Action {
    public readonly type = ActionTypes.GetPreScheduleDatesSuccess;
    constructor(public payload: {
        sheduleDates: string[]
    }) { }
}

/**
 * GetPreScheduleDatesFail
 */
export class GetPreScheduleDatesFail implements Action {
    public readonly type = ActionTypes.GetPreScheduleDatesFail;
    constructor(public payload: { error: Error }) { }
}


/**
 * GetScreeningEvent
 */
export class GetScreeningEvent implements Action {
    public readonly type = ActionTypes.GetScreeningEvent;
    constructor(public payload: {
        screeningEvent: factory.chevre.event.screeningEvent.IEvent
    }) { }
}

/**
 * GetScreeningEventSuccess
 */
export class GetScreeningEventSuccess implements Action {
    public readonly type = ActionTypes.GetScreeningEventSuccess;
    constructor(public payload: {
        screeningEvent: factory.chevre.event.screeningEvent.IEvent
    }) { }
}

/**
 * GetScreeningEventFail
 */
export class GetScreeningEventFail implements Action {
    public readonly type = ActionTypes.GetScreeningEventFail;
    constructor(public payload: { error: Error }) { }
}

/**
 * StartTransaction
 */
export class StartTransaction implements Action {
    public readonly type = ActionTypes.StartTransaction;
    constructor(public payload: {
        expires: Date;
        agent?: { identifier?: factory.person.IIdentifier; };
        seller: { typeOf: factory.organizationType; id: string; };
        object: {
            passport?: { token: factory.waiter.passport.IEncodedPassport; };
        };
    }) { }
}

/**
 * StartTransactionSuccess
 */
export class StartTransactionSuccess implements Action {
    public readonly type = ActionTypes.StartTransactionSuccess;
    constructor(public payload: {
        transaction: factory.transaction.placeOrder.ITransaction
    }) { }
}

/**
 * StartTransactionFail
 */
export class StartTransactionFail implements Action {
    public readonly type = ActionTypes.StartTransactionFail;
    constructor(public payload: { error: Error }) { }
}

/**
 * CancelTransaction
 */
export class CancelTransaction implements Action {
    public readonly type = ActionTypes.CancelTransaction;
    constructor(public payload: {
        transaction: factory.transaction.placeOrder.ITransaction
    }) { }
}

/**
 * CancelTransactionSuccess
 */
export class CancelTransactionSuccess implements Action {
    public readonly type = ActionTypes.CancelTransactionSuccess;
    constructor(public payload?: {}) { }
}

/**
 * CancelTransactionFail
 */
export class CancelTransactionFail implements Action {
    public readonly type = ActionTypes.CancelTransactionFail;
    constructor(public payload: { error: Error }) { }
}

/**
 * GetScreen
 */
export class GetScreen implements Action {
    public readonly type = ActionTypes.GetScreen;
    constructor(public payload: {
        limit?: number;
        page?: number;
        branchCode?: {
            $eq?: string;
        };
        containedInPlace?: {
            branchCode?: {
                $eq?: string;
            };
        };
    }) { }
}

/**
 * GetScreenSuccess
 */
export class GetScreenSuccess implements Action {
    public readonly type = ActionTypes.GetScreenSuccess;
    constructor(public payload: {
        screen: factory.chevre.place.screeningRoom.IPlace;
    }) { }
}

/**
 * GetScreenFail
 */
export class GetScreenFail implements Action {
    public readonly type = ActionTypes.GetScreenFail;
    constructor(public payload: { error: Error }) { }
}

/**
 * GetScreeningEventOffers
 */
export class GetScreeningEventOffers implements Action {
    public readonly type = ActionTypes.GetScreeningEventOffers;
    constructor(public payload: { screeningEvent: factory.chevre.event.screeningEvent.IEvent }) { }
}

/**
 * GetScreeningEventOffersSuccess
 */
export class GetScreeningEventOffersSuccess implements Action {
    public readonly type = ActionTypes.GetScreeningEventOffersSuccess;
    constructor(public payload: {
        screeningEventOffers: factory.chevre.place.screeningRoomSection.IPlaceWithOffer[];
    }) { }
}

/**
 * GetScreeningEventOffersFail
 */
export class GetScreeningEventOffersFail implements Action {
    public readonly type = ActionTypes.GetScreeningEventOffersFail;
    constructor(public payload: { error: Error }) { }
}


/**
 * SelectSeats
 */
export class SelectSeats implements Action {
    public readonly type = ActionTypes.SelectSeats;
    constructor(public payload: { seats: IReservationSeat[] }) { }
}

/**
 * CancelSeats
 */
export class CancelSeats implements Action {
    public readonly type = ActionTypes.CancelSeats;
    constructor(public payload: { seats: IReservationSeat[] }) { }
}

/**
 * SelectTickets
 */
export class SelectTickets implements Action {
    public readonly type = ActionTypes.SelectTickets;
    constructor(public payload: { reservations: IReservation[] }) { }
}

/**
 * GetTicketList
 */
export class GetTicketList implements Action {
    public readonly type = ActionTypes.GetTicketList;
    constructor(public payload: {
        screeningEvent: factory.chevre.event.screeningEvent.IEvent;
        seller: factory.seller.IOrganization<factory.seller.IAttributes<factory.organizationType>>;
    }) { }
}

/**
 * GetTicketListSuccess
 */
export class GetTicketListSuccess implements Action {
    public readonly type = ActionTypes.GetTicketListSuccess;
    constructor(public payload: { screeningEventTicketOffers: factory.chevre.event.screeningEvent.ITicketOffer[] }) { }
}

/**
 * GetTicketListFail
 */
export class GetTicketListFail implements Action {
    public readonly type = ActionTypes.GetTicketListFail;
    constructor(public payload: { error: Error }) { }
}

/**
 * TemporaryReservation
 */
export class TemporaryReservation implements Action {
    public readonly type = ActionTypes.TemporaryReservation;
    constructor(public payload: {
        transaction: factory.transaction.placeOrder.ITransaction;
        screeningEvent: factory.chevre.event.screeningEvent.IEvent;
        authorizeSeatReservation?: factory.action.authorize.offer.seatReservation.IAction<factory.service.webAPI.Identifier.Chevre>;
        reservations: IReservation[];
        screeningEventOffers: factory.chevre.place.screeningRoomSection.IPlaceWithOffer[];
        additionalTicketText?: string;
    }) { }
}

/**
 * TemporaryReservationSuccess
 */
export class TemporaryReservationSuccess implements Action {
    public readonly type = ActionTypes.TemporaryReservationSuccess;
    constructor(public payload: {
        addAuthorizeSeatReservation: factory.action.authorize.offer.seatReservation.IAction<factory.service.webAPI.Identifier.Chevre>;
        removeAuthorizeSeatReservation?: factory.action.authorize.offer.seatReservation.IAction<factory.service.webAPI.Identifier.Chevre>;
    }) { }
}

/**
 * TemporaryReservationFail
 */
export class TemporaryReservationFail implements Action {
    public readonly type = ActionTypes.TemporaryReservationFail;
    constructor(public payload: { error: Error }) { }
}

/**
 * CancelTemporaryReservations
 */
export class CancelTemporaryReservations implements Action {
    public readonly type = ActionTypes.CancelTemporaryReservations;
    constructor(public payload: {
        authorizeSeatReservations: factory.action.authorize.offer.seatReservation.IAction<factory.service.webAPI.Identifier>[];
    }) { }
}

/**
 * CancelTemporaryReservationsSuccess
 */
export class CancelTemporaryReservationsSuccess implements Action {
    public readonly type = ActionTypes.CancelTemporaryReservationsSuccess;
    constructor(public payload: {
        authorizeSeatReservations: factory.action.authorize.offer.seatReservation.IAction<factory.service.webAPI.Identifier>[];
    }) { }
}

/**
 * CancelTemporaryReservationsFail
 */
export class CancelTemporaryReservationsFail implements Action {
    public readonly type = ActionTypes.CancelTemporaryReservationsFail;
    constructor(public payload: { error: Error }) { }
}

/**
 * RegisterCreditCard
 */
export class RegisterCreditCard implements Action {
    public readonly type = ActionTypes.RegisterCreditCard;
    constructor(public payload: {
        creditCard: factory.paymentMethod.paymentCard.creditCard.ICheckedCard
        | factory.paymentMethod.paymentCard.creditCard.IUnauthorizedCardOfMember
        | factory.paymentMethod.paymentCard.creditCard.IUncheckedCardRaw
        | factory.paymentMethod.paymentCard.creditCard.IUncheckedCardTokenized;
    }) { }
}

/**
 * RemoveCreditCard
 */
export class RemoveCreditCard implements Action {
    public readonly type = ActionTypes.RemoveCreditCard;
    constructor(public payload?: {}) { }
}

/**
 * RegisterContact
 */
export class RegisterContact implements Action {
    public readonly type = ActionTypes.RegisterContact;
    constructor(public payload: {
        transaction: factory.transaction.placeOrder.ITransaction;
        profile: factory.person.IProfile;
    }) { }
}

/**
 * RegisterContactSuccess
 */
export class RegisterContactSuccess implements Action {
    public readonly type = ActionTypes.RegisterContactSuccess;
    constructor(public payload: { profile: factory.person.IProfile }) { }
}

/**
 * RegisterContactFail
 */
export class RegisterContactFail implements Action {
    public readonly type = ActionTypes.RegisterContactFail;
    constructor(public payload: { error: Error }) { }
}

/**
 * AuthorizeCreditCard
 */
export class AuthorizeCreditCard implements Action {
    public readonly type = ActionTypes.AuthorizeCreditCard;
    constructor(public payload: {
        transaction: factory.transaction.placeOrder.ITransaction;
        authorizeCreditCardPayment?: factory.action.authorize.paymentMethod.creditCard.IAction;
        orderCount: number;
        amount: number;
        method: string;
        creditCard: factory.paymentMethod.paymentCard.creditCard.ICheckedCard
        | factory.paymentMethod.paymentCard.creditCard.IUnauthorizedCardOfMember
        | factory.paymentMethod.paymentCard.creditCard.IUncheckedCardRaw
        | factory.paymentMethod.paymentCard.creditCard.IUncheckedCardTokenized;
    }) { }
}

/**
 * AuthorizeCreditCardSuccess
 */
export class AuthorizeCreditCardSuccess implements Action {
    public readonly type = ActionTypes.AuthorizeCreditCardSuccess;
    constructor(public payload: {
        authorizeCreditCardPayment: factory.action.authorize.paymentMethod.creditCard.IAction
    }) { }
}

/**
 * AuthorizeCreditCardFail
 */
export class AuthorizeCreditCardFail implements Action {
    public readonly type = ActionTypes.AuthorizeCreditCardFail;
    constructor(public payload: { error: Error; }) { }
}

/**
 * AuthorizeMovieTicket
 */
export class AuthorizeMovieTicket implements Action {
    public readonly type = ActionTypes.AuthorizeMovieTicket;
    constructor(public payload: {
        transaction: factory.transaction.placeOrder.ITransaction;
        authorizeMovieTicketPayments: factory.action.authorize.paymentMethod.movieTicket.IAction[];
        authorizeSeatReservations: factory.action.authorize.offer.seatReservation.IAction<factory.service.webAPI.Identifier>[];
        pendingMovieTickets: IMovieTicket[];
        seller: factory.seller.IOrganization<factory.seller.IAttributes<factory.organizationType>>;
    }) { }
}

/**
 * AuthorizeMovieTicketSuccess
 */
export class AuthorizeMovieTicketSuccess implements Action {
    public readonly type = ActionTypes.AuthorizeMovieTicketSuccess;
    constructor(public payload: {
        authorizeMovieTicketPayments: factory.action.authorize.paymentMethod.movieTicket.IAction[]
    }) { }
}

/**
 * AuthorizeMovieTicketFail
 */
export class AuthorizeMovieTicketFail implements Action {
    public readonly type = ActionTypes.AuthorizeMovieTicketFail;
    constructor(public payload: { error: Error; }) { }
}

/**
 * CheckMovieTicket
 */
export class CheckMovieTicket implements Action {
    public readonly type = ActionTypes.CheckMovieTicket;
    constructor(public payload: {
        transaction: factory.transaction.placeOrder.ITransaction;
        movieTickets: {
            typeOf: factory.paymentMethodType.MovieTicket;
            identifier: string;
            accessCode: string;
            project: factory.project.IProject;
        }[];
        screeningEvent: factory.chevre.event.screeningEvent.IEvent;
    }) { }
}

/**
 * CheckMovieTicketSuccess
 */
export class CheckMovieTicketSuccess implements Action {
    public readonly type = ActionTypes.CheckMovieTicketSuccess;
    constructor(public payload: { checkMovieTicketAction: factory.action.check.paymentMethod.movieTicket.IAction }) { }
}

/**
 * CheckMovieTicketFail
 */
export class CheckMovieTicketFail implements Action {
    public readonly type = ActionTypes.CheckMovieTicketFail;
    constructor(public payload: { error: Error; }) { }
}

/**
 * EndTransaction
 */
export class EndTransaction implements Action {
    public readonly type = ActionTypes.EndTransaction;
    constructor(public payload: {
        transaction: factory.transaction.placeOrder.ITransaction;
        seller: factory.seller.IOrganization<factory.seller.IAttributes<factory.organizationType>>;
        authorizeSeatReservations: factory.action.authorize.offer.seatReservation.IAction<factory.service.webAPI.Identifier>[];
        language: string;
        linyId?: string;
    }) { }
}

/**
 * EndTransactionSuccess
 */
export class EndTransactionSuccess implements Action {
    public readonly type = ActionTypes.EndTransactionSuccess;
    constructor(public payload: { order: factory.order.IOrder; }) { }
}

/**
 * EndTransactionFail
 */
export class EndTransactionFail implements Action {
    public readonly type = ActionTypes.EndTransactionFail;
    constructor(public payload: { error: Error }) { }
}

/**
 * CreateGmoTokenObject
 */
export class CreateGmoTokenObject implements Action {
    public readonly type = ActionTypes.CreateGmoTokenObject;
    constructor(public payload: {
        creditCard: {
            cardno: string;
            expire: string;
            holderName: string;
            securityCode: string;
        },
        seller: factory.seller.IOrganization<factory.seller.IAttributes<factory.organizationType>>;
    }) { }
}

/**
 * CreateGmoTokenObjectSuccess
 */
export class CreateGmoTokenObjectSuccess implements Action {
    public readonly type = ActionTypes.CreateGmoTokenObjectSuccess;
    constructor(public payload: { gmoTokenObject: IGmoTokenObject; }) { }
}

/**
 * CreateGmoTokenObjectFail
 */
export class CreateGmoTokenObjectFail implements Action {
    public readonly type = ActionTypes.CreateGmoTokenObjectFail;
    constructor(public payload: { error: Error }) { }
}

/**
 * ConvertExternalToPurchase
 */
export class ConvertExternalToPurchase implements Action {
    public readonly type = ActionTypes.ConvertExternalToPurchase;
    constructor(public payload: { eventId: string; }) { }
}

/**
 * ConvertExternalToPurchaseSuccess
 */
export class ConvertExternalToPurchaseSuccess implements Action {
    public readonly type = ActionTypes.ConvertExternalToPurchaseSuccess;
    constructor(public payload: {
        screeningEvent: factory.chevre.event.screeningEvent.IEvent;
        seller: factory.seller.IOrganization<factory.seller.IAttributes<factory.organizationType>>;
    }) { }
}

/**
 * ConvertExternalToPurchaseFail
 */
export class ConvertExternalToPurchaseFail implements Action {
    public readonly type = ActionTypes.ConvertExternalToPurchaseFail;
    constructor(public payload: { error: Error }) { }
}


/**
 * Actions
 */
export type Actions =
    | Delete
    | UnsettledDelete
    | GetSeller
    | GetSellerSuccess
    | GetSellerFail
    | SelectTheater
    | SelectScheduleDate
    | GetPreScheduleDates
    | GetPreScheduleDatesSuccess
    | GetPreScheduleDatesFail
    | GetScreeningEvent
    | GetScreeningEventSuccess
    | GetScreeningEventFail
    | StartTransaction
    | StartTransactionSuccess
    | StartTransactionFail
    | CancelTransaction
    | CancelTransactionSuccess
    | CancelTransactionFail
    | GetScreen
    | GetScreenSuccess
    | GetScreenFail
    | GetScreeningEventOffers
    | GetScreeningEventOffersSuccess
    | GetScreeningEventOffersFail
    | SelectSeats
    | CancelSeats
    | GetTicketList
    | GetTicketListSuccess
    | GetTicketListFail
    | SelectTickets
    | TemporaryReservation
    | TemporaryReservationSuccess
    | TemporaryReservationFail
    | CancelTemporaryReservations
    | CancelTemporaryReservationsSuccess
    | CancelTemporaryReservationsFail
    | RegisterCreditCard
    | RemoveCreditCard
    | RegisterContact
    | RegisterContactSuccess
    | RegisterContactFail
    | AuthorizeCreditCard
    | AuthorizeCreditCardSuccess
    | AuthorizeCreditCardFail
    | AuthorizeMovieTicket
    | AuthorizeMovieTicketSuccess
    | AuthorizeMovieTicketFail
    | CheckMovieTicket
    | CheckMovieTicketSuccess
    | CheckMovieTicketFail
    | EndTransaction
    | EndTransactionSuccess
    | EndTransactionFail
    | CreateGmoTokenObject
    | CreateGmoTokenObjectSuccess
    | CreateGmoTokenObjectFail
    | ConvertExternalToPurchase
    | ConvertExternalToPurchaseSuccess
    | ConvertExternalToPurchaseFail;
