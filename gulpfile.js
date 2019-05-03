const gulp=require("gulp");
const $=require("gulp-load-plugins")();

function reload(){
    console.log("reload------------");

    $.livereload.listen();

    return gulp
        .src("./starter-code/*.*")
        .pipe($.livereload())
    ;
}

gulp.task("watch",()=>{
    gulp.watch("./starter-code/**.*",reload);
});