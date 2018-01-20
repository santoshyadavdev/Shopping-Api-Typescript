import * as express from "express";
var app = express();

import { employeeApi } from './api/employee-api';

employeeApi(app);

app.listen(3000, () => console.log('App running on 3000 port'));