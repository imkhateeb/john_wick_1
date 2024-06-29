const NotImplemented = require('../errors/notimplemented.error')

function addProblem(req, res, next) {
  try {
    throw new NotImplemented("Add Problem")
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