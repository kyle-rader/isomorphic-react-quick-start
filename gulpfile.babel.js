import gulp from 'gulp';
import gutil from 'gulp-util';
import react from 'gulp-react';
import babel from 'gulp-babel';
const spawn = require('child_process').spawn;
let node;
import del from 'del';
import fs from 'fs';
import less from 'gulp-less';

var buildDir = './build/';

// Compile jsx files
gulp.task('jsx', () => {
  gulp.src('./src/**/*.jsx')
    .pipe(babel())
    .pipe(react())
    .pipe(gulp.dest(buildDir));
});

// Compile Coffeescript
gulp.task('babel', () => {
  gulp.src('./src/**/*.babel.js')
    .pipe(babel())
    .pipe(gulp.dest(buildDir))
});

gulp.task('less', () => {
  gulp.src('./src/less/*.less')
    .pipe(less())
    .pipe(gulp.dest(`${buildDir}css`));
});

// Build the entire app.
gulp.task('build',['jsx', 'babel', 'less']);

// Start the server in ./build
gulp.task('server', () => {
  if (node) node.kill();
  if(!fs.existsSync(`${buildDir}server.js`)){
    console.log(`${buildDir}server.js not found, retrying...`);
    return setTimeout(() => {
      if(!fs.existsSync('./build')){
        console.log('./build folder not found, please run \'gulp build\'');
      }else{
        gulp.start('server');
      }
    }, 2000);
  }
  node = spawn('node', [`${buildDir}server.js`], {stdio: 'inherit'});
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
  gulp.watch('./src/**/*.cjsx', ['cjsx','reload']);
  gulp.watch('./src/**/*.coffee', ['coffee','reload']);
  gulp.watch('./src/scss/*.scss', ['less']);
  gulp.watch('./src/.env.yml', ['env','reload']);
});

gulp.task('develop', ['build', 'server', 'watch']);

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
