import { ConfigFactory, registerAs } from '@nestjs/config';

const config: ConfigFactory = (): Record<string, any> => ({
  salt: {
    length: 8,
  },
  jwt: {
    secretKey: process.env.JWT_SECRET,
    expirationTime: parseInt(process.env.JWT_EXPIRES_IN),
  },
});

const HelperConfig = registerAs('helper', config);

export { HelperConfig };
