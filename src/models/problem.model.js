const mongoose = require('mongoose');

// Schema for examples
const exampleSchema = new mongoose.Schema({
  input: {
    type: String,
    required: true
  },
  output: {
    type: String,
    required: true
  },
}, { _id: false });

// Schema for test cases
const testCaseSchema = new mongoose.Schema({
  input: {
    type: String,
    required: true
  },
  output: {
    type: String,
    required: true
  },
}, { _id: false });

// Main problem schema
const problemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    minlength: [5, 'Title must be at least 5 characters long'],
    maxlength: [100, 'Title cannot exceed 100 characters'],
    index: true
  },
  statement: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    minlength: [20, 'Description must be at least 20 characters long']
  },
  input: {
    type: String,
    required: [true, 'Input format description is required'],
    trim: true
  },
  output: {
    type: String,
    required: [true, 'Output format description is required'],
    trim: true
  },
  examples: {
    type: [exampleSchema],
    validate: {
      validator: function (v) {
        return v && v.length > 0;
      },
      message: 'At least one example is required'
    }
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    required: [true, 'Difficulty level is required'],
    index: true
  },
  tags: {
    type: [String],
    index: true,
    validate: {
      validator: function (v) {
        return v && v.length > 0;
      },
      message: 'At least one tag is required'
    }
  },
  testCases: {
    type: [testCaseSchema],
    validate: {
      validator: function (v) {
        return v && v.length > 0;
      },
      message: 'At least one test case is required'
    }
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Creator user ID is required']
  },
  successfulSubmissions: {
    type: Number,
    default: 0,
    min: [0, 'Successful submissions cannot be negative']
  },
  totalSubmissions: {
    type: Number,
    default: 0,
    min: [0, 'Total submissions cannot be negative']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

problemSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

problemSchema.index({
  title: 'text',
  description: 'text'
});

module.exports = mongoose.model('Problem', problemSchema);