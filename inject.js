var pathName = ''
var field = ''
var animeName = ''
var hrf = ''
var str1 = '<div class="block"><a class="b-link_button dark watch-online" href="'
var str2 = '">Смотреть онлайн</a></div>'
var placeholder = null

setInterval(function () {
  pathName = window.location.pathname.substr(1)
  if (pathName.indexOf('/') != -1) {
    field = pathName.substr(0, pathName.indexOf('/'))
    animeName = pathName.substr(pathName.indexOf('/') + 1)
  }
  if (field == 'animes' && isNormalInteger(animeName.substr(0, 1))) {
    showPlayButton()
  }
}, 1000)

function showPlayButton() {
  placeholder = $('.watch-online-placeholer')
  if (placeholder.length == 1 && placeholder.children().length == 0) {
    hrf = '//play.shikimori.org/' + pathName + '/video_online/1'
    placeholder.append(str1 + hrf + str2)
  }
}

function isNormalInteger(str) {
  var n = Math.floor(Number(str))
  return String(n) === str && n >= 0
}