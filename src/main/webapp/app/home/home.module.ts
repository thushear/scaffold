import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ScaffoldSharedModule } from '../shared';

import { HOME_ROUTE, HomeComponent } from './';
import {BlogService} from "../entities/blog/blog.service";

@NgModule({
    imports: [
        ScaffoldSharedModule,
        RouterModule.forRoot([ HOME_ROUTE ], { useHash: true })
    ],
    declarations: [
        HomeComponent,
    ],
    entryComponents: [
    ],
    providers: [
        BlogService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ScaffoldHomeModule {}
