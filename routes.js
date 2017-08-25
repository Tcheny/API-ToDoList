const express  = require('express');

const Task     = require('./models/tasks.js');

const router   = express.Router(); // gestionnaire de route

// Afficher la liste de notre DataBase mongodb
// ======================
router.get('/', (req, res) => { // get prendre
  Task.find((error, tasks) => { // Task.find trouve tous les éléments de la DB
    res.render('homepage', { tasks }); // "render" fabrique une vue a partir de pug
    // console.log(tasks);
  });
});

// Ajouter une tache dans la DB à partir des données du formulaire
// ======================
router.post('/create', (req, res) => { // 'post' le client envoi au server
  const newTask = new Task(req.body); // crée une nouvelle tache
  newTask.save((error) => { // puis envoyer vers DB
    res.redirect('/');
  });
});

// Editer une tache
// ======================
// 1- recuperer les infos
router.get("/:id/edit", (req, res) => { // prend les infos du chemin
  Task.findById(req.params.id, (error, task) => { // trouver par ID l'objet en entier
    res.render('edit', { task }); // puis l'envoyer sur la page edit et affiche la tache selectioné
  });
});
// 2- faire l'update
router.post("/:id/edit", (req, res) => { // action de soumettre la modif
  Task.findByIdAndUpdate(req.params.id, req.body, (error) => { // trouve objet id, update le corps de l'objet
  res.redirect('/'); // refaire un get vers la racine
  })
});

// Supprimer une tache
// ======================
router.get("/:id/delete", (req, res) => {
  Task.findByIdAndRemove(req.params.id, (error) => { // trouver objet id, et le supprime directement
    res.redirect('/'); // refaire un get vers la racine
  })
});


module.exports = router;
