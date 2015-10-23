'use strict';

var browserSync = require('browser-sync');
var gulp        = require('gulp');
var config      = require('../config').browserSync;
var historyApiFallback = require('connect-history-api-fallback');

gulp.task('browserSync', function() {
  browserSync(config);
});

// Assign a shortcut task to BrowserSync
gulp.task('serve', ['browserSync']);