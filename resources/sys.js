/**
 * nodeterm - sys.js
 *
 * System information resource
 */

var os = require('os');

function _getSysInfo(){
  return {
    "hostname": os.hostname()
    , "osType": os.type()
    , "platform": os.platform()
    , "arch": os.arch()
    , "uptime": os.uptime()
    , "load1": Math.round(os.loadavg()[0] * 10)/10 
    , "load5": Math.round(os.loadavg()[1] * 10)/10 
    , "load15": Math.round(os.loadavg()[2] * 10)/10 
    , "freemem": os.freemem()
    , "totalmem": os.totalmem()
  }
}

exports.getInfo = _getSysInfo;

exports.index = function(req, res) {
  switch (req.accepts(['json', 'html', 'xml'])) {
    case 'json':
      res.json(_getSysInfo());
      break;
    case 'html':
      res.send(_getSysInfo());
      break;
    default:
      res.send(400, 'Only HTML and JSON are supported');
      break;
  }
};
