import gulp from 'gulp';
import gutil from 'gulp-util';
import babel from 'gulp-babel';
import del from 'del';
import fs from 'fs';
import less from 'gulp-less';
import child_process from 'child_process';
const spawn = child_process.spawn;
let node;
let buildDir = './build/';

// Name mainServer because our babel task babelifys all .babel.js
// files, not just the server (so we are not renaming it to server.js)
let mainServer = 'server.js';

// Compile jsx files
gulp.task('babel', () => {
  gulp.src('./src/**/*.js*')
    .pipe(babel())
    .pipe(gulp.dest(buildDir));
});

gulp.task('less', () => {
  gulp.src('./src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest(`${buildDir}css`));
});

// Build the entire app.
gulp.task('build',['babel', 'less']);

// Start the server in ./build
gulp.task('server', () => {
  if (node) node.kill();
  if(!fs.existsSync(`${buildDir}${mainServer}`)){
    console.log(`${buildDir}${mainServer} not found, retrying...`);
    return setTimeout(() => {
      if(!fs.existsSync('./build')){
        console.log('./build folder not found, please run \'gulp build\'');
      }else{
        gulp.start('server');
      }
    }, 2000);
  }
  node = spawn('node', [`${buildDir}${mainServer}`], {stdio: 'inherit'});
  node.on('close', (code) => {
    if (code === 8) {
      console.log('Error detected, waiting for changes...');
    }
  });
});

// Reloads the server
gulp.task('reload', () => {
  if (node) {
    console.log('Reloading Server');
    gulp.start('server');
  }
});

// Watches for file changes
gulp.task('watch', () => {
  gulp.watch('./src/**/*.js*', ['babel','reload']);
  gulp.watch('./src/scss/*.less', ['less']);
  gulp.watch('./src/.env.yml', ['env','reload']);
});

gulp.task('dev', ['build', 'server', 'watch']);

gulp.task('clean', () => {
  del([
    './build'
  ]);
});

gulp.task('start_server', ['build', 'server']);

// kill the node process on exit
process.on('exit', () => {
    if (node) node.kill();
});
