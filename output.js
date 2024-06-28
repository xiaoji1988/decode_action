//Fri Jun 28 2024 07:46:01 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x572bfc = _0x53a705("农夫山泉"),
  _0x40b3e4 = require("got"),
  _0xaaa1db = ["\n", "&", "@"],
  _0x53fe32 = ["nfsqCookie"],
  _0xdfcc0e = parseInt(process.env.nfsqThread) || 3,
  _0x402721 = 8000,
  _0x4d5f75 = 3;
const _0x156f39 = 1.02,
  _0x156fcd = "nfsq",
  _0x41a221 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json";
var _0xee09a3 = "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f2b) NetType/WIFI Language/zh_CN",
  _0x31f403 = "https://servicewechat.com/wxb75dcf65a0aa14ca/4/page-frame.html";
const _0x278802 = {
  Connection: "keep-alive",
  "User-Agent": _0xee09a3,
  Referer: _0x31f403
};
const _0x3712cf = {
  limit: 0
};
const _0x280117 = {
  headers: _0x278802,
  retry: _0x3712cf,
  timeout: _0x402721
};
var _0x194016 = _0x40b3e4.extend(_0x280117);
const _0x461f3d = {
  "17": "[量贩机天然水]兑换券",
  "31": "[100-15]代金券",
  "30": "[5元]代金券",
  "29": "[3元]代金券",
  "32": "[虎年典藏版玻璃空瓶]兑换券",
  "15": "[兔年典藏版玻璃瓶装矿泉水]兑换券"
};
class _0x65d08f {
  constructor() {
    this.index = _0x572bfc.userIdx++;
    this.name = "";
  }
  log(_0x8e0c8, _0x4a64a7 = {}) {
    let _0x25b9f6 = _0x572bfc.userCount.toString().length;
    var _0x2aa802 = "";
    if (this.index) {
      _0x2aa802 += "账号[" + _0x572bfc.padStr(this.index, _0x25b9f6) + "]";
    }
    if (this.name) {
      _0x2aa802 += "[" + this.name + "]";
    }
    _0x572bfc.log(_0x2aa802 + _0x8e0c8, _0x4a64a7);
  }
  async request(_0x1d12e5) {
    var _0x3b7524 = null,
      _0x31e90e = 0,
      _0x23f69a = _0x1d12e5.fn || _0x1d12e5.url;
    _0x1d12e5.method = _0x1d12e5?.["method"]?.["toUpperCase"]() || "GET";
    while (_0x31e90e++ < _0x4d5f75) {
      try {
        _0x3b7524 = await _0x194016(_0x1d12e5);
        break;
      } catch (_0x588eef) {
        _0x588eef.name == "TimeoutError" ? this.log("[" + _0x23f69a + "]请求超时，重试第" + _0x31e90e + "次") : this.log("[" + _0x23f69a + "]请求错误(" + _0x588eef.message + ")，重试第" + _0x31e90e + "次");
      }
    }
    if (_0x3b7524 == null) {
      return Promise.resolve({
        statusCode: "timeout",
        headers: null,
        result: null
      });
    }
    let {
      statusCode: _0x5be934,
      headers: _0x57cde0,
      body: _0x7fbd44
    } = _0x3b7524;
    if (_0x7fbd44) {
      try {
        _0x7fbd44 = JSON.parse(_0x7fbd44);
      } catch {}
    }
    const _0x1cae2c = {
      statusCode: _0x5be934,
      headers: _0x57cde0,
      result: _0x7fbd44
    };
    return Promise.resolve(_0x1cae2c);
  }
}
let _0x5811f9 = new _0x65d08f();
class _0x179039 extends _0x65d08f {
  constructor(_0x290d0b) {
    super();
    let _0x4c249d = _0x290d0b.split("#");
    this.token = _0x4c249d[0];
    this.uid = _0x4c249d[1];
    this.headers = {
      token: this.token,
      uid: this.uid
    };
  }
  async gettasklist() {
    try {
      let _0x488a28 = {
          fn: "gettasklist",
          method: "get",
          url: "https://nfsq.lookcharm.cn/game1/gettasklist",
          headers: this.headers
        },
        {
          statusCode: _0x6ce2dd,
          result: _0x2cab1b
        } = await this.request(_0x488a28);
      if (_0x6ce2dd != 200) {
        return Promise.resolve();
      }
      if (_0x2cab1b?.["code"] == 0) {
        for (let _0x40cd3f in _0x2cab1b?.["data"]) {
          _0x2cab1b.data[_0x40cd3f] == 1 && (await this.finishtask(parseInt(_0x40cd3f)));
        }
      } else {
        this.log("查询任务列表出错: " + _0x2cab1b?.["message"]);
      }
    } catch (_0x4bd644) {
      _0x572bfc.log(_0x4bd644);
    } finally {
      return Promise.resolve();
    }
  }
  async finishtask(_0x9688bd) {
    try {
      const _0x51ddb9 = {
        type: _0x9688bd
      };
      let _0x52f91d = {
          fn: "finishtask",
          method: "post",
          url: "https://nfsq.lookcharm.cn/game1/finishtask",
          headers: this.headers,
          json: _0x51ddb9
        },
        {
          statusCode: _0x5274e9,
          result: _0x4ae325
        } = await this.request(_0x52f91d);
      if (_0x5274e9 != 200) {
        return Promise.resolve();
      }
      _0x4ae325?.["code"] == 0 ? _0x4ae325?.["data"]?.["item_id"] > -1 ? this.log("完成任务[" + _0x9688bd + "]成功") : this.log("完成任务[" + _0x9688bd + "]失败, 可能已完成过") : this.log("完成任务[" + _0x9688bd + "]出错: " + _0x4ae325?.["message"]);
    } catch (_0x2f16f8) {
      _0x572bfc.log(_0x2f16f8);
    } finally {
      return Promise.resolve();
    }
  }
  async getlotterycnt() {
    try {
      let _0x250f5d = {
          fn: "getlotterycnt",
          method: "get",
          url: "https://nfsq.lookcharm.cn/game1/getlotterycnt",
          headers: this.headers
        },
        {
          statusCode: _0x40902a,
          result: _0x34c394
        } = await this.request(_0x250f5d);
      if (_0x40902a != 200) {
        return Promise.resolve();
      }
      if (_0x34c394?.["code"] == 0) {
        let _0x445728 = _0x34c394?.["data"] || 0;
        this.log("可以抽奖" + _0x445728 + "次");
        while (_0x445728--) {
          await this.bottlelottery();
        }
      } else {
        this.log("查询抽奖次数出错: " + _0x34c394?.["message"]);
      }
    } catch (_0x1f40a8) {
      _0x572bfc.log(_0x1f40a8);
    } finally {
      return Promise.resolve();
    }
  }
  async bottlelottery() {
    try {
      let _0x520782 = {
          fn: "bottlelottery",
          method: "post",
          url: "https://nfsq.lookcharm.cn/game1/bottlelottery",
          headers: this.headers,
          data: "null"
        },
        {
          statusCode: _0x5e310b,
          result: _0x526eb0
        } = await this.request(_0x520782);
      if (_0x5e310b != 200) {
        return Promise.resolve();
      }
      if (_0x526eb0?.["code"] == 0) {
        if (_0x461f3d[_0x526eb0?.["data"]]) {
          const _0x195e5a = {
            notify: true
          };
          this.log("抽奖: " + _0x461f3d[_0x526eb0?.["data"]], _0x195e5a);
        } else {
          this.log("抽奖: 好像是空气(" + _0x526eb0?.["data"] + ")");
        }
      } else {
        this.log("抽奖出错: " + _0x526eb0?.["message"]);
      }
    } catch (_0x1b5f3f) {
      _0x572bfc.log(_0x1b5f3f);
    } finally {
      return Promise.resolve();
    }
  }
  async getleftshareg1() {
    try {
      let _0x287584 = {
          fn: "getleftshareg1",
          method: "get",
          url: "https://nfsq.lookcharm.cn/game1/getleftshareg1",
          headers: this.headers
        },
        {
          statusCode: _0x287ebc,
          result: _0x234299
        } = await this.request(_0x287584);
      if (_0x287ebc != 200) {
        return Promise.resolve();
      }
      if (_0x234299?.["code"] == 0) {
        let _0x2f9c6f = _0x234299?.["data"] || 0;
        this.log("消消乐可以分享" + _0x2f9c6f + "次");
        while (_0x2f9c6f--) {
          await this.share4g1();
        }
      } else {
        this.log("查询消消乐分享次数出错: " + _0x234299?.["message"]);
      }
    } catch (_0x212e8a) {
      _0x572bfc.log(_0x212e8a);
    } finally {
      return Promise.resolve();
    }
  }
  async share4g1() {
    try {
      let _0x599f06 = {
          fn: "share4g1",
          method: "post",
          url: "https://nfsq.lookcharm.cn/game1/share4g1",
          headers: this.headers
        },
        {
          statusCode: _0x390d74,
          result: _0xb2c31a
        } = await this.request(_0x599f06);
      if (_0x390d74 != 200) {
        return Promise.resolve();
      }
      _0xb2c31a?.["code"] == 0 ? this.log("消消乐分享成功，今日分享第" + _0xb2c31a?.["data"] + "次") : this.log("消消乐分享出错: " + _0xb2c31a?.["message"]);
    } catch (_0x335f98) {
      _0x572bfc.log(_0x335f98);
    } finally {
      return Promise.resolve();
    }
  }
  async getplaycnt() {
    try {
      let _0x597a90 = {
          fn: "getplaycnt",
          method: "get",
          url: "https://nfsq.lookcharm.cn/game1/getplaycnt",
          headers: this.headers
        },
        {
          statusCode: _0x16f48e,
          result: _0x1da349
        } = await this.request(_0x597a90);
      if (_0x16f48e != 200) {
        return Promise.resolve();
      }
      if (_0x1da349?.["code"] == 0) {
        let _0x34e84b = _0x1da349?.["data"] || 0;
        this.log("消消乐可以游戏" + _0x34e84b + "次");
        while (_0x34e84b--) {
          await this.deduct();
        }
      } else {
        this.log("查询消消乐游戏次数出错: " + _0x1da349?.["message"]);
      }
    } catch (_0x3722a8) {
      _0x572bfc.log(_0x3722a8);
    } finally {
      return Promise.resolve();
    }
  }
  async deduct() {
    try {
      let _0x2d8442 = {
          fn: "deduct",
          method: "post",
          url: "https://nfsq.lookcharm.cn/game1/deduct",
          headers: this.headers
        },
        {
          statusCode: _0x5a7d42,
          result: _0x138d55
        } = await this.request(_0x2d8442);
      if (_0x5a7d42 != 200) {
        return Promise.resolve();
      }
      _0x138d55?.["code"] == 0 ? _0x138d55?.["data"] > -1 ? (this.log("开始消消乐游戏"), await this.addscore()) : this.log("开始消消乐游戏失败[" + _0x138d55?.["data"] + "]") : this.log("开始消消乐游戏出错: " + _0x138d55?.["message"]);
    } catch (_0x3c489b) {
      _0x572bfc.log(_0x3c489b);
    } finally {
      return Promise.resolve();
    }
  }
  async addscore() {
    try {
      let _0x53f063 = 1000,
        _0x17cad1 = {
          fn: "addscore",
          method: "post",
          url: "https://nfsq.lookcharm.cn/game1/addscore",
          headers: this.headers,
          body: _0x53f063.toString()
        },
        {
          statusCode: _0x49e66b,
          result: _0x13e6af
        } = await this.request(_0x17cad1);
      if (_0x49e66b != 200) {
        return Promise.resolve();
      }
      _0x13e6af?.["code"] == 0 ? _0x13e6af?.["data"] > -1 ? this.log("消消乐游戏成功，今日游戏第" + _0x13e6af?.["data"] + "次，获得" + _0x53f063 + "分") : this.log("消消乐游戏失败[" + _0x13e6af?.["data"] + "]") : this.log("消消乐游戏出错: " + _0x13e6af?.["message"]);
    } catch (_0x12bc63) {
      _0x572bfc.log(_0x12bc63);
    } finally {
      return Promise.resolve();
    }
  }
  async getg2playcnt() {
    try {
      let _0x341609 = {
        fn: "getg2playcnt",
        method: "get",
        url: "https://nfsq.lookcharm.cn/game2/getg2playcnt",
        headers: this.headers
      };
      {
        let {
          statusCode: _0x4a280e,
          result: _0x2a8e50
        } = await this.request(_0x341609);
        if (_0x4a280e != 200) {
          return Promise.resolve();
        }
        if (_0x2a8e50?.["code"] == 0) {
          let _0x39cc5a = _0x2a8e50?.["data"]?.["leftgameshare"] || 0;
          this.log("跳跳乐可以分享" + _0x39cc5a + "次");
          while (_0x39cc5a--) {
            await this.share4playgame2();
          }
        } else {
          this.log("查询跳跳乐分享次数出错: " + _0x2a8e50?.["message"]);
        }
      }
      {
        let {
          statusCode: _0x55ffb,
          result: _0x495742
        } = await this.request(_0x341609);
        if (_0x55ffb != 200) {
          return Promise.resolve();
        }
        if (_0x495742?.["code"] == 0) {
          let _0x6ef34c = _0x495742?.["data"]?.["playcnt"] || 0;
          this.log("消消乐可以游戏" + _0x6ef34c + "次");
          while (_0x6ef34c--) {
            await this.deductg2();
          }
        } else {
          this.log("查询跳跳乐游戏次数出错: " + _0x495742?.["message"]);
        }
      }
    } catch (_0x28f4d5) {
      _0x572bfc.log(_0x28f4d5);
    } finally {
      return Promise.resolve();
    }
  }
  async share4playgame2() {
    try {
      let _0x3844d0 = {
          fn: "share4playgame2",
          method: "post",
          url: "https://nfsq.lookcharm.cn/game2/share4playgame2",
          headers: this.headers
        },
        {
          statusCode: _0x2b3d6e,
          result: _0x357988
        } = await this.request(_0x3844d0);
      if (_0x2b3d6e != 200) {
        return Promise.resolve();
      }
      _0x357988?.["code"] == 0 ? this.log("跳跳乐分享成功，今日分享第" + _0x357988?.["data"] + "次") : this.log("跳跳乐分享出错: " + _0x357988?.["message"]);
    } catch (_0x319d0e) {
      _0x572bfc.log(_0x319d0e);
    } finally {
      return Promise.resolve();
    }
  }
  async deductg2() {
    try {
      let _0x35ea57 = {
          fn: "deductg2",
          method: "post",
          url: "https://nfsq.lookcharm.cn/game2/deductg2",
          headers: this.headers
        },
        {
          statusCode: _0x5b9b5d,
          result: _0x57f1ea
        } = await this.request(_0x35ea57);
      if (_0x5b9b5d != 200) {
        return Promise.resolve();
      }
      _0x57f1ea?.["code"] == 0 ? _0x57f1ea?.["data"] > -1 ? (this.log("开始跳跳乐游戏"), await this.addg2score()) : this.log("开始跳跳乐游戏失败[" + _0x57f1ea?.["data"] + "]") : this.log("开始跳跳乐游戏出错: " + _0x57f1ea?.["message"]);
    } catch (_0x484a6f) {
      _0x572bfc.log(_0x484a6f);
    } finally {
      return Promise.resolve();
    }
  }
  async addg2score() {
    try {
      let _0x33a86a = 1000,
        _0x9b74cb = {
          fn: "addg2score",
          method: "post",
          url: "https://nfsq.lookcharm.cn/game2/addg2score",
          headers: this.headers,
          body: _0x33a86a.toString()
        },
        {
          statusCode: _0x2c6236,
          result: _0xf7a6a1
        } = await this.request(_0x9b74cb);
      if (_0x2c6236 != 200) {
        return Promise.resolve();
      }
      _0xf7a6a1?.["code"] == 0 ? _0xf7a6a1?.["data"] > -1 ? this.log("跳跳乐游戏成功，今日游戏第" + _0xf7a6a1?.["data"] + "次，获得" + _0x33a86a + "分") : this.log("跳跳乐游戏失败[" + _0xf7a6a1?.["data"] + "]") : this.log("跳跳乐游戏出错: " + _0xf7a6a1?.["message"]);
    } catch (_0x3a3dd1) {
      _0x572bfc.log(_0x3a3dd1);
    } finally {
      return Promise.resolve();
    }
  }
  async getscore() {
    try {
      let _0x283962 = {
          fn: "getscore",
          method: "get",
          url: "https://nfsq.lookcharm.cn/game1/getscore",
          headers: this.headers
        },
        {
          statusCode: _0x43d4ac,
          result: _0x4e94fa
        } = await this.request(_0x283962);
      if (_0x43d4ac != 200) {
        return Promise.resolve();
      }
      if (_0x4e94fa?.["code"] == 0) {
        let _0x33f22d = _0x4e94fa?.["data"] || 0,
          _0x43f7e6 = Math.floor(_0x33f22d / 100);
        this.log("积分: " + _0x33f22d + ", 可以图鉴集卡抽奖" + _0x43f7e6 + "次");
        while (_0x43f7e6--) {
          await this.rabbitimage();
        }
      } else {
        this.log("查询积分出错: " + _0x4e94fa?.["message"]);
      }
    } catch (_0x4b8ad0) {
      _0x572bfc.log(_0x4b8ad0);
    } finally {
      return Promise.resolve();
    }
  }
  async rabbitimage() {
    try {
      let _0x373f48 = {
          fn: "rabbitimage",
          method: "post",
          url: "https://nfsq.lookcharm.cn/game1/rabbitimage",
          headers: this.headers
        },
        {
          statusCode: _0x2227e6,
          result: _0x453dea
        } = await this.request(_0x373f48);
      if (_0x2227e6 != 200) {
        return Promise.resolve();
      }
      if (_0x453dea?.["code"] == 0) {
        let _0x2545cb = _0x453dea?.["data"];
        _0x2545cb > -1 ? this.log("图鉴集卡抽奖: [" + _0x2545cb + "]号卡片") : this.log("图鉴集卡抽奖失败, 可能没次数了");
      } else {
        this.log("图鉴集卡抽奖出错: " + _0x453dea?.["message"]);
      }
    } catch (_0x54a7bb) {
      _0x572bfc.log(_0x54a7bb);
    } finally {
      return Promise.resolve();
    }
  }
  async getrecord() {
    try {
      let _0x1ee4ba = {
          fn: "getrecord",
          method: "post",
          url: "https://nfsq.lookcharm.cn/game1/getrecord",
          headers: this.headers,
          body: "null"
        },
        {
          statusCode: _0x4a1447,
          result: _0x31b8da
        } = await this.request(_0x1ee4ba);
      if (_0x4a1447 != 200) {
        return Promise.resolve();
      }
      if (_0x31b8da?.["code"] == 0) {
        let _0x4213aa = _0x31b8da?.["data"] || [];
        if (_0x4213aa?.["length"] > 0) {
          let _0x542fcd = ["已抽到的奖品:"];
          for (let _0x43a75e of _0x4213aa) {
            let _0xf998c8 = _0x43a75e.n,
              _0x2bcfbe = _0x461f3d[_0x43a75e.i] || _0x43a75e.i;
            _0x542fcd.push(_0x2bcfbe + " x" + _0xf998c8);
          }
          const _0x463edd = {
            notify: true
          };
          this.log(_0x542fcd, _0x463edd);
        }
      } else {
        this.log("查询奖品出错: " + _0x31b8da?.["message"]);
      }
    } catch (_0x58a41d) {
      _0x572bfc.log(_0x58a41d);
    } finally {
      return Promise.resolve();
    }
  }
  async userTask() {
    await this.gettasklist();
    await this.getlotterycnt();
    await this.getleftshareg1();
    await this.getplaycnt();
    await this.getg2playcnt();
    await this.getscore();
  }
}
!(async () => {
  if (!(await _0x3636c3(_0x5811f9))) {
    await _0x572bfc.exitNow();
  }
  _0x572bfc.read_env(_0x179039);
  await _0x572bfc.threadManager("userTask", _0xdfcc0e);
  await _0x572bfc.commonTask("getrecord");
})().catch(_0x29ed67 => _0x572bfc.log(_0x29ed67)).finally(() => _0x572bfc.exitNow());
async function _0x3636c3(_0x59be14) {
  let _0xe4f2df = false;
  try {
    let _0x114944 = {
        fn: "auth",
        method: "get",
        url: _0x41a221
      },
      {
        statusCode: _0x1ab4fe,
        result: _0x660b2
      } = await _0x59be14.request(_0x114944);
    if (_0x1ab4fe != 200) {
      return Promise.resolve();
    }
    if (_0x660b2?.["code"] == 0) {
      _0x660b2 = JSON.parse(_0x660b2.data.file.data);
      if (_0x660b2?.["commonNotify"] && _0x660b2.commonNotify.length > 0) {
        const _0x43fdc2 = {
          notify: true
        };
        _0x572bfc.log(_0x660b2.commonNotify.join("\n") + "\n", _0x43fdc2);
      }
      _0x660b2?.["commonMsg"] && _0x660b2.commonMsg.length > 0 && _0x572bfc.log(_0x660b2.commonMsg.join("\n") + "\n");
      if (_0x660b2[_0x156fcd]) {
        let _0x26fa5e = _0x660b2[_0x156fcd];
        _0x26fa5e.status == 0 ? _0x156f39 >= _0x26fa5e.version ? (_0xe4f2df = true, _0x572bfc.log(_0x26fa5e.msg[_0x26fa5e.status]), _0x572bfc.log(_0x26fa5e.updateMsg), _0x572bfc.log("现在运行的脚本版本是：" + _0x156f39 + "，最新脚本版本：" + _0x26fa5e.latestVersion)) : _0x572bfc.log(_0x26fa5e.versionMsg) : _0x572bfc.log(_0x26fa5e.msg[_0x26fa5e.status]);
      } else {
        _0x572bfc.log(_0x660b2.errorMsg);
      }
    }
  } catch (_0x3319ad) {
    _0x572bfc.log(_0x3319ad);
  } finally {
    return Promise.resolve(_0xe4f2df);
  }
}
function _0x53a705(_0x204fda) {
  return new class {
    constructor(_0x2ff08f) {
      this.name = _0x2ff08f;
      this.startTime = Date.now();
      const _0x499955 = {
        time: true
      };
      this.log("[" + this.name + "]开始运行\n", _0x499955);
      this.notifyStr = [];
      this.notifyFlag = true;
      this.userIdx = 0;
      this.userList = [];
      this.userCount = 0;
    }
    log(_0x42642d, _0x273c02 = {}) {
      let _0x32cbae = {
        console: true
      };
      Object.assign(_0x32cbae, _0x273c02);
      if (_0x32cbae.time) {
        let _0x3601d3 = _0x32cbae.fmt || "hh:mm:ss";
        _0x42642d = "[" + this.time(_0x3601d3) + "]" + _0x42642d;
      }
      _0x32cbae.notify && this.notifyStr.push(_0x42642d);
      _0x32cbae.console && console.log(_0x42642d);
    }
    read_env(_0x4fa8f2) {
      let _0x224768 = _0x53fe32.map(_0x8b57ca => process.env[_0x8b57ca]);
      for (let _0x239068 of _0x224768.filter(_0x569e41 => !!_0x569e41)) {
        let _0x37f546 = _0xaaa1db.filter(_0x181069 => _0x239068.includes(_0x181069)),
          _0x4498e0 = _0x37f546.length > 0 ? _0x37f546[0] : _0xaaa1db[0];
        for (let _0x183619 of _0x239068.split(_0x4498e0).filter(_0x2ad366 => !!_0x2ad366)) {
          this.userList.push(new _0x4fa8f2(_0x183619));
        }
      }
      this.userCount = this.userList.length;
      if (!this.userCount) {
        const _0x157a9d = {
          notify: true
        };
        this.log("未找到变量，请检查变量" + _0x53fe32.map(_0x3a89bd => "[" + _0x3a89bd + "]").join("或"), _0x157a9d);
        return false;
      }
      this.log("共找到" + this.userCount + "个账号");
      return true;
    }
    async taskThread(_0x1eef2e, _0x26be4d, _0x3f4f59 = {}) {
      while (_0x26be4d.idx < _0x572bfc.userList.length) {
        let _0x10b208 = _0x572bfc.userList[_0x26be4d.idx++];
        await _0x10b208[_0x1eef2e](_0x3f4f59);
      }
    }
    async threadManager(_0x24f264, _0x532171) {
      let _0x298d0b = [];
      let _0x1f57b6 = {
        idx: 0
      };
      while (_0x532171--) {
        _0x298d0b.push(this.taskThread(_0x24f264, _0x1f57b6));
      }
      await Promise.all(_0x298d0b);
    }
    async commonTask(_0x4a1fe9) {
      for (let _0x2be48d of this.userList) {
        await _0x2be48d[_0x4a1fe9]();
      }
    }
    time(_0x3d62e5, _0xf7a38 = null) {
      let _0x3824c0 = _0xf7a38 ? new Date(_0xf7a38) : new Date(),
        _0x4bbf53 = {
          "M+": _0x3824c0.getMonth() + 1,
          "d+": _0x3824c0.getDate(),
          "h+": _0x3824c0.getHours(),
          "m+": _0x3824c0.getMinutes(),
          "s+": _0x3824c0.getSeconds(),
          "q+": Math.floor((_0x3824c0.getMonth() + 3) / 3),
          S: this.padStr(_0x3824c0.getMilliseconds(), 3)
        };
      /(y+)/.test(_0x3d62e5) && (_0x3d62e5 = _0x3d62e5.replace(RegExp.$1, (_0x3824c0.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x57cd07 in _0x4bbf53) new RegExp("(" + _0x57cd07 + ")").test(_0x3d62e5) && (_0x3d62e5 = _0x3d62e5.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x4bbf53[_0x57cd07] : ("00" + _0x4bbf53[_0x57cd07]).substr(("" + _0x4bbf53[_0x57cd07]).length)));
      return _0x3d62e5;
    }
    async showmsg() {
      if (!this.notifyFlag) {
        return;
      }
      if (!this.notifyStr) {
        return;
      }
      var _0xcbaf7 = require("./sendNotify");
      this.log("\n============== 推送 ==============");
      await _0xcbaf7.sendNotify(this.name, this.notifyStr.join("\n"));
    }
    padStr(_0x3c476e, _0x4f8e0f, _0x53c843 = {}) {
      let _0x34b792 = _0x53c843.padding || "0",
        _0x49203d = _0x53c843.mode || "l",
        _0x5437e0 = String(_0x3c476e),
        _0x21cf52 = _0x4f8e0f > _0x5437e0.length ? _0x4f8e0f - _0x5437e0.length : 0,
        _0xa72d82 = "";
      for (let _0x4ac88e = 0; _0x4ac88e < _0x21cf52; _0x4ac88e++) {
        _0xa72d82 += _0x34b792;
      }
      _0x49203d == "r" ? _0x5437e0 = _0x5437e0 + _0xa72d82 : _0x5437e0 = _0xa72d82 + _0x5437e0;
      return _0x5437e0;
    }
    json2str(_0x39c646, _0x5e09e9, _0x407bbd = false) {
      let _0x180c59 = [];
      for (let _0x16ec36 of Object.keys(_0x39c646).sort()) {
        let _0x22222f = _0x39c646[_0x16ec36];
        if (_0x22222f && _0x407bbd) {
          _0x22222f = encodeURIComponent(_0x22222f);
        }
        _0x180c59.push(_0x16ec36 + "=" + _0x22222f);
      }
      return _0x180c59.join(_0x5e09e9);
    }
    str2json(_0x5cc67d, _0xae1124 = false) {
      let _0x19216a = {};
      for (let _0xb7f4fe of _0x5cc67d.split("&")) {
        if (!_0xb7f4fe) {
          continue;
        }
        let _0x3cbacc = _0xb7f4fe.indexOf("=");
        if (_0x3cbacc == -1) {
          continue;
        }
        let _0x5b8b94 = _0xb7f4fe.substr(0, _0x3cbacc),
          _0x1e558b = _0xb7f4fe.substr(_0x3cbacc + 1);
        if (_0xae1124) {
          _0x1e558b = decodeURIComponent(_0x1e558b);
        }
        _0x19216a[_0x5b8b94] = _0x1e558b;
      }
      return _0x19216a;
    }
    randomPattern(_0x447e98, _0x35cbbb = "abcdef0123456789") {
      let _0x5ec060 = "";
      for (let _0x25095f of _0x447e98) {
        if (_0x25095f == "x") {
          _0x5ec060 += _0x35cbbb.charAt(Math.floor(Math.random() * _0x35cbbb.length));
        } else {
          _0x25095f == "X" ? _0x5ec060 += _0x35cbbb.charAt(Math.floor(Math.random() * _0x35cbbb.length)).toUpperCase() : _0x5ec060 += _0x25095f;
        }
      }
      return _0x5ec060;
    }
    randomString(_0x3d9b53, _0x1814a9 = "abcdef0123456789") {
      let _0x2eefd9 = "";
      for (let _0x163bbd = 0; _0x163bbd < _0x3d9b53; _0x163bbd++) {
        _0x2eefd9 += _0x1814a9.charAt(Math.floor(Math.random() * _0x1814a9.length));
      }
      return _0x2eefd9;
    }
    randomList(_0x188132) {
      let _0x27be86 = Math.floor(Math.random() * _0x188132.length);
      return _0x188132[_0x27be86];
    }
    wait(_0x529a9a) {
      return new Promise(_0x4b54dd => setTimeout(_0x4b54dd, _0x529a9a));
    }
    async exitNow() {
      await this.showmsg();
      let _0x78c5f3 = Date.now(),
        _0x2639e7 = (_0x78c5f3 - this.startTime) / 1000;
      this.log("");
      const _0x3175b8 = {
        time: true
      };
      this.log("[" + this.name + "]运行结束，共运行了" + _0x2639e7 + "秒", _0x3175b8);
      process.exit(0);
    }
  }(_0x204fda);
}