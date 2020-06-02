import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveformsComponent } from './reactiveforms.component';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Reactive Forms'
        },
        children: [
            {
                path: '',
                redirectTo: 'reactiveforms'
            },
            {
                path: 'reactiveforms',
                component: ReactiveformsComponent,
                data: {
                    title: 'Impressão de QR Code'
                }
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReactiveformsroutingModule { }
