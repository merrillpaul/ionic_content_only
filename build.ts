import * as fs from 'fs';
import * as path from 'path';
import * as rimraf from 'rimraf';
import * as copydir from 'copy-dir';
import chalk from 'chalk';

const build = () => {
    console.log(chalk.bgYellowBright.bold(`Started content copy build`));
    const srcBatteryDir = path.resolve(__dirname, "src/battery");
    const srcStimsDir = path.resolve(__dirname, "src/stims");
    const destDir = path.resolve(__dirname, "www");
    if (fs.existsSync(destDir)) {
        rimraf.sync(destDir);
    }
    fs.mkdirSync(destDir);
    const batteryFolder = path.resolve(destDir, 'battery')
    const stimsFolder = path.resolve(destDir, 'stims')
    fs.mkdirSync(batteryFolder);
    fs.mkdirSync(stimsFolder);
    copydir.sync(srcBatteryDir, batteryFolder);
    copydir.sync(srcStimsDir, stimsFolder);
    console.log(chalk.green.bold(`Done copying`));
};


build();