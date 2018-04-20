var Socialabout = /** @class */ (function () {
    function Socialabout(firstName, lastName, DOB, gender, work, school, university, currentCity, homeTown, relationship, mobileNumber, detailsAboutYou) {
        var _this = this;
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
        //getters
        this.getfirstName = function () {
            return _this.firstName;
        };
        this.getlastName = function () {
            return _this.lastName;
        };
        this.getDOB = function () {
            return _this.DOB;
        };
        this.getgender = function () {
            return _this.gender;
        };
        this.getwork = function () {
            return _this.work;
        };
        this.getschool = function () {
            return _this.school;
        };
        this.getunversity = function () {
            return _this.university;
        };
        this.getcurrentCity = function () {
            return _this.currentCity;
        };
        this.gethomeTown = function () {
            return _this.homeTown;
        };
        this.getrelationship = function () {
            return _this.relationship;
        };
        this.getmobileNumber = function () {
            return _this.mobileNumber;
        };
        this.getdetailsAboutYou = function () {
            return _this.detailsAboutYou;
        };
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
    } //end of constructor
    return Socialabout;
}()); //the class ends here
//1st instance of class Socialabout
var mark = new Socialabout('mark', 'zuck', '14-may-1984', 'male', 'facebook and chan zuckerberg initiative', 'Ardsley High School', 'Harvard university', 'palo alto', 'new york', 'married', 23939393, [{ "contact": "http://facebook.com/zuck", "instagram": "zuck" }, { "about": "trying to make the world an open place to live" }]);
//using getters 
//gets  name for mark instance of class Socialabout
console.log("name: " + mark.getfirstName() + " " + mark.getlastName());
//gets dateofbirth
console.log("D.O.B: " + mark.getDOB());
//gets gender
console.log("gender: " + mark.getgender());
//get work
console.log("work: " + mark.getwork());
//get school
console.log("school: " + mark.getschool());
//get the university
console.log("university: " + mark.getunversity());
//get current city
console.log("current city: " + mark.getcurrentCity());
//get hometown
console.log("hometown: " + mark.gethomeTown());
//get relationship
console.log("relationship: " + mark.getrelationship());
//mobilenumber
console.log("mobile Number: " + mark.getmobileNumber());
//get other details
var otherDetails = mark.getdetailsAboutYou();
console.log(otherDetails);
//2nd instance kart of Socialabout
console.log("\n new instance starts from here\n");
var kart = new Socialabout('karthik', 'Rao', '2-feb-1995', 'male'); //these are the only compulsory fields
//using getters
console.log("name: " + kart.getfirstName() + " " + kart.getlastName());
console.log("Date of birth: " + kart.getDOB());
console.log("gender: " + mark.getgender());
