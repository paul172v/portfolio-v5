export const projectsData = [
  {
    id: "moness-table-reservation",
    photo: "moness-table-reservation.png",
    title: "Moness Table Reservation",
    liveSiteLink: "https://172v-moness-table-reservation.netlify.app/",
    liveSite2Link: null,
    liveSiteLabel: "Front-End",
    liveSite2Label: null,
    gitFrontLink:
      "https://github.com/paul172v/moness-table-reservation--customer--frontend",
    gitFront2Link: null,
    gitFrontLabel: "Github Front-End",
    gitFront2Label: null,
    gitBack: "https://github.com/paul172v/moness-backend",
    keyFeatures: [
      "React/TypeScript",
      "Node/Express/MongoDB",
      "Full-Stack",
      "Booking Logic",
      "Responsive Design",
    ],
    description:
      "This web app is a prototype customer-side table reservation system for the Moness Resort, a real business. The app will only allow 15 people to be booked per every 15 minuet time slot. It will also only allow users to book a table within the restaurant's opening hours.",
    descriptionSize: "normal",
  },

  {
    id: "moness-flemmyng-menu",
    photo: "moness-flemmyng-menu.png",
    title: "Moness Flemmyng Menu",
    liveSiteLink: "https://172v-moness-menu.netlify.app/",
    liveSite2Link: null,
    liveSiteLabel: "Front-End",
    liveSite2Label: null,
    gitFrontLink: "https://github.com/paul172v/moness-flemmyng-menu",
    gitFront2Link: null,
    gitFrontLabel: "Github Front-End",
    gitFront2Label: null,
    gitBack: "https://github.com/paul172v/moness-backend",
    keyFeatures: [
      "React/TypeScript",
      "Node/Express/MongoDB",
      "Full-Stack",
      "Dynamic Rendering",
      "Responsive Design",
    ],
    description:
      "This web app is a prototype customer-side online menu for the Moness Resort, a real business. The app will take a list of menu items for each menu category (taken from a MongoDB database) and dynamically generate the menu. The design is intended to mimic the paper menu and it will collapse into a single column for tablets and mobiles for easier reading.",
    descriptionSize: "normal",
  },

  {
    id: "moness-staff-portal",
    photo: "moness-staff-portal.png",
    title: "Moness Staff Portal",
    liveSiteLink: "https://172v-moness-staff-portal.netlify.app/",
    liveSite2Link: null,
    liveSiteLabel: "Front-End",
    liveSite2Label: null,
    gitFrontLink: "https://github.com/paul172v/moness-staff-portal--frontend",
    gitFront2Link: null,
    gitFrontLabel: "Github Front-End",
    gitFront2Label: null,
    gitBack: "https://github.com/paul172v/moness-backend",
    keyFeatures: [
      "React/TypeScript",
      "Node/Express/MongoDB",
      "Full-Stack",
      "User Authentication",
      "Usr Interface",
      "Responsive Design",
    ],
    description:
      "This web app is a prototype staff-side user interface that allows staff to view and alter bookings from the table reservation app, block time slots for table bookings, and view and alter the menu items on the Flemmyng menu. It has user authentication, and all users have an access level that is set by managers. To log in you can use the account 'manger@moness.com' and the password 'password'.",
    descriptionSize: "normal",
  },

  {
    id: "moness-map",
    photo: "moness-map.png",
    title: "Moness Online Map",
    liveSiteLink: "https://172v-moness-map.netlify.app/",
    liveSite2Link: null,
    liveSiteLabel: "Front-End",
    liveSite2Label: null,
    gitFrontLink: "hhttps://github.com/paul172v/moness-map",
    gitFront2Link: null,
    gitFrontLabel: "Github Front-End",
    gitFront2Label: null,
    gitBack: null,
    keyFeatures: [
      "React/TypeScript",
      "Leaflet",
      "Full-Stack",
      "Searchable Cottages",
    ],
    description:
      "This web app is a customer-side online map of the Moness resort showing the location of the hotel reception and various facilities but it's primary function is to allow guests to find their cottage easily on the resort grounds. This app was made using React/TypeScript and the Leaflet.js Library. It is currently being used by the hotel housekeeping staff for the same purpose as it has proved more convenient than the paper maps they were using previously.",
    descriptionSize: "normal",
  },
];

export default projectsData;
