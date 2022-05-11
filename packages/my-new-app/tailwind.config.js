const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'pages/**/*.{html,tsx}'),
    join(__dirname, 'components/**/*.{html,tsx}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
