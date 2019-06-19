class assignmentone
{
    private fs = require('fs');
    createFile() {
        this.fs.write('file1.txt', 'Assignment 1', function (  err) {
            if (err) {
                return console.error(err);
            }
            //console.log("file created");
        });
    }
    displayFile() {

        this.fs.readFile('file.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log( data);
        });
    }
}
let ob = new assignmentone();
 ob.createFile();
 ob.displayFile();