Stopwatch = function () {

    var self = this;
    var isRunning = false;
    var capturedTime = null;

    function getTime() {
        var d = new Date();
        return d.getTime();
    }

    self.ElapsedTime = null;

    self.start = function () {
        if (isRunning) {
            return;
        }

        self.reset();

        isRunning = true;
        capturedTime = getTime();
    }

    self.stop = function () {
        isRunning = false;
        var stopTime = getTime();

        self.ElapsedTime = (stopTime - capturedTime) / 1000;
    }

    self.reset = function () {
        isRunning = false;
        capturedTime = null;
        self.ElapsedTime = null;
    }
}