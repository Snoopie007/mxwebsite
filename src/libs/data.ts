
const CountryCodes = [
    { name: "Canada", code: "CA", shortName: "CAD" },
    { name: 'United States', code: "US", shortName: "USA" },
    { name: "United Kingdom", code: "UK", shortName: "GB" },
    { name: "Australia", code: "AU", shortName: "AUS" }
]

const MonstroData = {
    fullAddress: '7901 4th ST N STE 300 St Petersburg, FL 33702, USA',
    phone: '123-456-7890',
    email: 'stevey@simplygrowonline.com',
    name: 'John Doe',
    url: 'https://mymonstro.com',
    privacyUrl: 'https://mymonstro.com/legal/privacy-policy',
    termsUrl: 'https://mymonstro.com/legal/terms-of-service',
    supportUrl: 'https://mymonstro.com/support',
    unsubscribeUrl: 'https://mymonstro.com/unsubscribe',
    logoUrl: 'https://mymonstro.com/logo.png',
}


const FooterMenu = [
    {
        "category": "Support & Legal",
        "items": [
            { "name": "Contact Us", "href": "/contact" },
            { "name": "Privacy Policy", "href": "/legal/privacy-policy" },
            { "name": "Term of Use", "href": "/legal/term-of-use" }
        ]
    }
]

const Regions = {
    us: {
        regions: [
            "Alabama",
            "Alaska",
            "Arizona",
            "Arkansas",
            "California",
            "Colorado",
            "Connecticut",
            "Delaware",
            "Florida",
            "Georgia",
            "Hawaii",
            "Idaho",
            "Illinois",
            "Indiana",
            "Iowa",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Maine",
            "Maryland",
            "Massachusetts",
            "Michigan",
            "Minnesota",
            "Mississippi",
            "Missouri",
            "Montana",
            "Nebraska",
            "Nevada",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "New York",
            "North Carolina",
            "North Dakota",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Pennsylvania",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Texas",
            "Utah",
            "Vermont",
            "Virginia",
            "Washington",
            "West Virginia",
            "Wisconsin",
            "Wyoming"
        ]
    },
    canada: {
        regions: [
            "Alberta",
            "British Columbia",
            "Manitoba",
            "New Brunswick",
            "Newfoundland and Labrador",
            "Nova Scotia",
            "Ontario",
            "Prince Edward Island",
            "Quebec",
            "Saskatchewan"
        ]
    }
}

const Industries = [
    "Martial Arts School",
    "Boxing Gym",
    "Fitness & Crossfit Gym",
    "Gymnastics Gym",
    "Dance Studio",
    "Swim School",
    "Music School",
    "Coding School",
    "Yoga Studio",
    "Pilates Studio",
    "Kickboxing Gym",
    "Sports Camp",
    "Cooking School",
    "Arts & Crafts School",
    "Tutoring",
    "Other"
]


const Menu = [
    {
        "title": "Home",
        "href": "/",
        "description": "Home",
        "childs": [
            {
                "title": "Home",
                "href": "/",
                "description": "Home",
            }
        ]
    }
]

export {
    Menu,
    CountryCodes,
    Regions,
    Industries,
    MonstroData,
    FooterMenu
}