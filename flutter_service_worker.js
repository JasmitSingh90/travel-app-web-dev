'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "802ee8da82013f0199b24716d0194cad",
"version.json": "0e6efcb0dddef3d83d518224fa138913",
"index.html": "8999e9885ac815ac95e744997924a933",
"/": "8999e9885ac815ac95e744997924a933",
"main.dart.js": "d7f1b1b61295833b03f7c7cacdd784fc",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "946cded120674fc2dc184174af84a7e9",
"icons/Icon-192.png": "63343ada61c2f41d27f13a01e4eb01ab",
"icons/Icon-maskable-192.png": "63343ada61c2f41d27f13a01e4eb01ab",
"icons/Icon-maskable-512.png": "21e37165e5b2043de31c65280dd13008",
"icons/Icon-512.png": "21e37165e5b2043de31c65280dd13008",
"manifest.json": "ce3b1535d452b67e9bfc969a5da37252",
"assets/AssetManifest.json": "9ac1cae88b86440b5cf8a943fff119d2",
"assets/NOTICES": "291ec2c9185d84818cb3e42693354762",
"assets/FontManifest.json": "367f1a72552ca623d6ed0e512d87a562",
"assets/AssetManifest.bin.json": "b5d03bf416e13a7a2aae8f5a3d60682b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "fe1306f53458dbc55947ff2566f384e6",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/glass/images/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "356bcfeddb8a625e3e2ba43ddf1cc13e",
"assets/packages/vad/assets/vad.worklet.bundle.min.js": "9b26cae14d54e7356a62cf1abae4527c",
"assets/packages/vad/assets/ort.js": "52ba7cb2aa35b6975a6635b096c8db03",
"assets/packages/vad/assets/vad_web.js": "f8f0e1a60f2672a7479acf6f954d768f",
"assets/packages/vad/assets/ort-wasm-simd-threaded.wasm": "cf09dc27f93606fde7c6637dbc60ca30",
"assets/packages/vad/assets/silero_vad_v5.onnx": "ad78afa8b67a4f24c1201d7dd2f65bb1",
"assets/packages/vad/assets/silero_vad_legacy.onnx": "03da8de2fec4108a089b39f1b4abefef",
"assets/packages/vad/assets/bundle.min.js": "4cae313581569b78fa211baf4b3c366f",
"assets/packages/vad/assets/ort-wasm-simd.wasm": "49460a4b3ff6631a5475ff4e53ac5404",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "808f470f99c36b5bba0094ad05421dcb",
"assets/fonts/MaterialIcons-Regular.otf": "4b95be9b3f98327faca30e860d663313",
"assets/assets/images/chat_camera_image.svg": "13537106679ddfb3f23d43589ab93b53",
"assets/assets/images/room_bg.png": "3ac523b7d4121144f6988754fc60d496",
"assets/assets/images/transport_loading_2.png": "ab9a058499b0940303f5c8c803873daa",
"assets/assets/images/Card_image_2.png": "b7bce24cb41eaa4512058af69dab510d",
"assets/assets/images/earth.svg": "d8dccec31e54278f7acc9fb21ceb6aff",
"assets/assets/images/travel_image.png": "c7efbe3ed1b422f725a870b3dc64a212",
"assets/assets/images/ticketmaster.png": "fd073ccbc3c7dc5263da494aa9d5f995",
"assets/assets/images/card.png": "ecb0248685c2d46d1e1b255da48505da",
"assets/assets/images/logout_menu_logo.svg": "f8118c2d4eca2d12590332d94bfc6524",
"assets/assets/images/profile_delete.svg": "e729dfcff6235ff4f2aa5cd6e80830ae",
"assets/assets/images/travel_image_4.png": "933150cb9f164d5ddc32bd3691d0a4a8",
"assets/assets/images/hotel_loading_1.webp": "6580fc2473b5d3b97bbe36baf76f7b98",
"assets/assets/images/travel_img.png": "7dc0dddfb8c5e161ab7833a79ab0f133",
"assets/assets/images/explore_loading_4.webp": "b4800fbd59bc65dac0ed59769e304515",
"assets/assets/images/itinerary_loading_1.webp": "8145df82f00dc7845bdff62dfdca74db",
"assets/assets/images/hotel_image_4.png": "c599b9ffeeaf511d71ab3979d2bf66aa",
"assets/assets/images/ic_car_test.svg": "ba7c8a4a9715629e248cfdd2006f0320",
"assets/assets/images/Card_image_3.png": "37e2c9b9a32dcf2c7a0dd69cad80eafa",
"assets/assets/images/transport_loading_3.png": "aa0f627e9e8020c8a9892d5983af546c",
"assets/assets/images/img_event.jpg": "668dc777de2dce22737227249c613651",
"assets/assets/images/img_event.png": "b12f36244edaee8acd0592cc6d1f8152",
"assets/assets/images/event_loader_3.webp": "e89b9d865e627378ab50f3b227f6ac58",
"assets/assets/images/send_icon.svg": "cf1db0581239d02e74a40845ec8a4791",
"assets/assets/images/weather-rainy.png": "9d3a4e50654640304ecff18c4594cd95",
"assets/assets/images/camera-gradient-icon.png": "6d75fc021c971e609ddb9b1d3b09e208",
"assets/assets/images/home_bg_12.webp": "e9364cf0870a981644e938ba7e008caa",
"assets/assets/images/booking.png": "be437a3d4b4af342fbb56f449554cf82",
"assets/assets/images/transport_loading_1.png": "527c009bc390376d9b856044356f8693",
"assets/assets/images/Card_image_1.png": "8f2d930855e54f9de444c7a273227673",
"assets/assets/images/arrow_forward_ic.png": "97c65187f09bf0e06d7ffcd05dc6c86b",
"assets/assets/images/ic_map_marker.png": "6a488dd347d68f9da0616fd4607cfd0d",
"assets/assets/images/ai_menu_logo.svg": "400177790ea2f9d324599a52423a1677",
"assets/assets/images/ai_sparkles.png": "24d767d341056cc7d11ee082b476016e",
"assets/assets/images/train.png": "75f55ffd0b396b11d3ead6b56e4bbefb",
"assets/assets/images/ic_cloud.svg": "8408c955790982e938c39bdb0550b497",
"assets/assets/images/home_bg_2.webp": "c86432a3bf8ca5c72aa731573412227e",
"assets/assets/images/arrow.svg": "8786d1d3d9e542597fc666da5480e0f0",
"assets/assets/images/home_mob_bg_13.webp": "6554cb7a4d51900aff18203669ec22b8",
"assets/assets/images/mini-arrow-right.png": "591a4f90826751e2763785277b074801",
"assets/assets/images/person.svg": "9f74396304432c1b5c395e0b3905095f",
"assets/assets/images/img_attraction.png": "e13f51125c429d5de910301546e15846",
"assets/assets/images/logo_ic.svg": "30f5003817d0a7cdc85c3be6f7b55653",
"assets/assets/images/home_mob_bg_12.webp": "b3eece549683313f27008641dd4ac5bf",
"assets/assets/images/applepay_btn.svg": "493d764f3fd7e3716cbb395db61febbd",
"assets/assets/images/transport_loading_4.png": "1e7c04b745f8d0b0f025e17806011938",
"assets/assets/images/login_bg_web.png": "8e9831ba4d28dfa56e399653ca7f8857",
"assets/assets/images/Card_image_4.png": "6e8eae326e43011e5882752f3b6769aa",
"assets/assets/images/location_ic.png": "7ce906f3e2130fc12de4f6520ce3edae",
"assets/assets/images/ic_sunny.svg": "330f94a6f88dd68546f0af363a70a67b",
"assets/assets/images/landing_flight.svg": "481882a0feea7494025ee1fc68aa1e22",
"assets/assets/images/hotel_image_3.png": "692a877fd40ff96f566d338c5e6dd65b",
"assets/assets/images/home_bg_3.webp": "3bf09a18493ca4fc87c33501f54d38e3",
"assets/assets/images/down_arrow_icon.svg": "214b8bd6998a08e17a49ffb0d3d43341",
"assets/assets/images/shield.png": "db3c3497aeb6235ffa5addb57d71271e",
"assets/assets/images/ic_right_arrow.svg": "3f841b8315988b0cbc051a76f6510c2a",
"assets/assets/images/travel_image_3.png": "bb5bc42373d03844124fb3989db013f8",
"assets/assets/images/chat_field_image.png": "d960d0767ad274dfcfca2a56e384eada",
"assets/assets/images/profile_user.svg": "65c52021d6a4500a4e32040fb010e25d",
"assets/assets/images/travel_image_2.png": "cd4c020aa5b664af6276eabd7524f79f",
"assets/assets/images/web_ic.png": "bc7977cb93bd093248495a3efc1f8e25",
"assets/assets/images/hotel_image_2.png": "e30c4778ee3bd72aae6795af6c408cd0",
"assets/assets/images/sas_image.png": "15b4d47f5d1d0641488f0a2743b62fb6",
"assets/assets/images/room_image.png": "4affd2de0732ab33c5e6fb55313f0ade",
"assets/assets/images/ic_walking.svg": "2e392afe90697afb5c12a15ed70b2e73",
"assets/assets/images/restaurant_loading_1.webp": "014c63c32ccfeb117b0b8b88455453b1",
"assets/assets/images/home_bg_13.webp": "e5976793a230ca3fcaa25ef98337f0e2",
"assets/assets/images/home_mob_bg_1.webp": "82a5a6e0b758cf178616e1034cc753ef",
"assets/assets/images/weather_rainy.png": "c1b8392aa941d20676b462da80e935e4",
"assets/assets/images/event_loader_2.webp": "652e986f2717d1e9eac1690a5870a6b5",
"assets/assets/images/person_ic.png": "e38e8ddba959b1500791ccc5c528eb04",
"assets/assets/images/arrow-right.png": "5aa1d75e29f0423a9de1392b9cd9d7b9",
"assets/assets/images/mask_blur.png": "075db16f16e590d1028b8de5e35f4282",
"assets/assets/images/weather_partly_cloudy.png": "acdab59d4d1009418ee9e5e8326ca724",
"assets/assets/images/ic_close.png": "72681b018bff1a6e66613e872da59bce",
"assets/assets/images/img_itinerary_restaurants.png": "f28605351282682d6bbbccf229bd5fde",
"assets/assets/images/ic_cloudy.svg": "ed7ece4ff1db13eb0073b3b1d0e77b99",
"assets/assets/images/new_chat_icon.svg": "0434312d1d4f630dc4cb4ce50943b767",
"assets/assets/images/back_arrow_icon.svg": "eb16c31a2f487504aa91178b322e81b7",
"assets/assets/images/video-gradient-icon.png": "0b7a831b1578f2fa377bd795c67ace3c",
"assets/assets/images/common_plus.svg": "66d54698d4d840792df8c56b8d6ca193",
"assets/assets/images/apple-pay-logo.png": "65925b319471dca1812a0e7e9a9c4b9d",
"assets/assets/images/ic_driving.png": "3eb68bba10e34737ab69c4b9c103500f",
"assets/assets/images/8-2.png": "a7ba4aa6c5b3c478a9c7824f0bbc2e20",
"assets/assets/images/home_mob_bg_6.webp": "d3722dd63d8dfdef2dbd55cb47672677",
"assets/assets/images/ic_driving.svg": "ab5bb7bf2043086e34eeaf0ed180e850",
"assets/assets/images/home_bg_14.webp": "28639f84e21f55b18ea59bebd3032783",
"assets/assets/images/login_co_star_image.png": "5c47485ffcde2cf093da67e9e0c01529",
"assets/assets/images/mic_glow_icon.svg": "c590b17ef8cd7eced757b285d0c8e5ef",
"assets/assets/images/rest_detail_image_1.png": "ec7d3b7844c69b85439e3c7850686d14",
"assets/assets/images/mic_black_ic.svg": "ae21c4cf769f374c6c1fff4c43111a83",
"assets/assets/images/ic_back_button_with_bg.png": "a1fbfc8d38591dc08cc02635f4d70f08",
"assets/assets/images/ic_driving_with_shadow.png": "c7650d87914435b44341e682d9bc1786",
"assets/assets/images/airline_bg_flight.png": "acc3469c3cf7da49299895ee7288e8c8",
"assets/assets/images/common_close.svg": "01201d828832c85b4a8b5d2483fbde6d",
"assets/assets/images/calender.svg": "8457b79a87f7425795aceb8003034530",
"assets/assets/images/accor_logo.png": "67c8e1f6bff300432ab760c1f686f0ed",
"assets/assets/images/stack_image_6.png": "21743a88fe2fad9d7b5e84666e82d03e",
"assets/assets/images/home_bg_4.webp": "fc62d2867d05be0e45ddb22810ba9fdd",
"assets/assets/images/ic_add.png": "34c9d6126aaea4c65ff42af0998e8bf8",
"assets/assets/images/16-3.png": "726eeb163a507ccb00f3e3aed73e5162",
"assets/assets/images/edit-small-2.svg": "8d25abf480e6eb4351dc9ff9d39d79c0",
"assets/assets/images/home_mob_bg_15.webp": "53f118d3f58ca75d8c4ba129bf79b902",
"assets/assets/images/map.png": "826ff234736fd33cefc4003b096d3569",
"assets/assets/images/sidebar-simple-left-wide.svg": "1530b96f55ded5ac9a33a9a6313149e1",
"assets/assets/images/expand_icon.svg": "9a68c694a88eb42ca32a51cd228fdb6d",
"assets/assets/images/ic_walking.png": "5963bd98e597fcb1e72faadd901f8377",
"assets/assets/images/rest_detail_image_2.png": "286b0e4b4cff077567bb0d1c09829d60",
"assets/assets/images/gradient_img.png": "ab1ba4cf873aa4e22e15122eaa030425",
"assets/assets/images/home_bg_18.webp": "ea495ca0c0224f30583d232509dea87a",
"assets/assets/images/calling_camera.svg": "6cba3188a4452201a9b110e733fccc60",
"assets/assets/images/chat_refresh.svg": "2200f3a31dd06f1fec9aa999d31f7578",
"assets/assets/images/stack_image_4.png": "1a442803e4e32dfa27df260e1b885d0b",
"assets/assets/images/blur.png": "78975d1782657c1c873e7ecb6ea3e360",
"assets/assets/images/new_session_icon.png": "b70f999ccd8338302b75e0ff0d559311",
"assets/assets/images/profile_tick.svg": "6d8b631d05cc068666f21dc503faf280",
"assets/assets/images/location_hollow.svg": "6901b557e6bf2aec68ff8d784cc4e247",
"assets/assets/images/stack_image_5.png": "ff5cff200f9b34fe7ed9a7036f9ac08d",
"assets/assets/images/room.png": "38552f40597840a2731e88ab1a73e930",
"assets/assets/images/navbar_icon.svg": "580a9f4bba126fdcb253eda603a86082",
"assets/assets/images/home_bg_8.webp": "8e7ef215ee25b99baaa8317f8aba6125",
"assets/assets/images/hotel_image.png": "2e4385a6fac5f3d124d9a242098dc064",
"assets/assets/images/explore_loading_2.webp": "0ed764e3c81b391cedb254c94532d83a",
"assets/assets/images/chat_field_image.svg": "c2090dbb73440b927d4ed3129dc402d4",
"assets/assets/images/ic_web_search.png": "2905e2758d83f8f7cbe54b7240c507fd",
"assets/assets/images/rest_detail_image_3.png": "e4f455762acb7db2297e94c66fb09f16",
"assets/assets/images/home_mob_bg_19.webp": "fedcf07744cf06fe195596c364085200",
"assets/assets/images/bg_image.png": "0c337abf032840dbcf52ab9626b1cf8a",
"assets/assets/images/menu_icon.svg": "a28b60fbc2f3ef31a9d25d6d91d62379",
"assets/assets/images/event_loader_4.webp": "9e446705ec61569d5793d6a2a58e87f8",
"assets/assets/images/arrow_up.svg": "42abcaedd5cade74e98c6fcad2b116ce",
"assets/assets/images/ic_delete.png": "1e477ece28f1563765ff282348249d4b",
"assets/assets/images/home_mob_bg_18.webp": "2d0b3d230cb97914c437727c76bce2c3",
"assets/assets/images/explore_loading_3.webp": "0dbbcf40b4dd6fac4b40e1f622ec3915",
"assets/assets/images/home_bg_9.webp": "513b01b92fc47149aecd59543421c4a0",
"assets/assets/images/stack_image_1.png": "f2cf5e07db5327d56c8fd5f04ed59e5b",
"assets/assets/images/apple_card_mobile.png": "12a150f491893de19ce5ef2c3c783a49",
"assets/assets/images/login_bg_mobile.png": "53b977491e20b39a42d023ec97ccd0aa",
"assets/assets/images/map_user_arrow.png": "44ef36b8adc06607eeaa73d05cb35a12",
"assets/assets/images/ai_sparkles.svg": "b0e7d3cb3cec997f19e546c09039a807",
"assets/assets/images/sidebar_icon.png": "2629de46ed1c45d43c4d94a8805705cf",
"assets/assets/images/home_bg_19.webp": "aeed42e922f9e9a56b89867b39b61f70",
"assets/assets/images/ic_rainy.svg": "515e5c4cbc04217e9d902fbec09c84bb",
"assets/assets/images/Oval.png": "59bb00dbe8aee960996b214836a0735a",
"assets/assets/images/white_transparent_line.png": "b992a88e2e3597f00e52b4ae7aa2c950",
"assets/assets/images/home_mob_bg_14.webp": "d957a2fe66c9e4be7887f9aa296257ce",
"assets/assets/images/flight_double_arrow.svg": "960544a1ba6f546a89208592579f11b5",
"assets/assets/images/map_mobile.png": "8ed4566a50236c76f5a63e41728036ac",
"assets/assets/images/common_up_arrow.svg": "1477165c1cff48422a5118965331537b",
"assets/assets/images/delete_ic.svg": "bcf6f961e2ddf5649cfa315084c7d4f3",
"assets/assets/images/home_bg_5.webp": "b5ea5827a08e707fb934b917678b320b",
"assets/assets/images/mic_fill.svg": "645eecdef352d70f3c526baeb76d4212",
"assets/assets/images/stack_image_2.png": "6281273be2bb2a862c3fe3c1a43ab197",
"assets/assets/images/location_arrow.svg": "f5dd00987dd11391d0accc94c1c294d6",
"assets/assets/images/flight_bagage.png": "3ad892a4eae01694421fb58baffbca33",
"assets/assets/images/dottedLine.png": "78caf41c2f7210d0249884e2aa70774d",
"assets/assets/images/weather_sunny.png": "efc062882d44b0775e78b47722fe43ac",
"assets/assets/images/stack_image_3.png": "bdc7c7567f7f6b362b6f6d0ec01bdc8c",
"assets/assets/images/profile_pic_1.jpeg": "7373833753aa3385677c4f88761480f1",
"assets/assets/images/ic_clock.png": "e6177effaa5c306403faf9b4a6ad80d2",
"assets/assets/images/profile_pic_1.png": "2658947167171387047ebe44876cc401",
"assets/assets/images/home_bg_15.webp": "08c3939d7b6d95ccc781994381f76163",
"assets/assets/images/14-4.png": "55a7285f8ff4049f5f85113d5d35d5ce",
"assets/assets/images/weather_thunder.png": "7fd0a94f8fbbd2a4b2347403a9c4caed",
"assets/assets/images/home_mob_bg_7.webp": "bb2b717876495475c3afa7564a007151",
"assets/assets/images/ic_charges.png": "ae9751b14f536882a14a4b16f03965e8",
"assets/assets/images/airline_bg_flight.jpeg": "a98e7b9f48b8b275f7f52882d43b1da0",
"assets/assets/images/ic_transit.svg": "e88d41e1e178d33c9d799a07b04f4ee2",
"assets/assets/images/ic_gradient.png": "ed2bb21ba569b0030337d3c9e1ff4250",
"assets/assets/images/receipt_icon.svg": "42aa1b82e0a0278651ac32fa006d4fb1",
"assets/assets/images/home_mob_bg_17.webp": "656ed839fe76d06cbd298d55609c5dab",
"assets/assets/images/gallery_icon.svg": "421419c5f4aff9cb7efed3d6c461acb4",
"assets/assets/images/home_bg_6.webp": "141f15e9eeecce499546ed8da23822ec",
"assets/assets/images/close-btn.png": "6534f0183a91553e4bab46c9e1d0d4cd",
"assets/assets/images/ic_ticket.png": "c228e23d555fdb9c851c2558bf8a854b",
"assets/assets/images/dotted_line.svg": "419648ce966b01ad1d7309b99a8437a2",
"assets/assets/images/restaurant_loading_4.webp": "ba1795c8fc74fb29d3c4f2a50c9d4a85",
"assets/assets/images/bg_img.svg": "b3e0e9f3bd1b51e25447a05bb3a21272",
"assets/assets/images/home_bg_16.webp": "bace356d1729e327edbb6d4e80dc6f19",
"assets/assets/images/map_user_car_icon.png": "a836a29b31a2faa578429b1e9632fca4",
"assets/assets/images/bath_icon.svg": "cfe6db2c3f04d4b6b52e097d7b347a3d",
"assets/assets/images/avatar.png": "fc94fe588f66ac4bcb1e623fcec1ac3d",
"assets/assets/images/home_mob_bg_4.webp": "c294addf7181a734b72e6e9a27bc0007",
"assets/assets/images/ic_star.png": "65a62073788579d3152694588ff5c780",
"assets/assets/images/new_chat.svg": "bfc6386fce2d690b7947dcce8998e68a",
"assets/assets/images/common_down_arrow.svg": "e355e1512b102fe99c3d7bad77d5dd3a",
"assets/assets/images/6-5.png": "194a33290f67b64bd528f753e4dc2667",
"assets/assets/images/ic_thunder.svg": "75fa42b4b5eb0ddb6ac79ffdd284e61e",
"assets/assets/images/weather_snowy.png": "e95c1f88ad055a4df7aee21645946211",
"assets/assets/images/profile_pic.avif": "25dc1fd86d89acec63d164addacb5bc3",
"assets/assets/images/collapse_icon.svg": "078ae7d9664f9bacd95adeac95ad55c3",
"assets/assets/images/home_bg_20.webp": "d9d4841f08cd00b213b99143578cfbfa",
"assets/assets/images/arrow_down.svg": "96dd5b28588e3899ecd5e5e60b522e6b",
"assets/assets/images/flight_loader_4.png": "c956fd7d6e97ddaf8dd9080e3e3c24a3",
"assets/assets/images/uber-logo.svg": "aed85decc248dcb05dcce0d5554f15ce",
"assets/assets/images/ic_ticket_small.png": "7b3afa5fbccb7a24c525a4d565c4580d",
"assets/assets/images/multitask.png": "63b13be61cba9a034ccdbe4d482dff33",
"assets/assets/images/weather-sun.png": "a9a6cb86a6191c3333190c7f859ecee1",
"assets/assets/images/home_mob_bg_8.webp": "37f46dfca85795a72e0cf23adfe207ab",
"assets/assets/images/home_mob_bg_9.webp": "41c64b2077001ff82bf13da482a7f1ae",
"assets/assets/images/home_ic.svg": "2458c3dbee5e0d06b3a0a8f6464df992",
"assets/assets/images/dimensions_icon.svg": "85267fe711537d5251590be342959c44",
"assets/assets/images/new_chat_menu_logo.svg": "ea756611f5f7f2467d5041454fc30887",
"assets/assets/images/grab-logo.svg": "c208ac0879639f1d1a57446246e1994b",
"assets/assets/images/thumb_up_icon.svg": "bd514f46284e7f1502fc90e43eae7b0d",
"assets/assets/images/home_mob_bg_20.webp": "df502adcdb974f1fc2b0b742acfa08f1",
"assets/assets/images/default_event_icon.png": "57f8f7a1d3eb29373aa76dbc16eb56a7",
"assets/assets/images/weather-sunset.png": "f468076fa02d1171604be8d043b4627a",
"assets/assets/images/profile_chat.svg": "538106558ee352055b30e5ca662b10ac",
"assets/assets/images/booking_2.png": "790701e9e712f883979021dfe834cd79",
"assets/assets/images/hotel_loading_4.webp": "81dce04a559766a6a33e62336560dfd7",
"assets/assets/images/flight_loader_1.png": "4ff88cfcfcaa4c851a5ffdbe999b8ff6",
"assets/assets/images/ic_two_wheelers.svg": "111955a9d1c53e7c11db96840baf8b27",
"assets/assets/images/calling_mic_mute_enabled.svg": "5c25e0273aab834cdf87d104033a13d6",
"assets/assets/images/explore_loading_1.webp": "9cfe134ec4b944441f63465c60fba63c",
"assets/assets/images/itinerary_loading_4.webp": "cdd5d74dfba239391d763285dd69bb38",
"assets/assets/images/wifi_icon.svg": "3f3978acec833bda85495b15f7fec2ae",
"assets/assets/images/ic_flight.png": "c2eca05bb4c1f69160ff27a8d8eb60f5",
"assets/assets/images/voice_icon.svg": "7ad61e99bd49ef6379417999cd55e3a0",
"assets/assets/images/car.png": "6bb1d4b18242ca124c0a8a16f5614210",
"assets/assets/images/home_mob_bg_5.webp": "09f9404e892a3a3e185e3bf3562d8512",
"assets/assets/images/phone-gradient-icon.png": "b650f3cbea387d7f413a1952ea4dfba2",
"assets/assets/images/home_bg_17.webp": "8ff6c5ad50b0e6a23eea73d96305d18b",
"assets/assets/images/weather-windy.png": "900a59e3c096cffd84a0fb0ef56ce2ba",
"assets/assets/images/ic_drop.svg": "ddbc6e7e293a7f2f683056766fdb813b",
"assets/assets/images/apple_card.png": "22e6173f65de0e5b99d5f229a3a3ced8",
"assets/assets/images/flight_loader_3.png": "7557fea26c16f0b2c11050e5c5219214",
"assets/assets/images/bagage.png": "3ad892a4eae01694421fb58baffbca33",
"assets/assets/images/co_logo.svg": "0cbc4dbb4e73e4292845324b279f1b3f",
"assets/assets/images/cross_icon.svg": "ea26d652ed1badfbbaf2d66554e129ce",
"assets/assets/images/ai_logo_image.svg": "9e51334b258ab99cf84fdcae2895dc34",
"assets/assets/images/kids_icon.svg": "c1cfaa5a115db51674ed72bd0f8d7d80",
"assets/assets/images/flight_loader_2.png": "419f56e82a8838748a4de950a4eb5569",
"assets/assets/images/review_avatar.png": "e9662f8a86efe68628caf910100bb9dc",
"assets/assets/images/male_icon.svg": "e27dac105cee9ad2833cd0173d69f9f7",
"assets/assets/images/home_bg_7.webp": "6793dd910fd378e8a48c15732e085e1a",
"assets/assets/images/common_left_arrow.svg": "b05cd1e90828c5f4fc8ed2e6b3273780",
"assets/assets/images/uber.png": "249842d9b6605fde08eb6dc601b0fd04",
"assets/assets/images/home_mob_bg_16.webp": "f5af6568c2a92b667c7915932324ae85",
"assets/assets/images/clock.png": "be6d612963c8aaf229daf3b7cbfffa7e",
"assets/assets/images/login_loader_image.svg": "84297328d89e3ca66e9898dd8e8dd5de",
"assets/assets/images/back_button.svg": "a5cf616f11fdadd4bbcca6575d8b9373",
"assets/assets/images/ac_icon.svg": "1a6f648637ed7125b3119bcce91bbd54",
"assets/assets/images/event_loader_1.webp": "0bae17052e45a666f0d4d751546031ef",
"assets/assets/images/weather-cloudy.png": "103672a6ff40ccb1f4669966f57a9fb2",
"assets/assets/images/prompt_refresh.svg": "205c6571459bf9b916b7462340966b91",
"assets/assets/images/1-1.png": "d1e5733703537423d2ff7b4f8f7b8006",
"assets/assets/images/card_image.jpeg": "c7440c572615aa21c5c6b7ac810d7b9c",
"assets/assets/images/img_qr.png": "33d0b886c9d9e8fc181bb0ccc01f6a5c",
"assets/assets/images/romantic_img_7.png": "43249b0fa0f0871757738cbc9d75a91d",
"assets/assets/images/close_button.svg": "faa0135ab09beb2918aa87249f732345",
"assets/assets/images/itinerary_loading_3.webp": "18fdec00d2029a8d366f686628a3a53f",
"assets/assets/images/ic_partially_cloudy.svg": "59fd35fda09cd06162f8318c917f2451",
"assets/assets/images/hotel_loading_3.webp": "45df3bd2926e765affaece94cb97b942",
"assets/assets/images/weather_cloudy.png": "1333f89656804cf874eec449618b0ecc",
"assets/assets/images/location.svg": "226643ea1e13138a76446824f29e05d1",
"assets/assets/images/romantic_img_6.png": "d25407f96196b560f873c740f74bbb19",
"assets/assets/images/multitask_img.png": "63b13be61cba9a034ccdbe4d482dff33",
"assets/assets/images/voice_icon.png": "f15237bbce56d79a6e27bcf6d2d9afe2",
"assets/assets/images/img_flight.jpg": "b9c833608af368997cc66669ebac3b9b",
"assets/assets/images/next.png": "acd9985488dfdc4293a1ae8611c570e7",
"assets/assets/images/ic_snowy.svg": "04d44586e3a99221ce2cc9f532815eb3",
"assets/assets/images/star.png": "4b7c888d7378a5939b6766fcbfecaee3",
"assets/assets/images/video_field_image.png": "d249d3129ebd2071796d46c654993c39",
"assets/assets/images/send_message_icon.png": "2ebae83fe706e4000a85f3c9fe8de61c",
"assets/assets/images/home_mob_bg_11.webp": "849c797bf5df5a2e6f123a528ead7f32",
"assets/assets/images/co_star_logo.png": "58062e64e5b74b983d20c84437311565",
"assets/assets/images/female_icon.svg": "7b7255325ba3563a9c3cac3a31e1a7bd",
"assets/assets/images/romantic_img_4.png": "c09fd1b7a85a871f24c42d9c2fb9a80c",
"assets/assets/images/login_co_logo.svg": "d97a4af3e7ff1422f432f0102b47bf6d",
"assets/assets/images/volume_off_icon.svg": "d14fd22fc70b366069cd1fdb5264a06c",
"assets/assets/images/google_logo.svg": "df269be4835b6bd608995af0a35a5c12",
"assets/assets/images/hotel_img.png": "d25407f96196b560f873c740f74bbb19",
"assets/assets/images/ic_two_wheelers.png": "5ac1aaa03debe6354bacd62d30c482bd",
"assets/assets/images/Globe.svg": "a57bc8d534c77973e7cf33d20ea9770a",
"assets/assets/images/line.png": "bbb3486ce39d2cbe5646c5ff7226c3b5",
"assets/assets/images/romantic_img_5.png": "719fae6070d8db5d9e6719aabda6c4a9",
"assets/assets/images/arrow_back_ic.png": "e8a668ad82a8a8b1c3ef88392370bb41",
"assets/assets/images/text_icon.svg": "4ca8fdc932ccfb57e6229409880950da",
"assets/assets/images/restaurant_loading_2.webp": "7a912c9e012602fe2f3c4de79244dd85",
"assets/assets/images/fridge_icon.svg": "01022421bc32f562ec311e052adef602",
"assets/assets/images/home_bg_10.webp": "b561ec4e5f7ae6398ce0a018834b70f3",
"assets/assets/images/home_mob_bg_2.webp": "50e04ac3e797c95047044f7197f666af",
"assets/assets/images/calling_speaker.svg": "3b2ab704797817585e425e5a8e7f7705",
"assets/assets/images/breakfast.png": "ac0ffe39f8356df56a49e90d4aae8cd3",
"assets/assets/images/winter_img.png": "ad58181c55dc2869920edd8b593131d6",
"assets/assets/images/multitask.svg": "d0976fde3b00823823f2f85b2c080b28",
"assets/assets/images/img_itinerary_place.png": "0299d15f56efc5943aac365974e79bcc",
"assets/assets/images/home_mob_bg_3.webp": "8e54468bb41ef9b267701715318d6b2a",
"assets/assets/images/home_bg_11.webp": "4448368d3eae48b962322683e5d83453",
"assets/assets/images/caaar.png": "7d54c99a30e33d4cc2c48760ca1998eb",
"assets/assets/images/flight_logo.svg": "379c81fbc58f8dd84c5c630ab6152a3c",
"assets/assets/images/logo.svg": "412a8940baffd2614ce18e5031469cec",
"assets/assets/images/Camera.png": "7d28e934f51645675928008826e5242c",
"assets/assets/images/restaurant_loading_3.webp": "55bf85718064155d6b0d229548a6ac6d",
"assets/assets/images/tv_icon.svg": "1e57529bff5426dc6247e4ce6c0ea5a1",
"assets/assets/images/romantic_img_1.png": "52295981e0bded76c87f309d9ad726f1",
"assets/assets/images/img_itinerary_hotel.png": "5f7b85628be83f9c68a28c2250c7703a",
"assets/assets/images/marker-bg.png": "fa297c125259158622d9b9b8ccf7a532",
"assets/assets/images/bookmark.svg": "7607ebfaa960be55d060379e944dbe37",
"assets/assets/images/book_logo.png": "c0b19959a3998fff9994dc995b9bfdbf",
"assets/assets/images/mic_icon.svg": "b444ce2af463666b09269d3e62d73bfd",
"assets/assets/images/close_icon.png": "46c37eeec807b37297c02ead4051cd5e",
"assets/assets/images/img_restaurant.png": "3843610f19fcd2202a275bde857def4b",
"assets/assets/images/web_search_close_icon.svg": "3bfd5f54686fc362f2220877898898d6",
"assets/assets/images/chat_edit.svg": "afd292a1c173d0d703b58c26b6f2be53",
"assets/assets/images/home_bg_1.webp": "d96c892a7d2da8542bcf8aa5040ac421",
"assets/assets/images/arrow_down.png": "239d326518e847ed2713d95506c297ed",
"assets/assets/images/calling_end_call.svg": "85d8dde2b8630f227a64c3152856fec5",
"assets/assets/images/camera_arrow_icon.svg": "a88ba17244e9b066c3931422ac107aac",
"assets/assets/images/home_mob_bg_10.webp": "ad9d5f5a8e7f225ae0e6d36aeab05485",
"assets/assets/images/previous.png": "138f33413ea904443471b76fb92283b5",
"assets/assets/images/new_chat_old.svg": "b35553daa684eb44fe35c8887c6e2fb6",
"assets/assets/images/img_car.png": "3671aca29b1a7cff9da10a59296d97ae",
"assets/assets/images/vacation_1.png": "a58bcb785319399576436d40befd4881",
"assets/assets/images/airplane.svg": "67902c0c076ce8f94b78845b6aea49b5",
"assets/assets/images/flight_qr.png": "53985d1c7748df5e81fe960afb22b8fd",
"assets/assets/images/vacation_3.png": "df1e3d94b4559db198b2841ffe8a7966",
"assets/assets/images/trip_img.png": "593b317bef418c7207ac47a6bc40e38c",
"assets/assets/images/romantic_img_2.png": "5f7b85628be83f9c68a28c2250c7703a",
"assets/assets/images/image_loading_error.svg": "4672b7f3faa510dbb8c9faf46fd157f2",
"assets/assets/images/flight_attendent_icon.png": "989fcb5738f14a9a909e7e8754ecaee3",
"assets/assets/images/hotel_loading_2.webp": "5bbec46a418a84f76892a8c983882268",
"assets/assets/images/7-3.png": "555ac9ac3bf85cebeadaa52220a2a3d3",
"assets/assets/images/free.png": "21c028c0867459dc8eb68ec31154ea6c",
"assets/assets/images/flight_img.jpeg": "51b40a8f59d7532c00a479b136b5fefa",
"assets/assets/images/romantic_img_3.png": "e734a5f49c3e300f3ca6517a14764ecb",
"assets/assets/images/itinerary_loading_2.webp": "83cde70063e71e6bc31fabe4cf3ed986",
"assets/assets/images/bg.png": "f3de5d6b5510b2665ffdb98d98b970e2",
"assets/assets/images/ic_transit.png": "9bb761f2fa016e5e56fb610ef8649f3a",
"assets/assets/images/romantic_dinner.png": "a6ea20b963b6f670bf75dc17c0a18896",
"assets/assets/images/close.png": "32606c255887d60bd9beefe1db10df06",
"assets/assets/images/vacation_2.png": "c6182d583b28635f6605a27ab0693876",
"assets/assets/images/online_clock.png": "14ef15eeddfef4b6629243774ba1c377",
"assets/assets/images/call_icon.svg": "eb96444acdd4374f41561f0a559132c4",
"assets/assets/images/card_qr.png": "c48436c0b2e2a759a82a899767ed041d",
"assets/assets/sounds/calling_processing.mp3": "f535b3daaa0753a8fd9b89dadf9f9a21",
"assets/assets/sounds/connected.mp3": "b6718139e9bb2c90d0a5a6b210d0c06c",
"assets/assets/json/itinerary.json": "b58251a95ce7ef322fd9083063ca989c",
"assets/assets/map_style.json": "d65951bb0b525034451c725e18ee5fa0",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Hair.ttf": "0fde8d64516f9e824e4b68cfc33b6055",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Bd.ttf": "4fd1f9342a9c5c887ab572347dff1b55",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Th.ttf": "fc5e5e81185375efdaa01793ac8bf90b",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_XBd.ttf": "e22956680492ce7af68027f0e15e98fd",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Md.ttf": "ba440fe7e6225baf19777d00da55f195",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Lt.ttf": "cafd6f0b8c8097a2e5d5d28bfcb8b376",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_SBd.ttf": "967de7e921243d4de442ed2af5fcd138",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Rg.ttf": "f8a1f753cec49290d7e7a04cc9dce679",
"assets/assets/vad/vad.worklet.bundle.min.js": "9b26cae14d54e7356a62cf1abae4527c",
"assets/assets/vad/ort.js": "52ba7cb2aa35b6975a6635b096c8db03",
"assets/assets/vad/vad_web.js": "f8f0e1a60f2672a7479acf6f954d768f",
"assets/assets/vad/ort-wasm-simd-threaded.wasm": "cf09dc27f93606fde7c6637dbc60ca30",
"assets/assets/vad/silero_vad_v5.onnx": "ad78afa8b67a4f24c1201d7dd2f65bb1",
"assets/assets/vad/silero_vad_legacy.onnx": "03da8de2fec4108a089b39f1b4abefef",
"assets/assets/vad/bundle.min.js": "4cae313581569b78fa211baf4b3c366f",
"assets/assets/vad/ort-wasm-simd.wasm": "49460a4b3ff6631a5475ff4e53ac5404",
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
