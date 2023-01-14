
const UserActivity = require('../models/models');
exports.AddUser = (req, res) => {
    
console.log("req body here",req.body);

    const user = new UserActivity({
        name: req.body.name,
        description: req.body.description,
        activitytype: req.body.activitytype,
        duration: req.body.duration,
        date:req.body.date
    })
    user.save((err, user) => {
        if (err) {
            res.status(500).json({message: err})
        }else{
            res.status(200).json({message:'User registered'})
        }
    })
}

// Create and Save a new Excersice
exports.createUser = (req, res) => {
   // Validate request
//    if (!req.body.description) {
//     res.status(400).send({ message: "Content can not be empty!" });
//     return;
// };
//Create a Excersice

console.log("req body here",req.body)

const user = new UserActivity({
    name: req.body.name,
    description: req.body.description,
    activitytype: req.body.activitytype,
    duration: req.body.duration,
    date:req.body.date
})


user.save((err) => {
    if (err) {
        res.status(500).json({message:'User not registered'})
    }else{
        res.status(200).json({message:'User registered'})
    }
})

 // Save Excersice in the database
//  user.save()
//  .then(data => {
//    res.send(data);
//  })
//  .catch(err => {
//    res.status(500).send({
//      message:
//        err.message || "Some error occurred while creating the Excersice."
//    });
//  });
};
// Retrieve all Excersice from the database.
exports.findAll = (req, res) => {
    const Name = req.query.name;
    // var condition = Name ? { Name: { $regex: new RegExp(title), $options: "i" } } : {};
  
    User.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Excersice."
        });
      });
};
// Find a single Excersice with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Name.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Name with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Name with id=" + id });
      });
};
// Update a Excersice by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
    }
    const id = req.params.id;

    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Name with id=${id}. Maybe description was not found!`
          });
        } else res.send({ message: "Name was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Name with id=" + id
        });
      });
};
// Delete a Excersice with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    User.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Name with id=${id}. Maybe description was not found!`
          });
        } else {
          res.send({
            message: "Name was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Name with id=" + id
        });
      });
};
// Delete all Excersice from the database.
exports.deleteAll = (req, res) => {
    User.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Name were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Name."
      });
    });
};
