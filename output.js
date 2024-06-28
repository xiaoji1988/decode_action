//Fri Jun 28 2024 08:23:45 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x2a3883 = "中青极速版文章视频",
  _0xd7919c = _0x404572(_0x2a3883);
let _0x419054,
  _0x340b0b = (_0xd7919c.isNode() ? process.env.zqkdFastCookie : _0xd7919c.getdata("zqkdFastCookie")) || "",
  _0x19fbb4 = [],
  _0x2f64a7 = 0,
  _0x4b97d2 = 0,
  _0x2ca191 = [],
  _0x2d1950 = 0,
  _0x4b3b27 = 0,
  _0x941ba7 = 1453,
  _0x330126 = "jdvylqcGGHHJZrfw",
  _0x5c13a8 = 1,
  _0x49436e = 0,
  _0x1a99f8 = "zqkdFast_read",
  _0x4708b0 = "secret",
  _0x10d7ef = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/code.json",
  _0x1a53b2 = "https://127.0.0.1/",
  _0x1505de = {};
!(async () => {
  if (typeof $request !== "undefined") {
    await _0x115f58();
  } else {
    await _0x54bd50();
    if (_0x49436e == false) {
      return;
    }
    await _0xf3a19c();
    _0x330126 += _0x1505de[_0x4708b0];
    if (!(await _0x8a78b5())) {
      return;
    }
    console.log("====================\n");
    for (_0x2f64a7 = 0; _0x2f64a7 < _0x4b97d2; _0x2f64a7++) {
      await _0x4222cf(_0x2f64a7, _0x941ba7, _0x4b3b27);
      await _0x4222cf(_0x2f64a7, _0x4b3b27, _0x941ba7);
    }
    for (let _0x4375eb = 0; _0x4375eb < _0x2d1950; _0x4375eb++) {
      console.log("\n第" + (_0x4375eb + 1) + "轮阅读");
      for (_0x2f64a7 = 0; _0x2f64a7 < _0x4b97d2; _0x2f64a7++) {
        _0x4375eb < _0x2ca191[_0x2f64a7].length && (_0x3d7695(_0x2f64a7, _0x4375eb), await _0xd7919c.wait(200));
      }
      for (_0x2f64a7 = 0; _0x2f64a7 < _0x4b97d2; _0x2f64a7++) {
        _0x4375eb < _0x2ca191[_0x2f64a7].length && (_0x5c878c(_0x2f64a7, _0x4375eb), await _0xd7919c.wait(200));
      }
      await _0xd7919c.wait(Math.floor(Math.random() * 5000) + _0x1505de.waitTime);
    }
  }
})().catch(_0x313df0 => _0xd7919c.logErr(_0x313df0)).finally(() => _0xd7919c.done());
async function _0x8a78b5() {
  if (_0x340b0b) {
    _0x19fbb4 = _0x340b0b.split("@");
    _0x4b97d2 = _0x19fbb4.length;
  } else {
    console.log("未找到zqkdFastCookie");
    return false;
  }
  for (let _0x4f19b8 in _0x19fbb4) _0x2ca191.push([]);
  console.log("共找到" + _0x4b97d2 + "个CK");
  return true;
}
async function _0x115f58() {
  if ($request.url.indexOf("FastApi/NewTaskSimple/getTaskList") > -1) {
    console.log($request.url);
    let _0x94998b = $request.url.match(/uid=(\w+)/)[1],
      _0x52c8e1 = $request.url.match(/token=([\w\%]+)/)[1],
      _0x5adb97 = $request.url.match(/token_id=(\w+)/)[1],
      _0xe0c4a7 = "uid=" + _0x94998b + "&token=" + _0x52c8e1 + "&token_id=" + _0x5adb97,
      _0x1fd596 = "uid=" + _0x94998b;
    _0x340b0b ? _0x340b0b.indexOf(_0x1fd596) == -1 ? (_0x340b0b = _0x340b0b + "@" + _0xe0c4a7, _0xd7919c.setdata(_0x340b0b, "zqkdFastCookie"), ckList = _0x340b0b.split("@"), _0xd7919c.msg(_0x2a3883 + (" 获取第" + ckList.length + "个zqkdFastCookie成功: " + _0xe0c4a7))) : console.log(_0x2a3883 + (" 找到重复的cookie: " + _0xe0c4a7)) : (_0xd7919c.setdata(_0xe0c4a7, "zqkdFastCookie"), _0xd7919c.msg(_0x2a3883 + (" 获取第1个zqkdFastCookie成功: " + _0xe0c4a7)));
  }
}
async function _0x54bd50() {
  let _0x3b9846 = _0x15688e();
  let _0x4306b7 = {
    url: _0x10d7ef,
    headers: ""
  };
  await _0x24e870(_0x4306b7, _0x3b9846);
  let _0xbeb16e = _0x419054;
  if (!_0xbeb16e) {
    return;
  }
  _0xbeb16e?.["code"] == 0 && (_0xbeb16e = JSON.parse(_0xbeb16e.data.file.data));
  if (_0xbeb16e[_0x1a99f8]) {
    let _0x2ac99e = _0xbeb16e[_0x1a99f8];
    if (_0x2ac99e.status == 0) {
      if (_0x5c13a8 >= _0x2ac99e.version) {
        _0x49436e = true;
        _0x330126 += "0o2";
        _0x1a53b2 = "https://leafxcy.coding.net/api/user/leafxcy/project/validcode/shared-depot/validCode/git/blob/master/task.json";
        console.log(_0x2ac99e.msg[_0x2ac99e.status]);
        console.log(_0x2ac99e.updateMsg);
      } else {
        console.log(_0x2ac99e.versionMsg);
      }
    } else {
      console.log(_0x2ac99e.msg[_0x2ac99e.status]);
    }
  } else {
    console.log(_0xbeb16e.errorMsg);
  }
}
async function _0xf3a19c() {
  let _0x3180a9 = _0x15688e(),
    _0x28c93c = "";
  let _0x32ecf3 = {
    url: _0x1a53b2,
    headers: ""
  };
  await _0x24e870(_0x32ecf3, _0x3180a9);
  let _0x467ca8 = _0x419054;
  if (!_0x467ca8) {
    return _0x28c93c;
  }
  _0x467ca8?.["code"] == 0 && (_0x467ca8 = JSON.parse(_0x467ca8.data.file.data));
  for (let _0x4c4893 in _0x467ca8[_0x1a99f8]) {
    _0x1505de[_0x4c4893] = _0x467ca8[_0x1a99f8][_0x4c4893];
  }
  return _0x28c93c;
}
function _0x2e5de7(_0x15ff34) {
  let _0x1c8486 = _0x15ff34.split("&"),
    _0x1d9034 = {};
  for (let _0x35bcc3 of _0x1c8486) {
    let _0x4f1e15 = _0x35bcc3.split("=");
    _0x1d9034[_0x4f1e15[0]] = _0x4f1e15[1];
  }
  let _0x250847 = "";
  for (let _0x1de560 of Object.keys(_0x1d9034).sort()) {
    _0x1de560 != "token" && _0x1de560 != "sign" && (_0x250847 += _0x1de560 + "=" + _0x1d9034[_0x1de560]);
  }
  _0x250847 += _0x330126;
  return _0x20ade3(_0x250847);
}
async function _0x4222cf(_0x1a3b1a, _0x10728c, _0x51fa2b) {
  let _0x1f4481 = _0x15688e(),
    _0x2b50d2 = _0x19fbb4[_0x1a3b1a],
    _0xd4f13f = _0x2b50d2.match(/uid=(\w+)/)[1],
    _0x16dc45 = _0x1505de.ListArts + ("?catid=" + _0x10728c + "&video_catid=" + _0x51fa2b + "&op=0&behot_time=0&&app_version=2.5.5&" + _0x2b50d2),
    _0x465c37 = _0x21a29e(_0x16dc45);
  await _0x24e870(_0x465c37, _0x1f4481);
  let _0x944f34 = _0x419054;
  if (!_0x944f34) {
    return;
  }
  let _0x5c8ef7 = _0x10728c == 1453 ? "视频" : "文章";
  if (_0x944f34.error_code == 0) {
    for (let _0x1916e6 of _0x944f34.items) {
      _0x2ca191[_0x1a3b1a].push(_0x1916e6.signature);
    }
    _0x2d1950 = _0x5ec642(_0x2d1950, _0x2ca191[_0x1a3b1a].length);
    console.log("用户" + (_0x1a3b1a + 1) + "[" + _0xd4f13f + "]找到" + _0x944f34.items.length + _0x5c8ef7);
  } else {
    console.log("用户" + (_0x1a3b1a + 1) + "[" + _0xd4f13f + "]获取" + _0x5c8ef7 + "列表失败：" + _0x944f34.message);
  }
}
async function _0x3d7695(_0xc592ac, _0x1276f9) {
  let _0x3fed74 = _0x15688e(),
    _0x505d92 = _0x19fbb4[_0xc592ac],
    _0x3a318f = _0x505d92.match(/uid=(\w+)/)[1],
    _0x1eb0bf = _0x2ca191[_0xc592ac][_0x1276f9],
    _0x575066 = _0x1505de.ReadArts + ("?signature=" + _0x1eb0bf + "&source=articleDetail&" + _0x505d92 + "&app_version=2.5.5&channel=c6001&device_model=OPPOR9tm&device_brand=OPPO&resolution=1080*1920&os_version=22&is_wxaccount=1&active_channel=c6001&access=wifi"),
    _0x231d0a = _0x21a29e(_0x575066);
  await _0x24e870(_0x231d0a, _0x3fed74);
  let _0x4c79a7 = _0x419054;
  if (!_0x4c79a7) {
    return;
  }
  _0x4c79a7.error_code == 0 ? console.log("用户" + (_0xc592ac + 1) + "[" + _0x3a318f + "]开始看文章视频：" + _0x4c79a7.items.title) : console.log("用户" + (_0xc592ac + 1) + "[" + _0x3a318f + "]看文章视频失败：" + _0x4c79a7.message);
}
async function _0x5c878c(_0x168440, _0x124879) {
  let _0x438168 = _0x15688e(),
    _0x59a737 = _0x2ca191[_0x168440][_0x124879],
    _0x2828aa = _0x19fbb4[_0x168440],
    _0x37d9b4 = _0x2828aa.match(/uid=(\w+)/)[1],
    _0x219a74 = "signature=" + _0x59a737 + "&app_version=2.5.5",
    _0xd557c6 = _0x2e5de7(_0x219a74),
    _0xab7609 = _0x1505de.CompleteArts + ("?signature=" + _0x59a737 + "&app_version=2.5.5&sign=" + _0xd557c6),
    _0x514adf = _0x21a29e(_0xab7609);
  await _0x24e870(_0x514adf, _0x438168);
  let _0x506f9e = _0x419054;
  if (!_0x506f9e) {
    return;
  }
  _0x506f9e.error_code == 0 ? console.log("用户" + (_0x168440 + 1) + "[" + _0x37d9b4 + "]看文章视频获得" + _0x506f9e.items.read_score + "青豆") : console.log("用户" + (_0x168440 + 1) + "[" + _0x37d9b4 + "]获得文章视频奖励失败：" + _0x506f9e.message);
}
function _0x48b198(_0x2227c9, _0x498623) {
  const _0xa1b075 = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 5.1; OPPO R9tm Build/LMY47I; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 hap/1.0.8.1/oppo com.nearme.instant.platform/4.2.1 com.youth.kandianquickapp/2.5.5 ({\"packageName\":\"com.oppo.launcher\",\"type\":\"shortcut\",\"extra\":{\"original\":{\"packageName\":\"com.oppo.market\",\"type\":\"sdk\",\"extra\":{}},\"scene\":\"api\"}})",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    Host: "user.youth.cn",
    Connection: "Keep-Alive",
    "Accept-Encoding": "gzip"
  };
  let _0x4d1da4 = {
    url: _0x2227c9,
    headers: _0xa1b075,
    body: _0x498623
  };
  return _0x4d1da4;
}
function _0x21a29e(_0x2b17bd) {
  const _0x3f7d73 = {
    "User-Agent": "Mozilla/5.0 (Linux; Android 5.1; OPPO R9tm Build/LMY47I; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.121 Mobile Safari/537.36 hap/1.0.8.1/oppo com.nearme.instant.platform/4.2.1 com.youth.kandianquickapp/2.5.5 ({\"packageName\":\"com.oppo.launcher\",\"type\":\"shortcut\",\"extra\":{\"original\":{\"packageName\":\"com.oppo.market\",\"type\":\"sdk\",\"extra\":{}},\"scene\":\"api\"}})",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    Host: "user.youth.cn",
    Connection: "Keep-Alive",
    "Accept-Encoding": "gzip"
  };
  let _0x44f4c8 = {
    url: _0x2b17bd,
    headers: _0x3f7d73
  };
  return _0x44f4c8;
}
async function _0xdbe85a(_0x3e02c2, _0x281191) {
  _0x419054 = null;
  return new Promise(_0x4a160f => {
    _0xd7919c.post(_0x3e02c2, async (_0x2b4b13, _0x373603, _0x420d24) => {
      try {
        if (_0x2b4b13) {
          console.log(_0x281191 + ": post请求失败");
          console.log(JSON.stringify(_0x2b4b13));
          _0xd7919c.logErr(_0x2b4b13);
        } else {
          if (_0x62fa23(_0x420d24)) {
            _0x419054 = JSON.parse(_0x420d24);
          }
        }
      } catch (_0x4bc2aa) {
        _0xd7919c.logErr(_0x4bc2aa, _0x373603);
      } finally {
        _0x4a160f();
      }
    });
  });
}
async function _0x24e870(_0x1eb270, _0xa03c87) {
  _0x419054 = null;
  return new Promise(_0x805d8e => {
    _0xd7919c.get(_0x1eb270, async (_0x281455, _0x4e8384, _0x3e36a9) => {
      try {
        if (_0x281455) {
          console.log(_0xa03c87 + ": get请求失败");
          console.log(JSON.stringify(_0x281455));
          _0xd7919c.logErr(_0x281455);
        } else {
          if (_0x62fa23(_0x3e36a9, _0xa03c87)) {
            _0x419054 = JSON.parse(_0x3e36a9);
          }
        }
      } catch (_0x2f3835) {
        _0xd7919c.logErr(_0x2f3835, _0x4e8384);
      } finally {
        _0x805d8e();
      }
    });
  });
}
function _0x62fa23(_0x47d883, _0x188f9d) {
  try {
    if (typeof JSON.parse(_0x47d883) == "object") {
      return true;
    } else {
      console.log("Function " + _0x188f9d + ": 未知错误");
      console.log(_0x47d883);
    }
  } catch (_0x45c553) {
    console.log(_0x47d883);
    console.log(_0x45c553);
    console.log("Function " + _0x188f9d + ": 服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function _0x15688e() {
  return new Error().stack.split("\n")[2].trim().split(" ")[1];
}
function _0x1e6b58(_0x2d1db1, _0x1e4825) {
  return _0x2d1db1 < _0x1e4825 ? _0x2d1db1 : _0x1e4825;
}
function _0x5ec642(_0x457ede, _0x32f9cf) {
  return _0x457ede < _0x32f9cf ? _0x32f9cf : _0x457ede;
}
function _0x432085(_0x449798 = 12) {
  let _0x20f2ca = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
    _0x3a394f = _0x20f2ca.length,
    _0xb6826a = "";
  for (i = 0; i < _0x449798; i++) {
    _0xb6826a += _0x20f2ca.charAt(Math.floor(Math.random() * _0x3a394f));
  }
  return _0xb6826a;
}
function _0x20ade3(_0x38628c) {
  function _0x2894d1(_0x13b126, _0x1b46e1) {
    return _0x13b126 << _0x1b46e1 | _0x13b126 >>> 32 - _0x1b46e1;
  }
  function _0x565ab9(_0x2fd4c3, _0x2617c6) {
    var _0x29c935, _0x3aace6, _0x490aa3, _0x4bc848, _0x482199;
    _0x490aa3 = 2147483648 & _0x2fd4c3;
    _0x4bc848 = 2147483648 & _0x2617c6;
    _0x29c935 = 1073741824 & _0x2fd4c3;
    _0x3aace6 = 1073741824 & _0x2617c6;
    _0x482199 = (1073741823 & _0x2fd4c3) + (1073741823 & _0x2617c6);
    return _0x29c935 & _0x3aace6 ? 2147483648 ^ _0x482199 ^ _0x490aa3 ^ _0x4bc848 : _0x29c935 | _0x3aace6 ? 1073741824 & _0x482199 ? 3221225472 ^ _0x482199 ^ _0x490aa3 ^ _0x4bc848 : 1073741824 ^ _0x482199 ^ _0x490aa3 ^ _0x4bc848 : _0x482199 ^ _0x490aa3 ^ _0x4bc848;
  }
  function _0xdb8e15(_0x4af81c, _0x1163a3, _0x536271) {
    return _0x4af81c & _0x1163a3 | ~_0x4af81c & _0x536271;
  }
  function _0xb09d75(_0x42ac63, _0x583a08, _0xcc8b58) {
    return _0x42ac63 & _0xcc8b58 | _0x583a08 & ~_0xcc8b58;
  }
  function _0x1377b5(_0x187736, _0x3148f4, _0x3642f4) {
    return _0x187736 ^ _0x3148f4 ^ _0x3642f4;
  }
  function _0x1a17a6(_0x1193fb, _0x3c92e5, _0x26b987) {
    return _0x3c92e5 ^ (_0x1193fb | ~_0x26b987);
  }
  function _0x23f113(_0x2d1e2f, _0xde9bf, _0x5602c6, _0x118431, _0x4d4350, _0x5b354f, _0x39755a) {
    _0x2d1e2f = _0x565ab9(_0x2d1e2f, _0x565ab9(_0x565ab9(_0xdb8e15(_0xde9bf, _0x5602c6, _0x118431), _0x4d4350), _0x39755a));
    return _0x565ab9(_0x2894d1(_0x2d1e2f, _0x5b354f), _0xde9bf);
  }
  function _0x25841b(_0x377db5, _0x524c24, _0x2a99ac, _0x54e19b, _0x150c50, _0x415b7a, _0x122784) {
    _0x377db5 = _0x565ab9(_0x377db5, _0x565ab9(_0x565ab9(_0xb09d75(_0x524c24, _0x2a99ac, _0x54e19b), _0x150c50), _0x122784));
    return _0x565ab9(_0x2894d1(_0x377db5, _0x415b7a), _0x524c24);
  }
  function _0x5e1e87(_0x342901, _0x4853b3, _0x44f5be, _0x4b7fd4, _0x4df3bf, _0x1cd8b2, _0x326f4f) {
    _0x342901 = _0x565ab9(_0x342901, _0x565ab9(_0x565ab9(_0x1377b5(_0x4853b3, _0x44f5be, _0x4b7fd4), _0x4df3bf), _0x326f4f));
    return _0x565ab9(_0x2894d1(_0x342901, _0x1cd8b2), _0x4853b3);
  }
  function _0x59fef(_0x360620, _0x512098, _0x15a838, _0xfe8bc3, _0x1cd2ee, _0x57880a, _0x47d1eb) {
    _0x360620 = _0x565ab9(_0x360620, _0x565ab9(_0x565ab9(_0x1a17a6(_0x512098, _0x15a838, _0xfe8bc3), _0x1cd2ee), _0x47d1eb));
    return _0x565ab9(_0x2894d1(_0x360620, _0x57880a), _0x512098);
  }
  function _0x3b3fed(_0x423c00) {
    for (var _0x31f2e9, _0x41ef4c = _0x423c00.length, _0x443647 = _0x41ef4c + 8, _0x3d4f65 = (_0x443647 - _0x443647 % 64) / 64, _0x17a7f8 = 16 * (_0x3d4f65 + 1), _0x554184 = new Array(_0x17a7f8 - 1), _0x29a6b9 = 0, _0x2061d9 = 0; _0x41ef4c > _0x2061d9;) {
      _0x31f2e9 = (_0x2061d9 - _0x2061d9 % 4) / 4;
      _0x29a6b9 = _0x2061d9 % 4 * 8;
      _0x554184[_0x31f2e9] = _0x554184[_0x31f2e9] | _0x423c00.charCodeAt(_0x2061d9) << _0x29a6b9;
      _0x2061d9++;
    }
    _0x31f2e9 = (_0x2061d9 - _0x2061d9 % 4) / 4;
    _0x29a6b9 = _0x2061d9 % 4 * 8;
    _0x554184[_0x31f2e9] = _0x554184[_0x31f2e9] | 128 << _0x29a6b9;
    _0x554184[_0x17a7f8 - 2] = _0x41ef4c << 3;
    _0x554184[_0x17a7f8 - 1] = _0x41ef4c >>> 29;
    return _0x554184;
  }
  function _0x4d7004(_0x3e5e15) {
    var _0x13cc1a,
      _0x391afc,
      _0x294d26 = "",
      _0x588897 = "";
    for (_0x391afc = 0; 3 >= _0x391afc; _0x391afc++) {
      _0x13cc1a = _0x3e5e15 >>> 8 * _0x391afc & 255;
      _0x588897 = "0" + _0x13cc1a.toString(16);
      _0x294d26 += _0x588897.substr(_0x588897.length - 2, 2);
    }
    return _0x294d26;
  }
  function _0x4e39e0(_0x2870fc) {
    _0x2870fc = _0x2870fc.replace(/\r\n/g, "\n");
    for (var _0x2aea07 = "", _0x33cef9 = 0; _0x33cef9 < _0x2870fc.length; _0x33cef9++) {
      var _0x546d33 = _0x2870fc.charCodeAt(_0x33cef9);
      128 > _0x546d33 ? _0x2aea07 += String.fromCharCode(_0x546d33) : _0x546d33 > 127 && 2048 > _0x546d33 ? (_0x2aea07 += String.fromCharCode(_0x546d33 >> 6 | 192), _0x2aea07 += String.fromCharCode(63 & _0x546d33 | 128)) : (_0x2aea07 += String.fromCharCode(_0x546d33 >> 12 | 224), _0x2aea07 += String.fromCharCode(_0x546d33 >> 6 & 63 | 128), _0x2aea07 += String.fromCharCode(63 & _0x546d33 | 128));
    }
    return _0x2aea07;
  }
  var _0x57701d,
    _0x2b6657,
    _0x4ea914,
    _0x28be5c,
    _0x3225f8,
    _0x4f42a6,
    _0x24d84d,
    _0x4e1b7e,
    _0x2e2f66,
    _0x208d00 = [],
    _0x5561ee = 7,
    _0x6b5824 = 12,
    _0xe04726 = 17,
    _0xa16350 = 22,
    _0x3a7474 = 5,
    _0x268327 = 9,
    _0xf7aa0b = 14,
    _0x5b3e47 = 20,
    _0x13838b = 4,
    _0x164c19 = 11,
    _0x1202ba = 16,
    _0x273aab = 23,
    _0x512a09 = 6,
    _0x2938fc = 10,
    _0x5afe22 = 15,
    _0x3bc5de = 21;
  for (_0x38628c = _0x4e39e0(_0x38628c), _0x208d00 = _0x3b3fed(_0x38628c), _0x4f42a6 = 1732584193, _0x24d84d = 4023233417, _0x4e1b7e = 2562383102, _0x2e2f66 = 271733878, _0x57701d = 0; _0x57701d < _0x208d00.length; _0x57701d += 16) {
    _0x2b6657 = _0x4f42a6;
    _0x4ea914 = _0x24d84d;
    _0x28be5c = _0x4e1b7e;
    _0x3225f8 = _0x2e2f66;
    _0x4f42a6 = _0x23f113(_0x4f42a6, _0x24d84d, _0x4e1b7e, _0x2e2f66, _0x208d00[_0x57701d + 0], _0x5561ee, 3614090360);
    _0x2e2f66 = _0x23f113(_0x2e2f66, _0x4f42a6, _0x24d84d, _0x4e1b7e, _0x208d00[_0x57701d + 1], _0x6b5824, 3905402710);
    _0x4e1b7e = _0x23f113(_0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x24d84d, _0x208d00[_0x57701d + 2], _0xe04726, 606105819);
    _0x24d84d = _0x23f113(_0x24d84d, _0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x208d00[_0x57701d + 3], _0xa16350, 3250441966);
    _0x4f42a6 = _0x23f113(_0x4f42a6, _0x24d84d, _0x4e1b7e, _0x2e2f66, _0x208d00[_0x57701d + 4], _0x5561ee, 4118548399);
    _0x2e2f66 = _0x23f113(_0x2e2f66, _0x4f42a6, _0x24d84d, _0x4e1b7e, _0x208d00[_0x57701d + 5], _0x6b5824, 1200080426);
    _0x4e1b7e = _0x23f113(_0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x24d84d, _0x208d00[_0x57701d + 6], _0xe04726, 2821735955);
    _0x24d84d = _0x23f113(_0x24d84d, _0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x208d00[_0x57701d + 7], _0xa16350, 4249261313);
    _0x4f42a6 = _0x23f113(_0x4f42a6, _0x24d84d, _0x4e1b7e, _0x2e2f66, _0x208d00[_0x57701d + 8], _0x5561ee, 1770035416);
    _0x2e2f66 = _0x23f113(_0x2e2f66, _0x4f42a6, _0x24d84d, _0x4e1b7e, _0x208d00[_0x57701d + 9], _0x6b5824, 2336552879);
    _0x4e1b7e = _0x23f113(_0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x24d84d, _0x208d00[_0x57701d + 10], _0xe04726, 4294925233);
    _0x24d84d = _0x23f113(_0x24d84d, _0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x208d00[_0x57701d + 11], _0xa16350, 2304563134);
    _0x4f42a6 = _0x23f113(_0x4f42a6, _0x24d84d, _0x4e1b7e, _0x2e2f66, _0x208d00[_0x57701d + 12], _0x5561ee, 1804603682);
    _0x2e2f66 = _0x23f113(_0x2e2f66, _0x4f42a6, _0x24d84d, _0x4e1b7e, _0x208d00[_0x57701d + 13], _0x6b5824, 4254626195);
    _0x4e1b7e = _0x23f113(_0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x24d84d, _0x208d00[_0x57701d + 14], _0xe04726, 2792965006);
    _0x24d84d = _0x23f113(_0x24d84d, _0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x208d00[_0x57701d + 15], _0xa16350, 1236535329);
    _0x4f42a6 = _0x25841b(_0x4f42a6, _0x24d84d, _0x4e1b7e, _0x2e2f66, _0x208d00[_0x57701d + 1], _0x3a7474, 4129170786);
    _0x2e2f66 = _0x25841b(_0x2e2f66, _0x4f42a6, _0x24d84d, _0x4e1b7e, _0x208d00[_0x57701d + 6], _0x268327, 3225465664);
    _0x4e1b7e = _0x25841b(_0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x24d84d, _0x208d00[_0x57701d + 11], _0xf7aa0b, 643717713);
    _0x24d84d = _0x25841b(_0x24d84d, _0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x208d00[_0x57701d + 0], _0x5b3e47, 3921069994);
    _0x4f42a6 = _0x25841b(_0x4f42a6, _0x24d84d, _0x4e1b7e, _0x2e2f66, _0x208d00[_0x57701d + 5], _0x3a7474, 3593408605);
    _0x2e2f66 = _0x25841b(_0x2e2f66, _0x4f42a6, _0x24d84d, _0x4e1b7e, _0x208d00[_0x57701d + 10], _0x268327, 38016083);
    _0x4e1b7e = _0x25841b(_0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x24d84d, _0x208d00[_0x57701d + 15], _0xf7aa0b, 3634488961);
    _0x24d84d = _0x25841b(_0x24d84d, _0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x208d00[_0x57701d + 4], _0x5b3e47, 3889429448);
    _0x4f42a6 = _0x25841b(_0x4f42a6, _0x24d84d, _0x4e1b7e, _0x2e2f66, _0x208d00[_0x57701d + 9], _0x3a7474, 568446438);
    _0x2e2f66 = _0x25841b(_0x2e2f66, _0x4f42a6, _0x24d84d, _0x4e1b7e, _0x208d00[_0x57701d + 14], _0x268327, 3275163606);
    _0x4e1b7e = _0x25841b(_0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x24d84d, _0x208d00[_0x57701d + 3], _0xf7aa0b, 4107603335);
    _0x24d84d = _0x25841b(_0x24d84d, _0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x208d00[_0x57701d + 8], _0x5b3e47, 1163531501);
    _0x4f42a6 = _0x25841b(_0x4f42a6, _0x24d84d, _0x4e1b7e, _0x2e2f66, _0x208d00[_0x57701d + 13], _0x3a7474, 2850285829);
    _0x2e2f66 = _0x25841b(_0x2e2f66, _0x4f42a6, _0x24d84d, _0x4e1b7e, _0x208d00[_0x57701d + 2], _0x268327, 4243563512);
    _0x4e1b7e = _0x25841b(_0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x24d84d, _0x208d00[_0x57701d + 7], _0xf7aa0b, 1735328473);
    _0x24d84d = _0x25841b(_0x24d84d, _0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x208d00[_0x57701d + 12], _0x5b3e47, 2368359562);
    _0x4f42a6 = _0x5e1e87(_0x4f42a6, _0x24d84d, _0x4e1b7e, _0x2e2f66, _0x208d00[_0x57701d + 5], _0x13838b, 4294588738);
    _0x2e2f66 = _0x5e1e87(_0x2e2f66, _0x4f42a6, _0x24d84d, _0x4e1b7e, _0x208d00[_0x57701d + 8], _0x164c19, 2272392833);
    _0x4e1b7e = _0x5e1e87(_0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x24d84d, _0x208d00[_0x57701d + 11], _0x1202ba, 1839030562);
    _0x24d84d = _0x5e1e87(_0x24d84d, _0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x208d00[_0x57701d + 14], _0x273aab, 4259657740);
    _0x4f42a6 = _0x5e1e87(_0x4f42a6, _0x24d84d, _0x4e1b7e, _0x2e2f66, _0x208d00[_0x57701d + 1], _0x13838b, 2763975236);
    _0x2e2f66 = _0x5e1e87(_0x2e2f66, _0x4f42a6, _0x24d84d, _0x4e1b7e, _0x208d00[_0x57701d + 4], _0x164c19, 1272893353);
    _0x4e1b7e = _0x5e1e87(_0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x24d84d, _0x208d00[_0x57701d + 7], _0x1202ba, 4139469664);
    _0x24d84d = _0x5e1e87(_0x24d84d, _0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x208d00[_0x57701d + 10], _0x273aab, 3200236656);
    _0x4f42a6 = _0x5e1e87(_0x4f42a6, _0x24d84d, _0x4e1b7e, _0x2e2f66, _0x208d00[_0x57701d + 13], _0x13838b, 681279174);
    _0x2e2f66 = _0x5e1e87(_0x2e2f66, _0x4f42a6, _0x24d84d, _0x4e1b7e, _0x208d00[_0x57701d + 0], _0x164c19, 3936430074);
    _0x4e1b7e = _0x5e1e87(_0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x24d84d, _0x208d00[_0x57701d + 3], _0x1202ba, 3572445317);
    _0x24d84d = _0x5e1e87(_0x24d84d, _0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x208d00[_0x57701d + 6], _0x273aab, 76029189);
    _0x4f42a6 = _0x5e1e87(_0x4f42a6, _0x24d84d, _0x4e1b7e, _0x2e2f66, _0x208d00[_0x57701d + 9], _0x13838b, 3654602809);
    _0x2e2f66 = _0x5e1e87(_0x2e2f66, _0x4f42a6, _0x24d84d, _0x4e1b7e, _0x208d00[_0x57701d + 12], _0x164c19, 3873151461);
    _0x4e1b7e = _0x5e1e87(_0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x24d84d, _0x208d00[_0x57701d + 15], _0x1202ba, 530742520);
    _0x24d84d = _0x5e1e87(_0x24d84d, _0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x208d00[_0x57701d + 2], _0x273aab, 3299628645);
    _0x4f42a6 = _0x59fef(_0x4f42a6, _0x24d84d, _0x4e1b7e, _0x2e2f66, _0x208d00[_0x57701d + 0], _0x512a09, 4096336452);
    _0x2e2f66 = _0x59fef(_0x2e2f66, _0x4f42a6, _0x24d84d, _0x4e1b7e, _0x208d00[_0x57701d + 7], _0x2938fc, 1126891415);
    _0x4e1b7e = _0x59fef(_0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x24d84d, _0x208d00[_0x57701d + 14], _0x5afe22, 2878612391);
    _0x24d84d = _0x59fef(_0x24d84d, _0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x208d00[_0x57701d + 5], _0x3bc5de, 4237533241);
    _0x4f42a6 = _0x59fef(_0x4f42a6, _0x24d84d, _0x4e1b7e, _0x2e2f66, _0x208d00[_0x57701d + 12], _0x512a09, 1700485571);
    _0x2e2f66 = _0x59fef(_0x2e2f66, _0x4f42a6, _0x24d84d, _0x4e1b7e, _0x208d00[_0x57701d + 3], _0x2938fc, 2399980690);
    _0x4e1b7e = _0x59fef(_0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x24d84d, _0x208d00[_0x57701d + 10], _0x5afe22, 4293915773);
    _0x24d84d = _0x59fef(_0x24d84d, _0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x208d00[_0x57701d + 1], _0x3bc5de, 2240044497);
    _0x4f42a6 = _0x59fef(_0x4f42a6, _0x24d84d, _0x4e1b7e, _0x2e2f66, _0x208d00[_0x57701d + 8], _0x512a09, 1873313359);
    _0x2e2f66 = _0x59fef(_0x2e2f66, _0x4f42a6, _0x24d84d, _0x4e1b7e, _0x208d00[_0x57701d + 15], _0x2938fc, 4264355552);
    _0x4e1b7e = _0x59fef(_0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x24d84d, _0x208d00[_0x57701d + 6], _0x5afe22, 2734768916);
    _0x24d84d = _0x59fef(_0x24d84d, _0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x208d00[_0x57701d + 13], _0x3bc5de, 1309151649);
    _0x4f42a6 = _0x59fef(_0x4f42a6, _0x24d84d, _0x4e1b7e, _0x2e2f66, _0x208d00[_0x57701d + 4], _0x512a09, 4149444226);
    _0x2e2f66 = _0x59fef(_0x2e2f66, _0x4f42a6, _0x24d84d, _0x4e1b7e, _0x208d00[_0x57701d + 11], _0x2938fc, 3174756917);
    _0x4e1b7e = _0x59fef(_0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x24d84d, _0x208d00[_0x57701d + 2], _0x5afe22, 718787259);
    _0x24d84d = _0x59fef(_0x24d84d, _0x4e1b7e, _0x2e2f66, _0x4f42a6, _0x208d00[_0x57701d + 9], _0x3bc5de, 3951481745);
    _0x4f42a6 = _0x565ab9(_0x4f42a6, _0x2b6657);
    _0x24d84d = _0x565ab9(_0x24d84d, _0x4ea914);
    _0x4e1b7e = _0x565ab9(_0x4e1b7e, _0x28be5c);
    _0x2e2f66 = _0x565ab9(_0x2e2f66, _0x3225f8);
  }
  var _0x39ddd8 = _0x4d7004(_0x4f42a6) + _0x4d7004(_0x24d84d) + _0x4d7004(_0x4e1b7e) + _0x4d7004(_0x2e2f66);
  return _0x39ddd8.toLowerCase();
}
function _0x404572(_0x5f3bd7, _0x4cf6a4) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x1c2fa3 {
    constructor(_0x5aaa05) {
      this.env = _0x5aaa05;
    }
    send(_0x3ab23b, _0xecc264 = "GET") {
      _0x3ab23b = "string" == typeof _0x3ab23b ? {
        url: _0x3ab23b
      } : _0x3ab23b;
      let _0x1c98ac = this.get;
      "POST" === _0xecc264 && (_0x1c98ac = this.post);
      return new Promise((_0x8fc197, _0x5bcf58) => {
        _0x1c98ac.call(this, _0x3ab23b, (_0x555222, _0x4ee4c0, _0xcb0bad) => {
          _0x555222 ? _0x5bcf58(_0x555222) : _0x8fc197(_0x4ee4c0);
        });
      });
    }
    get(_0x41ba53) {
      return this.send.call(this.env, _0x41ba53);
    }
    post(_0x25088b) {
      return this.send.call(this.env, _0x25088b, "POST");
    }
  }
  return new class {
    constructor(_0x351a5e, _0x290738) {
      this.name = _0x351a5e;
      this.http = new _0x1c2fa3(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x290738);
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
    toObj(_0x23eb2c, _0x2165c4 = null) {
      try {
        return JSON.parse(_0x23eb2c);
      } catch {
        return _0x2165c4;
      }
    }
    toStr(_0x1bda92, _0x15a36c = null) {
      try {
        return JSON.stringify(_0x1bda92);
      } catch {
        return _0x15a36c;
      }
    }
    getjson(_0x119169, _0x172167) {
      let _0x4ec5fd = _0x172167;
      const _0x54f473 = this.getdata(_0x119169);
      if (_0x54f473) {
        try {
          _0x4ec5fd = JSON.parse(this.getdata(_0x119169));
        } catch {}
      }
      return _0x4ec5fd;
    }
    setjson(_0x2668d8, _0x1ce9c7) {
      try {
        return this.setdata(JSON.stringify(_0x2668d8), _0x1ce9c7);
      } catch {
        return !1;
      }
    }
    getScript(_0x105234) {
      return new Promise(_0x38985f => {
        const _0x2c7d11 = {
          url: _0x105234
        };
        this.get(_0x2c7d11, (_0x5bcbd9, _0x339e9d, _0x310a75) => _0x38985f(_0x310a75));
      });
    }
    runScript(_0xa2b5c2, _0x31d971) {
      return new Promise(_0x4e8465 => {
        let _0x173965 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x173965 = _0x173965 ? _0x173965.replace(/\n/g, "").trim() : _0x173965;
        let _0x57b103 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x57b103 = _0x57b103 ? 1 * _0x57b103 : 20;
        _0x57b103 = _0x31d971 && _0x31d971.timeout ? _0x31d971.timeout : _0x57b103;
        const _0x575709 = {
          script_text: _0xa2b5c2,
          mock_type: "cron",
          timeout: _0x57b103
        };
        const [_0x5e5854, _0x2c3681] = _0x173965.split("@"),
          _0x4e6ab1 = {
            url: "http://" + _0x2c3681 + "/v1/scripting/evaluate",
            body: _0x575709,
            headers: {
              "X-Key": _0x5e5854,
              Accept: "*/*"
            }
          };
        this.post(_0x4e6ab1, (_0x1dad95, _0x35255e, _0x25d2bc) => _0x4e8465(_0x25d2bc));
      }).catch(_0x45dc1b => this.logErr(_0x45dc1b));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x34ef6f = this.path.resolve(this.dataFile),
          _0x5c460a = this.path.resolve(process.cwd(), this.dataFile),
          _0x21d176 = this.fs.existsSync(_0x34ef6f),
          _0x3c9ed6 = !_0x21d176 && this.fs.existsSync(_0x5c460a);
        if (!_0x21d176 && !_0x3c9ed6) {
          return {};
        }
        {
          const _0x5d4649 = _0x21d176 ? _0x34ef6f : _0x5c460a;
          try {
            return JSON.parse(this.fs.readFileSync(_0x5d4649));
          } catch (_0x550c6a) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4672aa = this.path.resolve(this.dataFile),
          _0x375a66 = this.path.resolve(process.cwd(), this.dataFile),
          _0x458d15 = this.fs.existsSync(_0x4672aa),
          _0x285db7 = !_0x458d15 && this.fs.existsSync(_0x375a66),
          _0xd10b51 = JSON.stringify(this.data);
        _0x458d15 ? this.fs.writeFileSync(_0x4672aa, _0xd10b51) : _0x285db7 ? this.fs.writeFileSync(_0x375a66, _0xd10b51) : this.fs.writeFileSync(_0x4672aa, _0xd10b51);
      }
    }
    lodash_get(_0x26afba, _0x2da2eb, _0x5326e6) {
      const _0x271a5b = _0x2da2eb.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x5cedf8 = _0x26afba;
      for (const _0x3a233d of _0x271a5b) if (_0x5cedf8 = Object(_0x5cedf8)[_0x3a233d], void 0 === _0x5cedf8) {
        return _0x5326e6;
      }
      return _0x5cedf8;
    }
    lodash_set(_0x209473, _0x5b5de0, _0x30a4de) {
      return Object(_0x209473) !== _0x209473 ? _0x209473 : (Array.isArray(_0x5b5de0) || (_0x5b5de0 = _0x5b5de0.toString().match(/[^.[\]]+/g) || []), _0x5b5de0.slice(0, -1).reduce((_0xd1829f, _0x588243, _0x2db227) => Object(_0xd1829f[_0x588243]) === _0xd1829f[_0x588243] ? _0xd1829f[_0x588243] : _0xd1829f[_0x588243] = Math.abs(_0x5b5de0[_0x2db227 + 1]) >> 0 == +_0x5b5de0[_0x2db227 + 1] ? [] : {}, _0x209473)[_0x5b5de0[_0x5b5de0.length - 1]] = _0x30a4de, _0x209473);
    }
    getdata(_0x5f15a8) {
      let _0x4dccc5 = this.getval(_0x5f15a8);
      if (/^@/.test(_0x5f15a8)) {
        const [, _0x2bf49a, _0x54bd31] = /^@(.*?)\.(.*?)$/.exec(_0x5f15a8),
          _0x601083 = _0x2bf49a ? this.getval(_0x2bf49a) : "";
        if (_0x601083) {
          try {
            const _0x41a35c = JSON.parse(_0x601083);
            _0x4dccc5 = _0x41a35c ? this.lodash_get(_0x41a35c, _0x54bd31, "") : _0x4dccc5;
          } catch (_0x37fcff) {
            _0x4dccc5 = "";
          }
        }
      }
      return _0x4dccc5;
    }
    setdata(_0xde6b3, _0x3e9bdf) {
      let _0x34c71 = !1;
      if (/^@/.test(_0x3e9bdf)) {
        const [, _0x1b842e, _0x381c38] = /^@(.*?)\.(.*?)$/.exec(_0x3e9bdf),
          _0x340120 = this.getval(_0x1b842e),
          _0x4b0528 = _0x1b842e ? "null" === _0x340120 ? null : _0x340120 || "{}" : "{}";
        try {
          const _0x299f8e = JSON.parse(_0x4b0528);
          this.lodash_set(_0x299f8e, _0x381c38, _0xde6b3);
          _0x34c71 = this.setval(JSON.stringify(_0x299f8e), _0x1b842e);
        } catch (_0x381745) {
          const _0x22e96d = {};
          this.lodash_set(_0x22e96d, _0x381c38, _0xde6b3);
          _0x34c71 = this.setval(JSON.stringify(_0x22e96d), _0x1b842e);
        }
      } else {
        _0x34c71 = this.setval(_0xde6b3, _0x3e9bdf);
      }
      return _0x34c71;
    }
    getval(_0x527c41) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x527c41) : this.isQuanX() ? $prefs.valueForKey(_0x527c41) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x527c41]) : this.data && this.data[_0x527c41] || null;
    }
    setval(_0x3e3699, _0x34e786) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x3e3699, _0x34e786) : this.isQuanX() ? $prefs.setValueForKey(_0x3e3699, _0x34e786) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x34e786] = _0x3e3699, this.writedata(), !0) : this.data && this.data[_0x34e786] || null;
    }
    initGotEnv(_0x9498f7) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x9498f7 && (_0x9498f7.headers = _0x9498f7.headers ? _0x9498f7.headers : {}, void 0 === _0x9498f7.headers.Cookie && void 0 === _0x9498f7.cookieJar && (_0x9498f7.cookieJar = this.ckjar));
    }
    get(_0x4757e4, _0x581990 = () => {}) {
      const _0x2a7c53 = {
        "X-Surge-Skip-Scripting": !1
      };
      const _0xbf37cb = {
        hints: !1
      };
      _0x4757e4.headers && (delete _0x4757e4.headers["Content-Type"], delete _0x4757e4.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x4757e4.headers = _0x4757e4.headers || {}, Object.assign(_0x4757e4.headers, _0x2a7c53)), $httpClient.get(_0x4757e4, (_0xdc9116, _0x287438, _0x6f151) => {
        !_0xdc9116 && _0x287438 && (_0x287438.body = _0x6f151, _0x287438.statusCode = _0x287438.status);
        _0x581990(_0xdc9116, _0x287438, _0x6f151);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x4757e4.opts = _0x4757e4.opts || {}, Object.assign(_0x4757e4.opts, _0xbf37cb)), $task.fetch(_0x4757e4).then(_0x30ee2c => {
        const {
            statusCode: _0x576e37,
            statusCode: _0x313ce4,
            headers: _0x5f140b,
            body: _0x3cd7ff
          } = _0x30ee2c,
          _0x8cb54b = {
            status: _0x576e37,
            statusCode: _0x313ce4,
            headers: _0x5f140b,
            body: _0x3cd7ff
          };
        _0x581990(null, _0x8cb54b, _0x3cd7ff);
      }, _0xf6af8e => _0x581990(_0xf6af8e))) : this.isNode() && (this.initGotEnv(_0x4757e4), this.got(_0x4757e4).on("redirect", (_0x447f33, _0x421395) => {
        try {
          if (_0x447f33.headers["set-cookie"]) {
            const _0x5de0e9 = _0x447f33.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(_0x5de0e9, null);
            _0x421395.cookieJar = this.ckjar;
          }
        } catch (_0x23554b) {
          this.logErr(_0x23554b);
        }
      }).then(_0x5c6842 => {
        const {
            statusCode: _0x21693b,
            statusCode: _0x190fa5,
            headers: _0x309587,
            body: _0x47b686
          } = _0x5c6842,
          _0x2d6b45 = {
            status: _0x21693b,
            statusCode: _0x190fa5,
            headers: _0x309587,
            body: _0x47b686
          };
        _0x581990(null, _0x2d6b45, _0x47b686);
      }, _0x5d1042 => {
        const {
          message: _0x242f86,
          response: _0x29b058
        } = _0x5d1042;
        _0x581990(_0x242f86, _0x29b058, _0x29b058 && _0x29b058.body);
      }));
    }
    post(_0x3950b9, _0xfbadb5 = () => {}) {
      const _0x346572 = {
        "X-Surge-Skip-Scripting": !1
      };
      const _0x560782 = {
        hints: !1
      };
      if (_0x3950b9.body && _0x3950b9.headers && !_0x3950b9.headers["Content-Type"] && (_0x3950b9.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x3950b9.headers && delete _0x3950b9.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x3950b9.headers = _0x3950b9.headers || {}, Object.assign(_0x3950b9.headers, _0x346572));
        $httpClient.post(_0x3950b9, (_0x39a0e5, _0x570e66, _0x942311) => {
          !_0x39a0e5 && _0x570e66 && (_0x570e66.body = _0x942311, _0x570e66.statusCode = _0x570e66.status);
          _0xfbadb5(_0x39a0e5, _0x570e66, _0x942311);
        });
      } else {
        if (this.isQuanX()) {
          _0x3950b9.method = "POST";
          this.isNeedRewrite && (_0x3950b9.opts = _0x3950b9.opts || {}, Object.assign(_0x3950b9.opts, _0x560782));
          $task.fetch(_0x3950b9).then(_0x846c1 => {
            const {
                statusCode: _0xb96fe0,
                statusCode: _0x1aeabe,
                headers: _0x4895a1,
                body: _0x2f031d
              } = _0x846c1,
              _0x551bb6 = {
                status: _0xb96fe0,
                statusCode: _0x1aeabe,
                headers: _0x4895a1,
                body: _0x2f031d
              };
            _0xfbadb5(null, _0x551bb6, _0x2f031d);
          }, _0xabb242 => _0xfbadb5(_0xabb242));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x3950b9);
            const {
              url: _0xe1956d,
              ..._0x468012
            } = _0x3950b9;
            this.got.post(_0xe1956d, _0x468012).then(_0x290376 => {
              const {
                  statusCode: _0x166030,
                  statusCode: _0x2c611e,
                  headers: _0x4809fd,
                  body: _0x3aeae3
                } = _0x290376,
                _0x29c40f = {
                  status: _0x166030,
                  statusCode: _0x2c611e,
                  headers: _0x4809fd,
                  body: _0x3aeae3
                };
              _0xfbadb5(null, _0x29c40f, _0x3aeae3);
            }, _0x4f4135 => {
              const {
                message: _0x10ba95,
                response: _0x20b954
              } = _0x4f4135;
              _0xfbadb5(_0x10ba95, _0x20b954, _0x20b954 && _0x20b954.body);
            });
          }
        }
      }
    }
    time(_0x55842f) {
      let _0x43f1c5 = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "H+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(_0x55842f) && (_0x55842f = _0x55842f.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x465c8c in _0x43f1c5) new RegExp("(" + _0x465c8c + ")").test(_0x55842f) && (_0x55842f = _0x55842f.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x43f1c5[_0x465c8c] : ("00" + _0x43f1c5[_0x465c8c]).substr(("" + _0x43f1c5[_0x465c8c]).length)));
      return _0x55842f;
    }
    msg(_0x5dadc2 = _0x5f3bd7, _0x53e3c6 = "", _0x66c263 = "", _0x42e2a8) {
      const _0x3d8b8b = _0x3f9dda => {
        if (!_0x3f9dda) {
          return _0x3f9dda;
        }
        if ("string" == typeof _0x3f9dda) {
          return this.isLoon() ? _0x3f9dda : this.isQuanX() ? {
            "open-url": _0x3f9dda
          } : this.isSurge() ? {
            url: _0x3f9dda
          } : void 0;
        }
        if ("object" == typeof _0x3f9dda) {
          if (this.isLoon()) {
            let _0x132893 = _0x3f9dda.openUrl || _0x3f9dda.url || _0x3f9dda["open-url"],
              _0xf98b82 = _0x3f9dda.mediaUrl || _0x3f9dda["media-url"];
            const _0xd3f88c = {
              openUrl: _0x132893,
              mediaUrl: _0xf98b82
            };
            return _0xd3f88c;
          }
          if (this.isQuanX()) {
            let _0x28189f = _0x3f9dda["open-url"] || _0x3f9dda.url || _0x3f9dda.openUrl,
              _0x5884e5 = _0x3f9dda["media-url"] || _0x3f9dda.mediaUrl;
            const _0x334476 = {
              "open-url": _0x28189f,
              "media-url": _0x5884e5
            };
            return _0x334476;
          }
          if (this.isSurge()) {
            let _0x348512 = _0x3f9dda.url || _0x3f9dda.openUrl || _0x3f9dda["open-url"];
            const _0xc3509d = {
              url: _0x348512
            };
            return _0xc3509d;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x5dadc2, _0x53e3c6, _0x66c263, _0x3d8b8b(_0x42e2a8)) : this.isQuanX() && $notify(_0x5dadc2, _0x53e3c6, _0x66c263, _0x3d8b8b(_0x42e2a8)));
      let _0x2df03e = ["", "==============📣系统通知📣=============="];
      _0x2df03e.push(_0x5dadc2);
      _0x53e3c6 && _0x2df03e.push(_0x53e3c6);
      _0x66c263 && _0x2df03e.push(_0x66c263);
      console.log(_0x2df03e.join("\n"));
      this.logs = this.logs.concat(_0x2df03e);
    }
    log(..._0x57138f) {
      _0x57138f.length > 0 && (this.logs = [...this.logs, ..._0x57138f]);
      console.log(_0x57138f.join(this.logSeparator));
    }
    logErr(_0x157182, _0x3eb81b) {
      const _0x3d49d3 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x3d49d3 ? this.log("", "❗️" + this.name + ", 错误!", _0x157182.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x157182);
    }
    wait(_0x1de160) {
      return new Promise(_0x510aa4 => setTimeout(_0x510aa4, _0x1de160));
    }
    done(_0x487930 = {}) {
      const _0x2510d4 = new Date().getTime(),
        _0x2f5615 = (_0x2510d4 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x2f5615 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x487930);
    }
  }(_0x5f3bd7, _0x4cf6a4);
}