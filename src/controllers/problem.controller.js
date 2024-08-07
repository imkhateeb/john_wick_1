const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');

// Initiating a new instance of the ProblemService
const problemService = new ProblemService(new ProblemRepository());

async function addProblem(req, res, next) {
  try {
    const newProblem = await problemService.createProblem(req.body);

    return res.status(StatusCodes.CREATED).json({
      status: "success",
      msg: 'Problem created successfully',
      data: newProblem,
      error: {}
    });

  } catch (error) {
    next(error)
  }
}

async function getProblems(req, res, next) {
  try {

    const problems = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      status: "success",
      msg: 'Problems fetched successfully',
      data: problems,
      error: {}
    });

  } catch (error) {
    next(error)
  }
}

async function getProblem(req, res, next) {
  const { id } = req.params;
  try {
    const problem = await problemService.getProblem(id);
    return res.status(StatusCodes.OK).json({
      status: "success",
      msg: 'Problem fetched successfully',
      data: problem,
      error: {}
    })
  } catch (error) {
    next(error)
  }
}

async function updateProblem(req, res, next) {
  const { id } = req.params;
  const problemData = req.body;
  try {
    const updatedProblem = await problemService.updateProblem(id, problemData);
    return res.status(StatusCodes.OK).json({
      status: "success",
      msg: 'Problem updated successfully',
      data: updatedProblem,
      error: {}
    })
  } catch (error) {
    next(error)
  }
}

async function deleteProblem(req, res, next) {
  const { id } = req.params;
  try {
    const deletedProblem = await problemService.deleteProblem(id);
    return res.status(StatusCodes.OK).json({
      status: "success",
      msg: 'Problem deleted successfully',
      data: deletedProblem,
      error: {}
    })
  } catch (error) {
    next(error)
  }
}
module.exports = {
  addProblem,
  getProblems,
  getProblem,
  updateProblem,
  deleteProblem,
}