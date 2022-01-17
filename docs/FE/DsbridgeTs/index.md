```javascript
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
/* eslint-disable no-alert */
/* eslint-disable no-undef */

declare const window: any
// https://github.com/wendux/DSBridge-Android/blob/master/app/src/main/assets/dsbridge.js
const bridge: any = {
    // default: this, // for typescript
    call(method: any, args?: any, cb?: any) {
        let ret = '' as any
        if (typeof args == 'function') {
            cb = args
            args = {}
        }
        let arg: any = { data: args === undefined ? null : args }
        if (typeof cb == 'function') {
            let cbName = 'dscb' + window.dscb++
            window[cbName] = cb
            arg._dscbstub = cbName
        }
        arg = JSON.stringify(arg)

        // if in webview that dsBridge provided, call!
        if (window && window._dsbridge) {
            ret = window._dsbridge.call(method, arg)
        } else if ((window && window._dswk) || (window && navigator.userAgent.indexOf('_dsbridge') != -1)) {
            ret = prompt('_dsbridge=' + method, arg)
        }

        return JSON.parse(ret || '{}').data
    },
    register(name: any, fun: any, asyn: any) {
        let q = asyn ? window._dsaf : window._dsf
        if (!window._dsInit) {
            window._dsInit = true
            // notify native that js apis register successfully on next event loop
            setTimeout(() => {
                bridge.call('_dsb.dsinit')
            }, 0)
        }
        if (typeof fun == 'object') {
            q._obs[name] = fun
        } else {
            q[name] = fun
        }
    },
    registerAsyn(name: any, fun: any) {
        this.register(name, fun, true)
    },
    hasNativeMethod(name: any, type: any) {
        return this.call('_dsb.hasNativeMethod', { name, type: type || 'all' })
    },
    disableJavascriptDialogBlock(disable: any) {
        this.call('_dsb.disableJavascriptDialogBlock', {
            disable: disable !== false,
        })
    },
};

(function () {
    if (typeof window == 'undefined' || window._dsf) return
    let _close = window.close
    let ob: any = {
        // 保存JS同步方法
        _dsf: {
            _obs: {},
        },
        // 保存JS异步方法
        _dsaf: {
            _obs: {},
        },
        dscb: 0,
        dsBridge: bridge,
        close() {
            if (bridge.hasNativeMethod('_dsb.closePage')) {
                bridge.call('_dsb.closePage')
            } else {
                _close.call(window)
            }
        },
        _handleMessageFromNative(info: any) {
            let arg = JSON.parse(info.data)
            let ret: any = {
                id: info.callbackId,
                complete: true,
            }
            let f = this._dsf[info.method]
            let af = this._dsaf[info.method]
            let callSyn = function (f: any, ob: any) {
                ret.data = f.apply(ob, arg)
                bridge.call('_dsb.returnValue', ret)
            }
            let callAsyn = function (f: any, ob: any) {
                arg.push((data: any, complete: any) => {
                    ret.data = data
                    ret.complete = complete !== false
                    bridge.call('_dsb.returnValue', ret)
                })
                f.apply(ob, arg)
            }
            if (f) {
                callSyn(f, this._dsf)
            } else if (af) {
                callAsyn(af, this._dsaf)
            } else {
                // with namespace
                let name = info.method.split('.')
                if (name.length < 2) return
                let method = name.pop()
                let namespace = name.join('.')
                let obs = this._dsf._obs
                let ob = obs[namespace] || {}
                let m = ob[method]
                if (m && typeof m == 'function') {
                    callSyn(m, ob)
                    return
                }
                obs = this._dsaf._obs
                ob = obs[namespace] || {}
                m = ob[method]
                if (m && typeof m == 'function') {
                    callAsyn(m, ob)
                }
            }
        },
    }
    for (let attr in ob) {
        window[attr] = ob[attr]
    }

    bridge.register('_hasJavascriptMethod', (method: any, tag: any) => {
        console.log(tag)
        let name = method.split('.')
        if (name.length < 2) {
            return !!(window._dsf[name] || window._dsaf[name])
        }
        // with namespace
        method = name.pop()
        let namespace = name.join('.')
        let ob = window._dsf._obs[namespace] || window._dsaf._obs[namespace]
        return ob && !!ob[method]
    })
}())

export default bridge
```