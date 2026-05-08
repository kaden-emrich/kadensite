let optimizer = new Object();

optimizer.lastFrameTime = performance.now();
optimizer.frames = 0;
optimizer.fps = 0;

optimizer.lowPerfMode = false;

optimizer.checkFPS = function() {
    let now = performance.now();
    optimizer.frames++;
    if (now > optimizer.lastFrameTime + 1000) {
        let fps = Math.round((optimizer.frames * 1000) / (now - optimizer.lastFrameTime));
        optimizer.fps = fps;
        if (fps < 30 && !optimizer.lowPerfMode) {
            document.body.classList.add('low-perf-mode'); 
            console.log("Poor performance detected, Activating low perf mode");
            optimizer.lowPerfMode = true;
            // Disable heavy CSS animations or stop background videos here
        }
        optimizer.frames = 0;
        optimizer.lastFrameTime = now;
    }
    requestAnimationFrame(optimizer.checkFPS);
}
requestAnimationFrame(optimizer.checkFPS);
