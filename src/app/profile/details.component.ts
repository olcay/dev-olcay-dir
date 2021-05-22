import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Account } from '@app/_models';
import { AccountService, AlertService } from '@app/_services';
import { FromWhere, Gender, PetAge, PetsApiClient, PetType, Size } from '@app/_services/petsapi.client';
import { first } from 'rxjs/operators';

@Component({ templateUrl: 'details.component.html' })
export class DetailsComponent implements OnInit {
    id: number;
    account: Account;

    pets: Array<any>;

    constructor(private accountService: AccountService,
        private client: PetsApiClient,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService) { }

    fillInTheBlanks() {
        this.accountService.getById(this.id.toString())
            .pipe(first())
            .subscribe({
                next: (account) => {
                    this.account = account;

                    this.client.getPets(null, this.id, 1, 10, null, 'id,title,description,published,cityText,images', PetType.All, 0, 0, PetAge.None, Gender.None, Size.None, FromWhere.None)
                        .subscribe(res => {
                            this.pets = res.value;
                        }, error => console.error(error));
                },
                error: error => {
                    this.alertService.error(error, { keepAfterRouteChange: true });
                    this.router.navigate(['/']);
                }
            });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];

            this.fillInTheBlanks();
        });
    }
}