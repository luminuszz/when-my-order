module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        require.resolve("babel-plugin-module-resolver"),

        {
          root: ["."],
          extensions: [".ts", ".tsx", ".js", ".ios.js", ".android.js", ".json"],
          alias: {
            "@app": "./src",
            "@core": "./src/core",
          },
        },
      ],

      [
        "module:react-native-dotenv",
        {
          path: "./.env.local",
          safe: true,
          moduleName: "@env",
        },
      ],
    ],
  };
};