import { AuthGuard } from './../guard/auth.guard';
import { HomeComponent } from '../components/home/home';
import { NotFoundComponent } from '../components/404/notfound';
import { LoginComponent } from '../components/login/login';
import { UserComponent } from '../components/user/user';
import { NewsComponent } from '../components/news/news';
import { AdminProfile } from '../components/admin.profile/admin.pofile';
import { AdminGuard } from './../guard/admin.guard';

const authGuard = new AuthGuard();
const adminGuard = new AdminGuard();

export const routes = {
    '/': {
        component: new HomeComponent(),
    },
    '/login': {
        component: new LoginComponent(),
    },
    '/users/:id': {
        component: new UserComponent(),
        guards: [authGuard],
    },
    '/news': {
        component: new NewsComponent(),
        guards: [authGuard],
    },
    '404': {
        component: new NotFoundComponent(),
    },
    '/admin-panel': {
        component: new AdminProfile(),
        guards: [authGuard, adminGuard],
    },
};
