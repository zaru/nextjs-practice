const {
  withBugpilot
} = require("@bugpilot/plugin-nextjs");
/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true
    }
  }
};
module.exports = withBugpilot(nextConfig, require("./bugpilot.config.js"));