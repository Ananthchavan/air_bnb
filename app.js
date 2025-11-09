const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then( () => {
    console.log("Connected to db");
})
.catch( (err) => {
    console.log("Error connecting to db", err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("views engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));

app.get("/" , (req,res) => {
    res.send("hi, I am root");
});

app.get("/listings" , async(req,res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs" , {allListings});
});

//    app.get("/testlistings" , async (req,res) => {
//        let sampleListing = new Listing({
//            title: "Sample Listing",
//            description: "This is a sample listing description.",
//           price: 100,
//            location: "Sample Location",
//            country: "Sample Country"
//        });
//
//        await sampleListing.save();
//        console.log("Sample listing saved to database");
//        res.send("Sample listing created and saved to database");
//    })

app.listen(8080 , () => {
    console.log("Server is running on port 8080");
});
