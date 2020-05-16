import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatepickerComponent } from './datepicker.component';
//import { DatePickerComponent } from 'ngx-bootstrap';

const routes: Routes = [
    {
        path: '',
        data: {
            title: 'Usando Datas'
        },
        children: [
            {
                path: '',
                redirectTo: 'usingdatepicker'
            },
            {
                path: 'usingdatepicker',
                component: DatepickerComponent,
                data: {
                    title: 'Usando Date Picker'
                }
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DatepickerRoutingModule { }
