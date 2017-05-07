import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from '../app.component';
import { TableDataComponent } from './tableData.component';

const routes: Routes = [
    {
        path: "", children: [
          { path: "", redirectTo: "table", pathMatch: "full" },
          { path: "table", component: TableDataComponent }
        ]
    }
];

export const routing = RouterModule.forRoot(routes, { useHash: false });