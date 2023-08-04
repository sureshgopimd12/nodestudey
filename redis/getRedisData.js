
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

/** Set the Key */
(async () => {
    await redisclient.set('name', 'suresh gopi');
})();

/** Get the Key */
(async () => {
    let test = await redisclient.get('name');
    console.log(test);
})();


const setRedisRecord = async(key, value) => {
    await redisclient.set(key, value);
    console.log(key, value);
}

const getRedisRecord = async(key) => {
    let data = await redisclient.get('name');
    console.log(data);
    return data;
}

setRedisRecord('name', 'test');
console.log(getRedisRecord('name'));
