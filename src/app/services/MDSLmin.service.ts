import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Observable } from 'rxjs/Observable';
import { MDSLmin } from '../models/model-base';

@Injectable()
export class MDSLminService {
    constructor(private api: ApiService) { }
    getAllMDSLmin(): Observable<MDSLmin> { 
        const obj = this.api.getAllMDSLmin();
        console.info('getAllMDSLmin(): ' + obj);
        return obj; }
        // return this.api.getAllMDSLmin(); }
    complete() { }
}
