module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",  // Quét tất cả các tệp trong thư mục src
    "./public/index.html", // Quét tệp index.html trong thư mục public
  ],
  theme: {
    extend: {
      colors: {
        'legion-red': '#E2231A', // Màu đỏ của Lenovo Legion
      },
    },
  },
  plugins: [],
};
