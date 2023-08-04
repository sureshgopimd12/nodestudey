const redis = require("redis");
const redisclient = redis.createClient();

(async () => {
    await redisclient.connect();
})();

console.log("Connecting to the Redis");

redisclient.on("ready", () => {
    console.log("Connected!");
});

redisclient.on("error", (err) => {
    console.log("Error in the Connection");
});


/** Get All Key Records */
const getAllKeyRecords = async () => {
    try {
        let keys = await redisclient.keys('*');
        console.log(keys);
        return keys;
    } catch (err) {
        console.error(err);
    }
}


/** Set the Data */
const setRedisRecord = async (key, value) => {
    try {
        await redisclient.set(key, value);
        console.log("Set the Data Key : " + key + " and Value " + value);
    } catch (error) {
        console.error(error);
    }
}


/** Get the Specific Data */
const getRedisRecord = async (key) => {
    try {
        let data = await redisclient.get(key);
        console.log("keys", data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

/** Get the Value from Redis */
const getAllRedisData = async() => {
    try {
        let keys = await redisclient.keys('*');
        let values = await redisclient.mGet(keys);
        console.log(values);
    } catch (error) {
        console.error(error);
    }
}

/** Get the List Record From Keys */
const getListRecord = async(keys) => {
    try {
        let values = await redisclient.mGet(keys);
        console.log(values);
    } catch (error) {
        
    }
}

/** Flush All Data */
const flushAllRecord = async () => {
    try {
        await redisclient.sendCommand(['FLUSHALL']);
        console.log('Clear all Data');
    } catch (error) {
        console.error(error);
    }
}

/** Deleted Specific Record */
const deleteSpecificRecord = async (key) => {
    try {
        await redisclient.del(key);
        console.log('Record Should be Deleted '+ key);
    } catch (error) {
        console.error(error);
    }
}

/** Deleted List Record */
const deleteListRecord = async (key) => {
    try {
        await redisclient.del(key);
        console.log('List Should be Deleted '+ key);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { 
    setRedisRecord, 
    getRedisRecord, 
    getAllKeyRecords, 
    getAllRedisData,
    getListRecord, 
    flushAllRecord,
    deleteSpecificRecord,
    deleteListRecord 
}