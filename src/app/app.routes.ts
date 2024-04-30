import { mapToCanActivate, Routes } from '@angular/router';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { NotificationsPageComponent } from './notifications-page/notifications-page.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { ConfirmEmailComponent } from './authentication/confirm-email/confirm-email.component';
import { SettingsComponent } from './settings/settings.component';
import { AccountSettingsComponent } from './settings/account-settings/account-settings.component';
import { ChangePasswordComponent } from './settings/change-password/change-password.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { QuizpageComponent } from './quizpage/quizpage.component';
import { RulesComponent } from './rules/rules.component';
import { AuthGuard } from './authentication/sign-in/auth.guard';

export const routes: Routes = [
    {path: '', component: RulesComponent, canActivate: [AuthGuard]},
    {path: 'leaderboard', component: LeaderboardComponent, canActivate: [AuthGuard]},
    {path: 'quizpage', component: QuizpageComponent, canActivate: [AuthGuard]},    
    {path: 'notifications', component: NotificationsPageComponent, canActivate: [AuthGuard]},
    {path: 'my-profile', component: MyProfileComponent, canActivate: [AuthGuard]},

    {
        path: 'authentication',
        component: AuthenticationComponent,
        children: [
            {path: '', component: SignInComponent},
            {path: 'sign-up', component: SignUpComponent},
            {path: 'forgot-password', component: ForgotPasswordComponent},
            {path: 'reset-password', component: ResetPasswordComponent},
            {path: 'confirm-email', component: ConfirmEmailComponent},
            {path: 'logout', component: LogoutComponent}
        ]
    },
    
    {
        path: 'settings', canActivate: [AuthGuard],
        component: SettingsComponent,
        children: [
            {path: '', component: AccountSettingsComponent},
            {path: 'change-password', component: ChangePasswordComponent},
        ]
    },

    // Here add new pages component

    {path: '**', canActivate: [AuthGuard], component: NotFoundComponent} // This line will remain down from the whole pages component list
];