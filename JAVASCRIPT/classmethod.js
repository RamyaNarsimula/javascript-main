class Student{ //class open
    constructor(){
        this.id=509;
        this.name="Ramya";
    }
    //class - it is a collection of properties and methods
    displayInfo(){
        console.log(this.id+" "+this.name)
    }
}//class close
// till above class declaration block
let s=new Student();//s is a variable
s.displayInfo();