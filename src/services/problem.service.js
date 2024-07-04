const { markdownSanitizer } = require("../utils");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }


  async createProblem(problemData) {
    try {

      // Sanitize the markdown content
      problemData.statement = markdownSanitizer(problemData.statement);

      // Create the problem
      const problem = await this.problemRepository.createProblem(problemData);

      // Return the created problem
      return problem;

    } catch (error) {
      throw error;
    }
  }


}

module.exports = ProblemService;