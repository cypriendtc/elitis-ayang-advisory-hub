export const CONTACTS = {
  phone: '+237699911298',
  whatsapp: '+237654011425',
  facebook: 'https://web.facebook.com/profile.php?id=61595395017985&locale=fr_FR',
};
export function whatsappLink(language: 'fr' | 'en') {
  const message = language === 'fr'
    ? 'Bonjour ELITIS AYANG, je souhaite échanger avec vous au sujet de vos services.'
    : 'Hello ELITIS AYANG, I would like to discuss your services.';
  return `https://wa.me/${CONTACTS.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`;
}