import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";
import cleanCSS from "gulp-clean-css";
import rename from "gulp-rename";

const sass = gulpSass(dartSass);

// Task Main
const sassFiles = "./src/scss/*";
gulp.task("sass", function () {
  return gulp
    .src(sassFiles)
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(rename("main.css"))
    .pipe(gulp.dest("./dist/css"));
});

// Tasks
gulp.task("watch", function () {
  gulp.watch(sassFiles, gulp.series("sass"));
});

gulp.task("build", gulp.series("sass"));

gulp.task("default", gulp.series("sass", "watch"));
