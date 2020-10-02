module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind/index.js"),
    require("autoprefixer"),
    require("postcss-flexbugs-fixes")({}),
    require("postcss-preset-env")({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    }),
  ],
};
