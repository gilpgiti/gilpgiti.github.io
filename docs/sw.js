/// <reference lib="webworker" />

/* Espera 11 minutos después de hacer los cambios en tu sitio, para depués
 * actualizar este archivo. */

const CACHE = "cache"

const VERSION = "4.11"

const ARCHIVOS = [
  "/favicon.ico",
   "/img/icono/160x30.png",
   "/img/icono/160x30.webp",
   "/img/icono/80x15.png",
   "/img/icono/icono2048.png",
   "/img/icono/maskable_icon.png",
   "/img/icono/maskable_icon_x128.png",
   "/img/icono/maskable_icon_x192.png",
   "/img/icono/maskable_icon_x384.png",
   "/img/icono/maskable_icon_x48.png",
   "/img/icono/maskable_icon_x512.png",
   "/img/icono/maskable_icon_x72.png",
   "/img/icono/maskable_icon_x96.png",
   "/img/m01Fundamentos/android-1080.webp",
   "/img/m01Fundamentos/android-640.webp",
   "/img/m01Fundamentos/compilador.svg",
   "/img/m01Fundamentos/fortnite-cube-assassin-boss-1920.webp",
   "/img/m01Fundamentos/fortnite-cube-assassin-boss-640.webp",
   "/img/m01Fundamentos/interprete.svg",
   "/img/m01Fundamentos/ios-1152.webp",
   "/img/m01Fundamentos/ios-640.webp",
   "/img/m01Fundamentos/macos-1152.webp",
   "/img/m01Fundamentos/macos-640.webp",
   "/img/m01Fundamentos/mxlinux-1200.webp",
   "/img/m01Fundamentos/mxlinux-640.webp",
   "/img/m01Fundamentos/pexels-andrea-piacquadio-3776817-1920.webp",
   "/img/m01Fundamentos/pexels-andrea-piacquadio-3776817-640.webp",
   "/img/m01Fundamentos/pexels-andrea-piacquadio-3781725-1920.webp",
   "/img/m01Fundamentos/pexels-andrea-piacquadio-3781725-640.webp",
   "/img/m01Fundamentos/pexels-bich-tran-1714341-1920.webp",
   "/img/m01Fundamentos/pexels-bich-tran-1714341-640.webp",
   "/img/m01Fundamentos/pexels-fabian-hurnaus-977296-1920.webp",
   "/img/m01Fundamentos/pexels-fabian-hurnaus-977296-640.webp",
   "/img/m01Fundamentos/pexels-ketut-subiyanto-4436291-1920.webp",
   "/img/m01Fundamentos/pexels-ketut-subiyanto-4436291-640.webp",
   "/img/m01Fundamentos/pexels-ketut-subiyanto-4545975-1920.webp",
   "/img/m01Fundamentos/pexels-ketut-subiyanto-4545975-640.webp",
   "/img/m01Fundamentos/pexels-manuel-geissinger-325229-1920.webp",
   "/img/m01Fundamentos/pexels-manuel-geissinger-325229-640.webp",
   "/img/m01Fundamentos/pexels-teona-swift-6912819-1920.webp",
   "/img/m01Fundamentos/pexels-teona-swift-6912819-640.webp",
   "/img/m01Fundamentos/pexels-the-lazy-artist-gallery-1170344-1920.webp",
   "/img/m01Fundamentos/pexels-the-lazy-artist-gallery-1170344-640.webp",
   "/img/m01Fundamentos/pexels-tima-miroshnichenko-6021573-1920.webp",
   "/img/m01Fundamentos/pexels-tima-miroshnichenko-6021573-640.webp",
   "/img/m01Fundamentos/teams-1920.webp",
   "/img/m01Fundamentos/teams-640.webp",
   "/img/m01Fundamentos/windows10-1920.webp",
   "/img/m01Fundamentos/windows10-640.webp",
   "/img/m01Fundamentos/winword-1920.webp",
   "/img/m01Fundamentos/winword-640.webp",
   "/img/m01Fundamentos/youtube-1920.webp",
   "/img/m01Fundamentos/youtube-640.webp",
   "/img/m02Conceptos/Cadena.svg",
   "/img/m02Conceptos/Eslabon.svg",
   "/img/m02Conceptos/pexels-lex-photography-1109543-1920.webp",
   "/img/m02Conceptos/pexels-lex-photography-1109543-640.webp",
   "/img/m02Conceptos/pexels-marek-levak-2265482-1920.webp",
   "/img/m02Conceptos/pexels-marek-levak-2265482-640.webp",
   "/img/m02Conceptos/pexels-pok-rie-1432673-1920.webp",
   "/img/m02Conceptos/pexels-pok-rie-1432673-640.webp",
   "/img/m02Conceptos/pexels-rfstudio-3825581-1920.webp",
   "/img/m02Conceptos/pexels-rfstudio-3825581-640.webp",
   "/img/m02Conceptos/pexels-tranmautritam-326514-1920.webp",
   "/img/m02Conceptos/pexels-tranmautritam-326514-640.webp",
   "/img/m02Conceptos/pexels-valentine-tanasovich-2588757-1920.webp",
   "/img/m02Conceptos/pexels-valentine-tanasovich-2588757-640.webp",
   "/img/m02Conceptos/winlogo.png",
   "/img/m04apoyo/Ejemplo.webp",
   "/",
   "/index.html",
   "/js/muestra-codigo.js",
   "/m01computadoras/",
   "/m01computadoras/index.html",
   "/m01computadoras/mAcomputadora.html",
   "/m01computadoras/mBtipos/",
   "/m01computadoras/mBtipos/index.html",
   "/m01computadoras/mBtipos/m1wearables.html",
   "/m01computadoras/mBtipos/m2asistentes.html",
   "/m01computadoras/mBtipos/m3arduino.html",
   "/m01computadoras/mBtipos/m4consolas.html",
   "/m01computadoras/mBtipos/m5celulares.html",
   "/m01computadoras/mBtipos/m6tablets.html",
   "/m01computadoras/mBtipos/m7laptops.html",
   "/m01computadoras/mBtipos/m8desktops.html",
   "/m01computadoras/mBtipos/m9servidores.html",
   "/m01computadoras/mBtipos/print.html",
   "/m01computadoras/mCresumen.html",
   "/m01computadoras/print.html",
   "/m02programas/",
   "/m02programas/index.html",
   "/m02programas/mAprograma.html",
   "/m02programas/mBoperativo.html",
   "/m02programas/mCoperativos/",
   "/m02programas/mCoperativos/index.html",
   "/m02programas/mCoperativos/m1android.html",
   "/m02programas/mCoperativos/m2windows.html",
   "/m02programas/mCoperativos/m3ios.html",
   "/m02programas/mCoperativos/m4macos.html",
   "/m02programas/mCoperativos/m5linux.html",
   "/m02programas/mCoperativos/print.html",
   "/m02programas/mDprogramas/",
   "/m02programas/mDprogramas/index.html",
   "/m02programas/mDprogramas/m1videojuegos.html",
   "/m02programas/mDprogramas/m2asistentes.html",
   "/m02programas/mDprogramas/m3oficina.html",
   "/m02programas/mDprogramas/m4sitios.html",
   "/m02programas/mDprogramas/m5videoconferencia.html",
   "/m02programas/mDprogramas/print.html",
   "/m02programas/mEresumen.html",
   "/m02programas/print.html",
   "/m03hardware/",
   "/m03hardware/index.html",
   "/m03hardware/mAhardware.html",
   "/m03hardware/mBarquitectura.html",
   "/m03hardware/mCmotherboard.html",
   "/m03hardware/mDmemoria.html",
   "/m03hardware/mEcpu.html",
   "/m03hardware/mFentrada.html",
   "/m03hardware/mGsalida.html",
   "/m03hardware/mHentradaSalida.html",
   "/m03hardware/mIresumen.html",
   "/m03hardware/print.html",
   "/m04software/",
   "/m04software/index.html",
   "/m04software/mAcomputadora.html",
   "/m04software/mBdispositivos/",
   "/m04software/mBdispositivos/index.html",
   "/m04software/mBdispositivos/m1wearables.html",
   "/m04software/mBdispositivos/m2asistentes.html",
   "/m04software/mBdispositivos/m3arduino.html",
   "/m04software/mBdispositivos/m4consolas.html",
   "/m04software/mBdispositivos/m5celulares.html",
   "/m04software/mBdispositivos/m6tablets.html",
   "/m04software/mBdispositivos/m7laptops.html",
   "/m04software/mBdispositivos/m8desktops.html",
   "/m04software/mBdispositivos/m9servidores.html",
   "/m04software/mBdispositivos/print.html",
   "/m04software/mCprograma.html",
   "/m04software/mDoperativo.html",
   "/m04software/mEoperativos/",
   "/m04software/mEoperativos/index.html",
   "/m04software/mEoperativos/m1android.html",
   "/m04software/mEoperativos/m2windows.html",
   "/m04software/mEoperativos/m3ios.html",
   "/m04software/mEoperativos/m4macos.html",
   "/m04software/mEoperativos/m5linux.html",
   "/m04software/mEoperativos/print.html",
   "/m04software/mFprogramas/",
   "/m04software/mFprogramas/index.html",
   "/m04software/mFprogramas/m1videojuegos.html",
   "/m04software/mFprogramas/m2asistentes.html",
   "/m04software/mFprogramas/m3oficina.html",
   "/m04software/mFprogramas/m4sitios.html",
   "/m04software/mFprogramas/m5videoconferencia.html",
   "/m04software/mFprogramas/print.html",
   "/m04software/mGhardware.html",
   "/m04software/mHarquitectura.html",
   "/m04software/mIsoftware.html",
   "/m04software/mJlenguaje.html",
   "/m04software/mKmaquina.html",
   "/m04software/mLcodigo.html",
   "/m04software/mMcompilador.html",
   "/m04software/mNinterprete.html",
   "/m04software/mOalgoritmo.html",
   "/m04software/mPresumen.html",
   "/m04software/print.html",
   "/m05textos/",
   "/m05textos/index.html",
   "/m05textos/mAmotherboard.html",
   "/m05textos/mBmemoria.html",
   "/m05textos/mCcpu.html",
   "/m05textos/mDentrada.html",
   "/m05textos/mEsalida.html",
   "/m05textos/mFentradaSalida.html",
   "/m05textos/mGcaracter.html",
   "/m05textos/mHtexto.html",
   "/m05textos/mIcodificacion.html",
   "/m05textos/mJresumen.html",
   "/m05textos/print.html",
   "/m06numeros/",
   "/m06numeros/index.html",
   "/m06numeros/mAnaturales.html",
   "/m06numeros/mBsuma.html",
   "/m06numeros/mCmultiplicacion.html",
   "/m06numeros/mDenteros.html",
   "/m06numeros/mEracionales.html",
   "/m06numeros/mFirracionales.html",
   "/m06numeros/mGrarezas.html",
   "/m06numeros/mHgodel.html",
   "/m06numeros/mInumber.html",
   "/m06numeros/mJresumen.html",
   "/m06numeros/print.html",
   "/m07nativas/",
   "/m07nativas/index.html",
   "/m07nativas/mAnativa.html",
   "/m07nativas/mBmultiplataforma.html",
   "/m07nativas/mCdiferencias.html",
   "/m07nativas/mDventajasNativas.html",
   "/m07nativas/mEdesventajasNativas.html",
   "/m07nativas/mFventajasMultiplataforma.html",
   "/m07nativas/mGdesventajasMultiplataforma.html",
   "/m07nativas/mHusoNativas.html",
   "/m07nativas/mIusoMulti.html",
   "/m07nativas/print.html",
   "/print.html",
   "/site.webmanifest" ]

if (self instanceof ServiceWorkerGlobalScope) {
 self.addEventListener("install", installListener)
 self.addEventListener("fetch", fetchListener)
 self.addEventListener("activate", () => console.log("Service Worker activo."))
}

/**
 * @param {ExtendableEvent} evt
 */
function installListener(evt) {
 console.log("Service Worker instalando.")
 evt.waitUntil(cargaCache());
}

/**
 * @param {FetchEvent} evt
 */
function fetchListener(evt) {
 if (evt.request.method === "GET") {
  evt.respondWith(usaCache(evt))
 }
}

async function cargaCache() {
 console.log("Intentando cargar cache:", CACHE)
 const keys = await caches.keys()
 for (const key of keys) {
  await caches.delete(key)
 }
 const cache = await caches.open(CACHE)
 await cache.addAll(ARCHIVOS)
 console.log("Cache cargado:", CACHE)
 console.log("Versión:", VERSION)
}

/**
 * @param {FetchEvent} evt
 */
async function usaCache(evt) {
 const cache = await caches.open(CACHE)
 const response = await cache.match(evt.request, { ignoreSearch: true })
 if (response) {
  return response
 } else {
  return fetch(evt.request)
 }
}