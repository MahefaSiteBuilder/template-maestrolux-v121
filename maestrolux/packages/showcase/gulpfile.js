var path = require('path');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();
var {argv} = require('yargs');
var fs = require('fs');
var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    rtlcss = require('gulp-rtlcss'),
    connect = require('gulp-connect'),
    pug     = require('gulp-pug'),
    plumber = require('gulp-plumber'),
    rename  = require('gulp-rename'),
    uglify  = require('gulp-uglify'),
    data    = require('gulp-data'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    pugI18n = require('gulp-i18n-pug'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    prettyHtml = require('gulp-pretty-html'),
    ext_replace = require('gulp-ext-replace');

function _join(dirname) {
  return path.join(__dirname, '..', 'src', dirname);
}

function reload(done) {
  browserSync.init({
    server: './',
    port: 9012
  })
  done();
}

/**
** Gulp tasks development
**/

function styles() {
  return (
    gulp.src('src/scss/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 3 versions'],
      cascade: false
    }))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.stream({match: '**/*.css'}))
  );
}

function scripts() {
  browserSync.reload();
  return (
    gulp.src('src/js/*.js')
    .pipe(plumber())
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('assets/js'))
    .pipe(connect.reload())
  );
}

function html() {
  return (
    gulp.src('*.html')
    .pipe(plumber())
    .pipe(connect.reload())
  );
}

function views() {
  var options = {
    i18n: {
      dest: './',
      namespace: '$t',
      localeExtension: true,
      locales: 'src/locales/en.json'
    },
    data: JSON.parse(fs.readFileSync('./src/api.json'))
  };
  return (
    gulp.src('src/pug/pages/*.pug')
    .pipe(plumber())
    .pipe(pugI18n(options))
    .pipe(prettyHtml({ indent_size: 2 }))
    .pipe(ext_replace('.html', '.en.html'))
    .pipe(gulp.dest(options.i18n.dest))
    .pipe(connect.reload())
  )
}

/**
** Watch development file changes 
**/

function watchTask(done) {
  gulp.watch('src/scss/**/*.scss', styles);
  gulp.watch('src/js/*.js', scripts);
  gulp.watch('src/pug/**/*.pug', views);
  gulp.watch('*.html', html).on('change', browserSync.reload);
  done();
}

function watchAssetsTask(done) {
  gulp.watch('src/scss/**/*.scss', styles);
  gulp.watch('src/js/*.js', scripts);
  done();
}

/**
** Generate spesific theme
**/
var theme_name = argv.theme;
console.log("Generate: "+argv.theme+" theme");

function mainHtml() {
  var options = {
    i18n: {
      dest: theme_name,
      namespace: '$t',
      locales: '../'+theme_name+'-theme/src/locales/*.*',
    },
    data: JSON.parse(fs.readFileSync('src/api.json'))
  };
  return gulp.src('src/pug/'+theme_name+'/*.pug')
    .pipe(pugI18n(options))
    .pipe(prettyHtml({ indent_size: 2 }))
    .pipe(gulp.dest(options.i18n.dest));
}

function mainHtmlRtl() {
  var options = {
    i18n: {
      dest: theme_name,
      namespace: '$t',
      locales: '../'+theme_name+'-theme/src/locales/ar.json',
    },
    data: JSON.parse(fs.readFileSync('src/api.json'))
  };
  return gulp.src('src/pug/'+theme_name+'/*.pug')
    .pipe(pugI18n(options))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(options.i18n.dest));
}

function mainImg() {
  return (
    gulp.src(theme_name+'-theme/assets/images/**/*', { cwd: '../' })
    .pipe(plumber())
    .pipe(gulp.dest(theme_name+'/assets/images'))
  );
}

function mainCss() {
  return (
    gulp.src([theme_name+'-theme/assets/css/vendors/**/*.css', theme_name+'-theme/assets/css/*.css'], { cwd: '../'})
    .pipe(cleanCSS())
    .pipe(concat(theme_name+'-bundle.min.css'))
    .pipe(gulp.dest(theme_name+'/assets/css'))
  );
}

function mainRtlCss() {
  return (
    gulp.src([
      theme_name+'-theme/assets/css/rtl-vendors/*.css',
      theme_name+'-theme/assets/css/vendors/**/*.css',
      '!'+theme_name+'-theme/assets/css/vendors/bootstrap.css',
      '!'+theme_name+'-theme/assets/css/vendors/materialize.css',
      theme_name+'-theme/assets/css/*.css'
    ], {cwd: '../'})
    .pipe(cleanCSS())
    .pipe(concat(theme_name+'-bundle-rtl.min.css'))
    .pipe(gulp.dest(theme_name+'/assets/css'))
  );
}

function mainIcons() {
  return (
    gulp.src('assets/favicons/**/*')
    .pipe(plumber())
    .pipe(gulp.dest(theme_name+'/assets/favicons'))
  );
}

function mainJs() {
  return (
    gulp.src([
      theme_name+'-theme/assets/js/vendors/jquery.min.js',
      theme_name+'-theme/assets/js/vendors/*.js',
      theme_name+'-theme/assets/js/*.js'
    ], {cwd: '../'})
    .pipe(uglify())
    .pipe(concat(theme_name+'-bundle.min.js'))
    .pipe(gulp.dest(theme_name+'/assets/js'))
  );
}

/**
** Generate multilanguage pages and RTL version for css vendors 
**/

function translate() {
  var options = {
    i18n: {
      dest: 'multilang',
      namespace: '$t',
      locales: 'src/locales/*.*',
    },
    data: JSON.parse(fs.readFileSync('./src/api.json'))
  };
  return gulp.src('src/pug/pages/*.pug')
    .pipe(pugI18n(options))
    .pipe(prettyHtml({ indent_size: 2 }))
    .pipe(gulp.dest(options.i18n.dest));
}

function translateRtl() {
  var options = {
    i18n: {
      dest: 'multilang',
      namespace: '$t',
      locales: 'src/locales/ar.json',
    },
    data: JSON.parse(fs.readFileSync('./src/api.json'))
  };
  return gulp.src('src/pug/pages/*.pug')
    .pipe(pugI18n(options))
    .pipe(prettyHtml({ indent_size: 2 }))
    .pipe(gulp.dest(options.i18n.dest));
}


/**
** Gulp tasks production to generate minified html and assets
**/

function prodHtml() {
  var srcDir = {
    root: './*.html',
    multilang: './multilang/**/*.html'
  }
  return (
    gulp.src(srcDir.multilang)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'))
  )
}

function prodImg() {
  return (
    gulp.src('assets/images/**/*')
    .pipe(plumber())
    .pipe(gulp.dest('dist/assets/images'))
  );
}

function prodIcons() {
  return (
    gulp.src('assets/favicons/**/*')
    .pipe(plumber())
    .pipe(gulp.dest('dist/assets/favicons'))
  );
}

function prodCss() {
  return (
    gulp.src(['assets/css/vendors/**/*.css', 'assets/css/*.css'])
    .pipe(cleanCSS())
    .pipe(concat('agency-bundle.min.css'))
    .pipe(gulp.dest('dist/assets/css'))
  );
}

function prodRtlCss() {
  return (
    gulp.src('assets/css/rtl-vendors/*.css')
    .pipe(cleanCSS())
    .pipe(concat('rtl-bundle.min.css'))
    .pipe(gulp.dest('dist/assets/css'))
  );
}

function prodJs() {
  return (
    gulp.src(['assets/js/vendors/jquery.min.js', 'assets/js/vendors/**/*.js', 'assets/js/*.js'])
    .pipe(uglify())
    .pipe(concat('agency-bundle.min.js'))
    .pipe(gulp.dest('dist/assets/js'))
  );
}

/**
** Collect gulp main functional
**/

const watch = gulp.parallel(watchTask, reload);
const watch_assets = gulp.parallel(watchAssetsTask, reload);
const build = gulp.series(gulp.parallel(styles, scripts, html, views));
const assets = gulp.series(gulp.parallel(styles, scripts));
const prod = gulp.series(gulp.parallel(prodHtml, prodImg, prodIcons, prodCss, prodRtlCss, prodJs));
const generate = gulp.series(gulp.parallel(mainHtml, mainImg, mainIcons, mainCss, mainRtlCss, mainJs));

exports.reload = reload;
exports.styles = styles;
exports.scripts = scripts;
exports.html = html;
exports.views = views;
exports.assets = assets;
exports.watch = watch;
exports.build = build;
exports.translate = translate;
exports.translate_rtl = translateRtl;
exports.prod = prod;
exports.generate = generate;
exports.generate_rtl = mainHtmlRtl;
exports.watch_assets = watch_assets;
exports.default = watch;