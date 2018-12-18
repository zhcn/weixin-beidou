const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const checkLocationDiff = (p1, p2) =>{
  if(Math.abs(p1.latitude-p2.latitude)< 0.000000001&&
    Math.abs(p1.longitude - p2.longitude) < 0.000000001){
      return false;
    }
    return true;
}

module.exports = {
  formatTime: formatTime,
  checkLocationDiff: checkLocationDiff
}
