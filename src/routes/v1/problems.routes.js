const express = require('express');

const problemRouter = express.Router();

const {
  problemController
} = require('../../controllers');

// Main routes 
problemRouter.get('/', problemController.getProblems);
problemRouter.get('/:id', problemController.getProblem);
problemRouter.post('/', problemController.addProblem);
problemRouter.put('/:id', problemController.updateProblem);
problemRouter.delete('/:id', problemController.deleteProblem);

module.exports = problemRouter;