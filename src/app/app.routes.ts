import { Routes } from '@angular/router';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path: 'about', title: 'About', component: About },
    { path: 'contact', title: 'Contact', component: Contact },
    { path: "", title: 'Home', component: Home}
];
