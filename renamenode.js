var fs = require('fs');

module.exports = function(name, newName, type) {

    switch (type) {
        //Start Change name folder and file
        case 'change':
            fs.rename(name, newName, function(err) {
                if (err) {
                    return err;
                } else {
                    console.log('true');
                    return true
                }
            });
            break;
            //End Chnage name folder and file

            //Start verify if is folder
        case 'verifyFolder':
            fs.stat(name, function(err, info) {

                if (err) {
                    return err;
                } else {
                    verify(info);
                }
            });

            function verify(scan) {
                if (scan.isDirectory()) {
                    return true;
                } else {
                    return false;
                }
            }

            break;

            //End verify if is folder


            //Start verify if is file
        case 'verifyFile':

            fs.stat(name, function(err, info) {
                if (err) {
                    return err;
                } else {
                    verify(info);
                }

                function verify(scan) {
                    if (scan.isFile()) {
                        return true;
                    } else {
                        return false;
                    }
                }
            });

            break;
            //End verify if is file

        default:
            return 'not found';
    }

}
