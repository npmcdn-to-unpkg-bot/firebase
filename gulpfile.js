//Include required modules
var gulp = require("gulp"),
    babelify = require('babelify'),
    browserify = require("browserify"),
    connect = require("gulp-connect"),
    source = require("vinyl-source-stream")
    gulp  = require('gulp'),
    shell = require('gulp-shell')
;

//Default task. This will be run when no task is passed in arguments to gulp
gulp.task("default",["app", "startServer"]);

//Copy static files from html folder to build folder
gulp.task("copyStaticFiles", function(){
    return gulp.src("./src/html/*.*")
    .pipe(gulp.dest("./build"));
});

//Convert ES6 ode in all js files in src/js folder and copy to
//build folder as bundle.js
gulp.task("app", function(){
    return browserify({
        entries: ["./app/app.js"],
        debug: true
    })
    .transform(babelify.configure({
        presets : ["es2015"]
    }))
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./js"))
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
