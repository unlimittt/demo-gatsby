module.exports = {
  rootDir: `../`,
  globals: {
    __LINK_PREFIX__: ``,
    __PATH_PREFIX__: ``,
    __BASE_PATH__: `/`,
  },
  transform: {
    ".(ts|tsx)": "<rootDir>/jest/jest-preprocess.js",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/jest/__mocks__/file-mock.js`,
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  testPathIgnorePatterns: ["node_modules", "public", ".cache", ".idea"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  collectCoverage: true,
  coverageReporters: ["lcov", "text", "html"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFiles: ["<rootDir>/jest/loadershim.js"],
}
