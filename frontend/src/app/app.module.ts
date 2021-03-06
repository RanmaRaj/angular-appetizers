import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from '@base/core/core.module'
import { SharedModule } from '@base/shared/shared.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material.module';
import { SecsToTimePipe } from './shared/pipes/secs-to-time.pipe';
import { NgxFloatButtonModule } from 'ngx-float-button';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    NgxFloatButtonModule,
  ],
  providers: [
    SecsToTimePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
