const { StatusCodes } = require('http-status-codes');

function addProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    success: false,
    msg: "Not Implemented"
  })
}

function getProblems(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    success: false,
    msg: "Not Implemented"
  })
}

function getProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    success: false,
    msg: "Not Implemented"
  })
}

function updateProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    success: false,
    msg: "Not Implemented"
  })
}

function deleteProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    success: false,
    msg: "Not Implemented"
  })
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
  pinProblemRoute
}