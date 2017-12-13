'use strict';

module.exports = function() {
  $.gulp.task('sprite:png', function () {
    var spriteData = $.gulp.src('./source/images/sprite-png/*.png')
      .pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss',
        padding: 10,
        algorithm: 'left-right'
      }));

    return spriteData.img.pipe($.gulp.dest($.config.root + '/assets/img')),
           spriteData.css.pipe($.gulp.dest('./source/style/misc'));
  });
};
