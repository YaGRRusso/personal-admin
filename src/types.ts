export type PersonalType = {
    name: string,
    office: string,
    birth: Date,
    age: number,
    email: string,
    phone: string,
    address: {
        postal: string,
        country: string,
        state: {
            long: string,
            short: string
        },
        city: string
    }
}

export type ExperienciesType = {
    name: string,
    company: string,
    description: string,
    date: {
        start: Date,
        end: Date
    }
}

export type FormationType = {
    name: string,
    school: string,
    level: string,
    description: string,
    date: {
        start: Date,
        end: Date
    }
}

export type CoursesType = {
    name: string,
    institute: string,
    description: string,
    hours: number
}

export type SocialType = {
    github: string,
    linkedin: string,
    whatsapp: string,
    curriculum: string,
    facebook?: string,
    twitter?: string
}

export type PortfolioType = {
    name: string,
    desc: string,
    link: string,
    img: string,
    stacks: string[]
}