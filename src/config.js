module.exports = {
  // 运力接口配置
  capacityConfig: {
    method: "POST",
    url: "https://maicai.api.ddxq.mobi/order/getMultiReserveTime",
    headers: {
      Host: "maicai.api.ddxq.mobi",
      Cookie: "DDXQSESSID=02d1965a7124888762d35312c8e4f803",
      "ddmc-os-version": "[object Undefined]",
      "ddmc-city-number": "0101",
      referer:
        "https://servicewechat.com/wx1e113254eda17715/425/page-frame.html",
      "user-agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac",
      "ddmc-api-version": "9.50.0",
      "ddmc-build-version": "2.83.0",
      "ddmc-longitude": "121.394269",
      "ddmc-latitude": "31.210776",
      "ddmc-app-client-id": "4",
      "ddmc-uid": "624af0d3845f80000111e07e",
      "accept-language": "zh-cn",
      "ddmc-channel": "applet",
      "ddmc-device-id": "osP8I0fSZ786LXa70fjVC7ZSgBUw",
      accept: "*/*",
      "content-type": "application/x-www-form-urlencoded",
      "ddmc-time": "1650250722",
      "ddmc-station-id": "59e5bf6f916edf997a8f8f2e",
      "ddmc-ip": "",
    },
    form: {
      // 参数 替换成自己抓包的
      uid: "624af0d3845f80000111e07e",
      longitude: "121.394269",
      latitude: "31.210776",
      station_id: "59e5bf6f916edf997a8f8f2e",
      city_number: "0101",
      api_version: "9.49.2",
      app_version: "2.82.0",
      applet_source: "",
      channel: "applet",
      app_client_id: "4",
      sharer_uid: "",
      s_id: "02d1965a7124888762d35312c8e4f803",
      openid: "osP8I0fSZ786LXa70fjVC7ZSgBUw",
      h5_source: "",
      device_token:
        "WHJMrwNw1k/FKPjcOOgRd+NnNuQ4P+h2wfS1HvZMo0UW94bXzji33kplY1/yLDKe7o3NHLzIrCQmyzM3Sm+TB4tEtfEBmeKxFdCW1tldyDzmauSxIJm5Txg==1487582755342",
      address_id: "624af0f6902c1500015f6cce",
      group_config_id: "",
      products:
        '[[{"type":1,"id":"614d74bd30687977d98bf5e1","price":"9.90","count":1,"description":"","sizes":[],"cart_id":"614d74bd30687977d98bf5e1","parent_id":"","parent_batch_type":-1,"category_path":"","manage_category_path":"258,272,1092","activity_id":"","sku_activity_id":"","conditions_num":"","product_name":"叮咚大满冠传统腐竹 120g/袋","product_type":0,"small_image":"https://imgnew.ddimg.mobi/product/5dc8ecaa0c764fa4950749b6a967a4aa.jpg?width=800&height=800","total_price":"9.90","origin_price":"9.90","total_origin_price":"9.90","no_supplementary_price":"9.90","no_supplementary_total_price":"9.90","size_price":"0.00","buy_limit":0,"price_type":0,"promotion_num":0,"instant_rebate_money":"0.00","is_invoice":1,"sub_list":[],"is_booking":0,"is_bulk":0,"view_total_weight":"袋","net_weight":"120","net_weight_unit":"g","storage_value_id":3,"temperature_layer":"-18℃以下","sale_batches":{"batch_type":-1},"is_shared_station_product":0,"is_gift":0,"supplementary_list":[],"order_sort":28,"is_presale":0}]]',
      isBridge: "false",
      nars: "7a7d15889039141cde61a0d19d36ecce",
      sesi: "ZimDiZibfc8586c26ba5b3854d0393cdc10bfb9",
    },
  },
  barkId: 'KHJ8B2iw7YnQZbteBDk47W',
  startTime:{
    hour: 6,
    minute: 15,
  },
  endTime:{
    hour: 12,
    minute: 00,
  },
  frequency: '*/10 * * * * *'
};
