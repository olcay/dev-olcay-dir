import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';
import { environment } from '@environments/environment';

import { ModalModule } from './_modal';
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor, appInitializer } from './_helpers';
import { AccountService } from './_services';
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { API_BASE_URL, PetsApiClient } from './_services/petsapi.client';

import { SharedModule } from "./shared/shared.module";
import { SidebarModule } from 'ng-sidebar';
import { PetModule } from './pet/pet.module';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        ModalModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        SidebarModule.forRoot(),
        PetModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent
    ],
    providers: [
        { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService] },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: API_BASE_URL, useValue: environment.apiUrl},
        [PetsApiClient]
        // provider used to create fake backend
        //, fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }