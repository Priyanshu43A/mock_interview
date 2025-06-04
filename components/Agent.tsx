"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { vapi } from "@/lib/vapi.sdk";
import { generator } from "@/constants";
//import { createFeedback } from "@/lib/actions/general.action";

enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

interface SavedMessage {
  role: "user" | "system" | "assistant";
  content: string;
}

const Agent = ({ userName, userId, type }: AgentProps) => {
  //console.log(userName, userId, type);
  const router = useRouter();
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [messages, setMessages] = useState<SavedMessage[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lastMessage, setLastMessage] = useState<string>("");

  useEffect(() => {
    const onCallStart = () => {
      setCallStatus(CallStatus.ACTIVE);
    };

    const onCallEnd = () => {
      setCallStatus(CallStatus.FINISHED);
    };

    const onMessage = (message: Message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        const newMessage = { role: message.role, content: message.transcript };
        setMessages((prev) => [...prev, newMessage]);
      }
    };

    const onSpeechStart = () => {
      console.log("speech start");
      setIsSpeaking(true);
    };

    const onSpeechEnd = () => {
      console.log("speech end");
      setIsSpeaking(false);
    };

    const onError = (error: Error) => {
      console.log("Error:", error);
    };

    vapi.on("call-start", onCallStart);
    vapi.on("call-end", onCallEnd);
    vapi.on("message", onMessage);
    vapi.on("speech-start", onSpeechStart);
    vapi.on("speech-end", onSpeechEnd);
    vapi.on("error", onError);

    return () => {
      vapi.off("call-start", onCallStart);
      vapi.off("call-end", onCallEnd);
      vapi.off("message", onMessage);
      vapi.off("speech-start", onSpeechStart);
      vapi.off("speech-end", onSpeechEnd);
      vapi.off("error", onError);
    };
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      setLastMessage(messages[messages.length - 1].content);
    }

    if (callStatus === CallStatus.FINISHED) {
      if (type === "generate") {
        router.push("/");
      } else {
        console.log("done");
      }
    }
  }, [messages, callStatus, router, type, userId]);

  const handleCall = async () => {
    setCallStatus(CallStatus.CONNECTING);

    const assistantOverrides = {
      variableValues: {
        username: userName,
        userid: userName,
      },
    };

    vapi
      .start(
        {
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
                  required: [
                    "role",
                    "type",
                    "level",
                    "techstack",
                    "amount",
                    "userid",
                  ],
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
        },
        assistantOverrides
      )
      .then((response) => {
        console.log("Call response:", response);
        console.log("Call started successfully");
        setCallStatus(CallStatus.ACTIVE);
      })
      .catch((error) => {
        console.error("Error starting call:", error);
        setCallStatus(CallStatus.INACTIVE);
      });
  };

  const handleDisconnect = () => {
    setCallStatus(CallStatus.FINISHED);
    vapi.stop();
  };

  return (
    <>
      <div className="call-view">
        {/* AI Interviewer Card */}
        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="/ai-avatar.png"
              alt="profile-image"
              width={65}
              height={54}
              className="object-cover"
            />
            {isSpeaking && <span className="animate-speak" />}
          </div>
          <h3>AI Interviewer</h3>
        </div>

        {/* User Profile Card */}
        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.png"
              alt="profile-image"
              width={539}
              height={539}
              className="rounded-full object-cover size-[120px]"
            />
            <h3>{userName}</h3>
          </div>
        </div>
      </div>

      {messages.length > 0 && (
        <div className="transcript-border">
          <div className="transcript">
            <p
              key={lastMessage}
              className={cn(
                "transition-opacity duration-500 opacity-0",
                "animate-fadeIn opacity-100"
              )}
            >
              {lastMessage}
            </p>
          </div>
        </div>
      )}

      <div className="w-full flex justify-center">
        {callStatus !== "ACTIVE" ? (
          <button className="relative btn-call" onClick={() => handleCall()}>
            <span
              className={cn(
                "absolute animate-ping rounded-full opacity-75",
                callStatus !== "CONNECTING" && "hidden"
              )}
            />

            <span className="relative">
              {callStatus === "INACTIVE" || callStatus === "FINISHED"
                ? "Call"
                : ". . ."}
            </span>
          </button>
        ) : (
          <button className="btn-disconnect" onClick={() => handleDisconnect()}>
            End
          </button>
        )}
      </div>
    </>
  );
};

export default Agent;
