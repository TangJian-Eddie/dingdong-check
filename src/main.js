let request = require("request");
let schedule = require("node-schedule");
let child_process = require("child_process");
let config = require("./config.js");
let curl = `curl https://api.day.app/${config.barkId}/叮咚买菜有可用配送时段请尽快下单?sound=minuet`;
let job;

function checkMultiReserveTime() {
  return new Promise(function (resolve, reject) {
    request(config["capacityConfig"], function (error, response) {
      if (error) {
        console.log("error:");
        console.log(error);
        reject();
      }

      let res = JSON.parse(response.body);

      if (!res.success) {
        if (res.code == "405") {
          console.log(res);
          console.log("请求失败， 10秒后将再次尝试");
          return resolve();
        }
      }

      if (
        !(
          res.data &&
          res.data[0] &&
          res.data[0].time[0] &&
          res.data[0].time[0].times
        )
      ) {
        console.log(res);
        return resolve();
      }

      let times = res.data[0].time[0].times;

      if (
        times.some((i) => {
          return i.fullFlag == false;
        })
      ) {
        console.log(`${new Date()}: 🎉 恭喜 发现可用的配送时段 请尽快下单!`);
        child_process.exec(curl);
      } else {
        console.log(`${new Date()}: 当前无可用配送时段 10秒后再试...`);
      }

      resolve();
    });
  });
}

const setSchedule = (config, callback) => {
  const rule = new schedule.RecurrenceRule();
  for (const key in config) {
    rule[key] = config[key];
  }
  schedule.scheduleJob(rule, callback);
};

const startSechedule = () => {
  console.log("=====今天的运力监测开始=====");
  job = schedule.scheduleJob(config.frequency, checkMultiReserveTime);
};

const endSechedule = () => {
  console.log("=====今天的运力监测结束=====");
  job.cancel();
  job = null;
};

console.log("程序开始");
setSchedule(config.startTime, startSechedule);
setSchedule(config.endTime, endSechedule);
