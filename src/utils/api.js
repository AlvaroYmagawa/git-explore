function ResponseException(message) {
  this.message = message;
  this.name = 'ResponseException';
}

export const validResponseStatus = status => {
  if (Number(status) >= 200 && Number(status) <= 300) return true;

  throw new ResponseException('Invalid status response');
};