import { Container } from 'inversify';
import type { AuthenticationService} from '../services/AuthenticationService';
import LocalStorageAuthenticationService from '../services/AuthenticationService';
// // import type { HttpService} from '../services/HttpService';
// import DefaultHttpService from '../services/HttpService';
// import type { UserService} from '../services/UserService';
// import DefaultUserService from '../services/UserService';
import HomePageStore from '../stores/HomePageStore'
// import UserStore from '../stores/UserStore'
import CatalogStore from '../stores/CatalogStore'
import LoginStore from '../stores/LoginStore'
import ownTypes from './ownTypes';
import CatalogService from '../services/CatalogService';

export const container = new Container();
// container.bind<HttpService>(ownTypes.httpService).to(DefaultHttpService).inSingletonScope();
// container.bind<UserService>(ownTypes.userService).to(DefaultUserService).inSingletonScope();
container.bind<AuthenticationService>(ownTypes.authenticationService).to(LocalStorageAuthenticationService).inSingletonScope();
container.bind<HomePageStore>(ownTypes.homePageStore).to(HomePageStore).inTransientScope();
// container.bind<UserStore>(ownTypes.userStore).to(UserStore).inTransientScope();
container.bind<CatalogService>(ownTypes.catalogService).to(CatalogService).inTransientScope();
container.bind<CatalogStore>(ownTypes.catalogStore).to(CatalogStore).inTransientScope();
container.bind<LoginStore>(ownTypes.loginStore).to(LoginStore).inTransientScope(); 
