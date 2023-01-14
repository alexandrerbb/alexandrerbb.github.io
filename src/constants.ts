import { social, techIcon, tech, theme, sublist } from './interfaces'

export const GITHUB_REPO_API = "https://api.github.com/users/alexandrerbb/repos";

export const FEATHER_ICONS = "./icons/feather-sprite.svg"

export const SOCIALS: social[] = [
    {
        "name": "Linkedin",
        "icon": "linkedin",
        "url": "https://www.linkedin.com/in/alexandrerbb/"

    },
    {
        "name": "Github",
        "icon": "github",
        "url": "https://github.com/alexandrerbb"
    },
    {
        "name": "TryHackMe",
        "icon": "cloud",
        "url": "https://tryhackme.com/p/alexandrerbb",
        "displayName": true
    },
    {
        "name": "Contact",
        "icon": "send",
        "url": "https://www.linkedin.com/in/alexandrerbb/"
    }
]

export const THEMES: [theme, theme] = [
    {
        "name": "light",
        "icon": "sun"
    },
    {
        "name": "dark",
        "icon": "moon"
    }
]

export const TECHS : tech[] = [
    {
        "category" : "Langages de programmation",
        "techIcons" : [
            {
                "name": "Python",
                "src": "./icons/Python.svg"
            },
            {
                "name": "PHP",
                "src": "./icons/PHP.svg",
                "filterOnDarkTheme" : true
            },
            {
                "name": "Java",
                "src": "./icons/Java.svg",
            },
        ] as techIcon[],
        "infos" : [
            "Conaissances en C (programmation OS)",
            "Notions en C++"
        ]
    },

    {
        "category" : "Backend",
        "techIcons" : [
            {
                "name": "Django",
                "src": "./icons/Django.svg",
                "filterOnDarkTheme" : true
            },
            {
                "name": "Flask",
                "src": "./icons/Flask.svg",
                "filterOnDarkTheme" : true
            },
        ] as techIcon[],
        "infos" : [
            "Notions en Express"
        ]
    },

    {
        "category" : "Frontend",
        "techIcons" : [
            {
                "name": "Vue",
                "src": "./icons/Vue.svg"
            },
            {
                "name": "Lit",
                "src": "./icons/Lit.svg"
            },
        ] as techIcon[],
        "infos" : [
            "Conaissances en Typescript, React, SASS"
        ]
    },

    {
        "category" : "Cybersécurité",
        "techIcons" : [
            {
                "name": "Kali",
                "src": "./icons/Kali.svg"
            }
        ] as techIcon[],
        "infos" : [
            "Cryptographie",
            "Linux",
            {
                "name" : "Windows",
                "infos" :
                [
                    "Active Directory",
                ]
            } as sublist,
            "EBIOS"
        ],
        "grow" : true
    },
];