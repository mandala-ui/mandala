export default {
  widths: [479, 959, 1440],
  webpack: {
    module: {
      rules: [
        {
          test: /\.css/,
          loaders: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
};
