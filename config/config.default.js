/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
    * built-in config
    * @type {Egg.EggAppConfig}
    **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1660810955000_2288';

  // add your middleware config here
  config.middleware = [ 'onError' ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.redis = {
    client: {
      port: 6379, // Redis port
      host: '127.0.0.1', // Redis host
      password: '',
      db: 0,
    },
  };

  // 正式项目要开启
  config.security = {
    csrf: {
		    enable: false,
    },
  };

  // 公众号配置
  config.wx = {
    appId: 'wx5bd15a717be574b2',
    appSecret: 'c27976e32a4c75e0ae80b28341c63c0a',
    token: 'junetext',
    template_id: 'IDoqJ_k8fW5du-z2ws_WYsswVZytCHi6JqX_s3DGZFA', // 推送的模板id
    user: 'oIXnO6l7KSI_yc-hmXikTN5kASCI', // 测试号里的用户微信号
  };

  config.userData = {
    mineBirth: '2001-05-05', // 自己的生日
    gfBirth: '2001-04-07', // 女朋友的生日
    loveDay: '2001-02-07', // 在一起的日期
    city: '菏泽', // 获取天气使用
  };

  // 第三方
  config.apiConfig = {
    // 我申请的天行的appKey 最好自己申请, 次数超了大家都用不了()
    tianxing: {
      appKey: 'bcaddf1605dd53c3115c5a709082ac6f',
    },
    // 青云客傻瓜ai聊天
    aiChat: {
      key: 'free',
      appid: '0',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
