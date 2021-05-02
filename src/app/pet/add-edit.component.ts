import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService } from '@app/_services';
import { PetsApiClient, PetType } from '@app/_services/petsapi.client';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {
    form: FormGroup;
    petId: string;
    petType: PetType;
    isAddMode: boolean;
    loading = false;
    submitted = false;
    pageTitle: string;

    data: any = []

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private alertService: AlertService,
        private client: PetsApiClient
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.petId = params['id'];
            this.petType = params['type'];
            this.fillInTheBlanks();
          });
    }

    fillInTheBlanks() {
        this.isAddMode = !this.petId;

        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            title: ['', Validators.required],
            description: [''],
            cityId: ['', Validators.required],
            raceId: [''],
            ageValue: ['None'],
            genderValue: ['None'],
            sizeValue: ['None'],
            fromWhereValue: ['None'],
            petTypeValue: [this.petType]
        });

        this.client.getCities()
            .subscribe(res => {
                this.data.cities = res;
            });

        this.client.getAges()
            .subscribe(res => {
                this.data.ages = res;
            });

        this.client.getGenders()
            .subscribe(res => {
                this.data.genders = res;
            });

        this.client.getSizes()
            .subscribe(res => {
                this.data.sizes = res;
            });

        this.client.getFromWhere()
            .subscribe(res => {
                this.data.fromWhere = res;
            });

        if (this.isAddMode) {
            this.client.getPetTypes()
                .subscribe(res => {
                    this.pageTitle = res.find(r => r.value.toLowerCase() == this.petType).text;
                });

            this.client.getRacesForPetType(this.petType)
                .subscribe(res => {
                    this.data.races = res;
                });
        } else {
            this.client.getPet(this.petId)
                .pipe(first())
                .subscribe(x => {
                    this.form.patchValue(x);
                    this.form.patchValue({
                        cityId: x.city.value,
                        raceId: x.race.id,
                        genderValue: x.gender.value,
                        ageValue: x.age.value,
                        sizeValue: x.size.value,
                        fromWhereValue: x.fromWhere.value
                    });

                    this.pageTitle = x.petType.text;

                    this.client.getRacesForPetType(x.petType.value)
                        .subscribe(res => {
                            this.data.races = res;
                        });
                });
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        if (this.isAddMode) {
            this.createAccount();
        } else {
            this.updateAccount();
        }
    }

    private createAccount() {
        this.client.createPet(this.form.value)
            .pipe(first())
            .subscribe({
                next: (pet) => {
                    this.alertService.success('Pet başarıyla eklendi.', { keepAfterRouteChange: true });
                    this.router.navigate(['/pet/' + pet.id], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }

    private updateAccount() {
        this.client.updatePet(this.petId, this.form.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.alertService.success('Güncelleme başarılı.', { keepAfterRouteChange: true });
                    this.router.navigate(['/pet/' + this.petId], { relativeTo: this.route });
                },
                error: error => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }
}