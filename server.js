const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

class User{
    constructor(){
        this._id=faker.datatype.uuid();
        this.firstName=faker.name.firstName();
        this.phoneNumber=faker.phone.phoneNumber();
        this.email=faker.internet.email();
        this.password=faker.internet.password();
    }
}

class Company{
    constructor(){
        this._id=faker.datatype.uuid();
        this.name=faker.company.companyName();
        this.address=faker.address.streetAddress();
        this.street=faker.address.streetName();
        this.city=faker.address.cityName();
        this.state=faker.address.state();
        this.zipCode=faker.address.zipCode();
        this.country=faker.address.country();
    }

}


// req is shorthand for request
// res is shorthand for response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/users/new", (req, res) => {
    res.json(new User);
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company);
});

app.get("/api/user/company", (req, res) => {
    res.json({
        user:new User,
        company: new Company
    });
});

// this needs to below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );