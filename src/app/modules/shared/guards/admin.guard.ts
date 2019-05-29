import { Injectable } from '@angular/core';
import {
  CanLoad
} from '@angular/router';
import { Observable } from 'rxjs';
import { SharedModule } from '../shared.module';

@Injectable({
  providedIn: SharedModule
})
export class AdminGuard implements CanLoad {
  canLoad(
    route: import('@angular/router').Route,
    segments: import('@angular/router').UrlSegment[]
  ): boolean | Observable<boolean> | Promise<boolean> {
    console.log('WHY!!!!!!!!!!!');
    return false;
  }
}
