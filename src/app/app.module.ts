import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }    from '@angular/forms';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule } from  '@angular/material';
import { MatListModule } from '@angular/material/list';
import { ChartModule } from "primeng/chart";
import { ViewDashboardComponent } from './view-dashboard/view-dashboard.component';
import { GbpAccountComponent } from './Accounts/gbp-account/gbp-account.component';
import { UsdAccountComponent } from './Accounts/usd-account/usd-account.component';
import { EurAccountComponent, DialogOverviewExampleDialog } from './Accounts/eur-account/eur-account.component';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';
import { NetBalanceComponent } from './net-balance/net-balance.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { ButtonModule} from 'primeng/button';
import { TableModule} from 'primeng/table';
import { CardModule} from 'primeng/card';
import { NavService } from './nav.service';
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { GbpTransactionComponent } from './view-transaction/gbp-transaction/gbp-transaction.component';
import { EurTransactionComponent } from './view-transaction/eur-transaction/eur-transaction.component';
import { UsdTransactionComponent } from './view-transaction/usd-transaction/usd-transaction.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DialogModule } from 'primeng/dialog';
import { DialogBoxComponent } from './Accounts/dialog-box/dialog-box.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewDashboardComponent,
    GbpAccountComponent,
    UsdAccountComponent,
    EurAccountComponent,
    ViewTransactionComponent,
    NetBalanceComponent,
    AnalysisComponent,
    MenuListItemComponent,
    GbpTransactionComponent,
    EurTransactionComponent,
    UsdTransactionComponent,
    LoginPageComponent,
    UserProfileComponent,
    DialogBoxComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartModule,
    ToastModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    ButtonModule,
    TableModule,
    CardModule,
    DialogModule,
    MatDialogModule,
    MatCardModule, 
    FormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [MessageService, NavService],
  bootstrap: [AppComponent, DialogOverviewExampleDialog]
})
export class AppModule { }
