import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  globals: {
    'ts-jest': {
      tsconfig: {
        rootDir: '.',
      },
    },
  },
};

export default config;
