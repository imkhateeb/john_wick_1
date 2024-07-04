const { Problem } = require('../models');

class ProblemRepository {

  // Creating the problem
  async createProblem(problemData) {
    try {
      const problem = await Problem.create(problemData);
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

}

module.exports = ProblemRepository;