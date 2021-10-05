export default () => ({
  app: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  slack: {
    port: parseInt(process.env.SLACK_BOT_PORT, 10) || 5000,
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    appToken: process.env.SLACK_APP_TOKEN,
  },
});
