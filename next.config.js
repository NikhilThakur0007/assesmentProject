/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
};

module.exports = {
  nextConfig,
  env: {
    MYSQL_HOST: "127.0.0.1",
    MYSQL_PORT: "3306",
    MYSQL_DATABASE: "test",
    MYSQL_USER: "root",
    MYSQL_PASSWORD: "",
  },
};
