# verifyfs
Module rename folder, file and verify tipe folder or file

```npm install module_rename
	//Import module
	var rename = require('./models/renamenode');

	//Call function rename('namefolder', 'newnamefolder', 'change');
	rename('folder', 'mifolder', 'change');

	//Call function rename('namefolder', 'not write txt', 'type');
	rename('mifolder', '', 'verifyFolder');
		// if is correct return true
		
	//Call function rename('namefile', 'not write txt', 'type');
	rename('file.txt', '', 'verifyFile');

	