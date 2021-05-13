import { Component, OnInit } from '@angular/core';

import { AccountService } from '@app/_services';
import { FromWhere, Gender, PetAge, PetsApiClient, PetType, Size } from '@app/_services/petsapi.client';

@Component({ templateUrl: 'details.component.html' })
export class DetailsComponent implements OnInit {
    account = this.accountService.accountValue;

    pets: Array<any>;

    constructor(private accountService: AccountService,
        private client: PetsApiClient) { }

    getData() {
        this.client.getPets(null, 0, 1, 3, null, 'id,title,description,published,cityText', PetType.All, 0, 0, PetAge.None, Gender.None, Size.None, FromWhere.None)
            .subscribe(res => {
                this.pets = res.value;
            }, error => console.error(error));
    }

    ngOnInit() {
        this.getData();
    }
}