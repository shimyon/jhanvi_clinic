// import addBlog from '../assests/images/blog/add.jpg';
// import author from '../assests/images/blog/author.png';

import gw1 from '../assests/images/gallery/gw/1.JPG';
import gw2 from '../assests/images/gallery/gw/2.JPG';
import gw3 from '../assests/images/gallery/gw/3.JPG';


import icu1 from '../assests/images/gallery/icu/1.JPG';
import icu2 from '../assests/images/gallery/icu/2.JPG';

import ra1 from '../assests/images/gallery/ra/1.JPG';

import ssr1 from '../assests/images/gallery/semisp/1.JPG';
import ssr2 from '../assests/images/gallery/semisp/2.JPG';

import sr1 from '../assests/images/gallery/sp/1.JPG';
import sr2 from '../assests/images/gallery/sp/2.JPG';


import wa1 from '../assests/images/gallery/wa/1.JPG';
import wa2 from '../assests/images/gallery/wa/2.JPG';

const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id, width, height) => `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
  // { id: addBlog, width: 1080, height: 780, folder: "blog" },
  // { id: author, width: 1080, height: 780, folder: "blog" },
  { id: gw1, width: 1080, height: 780, folder: "gw", lable:"Genralward" },
  { id: gw2, width: 1080, height: 780, folder: "gw", lable:"Genralward"  },
  { id: gw3, width: 1080, height: 780, folder: "gw" , lable:"Genralward" },

  { id: icu1, width: 1080, height: 780, folder: "icu" , lable:"ICU" },
  { id: icu2, width: 1080, height: 780, folder: "icu" , lable:"ICU" },

  { id: ra1, width: 1080, height: 780, folder: "ra" , lable:"ReceptionArea" },

  { id: ssr1, width: 1080, height: 780, folder: "semisp" , lable:"semisp" },
  { id: ssr2, width: 1080, height: 780, folder: "semisp" , lable:"semisp" },

  { id: sr1, width: 1080, height: 780, folder: "sp" , lable:"sp" },
  { id: sr2, width: 1080, height: 780, folder: "sp" , lable:"sp" },

  { id: wa1, width: 1080, height: 780, folder: "wa" , lable:"WaitingArea" },
  { id: wa2, width: 1080, height: 780, folder: "wa" , lable:"WaitingArea" },

];

const photos = unsplashPhotos.map((photo) => {
  const width = breakpoints[0];
  const height = (photo.height / photo.width) * width;

  return {
    // src: unsplashLink(photo.id, width, height),
    src: photo.id,
    width,
    height,
    folder: photo.folder,
    images: breakpoints.map((breakpoint) => {
      const height = Math.round((photo.height / photo.width) * breakpoint);
      return {
        // src: unsplashLink(photo.id, breakpoint, height),
        src: photo.id,
        width: breakpoint,
        height,
      };
    }),
  };
});

export default photos;
