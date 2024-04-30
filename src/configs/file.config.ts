import { ConfigFactory, registerAs } from '@nestjs/config';
import * as bytes from 'bytes';

const config: ConfigFactory = (): Record<string, any> => ({
  image: {
    maxFileSize: bytes('1mb'), // 1mb
    maxFiles: 10, // 10 files
  },
  excel: {
    maxFileSize: bytes('5.5mb'), // 5.5mb
    maxFiles: 1, // 1 files
  },
  audio: {
    maxFileSize: bytes('5.5mb'), // 5.5mb
    maxFiles: 1, // 1 files
  },
  video: {
    maxFileSize: bytes('5.5mb'), // 5.5mb
    maxFiles: 1, // 1 files
  },
});

const FileConfig = registerAs('file', config);

export { FileConfig };
