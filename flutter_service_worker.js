'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "00e0a28c115d8c141fb294923afad9ff",
"version.json": "fe8eafefa9254f47aa651451ecf14651",
"index.html": "bc41bea1c1eba01903193a7a64b2796a",
"/": "bc41bea1c1eba01903193a7a64b2796a",
"main.dart.js": "8165e89a773ebfd2904d825d04ffc839",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "946cded120674fc2dc184174af84a7e9",
"icons/Icon-192.png": "63343ada61c2f41d27f13a01e4eb01ab",
"icons/Icon-maskable-192.png": "63343ada61c2f41d27f13a01e4eb01ab",
"icons/Icon-maskable-512.png": "21e37165e5b2043de31c65280dd13008",
"icons/Icon-512.png": "21e37165e5b2043de31c65280dd13008",
"manifest.json": "ce3b1535d452b67e9bfc969a5da37252",
"assets/AssetManifest.json": "218387b2aed975e5562aad218fef8a42",
"assets/NOTICES": "10b0db86d712c2e66836fadfa5df161f",
"assets/FontManifest.json": "55c07c85e9c6106d75ee8843c6ddb848",
"assets/AssetManifest.bin.json": "13047bb8cb3a1e3df0e662c77d39a7ed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "af3641b52fcc078a7da1597f5687baa1",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/packages/vad/assets/models/silero_vad.onnx": "03da8de2fec4108a089b39f1b4abefef",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/src/ui/home/presentation/widgets/center_menu/widgets/my_messsage_widget.dart": "ba0be1e8a4cc9bb5bc13c5b61bbb78c8",
"assets/lib/src/ui/home/presentation/widgets/center_menu/widgets/chat_field_widget.dart": "271eb73651795da8694342d6bf6be48b",
"assets/lib/src/ui/home/presentation/widgets/center_menu/widgets/ai_message_widget.dart": "d0a59949b7c9740ea8eaec39b7fdfebf",
"assets/lib/src/ui/home/presentation/widgets/center_menu/widgets/microphone_widget.dart": "9cce25e422215534d7616e2b743cd002",
"assets/lib/src/ui/home/presentation/widgets/center_menu/widgets/track_history_widget.dart": "0d9f8f6a1ff3bee19878ea0ca9d3f1f9",
"assets/lib/src/ui/home/presentation/widgets/center_menu/widgets/track_bottom_widget.dart": "dc86132bcbcbdd92a6e664abad8b69b8",
"assets/AssetManifest.bin": "63ba309629cdfd135a0f02389a5e6d4a",
"assets/fonts/MaterialIcons-Regular.otf": "790aae1603276a96d5cb06887a49a8e5",
"assets/assets/images/chat_camera_image.svg": "13537106679ddfb3f23d43589ab93b53",
"assets/assets/images/logout_menu_logo.svg": "f8118c2d4eca2d12590332d94bfc6524",
"assets/assets/images/profile_delete.svg": "e729dfcff6235ff4f2aa5cd6e80830ae",
"assets/assets/images/travel_img.png": "7dc0dddfb8c5e161ab7833a79ab0f133",
"assets/assets/images/hotel_image_4.png": "c599b9ffeeaf511d71ab3979d2bf66aa",
"assets/assets/images/send_icon.svg": "cf1db0581239d02e74a40845ec8a4791",
"assets/assets/images/camera-gradient-icon.png": "6d75fc021c971e609ddb9b1d3b09e208",
"assets/assets/images/booking.png": "be437a3d4b4af342fbb56f449554cf82",
"assets/assets/images/ai_menu_logo.svg": "400177790ea2f9d324599a52423a1677",
"assets/assets/images/ai_sparkles.png": "24d767d341056cc7d11ee082b476016e",
"assets/assets/images/arrow.svg": "8786d1d3d9e542597fc666da5480e0f0",
"assets/assets/images/landing_flight.svg": "481882a0feea7494025ee1fc68aa1e22",
"assets/assets/images/hotel_image_3.png": "692a877fd40ff96f566d338c5e6dd65b",
"assets/assets/images/down_arrow_icon.svg": "214b8bd6998a08e17a49ffb0d3d43341",
"assets/assets/images/ic_right_arrow.svg": "3f841b8315988b0cbc051a76f6510c2a",
"assets/assets/images/chat_field_image.png": "d960d0767ad274dfcfca2a56e384eada",
"assets/assets/images/profile_user.svg": "65c52021d6a4500a4e32040fb010e25d",
"assets/assets/images/hotel_image_2.png": "e30c4778ee3bd72aae6795af6c408cd0",
"assets/assets/images/room_image.png": "4affd2de0732ab33c5e6fb55313f0ade",
"assets/assets/images/new_chat_icon.svg": "0434312d1d4f630dc4cb4ce50943b767",
"assets/assets/images/back_arrow_icon.svg": "eb16c31a2f487504aa91178b322e81b7",
"assets/assets/images/common_plus.svg": "66d54698d4d840792df8c56b8d6ca193",
"assets/assets/images/login_co_star_image.png": "5c47485ffcde2cf093da67e9e0c01529",
"assets/assets/images/common_close.svg": "01201d828832c85b4a8b5d2483fbde6d",
"assets/assets/images/calender.svg": "8457b79a87f7425795aceb8003034530",
"assets/assets/images/map.png": "826ff234736fd33cefc4003b096d3569",
"assets/assets/images/expand_icon.svg": "9a68c694a88eb42ca32a51cd228fdb6d",
"assets/assets/images/gradient_img.png": "ab1ba4cf873aa4e22e15122eaa030425",
"assets/assets/images/calling_camera.svg": "6cba3188a4452201a9b110e733fccc60",
"assets/assets/images/chat_refresh.svg": "2200f3a31dd06f1fec9aa999d31f7578",
"assets/assets/images/blur.png": "78975d1782657c1c873e7ecb6ea3e360",
"assets/assets/images/profile_tick.svg": "6d8b631d05cc068666f21dc503faf280",
"assets/assets/images/location_hollow.svg": "6901b557e6bf2aec68ff8d784cc4e247",
"assets/assets/images/navbar_icon.svg": "580a9f4bba126fdcb253eda603a86082",
"assets/assets/images/hotel_image.png": "2e4385a6fac5f3d124d9a242098dc064",
"assets/assets/images/chat_field_image.svg": "c2090dbb73440b927d4ed3129dc402d4",
"assets/assets/images/bg_image.png": "d638c93fd0d720eb95908c081e7be8d4",
"assets/assets/images/menu_icon.svg": "a28b60fbc2f3ef31a9d25d6d91d62379",
"assets/assets/images/arrow_up.svg": "42abcaedd5cade74e98c6fcad2b116ce",
"assets/assets/images/chat_images.dart": "a39d98af63a69adc7ea185daec4cbe44",
"assets/assets/images/ai_sparkles.svg": "b0e7d3cb3cec997f19e546c09039a807",
"assets/assets/images/flight_double_arrow.svg": "960544a1ba6f546a89208592579f11b5",
"assets/assets/images/map_mobile.png": "8ed4566a50236c76f5a63e41728036ac",
"assets/assets/images/common_up_arrow.svg": "1477165c1cff48422a5118965331537b",
"assets/assets/images/mic_fill.svg": "645eecdef352d70f3c526baeb76d4212",
"assets/assets/images/location_arrow.svg": "f5dd00987dd11391d0accc94c1c294d6",
"assets/assets/images/gallery_icon.svg": "421419c5f4aff9cb7efed3d6c461acb4",
"assets/assets/images/dotted_line.svg": "419648ce966b01ad1d7309b99a8437a2",
"assets/assets/images/bg_img.svg": "b3e0e9f3bd1b51e25447a05bb3a21272",
"assets/assets/images/avatar.png": "fc94fe588f66ac4bcb1e623fcec1ac3d",
"assets/assets/images/new_chat.svg": "bfc6386fce2d690b7947dcce8998e68a",
"assets/assets/images/common_down_arrow.svg": "e355e1512b102fe99c3d7bad77d5dd3a",
"assets/assets/images/collapse_icon.svg": "078ae7d9664f9bacd95adeac95ad55c3",
"assets/assets/images/uber-logo.svg": "aed85decc248dcb05dcce0d5554f15ce",
"assets/assets/images/multitask.png": "63b13be61cba9a034ccdbe4d482dff33",
"assets/assets/images/new_chat_menu_logo.svg": "ea756611f5f7f2467d5041454fc30887",
"assets/assets/images/grab-logo.svg": "c208ac0879639f1d1a57446246e1994b",
"assets/assets/images/profile_chat.svg": "538106558ee352055b30e5ca662b10ac",
"assets/assets/images/calling_mic_mute_enabled.svg": "5c25e0273aab834cdf87d104033a13d6",
"assets/assets/images/co_logo.svg": "0cbc4dbb4e73e4292845324b279f1b3f",
"assets/assets/images/cross_icon.svg": "ea26d652ed1badfbbaf2d66554e129ce",
"assets/assets/images/ai_logo_image.svg": "9e51334b258ab99cf84fdcae2895dc34",
"assets/assets/images/kids_icon.svg": "76a11c90bd5605004fd2f1ae0486fbdd",
"assets/assets/images/male_icon.svg": "e27dac105cee9ad2833cd0173d69f9f7",
"assets/assets/images/common_left_arrow.svg": "b05cd1e90828c5f4fc8ed2e6b3273780",
"assets/assets/images/login_loader_image.svg": "84297328d89e3ca66e9898dd8e8dd5de",
"assets/assets/images/prompt_refresh.svg": "205c6571459bf9b916b7462340966b91",
"assets/assets/images/multitask_img.png": "63b13be61cba9a034ccdbe4d482dff33",
"assets/assets/images/video_field_image.png": "d249d3129ebd2071796d46c654993c39",
"assets/assets/images/female_icon.svg": "7b7255325ba3563a9c3cac3a31e1a7bd",
"assets/assets/images/login_co_logo.svg": "d97a4af3e7ff1422f432f0102b47bf6d",
"assets/assets/images/google_logo.svg": "df269be4835b6bd608995af0a35a5c12",
"assets/assets/images/Globe.svg": "a57bc8d534c77973e7cf33d20ea9770a",
"assets/assets/images/text_icon.svg": "4ca8fdc932ccfb57e6229409880950da",
"assets/assets/images/calling_speaker.svg": "3b2ab704797817585e425e5a8e7f7705",
"assets/assets/images/multitask.svg": "d0976fde3b00823823f2f85b2c080b28",
"assets/assets/images/flight_logo.svg": "379c81fbc58f8dd84c5c630ab6152a3c",
"assets/assets/images/Camera.png": "7d28e934f51645675928008826e5242c",
"assets/assets/images/mic_icon.svg": "b444ce2af463666b09269d3e62d73bfd",
"assets/assets/images/chat_edit.svg": "afd292a1c173d0d703b58c26b6f2be53",
"assets/assets/images/calling_end_call.svg": "85d8dde2b8630f227a64c3152856fec5",
"assets/assets/images/camera_arrow_icon.svg": "a88ba17244e9b066c3931422ac107aac",
"assets/assets/images/new_chat_old.svg": "b35553daa684eb44fe35c8887c6e2fb6",
"assets/assets/images/vacation_1.png": "a58bcb785319399576436d40befd4881",
"assets/assets/images/vacation_3.png": "df1e3d94b4559db198b2841ffe8a7966",
"assets/assets/images/image_loading_error.svg": "4672b7f3faa510dbb8c9faf46fd157f2",
"assets/assets/images/bg.png": "f3de5d6b5510b2665ffdb98d98b970e2",
"assets/assets/images/vacation_2.png": "c6182d583b28635f6605a27ab0693876",
"assets/assets/images/call_icon.svg": "eb96444acdd4374f41561f0a559132c4",
"assets/assets/sounds/calling_processing.mp3": "f535b3daaa0753a8fd9b89dadf9f9a21",
"assets/assets/sounds/connected.mp3": "b6718139e9bb2c90d0a5a6b210d0c06c",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Trial_XBd.ttf": "60d038f8339948f9abe6d1ec71f9864b",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Trial_Th.ttf": "502f2f86ebdf57814ef80dce65255ad9",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Trial_Bd.ttf": "ad1eda8c833478b335d1e6a933638b68",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Trial_SBd.ttf": "866c142a7c334d452d44b8b61f3fbfec",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Trial_Rg.ttf": "dc205ffbee9496e9aac211e9651a95dc",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Trial_Hair.ttf": "3eda57e2d8c1acf65da574a7670f5875",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Trial_Lt.ttf": "7e84dbc53910e5cfde4df568337d261e",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Trial_Md.ttf": "3fe229c0a870d5759fd9f9ace3ac8c22",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
