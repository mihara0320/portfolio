import { IProject } from '../models';

const getPath = image => `assets/images/projects/${image}`;
export const PROJECTS: IProject[] = [
    { title: 'Analytics platform demo', image: getPath('iot.jpg'), link: 'https://analytics-platform.herokuapp.com' },
    { title: 'Smart contract on Ethereum', image: getPath('ethereum.jpg'), link: 'https://etherscan.io/address/0x6B8c8bEc2d3E3e583EabBB29913Cc6b929cdfacC#code' },
    { title: 'A little contribution to npm', image: getPath('npm.png'), link: 'https://www.npmjs.com/package/grunt-html-pdf-2' },
    // { title: 'WIP', image: getPath('coming-soon.jpg'), link: '' },
    // { title: 'WIP', image: getPath('coming-soon.jpg'), link: '' },
    // { title: 'WIP', image: getPath('coming-soon.jpg'), link: '' },
];
