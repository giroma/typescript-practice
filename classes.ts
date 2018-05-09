class User {
  private name:string;
  email: string;
  age: number;
  constructor(name: string, email: string, age: number){
    this.name = name
    this.email = email
    this.age = age

    console.log('User created: '+this.name)
  }
  register(){
    console.log(this.name+'is registered')
  }
}
let john = new User('jababa', 'fhdhf@hsd.com', 35)

console.log(john.age)
