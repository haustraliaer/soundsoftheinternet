var gulp = require('gulp')

gulp.task('meta-dev', function(){
  gulp.src('./Frontend/assets/meta/**/*')
    .pipe(gulp.dest('./webpack/dev-server-public/meta/'))
});

gulp.task('meta', function() {
  gulp.src('./Frontend/assets/meta/**/*')
    .pipe(gulp.dest('./Frontend/build/production/'))
    .pipe(gulp.dest('./Frontend/build/staging/'))
});

gulp.task('html', function(){
  gulp.src('./webpack/production-public/index.html')
    .pipe(gulp.dest('./Frontend/build/production/'))
    .pipe(gulp.dest('./Frontend/build/staging/'))
});

// gulp ---------------------------------- //

gulp.task('default', ['html', 'meta']);
