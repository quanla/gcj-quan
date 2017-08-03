const gulp = require("gulp");
const chokidar = require("chokidar");

function loadCommonUtils() {
    let dir = "/Users/quanle/Documents/Workon/Groupmatics/code/Groupmatics.Api/react/src/gm-common/js/utils";

    gulp.src(`${dir}/**/*.*`)
        .pipe(gulp.dest("./node_modules/common-utils"));
    gulp.src(`${__dirname}/package.json`)
        .pipe(gulp.dest("./node_modules/common-utils"));
}
function loadGcj() {
    let dir = "/Users/quanle/Documents/Workon/personal/gcj";

    const compile = function() {
        gulp.src([`${dir}/**/*.*`,`!/**/node_modules/**`])
            .pipe(gulp.dest("./node_modules/gcj"));
    };

    chokidar
        .watch(`${dir}/**/*.*`, {
            ignored: /node_modules|.idea/,
            ignoreInitial: true,
            awaitWriteFinish: {
                stabilityThreshold: 100,
                pollInterval: 50
            }}
        )
        .on('all', (event, path) => {
            // console.log(event, path);
            // console.log(path);
            compile();
        })
    ;

    compile();
}

module.exports = () => {
    loadCommonUtils();

    loadGcj();

    setImmediate(() => {
        console.log("Build ready. Watching changes...");
    });
};

