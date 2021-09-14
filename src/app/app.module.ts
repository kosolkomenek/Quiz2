import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightBarComponent } from './components/right-bar/right-bar.component';
import { MiddleBarComponent } from './components/middle-bar/middle-bar.component';
import { LeftBarModule } from './components/left-bar/left-bar.module';

@NgModule({
  declarations: [AppComponent, RightBarComponent, MiddleBarComponent],
  imports: [BrowserModule, AppRoutingModule, LeftBarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
