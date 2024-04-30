import { ConfigFactory, registerAs } from '@nestjs/config';
import * as bytes from 'bytes';
import * as ms from 'ms';

const config: ConfigFactory = (): Record<string, any> => ({
  body: {
    json: {
      maxFileSize: bytes('100kb'), // 100kb
    },
    raw: {
      maxFileSize: bytes('5.5mb'), // 5.5mb
    },
    text: {
      maxFileSize: bytes('100kb'), // 100kb
    },
    urlencoded: {
      maxFileSize: bytes('100kb'), // 100kb
    },
  },
  timestamp: {
    toleranceTimeInMs: ms('5m'), // 5 mins
  },
  timeout: ms('30s'), // 30s based on ms module
});

const RequestConfig = registerAs('file', config);

export { RequestConfig };
