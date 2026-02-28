import { Routes } from "@angular/router";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { routes as userRotes} from './users/users.routes';


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
        data: {
            message: 'Hello!'
        }
    }

]