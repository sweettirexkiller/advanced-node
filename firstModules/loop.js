// node myFile.js

const pendingTimers = [];
const pendingOsTasks = [];
const pendingOperations = [];

//New timer, tasks, operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
    // Check one: any pending setTimeout, setInterval, setImmediate ?
    // Check two: any pending os tasks ? (Like server listening to port)
    // Check three: Any pending long running operations ? (like fs module)
    return pendingTimers.length || pendingOperations.length || pendingOsTasks;
}

//Entire body executes in one 'tick'
while (shouldContinue()) {
    // 1) Node looks at pending timers as sees if any functions
    // are ready to be called. swtTimeout, setInterval

    // 2) Node looks at pendingOsTasks and pendingOperations
    // and calls relevant callbacks

    // 3) Pause execution. Continue when...
    // - a a new pendingOsTask is done
    // - a new pendingOperation is done
    // - a timer is about to complete

    // 4) Look at pending timers. Call any setImmediate

    // 5) Handle any 'close' events
}


//exit back to terminal