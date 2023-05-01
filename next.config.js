/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
};

module.exports = {
  nextConfig,
  env: {
    MYSQL_HOST: "sql12.freemysqlhosting.net",
    MYSQL_PORT: "3306",
    MYSQL_DATABASE: "sql12614431",
    MYSQL_USER: "sql12614431",
    MYSQL_PASSWORD: "qGFvy8pTWH",
  },
};
