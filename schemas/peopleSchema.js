// Mongoose Schema Validation and creation of the semistructured flexible Data Structure

const mongoose = require("mongoose");

//const {Schema} = mongoose; 
//const PeopleSchema = new Schema({})

// Documentation: https://mongoosejs.com/docs/guide.html
const PeopleSchema = new mongoose.Schema({ 
    // attribute: Datastructure OR generate inside of an object additional information
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    isAdult: { type: Boolean, default: true},
    adress: {
        postalCode: { type: String, required: true},
        streetHouseNumber: { type: String, required: true},
        streetName: { type: String, required: true},
    },
    createdAt: {type: Date, default: Date.now()},
});

// Assume the incoming server raw JSON data from the POST Method call looks like:
// Is the validation valid yes or no
// 1: {firstName: "Florian"}
// No, becouse the lastName is required and it will trow an error and not save the user

// 1.1 {firstNamee: "Florian"} -> No for required
// 1.2 {firstName: Florian} -> No for type

// 2. {firstName: "Florian", lastName:"Hahn"}
// Yes, but it not a best practice, we need to save all important information about the current context

// 3. {firstName: "Florian", lastName:"Hahn", isAdult: false, {postalCode:"10115", streetHouseNumber:"10a", streetName:"musterStraße"}}
// Yes, this is valid
// Save information in the database:
// {firstName: "Florian", lastName:"Hahn", isAdult: false, {postalCode:"10115", streetHouseNumber:"10a", streetName:"musterStraße"}, createdAt:'09/12/2023-11:49:10}

// 4. {firstName: "Florian", lastName:"Hahn", adress:{postalCode:"10115", streetHouseNumber:"10a", streetName:"musterStraße"}}
// Yes, its valid and its best practice
// Save information in the database:
// {firstName: "Florian", lastName:"Hahn", isAdult: true, {postalCode:"10115", streetHouseNumber:"10a", streetName:"musterStraße"}, createdAt:'09/12/2023-11:52:10}

// On this line, the collection with the name "People" is connected to the Schema for PeopleSchema
// 1. The database name is coming from the MongoDB Connection String
// 2. The collection name is coming from the model export
// 3. The schema is coming from the direct schema
module.exports = mongoose.model("People", PeopleSchema);

// peoples.People.save()