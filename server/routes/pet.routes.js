const PetController = require('../controllers/pet.controller');
module.exports = function(app){
    app.get('/', PetController.findAllPet);
    app.post('/pets/new', PetController.createPet);
    app.get('/pets/:id', PetController.getPet);
    app.put('/:id/edit',PetController.updatePet);
    app.delete('/pets/:id', PetController.deletePet);
}
