import { Routes } from '@angular/router';

export const routes: Routes = [{
    path :'register',
    pathMatch:'full',
    loadComponent: ()=>{
        return import('./components/register/register.component').then((m)=>m.RegisterComponent)
    }
}  , {
    path :'',
    pathMatch:'full',
    loadComponent: ()=>{
        return import('./components/home/home.component').then((m)=>m.HomeComponent)
    }
},  {
    path :'login',
    pathMatch:'full',
    loadComponent: ()=>{
        return import('./components/login/login.component').then((m)=>m.LoginComponent)
    }
},{
    path :'users',
    pathMatch:'full',
    loadComponent: ()=>{
        return import('./components/users/users.component').then((m)=>m.UsersComponent)
    }
}
];
