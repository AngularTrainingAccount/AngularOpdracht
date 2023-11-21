import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ColorpatchesComponent } from './color-patches/color-patches.component';
import { MemoryCardComponent } from './memory-card/memory-card.component';
import { MemoryComponent } from './memory/memory.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColorpatchesComponent,
    MemoryCardComponent,
    MemoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
