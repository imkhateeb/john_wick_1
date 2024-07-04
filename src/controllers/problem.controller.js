const NotImplemented = require('../errors/notimplemented.error');

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

function getProblems(req, res, next) {
  try {
    throw new NotImplemented("Get Problems")
  } catch (error) {
    next(error)
  }
}

function getProblem(req, res, next) {
  try {
    throw new NotImplemented("Get Problem")
  } catch (error) {
    next(error)
  }
}

function updateProblem(req, res, next) {
  try {
    throw new NotImplemented("Update Problem")
  } catch (error) {
    next(error)
  }
}

function deleteProblem(req, res, next) {
  try {
    throw new NotImplemented("Delete Problem")
  } catch (error) {
    next(error)
  }
}

function pinProblemRoute(req, res) {
  return res.json({
    succcess: true,
    msg: "Problem Pinged"
  })
}

module.exports = {
  addProblem,
  getProblems,
  getProblem,
  updateProblem,
  deleteProblem,
  pinProblemRoute,
}