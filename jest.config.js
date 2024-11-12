const WEB_REGEX = `src/.*\\.web\\.test\\.(j|t)s(x)?$`;
const NODE_REGEX = `src/.*\\.node\\.test\\.(j|t)s(x)?$`;

const common = {
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: { '^.+\\.(j|t)s(x)?$': 'ts-jest' },
  coveragePathIgnorePatterns: [ 'node_modules', WEB_REGEX, NODE_REGEX ],
  // collectCoverageFrom: [ `./src/**/*.{js,jsx,ts,tsx}` ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 5,
      lines: 5,
      statements: 5,
    },
  },
};

module.exports = {
    projects: [
      {
        ...common,
        displayName: 'dom',
        testEnvironment: 'jsdom',
        testRegex: WEB_REGEX,
      },
      {
        ...common,
        displayName: 'node',
        testEnvironment: 'node',
        testRegex: NODE_REGEX,
      },
    ],
};
