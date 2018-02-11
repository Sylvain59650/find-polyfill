var gulp = require('gulp');
var concat = require("gulp-concat");
var uglify = require('gulp-uglify');


gulp.task("find-polyfill.min.js", () => {
  return gulp.src([
      "sources/find-polyfill.js"
    ])
    .pipe(concat("find-polyfill.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./distrib"))
});

gulp.task('default', ["find-polyfill.min.js"]);


gulp.task('all', ['default']);
