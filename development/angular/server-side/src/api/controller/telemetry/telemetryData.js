const router = require('express').Router();
const { logger } = require('../../lib/logger');
const auth = require('../../middleware/check-auth');
const s3File = require('../../lib/reads3File');
const fs = require('fs');

router.post('/', async (req, res) => {
    try {
        var filePath = "/home/dheeraj/Desktop/files/telemetry.json";
        // var prevData = fs.readFileSync(filePath);
        // if (prevData.length > 0) {
        //     var combined = JSON.stringify(prevData).concat(JSON.stringify(req.body));
        //     console.log(combined);
        // }
        logger.info('---telemetry api ---');
        fs.writeFileSync(filePath, JSON.stringify(req.body));
        var data = fs.readFileSync(filePath);
        logger.info('---telemetry api response sent---');
        res.status(200).send({ data: JSON.parse(data.toString()) });
    } catch (e) {
        logger.error(`Error :: ${e}`)
        res.status(500).json({ errMessage: "Internal error. Please try again!!" });
    }
});

module.exports = router;