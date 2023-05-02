module.exports = app => {
    // const tutorials = require("../controllers/tutorial.controller.js");
    const tutorials = require("../controllers/tutotial.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", tutorials.create);

    // find all Tutorials
    router.get("/", tutorials.findAll);

    // find  all published Tutorials
    router.get("/published", tutorials.findAllPublished);

    // find a single Tutorial with id
    router.get("/:id", tutorials.findOne);

    // Update a Tutorial with id
    router.put("/:id", tutorials.update);

    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);

    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);

    app.use('/api/tutorials', router);
};