function addProblem(req, res) {
  console.log("addProblem")
}

function getProblems(req, res) {
  console.log("getProblems")
}

function getProblem(req, res) {
  console.log("getProblem")
}

function updateProblem(req, res) {
  console.log("updateProblem")
}

function deleteProblem(req, res) {
  console.log("deleteProblem")
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