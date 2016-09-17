'use strict'

const articleTable = 'l_article'
const tagsTable = 'l_tags'
const discussionTable = 'l_discussion'

//获取article列表
exports.getArticleList = function *() {
  let articleList = yield models[articleTable].findAndCountAll({
    attributes: { exclude: ['content'] }
  })
  
  articleList = JSON.parse(JSON.stringify(articleList))
  
  let discuss = yield models[discussionTable].findAll({
    attributes: ['articleId',[Sequelize.fn('COUNT', Sequelize.col('articleId')), 'articleIdCounts']],
    group: ['articleId']
  })
  console.log(JSON.stringify(discuss));
  discuss = JSON.parse(JSON.stringify(discuss))
  let discussionCnt = {}
  discuss.map(function(item){
    console.log(item);
    discussionCnt[item.articleId] = item.articleIdCounts
  })
  
  try {
    for(let article of articleList.rows) {
      let tagIds = JSON.parse(article.tagIds)
      article.tagIds = tagIds
      article['discussCount'] = discussionCnt[article.id] || 0
    }
    this.data = articleList
  } catch (e) {
    this.data = {'msg':'get articles failed!\nError message'+e}
  } 
}

//获取article内容
exports.getAticleById=function*(){
  let articleId = this.params.id 
  let articleInfo = yield models[articleTable].findById(articleId)
  // TODO: get discussions and gettags
  
  if(articleInfo){
    this.data = articleInfo
  }
  else{
    this.data = '404 not found!'
  }
}

//编辑article
exports.editArticle = function *() {
  
  let article = this.request.body.data
  try {
    article = JSON.parse(article)
  } catch (e) {
      console.log('err>>>',e);
  }
  
  let current_date = new Date()
  article.update_at = current_date
  
  let tags = article.tags
  let tagsList = yield models[tagsTable].findAndCountAll()
  let tagIds = []
  for(let tag of tags){
    let flag = false
    for(let item of tagsList.rows){
      if(tag == item.tagName){
        tagIds.push(item.id)
        flag = true
        break;
      }
    }
    if(!flag){
      let newTag = yield models[tagsTable].create({tagName:tag})
      tagIds.push(newTag.id)
    }
  }
  article.tagIds = JSON.stringify(tagIds)

  if(article.id){
    try {
      let res = yield models[articleTable].update(article,{where:{id:article.id}})
      if(res == 0){
        this.data = {'msg':'update failed!'}
      }
      else {
        this.data = res
      }
    } catch (e) {
      this.data = {'msg':'update failed!\nError message'+e}
    }
  }
  else{
    try {
      article.create_at = current_date
      let new_article = yield models[articleTable].create(article)
      this.data = new_article
    } catch (e) {
      this.data = {'msg':'created failed!\nError message'+e}
    }
  }
}

//create tags
exports.newTag = function *(){
  let tagName = this.request.body
  let new_tag = yield models[tagsTable].create(tagName)
  this.data = new_tag
}

//get tags
exports.getTags = function*(){
  try {
    let tagList = yield models[tagsTable].findAndCountAll()
    this.data = tagList
  } catch (e) {
    this.data = {'msg':'get tags failed\n Error Message：' + e}
  }
}

//create discussion
exports.newDiscussion = function*(){
  let disInfo = this.request.body
  
  let current_date = new Date()
  disInfo.create_at = current_date
  disInfo.update_at = current_date
  disInfo.IP = this.request.ip

  try {
    let new_discussion = yield models[discussionTable].create(disInfo)
    this.data = new_discussion
  } catch (e) {
    this.data = {'msg':'get tags failed\n Error Message：' + e}
  }
}

//get discussions
exports.getDiscussion = function *(){
  let articleId = this.params.articleId
  try {
    let discussions = yield models[discussionTable].findAndCountAll({where:{articleId:articleId}})
    if(discussions){
      this.data = discussions
    }
    else{
      this.data = []
    }
  } catch (e) {
    this.data = {'msg':'get discussions failed\n Error Message：' + e}
  }
}



exports.libraryIndex = function*(){
  this.response.body = 'hello ,this is my library'
}