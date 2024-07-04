const NotFoundError = require('../errors/notfound.error');
const { Problem } = require('../models');

class ProblemRepository {

  // Creating the problem
  async createProblem(problemData) {
    const problem = await Problem.create(problemData);
    return problem;
  }

  async getAllProblems() {
    const problems = await Problem.find({});
    return problems;
  }

  async getProblem(problemId){
    const problem = await Problem.findOne({_id: problemId});
    if(!problem){
      throw new NotFoundError("Problem", problemId);
    }
    return problem;
  }

}

module.exports = ProblemRepository;