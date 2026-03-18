export const LOCATION = {
  name: "Bluewave Café",
  address: "123 BlueWave Street, Tripoli, Lebanon",
  coordinates: {
    lat: 34.4331,
    lng: 35.8344,
  },

  map: {
    provider: "google", // future-proof
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.3458364241255!2d35.823490075592034!3d34.44336799697713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1521f155652ffffd%3A0x18620e3ef787e76a!2sNewtown%20Specialty%20Coffee%20Roasters!5e0!3m2!1sen!2slb!4v1766730679641!5m2!1sen!2slb", // placeholder
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=34.44336465339523,35.82607146273529",
    staticImage: "map-placeholder.webp",
  },

  contact: {
    phone: "+961 55 555 555",
    email: "contact@bluewave.com",
  },
};
