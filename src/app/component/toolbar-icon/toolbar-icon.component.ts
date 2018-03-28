import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";

@Component({
  selector: 'toolbar-icon',
  templateUrl: './toolbar-icon.component.html',
  styleUrls: ['./toolbar-icon.component.css']
})
export class ToolbarIconComponent implements OnInit {

  @Input() name: string;
  counter: number;
  constructor(private store: Store<AppState>) {
    store.select('wishlistItems').subscribe(
      (items) => {
        this.counter = items.length;
      }
    )
  }

  ngOnInit() {
  }

}
