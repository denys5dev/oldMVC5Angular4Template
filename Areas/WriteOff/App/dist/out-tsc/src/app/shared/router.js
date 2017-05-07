"use strict";
var router_1 = require("@angular/router");
var tableData_component_1 = require("./tableData.component");
var routes = [
    {
        path: "", children: [
            { path: "", redirectTo: "table", pathMatch: "full" },
            { path: "table", component: tableData_component_1.TableDataComponent }
        ]
    }
];
exports.routing = router_1.RouterModule.forRoot(routes, { useHash: true });
//# sourceMappingURL=router.js.map