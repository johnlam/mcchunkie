(function( helper, to, from, msg, store, sh_store, cb ) {
  'use strict';
  var resp;

  if ( msg === helper.botname + ': are you emacs?' ) {
    resp = "brah, duh brah."
  }

  cb.call( null, to, from, resp );
});
