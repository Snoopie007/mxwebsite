
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


export const reviews = [
    {
        "name": "Frantz Cadet",
        "image": "cadet-150x150.webp",
        "review": "I was not prepared for how fast the leads would come in once Monstro was installed... Honestly, with what I am experiencing right now, it would be difficult for me not to recommend Monstro. The experience I have had so far is overwhelming. Ive been in business for more than 26 years and have not ever experienced anything like Monstro before.",
        "company": "Cadet Martial Arts"
    },
    {
        "name": "Jose and Jana D",
        "image": "jose-150x150.webp",
        "review": "I think we were live for about 2 weeks and we already received 5 leads and signed up 3 of them. It just goes to show the quality of the leads. .. We are able to call and ... get them on board with us.",
        "company": "Sovereign World Wide"
    },
    {
        "name": "Jeff Remster",
        "image": "jeff-150x150.webp",
        "review": "Once Monstro was installed... it didnt take long for me to see new students coming through the door... I would absolutely recommend Monstro to other Martial Arts Schools.",
        "company": "Seven Star Martial Arts"
    },
    {
        "name": "Aline Pena",
        "image": "aline-p-150-150.webp",
        "review": "We used to get maybe 1-3 leads a month from organic traffic. Now we average 15- 18 leads without paid ads.",
        "company": "On Your Toes Dance Academy"
    },
    {
        "name": "Jacqueline Dolan",
        "image": "jaq-150-150.webp",
        "review": "In my first 2 weeks I got 24 leads and 12 new students, which is incredible.",
        "company": "Golden Phoenix CrossFit"
    }
]
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


const FooterMenu = [
    {
        "category": "Support & Legal",
        "items": [
            { "name": "Support", "href": "https://support.monstro-x.com" },
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