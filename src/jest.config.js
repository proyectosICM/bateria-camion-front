module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    moduleFileExtensions: ["js", "jsx"],
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy"
    }
  };
  