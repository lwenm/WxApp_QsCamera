import {
  HTTP
}
from '../util/http.js'
const util = require('../util/util.js');
const md5 = require('../util/md5.js')

class RecordModel extends HTTP {
  async CreateBorrowRecord(VideoChoosed_list, PhotographyChoosed_list, StartDate, StartTime, EndDate, EndTime, Purpose, BorrowManInfo) {
    return await this.request({
      name: "CreateBorrowRecord",
      data: {
        VideoChoosed_list,
        PhotographyChoosed_list,
        StartDate,
        StartTime,
        EndDate,
        EndTime,
        Purpose,
        BorrowManInfo
      }
    })
  }
  async GetMyRecord(_openid){
    const temp = await this.request({
      name: "GetMyRecord",
      data: {
        _openid:_openid
      }
    })
    return temp.result.data
  }

  async ReturnRecord(_id){
    console.log(_id)
    const temp = await this.request({
      name: "ReturnRecord",
      data: {
        _id:_id
      }
    })
    return temp.result.data
  }

  async GetAllRecord_NotBack(){
    const temp = await this.request({
      name: "GetAllRecord_NotBack",
      data: {
        
      }
    })
    return temp.result.data
  }

  async GetAllRecord(){
    const temp = await this.request({
      name: "GetAllRecord",
      data: {
      }
    })
    return temp.result.data.reverse()
  }

  async GetRecord_Some(start,limit,type){
    let Dater = [];
    if(type=="week"){
      Dater = util.getOneweekdate(new Date());
    }else if(type=="month"){
      Dater = util.getOnemonthdate(new Date());
    }else if(type=="all"){
      Dater = ["2020-01-01"]
    }
    console.log("Dater",Dater)
    console.log(start,limit)
    var StartDate = Dater[0]
    console.log(StartDate)
    const temp = await this.request({
      name: "GetRecord_Some",
      data: {
        start:start,
        limit:limit,
        StartDate:StartDate
      }
    })
    console.log(temp)
    return temp.result.data
  }
}

export {
  RecordModel
}