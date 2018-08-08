import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomHeaders } from './interceptors';

@NgModule({
    imports: [BrowserModule, HttpClientModule],
    declarations: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomHeaders,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
