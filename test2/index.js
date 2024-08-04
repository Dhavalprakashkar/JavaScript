// You are given an array of objects representing employees. Each object has three properties:
// name, age, and department. Write a function called sortByDepartmentAndAge that sorts
// the employees first by department in alphabetical order and then by age in ascending order
// within each department.


const employees = [
    { name: "Alice", age: 25, department: "HR" },
    { name: "Bob", age: 30, department: "Engineering" },
    { name: "Charlie", age: 22, department: "HR" },
    { name: "David", age: 35, department: "Engineering" },
    { name: "Eve", age: 28, department: "Marketing" },
];

function sorting(employees){
    employees.sort((a,b)=>{
        if(a.department<b.department){
            return -1;
        }
        else if(a.department>b.department){
            return 1;
        }
        else{
          return  a.age-b.age;
        }


    })
}
sorting(employees);
console.log(employees);