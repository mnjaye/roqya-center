import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {NzDividerModule}      from 'ng-zorro-antd/divider';
import { IconDefinition} from '@ant-design/icons-angular';
import {
  StepBackwardOutline,
  CaretLeftOutline,
  SettingOutline,
  MailOutline,
  AppstoreOutline,
  HomeOutline,
  PhoneOutline,
  BankOutline,
  DesktopOutline
} from '@ant-design/icons-angular/icons';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SymptomeCardComponent } from './symptome-card/symptome-card.component';
import { ServiceCardComponent } from './service-card/service-card.component';

const icons: IconDefinition[] = [
  StepBackwardOutline,
  CaretLeftOutline,
  SettingOutline,
  MailOutline,
  AppstoreOutline,
  SettingOutline,
  MailOutline,
  HomeOutline,
  BankOutline,
  DesktopOutline
];

@NgModule({
  declarations: [
    HomeComponent,
    SymptomeCardComponent,
    ServiceCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzGridModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule.forChild(icons),
    NzButtonModule,
    NzDividerModule
  ]
})


export class HomeModule { }
