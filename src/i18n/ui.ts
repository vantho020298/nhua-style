import type { Lang } from './langs';

type Entry = Record<Lang, string>;

// Interface text for every theme. Content (services, team, posts…) comes from
// src/data and already carries its own translations.
export const ui = {
  // Navigation & common
  home: { vi: 'Trang chủ', en: 'Home', ja: 'ホーム', ko: '홈', zh: '首页', ru: 'Главная' },
  services: { vi: 'Dịch vụ', en: 'Services', ja: 'サービス', ko: '서비스', zh: '服务', ru: 'Услуги' },
  team: { vi: 'Đội ngũ', en: 'Team', ja: 'スタッフ', ko: '팀', zh: '团队', ru: 'Команда' },
  gallery: { vi: 'Thư viện ảnh', en: 'Gallery', ja: 'ギャラリー', ko: '갤러리', zh: '图库', ru: 'Галерея' },
  locations: { vi: 'Chi nhánh', en: 'Locations', ja: '店舗', ko: '매장', zh: '门店', ru: 'Салоны' },
  blog: { vi: 'Bài viết', en: 'Blog', ja: 'ブログ', ko: '블로그', zh: '博客', ru: 'Блог' },
  about: { vi: 'Giới thiệu', en: 'About', ja: '当店について', ko: '소개', zh: '关于我们', ru: 'О нас' },
  products: { vi: 'Sản phẩm', en: 'Products', ja: '商品', ko: '제품', zh: '产品', ru: 'Товары' },
  privacy: { vi: 'Chính sách bảo mật', en: 'Privacy policy', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', ru: 'Политика конфиденциальности' },
  bookNow: { vi: 'Đặt lịch', en: 'Book now', ja: '予約する', ko: '예약하기', zh: '立即预约', ru: 'Записаться' },
  book: { vi: 'Đặt', en: 'Book', ja: '予約', ko: '예약', zh: '预约', ru: 'Записаться' },
  bookThis: { vi: 'Đặt gói này', en: 'Book this', ja: 'このコースを予約', ko: '이 패키지 예약', zh: '预约此套餐', ru: 'Записаться' },
  menu: { vi: 'Menu', en: 'Menu', ja: 'メニュー', ko: '메뉴', zh: '菜单', ru: 'Меню' },
  close: { vi: 'Đóng', en: 'Close', ja: '閉じる', ko: '닫기', zh: '关闭', ru: 'Закрыть' },
  language: { vi: 'Ngôn ngữ', en: 'Language', ja: '言語', ko: '언어', zh: '语言', ru: 'Язык' },
  skip: { vi: 'Chuyển đến nội dung chính', en: 'Skip to content', ja: '本文へスキップ', ko: '본문으로 건너뛰기', zh: '跳到正文', ru: 'Перейти к содержанию' },
  minutes: { vi: 'phút', en: 'min', ja: '分', ko: '분', zh: '分钟', ru: 'мин' },
  pricesNote: { vi: 'Giá tính bằng VND.', en: 'Prices in VND.', ja: '料金はベトナムドン（VND）表示です。', ko: '가격은 베트남 동(VND) 기준입니다.', zh: '价格以越南盾（VND）计。', ru: 'Цены указаны во вьетнамских донгах (VND).' },
  included: { vi: 'Bao gồm', en: 'Included', ja: '内容', ko: '포함 내용', zh: '包含项目', ru: 'Что входит' },
  duration: { vi: 'Thời lượng', en: 'Duration', ja: '所要時間', ko: '소요 시간', zh: '时长', ru: 'Длительность' },
  price: { vi: 'Giá', en: 'Price', ja: '料金', ko: '가격', zh: '价格', ru: 'Цена' },
  confirmOnBooking: { vi: 'Xác nhận khi đặt lịch', en: 'Confirmed when you book', ja: 'ご予約時にご案内します', ko: '예약 시 안내해 드립니다', zh: '预约时确认', ru: 'Уточняется при записи' },

  // Groups
  group_signature: { vi: 'Trải nghiệm đặc trưng', en: 'Signature experiences', ja: 'シグネチャーコース', ko: '시그니처 코스', zh: '招牌体验', ru: 'Фирменные пакеты' },
  group_relax: { vi: 'Combo thư giãn', en: 'Relaxation combos', ja: 'リラクゼーションコース', ko: '릴랙스 콤보', zh: '放松套餐', ru: 'Пакеты ухода и отдыха' },
  group_single: { vi: 'Dịch vụ lẻ', en: 'Individual services', ja: '単品サービス', ko: '개별 서비스', zh: '单项服务', ru: 'Отдельные услуги' },
  group_chemical: { vi: 'Uốn, nhuộm, duỗi', en: 'Perm, colour & straightening', ja: 'パーマ・カラー・縮毛矯正', ko: '펌 · 염색 · 스트레이트', zh: '烫发 · 染发 · 拉直', ru: 'Завивка, окрашивание, выпрямление' },
  groupLead_signature: { vi: 'Cắt tóc kết hợp chăm sóc và thư giãn trong một lần hẹn.', en: 'A haircut plus care and relaxation in one visit.', ja: 'カットとケア、リラクゼーションを一度に。', ko: '커트와 케어, 휴식을 한 번에.', zh: '一次预约，剪发、护理与放松一并完成。', ru: 'Стрижка, уход и отдых за один визит.' },
  groupLead_relax: { vi: 'Gói thư giãn, không bao gồm cắt tóc.', en: 'Relaxation packages, haircut not included.', ja: 'リラクゼーションのセット（カットは含みません）。', ko: '릴랙스 패키지 (커트 미포함).', zh: '放松套餐，不含理发。', ru: 'Пакеты для отдыха, без стрижки.' },
  groupLead_single: { vi: 'Chọn riêng từng dịch vụ theo nhu cầu.', en: 'Pick exactly what you need.', ja: '必要なものだけを選べます。', ko: '필요한 서비스만 골라 보세요.', zh: '按需单独选择。', ru: 'Выберите только то, что нужно.' },
  groupLead_chemical: { vi: 'Thời lượng tuỳ độ dài và tình trạng tóc.', en: 'Timing depends on your hair length and condition.', ja: '所要時間は髪の長さと状態によって異なります。', ko: '소요 시간은 모발 길이와 상태에 따라 다릅니다.', zh: '时长视发长与发质而定。', ru: 'Время зависит от длины и состояния волос.' },

  // Contact & hours
  address: { vi: 'Địa chỉ', en: 'Address', ja: '住所', ko: '주소', zh: '地址', ru: 'Адрес' },
  hours: { vi: 'Giờ mở cửa', en: 'Opening hours', ja: '営業時間', ko: '영업시간', zh: '营业时间', ru: 'Часы работы' },
  monday: { vi: 'Thứ Hai', en: 'Monday', ja: '月曜日', ko: '월요일', zh: '周一', ru: 'Понедельник' },
  tueSun: { vi: 'Thứ Ba – Chủ Nhật', en: 'Tuesday – Sunday', ja: '火曜日〜日曜日', ko: '화요일 – 일요일', zh: '周二至周日', ru: 'Вторник – воскресенье' },
  openDaily: { vi: 'Mở cửa mỗi ngày', en: 'Open every day', ja: '毎日営業', ko: '연중무휴', zh: '每天营业', ru: 'Открыто каждый день' },
  mondayFrom: { vi: 'Thứ Hai từ 09:30', en: 'Monday from 09:30', ja: '月曜は09:30から', ko: '월요일은 09:30부터', zh: '周一 09:30 起', ru: 'В понедельник с 09:30' },
  phone: { vi: 'Điện thoại', en: 'Phone', ja: '電話', ko: '전화', zh: '电话', ru: 'Телефон' },
  call: { vi: 'Gọi điện', en: 'Call', ja: '電話する', ko: '전화하기', zh: '致电', ru: 'Позвонить' },
  directions: { vi: 'Chỉ đường', en: 'Directions', ja: '道順', ko: '길찾기', zh: '导航', ru: 'Маршрут' },
  followUs: { vi: 'Theo dõi chúng tôi', en: 'Follow us', ja: '公式SNS', ko: '팔로우', zh: '关注我们', ru: 'Мы в соцсетях' },
  mapOf: { vi: 'Bản đồ đến {name}', en: 'Map to {name}', ja: '{name}への地図', ko: '{name} 지도', zh: '{name} 地图', ru: 'Карта: {name}' },

  // Shared homepage blocks
  metaPlace: { vi: 'Nhựa Style Barber Shop: cắt tóc, gội đầu dưỡng sinh và massage tại Đà Nẵng.', en: 'Nhựa Style Barber Shop: haircuts, herbal hair wash and massage in Đà Nẵng.', ja: 'ダナンのNhựa Style Barber Shop：カット、ハーブシャンプー、マッサージ。', ko: '다낭 Nhựa Style Barber Shop: 커트, 허브 샴푸, 마사지.', zh: '岘港 Nhựa Style Barber Shop：理发、草本洗头与按摩。', ru: 'Nhựa Style Barber Shop в Дананге: стрижки, травяное мытьё головы и массаж.' },
  playVideo: { vi: 'Phát video: {title}', en: 'Play video: {title}', ja: '動画を再生：{title}', ko: '동영상 재생: {title}', zh: '播放视频：{title}', ru: 'Смотреть видео: {title}' },

  // Homepage
  homeEyebrow: { vi: 'BARBER SHOP · ĐÀ NẴNG', en: 'BARBER SHOP · ĐÀ NẴNG', ja: 'バーバーショップ · ダナン', ko: '바버숍 · 다낭', zh: '理发店 · 岘港', ru: 'БАРБЕРШОП · ДАНАНГ' },
  menu_title: { vi: 'Cắt tóc chuẩn barber, thư\u00a0giãn kiểu\u00a0Việt.', en: 'Real barber cuts, the Vietnamese way to relax.', ja: '本格バーバー\u200bカットと、\u200bベトナム式\u200bリラクゼーション', ko: '정통 바버 커트, 베트남식 휴식.', zh: '地道理发，越式放松。', ru: 'Настоящая барберская стрижка и вьетнамский отдых.' },
  menu_lead: { vi: 'Giá niêm yết rõ ràng: chọn dịch vụ lẻ hoặc combo. Đặt lịch qua Zalo, WhatsApp hay WeChat chỉ mất một phút.', en: 'Every price listed up front: pick single services or a combo. Booking on Zalo, WhatsApp or WeChat takes a minute.', ja: '料金はすべて明示。単品でもコースでも選べます。Zalo・WhatsApp・WeChatなら1⁠分で予約できます。', ko: '모든 가격을 미리 안내합니다. 개별 서비스나 콤보를 고르세요. Zalo, WhatsApp, WeChat으로 1분이면 예약 요청이 끝납니다.', zh: '所有价格明码标价，可单点也可选套餐。通过微信、Zalo、WhatsApp 或直接致电，一分钟即可预约。', ru: 'Все цены указаны заранее: выбирайте отдельные услуги или пакет. Запись через Zalo, WhatsApp или WeChat займёт минуту.' },
  menu_head: { vi: 'Bảng giá', en: 'Menu', ja: 'メニュー', ko: '메뉴', zh: '价目表', ru: 'Меню' },

  // Locations
  locationsTitle: { vi: 'Các tiệm Nhựa Style', en: 'Nhựa Style shops', ja: 'Nhựa Style 店舗一覧', ko: 'Nhựa Style 매장', zh: 'Nhựa Style 门店', ru: 'Салоны Nhựa Style' },
  locationsLead: { vi: 'Tiệm nào cũng cùng bảng giá. Đặt lịch qua một số Zalo / WhatsApp chung, hoặc WeChat.', en: 'Same prices at every shop. Book through one shared Zalo / WhatsApp number, or WeChat.', ja: '全店舗同じ料金です。共通のZalo／WhatsApp番号、またはWeChatでご予約いただけます。', ko: '모든 매장의 가격이 같습니다. 공용 Zalo / WhatsApp 번호나 WeChat으로 예약하세요.', zh: '各门店价格相同。可通过同一个 Zalo / WhatsApp 号码或微信预约。', ru: 'Цены во всех салонах одинаковые. Запись — через общий номер Zalo / WhatsApp или WeChat.' },

  // Inner pages
  guideTitle: { vi: 'Gợi ý chọn gói', en: 'Which package?', ja: 'パッケージの選び方', ko: '패키지 고르는 법', zh: '如何选择套餐', ru: 'Как выбрать пакет' },
  guide1: { vi: 'Lần đầu ghé hoặc chỉ có 1 giờ: Combo Cơ Bản hay Trải Nghiệm Việt.', en: 'First visit or only an hour: Basic Combo or Vietnamese Experience.', ja: '初めての方・1時間しかない方：ベーシックコンボまたはベトナム・エクスペリエンス。', ko: '처음 방문하시거나 1시간만 있다면: 베이직 콤보 또는 베트남 체험.', zh: '第一次来或只有一小时：基础套餐或越南式体验。', ru: 'Первый визит или всего час: «Базовый комплекс» или «Вьетнамский релакс».' },
  guide2: { vi: 'Muốn thư giãn trọn vẹn hoặc làm quà: Trải Nghiệm Việt Trọn Vẹn hay Nhựa Pro VIP.', en: 'The full treat, or a gift: Full Vietnamese Experience or Nhựa Pro VIP.', ja: 'しっかり癒されたい方・ギフトに：ベトナム・フルエクスペリエンスまたはNhựa Pro VIP。', ko: '제대로 쉬고 싶거나 선물용이라면: 완벽한 베트남 체험 또는 Nhựa Pro VIP.', zh: '想彻底放松或作为礼物：完整越南式体验或 Nhựa Pro 尊贵 VIP 体验。', ru: 'Полный отдых или подарок: «Полный вьетнамский релакс» или Nhựa Pro VIP.' },
  guide3: { vi: 'Đặt cho người lớn tuổi: ghi lực massage mong muốn vào ô ghi chú khi đặt lịch.', en: 'Booking for an older guest? Note the massage pressure they prefer when you book.', ja: 'ご年配の方のご予約は、ご希望のマッサージの強さを備考欄にご記入ください。', ko: '어르신 예약 시 원하시는 마사지 강도를 메모에 적어 주세요.', zh: '为长辈预约时，请在备注中写明希望的按摩力度。', ru: 'Записываете пожилого гостя? Укажите в комментарии желаемую силу массажа.' },
  servicesLead: { vi: 'Toàn bộ gói và dịch vụ lẻ áp dụng tại mọi chi nhánh, giá niêm yết rõ ràng.', en: 'Every package and individual service at every shop, with clear prices.', ja: '全店舗共通のパッケージと単品サービスを、明確な料金で。', ko: '모든 매장 공통의 패키지와 개별 서비스를 명확한 가격으로.', zh: '各门店通用的全部套餐与单项服务，价格清晰透明。', ru: 'Все пакеты и отдельные услуги во всех салонах с понятными ценами.' },
  teamLead: { vi: 'Barber và skinner của Nhựa Style.', en: 'Our barbers and care therapists.', ja: 'バーバーとケアスタッフのご紹介。', ko: '바버와 테라피스트를 소개합니다.', zh: '我们的理发师与护理师。', ru: 'Наши барберы и мастера по уходу.' },
  barbers: { vi: 'Barber', en: 'Barbers', ja: 'バーバー', ko: '바버', zh: '理发师', ru: 'Барберы' },
  skinners: { vi: 'Skinner', en: 'Care therapists', ja: 'ケアスタッフ', ko: '테라피스트', zh: '护理师', ru: 'Мастера по уходу' },
  role_barber: { vi: 'Barber', en: 'Barber', ja: 'バーバー', ko: '바버', zh: '理发师', ru: 'Барбер' },
  role_skinner: { vi: 'Skinner', en: 'Care therapist', ja: 'ケアスタッフ', ko: '테라피스트', zh: '护理师', ru: 'Мастер по уходу' },
  years: { vi: '{n} năm kinh nghiệm', en: '{n} years of experience', ja: '経験{n}年', ko: '경력 {n}년', zh: '{n} 年经验', ru: 'Опыт {n} года' },
  yearsShort: { vi: '{n} năm', en: '{n} yrs', ja: '{n}年', ko: '{n}년', zh: '{n} 年', ru: '{n} г.' },
  bookWith: { vi: 'Đặt lịch với {name}', en: 'Book with {name}', ja: '{name}を指名して予約', ko: '{name} 지명 예약', zh: '预约 {name}', ru: 'Записаться к мастеру {name}' },
  otherTeam: { vi: 'Thành viên khác', en: 'More of the team', ja: '他のスタッフ', ko: '다른 팀원', zh: '其他成员', ru: 'Другие мастера' },
  productsLead: { vi: 'Sản phẩm tạo kiểu chúng tôi dùng hằng ngày, có bán tại mọi chi nhánh.', en: 'The styling products we use every day, on sale at every shop.', ja: '私たちが毎日使うスタイリング剤。全店舗で販売中。', ko: '저희가 매일 사용하는 스타일링 제품, 모든 매장에서 판매합니다.', zh: '我们每天使用的造型产品，各门店均有售。', ru: 'Средства для укладки, которыми мы пользуемся каждый день. Продаются во всех салонах.' },
  buyInStore: { vi: 'Mua tại cửa hàng hoặc nhắn tin để giữ hàng.', en: 'Buy in store, or message us to hold one for you.', ja: '店頭でご購入いただくか、メッセージでお取り置きください。', ko: '매장에서 구매하시거나 메시지를 주시면 따로 보관해 드립니다.', zh: '可到店购买，或发消息让我们为您预留。', ru: 'Купите в салоне или напишите нам, чтобы отложить товар.' },
  brand: { vi: 'Thương hiệu', en: 'Brand', ja: 'ブランド', ko: '브랜드', zh: '品牌', ru: 'Бренд' },
  askAbout: { vi: 'Hỏi về sản phẩm này', en: 'Ask about this product', ja: 'この商品について問い合わせる', ko: '이 제품 문의하기', zh: '咨询此产品', ru: 'Спросить о товаре' },
  otherProducts: { vi: 'Sản phẩm khác', en: 'Other products', ja: '他の商品', ko: '다른 제품', zh: '其他产品', ru: 'Другие товары' },
  blogLead: { vi: 'Mẹo chăm sóc tóc và kinh nghiệm từ đội ngũ barber.', en: 'Hair-care tips and know-how from our barbers.', ja: 'バーバーによるヘアケアのコツ。', ko: '바버가 전하는 헤어 케어 팁.', zh: '来自理发师的护发技巧。', ru: 'Советы по уходу за волосами от наших барберов.' },
  morePosts: { vi: 'Bài viết khác', en: 'More articles', ja: '他の記事', ko: '다른 글', zh: '更多文章', ru: 'Другие статьи' },
  galleryLead: { vi: 'Ảnh và video thật tại tiệm, đăng khi có sự đồng ý của khách.', en: 'Real photos and videos from our shops, shared with our guests’ consent.', ja: 'お客様の同意を得て公開している、店内の実際の写真と動画です。', ko: '고객 동의 하에 공개하는 실제 매장 사진과 영상입니다.', zh: '店内真实照片与视频，经顾客同意后发布。', ru: 'Настоящие фото и видео из наших салонов — с согласия гостей.' },
  photos: { vi: 'Hình ảnh', en: 'Photos', ja: '写真', ko: '사진', zh: '照片', ru: 'Фото' },
  videos: { vi: 'Video', en: 'Videos', ja: '動画', ko: '동영상', zh: '视频', ru: 'Видео' },
  bookHere: { vi: 'Đặt lịch tại đây', en: 'Book here', ja: 'この店舗で予約', ko: '이 매장 예약', zh: '在此预约', ru: 'Записаться в этот салон' },

  // Booking
  bookingTitle: { vi: 'Đặt lịch', en: 'Book a visit', ja: 'ご予約', ko: '방문 예약', zh: '预约到店', ru: 'Запись' },
  bookingLead: { vi: 'Điền vài thông tin, chúng tôi tạo sẵn tin nhắn để bạn gửi qua WhatsApp, Zalo hoặc WeChat. Lịch hẹn được xác nhận khi tiệm trả lời.', en: 'Fill in a few details and we prepare a message for you to send on WhatsApp, Zalo or WeChat. Your visit is confirmed when the shop replies.', ja: '必要事項を入力すると、WhatsApp・Zalo・WeChatで送るメッセージを作成します。店舗からの返信をもって予約確定となります。', ko: '몇 가지 정보를 입력하시면 WhatsApp, Zalo 또는 WeChat로 보낼 메시지를 준비해 드립니다. 매장이 답장하면 예약이 확정됩니다.', zh: '填写几项信息，我们会生成一条消息，供您通过微信、WhatsApp 或 Zalo 发送。门店回复后预约即确认。', ru: 'Заполните несколько полей — мы подготовим сообщение для WhatsApp, Zalo или WeChat. Запись подтверждается, когда салон ответит.' },
  f_branch: { vi: 'Chi nhánh', en: 'Shop', ja: '店舗', ko: '매장', zh: '门店', ru: 'Салон' },
  f_service: { vi: 'Dịch vụ', en: 'Service', ja: 'サービス', ko: '서비스', zh: '服务', ru: 'Услуга' },
  f_choose: { vi: 'Chọn dịch vụ…', en: 'Choose a service…', ja: 'サービスを選択…', ko: '서비스 선택…', zh: '选择服务…', ru: 'Выберите услугу…' },
  f_barber: { vi: 'Thợ (không bắt buộc)', en: 'Barber (optional)', ja: '担当者（任意）', ko: '담당자 (선택)', zh: '指定师傅（可选）', ru: 'Мастер (необязательно)' },
  f_anyone: { vi: 'Ai cũng được', en: 'No preference', ja: '指名なし', ko: '지정 안 함', zh: '不指定', ru: 'Любой мастер' },
  f_date: { vi: 'Ngày', en: 'Date', ja: '日付', ko: '날짜', zh: '日期', ru: 'Дата' },
  f_time: { vi: 'Giờ', en: 'Time', ja: '時間', ko: '시간', zh: '时间', ru: 'Время' },
  f_people: { vi: 'Số người', en: 'Guests', ja: '人数', ko: '인원', zh: '人数', ru: 'Количество гостей' },
  f_name: { vi: 'Tên của bạn', en: 'Your name', ja: 'お名前', ko: '이름', zh: '您的姓名', ru: 'Ваше имя' },
  f_contact: { vi: 'Số điện thoại / Zalo', en: 'Phone / WhatsApp / WeChat', ja: '電話番号 / WhatsApp / WeChat', ko: '전화번호 / WhatsApp / WeChat', zh: '电话 / WhatsApp / 微信号', ru: 'Телефон / WhatsApp / WeChat' },
  m_name: { vi: 'Tên', en: 'Name', ja: 'お名前', ko: '이름', zh: '姓名', ru: 'Имя' },
  m_contact: { vi: 'Liên hệ', en: 'Contact', ja: '連絡先', ko: '연락처', zh: '联系方式', ru: 'Контакт' },
  f_note: { vi: 'Ghi chú', en: 'Notes', ja: 'ご要望', ko: '메모', zh: '备注', ru: 'Комментарий' },
  f_notePh: { vi: 'Ví dụ: kiểu tóc mong muốn, đặt làm quà, mỗi người một dịch vụ khác nhau…', en: 'E.g. the style you want, a gift, or a different service for each person…', ja: '例：ご希望のスタイル、ギフト利用、人数分で異なるサービスなど…', ko: '예: 원하는 스타일, 선물용, 인원별로 다른 서비스 등…', zh: '例如：想要的发型、作为礼物、多人不同服务请在此注明…', ru: 'Например: желаемая стрижка, подарок, разные услуги для каждого гостя…' },
  f_preview: { vi: 'Tin nhắn sẽ gửi', en: 'Your message', ja: '送信するメッセージ', ko: '보낼 메시지', zh: '将发送的消息', ru: 'Ваше сообщение' },
  f_send: { vi: 'Gửi qua', en: 'Send via', ja: '送信方法', ko: '보낼 앱 선택', zh: '发送方式', ru: 'Отправить через' },
  f_copied: { vi: 'Đã sao chép tin nhắn — dán vào khung chat vừa mở.', en: 'Message copied — paste it into the chat that just opened.', ja: 'メッセージをコピーしました。開いたチャットに貼り付けてください。', ko: '메시지가 복사되었습니다. 열린 채팅창에 붙여 넣으세요.', zh: '消息已复制，请粘贴到刚打开的聊天窗口。', ru: 'Сообщение скопировано — вставьте его в открывшийся чат.' },
  f_required: { vi: 'Vui lòng điền các mục bắt buộc.', en: 'Please fill in the required fields.', ja: '必須項目を入力してください。', ko: '필수 항목을 입력해 주세요.', zh: '请填写必填项。', ru: 'Заполните обязательные поля.' },
  f_greeting: { vi: 'Xin chào Nhựa Style, tôi muốn đặt lịch:', en: 'Hello Nhựa Style, I would like to book:', ja: 'こんにちは。Nhựa Styleの予約をお願いします：', ko: '안녕하세요 Nhựa Style, 예약하고 싶습니다:', zh: '您好 Nhựa Style，我想预约：', ru: 'Здравствуйте, Nhựa Style! Хочу записаться:' },
  f_chooseTime: { vi: 'Chọn giờ…', en: 'Choose a time…', ja: '時間を選択…', ko: '시간 선택…', zh: '选择时间…', ru: 'Выберите время…' },
  f_sameService: { vi: 'nếu mọi người dùng cùng dịch vụ', en: 'if everyone has the same service', ja: '全員が同じサービスの場合', ko: '모두 같은 서비스일 경우', zh: '按每人相同服务计算', ru: 'если у всех одна и та же услуга' },
  f_service2: { vi: 'Thêm dịch vụ (không bắt buộc)', en: 'Add another service (optional)', ja: '追加サービス（任意）', ko: '추가 서비스 (선택)', zh: '追加服务（可选）', ru: 'Ещё одна услуга (необязательно)' },
  f_none: { vi: 'Không', en: 'None', ja: 'なし', ko: '없음', zh: '不需要', ru: 'Нет' },
  f_groupHint: { vi: 'Đi nhóm hoặc mỗi người một dịch vụ khác? Ghi vào ô ghi chú, tiệm sẽ xác nhận có làm cùng lúc được không.', en: 'A group, or different services per person? Write it in the notes and the shop will confirm whether everyone can be served at the same time.', ja: 'グループや、お一人ずつ違うサービスの場合は備考欄にご記入ください。同時に対応できるか店舗からご連絡します。', ko: '단체이거나 인원별로 서비스가 다르면 메모에 적어 주세요. 동시 진행 가능 여부를 매장에서 확인해 드립니다.', zh: '多人同行或每人服务不同？请写在备注中，门店会确认能否同时安排。', ru: 'Вы группой или у каждого своя услуга? Напишите в комментарии — салон подтвердит, получится ли принять всех одновременно.' },
  f_noApp: { vi: 'Không dùng các ứng dụng này? Gọi thẳng cho tiệm:', en: "Don't use these apps? Call the shop:", ja: 'これらのアプリをお使いでない方はお電話で：', ko: '이 앱을 쓰지 않으시면 전화 주세요:', zh: '没有这些应用？请直接致电：', ru: 'Нет этих приложений? Позвоните в салон:' },
  homeTitle: { vi: 'Cắt tóc nam & barber Đà Nẵng', en: "Men's haircut & barber in Đà Nẵng", ja: 'ダナンのメンズカット・バーバー', ko: '다낭 남성 커트 & 바버숍', zh: '岘港男士理发店', ru: 'Мужские стрижки и барбершоп в Дананге' },
  justHaircut: { vi: 'Chỉ cần cắt tóc?', en: 'Just a haircut?', ja: 'カットだけなら', ko: '커트만 원하시면', zh: '只想理发？', ru: 'Только стрижка?' },
  f_person1: { vi: 'Dịch vụ cho người thứ 1', en: 'Service for the first person', ja: '1人目のサービス', ko: '첫 번째 분의 서비스', zh: '第 1 位的服务', ru: 'Услуга для первого гостя' },
  f_person2: { vi: 'Dịch vụ cho người thứ 2', en: 'Service for the second person', ja: '2人目のサービス', ko: '두 번째 분의 서비스', zh: '第 2 位的服务', ru: 'Услуга для второго гостя' },
  f_contactPh: { vi: '090 xxx xxxx', en: '+61 412 345 678', ja: '+81 90 1234 5678', ko: '+82 10 1234 5678', zh: '+86 138 0000 0000', ru: '+7 912 345-67-89' },
  f_wechatHint: { vi: 'Mở WeChat → Quét mã QR này (hoặc lưu ảnh rồi chọn từ thư viện) → kết bạn với {name} → dán tin nhắn đã sao chép và gửi.', en: 'Open WeChat → scan this QR code (or save the image and pick it from your album) → add {name} → paste the copied message and send.', ja: 'WeChatを開き、このQRコードをスキャン（または画像を保存してアルバムから選択）→ {name} を追加 → コピーしたメッセージを貼り付けて送信してください。', ko: 'WeChat을 열고 이 QR 코드를 스캔(또는 이미지를 저장해 앨범에서 선택) → {name} 친구 추가 → 복사된 메시지를 붙여 넣어 보내세요.', zh: '打开微信 → 扫描此二维码（或保存图片后从相册识别）→ 添加 {name} 为好友 → 粘贴已复制的消息并发送。', ru: 'Откройте WeChat → отсканируйте этот QR-код (или сохраните картинку и выберите её из галереи) → добавьте {name} → вставьте скопированное сообщение и отправьте.' },
  f_lang: { vi: 'Ngôn ngữ', en: 'Language', ja: '言語', ko: '언어', zh: '语言', ru: 'Язык' },
  f_sent: { vi: 'WhatsApp đã mở với tin nhắn soạn sẵn, bạn bấm Gửi là xong. Lịch được xác nhận khi tiệm trả lời.', en: 'WhatsApp opened with your message ready: tap Send. Your booking is confirmed once the shop replies.', ja: 'WhatsAppにメッセージを入力済みです。送信を押してください。店舗からの返信をもって予約確定となります。', ko: 'WhatsApp에 메시지가 입력되었습니다. 전송을 눌러 주세요. 매장이 답장하면 예약이 확정됩니다.', zh: 'WhatsApp 已打开并填好消息，请点击发送。店家回复后即预约成功。', ru: 'WhatsApp открыт с готовым сообщением — нажмите «Отправить». Запись подтверждается ответом салона.' },
  f_pasteHint: { vi: 'Zalo và WeChat không nhận tin soạn sẵn: trang sẽ chép tin nhắn giúp bạn, bạn chỉ cần dán vào ô chat (nhấn giữ → Dán, hoặc Ctrl+V / ⌘V trên máy tính) rồi gửi.', en: "Zalo and WeChat can't take a prefilled message: we copy it for you, then paste it into the chat (long-press → Paste, or Ctrl+V / ⌘V on a computer) and send.", ja: 'ZaloとWeChatはメッセージの自動入力に対応していません。コピーしますので、チャット欄に貼り付けて（長押し→ペースト、パソコンは Ctrl+V / ⌘V）送信してください。', ko: 'Zalo와 WeChat은 메시지 자동 입력이 안 됩니다. 메시지를 복사해 드리니 채팅창에 붙여 넣고(길게 눌러 붙여넣기, PC는 Ctrl+V / ⌘V) 보내 주세요.', zh: 'Zalo 和微信无法自动填写消息：我们会帮您复制，在聊天框粘贴（长按 → 粘贴，电脑上按 Ctrl+V / ⌘V）后发送即可。', ru: 'Zalo и WeChat не принимают готовый текст: мы скопируем сообщение, вам останется вставить его в чат (долгое нажатие → «Вставить» или Ctrl+V / ⌘V на компьютере) и отправить.' },
  f_copyFail: { vi: 'Không tự sao chép được, bạn hãy chọn và sao chép tin nhắn ở trên.', en: "Couldn't copy automatically: select and copy the message above.", ja: '自動コピーできませんでした。上のメッセージを選択してコピーしてください。', ko: '자동 복사에 실패했습니다. 위 메시지를 선택해 복사해 주세요.', zh: '无法自动复制，请手动选择并复制上方消息。', ru: 'Не удалось скопировать автоматически — выделите и скопируйте сообщение выше.' },
  f_estimate: { vi: 'Tạm tính', en: 'Estimated total', ja: '概算合計', ko: '예상 합계', zh: '预计合计', ru: 'Примерная сумма' },
  f_bilingual: { vi: '', en: 'Field names include Vietnamese so the shop can read them quickly.', ja: 'お店がすぐ読めるよう、項目名にベトナム語を併記しています。', ko: '매장이 바로 읽을 수 있도록 항목명에 베트남어를 함께 적었습니다.', zh: '为方便店家阅读，栏目名附有越南语。', ru: 'Названия полей продублированы по‑вьетнамски, чтобы салону было проще.' },
  bookingNote1: { vi: 'Đến sớm 5–10 phút để được tư vấn trước khi bắt đầu.', en: 'Arrive 5–10 minutes early for a quick consultation.', ja: 'カウンセリングのため5〜10分前にお越しください。', ko: '상담을 위해 5~10분 일찍 와 주세요.', zh: '请提前 5–10 分钟到店，以便先行咨询。', ru: 'Приходите за 5–10 минут до начала — на короткую консультацию.' },
  bookingNote2: { vi: 'Nếu đến trễ hoặc cần đổi giờ, hãy nhắn cho tiệm.', en: 'Running late or need another time? Just message the shop.', ja: '遅れる場合や時間変更は、店舗にメッセージでご連絡ください。', ko: '늦거나 시간을 바꾸셔야 하면 매장에 메시지를 보내 주세요.', zh: '如会迟到或需改时间，请给门店发消息。', ru: 'Опаздываете или нужно другое время? Напишите салону.' },
  bookingNote3: { vi: 'Thời lượng có thể thay đổi nhẹ tuỳ tình trạng tóc và da.', en: 'Timing may vary slightly with your hair and skin.', ja: '所要時間は髪や肌の状態により多少前後します。', ko: '소요 시간은 모발과 피부 상태에 따라 조금 달라질 수 있습니다.', zh: '时长可能因发质和肤质略有不同。', ru: 'Время может немного меняться в зависимости от волос и кожи.' },
  bookingOrCall: { vi: 'Muốn nói chuyện trực tiếp? Gọi cho tiệm.', en: 'Prefer to talk? Call the shop.', ja: 'お電話でのご予約も承ります。', ko: '전화로 예약하셔도 됩니다.', zh: '想直接沟通？请致电门店。', ru: 'Удобнее по телефону? Позвоните в салон.' },

  // Service detail
  aboutService: { vi: 'Chi tiết dịch vụ', en: 'About this service', ja: 'サービス詳細', ko: '서비스 상세', zh: '服务详情', ru: 'Об услуге' },
  morePackages: { vi: 'Gói khác', en: 'Other packages', ja: '他のパッケージ', ko: '다른 패키지', zh: '其他套餐', ru: 'Другие пакеты' },
  moreServices: { vi: 'Dịch vụ khác', en: 'Other services', ja: '他のサービス', ko: '다른 서비스', zh: '其他服务', ru: 'Другие услуги' },

  // Footer, meta & errors
  footerTagline: { vi: 'Cắt tóc, chăm sóc và massage cho nam giới tại Đà Nẵng.', en: 'Haircuts, grooming and massage for men in Đà Nẵng.', ja: 'ダナンの男性向けカット・グルーミング・マッサージ。', ko: '다낭의 남성 커트 · 그루밍 · 마사지.', zh: '岘港男士理发、护理与按摩。', ru: 'Стрижки, уход и массаж для мужчин в Дананге.' },
  metaHome: { vi: 'Nhựa Style Barber Shop Đà Nẵng: cắt tóc nam, cạo mặt khăn nóng, gội đầu dưỡng sinh, lấy ráy tai và massage. Mở cửa mỗi ngày.', en: 'Nhựa Style Barber Shop in Đà Nẵng: men’s haircuts, hot-towel shaves, Vietnamese herbal hair wash, ear cleaning and massage. Open daily.', ja: 'ダナンのNhựa Style Barber Shop。メンズカット、ホットタオルシェービング、ベトナム式ハーブシャンプー、耳掃除、マッサージ。毎日営業。', ko: '다낭 Nhựa Style Barber Shop: 남성 커트, 핫 타월 면도, 베트남식 허브 샴푸, 귀 청소, 마사지. 연중무휴.', zh: '岘港 Nhựa Style Barber Shop：男士理发、热毛巾修面、越南草本洗头、采耳与按摩。每天营业。', ru: 'Nhựa Style Barber Shop в Дананге: мужские стрижки, бритьё с горячим полотенцем, вьетнамское травяное мытьё головы, чистка ушей и массаж. Открыто ежедневно.' },
  f_copiedWechat: { vi: 'Đã sao chép tin nhắn — quét mã QR bên dưới để kết bạn, rồi dán và gửi.', en: 'Message copied — scan the QR code below to add us, then paste and send.', ja: 'メッセージをコピーしました。下のQRコードをスキャンして友だち追加し、貼り付けて送信してください。', ko: '메시지가 복사되었습니다. 아래 QR 코드를 스캔해 친구 추가한 뒤 붙여 넣어 보내세요.', zh: '消息已复制。请扫描下方二维码添加好友后粘贴发送。', ru: 'Сообщение скопировано — отсканируйте QR-код ниже, добавьте нас в друзья, затем вставьте и отправьте.' },
  wechatLabel: { vi: 'WeChat', en: 'WeChat', ja: 'WeChat', ko: 'WeChat', zh: '微信', ru: 'WeChat' },
  notFoundTitle: { vi: 'Không tìm thấy trang', en: 'Page not found', ja: 'ページが見つかりません', ko: '페이지를 찾을 수 없습니다', zh: '页面未找到', ru: 'Страница не найдена' },
  notFoundText: { vi: 'Trang này không tồn tại hoặc đã được chuyển.', en: 'This page does not exist or has moved.', ja: 'このページは存在しないか、移動しました。', ko: '이 페이지는 존재하지 않거나 이동되었습니다.', zh: '该页面不存在或已移动。', ru: 'Эта страница не существует или была перемещена.' },
} satisfies Record<string, Entry>;

export type UiKey = keyof typeof ui;

export function t(lang: Lang, key: UiKey, vars: Record<string, string | number> = {}): string {
  return ui[key][lang].replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''));
}

/** "4 years of experience" / "4 yrs", with plural forms where the language has them. */
export function yearsText(lang: Lang, n: number, short = false): string {
  if (lang === 'ru') {
    const word = { one: 'год', few: 'года', many: 'лет', two: 'года', zero: 'лет', other: 'года' }[new Intl.PluralRules('ru').select(n)];
    return short ? `${n} ${word}` : `${n} ${word} опыта`;
  }
  if (lang === 'en') return short ? `${n} ${n === 1 ? 'yr' : 'yrs'}` : `${n} ${n === 1 ? 'year' : 'years'} of experience`;
  return t(lang, short ? 'yearsShort' : 'years', { n });
}
