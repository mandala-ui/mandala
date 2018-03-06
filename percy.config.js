export default {
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

export const breakpoints = [479, 959, 1440];
