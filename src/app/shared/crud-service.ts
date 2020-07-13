
import { HttpClient } from '@angular/common/http';
import { delay, tap, take } from 'rxjs/operators';

export class CrudService<T> {

    // Este exemplo de crud service repository foi tirado da aula da Loiane de Angular:
    //https://www.youtube.com/watch?v=qhYZgl1oitU
    constructor(protected http: HttpClient, private API_URL) { }

    list() {
        return this.http.get<T[]>(this.API_URL)
            .pipe(delay(2000),
                tap(console.log)
            );
    }

    loadById(id: Number) {
        return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
    }

    private create(model: T) {
        return this.http.post(this.API_URL, model).pipe(take(1));
    }

    private update(model: T) {
        return this.http.put(`${this.API_URL}/${model['id']}`, model).pipe(take(1));
    }

    save(model: T) {
        if (model['id']) {
            return this.update(model);
        } else {
            return this.create(model);
        }
    }

    remove(id) {
        return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
    }
}