const { markdownSanitizer } = require("../utils");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    problemData.statement = markdownSanitizer(problemData.statement);
    const problem = await this.problemRepository.createProblem(problemData);
    return problem;
  }

  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems();
    return problems;
  }

  async getProblem(problemId){
    const problem = await this.problemRepository.getProblem(problemId);
    return problem;
  }
}

module.exports = ProblemService;