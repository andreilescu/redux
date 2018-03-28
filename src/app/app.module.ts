import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {StoreModule} from "@ngrx/store";
import {metaReducers, reducers} from "./reducer/reducer";
import {MatIconModule, MatToolbarModule} from "@angular/material";
import {ToolbarIconComponent} from './component/toolbar-icon/toolbar-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarIconComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    MatIconModule,
    MatToolbarModule
  ],
  providers: [ToolbarIconComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
