module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.tsx',
          '.js',
          '.ts',
          '.jsx',
          '.json',
        ],
        alias: {
          tests: ['./tests/'],
          '@assets': ['./src/assets'],
          '@routes': ['./src/routes'],
          '@components': ['./src/components'],
          '@views': ['./src/views'],
          '@services': ['./src/services'],
          '@styles': ['./src/styles'],
          '@utils': ['./src/utils'],
        },
      },
    ],
  ],
};
