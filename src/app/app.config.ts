import { provideRouter, withComponentInputBinding } from "@angular/router";
import { appRoutes } from "./app.routes";

export const appConfig = {
    providers:[
        provideRouter(appRoutes,withComponentInputBinding())
    ]
}