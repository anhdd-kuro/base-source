module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx?$': 'babel-jest',
    '\\.js$': '<rootDir>/node_modules/babel-jest',
    '.+\\.scss$': 'jest-css-modules-transform'
  },
  testMatch: ['**/*.(test|spec).(ts|tsx)'],
  globals: {
    'ts-jest': {
      babelConfig: true,
      tsconfig: 'tsconfig.json'
    }
  },
  coveragePathIgnorePatterns: ['/node_modules/', 'enzyme.js'],
  setupFilesAfterEnv: ['<rootDir>/enzyme.js'],
  coverageReporters: ['json', 'lcov', 'text', 'text-summary'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '.+\\.(css|styl|less|sass|scss|svg)$': '<rootDir>/node_modules/jest-css-modules-transform'
  }
};
