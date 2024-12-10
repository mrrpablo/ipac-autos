const GetWhatsappLink = () => {
  const phoneNumber = import.meta.env.VITE_PHONENUMBER;
  const message = 'Hello! I would like to purchase a car from IPAC_AUTOS.';
  // const whatsApp = 'https://wa.me/2348076541289';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return whatsappLink;
};

export default GetWhatsappLink;
