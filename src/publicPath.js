/* eslint-env node */


// /nnd/T3Interactives/2017/network/20170429/trumpByNumbers

// Add the project name here
// This must be the same name of the folder the project will be uploaded to
const projectName = '20170429/trumpByNumbers';
const section = 'network'


// The rest of the path is set below, including the current year
// only change this if you intend to upload to different public server
// example final destination url:
// http://media.news.com.au/T3Interactives/2017/network/myProject

const year = new Date().getFullYear();
module.exports = `http://media.news.com.au/nnd/T3Interactives/${year}/${section}/${projectName}`;
