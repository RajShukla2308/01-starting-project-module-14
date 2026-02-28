import { CanMatchFn, RedirectCommand, Router, Routes } from "@angular/router";
import { resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { routes as userRotes} from './users/users.routes';
import { inject } from "@angular/core";


const dummyCanMatch: CanMatchFn = (
    route, segments
) =>{
    const router = inject(Router);
    const shouldGetAccess = Math.random();
    if(shouldGetAccess < 0.5) return true;
    return new RedirectCommand(router.parseUrl('/unauthorised'))
}


export const appRoutes: Routes = [
    {
        path:'',
       // component: NoTaskComponent,
       redirectTo: 'users/u1/tasks',
       pathMatch: 'full'
    },
    // {
    //     path:'tasks',
    //     component: TasksComponent
    // }
    {
        path: 'users/:userId',
        component: UserTasksComponent,
        children:userRotes,
       // canMatch: [dummyCanMatch],
        data: {
            message: 'Hello!'
        },
        resolve: {
            userName: resolveUserName
        }
    }

]