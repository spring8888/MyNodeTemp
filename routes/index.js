var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    //数据
    var data = {
        title: '国内要闻',
        time: (new Date).toString(),
        list: [
            {
                id: '1',
                name: '张三'
            },
            {
                id: '2',
                name: '李四'
            }
        ]
    };

    //渲染模板
    res.render('index', data);
    //res.render('index', { title: 'Express' });
});

router.get('/main', function (req, res) {
    res.render('main', {});
});

router.get('/main_index', function (req, res) {
    res.render('main_index', {});
});

router.get('/login', function (req, res) {
    res.render('index', {});
});

router.post('/login', function (req, res) {
    res.redirect('/');
});

router.get('/logout', function (req, res) {
    res.render('index', data);
});

/* upload page. */
router.post('/upload', function (req, res) {
    //for (var i in req.files) {
    //    if (req.files[i].size == 0) {
    //        // 使用同步方式删除一个文件
    //        fs.unlinkSync(req.files[i].path);
    //        console.log('Successfully removed an empty file!');
    //    } else {
    //        var target_path = './public/images/' + req.files[i].name;
    //        // 使用同步方式重命名一个文件
    //        fs.renameSync(req.files[i].path, target_path);
    //        console.log('Successfully renamed a file!');
    //    }
    //}
    req.flash('success', '文件上传成功!');
    res.redirect('/upload');
});

module.exports = router;
