const express  = require('express');
const request  = require('request');

const Task     = require('./models/tasks.js');

const router   = express.Router();

// TEST Afficher la liste de notre DB mongodb
// ======================
router.get('/', (req, res) => {
  Task.find((error, tasks) => {
    res.render('homepage', { tasks });
    console.log(tasks);
  });
});

// Ajouter une tache dans la db à partir des données du formulaire
router.post('/create', (req, res) => {
  const newList = new Task(req.body);
  newList.save((error) => {
    res.redirect('/');
  });
});

// Afficher un learner
router.get('/:id', (req, res) => {
  Task.findById(req.params.id, (error, tasks) => {
    res.render('/', { tasks });
  });
});



module.exports = router;
