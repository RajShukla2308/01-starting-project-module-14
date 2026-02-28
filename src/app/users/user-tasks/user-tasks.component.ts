import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterOutlet, RouterLink, ResolveFn, RouterState, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet, RouterLink],
})
export class UserTasksComponent implements OnInit{
  // userId = input.required<string>();
  message = input.required<string>();

  private usersService = inject(UsersService);
  private activatedRoute = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef)

  // userName = computed(()=>
  //   this.usersService.users.find(u=>u.id == this.userId())?.name
  // )

  // userName = '';

  // getting from resolver fn now
  userName = input.required<string>();


  // ngOnInit(): void {
  //   console.log('static data',this.message())
  //   const subscription: Subscription = this.activatedRoute.paramMap.subscribe({
  //     next: (paramMap) =>{
  //       this.userName = this.usersService.users.find(u=> u.id == paramMap.get('userId'))?.name || ''
  //     }
  // })

  // this.destroyRef.onDestroy(()=>subscription?.unsubscribe())
  // }


  // subscribing activatedRoute's data property
  ngOnInit(): void {
    this.activatedRoute.data.subscribe({
      next: data=> console.log(data) // will give static and dynamic both data.
    })
  }

}

// resolve object function
export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot
) =>{ 
  const usersService = inject(UsersService);
  const userName = usersService.users.find(u=> u.id == 
    activatedRoute.paramMap.get('userId'))?.name || ''
  return userName;
}

export const resolveTitle: ResolveFn<string> = (
  activatedRoute, routerState
) =>{
  return resolveUserName(activatedRoute, routerState) + '\s Tasks';
}
