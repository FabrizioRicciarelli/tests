import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';
import { BigTree } from '../models/model-base';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class BigTreeService {
    constructor(private api: ApiService) { }
    addBigTree(bigtree: BigTree): Observable<BigTree> { return this.api.createBigTree(bigtree); }
    deleteBigTreeByName(name: string): Observable<BigTree> { return this.api.deleteBigTreeByName(name); }
    updateBigTree(bigtree: BigTree): Observable<BigTree> { return this.api.updateBigTree(bigtree); }
    getAllBigTrees(): Observable<BigTree[]> { return this.api.getAllBigTrees(); }
    getBigTreeByName(name: string): Observable<BigTree> { return this.api.getBigTreeByName(name); }
    complete() { /* this.items.map(x=>x.id) */ }
}
