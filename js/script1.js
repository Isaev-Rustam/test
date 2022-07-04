"use strict"

 class MyPromise {
  constructor (executor) {

  }
}

const api = {
  _employees: [
    { id: 1, name: 'Alex', salary: 120000 },
    { id: 2, name: 'Fred', salary: 110000 },
    { id: 3, name: 'Bob', salary: 80000 },
  ],

  getEmployees() {
    return new Promise((resolve) => {
      resolve(this._employees.slice());
    });
  },

  setEmployeeSalary(employeeId, newSalary) {
    return new Promise((resolve) => {
      this._employees = this._employees.map((employee) =>
        employee.id !== employeeId
          ? employee
          : {
            ...employee,
            salary: newSalary,
          }
      );
      resolve(this._employees.find(({ id }) => id === employeeId));
    });
  },

  notifyEmployee(employeeId, text) {
    return new Promise((resolve) => {
      resolve(true);
    });
  },

  notifyAdmin(error) {
    return new Promise((resolve) => {
      resolve(true);
    });
  },

  setEmployees(newEmployees) {
    return new Promise((resolve) => {
      this._employees = newEmployees;
      resolve();
    });
  },
};

(function increaseSalary() {
  const a = api.getEmployees()
    .then((data) => {
      const [low] = data.slice().sort((a, b) => a.salary - b.salary);
      return low
    })
    .then(data =>{
      console.log(data);
      const newZP = data.salary + (data.salary * 0.2)
      api.setEmployeeSalary(data.id, newZP)
    })
  

})()














