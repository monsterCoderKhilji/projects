import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root',
})
export class AuthorService {

    private authors = {
        "authorarray": [
            {
                "id": 1,
                "name": "author1"
            },
            {
                "id": 2,
                "name": "author2"
            },
            {
                "id": 3,
                "name": "author3"
            }
        ]
    }

    getAuthors(): Array<String> {
        return this.authors.authorarray.map(x => x.name)
    }



}