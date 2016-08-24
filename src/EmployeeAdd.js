import React from 'react';

const EmployeeAdd = React.createClass({
  getInitialState() {
    return {
      name: "",
      designation: "",
      department: "",
      contact: "",
      btnName:"Add Employee"
    };
  },
  componentWillReceiveProps(nextProps) {
    this.setState({
      name: (nextProps.employee) ? nextProps.employee.name : "",
      designation: (nextProps.employee) ? nextProps.employee.designation : "",
      department: (nextProps.employee) ? nextProps.employee.department : "",
      contact: (nextProps.employee) ? nextProps.employee.contact : "", 
      btnName: (nextProps.employee) ? "Save" : "Add Employee",
    });
  },
  onChange(name, e) {
    const change = {};
    change[name] = e.target.value;
    this.setState(change);
  },
  render() {
    return (
      <div>
        <form name="employeeData">
          <input type="text" name="name" placeholder="Name" 
          value={this.state.name}
          onChange={this.onChange.bind(this, 'name')}/>
          <input type="text" name="designation" placeholder="Designation" 
          value={this.state.designation}
          onChange={this.onChange.bind(this, 'designation')}/>
          <input type="text" name="department" placeholder="Department" 
          value={this.state.department}
          onChange={this.onChange.bind(this, 'department')}/>
          <input type="text" name="contact" placeholder="Contact" 
          value={this.state.contact}
          onChange={this.onChange.bind(this, 'contact')}/>
          <button onClick={(this.props.employee) ? this.handleEdit : this.handleAdd}>{this.state.btnName}</button>
        </form>
      </div>
    )
  },

  handleAdd(e) {
    e.preventDefault();
    const form = document.forms.employeeData;
    this.props.addEmployee({name: form.name.value, designation: form.designation.value, department: form.department.value, contact: form.contact.value});
    // clear the form for the next input
    form.name.value = ""; form.designation.value = "";form.department.value = ""; form.contact.value = "";
  },

  handleEdit(e) {
    e.preventDefault();
    const form = document.forms.employeeData;
    this.props.saveEmployee({id:this.props.employee.id, name: form.name.value, designation: form.designation.value, department: form.department.value, contact: form.contact.value});
  },
});

export default EmployeeAdd;