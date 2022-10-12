export type UserData = {
    data: UserInfo;
};

export type UserInfo = {
    employment: UserEmploymentInfo;
    first_name: string;
    last_name: string;
    location: UserLocation;
    technical_skills: UserTechnicalSkills;
    websites: UserWebsiteInfo;
};

export type UserEmploymentInfo = {
    [key: string]: {
        company_name: string;
        end_date: string;
        experience: UserEmploymentExperience[];
        location: UserLocation;
        role: string;
        start_date: string;
    };
};

export type UserEmploymentExperience = {
    main_bullet: string;
    sub_bullets: string | null | undefined;
};

export type UserLocation = {
    city: string;
    country: string;
};

export type UserTechnicalSkills = {
    description: string[];
    languages: string[];
    tools_and_framworks: string[];
};

export type UserWebsiteInfo = {
    github: string;
    linkedin: string;
    medium: string;
    personal: string;
};
