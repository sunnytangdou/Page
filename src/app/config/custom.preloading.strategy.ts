import { Route, PreloadingStrategy } from '@angular/router';
import { Observable, of } from 'rxjs';
export class CustomPreloadingStrategy implements PreloadingStrategy {
    preload(r: Route, fn: () => Observable<any>): Observable<any> {
        return r.data && r.data.preload ? fn() : of(null);
    }
}
