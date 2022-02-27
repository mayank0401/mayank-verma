export const ENVIRONMENTS = {
  PRODUCTION: "production",
  DEVELOPMENT: "development",
};

const prod_domains = {};
const dev_domains = {};

const settings = () => {
  let domains;
  switch (process.env.NEXT_PUBLIC_ENV) {
    case ENVIRONMENTS.PRODUCTION:
      domains = prod_domains;
      break;
    case ENVIRONMENTS.DEVELOPMENT:
      domains = dev_domains;
      break;
    default:
      domains = prod_domains;
  }
  return domains;
};

export default settings;
