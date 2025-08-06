'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "9d37c78b7b8b3b782a84eefe5c47ac2a",
"assets/AssetManifest.bin": "f4d1472a539a708ef2df530bd05f49c0",
"assets/AssetManifest.bin.json": "45706fe2a8fe2982855ac4c157379c70",
"assets/AssetManifest.json": "5e29c3653acfb5d7e7b78c53227b0c01",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Bd.ttf": "4fd1f9342a9c5c887ab572347dff1b55",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Lt.ttf": "cafd6f0b8c8097a2e5d5d28bfcb8b376",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Md.ttf": "ba440fe7e6225baf19777d00da55f195",
"assets/assets/fonts/TrialStaticFonts/AktivGrotesk_Rg.ttf": "f8a1f753cec49290d7e7a04cc9dce679",
"assets/assets/images/ac_icon.svg": "94856de95e1538405a21281d91893545",
"assets/assets/images/airline_bg_flight.png": "cfa7fb077da8eebb48c4b090f7ccb259",
"assets/assets/images/apple-pay-logo.png": "65925b319471dca1812a0e7e9a9c4b9d",
"assets/assets/images/applepay_btn.svg": "719b215dc02268c86bc45ef529d5e09d",
"assets/assets/images/apple_card.png": "22e6173f65de0e5b99d5f229a3a3ced8",
"assets/assets/images/apple_card_mobile.png": "12a150f491893de19ce5ef2c3c783a49",
"assets/assets/images/arrow-right.png": "5aa1d75e29f0423a9de1392b9cd9d7b9",
"assets/assets/images/arrow_down.png": "239d326518e847ed2713d95506c297ed",
"assets/assets/images/arrow_down.svg": "a21652d697172d3ab0669c61de875fa0",
"assets/assets/images/back_button.svg": "0021199046a94dd50de1a026abcd4cc3",
"assets/assets/images/bagage.png": "3ad892a4eae01694421fb58baffbca33",
"assets/assets/images/bath_icon.svg": "bf8a5ea6222fcbb5ac9e8674e1419258",
"assets/assets/images/bg.png": "f3de5d6b5510b2665ffdb98d98b970e2",
"assets/assets/images/bookmark.svg": "b3979264600251578547f6e40579fd3e",
"assets/assets/images/calender.svg": "fe041b68d94233aff1f6ce3434fe4f64",
"assets/assets/images/clock.png": "be6d612963c8aaf229daf3b7cbfffa7e",
"assets/assets/images/close-btn.png": "6534f0183a91553e4bab46c9e1d0d4cd",
"assets/assets/images/close.png": "32606c255887d60bd9beefe1db10df06",
"assets/assets/images/close_button.svg": "371c3234279a3ef42af4cfafaf24812b",
"assets/assets/images/collaborators_avatar.png": "a969d2038970c9cf905ef0ed8b8c46a9",
"assets/assets/images/common_close.svg": "3188bb55811f781043ce19c535d5493f",
"assets/assets/images/common_left_arrow.svg": "40e261e6f1a76fe3d80cd5cb952a98ce",
"assets/assets/images/copy_icon.svg": "4852815d3fa2c33d22c306b54e02442d",
"assets/assets/images/co_star_logo_dark.png": "30d32c95c018d9f69949541a987a911e",
"assets/assets/images/co_star_logo_light.png": "2fb8b461227629af01b16f34f238405c",
"assets/assets/images/default_event_icon.png": "57f8f7a1d3eb29373aa76dbc16eb56a7",
"assets/assets/images/default_hotel_image.png": "913d9825fcfccfcdcb120a55049cae40",
"assets/assets/images/delete_ic.svg": "e65629208623dbbd386b39dc63e4059e",
"assets/assets/images/dimensions_icon.svg": "5018a611a7a8e313540a466ab73ed46e",
"assets/assets/images/dotted_line.svg": "097ab720e3037440e592ee514a0a2ea0",
"assets/assets/images/earth.svg": "a6c3a058eaf5ce41cba8987473e296fc",
"assets/assets/images/edit-small-2.svg": "f5b206f5aec8416c847d16d286ff6487",
"assets/assets/images/envelope.png": "060f76627282160214dd93ccffae8e10",
"assets/assets/images/event_loader_1.webp": "0bae17052e45a666f0d4d751546031ef",
"assets/assets/images/event_loader_2.webp": "652e986f2717d1e9eac1690a5870a6b5",
"assets/assets/images/event_loader_3.webp": "e89b9d865e627378ab50f3b227f6ac58",
"assets/assets/images/event_loader_4.webp": "9e446705ec61569d5793d6a2a58e87f8",
"assets/assets/images/explore_loading_1.webp": "9cfe134ec4b944441f63465c60fba63c",
"assets/assets/images/explore_loading_2.webp": "0ed764e3c81b391cedb254c94532d83a",
"assets/assets/images/explore_loading_3.webp": "0dbbcf40b4dd6fac4b40e1f622ec3915",
"assets/assets/images/explore_loading_4.webp": "b4800fbd59bc65dac0ed59769e304515",
"assets/assets/images/female_icon.svg": "f478528ac3b012233ebfc8f37ceef392",
"assets/assets/images/flight_arrow.svg": "d60f600c095f0ba829157ffa62e9b9c8",
"assets/assets/images/flight_attendent_icon.png": "989fcb5738f14a9a909e7e8754ecaee3",
"assets/assets/images/flight_double_arrow.svg": "2604ceb1a4349578200ddfd57a32b379",
"assets/assets/images/flight_loader_1.png": "4ff88cfcfcaa4c851a5ffdbe999b8ff6",
"assets/assets/images/flight_loader_2.png": "419f56e82a8838748a4de950a4eb5569",
"assets/assets/images/flight_loader_3.png": "7557fea26c16f0b2c11050e5c5219214",
"assets/assets/images/flight_loader_4.png": "c956fd7d6e97ddaf8dd9080e3e3c24a3",
"assets/assets/images/flight_qr.png": "53985d1c7748df5e81fe960afb22b8fd",
"assets/assets/images/fridge_icon.svg": "432e6d35cefabd14533d2a979d7b0bbd",
"assets/assets/images/google_icon.svg": "6459449ed44cd231d6fafcf26b82f0fc",
"assets/assets/images/google_logo.svg": "04822cc1dc627c807b34ba9723bc86fb",
"assets/assets/images/home/home_carousel_arrow_left.svg": "dfa8eccb155e6d609b53d2909450c9df",
"assets/assets/images/home/home_carousel_arrow_right.svg": "b56205a4f247a1f5788976bcf92c3066",
"assets/assets/images/home/mobile/1.png": "1cc4ed2eb0e743e21a20bf52741a88ce",
"assets/assets/images/home/mobile/10.png": "05b6392709c0596af2ffcd032440898f",
"assets/assets/images/home/mobile/11.png": "4ce7de0d47fb0c7ed0327c0f4a46c683",
"assets/assets/images/home/mobile/12.png": "7aedc794027aa3e6ee74c18e336af7cf",
"assets/assets/images/home/mobile/13.png": "87df5dc6e347905a7f95c5295376f3ea",
"assets/assets/images/home/mobile/14.png": "1f5c710f13b4d419c677f5fce13103b8",
"assets/assets/images/home/mobile/15.png": "b210e918ac45562eea786e9cdf939536",
"assets/assets/images/home/mobile/16.png": "df2f6b31bd46a624826a38eec247bede",
"assets/assets/images/home/mobile/17.png": "e9ff2901c4a1c9b3620297fa6ffdb580",
"assets/assets/images/home/mobile/18.png": "f6573a064f74a4a895c7cc80632c4261",
"assets/assets/images/home/mobile/19.png": "9eaf6cf862af39827c67db1814edc543",
"assets/assets/images/home/mobile/2.png": "d42453a501ff07820a54e492226b4060",
"assets/assets/images/home/mobile/20.png": "d2d511c7589b54eeaa7189be56cafb5c",
"assets/assets/images/home/mobile/3.png": "fc5ef53ef105c15b9e5d448d5e192851",
"assets/assets/images/home/mobile/4.png": "d872fdf73cd5f4c60067a78c800023fe",
"assets/assets/images/home/mobile/5.png": "29a0bcba25a792d47d88962855057637",
"assets/assets/images/home/mobile/6.png": "d1b348ca0532ade39d2222570ffed9d6",
"assets/assets/images/home/mobile/7.png": "9174d1f4d57200558400576f80563183",
"assets/assets/images/home/mobile/8.png": "0a13980c7240e537605dbd452c432856",
"assets/assets/images/home/mobile/9.png": "fbc17cb96ca1ad8ef9042db30cf7e4fd",
"assets/assets/images/home/web/1.png": "ec70ce5df0d59370c3271aa2c6b841e2",
"assets/assets/images/home/web/10.webp": "45c08051771371cd5360ef7e35eeabad",
"assets/assets/images/home/web/11.webp": "2960da04bd03926bbb0dec42218b8ad6",
"assets/assets/images/home/web/12.webp": "03cebc6e3be405ca3078272c120dedb9",
"assets/assets/images/home/web/13.webp": "85b07ec8a4190689b4d649e47169dd48",
"assets/assets/images/home/web/14.webp": "ef21e16311e318542ab0278ad442575a",
"assets/assets/images/home/web/15.webp": "5e995c21862424b2e4c0ff4d402bf935",
"assets/assets/images/home/web/16.webp": "18584aac54237c8f4ff5a3975fd0fce9",
"assets/assets/images/home/web/17.webp": "c166afda5fc42402bec00ed94e8b3f51",
"assets/assets/images/home/web/18.webp": "506efc94252d65f3873daee8db14514c",
"assets/assets/images/home/web/19.webp": "c479568193e29f6504ee963e0eb9a284",
"assets/assets/images/home/web/2.webp": "ca09bb6ecd11a76ecdab75b69798b59b",
"assets/assets/images/home/web/20.webp": "03cc9fed128613fa0852e8b2a2ad9d0c",
"assets/assets/images/home/web/3.webp": "3e6364d2e51248f7ea5b609f1c09f247",
"assets/assets/images/home/web/4.webp": "c7895a150d2f596f7bf097aa48e30f4f",
"assets/assets/images/home/web/5.webp": "4d1347121ae50a296772933793f21ce6",
"assets/assets/images/home/web/6.webp": "27b630e7e05baa1846c19117fe2fc6ba",
"assets/assets/images/home/web/7.webp": "6589adf901aa263db8a80beb042779dd",
"assets/assets/images/home/web/8.webp": "6a085778a8de3e9a3eba2e5fa9a074a5",
"assets/assets/images/home/web/9.webp": "f29a8d85e8fdc117d6cb3a80f2e04762",
"assets/assets/images/home_ic.svg": "f4bf46abd220ef1fa0cdd5d974974829",
"assets/assets/images/hotel_image.webp": "dde9cc14bdd818619f07f6020628e63d",
"assets/assets/images/hotel_img.webp": "24a757cf79dfedff1ff37ed6dbe3317e",
"assets/assets/images/hotel_loading_1.webp": "6580fc2473b5d3b97bbe36baf76f7b98",
"assets/assets/images/hotel_loading_2.webp": "5bbec46a418a84f76892a8c983882268",
"assets/assets/images/hotel_loading_3.webp": "45df3bd2926e765affaece94cb97b942",
"assets/assets/images/hotel_loading_4.webp": "81dce04a559766a6a33e62336560dfd7",
"assets/assets/images/ic_add.png": "34c9d6126aaea4c65ff42af0998e8bf8",
"assets/assets/images/ic_clock.png": "e6177effaa5c306403faf9b4a6ad80d2",
"assets/assets/images/ic_cloud.svg": "e90e8d9bce7f3990d13c0f3cc6e99864",
"assets/assets/images/ic_delete.png": "1e477ece28f1563765ff282348249d4b",
"assets/assets/images/ic_driving.png": "1cc38c8644191f7ac5d2a94f722f0b7d",
"assets/assets/images/ic_drop.svg": "9be03a3e33e134edae85adf073d9fcd9",
"assets/assets/images/ic_flight.png": "c2eca05bb4c1f69160ff27a8d8eb60f5",
"assets/assets/images/ic_itinerary.png": "b5020234e37f010fe730de16d82fe9f4",
"assets/assets/images/ic_photo_gallery.png": "fdfce909e18a1b955377ab8bc5424afa",
"assets/assets/images/ic_star.png": "65a62073788579d3152694588ff5c780",
"assets/assets/images/ic_ticket.png": "c228e23d555fdb9c851c2558bf8a854b",
"assets/assets/images/ic_transit.png": "6681a2649511c0bd73906b9f3531c537",
"assets/assets/images/ic_two_wheelers.png": "9a8390d28b3d75ed9659ecc60efb4be0",
"assets/assets/images/ic_walking.png": "8296823ccaa9866313339b3907eb434d",
"assets/assets/images/image_loading_error.svg": "4672b7f3faa510dbb8c9faf46fd157f2",
"assets/assets/images/img_event.png": "a5fc7dc5a996da207eba87391579c4bf",
"assets/assets/images/img_flight.jpg": "7d4f537dd9cdfa19fba9199798eb7222",
"assets/assets/images/img_itinerary_hotel.webp": "021505fae7e0cd01d3aab859727c5d42",
"assets/assets/images/img_itinerary_place.webp": "70a9d45492a5ab9fc1b6436aa735ff60",
"assets/assets/images/img_itinerary_restaurants.webp": "f674b86f8195d5364b5405a195b29f68",
"assets/assets/images/img_restaurant.png": "eb90398a317b0170b5ffa98232fe3b61",
"assets/assets/images/itinerary_copy_icon.svg": "2cb7304ef03f350878f0e3a9d9c294e9",
"assets/assets/images/itinerary_generate_icon.svg": "1473b0c5f48a85d7f0710a577674f377",
"assets/assets/images/itinerary_loading_1.webp": "8145df82f00dc7845bdff62dfdca74db",
"assets/assets/images/itinerary_loading_2.webp": "83cde70063e71e6bc31fabe4cf3ed986",
"assets/assets/images/itinerary_loading_3.webp": "18fdec00d2029a8d366f686628a3a53f",
"assets/assets/images/itinerary_loading_4.webp": "cdd5d74dfba239391d763285dd69bb38",
"assets/assets/images/itinerary_update_icon.svg": "6149d11d2b4512dc7f0302677653421e",
"assets/assets/images/itinerary_view_icon.svg": "ab9227d493659647df13b6606d1dccd1",
"assets/assets/images/kids_icon.svg": "019bc522fe1cf64a6aeb4bf19cff6924",
"assets/assets/images/landing_flight.svg": "4e2c6ba40945965da5d9064503ea6511",
"assets/assets/images/launcher.png": "c32fa032b56fca83a5de2bee7a7452bd",
"assets/assets/images/location.svg": "2981773acff9f7c33188976fbc7c419e",
"assets/assets/images/location_arrow.svg": "187c476a1e194d34fc71f32c63e4c399",
"assets/assets/images/location_ic.png": "7ce906f3e2130fc12de4f6520ce3edae",
"assets/assets/images/login_landing_bg.png": "2b33faad748072dfa6ba8daaef9ec967",
"assets/assets/images/login_web.webp": "7196825300b354174727fd8905eedbf4",
"assets/assets/images/logo.svg": "e047af7cbe650fd5c907f6c909faa1f7",
"assets/assets/images/logout_icon.svg": "ecdb2ab79056393476ad97fffd0b6ffd",
"assets/assets/images/logo_ic.svg": "178a6dd894fa8077cb207d2532b03f1b",
"assets/assets/images/male_icon.svg": "85ec205d3900bec5b3690171e70f029f",
"assets/assets/images/map_user_arrow.webp": "b292c6d8297b1de03545b685f1389d60",
"assets/assets/images/map_user_car_icon.png": "4255ce8bfeea94937af6ee30c10809f3",
"assets/assets/images/marker-bg.png": "1c16e51773a33f7f917378b9f74afb67",
"assets/assets/images/mic_background_complex.svg": "d9019faa3566c6377ebc126f9aeed634",
"assets/assets/images/mic_black_ic.svg": "0965a1409cfc6f44386c33267fefbad8",
"assets/assets/images/mic_icon_complex.svg": "e9f566fe73ba14c2a917b22342dc8d00",
"assets/assets/images/mini-arrow-right.png": "591a4f90826751e2763785277b074801",
"assets/assets/images/next.png": "acd9985488dfdc4293a1ae8611c570e7",
"assets/assets/images/next_icon.svg": "cc1a47f49208f92fbad7ca562fcc89a4",
"assets/assets/images/person.svg": "86b07cf9f6331a7fbd9db9f313707fdd",
"assets/assets/images/previous.png": "138f33413ea904443471b76fb92283b5",
"assets/assets/images/prev_icon.svg": "ede7ec2fcb42e6e9ecfb6a27a3efcf2e",
"assets/assets/images/profile_tick.svg": "28d8dc3a5f4de049816fe85e3bcf095a",
"assets/assets/images/receipt_icon.svg": "0bb1cfcc4ac843385533afd96a97dc5d",
"assets/assets/images/restaurant_loading_1.webp": "014c63c32ccfeb117b0b8b88455453b1",
"assets/assets/images/restaurant_loading_2.webp": "7a912c9e012602fe2f3c4de79244dd85",
"assets/assets/images/restaurant_loading_3.webp": "55bf85718064155d6b0d229548a6ac6d",
"assets/assets/images/restaurant_loading_4.webp": "ba1795c8fc74fb29d3c4f2a50c9d4a85",
"assets/assets/images/review_avatar.png": "e9662f8a86efe68628caf910100bb9dc",
"assets/assets/images/session_owner_icon.svg": "7acac283b3d29df328c1af6b172906c5",
"assets/assets/images/share.svg": "a05824a1dfcb78c5e006fcbc44dac4fd",
"assets/assets/images/sidebar-simple-left-wide.svg": "d5121333bdcafb8c94e4b91d3870276c",
"assets/assets/images/star.png": "4b7c888d7378a5939b6766fcbfecaee3",
"assets/assets/images/text_icon.svg": "c3430aac6181ef5e222b683638079149",
"assets/assets/images/thumb_up_icon.svg": "93fba25a09b8b91389f60694d2d3990c",
"assets/assets/images/train.png": "75f55ffd0b396b11d3ead6b56e4bbefb",
"assets/assets/images/transport_loading_1.png": "527c009bc390376d9b856044356f8693",
"assets/assets/images/transport_loading_2.png": "ab9a058499b0940303f5c8c803873daa",
"assets/assets/images/transport_loading_3.png": "aa0f627e9e8020c8a9892d5983af546c",
"assets/assets/images/transport_loading_4.png": "1e7c04b745f8d0b0f025e17806011938",
"assets/assets/images/tv_icon.svg": "fb3f4c95db2ad852062109734e4ce310",
"assets/assets/images/video_bot_speaking.svg": "59ec80554a8479502e7a1070b01b488e",
"assets/assets/images/video_camera_off.svg": "100c6a385e2ecaa359bdec8a3c0b467b",
"assets/assets/images/video_camera_on.svg": "bf1aee965d66cfb01d9e7570bff70c36",
"assets/assets/images/video_camera_switch.svg": "f9381a3717b82b24cf75cf3365fe86ab",
"assets/assets/images/video_exit.svg": "6c58017e5971b8534c954c4ccce3af91",
"assets/assets/images/video_expand.svg": "c56e8149550ac04a6f6d4004bba50f08",
"assets/assets/images/video_field_image.png": "d249d3129ebd2071796d46c654993c39",
"assets/assets/images/video_logo.svg": "65b8f4c024343f3ac546ea509311d651",
"assets/assets/images/video_microphone_off.svg": "e4e3542807b2282b8c08950e731f9b03",
"assets/assets/images/video_microphone_on.svg": "90b031a979edce439051a9cffeec2476",
"assets/assets/images/video_minimize.svg": "038ab390735acc3b383e6a3ce244219e",
"assets/assets/images/video_speaker_off.svg": "82c9b37a62c067ae6b4755f1948b4712",
"assets/assets/images/video_speaker_on.svg": "45b98c29ed90ce1da60e8a62f1070b10",
"assets/assets/images/video_user_speaking.svg": "36fdb925877afa5bb84433c405b71889",
"assets/assets/images/view_the_handbook_icon.svg": "2c53cdf0e4082271b5759e04edeab3b6",
"assets/assets/images/volume_off_icon.svg": "38f982dbf4574700123846259b6fcdea",
"assets/assets/images/weather-cloudy.png": "103672a6ff40ccb1f4669966f57a9fb2",
"assets/assets/images/weather-rainy.png": "9d3a4e50654640304ecff18c4594cd95",
"assets/assets/images/weather-sun.png": "a9a6cb86a6191c3333190c7f859ecee1",
"assets/assets/images/weather-windy.png": "900a59e3c096cffd84a0fb0ef56ce2ba",
"assets/assets/images/weather_cloudy.png": "1333f89656804cf874eec449618b0ecc",
"assets/assets/images/weather_partly_cloudy.png": "acdab59d4d1009418ee9e5e8326ca724",
"assets/assets/images/weather_rainy.png": "c1b8392aa941d20676b462da80e935e4",
"assets/assets/images/weather_snowy.png": "e95c1f88ad055a4df7aee21645946211",
"assets/assets/images/weather_sunny.png": "efc062882d44b0775e78b47722fe43ac",
"assets/assets/images/weather_thunder.png": "7fd0a94f8fbbd2a4b2347403a9c4caed",
"assets/assets/images/web_ic.png": "bc7977cb93bd093248495a3efc1f8e25",
"assets/assets/images/web_search_close_icon.svg": "daaeea0f631d3ab412c6e34ef81adf2a",
"assets/assets/images/white_transparent_line.png": "b992a88e2e3597f00e52b4ae7aa2c950",
"assets/assets/images/wifi_icon.svg": "6264ca701463e5ff4f05c5cf98e89f2a",
"assets/assets/map_style.json": "c12f1e334f30367b495b93030e9bca6d",
"assets/assets/sounds/calling_processing.mp3": "f535b3daaa0753a8fd9b89dadf9f9a21",
"assets/assets/sounds/connected.mp3": "b6718139e9bb2c90d0a5a6b210d0c06c",
"assets/assets/vad/bundle.min.js": "4cae313581569b78fa211baf4b3c366f",
"assets/assets/vad/ort-wasm-simd-threaded.wasm": "cf09dc27f93606fde7c6637dbc60ca30",
"assets/assets/vad/ort-wasm-simd.wasm": "49460a4b3ff6631a5475ff4e53ac5404",
"assets/assets/vad/ort.js": "dd86ffc8dcdd78c5b2d653478ea50b8f",
"assets/assets/vad/silero_vad_legacy.onnx": "03da8de2fec4108a089b39f1b4abefef",
"assets/assets/vad/silero_vad_v5.onnx": "ad78afa8b67a4f24c1201d7dd2f65bb1",
"assets/assets/vad/vad.worklet.bundle.min.js": "9b26cae14d54e7356a62cf1abae4527c",
"assets/assets/vad/vad_web.js": "f7368c952f4581cd4858da6fd9b3188a",
"assets/FontManifest.json": "71cc9f6b0e6a12e50de4e0a663c06c3f",
"assets/fonts/MaterialIcons-Regular.otf": "2ec69593b8ebf417fed9d33d3c1c7c55",
"assets/NOTICES": "bca6d3a1bb0eca01b8133a2658a27014",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "507ad209b8d95af3fa8f8972acacea3b",
"assets/packages/glass/images/noise.png": "326f70bd3633c4bb951eac0da073485d",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "8a5f575ecdf23f21bcae8204882d54bb",
"assets/packages/syncfusion_flutter_datepicker/assets/fonts/Roboto-Medium.ttf": "7d752fb726f5ece291e2e522fcecf86d",
"assets/packages/vad/assets/bundle.min.js": "4cae313581569b78fa211baf4b3c366f",
"assets/packages/vad/assets/ort-wasm-simd-threaded.wasm": "cf09dc27f93606fde7c6637dbc60ca30",
"assets/packages/vad/assets/ort-wasm-simd.wasm": "49460a4b3ff6631a5475ff4e53ac5404",
"assets/packages/vad/assets/ort.js": "52ba7cb2aa35b6975a6635b096c8db03",
"assets/packages/vad/assets/silero_vad_legacy.onnx": "03da8de2fec4108a089b39f1b4abefef",
"assets/packages/vad/assets/silero_vad_v5.onnx": "ad78afa8b67a4f24c1201d7dd2f65bb1",
"assets/packages/vad/assets/vad.worklet.bundle.min.js": "9b26cae14d54e7356a62cf1abae4527c",
"assets/packages/vad/assets/vad_web.js": "f6235790d5907304149d7e34ddb8b712",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "9ec3cdc0277dd02c19db0fcc625a2e6a",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "d19da14d1043f456eb9ad3494f155d86",
"icons/Icon-192.png": "f227577269e6a65b6b0f2c30f07f2f48",
"icons/Icon-512.png": "1edffbc397bf901019b217f499d85c3d",
"icons/Icon-maskable-192.png": "f227577269e6a65b6b0f2c30f07f2f48",
"icons/Icon-maskable-512.png": "1edffbc397bf901019b217f499d85c3d",
"index.html": "a06f64cc6e01d76fefebf68e4284a4ae",
"/": "a06f64cc6e01d76fefebf68e4284a4ae",
"main.dart.js": "2e91ddf33309b174628246fb993669ae",
"manifest.json": "b06964d27bf7c348234863c6bbd16c42",
"version.json": "b78d65829b870370760d64cf9db4883d"};
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
