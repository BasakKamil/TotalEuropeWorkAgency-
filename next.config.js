module.exports = {
  reactStrictMode: true,
  serverless: true,
  i18n: {
    localeDetection: false,
    locales: ["pl", "ru", "en"],
    defaultLocale: "pl",
  },

}
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config
  },
  
}

