export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const contactData: ContactInfo = {
  address: "Kirkos Subcity Kebele 01/19, Bole District, Addis Ababa, Ethiopia",
  phone: "+251-11-5521795, +251-11-8591189",
  email: "info@destinyaddis.com"
};

export const socialLinks: SocialLink[] = [
  {
    platform: "Facebook",
    url: "#",
    icon: "fab fa-facebook"
  },
  {
    platform: "Instagram",
    url: "#",
    icon: "fab fa-instagram"
  },
  {
    platform: "Twitter",
    url: "#",
    icon: "fab fa-twitter"
  },
  {
    platform: "LinkedIn",
    url: "#",
    icon: "fab fa-linkedin"
  }
];

export const developerInfo = {
  name: "Habkal",
  url: "https://habkal.com/"
};
