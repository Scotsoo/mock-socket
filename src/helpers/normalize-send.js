export default function normalizeSendData(data) {
  const protoType = Object.prototype.toString.call(data)
  if (
    protoType !== '[object Blob]' &&
    !(data instanceof ArrayBuffer) &&
    !Array.isArray(data) &&
    protoType !== '[object Object]'
    ) {
    data = String(data);
  }
  return data;
}
