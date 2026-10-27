// Business details shared by every page and language.
// One number takes bookings at all four shops, on Zalo and WhatsApp.
const PHONE = '0388671591';

export const site = {
  name: 'Nhựa Style Barber Shop',
  shortName: 'Nhựa Style',
  email: 'minhhuy4622492@gmail.com',
  // WeChat has no web link to a personal account, so the booking page shows this account's QR code.
  wechat: { name: 'Minh Huy Barber' },
  social: {
    facebook: 'https://www.facebook.com/Nhuaprobarbershop',
    instagram: 'https://www.instagram.com/nhuaprobarbershop/',
    tiktok: 'https://www.tiktok.com/@nhuaprobarbershop',
    youtube: 'https://www.youtube.com/@nhuaprobarbershop',
  },
  // Filled in when the owner creates them; nothing is loaded while empty.
  analytics: {
    ga4: '',
    facebookPixel: '',
  },
  // Page chrome: web fonts and the browser bar colour.
  fonts: 'https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Be+Vietnam+Pro:wght@400;500;600&display=swap',
  themeColor: '#1F4B79',
};

// Opening hours are the same at every shop.
export const hours = {
  monday: { open: '09:30', close: '20:00' },
  other: { open: '08:30', close: '20:00' },
};

// Embedded maps search the street address: the Maps listing names do not always resolve to a pin.
const embed = (address: string) => `https://maps.google.com/maps?q=${encodeURIComponent(address)}&hl=vi&z=16&output=embed`;

export const branches = [
  {
    key: 'nhua-style-chau-thi-vinh-te',
    name: 'Nhựa Style · Châu Thị Vĩnh Tế',
    address: '79 Châu Thị Vĩnh Tế, Ngũ Hành Sơn, Đà Nẵng',
    phone: PHONE,
    email: site.email,
    mapUrl: 'https://maps.app.goo.gl/cBEMcTdRmG2NRJ2Q6',
    mapEmbed: embed('79 Châu Thị Vĩnh Tế, Ngũ Hành Sơn, Đà Nẵng'),
    whatsapp: '84' + PHONE.slice(1),
    zalo: PHONE,
  },
  {
    key: 'nhua-style-nguyen-xuan-khoat',
    name: 'Nhựa Style · Nguyễn Xuân Khoát',
    address: '169 Nguyễn Xuân Khoát, Sơn Trà, Đà Nẵng',
    phone: PHONE,
    email: site.email,
    mapUrl: 'https://maps.app.goo.gl/vv1pBAg6JxS7bL5t7',
    mapEmbed: embed('169 Nguyễn Xuân Khoát, Sơn Trà, Đà Nẵng'),
    whatsapp: '84' + PHONE.slice(1),
    zalo: PHONE,
  },
  {
    key: 'nhua-style-tran-bach-dang',
    name: 'Nhựa Style · Trần Bạch Đằng',
    address: '34 Trần Bạch Đằng, Sơn Trà, Đà Nẵng',
    phone: PHONE,
    email: site.email,
    mapUrl: 'https://maps.app.goo.gl/5xiuHntX71zgS2rF8',
    mapEmbed: embed('34 Trần Bạch Đằng, Sơn Trà, Đà Nẵng'),
    whatsapp: '84' + PHONE.slice(1),
    zalo: PHONE,
  },
  {
    key: 'nhua-style-duong-dinh-nghe',
    name: 'Nhựa Style · Dương Đình Nghệ',
    address: '279 Dương Đình Nghệ, Sơn Trà, Đà Nẵng',
    phone: PHONE,
    email: site.email,
    mapUrl: 'https://maps.app.goo.gl/UZKbPyTmA6uKNKGc9',
    mapEmbed: embed('279 Dương Đình Nghệ, Sơn Trà, Đà Nẵng'),
    whatsapp: '84' + PHONE.slice(1),
    zalo: PHONE,
  },
];
