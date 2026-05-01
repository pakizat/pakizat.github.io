/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "PakeMon",
  title: "你好，我是 PakeMon",
  subTitle: emoji(
    "我是一名正在学习 Web 开发、服务器运维、Docker、GitHub Pages 和 API 工具的学生开发者。我正在搭建自己的个人主页和自建服务，用于记录学习、展示项目和管理我的开发工具。"
  ),
  resumeLink: "",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/pakizat",
  linkedin: "",
  gmail: "pakizat520@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

const skillsSection = {
  title: "Skills / 技能",
  subTitle: "我当前重点学习和实践的方向，围绕前端、服务器、自建服务与 Web 基础设施展开。",
  skills: [
    emoji("⚡ Frontend：学习 HTML、CSS、JavaScript 和 React，持续完善个人主页与交互体验"),
    emoji("⚡ Server & DevOps：实践 Linux、Docker 和 1Panel，自建服务与部署环境"),
    emoji("⚡ Web Infrastructure：折腾 GitHub Pages、自定义域名、DNS、HTTPS / SSL"),
    emoji("⚡ API Tools：探索 API Proxy 与 CLIProxyAPI 的统一管理和测试流程")
  ],
  softwareSkills: [
    {
      skillName: "HTML",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "1Panel",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "GitHub Pages",
      fontAwesomeClassname: "fas fa-globe"
    },
    {
      skillName: "DNS / Domain",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "HTTPS / SSL",
      fontAwesomeClassname: "fas fa-lock"
    },
    {
      skillName: "API Proxy",
      fontAwesomeClassname: "fas fa-random"
    },
    {
      skillName: "CLIProxyAPI",
      fontAwesomeClassname: "fas fa-terminal"
    }
  ],
  display: true
};

const educationInfo = {
  display: false,
  schools: []
};

const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

const workExperiences = {
  display: false,
  experience: []
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

const bigProjects = {
  title: "Projects / 项目",
  subtitle: "围绕个人主页、自建服务和域名配置整理出的项目与实践入口。",
  projects: [
    {
      image: require("./assets/images/developerActivity.svg").default,
      projectName: "SkyWorker Homepage",
      projectDesc:
        "我的个人主页，基于 GitHub Pages 和自定义域名 skyworker.me 构建，用于展示我的学习记录、项目和自建服务。",
      footerLink: [
        {
          name: "访问主页",
          url: "https://skyworker.me"
        }
      ]
    },
    {
      image: require("./assets/images/programmer.svg").default,
      projectName: "CLIProxyAPI Server",
      projectDesc:
        "部署在云服务器上的 API 代理管理服务，用于统一管理和测试 API 服务。",
      footerLink: [
        {
          name: "打开服务",
          url: "https://cpa.skyworker.me"
        }
      ]
    },
    {
      image: require("./assets/images/skill.svg").default,
      projectName: "1Panel Server Management",
      projectDesc:
        "使用 1Panel 管理 Docker、网站、反向代理、SSL 证书和服务器服务。",
      footerLink: [
        {
          name: "打开入口",
          url: "https://panel.skyworker.me"
        }
      ]
    },
    {
      image: require("./assets/images/contactMailDark.svg").default,
      projectName: "Domain & HTTPS Setup",
      projectDesc:
        "使用 Namecheap、GitHub Pages、DNS、Let's Encrypt 和 1Panel 完成个人域名、子域名和 HTTPS 配置。",
      footerLink: [
        {
          name: "查看站点",
          url: "https://skyworker.me"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Services / 自建服务入口 🛠️"),
  subtitle: "只展示公开入口，不包含后台安全路径、端口、账号或任何敏感信息。",
  achievementsCards: [
    {
      title: "CPA 管理后台",
      subtitle: "自建 CLIProxyAPI 服务入口，用于 API 代理和服务管理。",
      image: require("./assets/images/pwa.webp"),
      imageAlt: "CPA 管理后台",
      footerLink: [
        {
          name: "打开入口",
          url: "https://cpa.skyworker.me"
        }
      ]
    },
    {
      title: "1Panel 面板",
      subtitle: "服务器管理面板入口，用于管理 Docker、网站、反向代理和证书。",
      image: require("./assets/images/jsFramework.svg").default,
      imageAlt: "1Panel 面板",
      footerLink: [
        {
          name: "打开入口",
          url: "https://panel.skyworker.me"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blog / 学习记录",
  subtitle: "先用占位卡片记录近期准备整理的学习主题，后续再扩展成完整文章。",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://skyworker.me",
      title: "How I configured my custom domain",
      description: "记录如何配置 Namecheap、GitHub Pages 和 skyworker.me。"
    },
    {
      url: "https://cpa.skyworker.me",
      title: "Deploying CLIProxyAPI with Docker and 1Panel",
      description: "记录如何用 Docker 和 1Panel 部署 CLIProxyAPI。"
    },
    {
      url: "https://skyworker.me",
      title: "Setting up HTTPS for my services",
      description: "记录如何给 cpa.skyworker.me 和 panel.skyworker.me 配置 HTTPS。"
    }
  ],
  display: true
};

const talkSection = {
  title: "",
  subtitle: "",
  talks: [],
  display: false
};

const podcastSection = {
  title: "",
  subtitle: "",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "",
  subtitle: "",
  display: false
};

const contactInfo = {
  title: emoji("Contact / 联系方式 ☎️"),
  subtitle: "欢迎通过公开方式联系我，交流项目、学习记录和自建服务实践。",
  number: "",
  email_address: "pakizat520@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
