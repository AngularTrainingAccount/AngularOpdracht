import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ColorpatchesComponent } from './color-patches/color-patches.component';
import { MemoryCardComponent } from './memory-card/memory-card.component';
import { MemoryComponent } from './memory/memory.component';

const routes: Routes = [
  {path : '', component: HomeComponent},
  {path: 'colorpatches', component: ColorpatchesComponent},
  {path: 'memory', component: MemoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
