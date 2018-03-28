import {Component} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {DECREMENT, INCREMENT, RESET} from "./reducer/reducer";
import {ADD_TO_WISHLIST, AddWishlistItem, ResetWishlist, WishlistActions, WishlistItem} from "./actions/actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: Observable<number>;
  wishlistItems: Observable<WishlistItem[]>;

  constructor(private store: Store<AppState>) {
    this.counter = store.select('counter');
    this.wishlistItems = store.select('wishlistItems');
  }

  increment() {
    this.store.dispatch({type: INCREMENT});
  }

  decrement() {
    this.store.dispatch({type: DECREMENT});
  }

  reset() {
    this.store.dispatch({type: RESET});
  }

  addWishlistItem() {
    const wishlistItem:WishlistItem = new WishlistItem("uuid");
    this.store.dispatch(new AddWishlistItem({wishlistItem}));
  }

  resetWishlist() {
    this.store.dispatch(new ResetWishlist());
  }

}
