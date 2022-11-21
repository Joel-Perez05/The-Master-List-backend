const ListController = require('../controllers/zelda.controller');

module.exports = (app) => {
    app.get('/api/lists', ListController.getAllLists); 
    app.get('/api/lists/:id', ListController.getOneList);
    app.post('/api/lists', ListController.createList);    
    app.put('/api/lists/:id', ListController.updateList);
    app.delete('/api/lists/:id', ListController.deleteList);
};

