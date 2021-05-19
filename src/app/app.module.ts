import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShortcutUrlComponent } from './components/shortcut-url/shortcut-url.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ShortInterceptor } from './services/short.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShortcutUrlComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ShortInterceptor,
    //multi por si queremos mas de un interceptor
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
