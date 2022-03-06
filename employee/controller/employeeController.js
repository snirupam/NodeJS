import employeeService from "../services/employeeService.js";

const generateEmployeeDetailPage = (req,res) => {
    
    employeeService.getEmpoyeeDetail(
        employees => {
            res.write(`<html><body>`);
            res.write(`<table style='width:70%;margin:auto;border:1px solid black'>`);
            res.write(`
            <thead>
                <tr align=center>
                    <th>Employee ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Department</th>
                    <th>Designation</th>
                </tr>
            </thead><tbody>`);

            employees.forEach(employee => {
                res.write(`<tr align=center>
                    <td>${employee.employeeId}</td>
                    <td>${employee.firstName}</td>
                    <td>${employee.lastName}</td>
                    <td>${employee.department}</td>
                    <td>${employee.designation}</td>
                </tr>`);
            });

            res.write(`</table></body></html>`);
            res.end();
        },
        err => {
            res.write(`<h3>${err.message}</h3>`);
            res.end();
        }
    );
};

export default {generateEmployeeDetailPage};