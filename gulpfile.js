//Include required modules
var gulp = require("gulp");
var babelify = require('babelify');
var browserify = require("browserify");  // Bundles JS.
var connect = require("gulp-connect");
var source = require("vinyl-source-stream");
var gulp  = require('gulp');
var shell = require('gulp-shell');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');
var reactify = require('reactify');  // Transforms React JSX to JS.
// var del = require('del');  // Deletes files.


var path = {
  ALL: ['_src/*.react'],
  JS: ['./_src/*.jsx'],
  MINIFIED_OUT: 'build.min.js',
  DEST_BUILD: './dist',
  DEST: './dist'
};

//Default task. This will be run when no task is passed in arguments to gulp
gulp.task("default2",["buildrouter"]);
gulp.task("default2",["app", "startServer"]);

//Copy static files from html folder to build folder
gulp.task("copyStaticFiles", function(){
    return gulp.src("./src/html/*.*")
    .pipe(gulp.dest("./build"));
});

//Convert ES6 code in all js files in src/js folder and copy to
//build folder as bundle.js
gulp.task("app", function(){
    return browserify({
        entries: ["_src/app.babel"],
        debug: true
    })
    .transform(babelify.configure({
        presets : ["es2015"]
    }))
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./app"))
    ;
});

// Firebase hosting
gulp.task('firebase', shell.task([
    'firebase deploy'
]));


//Start a test server with doc root at build folder and
//listening to 9001 port. Home page = http://localhost:9001
gulp.task("startServer", function(){
    connect.server({
        root : "./build",
        livereload : true,
        port : 9001
    });
});

gulp.task('buildapp', function(){
  gulp.src("./_src/app.babel")
    .pipe(react())
    .pipe(gulp.dest("./app2"));
});

gulp.task('buildrouter1', function(){
  gulp.src("./router/router.jsx")
    .pipe(react())
    .pipe(gulp.dest("./router"));
});

gulp.task('buildrouter2', function(){
  browserify("./router/router.jsx")
    .transform(reactify)
    .bundle()
    .pipe(source('router.js'))
    .pipe(gulp.dest("./router"));
});

// This one works
gulp.task("buildrouter", function(){
    return browserify({
        entries: ["./router/router.babel"],
        debug: true
    })
    .transform(babelify.configure({
        presets : ["es2015"]
    }))
    .bundle()
    .pipe(source("router.js"))
    .pipe(gulp.dest("./router"))
    ;
});

gulp.task('buildapp2', function(){
  gulp.src(path.JS)
    .pipe(react())
    .pipe(concat(path.MINIFIED_OUT))
    // .pipe(uglify(path.MINIFIED_OUT))
    .pipe(gulp.dest(path.DEST_BUILD));
});
