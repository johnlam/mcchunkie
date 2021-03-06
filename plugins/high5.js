// Desc: respond to high5's
(function( helper, to, from, msg, store, sh_store, cb, proto ) {
  'use strict';
  var resp;

  if (msg.match(/^\/help$|^help:$/)) {
		resp = 'high5 - look for high5s in messages to the bot.. respond to them!';

                cb.call(null, to, from, resp, proto);
                return;
  }


  if ( helper.isRelevant( msg ) ) { 
    msg = msg.trim();
    if (msg.match(/o\//)) {
      resp = '\\o';
    }
    if (msg.match(/\\o/)) {
      resp = 'o/';
    }
  }

  cb.call( null, to, from, resp, proto );
});
