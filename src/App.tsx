import { useState, useEffect, useRef } from 'react'
import { MessageCircleMore,  Terminal, User, Home, Mail, Code, Briefcase, GraduationCap, Github, Linkedin, X, ArrowLeft, Instagram, Facebook } from 'lucide-react'
import { useMediaQuery } from 'react-responsive';
const sections = {
  home: {
    command: "cat ~/home.txt",
    icon: <Home className="w-5 h-5" />,
    content: (
      <div className="flex flex-col items-center space-y-6">
        <img src={requirtext-sets/profile.jpeg')} alt="Preshak" className="rounded-full w-36 h-36 border-4 border-green-500 shadow-lg" />
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">Preshak Bhattarai</h2>
          <p className="text-xl mb-2 text-green-400">Hacker Extraordinaire | Cybersecurity Enthusiast</p>
          <p className="text-lg mb-4">Welcome to my Portfolio!</p>
          <p className="text-md">I'm an 18-year-old programming enthusiast with a passion for cybersecurity.</p>
          <p className="text-md">My life revolves around coding, learning new technologies, and pushing the boundaries of what's possible in the digital world.</p>
        </div>
      </div>
    )
  },
  about: {
    command: "cat ~/about.txt",
    icon: <User className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold mb-3 flex items-center text-green-400">
            <GraduationCap className="w-6 h-6 mr-2" /> Education
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Higher Secondary Degree with Computer Science Major</li>
            <li>SEE (Secondary Education Examination)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3 flex items-center text-green-400">
            <Briefcase className="w-6 h-6 mr-2" /> Certifications
          </h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Amazon AWS Certification</li>
            <li>Google Hackathon Certification</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3 flex items-center text-green-400">
            <User className="w-6 h-6 mr-2" /> About Me
          </h3>
          <p>I'm an 18-year-old programming prodigy with an insatiable appetite for code. My days are filled with exploring new programming languages, diving deep into cybersecurity concepts, and working on innovative projects. I believe in the power of technology to change the world and I'm determined to be at the forefront of that change.</p>
        </div>
      </div>
    )
  },
  projects: {
    command: "ls ~/projects",
    icon: <Code className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold mb-3 text-green-400">My Projects</h3>
        <ul className="space-y-4">
          <li>
            <h4 className="text-xl font-semibold flex items-center">
              <Code className="w-5 h-5 mr-2" /> PROXLOAD
            </h4>
            <p>A web application for easy file uploading and downloading. Streamlines the process of sharing files across devices and users.</p>
            <a href="https://github.com/PROX-GOD/PROXLOAD" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub Repository</a>
          </li>
          <li>
            <h4 className="text-xl font-semibold flex items-center">
              <GraduationCap className="w-5 h-5 mr-2" /> PROXEDU
            </h4>
            <p>An educational platform providing handwritten notes to students. Aims to make quality study materials accessible to all.</p>
            <a href="https://github.com/PROX-GOD/PROXEDU" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub Repository</a>
          </li>
          <li>
            <h4 className="text-xl font-semibold flex items-center">
              <Terminal className="w-5 h-5 mr-2" /> Python Module
            </h4>
            <p>A custom Python module designed to simplify common programming tasks and boost productivity.</p>
            <a href="https://github.com/PROX-GOD/PythonModule" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">GitHub Repository</a>
          </li>
        </ul>
      </div>
    )
  },
  skills: {
    command: "cat ~/skills.txt",
    icon: <Terminal className="w-5 h-5" />,
    content: (
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold mb-3 text-green-400">Skills</h3>
        <div className="grid grid-cols-3 gap-4">
          {[
            { name: 'Python', icon: '🐍' },
            { name: 'JavaScript', icon: '🌐' },
            { name: 'React', icon: '⚛️' },
            { name: 'CSS', icon: '🎨' },
            { name: 'HTML', icon: '📄' },
            { name: 'Next.js', icon: '▲' },
            { name: 'C++', icon: '🖥️' },
            { name: 'Video Editing', icon: '🎬' },
            { name: 'Burp Suite', icon: '🐞' },
            { name: 'Wireshark', icon: '🦈' },
            { name: 'Metasploit', icon: '🛠️' },
            { name: 'Nmap', icon: '🗺️' },
          ].map((skill) => (
            <button
              key={skill.name}
              className="p-2 bg-gray-700 rounded hover:bg-gray-600 transition-colors flex items-center justify-center"
              onClick={() => document.dispatchEvent(new CustomEvent('showSkill', { detail: skill.name }))}
            >
              <span className="mr-2">{skill.icon}</span> {skill.name}
            </button>
          ))}
        </div>
      </div>
    )
  },
  contact: {
    command: "cat ~/contact.txt",
    icon: <Mail className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold mb-3 text-green-400">Contact Information</h3>
        <ul className="space-y-3">
          <li className="flex items-center">
            <Mail className="w-6 h-6 mr-3 text-green-400" /> proxjodd@gmail.com
          </li>
          <li className="flex items-center">
            <Github className="w-6 h-6 mr-3 text-green-400" /> github.com/PROX-GOD
          </li>
          <li className="flex items-center">
            <Instagram className="w-6 h-6 mr-3 text-green-400" /> instagram.com/preshakdjodd
          </li>
          <li className="flex items-center">
            <Facebook className="w-6 h-6 mr-3 text-green-400" /> facebook.com/PreshakBhattarai
          </li>
          <li className="flex items-center">
            <MessageCircleMore className="w-6 h-6 mr-3 text-green-400" /> Koi Bhi Project Kr lunga Paise mill gaye toh warna bhadd mein jao
          </li>
        </ul>
      </div>
    )
  }
}

const skillExamples = {
  Python: `def hello_world():
    print("Hello, World!")

hello_world()`,
  JavaScript: `function helloWorld() {
  console.log("Hello, World!");
}

helloWorld();`,
  React: `function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

export default HelloWorld;`,
  CSS: `body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

h1 {
  color: #333;
  text-align: center;
}`,
  HTML: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello, World!</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>`,
  'Next.js': `export default function Home() {
  return <h1>Hello, World!</h1>
}`,
  'C++': `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
  'Video Editing': 'I am khatra Capcut User🤣',
  'Burp Suite': 'Hmm, Yeh bhi aata hein Mujhe',
  'Wireshark': 'Yeh bhi thoda thoda kr leta hu',
  'Metasploit': 'Sirf kam chalau aata hein',
  'Nmap': 'Yeh Cool banne ke liye hein pls ignore.'
}

export default function Component() {
  const [currentSection, setCurrentSection] = useState<keyof typeof sections>("home")
  const [command, setCommand] = useState("")
  const [skillExample, setSkillExample] = useState("")
  const terminalRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const handleSectionChange = (section: keyof typeof sections) => {
    setCurrentSection(section)
    setCommand(sections[section].command)
    setSkillExample("")
  }

  useEffect(() => {
    if (isMobile) {
      alert('This website is optimized for desktop screens. Please switch to a desktop mode for the best experience.'); // Show alert
    }
  }, [isMobile]);

  useEffect(() => {
    handleSectionChange("home")

    const handleShowSkill = (e: CustomEvent<string>) => {
      setSkillExample(skillExamples[e.detail as keyof typeof skillExamples])
    }

    document.addEventListener('showSkill', handleShowSkill as EventListener)

    return () => {
      document.removeEventListener('showSkill', handleShowSkill as EventListener)
    }
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [command, currentSection, skillExample])

  return (
    <div className="min-h-screen bg-gray-900 text-green-300 p-8 font-mono flex flex-col items-center justify-center">
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg overflow-hidden shadow-2xl mb-8">
        <div className="flex justify-between items-center p-3 bg-gray-700 border-b border-gray-600">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="text-sm text-gray-300">Preshak's Terminal</div>
          <X className="w-4 h-4 text-gray-300" />
        </div>
        <div ref={terminalRef} className="p-6 h-[76vh] overflow-auto">
          <div className="mb-4">
            <span className="text-blue-400">preshak@hackbox:~$</span> {command}
          </div>
          {skillExample ? (
            <div>
              <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto shadow-inner mb-4">
                {skillExample}
              </pre>
              <button
                onClick={() => setSkillExample("")}
                className="flex items-center text-blue-400 hover:underline"
              >
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Skills
              </button>
            </div>
          ) : (
            sections[currentSection].content
          )}
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        {Object.entries(sections).map(([key, { icon }]) => (
          <button
            key={key}
            onClick={() => handleSectionChange(key as keyof typeof sections)}
            className={`p-3 rounded-full transition-all duration-300 ease-in-out flex items-center justify-center ${
              currentSection === key 
                ? 'bg-green-500 text-white shadow-lg' 
                : 'bg-gray-700 hover:bg-gray-600 hover:shadow-md'
            }`}
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  )
}
