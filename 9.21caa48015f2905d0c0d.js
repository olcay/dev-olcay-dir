(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{cRhG:function(e,t,r){"use strict";r.r(t),r.d(t,"ProfileModule",(function(){return J}));var n=r("3Pt+"),c=r("ofXK"),i=r("tyNb"),s=r("fXoL");let o=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Cb({type:e,selectors:[["ng-component"]],decls:3,vars:0,consts:[[1,"p-4"],[1,"container"]],template:function(e,t){1&e&&(s.Nb(0,"div",0),s.Nb(1,"div",1),s.Jb(2,"router-outlet"),s.Mb(),s.Mb())},directives:[i.h],encapsulation:2}),e})();var a=r("J9tS");let b=(()=>{class e{constructor(e){this.accountService=e,this.account=this.accountService.accountValue}}return e.\u0275fac=function(t){return new(t||e)(s.Ib(a.a))},e.\u0275cmp=s.Cb({type:e,selectors:[["ng-component"]],decls:13,vars:4,consts:[["routerLink","update"]],template:function(e,t){1&e&&(s.Nb(0,"h1"),s.nc(1,"My Profile"),s.Mb(),s.Nb(2,"p"),s.Nb(3,"strong"),s.nc(4,"Name: "),s.Mb(),s.nc(5),s.Jb(6,"br"),s.Nb(7,"strong"),s.nc(8,"Email: "),s.Mb(),s.nc(9),s.Mb(),s.Nb(10,"p"),s.Nb(11,"a",0),s.nc(12,"Update Profile"),s.Mb(),s.Mb()),2&e&&(s.xb(5),s.rc(" ",t.account.title," ",t.account.firstName," ",t.account.lastName,""),s.xb(4),s.pc(" ",t.account.email,"\n"))},directives:[i.f],encapsulation:2}),e})();var u=r("SxV6"),d=r("XgRA");function l(e,t){1&e&&(s.Nb(0,"div"),s.nc(1,"First Name is required"),s.Mb())}function m(e,t){if(1&e&&(s.Nb(0,"div",15),s.mc(1,l,2,0,"div",16),s.Mb()),2&e){const e=s.Wb();s.xb(1),s.cc("ngIf",e.f.firstName.errors.required)}}function f(e,t){1&e&&(s.Nb(0,"div"),s.nc(1,"Last Name is required"),s.Mb())}function p(e,t){if(1&e&&(s.Nb(0,"div",15),s.mc(1,f,2,0,"div",16),s.Mb()),2&e){const e=s.Wb();s.xb(1),s.cc("ngIf",e.f.lastName.errors.required)}}function v(e,t){1&e&&(s.Nb(0,"div"),s.nc(1,"Email is required"),s.Mb())}function N(e,t){1&e&&(s.Nb(0,"div"),s.nc(1,"Email must be a valid email address"),s.Mb())}function g(e,t){if(1&e&&(s.Nb(0,"div",15),s.mc(1,v,2,0,"div",16),s.mc(2,N,2,0,"div",16),s.Mb()),2&e){const e=s.Wb();s.xb(1),s.cc("ngIf",e.f.email.errors.required),s.xb(1),s.cc("ngIf",e.f.email.errors.email)}}function h(e,t){1&e&&(s.Nb(0,"div"),s.nc(1,"Password is required"),s.Mb())}function M(e,t){1&e&&(s.Nb(0,"div"),s.nc(1,"Password must be at least 6 characters"),s.Mb())}function w(e,t){if(1&e&&(s.Nb(0,"div",15),s.mc(1,h,2,0,"div",16),s.mc(2,M,2,0,"div",16),s.Mb()),2&e){const e=s.Wb();s.xb(1),s.cc("ngIf",e.f.password.errors.required),s.xb(1),s.cc("ngIf",e.f.password.errors.minlength)}}function x(e,t){1&e&&(s.Nb(0,"div"),s.nc(1,"Confirm Password is required"),s.Mb())}function C(e,t){1&e&&(s.Nb(0,"div"),s.nc(1,"Passwords must match"),s.Mb())}function I(e,t){if(1&e&&(s.Nb(0,"div",15),s.mc(1,x,2,0,"div",16),s.mc(2,C,2,0,"div",16),s.Mb()),2&e){const e=s.Wb();s.xb(1),s.cc("ngIf",e.f.confirmPassword.errors.required),s.xb(1),s.cc("ngIf",e.f.confirmPassword.errors.mustMatch)}}function y(e,t){1&e&&s.Jb(0,"span",17)}function P(e,t){1&e&&s.Jb(0,"span",17)}const S=function(e){return{"is-invalid":e}},k=[{path:"",component:o,children:[{path:"",component:b},{path:"update",component:(()=>{class e{constructor(e,t,r,n,c){this.formBuilder=e,this.route=t,this.router=r,this.accountService=n,this.alertService=c,this.account=this.accountService.accountValue,this.loading=!1,this.submitted=!1,this.deleting=!1}ngOnInit(){this.form=this.formBuilder.group({title:[this.account.title,n.l.required],firstName:[this.account.firstName,n.l.required],lastName:[this.account.lastName,n.l.required],email:[this.account.email,[n.l.required,n.l.email]],password:["",[n.l.minLength(6)]],confirmPassword:[""]},{validator:Object(d.e)("password","confirmPassword")})}get f(){return this.form.controls}onSubmit(){this.submitted=!0,this.alertService.clear(),this.form.invalid||(this.loading=!0,this.accountService.update(this.account.id,this.form.value).pipe(Object(u.a)()).subscribe({next:()=>{this.alertService.success("Update successful",{keepAfterRouteChange:!0}),this.router.navigate(["../"],{relativeTo:this.route})},error:e=>{this.alertService.error(e),this.loading=!1}}))}onDelete(){confirm("Are you sure?")&&(this.deleting=!0,this.accountService.delete(this.account.id).pipe(Object(u.a)()).subscribe(()=>{this.alertService.success("Account deleted successfully",{keepAfterRouteChange:!0})}))}}return e.\u0275fac=function(t){return new(t||e)(s.Ib(n.c),s.Ib(i.a),s.Ib(i.c),s.Ib(a.a),s.Ib(a.b))},e.\u0275cmp=s.Cb({type:e,selectors:[["ng-component"]],decls:43,vars:25,consts:[[3,"formGroup","ngSubmit"],[1,"form-row"],[1,"form-group","col"],["type","text","formControlName","firstName",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["type","text","formControlName","lastName",1,"form-control",3,"ngClass"],[1,"form-group"],["type","text","formControlName","email",1,"form-control",3,"ngClass"],[1,"pt-3"],["type","password","formControlName","password",1,"form-control",3,"ngClass"],["type","password","formControlName","confirmPassword",1,"form-control",3,"ngClass"],["type","submit",1,"btn","btn-primary","mr-2",3,"disabled"],["class","spinner-border spinner-border-sm mr-1",4,"ngIf"],["type","button",1,"btn","btn-danger",3,"disabled","click"],["routerLink","../","href","",1,"btn","btn-link"],[1,"invalid-feedback"],[4,"ngIf"],[1,"spinner-border","spinner-border-sm","mr-1"]],template:function(e,t){1&e&&(s.Nb(0,"h1"),s.nc(1,"Update Profile"),s.Mb(),s.Nb(2,"form",0),s.Ub("ngSubmit",(function(){return t.onSubmit()})),s.Nb(3,"div",1),s.Nb(4,"div",2),s.Nb(5,"label"),s.nc(6,"First Name"),s.Mb(),s.Jb(7,"input",3),s.mc(8,m,2,1,"div",4),s.Mb(),s.Nb(9,"div",2),s.Nb(10,"label"),s.nc(11,"Last Name"),s.Mb(),s.Jb(12,"input",5),s.mc(13,p,2,1,"div",4),s.Mb(),s.Mb(),s.Nb(14,"div",6),s.Nb(15,"label"),s.nc(16,"Email"),s.Mb(),s.Jb(17,"input",7),s.mc(18,g,3,2,"div",4),s.Mb(),s.Nb(19,"h3",8),s.nc(20,"Change Password"),s.Mb(),s.Nb(21,"p"),s.nc(22,"Leave blank to keep the same password"),s.Mb(),s.Nb(23,"div",1),s.Nb(24,"div",2),s.Nb(25,"label"),s.nc(26,"Password"),s.Mb(),s.Jb(27,"input",9),s.mc(28,w,3,2,"div",4),s.Mb(),s.Nb(29,"div",2),s.Nb(30,"label"),s.nc(31,"Confirm Password"),s.Mb(),s.Jb(32,"input",10),s.mc(33,I,3,2,"div",4),s.Mb(),s.Mb(),s.Nb(34,"div",6),s.Nb(35,"button",11),s.mc(36,y,1,0,"span",12),s.nc(37," Update "),s.Mb(),s.Nb(38,"button",13),s.Ub("click",(function(){return t.onDelete()})),s.mc(39,P,1,0,"span",12),s.nc(40," Delete "),s.Mb(),s.Nb(41,"a",14),s.nc(42,"Cancel"),s.Mb(),s.Mb(),s.Mb()),2&e&&(s.xb(2),s.cc("formGroup",t.form),s.xb(5),s.cc("ngClass",s.gc(15,S,t.submitted&&t.f.firstName.errors)),s.xb(1),s.cc("ngIf",t.submitted&&t.f.firstName.errors),s.xb(4),s.cc("ngClass",s.gc(17,S,t.submitted&&t.f.lastName.errors)),s.xb(1),s.cc("ngIf",t.submitted&&t.f.lastName.errors),s.xb(4),s.cc("ngClass",s.gc(19,S,t.submitted&&t.f.email.errors)),s.xb(1),s.cc("ngIf",t.submitted&&t.f.email.errors),s.xb(9),s.cc("ngClass",s.gc(21,S,t.submitted&&t.f.password.errors)),s.xb(1),s.cc("ngIf",t.submitted&&t.f.password.errors),s.xb(4),s.cc("ngClass",s.gc(23,S,t.submitted&&t.f.confirmPassword.errors)),s.xb(1),s.cc("ngIf",t.submitted&&t.f.confirmPassword.errors),s.xb(2),s.cc("disabled",t.loading),s.xb(1),s.cc("ngIf",t.loading),s.xb(2),s.cc("disabled",t.deleting),s.xb(1),s.cc("ngIf",t.deleting))},directives:[n.n,n.h,n.e,n.b,n.g,n.d,c.i,c.k,i.f],encapsulation:2}),e})()}]}];let q=(()=>{class e{}return e.\u0275mod=s.Gb({type:e}),e.\u0275inj=s.Fb({factory:function(t){return new(t||e)},imports:[[i.g.forChild(k)],i.g]}),e})(),J=(()=>{class e{}return e.\u0275mod=s.Gb({type:e}),e.\u0275inj=s.Fb({factory:function(t){return new(t||e)},imports:[[c.b,n.j,q]]}),e})()}}]);