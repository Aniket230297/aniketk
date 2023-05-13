/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(mapstudent);

  function mapstudent(x){
      if(x.marks>=50)
      console.log(x);
  }
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(printstudent);

  function printstudent(items) {
    if (items.marks >= 50)
      console.log(items);

  };
}

function addData() {
  //Write your code here, just console.log
  let student = { id: 4, name: "susan", age: "20", marks: 45 };
  arr.push(student);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  failed_stu = arr.filter(function (val) {
    if (val.marks >= 50)
      return val;
  });
  console.log(failed_stu);
}

function concatenateArray() {
  //Write your code here, just console.log
   let arr1 = [
    { id: 10, name: "aniket", age: "26", marks: 80 },
    { id: 11, name: "onkar", age: "20", marks: 90 },
    { id: 12, name: "nitesh", age: "19", marks: 65 },
  ];
  let result = arr.concat(arr1);
  console.log(result);
}
