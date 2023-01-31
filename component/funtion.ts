export function checkSpace(str: string) {
  if (str.search(/\s/) != -1) {
    return true;
  } else {
    return false;
  }
}

export function checkSpecial(str: string) {
  var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

  if (special_pattern.test(str) == true) {
    return true;
  } else {
    return false;
  }
}
