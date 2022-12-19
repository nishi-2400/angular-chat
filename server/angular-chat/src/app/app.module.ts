import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [AppComponent, ChatComponent, SignUpComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, SharedModule, CoreModule, AppRoutingModule]
})
export class AppModule {}
