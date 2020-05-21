var Burger = require("../models/burgers.js");

module.exports = function(app) {
  app.get("/api/all", function(req, res) {
    Burger.findAll({}).then(function(result){
      console.log(result)
      res.json(result);
    });
  });
  app.post("/api/burgers", function(req,res) {
    Burger.create({
      burgerName:req.body.name
    }).then(function(results) {
      res.end()
    })
  })
};