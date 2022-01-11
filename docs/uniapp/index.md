# uniapp
UniApp 小程序脱离HBuilderX打包wgt实践。

项目根目录下添加`scripts`文件夹,创建`appBuild.js`

##### 命令工具中  node scripts/appBuild.js 

举个例子
```
//举个例子
"build:wtg": "cross-env NODE_ENV=production UNI_PLATFORM=app-plus vue-cli-service uni-build --mode dev && node scripts/appBuild.js"
```

`appBuild.js`
```javascript
const JSZIP = require('jszip')
const fs = require('fs')
const path = require('path')
const { isBinaryFileSync } = require('isbinaryfile')

const zip = new JSZIP()
const context = process.cwd()
const appContext = path.join(context, 'dist/build/app-plus')

// 读取目录及文件
function readDir(dir, parent, isFirst = false) {
    const files = fs.readdirSync(dir)
    files.forEach(fileName => {
        const fullPath = `${dir}/${fileName}`
        // fullPath 是文件绝对路径 zipFileName 是打包时放在 zip 中的名字
        const zipFileName = isFirst ? fileName : `${parent}/${fileName}`

        if (fs.lstatSync(fullPath).isDirectory()) {
            readDir(fullPath, zipFileName)
        } else {
            const content = isBinaryFileSync(fullPath)
                ? fs.readFileSync(fullPath)
                : fs.readFileSync(fullPath, 'utf-8')

            zip.file(zipFileName, content)
        }
    })
}

function getAPPID() {
    let pkg
    try {
        pkg = JSON.parse(fs.readFileSync(path.join(context, 'src/manifest.json'), 'utf-8'))
    } catch (error) {
        return 'appid'
    }

    return pkg.appid
}

console.log('start building wgt...')

readDir(appContext, '', true)

zip
.generateAsync({ // 设置压缩格式，开始打包
    type: 'nodebuffer', // nodejs用
    compression: 'DEFLATE', // 压缩算法
    compressionOptions: { // 压缩级别
        level: 9,
    },
})
.then(content => {
    fs.writeFileSync(path.join(appContext, `../${getAPPID()}.wgt`), content)
    console.log('wgt build done.')
})
.catch(err => {
    throw new Error(err)
})

```