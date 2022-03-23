module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '40b1d62b40d0384cddbba589354d5b2f'),
  },
});
