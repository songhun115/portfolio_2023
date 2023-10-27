var agent = window.navigator.userAgent.toLowerCase();
var appName = window.navigator.appName.toLowerCase();

if((appName === 'netscape' && agent.indexOf('trident')!== -1) || agent.indexOf('msie') !== -1) {
	// if(confirm("�꾩옱 �섏씠吏��� �명꽣�룹씡�ㅽ뵆濡쒕윭(IE)釉뚮씪�곗�瑜� 吏��먰븯吏� �딆뒿�덈떎. " +
	// 	"�щ＼ �뱀� �ｌ�釉뚮씪�곗��먯꽌 �뺤긽�곸쑝濡� �묐룞�⑸땲��. �대떦 釉뚮씪�곗�濡� �대룞�섏떆寃좎뒿�덇퉴?")) {
	// 	window.location = "microsoft-edge:" + window.location.href;
	// }
	window.location = window.location.origin + '/not-support.html';
} else {
	console.log('browser support', window.navigator);
}