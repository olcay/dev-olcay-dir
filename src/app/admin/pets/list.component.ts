import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { FromWhere, Gender, PetAge, PetsApiClient, PetType, Size } from '@app/_services/petsapi.client';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    pets: any[];

    constructor(private client: PetsApiClient) {}

    ngOnInit() {
        this.client.getPets(null, 0, 1, 20, null, null, PetType.All, 0, 0, PetAge.None, Gender.None, Size.None, FromWhere.None)
            .pipe(first())
            .subscribe(res => this.pets = res.value);
    }

    deletePet(id: string) {
        const pet = this.pets.find(x => x.id === id);
        pet.isDeleting = true;
        this.client.deletePet(id)
            .pipe(first())
            .subscribe(() => {
                this.pets = this.pets.filter(x => x.id !== id) 
            });
    }
}