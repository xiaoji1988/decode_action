//Fri Jun 28 2024 07:46:56 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x3da7b4 = "中青极速版分享阅读",
  _0x1dadbb = _0x451d42(_0x3da7b4);
let _0x1453bd,
  _0x2eb5bb = (_0x1dadbb.isNode() ? process.env.zqkdFastShareNum : _0x1dadbb.getdata("zqkdFastShareNum")) || 0,
  _0x47361e = (_0x1dadbb.isNode() ? process.env.zqkdFastCookie : _0x1dadbb.getdata("zqkdFastCookie")) || "",
  _0x3e308 = [],
  _0x5c0fca = 0,
  _0x370614 = 0,
  _0x32a102 = 0,
  _0x18ad96 = "",
  _0x3d043c = "",
  _0x1285ca = "",
  _0x188356 = 1,
  _0x4e2cff = 0,
  _0x50c415 = "zqkdFast_shareRead",
  _0x2758ba = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x32831e = "https://127.0.0.1/",
  _0x2335b0 = {};
!(async () => {
  if (typeof $request !== "undefined") {
    console.log("没有重写，请用文章脚本重写捉ck或者自己捉包填入zqkdFastCookie");
  } else {
    await _0x595e93();
    if (_0x4e2cff == false) {
      return;
    }
    await _0x543e42();
    if (!(await _0x205063())) {
      return;
    }
    console.log("====================\n");
    for (_0x5c0fca = 0; _0x5c0fca < _0x370614; _0x5c0fca++) {
      console.log("=========== 账号" + (_0x5c0fca + 1) + " 开始分享转发 ===========");
      await _0x9d8e61(_0x5c0fca);
      if (_0x32a102 == 1) {
        await _0x1dadbb.wait(200);
        let _0x130a92 = 0;
        for (let _0x1e864 = 0; _0x1e864 < _0x2eb5bb; _0x1e864++) {
          _0x130a92++;
          let _0x8e4fef = Math.floor(Math.random() * 30 * 1000) + _0x2335b0.waitTime;
          _0x1285ca = _0xdadea5(32);
          console.log("--随机延迟" + Math.floor(_0x8e4fef / 1000) + "秒后开始模拟第" + _0x130a92 + "次分享阅读");
          await _0x1dadbb.wait(_0x8e4fef);
          console.log("----模拟第" + _0x130a92 + "次阅读，使用si=" + _0x1285ca);
          await _0x463e0a();
          await _0x1dadbb.wait(Math.floor(Math.random() * 100) + 100);
          await _0x54f14b();
          await _0x1dadbb.wait(Math.floor(Math.random() * 2000) + 1000);
          await _0x36717c();
          await _0x1dadbb.wait(Math.floor(Math.random() * 1000) + 500);
          await _0xd568fa();
          console.log("----模拟第" + _0x130a92 + "次阅读完成");
        }
      }
    }
  }
})().catch(_0x52ecfa => _0x1dadbb.logErr(_0x52ecfa)).finally(() => _0x1dadbb.done());
async function _0x205063() {
  if (_0x47361e) {
    _0x3e308 = _0x47361e.split("@");
    _0x370614 = _0x3e308.length;
  } else {
    console.log("未找到zqkdFastCookie");
    return false;
  }
  if (_0x2eb5bb == 0) {
    console.log("\n当前设置分享阅读次数为0\n请把需要分享的次数填到变量zqkdFastShareNum里\n");
    return false;
  }
  console.log("共找到" + _0x370614 + "个CK，每个账号分享" + _0x2eb5bb + "次");
  return true;
}
async function _0x595e93() {
  let _0x560966 = _0x367cf2();
  let _0x3e873a = {
    url: _0x2758ba,
    headers: ""
  };
  await _0x5902a8(_0x3e873a, _0x560966);
  let _0x2c4fe7 = _0x1453bd;
  if (!_0x2c4fe7) {
    return;
  }
  _0x2c4fe7?.["code"] == 0 && (_0x2c4fe7 = JSON.parse(_0x2c4fe7.data.file.data));
  if (_0x2c4fe7[_0x50c415]) {
    let _0x54e469 = _0x2c4fe7[_0x50c415];
    _0x54e469.status == 0 ? _0x188356 >= _0x54e469.version ? (_0x4e2cff = true, _0x32831e = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/task.json", console.log(_0x54e469.msg[_0x54e469.status]), console.log(_0x54e469.updateMsg)) : console.log(_0x54e469.versionMsg) : console.log(_0x54e469.msg[_0x54e469.status]);
  } else {
    console.log(_0x2c4fe7.errorMsg);
  }
}
async function _0x543e42() {
  let _0x53a3ab = _0x367cf2(),
    _0x5a14c7 = "";
  let _0x2a69ab = {
    url: _0x32831e,
    headers: ""
  };
  await _0x5902a8(_0x2a69ab, _0x53a3ab);
  let _0x11c629 = _0x1453bd;
  if (!_0x11c629) {
    return _0x5a14c7;
  }
  _0x11c629?.["code"] == 0 && (_0x11c629 = JSON.parse(_0x11c629.data.file.data));
  for (let _0x265f1f in _0x11c629[_0x50c415]) {
    _0x2335b0[_0x265f1f] = _0x11c629[_0x50c415][_0x265f1f];
  }
  return _0x5a14c7;
}
async function _0x9d8e61(_0x16e7fb) {
  let _0x4c6447 = _0x367cf2(),
    _0xde1f61 = _0x3e308[_0x16e7fb],
    _0x47d3b2 = _0xde1f61.match(/uid=(\w+)/)[1],
    _0x5a11cc = _0x2335b0.ListArts + ("?catid=0&video_catid=1453&op=0&behot_time=0&&app_version=2.5.5&" + _0xde1f61),
    _0x23eb9e = _0x16c0ca(_0x5a11cc);
  await _0x5902a8(_0x23eb9e, _0x4c6447);
  let _0xbd7fed = _0x1453bd;
  if (!_0xbd7fed) {
    return;
  }
  if (_0xbd7fed.error_code == 0) {
    if (_0xbd7fed.items.length > 0) {
      let _0x37021f = Math.floor(Math.random() * _0xbd7fed.items.length),
        _0x5ad1b6 = _0xbd7fed.items[_0x37021f].signature;
      await _0x1dadbb.wait(1000);
      await _0x3bba00(_0x16e7fb, _0x5ad1b6);
    } else {
      console.log("用户" + (_0x16e7fb + 1) + "[" + _0x47d3b2 + "]没有找到可转发的文章");
    }
  } else {
    console.log("用户" + (_0x16e7fb + 1) + "[" + _0x47d3b2 + "]获取文章列表失败：" + _0xbd7fed.message);
  }
}
async function _0x3bba00(_0x575dba, _0xf9107c) {
  let _0x1e3afa = _0x367cf2(),
    _0x4ea30f = _0x3e308[_0x5c0fca],
    _0x5b6deb = _0x4ea30f.match(/uid=(\w+)/)[1],
    _0xb1cfe = _0x2335b0.ReadArts + ("?signature=" + _0xf9107c + "&source=articleDetail&" + _0x4ea30f + "&app_version=2.5.5&channel=c6001&device_model=OPPOR9tm&device_brand=OPPO&resolution=1080*1920&os_version=22&is_wxaccount=1&active_channel=c6001&access=wifi"),
    _0x11ffde = _0x16c0ca(_0xb1cfe);
  await _0x5902a8(_0x11ffde, _0x1e3afa);
  let _0x4ea606 = _0x1453bd;
  if (!_0x4ea606) {
    return;
  }
  if (_0x4ea606.error_code == 0) {
    _0x18ad96 = _0x4ea606.items.share_url;
    _0x3d043c = encodeURIComponent(encodeURIComponent(_0x18ad96 + "#"));
    console.log("用户" + (_0x575dba + 1) + "[" + _0x5b6deb + "]开始分享文章：" + _0x4ea606.items.title);
    _0x32a102 = 1;
    await _0x1dadbb.wait(1000);
    await _0x32d299(_0x575dba);
    await _0x1dadbb.wait(100);
    await _0x12cc9a(_0x575dba, _0x4ea606.items.id);
  } else {
    console.log("用户" + (_0x575dba + 1) + "[" + _0x5b6deb + "]分享文章失败：" + _0x4ea606.message);
  }
}
async function _0x32d299(_0x4be137) {
  let _0x2ed14c = _0x367cf2(),
    _0x270614 = _0x3e308[_0x5c0fca],
    _0x1c053b = _0x270614.match(/uid=(\w+)/)[1],
    _0x5266b7 = _0x2335b0.ShareArticleCallback + ("?" + _0x270614 + "&app_version=2.5.5&channel=c6001&device_model=OPPOR9tm&device_brand=OPPO&resolution=1080*1920&os_version=22&is_wxaccount=1&active_channel=c6001&access=wifi&from=1"),
    _0x28094d = _0x16c0ca(_0x5266b7);
  await _0x5902a8(_0x28094d, _0x2ed14c);
  let _0x7d241 = _0x1453bd;
  if (!_0x7d241) {
    return;
  }
  _0x7d241.error_code == 0 ? console.log("用户" + (_0x4be137 + 1) + "[" + _0x1c053b + "]每次分享可获得：" + _0x7d241.items.share_red_score + "青豆") : (console.log("用户" + (_0x4be137 + 1) + "[" + _0x1c053b + "]" + _0x7d241.message), _0x32a102 = 0);
}
async function _0x12cc9a(_0x5c6b4f, _0x303df2) {
  let _0x1134a2 = _0x367cf2(),
    _0x281676 = _0x3e308[_0x5c0fca],
    _0x356b15 = _0x281676.match(/uid=(\w+)/)[1],
    _0x25d493 = _0x2335b0.ShareEnd + ("?" + _0x281676 + "&app_version=2.5.5&channel=c6001&device_model=OPPOR9tm&device_brand=OPPO&resolution=1080*1920&os_version=22&is_wxaccount=1&active_channel=c6001&access=wifi&from=1&device_platform=android&article_id=" + _0x303df2 + "&stype=WEIXIN"),
    _0x525337 = _0x16c0ca(_0x25d493);
  await _0x5902a8(_0x525337, _0x1134a2);
  let _0x4c752c = _0x1453bd;
  if (!_0x4c752c) {
    return;
  }
  _0x4c752c.error_code == 0 ? console.log("用户" + (_0x5c6b4f + 1) + "[" + _0x356b15 + "]" + _0x4c752c.message) : (console.log("用户" + (_0x5c6b4f + 1) + "[" + _0x356b15 + "]" + _0x4c752c.message), _0x32a102 = 0);
}
async function _0x463e0a() {
  let _0x49c70d = _0x367cf2(),
    _0x53305f = Math.floor(new Date().getTime()),
    _0x27f969 = _0x2335b0.ShareReadStep1 + ("?t=" + _0x1285ca + "&fromUrl=" + _0x3d043c + "&_=" + _0x53305f + "&jsonpcallback=jsonp2"),
    _0xb96132 = _0x5f49e2(_0x27f969);
  await _0x3a312(_0xb96132, _0x49c70d);
}
async function _0x54f14b() {
  let _0x360cb5 = _0x367cf2(),
    _0x1d05bd = Math.floor(new Date().getTime()),
    _0x560dda = _0x2335b0.ShareReadStep2 + ("?fromUrl=" + _0x3d043c + "&_=" + _0x1d05bd + "&jsonpcallback=jsonp3"),
    _0x58dd6d = _0x5f49e2(_0x560dda);
  await _0x3a312(_0x58dd6d, _0x360cb5);
}
async function _0x36717c() {
  let _0x58406b = _0x367cf2(),
    _0x22d952 = Math.floor(new Date().getTime()),
    _0x24dd8a = _0x2335b0.ShareReadStep3 + ("?type=1&si=" + _0x1285ca + "&from=weixin&fromUrl=" + _0x3d043c + "&_=" + _0x22d952 + "&jsonpcallback=jsonp4"),
    _0x57bbac = _0x5f49e2(_0x24dd8a);
  await _0x3a312(_0x57bbac, _0x58406b);
}
async function _0xd568fa() {
  let _0x9148f2 = _0x367cf2(),
    _0x50559f = Math.floor(new Date().getTime()),
    _0x11cba7 = _0x2335b0.ShareReadStep4 + ("?si=" + _0x1285ca + "&fromUrl=" + _0x3d043c + "&_=" + _0x50559f + "&jsonpcallback=jsonp5"),
    _0x55e9b5 = _0x5f49e2(_0x11cba7);
  await _0x3a312(_0x55e9b5, _0x9148f2);
}
function _0x16c0ca(_0xf3b30a) {
  const _0x71178a = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 5.1; OPPO R9tm Build/LMY47I; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 hap/1.0.8.1/oppo com.nearme.instant.platform/4.2.1 com.youth.kandianquickapp/2.5.5 ({\"packageName\":\"com.oppo.launcher\",\"type\":\"shortcut\",\"extra\":{\"original\":{\"packageName\":\"com.oppo.market\",\"type\":\"sdk\",\"extra\":{}},\"scene\":\"api\"}})",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    Host: "user.youth.cn",
    Connection: "Keep-Alive",
    "Accept-Encoding": "gzip"
  };
  let _0x45f048 = {
    url: _0xf3b30a,
    headers: _0x71178a
  };
  return _0x45f048;
}
async function _0x5902a8(_0x3949c0, _0x643bf9) {
  _0x1453bd = null;
  return new Promise(_0x2e4c79 => {
    _0x1dadbb.get(_0x3949c0, async (_0x509d83, _0x11bc73, _0xd7780c) => {
      try {
        if (_0x509d83) {
          console.log(_0x643bf9 + ": get请求失败");
          console.log(JSON.stringify(_0x509d83));
          _0x1dadbb.logErr(_0x509d83);
        } else {
          if (_0x116658(_0xd7780c, _0x643bf9)) {
            _0x1453bd = JSON.parse(_0xd7780c);
          }
        }
      } catch (_0x32e629) {
        _0x1dadbb.logErr(_0x32e629, _0x11bc73);
      } finally {
        _0x2e4c79();
      }
    });
  });
}
function _0x116658(_0x2dff11, _0x1fe9ba) {
  try {
    if (typeof JSON.parse(_0x2dff11) == "object") {
      return true;
    } else {
      console.log("Function " + _0x1fe9ba + ": 未知错误");
      console.log(_0x2dff11);
    }
  } catch (_0x4420a9) {
    console.log(_0x4420a9);
    console.log("Function " + _0x1fe9ba + ": 服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function _0x5f49e2(_0x560e0f) {
  const _0x5abb88 = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 5.1; OPPO R9tm Build/LMY47I; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.99 XWEB/3170 MMWEBSDK/20211001 Mobile Safari/537.36 MMWEBID/1513 MicroMessenger/8.0.16.2040(0x2800105C) Process/toolsmp WeChat/arm32 Weixin NetType/WIFI Language/zh_CN ABI/arm64",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    Referer: _0x18ad96,
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    Host: "user.youth.cn",
    Connection: "Keep-Alive",
    "Accept-Encoding": "gzip"
  };
  let _0x25bf09 = {
    url: _0x560e0f,
    headers: _0x5abb88
  };
  return _0x25bf09;
}
async function _0x3a312(_0x22770d, _0x19a019) {
  return new Promise(_0xfa2c21 => {
    _0x1dadbb.get(_0x22770d, async (_0x2fb342, _0x2d6ccb, _0x41d2c5) => {
      try {
        _0x2fb342 && (console.log(_0x19a019 + ": get请求失败"), console.log(JSON.stringify(_0x2fb342)), _0x1dadbb.logErr(_0x2fb342));
      } catch (_0x4b2c56) {
        _0x1dadbb.logErr(_0x4b2c56, _0x2d6ccb);
      } finally {
        _0xfa2c21();
      }
    });
  });
}
function _0xdadea5(_0x2e7bf8 = 32) {
  let _0x86dc1b = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
    _0x2763cc = _0x86dc1b.length,
    _0x58d48b = "";
  for (i = 0; i < _0x2e7bf8; i++) {
    _0x58d48b += _0x86dc1b.charAt(Math.floor(Math.random() * _0x2763cc));
  }
  return _0x58d48b;
}
function _0x367cf2() {
  return new Error().stack.split("\n")[2].trim().split(" ")[1];
}
function _0x451d42(_0x2b984b, _0xa5d4d6) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x1474f8 {
    constructor(_0x5bd8a2) {
      this.env = _0x5bd8a2;
    }
    send(_0x26942e, _0x40798a = "GET") {
      _0x26942e = "string" == typeof _0x26942e ? {
        url: _0x26942e
      } : _0x26942e;
      let _0x55598d = this.get;
      "POST" === _0x40798a && (_0x55598d = this.post);
      return new Promise((_0x4ed62f, _0x16873c) => {
        _0x55598d.call(this, _0x26942e, (_0x43e99f, _0x1525de, _0x91411) => {
          _0x43e99f ? _0x16873c(_0x43e99f) : _0x4ed62f(_0x1525de);
        });
      });
    }
    get(_0x4be51c) {
      return this.send.call(this.env, _0x4be51c);
    }
    post(_0x5835e7) {
      return this.send.call(this.env, _0x5835e7, "POST");
    }
  }
  return new class {
    constructor(_0x5de5bb, _0x2cabc6) {
      this.name = _0x5de5bb;
      this.http = new _0x1474f8(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x2cabc6);
      this.log("", "🔔" + this.name + ", 开始!");
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
    toObj(_0x508759, _0x26a8ea = null) {
      try {
        return JSON.parse(_0x508759);
      } catch {
        return _0x26a8ea;
      }
    }
    toStr(_0xb6f46b, _0x14f8c0 = null) {
      try {
        return JSON.stringify(_0xb6f46b);
      } catch {
        return _0x14f8c0;
      }
    }
    getjson(_0x56ee85, _0x53101d) {
      let _0x4d3956 = _0x53101d;
      const _0x133b5a = this.getdata(_0x56ee85);
      if (_0x133b5a) {
        try {
          _0x4d3956 = JSON.parse(this.getdata(_0x56ee85));
        } catch {}
      }
      return _0x4d3956;
    }
    setjson(_0xce520e, _0x445e27) {
      try {
        return this.setdata(JSON.stringify(_0xce520e), _0x445e27);
      } catch {
        return !1;
      }
    }
    getScript(_0x295b27) {
      return new Promise(_0x34f2a6 => {
        const _0x5a9b31 = {
          url: _0x295b27
        };
        this.get(_0x5a9b31, (_0x4198d6, _0x256863, _0x43101a) => _0x34f2a6(_0x43101a));
      });
    }
    runScript(_0x2864f8, _0x4f6106) {
      return new Promise(_0x39685f => {
        let _0x481145 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x481145 = _0x481145 ? _0x481145.replace(/\n/g, "").trim() : _0x481145;
        let _0x4f87eb = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x4f87eb = _0x4f87eb ? 1 * _0x4f87eb : 20;
        _0x4f87eb = _0x4f6106 && _0x4f6106.timeout ? _0x4f6106.timeout : _0x4f87eb;
        const _0x2e5a71 = {
          script_text: _0x2864f8,
          mock_type: "cron",
          timeout: _0x4f87eb
        };
        const [_0x328a2f, _0x2845f0] = _0x481145.split("@"),
          _0x215aac = {
            url: "http://" + _0x2845f0 + "/v1/scripting/evaluate",
            body: _0x2e5a71,
            headers: {
              "X-Key": _0x328a2f,
              Accept: "*/*"
            }
          };
        this.post(_0x215aac, (_0x40a203, _0x45e374, _0x3454b8) => _0x39685f(_0x3454b8));
      }).catch(_0x23c609 => this.logErr(_0x23c609));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x86160 = this.path.resolve(this.dataFile),
          _0x5b1e4e = this.path.resolve(process.cwd(), this.dataFile),
          _0x96896 = this.fs.existsSync(_0x86160),
          _0x2d99ef = !_0x96896 && this.fs.existsSync(_0x5b1e4e);
        if (!_0x96896 && !_0x2d99ef) {
          return {};
        }
        {
          const _0x55afe4 = _0x96896 ? _0x86160 : _0x5b1e4e;
          try {
            return JSON.parse(this.fs.readFileSync(_0x55afe4));
          } catch (_0x267b58) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x2a87d8 = this.path.resolve(this.dataFile),
          _0x4f5ce3 = this.path.resolve(process.cwd(), this.dataFile),
          _0x49c294 = this.fs.existsSync(_0x2a87d8),
          _0x47ca05 = !_0x49c294 && this.fs.existsSync(_0x4f5ce3),
          _0xe27d50 = JSON.stringify(this.data);
        _0x49c294 ? this.fs.writeFileSync(_0x2a87d8, _0xe27d50) : _0x47ca05 ? this.fs.writeFileSync(_0x4f5ce3, _0xe27d50) : this.fs.writeFileSync(_0x2a87d8, _0xe27d50);
      }
    }
    lodash_get(_0x22741e, _0x1f09ae, _0x2fe786) {
      const _0x3b57fe = _0x1f09ae.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x1e6f70 = _0x22741e;
      for (const _0x11c7ef of _0x3b57fe) if (_0x1e6f70 = Object(_0x1e6f70)[_0x11c7ef], void 0 === _0x1e6f70) {
        return _0x2fe786;
      }
      return _0x1e6f70;
    }
    lodash_set(_0x401f08, _0x3c7047, _0x353f9c) {
      return Object(_0x401f08) !== _0x401f08 ? _0x401f08 : (Array.isArray(_0x3c7047) || (_0x3c7047 = _0x3c7047.toString().match(/[^.[\]]+/g) || []), _0x3c7047.slice(0, -1).reduce((_0x4f2bef, _0x322fe3, _0x23edee) => Object(_0x4f2bef[_0x322fe3]) === _0x4f2bef[_0x322fe3] ? _0x4f2bef[_0x322fe3] : _0x4f2bef[_0x322fe3] = Math.abs(_0x3c7047[_0x23edee + 1]) >> 0 == +_0x3c7047[_0x23edee + 1] ? [] : {}, _0x401f08)[_0x3c7047[_0x3c7047.length - 1]] = _0x353f9c, _0x401f08);
    }
    getdata(_0x3de170) {
      let _0xc8e36c = this.getval(_0x3de170);
      if (/^@/.test(_0x3de170)) {
        const [, _0x121f0f, _0x53104b] = /^@(.*?)\.(.*?)$/.exec(_0x3de170),
          _0x4d3330 = _0x121f0f ? this.getval(_0x121f0f) : "";
        if (_0x4d3330) {
          try {
            const _0x508fa2 = JSON.parse(_0x4d3330);
            _0xc8e36c = _0x508fa2 ? this.lodash_get(_0x508fa2, _0x53104b, "") : _0xc8e36c;
          } catch (_0x220ca9) {
            _0xc8e36c = "";
          }
        }
      }
      return _0xc8e36c;
    }
    setdata(_0xed2b5f, _0x4b5909) {
      let _0x18f9ac = !1;
      if (/^@/.test(_0x4b5909)) {
        const [, _0x16756d, _0x42fc96] = /^@(.*?)\.(.*?)$/.exec(_0x4b5909),
          _0xc22b09 = this.getval(_0x16756d),
          _0x2466a8 = _0x16756d ? "null" === _0xc22b09 ? null : _0xc22b09 || "{}" : "{}";
        try {
          const _0x5aa7c3 = JSON.parse(_0x2466a8);
          this.lodash_set(_0x5aa7c3, _0x42fc96, _0xed2b5f);
          _0x18f9ac = this.setval(JSON.stringify(_0x5aa7c3), _0x16756d);
        } catch (_0x591333) {
          const _0x29f8a7 = {};
          this.lodash_set(_0x29f8a7, _0x42fc96, _0xed2b5f);
          _0x18f9ac = this.setval(JSON.stringify(_0x29f8a7), _0x16756d);
        }
      } else {
        _0x18f9ac = this.setval(_0xed2b5f, _0x4b5909);
      }
      return _0x18f9ac;
    }
    getval(_0x53544b) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x53544b) : this.isQuanX() ? $prefs.valueForKey(_0x53544b) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x53544b]) : this.data && this.data[_0x53544b] || null;
    }
    setval(_0x8fd481, _0x2827cf) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x8fd481, _0x2827cf) : this.isQuanX() ? $prefs.setValueForKey(_0x8fd481, _0x2827cf) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x2827cf] = _0x8fd481, this.writedata(), !0) : this.data && this.data[_0x2827cf] || null;
    }
    initGotEnv(_0x3671cf) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x3671cf && (_0x3671cf.headers = _0x3671cf.headers ? _0x3671cf.headers : {}, void 0 === _0x3671cf.headers.Cookie && void 0 === _0x3671cf.cookieJar && (_0x3671cf.cookieJar = this.ckjar));
    }
    get(_0x1266af, _0x1a2b1a = () => {}) {
      const _0x454d53 = {
        "X-Surge-Skip-Scripting": !1
      };
      const _0x6781a4 = {
        hints: !1
      };
      _0x1266af.headers && (delete _0x1266af.headers["Content-Type"], delete _0x1266af.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x1266af.headers = _0x1266af.headers || {}, Object.assign(_0x1266af.headers, _0x454d53)), $httpClient.get(_0x1266af, (_0x3d98c7, _0x580d6b, _0x2e43ee) => {
        !_0x3d98c7 && _0x580d6b && (_0x580d6b.body = _0x2e43ee, _0x580d6b.statusCode = _0x580d6b.status);
        _0x1a2b1a(_0x3d98c7, _0x580d6b, _0x2e43ee);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x1266af.opts = _0x1266af.opts || {}, Object.assign(_0x1266af.opts, _0x6781a4)), $task.fetch(_0x1266af).then(_0x4d63be => {
        const {
            statusCode: _0x1cd61c,
            statusCode: _0xba4da9,
            headers: _0x547167,
            body: _0x18565f
          } = _0x4d63be,
          _0x4b3892 = {
            status: _0x1cd61c,
            statusCode: _0xba4da9,
            headers: _0x547167,
            body: _0x18565f
          };
        _0x1a2b1a(null, _0x4b3892, _0x18565f);
      }, _0x355c4a => _0x1a2b1a(_0x355c4a))) : this.isNode() && (this.initGotEnv(_0x1266af), this.got(_0x1266af).on("redirect", (_0x9a3427, _0x28f712) => {
        try {
          if (_0x9a3427.headers["set-cookie"]) {
            const _0x388ea4 = _0x9a3427.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(_0x388ea4, null);
            _0x28f712.cookieJar = this.ckjar;
          }
        } catch (_0x161dc8) {
          this.logErr(_0x161dc8);
        }
      }).then(_0x1811e7 => {
        const {
            statusCode: _0x45fe0a,
            statusCode: _0x1ff7be,
            headers: _0x18eeae,
            body: _0x4ff2e8
          } = _0x1811e7,
          _0x14508b = {
            status: _0x45fe0a,
            statusCode: _0x1ff7be,
            headers: _0x18eeae,
            body: _0x4ff2e8
          };
        _0x1a2b1a(null, _0x14508b, _0x4ff2e8);
      }, _0x37448e => {
        const {
          message: _0x52772b,
          response: _0x457d3d
        } = _0x37448e;
        _0x1a2b1a(_0x52772b, _0x457d3d, _0x457d3d && _0x457d3d.body);
      }));
    }
    post(_0x23a50e, _0x158241 = () => {}) {
      const _0xddeaa7 = {
        "X-Surge-Skip-Scripting": !1
      };
      const _0x316194 = {
        hints: !1
      };
      if (_0x23a50e.body && _0x23a50e.headers && !_0x23a50e.headers["Content-Type"] && (_0x23a50e.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x23a50e.headers && delete _0x23a50e.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x23a50e.headers = _0x23a50e.headers || {}, Object.assign(_0x23a50e.headers, _0xddeaa7));
        $httpClient.post(_0x23a50e, (_0x3d60ad, _0x1e5558, _0x5245b3) => {
          !_0x3d60ad && _0x1e5558 && (_0x1e5558.body = _0x5245b3, _0x1e5558.statusCode = _0x1e5558.status);
          _0x158241(_0x3d60ad, _0x1e5558, _0x5245b3);
        });
      } else {
        if (this.isQuanX()) {
          _0x23a50e.method = "POST";
          this.isNeedRewrite && (_0x23a50e.opts = _0x23a50e.opts || {}, Object.assign(_0x23a50e.opts, _0x316194));
          $task.fetch(_0x23a50e).then(_0x1e584d => {
            const {
                statusCode: _0x282ef3,
                statusCode: _0x13c98a,
                headers: _0x96eec3,
                body: _0xd49d0f
              } = _0x1e584d,
              _0xb00d5b = {
                status: _0x282ef3,
                statusCode: _0x13c98a,
                headers: _0x96eec3,
                body: _0xd49d0f
              };
            _0x158241(null, _0xb00d5b, _0xd49d0f);
          }, _0x259d39 => _0x158241(_0x259d39));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x23a50e);
            const {
              url: _0xa06e32,
              ..._0x4f4143
            } = _0x23a50e;
            this.got.post(_0xa06e32, _0x4f4143).then(_0x31bca7 => {
              const {
                  statusCode: _0x35dc97,
                  statusCode: _0x154035,
                  headers: _0x3736cb,
                  body: _0x323c3a
                } = _0x31bca7,
                _0xee9548 = {
                  status: _0x35dc97,
                  statusCode: _0x154035,
                  headers: _0x3736cb,
                  body: _0x323c3a
                };
              _0x158241(null, _0xee9548, _0x323c3a);
            }, _0x16403a => {
              const {
                message: _0x80ff2e,
                response: _0x2958cb
              } = _0x16403a;
              _0x158241(_0x80ff2e, _0x2958cb, _0x2958cb && _0x2958cb.body);
            });
          }
        }
      }
    }
    time(_0x3ade5d) {
      let _0x56051f = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "H+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(_0x3ade5d) && (_0x3ade5d = _0x3ade5d.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x434c05 in _0x56051f) new RegExp("(" + _0x434c05 + ")").test(_0x3ade5d) && (_0x3ade5d = _0x3ade5d.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x56051f[_0x434c05] : ("00" + _0x56051f[_0x434c05]).substr(("" + _0x56051f[_0x434c05]).length)));
      return _0x3ade5d;
    }
    msg(_0x9d18ba = _0x2b984b, _0x942407 = "", _0xcadff7 = "", _0x21ed1e) {
      const _0x2fcc92 = _0x1de6af => {
        if (!_0x1de6af) {
          return _0x1de6af;
        }
        if ("string" == typeof _0x1de6af) {
          return this.isLoon() ? _0x1de6af : this.isQuanX() ? {
            "open-url": _0x1de6af
          } : this.isSurge() ? {
            url: _0x1de6af
          } : void 0;
        }
        if ("object" == typeof _0x1de6af) {
          if (this.isLoon()) {
            let _0x5dae18 = _0x1de6af.openUrl || _0x1de6af.url || _0x1de6af["open-url"],
              _0x31b4d5 = _0x1de6af.mediaUrl || _0x1de6af["media-url"];
            const _0x27c66d = {
              openUrl: _0x5dae18,
              mediaUrl: _0x31b4d5
            };
            return _0x27c66d;
          }
          if (this.isQuanX()) {
            let _0x7eaaf5 = _0x1de6af["open-url"] || _0x1de6af.url || _0x1de6af.openUrl,
              _0x4fc11a = _0x1de6af["media-url"] || _0x1de6af.mediaUrl;
            const _0x2ed917 = {
              "open-url": _0x7eaaf5,
              "media-url": _0x4fc11a
            };
            return _0x2ed917;
          }
          if (this.isSurge()) {
            let _0x917d5a = _0x1de6af.url || _0x1de6af.openUrl || _0x1de6af["open-url"];
            const _0x517812 = {
              url: _0x917d5a
            };
            return _0x517812;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x9d18ba, _0x942407, _0xcadff7, _0x2fcc92(_0x21ed1e)) : this.isQuanX() && $notify(_0x9d18ba, _0x942407, _0xcadff7, _0x2fcc92(_0x21ed1e)));
      let _0x758c76 = ["", "==============📣系统通知📣=============="];
      _0x758c76.push(_0x9d18ba);
      _0x942407 && _0x758c76.push(_0x942407);
      _0xcadff7 && _0x758c76.push(_0xcadff7);
      console.log(_0x758c76.join("\n"));
      this.logs = this.logs.concat(_0x758c76);
    }
    log(..._0x4789dc) {
      _0x4789dc.length > 0 && (this.logs = [...this.logs, ..._0x4789dc]);
      console.log(_0x4789dc.join(this.logSeparator));
    }
    logErr(_0xd21385, _0x583b16) {
      const _0x4f62b4 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x4f62b4 ? this.log("", "❗️" + this.name + ", 错误!", _0xd21385.stack) : this.log("", "❗️" + this.name + ", 错误!", _0xd21385);
    }
    wait(_0x30c396) {
      return new Promise(_0x3d3bf0 => setTimeout(_0x3d3bf0, _0x30c396));
    }
    done(_0x22abf9 = {}) {
      const _0x31b64b = new Date().getTime(),
        _0xc20601 = (_0x31b64b - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0xc20601 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x22abf9);
    }
  }(_0x2b984b, _0xa5d4d6);
}