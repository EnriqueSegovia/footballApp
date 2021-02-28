import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: '',
    redirectTo: 'leagues',//'home'
    pathMatch: 'full'
  },
  {
    path: 'leagues',
    loadChildren: () => import('./pages/leagues/leagues.module').then( m => m.LeaguesPageModule)
  },
  {
    path: 'players',
    loadChildren: () => import('./pages/players/players.module').then( m => m.PlayersPageModule)
  },
  {
    path: 'teams',
    loadChildren: () => import('./pages/teams/teams.module').then( m => m.TeamsPageModule)
  },
  {
    path: 'league/:id',
    loadChildren: () => import('./pages/league-details/league-details.module').then( m => m.LeagueDetailsPageModule)
  },
  {
    path: 'team/:id',
    loadChildren: () => import('./pages/team-details/team-details.module').then( m => m.TeamDetailsPageModule)
  },
  {
    path: 'player-details',
    loadChildren: () => import('./pages/player-details/player-details.module').then( m => m.PlayerDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
