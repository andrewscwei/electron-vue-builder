/**
 * @file Main Electron process.
 */

import init from 'electron-vue-builder/app/main/init';
import log from 'electron-log';

init(win => {
  log.info(`MAIN`, `Process started`);
});
