const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    password: String,
    token: {
        unique: true,
        type: String
    },
    //  用户类型
    userType: {
        type: Number,
        default: 0
    },
    //  用户ID
    user_id: {
        type: Number
    },
    // 创建时间
    createdTime: {
        type: Date,
        default: new Date()
    },
    // 用户头像
    userImage: {
        type: String,
        default: 'http://qiniu.fangunbayadan.cn/none.png'
    },
    // 用户评论
    comments: {
        type: Array,
        default: []
    },
    // 收藏课程
    collections: {
        type: Array,
        default: []
    },
    // 禁用账号
    disUsed: {
        type: Boolean,
        default: false
    },
    // 禁用提示
    disUsedMessage: {
        type: String,
        default: ''
    }
})
const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel;