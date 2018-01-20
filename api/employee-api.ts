import { EmployeeService } from './service/employee-service';

let empService = new EmployeeService();
export function employeeApi(app) {
    app.get('/api/employee', (req, res) => {
        res.send(empService.getEmployees())
    });

    app.post('/api/employee', (req, res) => {
        res.send('post method from employee API')
    });
}