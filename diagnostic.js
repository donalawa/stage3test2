var os = require('os');

module.exports = {
    diagnostSystem: function() {
            var opertingSytem = os.platform()
            var totalRam =  os.totalmem()/(1024*1024*1024) + " Gb";
            var freeRam = os.freemem()/(1024*1024*1024) + " Gb";
        
            return {
                opertingSytem,
                totalRam,
                freeRam,
            }
        
    }
}