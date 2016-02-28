import gulp from 'gulp';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';

gulp.task('es2015', () => {
  gulp.src('src/**/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel())
      .pipe(gulp.dest('dist'));
});

