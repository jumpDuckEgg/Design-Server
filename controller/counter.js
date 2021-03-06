const counterModel = require('../model/counter.js');

const init = async () => {
    await counterModel.findOne({ couterType: 'user' }, (err, res) => {
        if (!res) {
            let courseEntity = new counterModel({
                couterType: 'user',
                couterNum: 0
            });
            courseEntity.save((res) => {
                console.log("用户计数器初始化成功")
            })
        }
    })
    await counterModel.findOne({ couterType: 'course' }, (err, res) => {
        if (!res) {
            let courseEntity = new counterModel({
                couterType: 'course',
                couterNum: 0
            });
            courseEntity.save((res) => {
                console.log("课程计数器初始化成功")
            })
        }
    })
    await counterModel.findOne({ couterType: 'courseware' }, (err, res) => {
        if (!res) {
            let courseEntity = new counterModel({
                couterType: 'courseware',
                couterNum: 0
            });
            courseEntity.save((res) => {
                console.log("课件计数器初始化成功")
            })
        }
    })
    await counterModel.findOne({ couterType: 'video' }, (err, res) => {
        if (!res) {
            let courseEntity = new counterModel({
                couterType: 'video',
                couterNum: 0
            });
            courseEntity.save((res) => {
                console.log("视频计数器初始化成功")
            })
        }
    })
    await counterModel.findOne({ couterType: 'experiment' }, (err, res) => {
        if (!res) {
            let courseEntity = new counterModel({
                couterType: 'experiment',
                couterNum: 0
            });
            courseEntity.save((res) => {
                console.log("实验计数器初始化成功")
            })
        }
    })
    await counterModel.findOne({ couterType: 'homework' }, (err, res) => {
        if (!res) {
            let courseEntity = new counterModel({
                couterType: 'homework',
                couterNum: 0
            });
            courseEntity.save((res) => {
                console.log("习题作业计数器初始化成功")
            })
        }
    })
    await counterModel.findOne({ couterType: 'test' }, (err, res) => {
        if (!res) {
            let courseEntity = new counterModel({
                couterType: 'test',
                couterNum: 0
            });
            courseEntity.save((res) => {
                console.log("模拟试题计数器初始化成功")
            })
        }
    })
    await counterModel.findOne({ couterType: 'onlineTest' }, (err, res) => {
        if (!res) {
            let courseEntity = new counterModel({
                couterType: 'onlineTest',
                couterNum: 0
            });
            courseEntity.save((res) => {
                console.log("在线测试计数器初始化成功")
            })
        }
    })
    await counterModel.findOne({ couterType: 'comment' }, (err, res) => {
        if (!res) {
            let courseEntity = new counterModel({
                couterType: 'comment',
                couterNum: 0
            });
            courseEntity.save((res) => {
                console.log("评论计数器初始化成功")
            })
        }
    })
    await counterModel.findOne({ couterType: 'moniTest' }, (err, res) => {
        if (!res) {
            let courseEntity = new counterModel({
                couterType: 'moniTest',
                couterNum: 0
            });
            courseEntity.save((res) => {
                console.log("模拟试题计数器初始化成功")
            })
        }
    })
    await counterModel.findOne({ couterType: 'moniExam' }, (err, res) => {
        if (!res) {
            let courseEntity = new counterModel({
                couterType: 'moniExam',
                couterNum: 0
            });
            courseEntity.save((res) => {
                console.log("模拟试卷计数器初始化成功")
            })
        }
    })
}

const getNextCounterNum = (counterType) => {
    let query = { 'couterType': counterType };
    let update = { $inc: { couterNum: 1 } };
    let options = { new: true };
    return new Promise((resolve, reject) => {
        counterModel.findOneAndUpdate(query, update, options, (err, doc) => {
            if (err) {
                reject(err)
            }
            resolve(doc);
        });
    })
}

module.exports = {
    init,
    getNextCounterNum
}