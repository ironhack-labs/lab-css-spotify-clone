const gulp=require("gulp");
const $=require("gulp-load-plugins")();

function reload(){
    console.log("reload------------");

    $.livereload.listen();

    return gulp
        .src(["./starter-code/*.*","./starter-code/css/*.*"])
        .pipe($.livereload())
    ;
}

gulp.task("watch",()=>{
    gulp.watch(["./starter-code/*.*","./starter-code/css/*.*"],reload);
});