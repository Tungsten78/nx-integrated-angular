import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedUiComponent } from '@nx-integrated-angular/shared/ui';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [BrowserModule,SharedUiComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
