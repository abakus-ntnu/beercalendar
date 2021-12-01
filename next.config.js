/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192,
          },
        },
      ],
    });

    return config;
  },

}
