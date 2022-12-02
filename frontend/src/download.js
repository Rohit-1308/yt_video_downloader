import { Pully, Presets } from 'pully';
 
const pully = new Pully();
 
const video = await pully.query('<some-neato-video-url>');
console.log(`${video.videoTitle} by ${video.channelName} has ${video.views} views!`);
 
const options = {
  url: '<some-really-high-def-video-url>',
  preset: Presets.FourK,
  progress: (data) => console.log(data.percent + '%') // Progress reporter callback...
};
 
const { path, format, duration } = await pully.download(options);
console.log(path);     // Path to the downloaded file.
console.log(format);   // Object containing all audio/video/meta data.
console.log(duration); // Number of milliseconds the download took.