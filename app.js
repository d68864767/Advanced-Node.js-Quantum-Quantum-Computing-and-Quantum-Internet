// Import required modules
const dotenv = require('dotenv');
const quantumComputing = require('./quantumComputing');
const quantumInternet = require('./quantumInternet');

// Load environment variables from .env file
dotenv.config();

// Check if OPENAI_API_KEY is set in the environment
if (!process.env.OPENAI_API_KEY) {
  console.error('OPENAI_API_KEY not set in the environment');
  process.exit(1);
}

// Initialize Quantum Computing and Quantum Internet modules
quantumComputing.initialize();
quantumInternet.initialize();

console.log('Advanced Node.js Quantum Computing and Quantum Internet application started successfully.');
