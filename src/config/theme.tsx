
interface SiteMetaProps {
    siteShortName: string;
    siteUrl: string;
    author: string;
    siteTitle: string;
    siteDescription: string;
    siteName: string;
    siteTitleAlt: string;
}

interface SocialAccountProps {
    twitter: string;
    github: string;
    rss: string;
    twitterHandle: string;
    linkedin: string;
}

interface ThemeProps extends SocialAccountProps, SiteMetaProps {
    lang: string;
    ogLanguage: string;
    themeColor: string;
    backgroundColor: string;
}

const siteMeta: SiteMetaProps = {
    siteTitle: "",
    siteTitleAlt: "A cold gatsby theme styled with Tailwind",
    siteDescription: "A cold gatsby blog theme styled with Tailwind",
    siteName: "arctic-wolf-theme",
    siteShortName: "arctic-wolf-theme",
    author: "Lars Roettig",
    siteUrl: process.env.ROOT_URL, // https://your_domain.dev/rss.xml
};

const socialAccounts: SocialAccountProps = {
    twitter: "", // https://twitter.com/LarsRoettig/
    twitterHandle: "", // @LarsRoettig
    github: "",
    linkedin: "",
    rss: "", // https://your_domain.dev/rss.xml
};


const theme: ThemeProps = {
    ...siteMeta,
    ...socialAccounts,
    lang: "en",
    ogLanguage: "en_US",
    themeColor: "#4147DC",
    backgroundColor: "#fff",
};

module.exports = theme;
