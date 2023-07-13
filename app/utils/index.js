export  function addOrUpdateUrlParam(uri, paramKey, paramVal) {
    var re = new RegExp("([?&])" + paramKey + "=[^&#]*", "i");
    if (re.test(uri)) {
      uri = uri.replace(re, '$1' + paramKey + "=" + paramVal);
    } else {
      var separator = /\?/.test(uri) ? "&" : "?";
      uri = uri + separator + paramKey + "=" + paramVal;
    }
    return uri;
  }

  
  export function removeURLParameter(param, url) {
    url = decodeURI(url).split("?");
    let path = url.length == 1 ? "" : url[1];
    path = path.replace(new RegExp("&?" + param + "\\[\\d*\\]=[\\w]+", "g"), "");
    path = path.replace(new RegExp("&?" + param + "=[\\w]+", "g"), "");
    path = path.replace(/^&/, "");
    return url[0] + (path.length ?
        "?" + path :
        "");
}


export function formatcurrency(amount) {
  let value = 0;
  if (amount >= 100000000) {
      value = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GHS', notation: 'compact' }).format(amount)
  } else {
      value = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'GHS' }).format(amount)
  }

  return value
}
export function formatnumber(num) {
  if (typeof(Number(num)) !== 'number') {
      return 0
  }
  let value = 0;
  if (num >= 100000000) {
      value = new Intl.NumberFormat('en-US', { notation: 'compact' }).format(num)
  } else {
      value = new Intl.NumberFormat('en-US').format(num)
  }

  return value
}