(function(helper, to, from, msg, store, sh_store, cb, proto) {
  'use strict';
  var resp;
    if (msg.match(/^snap:/)) {
	resp = "untrusted comment: github.com/qbit/snap public key\nRWQVGN6sUjQQA5uYpANGLLKQMAERZ43otLePFSVqNFGGtf/qBez7G1WU";
    }

    cb.call(null, to, from, resp, proto);
});
