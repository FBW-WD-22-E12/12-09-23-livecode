const PeopleModel = require("./schemas/peopleSchema")

// Raw JSON Data inside of the req.body = {firstName: "florian", lastName: "hahn", isAdult: true}
exports.addPeople = async (req,res)=>{
    // Creating a new concept of schema validation based on the req.body raw JSON data
    const newPersonToSave = new PeopleModel(req.body);
    try {
        // Trigger the Mongoose Method, after the newPersonToSave DatabaseName.CollectionName.Schema
        await newPersonToSave.save();
        res.status(201).send("The people was created!")
    } catch (error) {
        res.status(501).send(error)
    }
}