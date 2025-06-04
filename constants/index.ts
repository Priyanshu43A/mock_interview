// import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
// import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

// export const interviewer: CreateAssistantDTO = {
//   name: "Interviewer",
//   firstMessage:
//     "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
//   transcriber: {
//     provider: "deepgram",
//     model: "nova-2",
//     language: "en",
//   },
//   voice: {
//     provider: "11labs",
//     voiceId: "sarah",
//     stability: 0.4,
//     similarityBoost: 0.8,
//     speed: 0.9,
//     style: 0.5,
//     useSpeakerBoost: true,
//   },
//   model: {
//     provider: "openai",
//     model: "gpt-4",
//     messages: [
//       {
//         role: "system",
//         content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

// Interview Guidelines:
// Follow the structured question flow:
// {{questions}}

// Engage naturally & react appropriately:
// Listen actively to responses and acknowledge them before moving forward.
// Ask brief follow-up questions if a response is vague or requires more detail.
// Keep the conversation flowing smoothly while maintaining control.
// Be professional, yet warm and welcoming:

// Use official yet friendly language.
// Keep responses concise and to the point (like in a real voice interview).
// Avoid robotic phrasing—sound natural and conversational.
// Answer the candidate’s questions professionally:

// If asked about the role, company, or expectations, provide a clear and relevant answer.
// If unsure, redirect the candidate to HR for more details.

// Conclude the interview properly:
// Thank the candidate for their time.
// Inform them that the company will reach out soon with feedback.
// End the conversation on a polite and positive note.

// - Be sure to be professional and polite.
// - Keep all your responses short and simple. Use official language, but be kind and welcoming.
// - This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
//       },
//     ],
//   },
// };

// export const feedbackSchema = z.object({
//   totalScore: z.number(),
//   categoryScores: z.tuple([
//     z.object({
//       name: z.literal("Communication Skills"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//     z.object({
//       name: z.literal("Technical Knowledge"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//     z.object({
//       name: z.literal("Problem Solving"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//     z.object({
//       name: z.literal("Cultural Fit"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//     z.object({
//       name: z.literal("Confidence and Clarity"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//   ]),
//   strengths: z.array(z.string()),
//   areasForImprovement: z.array(z.string()),
//   finalAssessment: z.string(),
// });

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];

export const generator = {
  name: "prepwise",
  nodes: [
    {
      name: "start_node",
      type: "start",
      metadata: {
        position: {
          x: 0,
          y: 0,
        },
      },
    },
    {
      name: "say",
      type: "say",
      metadata: {
        position: {
          x: -100,
          y: 150,
        },
      },
      prompt: "",
      exact:
        "Hello, {{ username }}! Let's prepare your interview. Next on Neha will ask you some questions and will generate the best personalized interview. Just for you. Are you ready ?",
    },
    {
      name: "conversation_1748500686091",
      type: "conversation",
      metadata: {
        position: {
          x: -623.9654515818738,
          y: 372.29028861826623,
        },
      },
      prompt:
        "This conversation is for gathering the necessary information and inputs from the user to know about his interview and job prepration preferences and demands. So we can prepare a best and personalised interview for the user. Keep the conversation engaging and not fast-paced, balanced and inspiring tone with proper followups and not repeating same thing. It should be more humanistic and calm.",
      model: {
        model: "gpt-4o",
        provider: "openai",
        maxTokens: 1000,
        temperature: 0.7,
      },
      voice: {
        voiceId: "Neha",
        provider: "vapi",
      },
      variableExtractionPlan: {
        output: [
          {
            enum: [],
            type: "string",
            title: "role",
            description:
              "This refers to the specific position or title the user is preparing for in terms of job interviews, applications, or skill development. It provides context about the type of work, industry, technical expectations, and responsibilities the user aims to take on. The role might be related to development (e.g., Frontend Developer, Full Stack Engineer, React Native Developer), design (e.g., UI/UX Designer), or other tech or creative roles (e.g., Product Manager, DevOps Engineer).",
          },
          {
            enum: [],
            type: "string",
            title: "type",
            description:
              "Determines which style of interview questions to generate: use “technical” for coding exercises, data structures & algorithms, and system-design; “behavioral” for situational, STAR-style soft-skills and culture-fit scenarios; or “balanced” to mix both technical and behavioral questions. It is required to answer.",
          },
          {
            enum: ["entry", "mid", "senior"],
            type: "string",
            title: "level",
            description:
              "Indicates the candidate’s professional experience tier to tailor question difficulty and context. Examples include entry-level for recent graduates or interns, mid-level for 2–5 years of experience, senior-level for 5+ years, lead or architect roles, and executive or managerial positions. It is required to answer",
          },
          {
            enum: [],
            type: "string",
            title: "techstack",
            description:
              "A list of relevant technologies, frameworks, languages, and tools to target during interview prep—e.g., “React”, “Node.js”, “AWS”, “Python”, “Docker”. Use this to generate questions and scenarios specific to your desired tech stack. It is required to answer.",
          },
          {
            enum: [],
            type: "number",
            title: "amount",
            description:
              "Specifies how many interview questions to generate. Provide a positive integer to indicate the total number of questions you want. It is required to answer.",
          },
        ],
      },
      messagePlan: {
        firstMessage:
          "Great! I am Neha. let's get started. So please tell me the job role you wants to prepare for?",
      },
    },
    {
      name: "API Request",
      type: "tool",
      metadata: {
        position: {
          x: -208.05053224793014,
          y: 901.9167033117086,
        },
      },
      tool: {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/vapi/generate`,
        body: {
          type: "object",
          required: ["role", "type", "level", "techstack", "amount", "userid"],
          properties: {
            role: {
              type: "string",
              value: "{{role}}",
              description: "",
            },
            type: {
              enum: ["technical", "behavioural", "mixed"],
              type: "string",
              value: "{{type}}",
              description: "",
            },
            level: {
              type: "string",
              value: "{{ level }}",
              description: "",
            },
            amount: {
              type: "string",
              value: "{{ amount }}",
              description: "",
            },
            userid: {
              type: "string",
              value: "{{ userid }}",
              description: "",
            },
            techstack: {
              type: "string",
              value: "{{ techstack }}",
              description: "",
            },
          },
        },
        name: "sendInterviewData",
        type: "apiRequest",
        method: "POST",
        function: {
          name: "untitled_tool",
          parameters: {
            type: "object",
            required: [],
            properties: {},
          },
        },
        messages: [
          {
            type: "request-start",
            content:
              "Just stay here, i am requesting to prepare your interview.",
            blocking: false,
          },
        ],
      },
    },
    {
      name: "conversation_1748615076269",
      type: "conversation",
      metadata: {
        position: {
          x: -208.05053224793014,
          y: 1151.9167033117087,
        },
      },
      prompt:
        "Tell the api response and Give confirmation about interview generation move further and end the call.",
      model: {
        model: "gpt-4o",
        provider: "openai",
        maxTokens: 1000,
        temperature: 0.7,
      },
      voice: {
        voiceId: "Neha",
        provider: "vapi",
      },
      messagePlan: {
        firstMessage: "",
      },
    },
    {
      name: "hangup_1748615223252",
      type: "tool",
      metadata: {
        position: {
          x: -204.38519446617116,
          y: 1360.2494098125385,
        },
      },
      tool: {
        type: "endCall",
      },
    },
  ],
  edges: [
    {
      from: "start_node",
      to: "say",
    },
    {
      from: "say",
      to: "conversation_1748500686091",
      condition: {
        type: "ai",
        prompt: "if the user said yes",
      },
    },
    {
      from: "conversation_1748500686091",
      to: "API Request",
      condition: {
        type: "ai",
        prompt:
          "if the user had provided all the necessary variables and information and said confirmed to move further.",
      },
    },
    {
      from: "API Request",
      to: "conversation_1748615076269",
      condition: {
        type: "ai",
        prompt: "if the request has done properly and went successfull",
      },
    },
    {
      from: "conversation_1748615076269",
      to: "hangup_1748615223252",
      condition: {
        type: "ai",
        prompt: "if the user responds",
      },
    },
  ],
  globalPrompt:
    "You are a voice assistant helping with creating new AI interviewers. Your task is to collect data from the user. Remember that this is a voice conversation - do not use any special characters",
};
