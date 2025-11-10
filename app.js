const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");

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

app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

app.get("/" , (req,res) => {
    res.send("hi, I am root");
});

//index route
app.get("/listings" , async(req,res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs" , {allListings});
});

//new route
app.get("/listings/new" , (req,res) => {
    res.render("./listings/new.ejs");
});

//show route
app.get("/listings/:id" , async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/show.ejs" , {listing});
});

//create route
app.post("/listings" , async (req,res) =>  {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
})

//edit route
app.get("/listings/:id/edit" , async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/edit.ejs" , {listing});
});

//update route
app.put("/listings/:id" , async(req,res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id , {...req.body.listing});
    res.redirect(`/listings/${id}`);
});

//delete route
app.delete("/listings/:id" ,async(req,res) => {
    let {id} = req.params;
    let deleteListing = await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
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
