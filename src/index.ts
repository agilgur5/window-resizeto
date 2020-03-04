export function resizeTo (windowObj: any, width: number, height: number): void {
  Object.assign(windowObj, {
    innerWidth: width,
    innerHeight: height,
    outerWidth: width,
    outerHeight: height
  }).dispatchEvent(new windowObj.Event('resize'))
}
