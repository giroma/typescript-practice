function getSum(num1:number, num2:number) {
    return num1 + num2;
}
// console.log(getSum(1,4))

function mySum(num1:any, num2:any) {
  if (typeof num1 == 'string') {
    num1 = parseInt(num1)
  }
  if (typeof num2 == 'string') {
    num2 = parseInt(num2)
  }
    return num1 + num2;
}

// console.log(mySum('3',5))

function getName(firstName:string, lastName:string): string {
    return firstName+" "+lastName
}

console.log(getName('john', 'rg'))
