import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Framework } from '../models/model-base';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class FrameworkService {
    constructor(private api: ApiService) { }
    addFramework(framework: Framework): Observable<Framework> { return this.api.createFramework(framework); }
    deleteFrameworkByName(name: string): Observable<Framework> { return this.api.deleteFrameworkByName(name); }
    updateFramework(framework: Framework): Observable<Framework> { return this.api.updateFramework(framework); }
    getAllFrameworks(): Observable<Framework[]> { return this.api.getAllFrameworks(); }
    getFrameworkByName(name: string): Observable<Framework> { return this.api.getFrameworkByName(name); }
    complete() { /* this.items.map(x=>x.id) */ }
}
