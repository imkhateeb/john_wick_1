const logger = require('../config/logger.config');
const NotFoundError = require('../errors/notfound.error');
const { Problem } = require('../models');

class ProblemRepository {
  async createProblem(problemData) {
    const problem = await Problem.create(problemData);
    return problem;
  }

  async getAllProblems() {
    const problems = await Problem.find({});
    return problems;
  }

  async getProblem(problemId) {
    const problem = await Problem.findOne({ _id: problemId });
    if (!problem) {
      throw new NotFoundError("Problem", problemId);
    }
    return problem;
  }

  async updateProblem(problemId, problemData) {
    const problem = await Problem.findOneAndUpdate(
      { _id: problemId },
      problemData,
      { new: true }
    );
    if (!problem) {
      throw new NotFoundError("Problem", problemId);
    }
    return problem;
  }

  async deleteProblem(problemId) {
    const problem = await Problem.findOneAndDelete({ _id: problemId });
    if (!problem) {
      logger.warn(`Problem with id ${problemId} not found`);
      throw new NotFoundError("Problem", problemId);
    }
    return problem;
  }
}

module.exports = ProblemRepository;