import {Action} from "@ngrx/store";

export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const RESET_WISHLIST = 'RESET_WISHLIST';

export class WishlistItem {
  private _uid: string
  constructor(uid: string){
    this._uid = uid;
  };
  get uid(): string {
    return this._uid;
  }
}

export class AddWishlistItem implements Action {
  readonly type = ADD_TO_WISHLIST;
  constructor(public payload: { wishlistItem: WishlistItem }) {}
}

export class ResetWishlist implements Action {
  readonly type = RESET_WISHLIST;
}

export type WishlistActions = AddWishlistItem | ResetWishlist;
