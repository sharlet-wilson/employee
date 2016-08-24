import React from 'react';

const EmployeeRow = React.createClass({
  render() {
    console.log("Rendering EmployeeRow:", this.props.employee);
    return (
      <tr>
        <td>{this.props.employee.id}</td>
        <td>{this.props.employee.name}</td>
        <td>{this.props.employee.designation}</td>
        <td>{this.props.employee.department}</td>
        <td>{this.props.employee.contact}</td>
        <td><button onClick={this.onClick}>Edit</button></td>
      </tr>
    )
  },
  onClick() {
    this.props.onClick(this.props.employee);
  }
});

const EmployeeTable = React.createClass({
  onClick(employee){
    this.props.editEmployee(employee);
  },
  render() {
    const employeeRows = this.props.employees.map((employee) => {
      return <EmployeeRow key={employee.id} employee={employee} onClick={this.onClick}/>
    });
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {employeeRows}
          </tbody>
        </table>
      </div>
    )
  }
});

export default EmployeeTable;