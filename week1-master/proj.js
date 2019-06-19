var assignmentone = /** @class */ (function () {
    function assignmentone() {
        this.fs = require('fs');
    }
    assignmentone.prototype.createFile = function () {
        this.fs.writeFile('file1.txt', 'Assignment 1', function (err) {
            if (err) {
                return console.error(err);
            }
            //console.log("file created");
        });
    };
    assignmentone.prototype.displayFile = function () {
        this.fs.readFile('file1.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log(data);
        });
    };
    return assignmentone;
}());
var ob = new assignmentone();
ob.createFile();
ob.displayFile();
