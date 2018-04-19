const Course = require('../db/models/courses')

module.exports = {
  create(req, res){
    return Course
      .create({
        title: req.body.title
      })
      .then(course => res.status(201).send(course))
      .catch(error => res.status(400).send(error))
  }
}