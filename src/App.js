import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeAdd from './EmployeeAdd';
import EmployeeTable from './EmployeeTable';

const employeeData = [
  {id: 1, name: 'Mr. ABC', designation:'Manager', department:'Accounts', contact: 746554628},
  {id: 2, name: 'Mr. XYZ', designation:'Asst. Manager', department:'Accounts', contact: 58973632},
];

const Employee = React.createClass({
  getInitialState() {
    return {
      employees: employeeData,
      employee: null
    };
  },
  render() {
    return (
      <div>
        <EmployeeTable employees={this.state.employees} editEmployee={this.editEmployee}/>
        <hr/>
        <EmployeeAdd employee={this.state.employee} 
        addEmployee={this.addEmployee} 
        saveEmployee={this.saveEmployee}
        />
      </div>
    )
  },
  addEmployee(employee) {
    const employeeModified = this.state.employees.slice();
    employee.id = this.state.employees.length + 1;
    employeeModified.push(employee);
    this.setState({employees: employeeModified});
  },
  editEmployee(employee) {
    this.setState({employee:employee});
  },
  saveEmployee(employee) {
    const employeeModified = this.state.employees.slice();
    Object.keys(employeeModified).map((key) => {
      employeeModified[key] = (employeeModified[key].id === employee.id) ? employee : employeeModified[key];
    });
    this.setState({employees: employeeModified, employee: null});
  }
});

ReactDOM.render(
  <Employee />,
  document.getElementById('employee')
);