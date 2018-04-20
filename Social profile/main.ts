class Socialabout
{
    constructor(private firstName:string,private lastName:string, private DOB:string,private gender:string, private work?:string,private school?:string,private university?:string,private currentCity?:string,private homeTown?:string,private relationship?:string,private mobileNumber?:number,private detailsAboutYou?:object[])
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.DOB = DOB;
        this.gender = gender;
        this.work = work;
        this.school = school;
        this.university = university;
        this.currentCity = currentCity;
        this.homeTown = homeTown;
        this.relationship = relationship;
        this.mobileNumber = mobileNumber;
        this.detailsAboutYou = detailsAboutYou;
    }//end of constructor

    //getters
    getfirstName = ():string=>
    {
        return this.firstName;
    }
    getlastName = ():string=>
    {
        return this.lastName;
    }
    getDOB = ():string=>
    {
        return this.DOB;
    }
    getgender = ():string=>
    {
        return this.gender;
    }
    getwork = ()=>
    {
        return this.work;
    }
    getschool = ()=>
    {
        return this.school;
    }
    getunversity = ()=>
    {
        return this.university;
    }
    getcurrentCity = ()=>
    {
        return this.currentCity;
    }
    gethomeTown = ()=>
    {
        return this.homeTown;
    }
    getrelationship = ()=>
    {
        return this.relationship;
    }
    getmobileNumber = ()=>
    {
        return this.mobileNumber;
    }
    getdetailsAboutYou = ()=>
    {
        return this.detailsAboutYou;
    }
}//the class ends here

//1st instance of class Socialabout
let mark = new Socialabout('mark','zuck','14-may-1984','male','facebook and chan zuckerberg initiative','Ardsley High School','Harvard university','palo alto','new york','married',23939393,[{"contact":"http://facebook.com/zuck","instagram":"zuck"},{"about":"trying to make the world an open place to live"}]);
//using getters 
//gets  name for mark instance of class Socialabout
console.log(`name: ${mark.getfirstName()} ${mark.getlastName()}`);
//gets dateofbirth
console.log(`D.O.B: ${mark.getDOB()}`);
//gets gender
console.log(`gender: ${mark.getgender()}`);
//get work
console.log(`work: ${mark.getwork()}`);
//get school
console.log(`school: ${mark.getschool()}`);
//get the university
console.log(`university: ${mark.getunversity()}`);
//get current city
console.log(`current city: ${mark.getcurrentCity()}`);
//get hometown
console.log(`hometown: ${mark.gethomeTown()}`);
//get relationship
console.log(`relationship: ${mark.getrelationship()}`);
//mobilenumber
console.log(`mobile Number: ${mark.getmobileNumber()}`);
//get other details
let otherDetails = mark.getdetailsAboutYou();
console.log(otherDetails);


//2nd instance kart of Socialabout
console.log(`\n new instance starts from here\n`);
let kart = new Socialabout('karthik','Rao','2-feb-1995','male');//these are the only compulsory fields
//using getters
console.log(`name: ${kart.getfirstName()} ${kart.getlastName()}`);
console.log(`Date of birth: ${kart.getDOB()}`);
console.log(`gender: ${mark.getgender()}`);


