export default function getPhoneNumber(phoneNumbers) {
  if (!phoneNumbers) return null;

  let phoneNumber = null;

  for (const pn of phoneNumbers) {
    if (pn.metadata.verified) {
      phoneNumber = pn.canonicalForm;
      break;
    }
  }

  return phoneNumber;
}
