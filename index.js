const fs = require('fs');
const sass = require('node-sass');

const buildSass = () => {
  sass.render({
    file: './src/scss/style.scss',
    outFile: './dist',
    outputStyle: 'nested'
  }, (e, style) => {
    if(!e) {
      fs.writeFile('./dist/style.css', style.css, (e) => {
        if(e){
          console.log(e);
        }
        console.log('Sass build complete');        
      });
    } else {
      console.log(e);
    }
  });
}

const copySrc = (path, distSub) => {
  let list = listContents(path);
  if(distSub) {
    fs.mkdirSync(`./dist/${distSub}`);
  }
  for (let i in list) {
    if(distSub){
      fs.copyFileSync(`${path}${list[i]}`, `./dist/${distSub}${list[i]}`);
    } else {
      fs.copyFileSync(`${path}${list[i]}`, `./dist/${list[i]}`);
    }
  }
  console.log('Copy complete.')
}

const listContents = (x) => {
  return fs.readdirSync(x);
}

const cleanup = (a) => {
  a.forEach((el) => {
    let list = listContents(el);
    list.forEach((i) => {
      fs.unlinkSync(`${el}/${i}`)
    });
    fs.rmdirSync(el);
  });
  fs.mkdirSync('./dist');
  console.log('Cleanup Complete.')
}

const ops = () => {
  //has dist? run cleanup. 
  if(fs.existsSync('./dist')) {
    cleanup(['./dist/images', './dist']);
  } else {
    fs.mkdirSync('./dist');
  }
  copySrc('./src/php/');
  copySrc('./src/images/', 'images/');
  buildSass();
}

ops();