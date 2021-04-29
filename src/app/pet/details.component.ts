import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AccountService, AlertService } from '@app/_services';
import { PetsApiClient } from '@app/_services/petsapi.client';

@Component({ templateUrl: 'details.component.html' })
export class DetailsComponent implements OnInit {
    account = this.accountService.accountValue;
    petid = this.activatedRoute.snapshot.params.petid;
    deleting = false;

    data: any = []
    tags: any = []

    constructor(
        private accountService: AccountService,
        private client: PetsApiClient,
        private activatedRoute: ActivatedRoute,
        private alertService: AlertService,
        private router: Router) { }

    getData() {
        this.client.getPet(this.petid)
            .subscribe(res => {
                this.data = res;
            }, error => console.error(error));
    }

    onDelete() {
        if (confirm('Arşive kaldırmak istediğinize emin misiniz?')) {
            this.deleting = true;

            this.client.deletePet(this.petid)
                .subscribe(() => {
                    this.alertService.success('Pet arşivlendi.', { keepAfterRouteChange: true });
                    this.router.navigate(['/']);
                });
        }
    }

    ngOnInit() {
        this.getData()
    }
}