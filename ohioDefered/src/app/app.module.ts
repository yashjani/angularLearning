import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebUserComponent } from './web-user/web-user.component';
import { ParticipantUserComponent } from './participant-user/participant-user.component';
import { SignUpComponent } from './web-user/sign-up/sign-up.component';
import { RetrievePassComponent } from './web-user/retrieve-pass/retrieve-pass.component';
import { ToolsComponent } from './web-user/tools/tools.component';
import { EnrollmentComponent } from './web-user/enrollment/enrollment.component';
import { HeaderComponent } from './header/header.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { CarouselComponent } from './web-user/carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    WebUserComponent,
    ParticipantUserComponent,
    SignUpComponent,
    RetrievePassComponent,
    ToolsComponent,
    EnrollmentComponent,
    HeaderComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
