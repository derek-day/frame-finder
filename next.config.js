// module.exports = {
//   poweredByHeader: false
// };

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.csv$/,
      loader: 'csv-loader',
      options: {
        dynamicTyping: true,
        header: true,
        skipEmptyLines: true,
      },
    });
    config.resolve.fallback = { fs: false };
    return config;
  },
};
