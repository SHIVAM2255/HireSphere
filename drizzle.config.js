/** @type { import("drizzle-kit").Config } */
export default {
  client: 'pg',
  schema: './utils/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'Your  neon database url',
  },
  
};
