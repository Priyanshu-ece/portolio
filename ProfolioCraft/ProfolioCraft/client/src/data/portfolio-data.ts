export interface Experience {
  id: string;
  position: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  color: 'electric' | 'neon' | 'purple';
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-100
}

export interface SkillCategory {
  name: string;
  color: 'electric' | 'neon' | 'purple';
  skills: Skill[];
}

export const experiences: Experience[] = [
  {
    id: '1',
    position: 'Electronics Domain, Member',
    company: 'Phoenix Robotics Society',
    period: 'March 2025 – Present',
    description: 'Led electronics subsystem for 4 project teams, designing effective PCB layouts and streamlined wiring schemes that reduced system errors by 40% and increased response efficiency by 25%. Conducted hands-on robotics workshops training over 80 students.',
    technologies: ['Arduino', 'Motor Drivers', 'Bluetooth Communication', 'PCB Design'],
    color: 'electric'
  },
  {
    id: '2',
    position: 'Electronics Domain, Member',
    company: 'Society of Automotive Engineers (SAE)',
    period: 'December 2024 - Present',
    description: 'Spearheaded integration of advanced driver interface systems in an IC Formula Student car, including digital dashboards, pedal shifters, and kill switches. Enhanced dashboard display speed and improved sensor data responsiveness by 40%.',
    technologies: ['Vehicle Wiring', 'Sensor Systems', 'Control Systems', 'Electronic Integration'],
    color: 'neon'
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Bachelor of Technology - Electronics and Communication Engineering',
    institution: 'Ajay Kumar Garg Engineering College',
    period: '2023 - 2027',
    description: 'Currently pursuing BTech in ECE with focus on embedded systems, robotics, and electronics design. Active member of robotics societies and automotive engineering teams.'
  }
];

export const certifications: Certification[] = [
  {
    id: '1',
    name: 'Diploma in Computer Application',
    issuer: 'NIELIT Certified Institute',
    year: '2023',
    icon: 'code'
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'BluCarX – ESP32-Based RC Racing Bot',
    description: 'Bluetooth-controlled RC car using ESP32 and L298N motor driver, powered by a 12V 2200mAh Li-ion battery, delivering up to 2.5 kg-cm torque per motor. Controlled via custom Android app with 15-meter range.',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDYwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9InJvYm90aWNzR3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBENEZGO3N0b3Atb3BhY2l0eToxIiAvPgogICAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4QjVDRjY7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0idXJsKCNyb2JvdGljc0dyYWRpZW50KSIgLz4KICA8dGV4dCB4PSIzMDAiIHk9IjE1MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgZm9udC1zaXplPSIyNCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmaWxsPSJ3aGl0ZSI+RVNQMzIgUkMgQm90PC90ZXh0Pgo8L3N2Zz4=',
    technologies: ['ESP32', 'L298N Motor Driver', 'Bluetooth', 'Android App'],
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: '2',
    title: 'TriBotX – Arduino-Based 3WD RC Vehicle',
    description: '3-wheel drive RC car using Arduino Uno, L293D motor driver, and HC-05 Bluetooth module, achieving real-time control with under 200ms latency and speeds up to 1.2 m/s.',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDYwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImFyZHVpbm9HcmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwMEZGODg7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6IzAwRDRGRjtzdG9wLW9wYWNpdHk6MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2FyZHVpbm9HcmFkaWVudCkiIC8+CiAgPHRleHQgeD0iMzAwIiB5PSIxNTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZmlsbD0id2hpdGUiPkFyZHVpbm8gM1dEIENhcjwvdGV4dD4KPC9zdmc+',
    technologies: ['Arduino Uno', 'L293D', 'HC-05 Bluetooth', 'PWM Control'],
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: '3',
    title: 'Formula Student IC Car Electronics',
    description: 'Designed and integrated key electronic subsystems for Formula Student car including digital dashboard, pedal shifters, kill switches, and complete vehicle wiring under SAE team.',
    image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDYwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGRlZnM+CiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImZvcm11bGFHcmFkaWVudCIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMTAwJSI+CiAgICAgIDxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiM4QjVDRjY7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I0VDNDg5OTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2Zvcm11bGFHcmFkaWVudCkiIC8+CiAgPHRleHQgeD0iMzAwIiB5PSIxNTAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZmlsbD0id2hpdGUiPkZvcm11bGEgU3R1ZGVudCBDYXI8L3RleHQ+Cjwvc3ZnPg==',
    technologies: ['Vehicle Electronics', 'Dashboard Systems', 'Sensor Integration', 'Safety Systems'],
    featured: true
  }
];

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    color: 'electric',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'C/C++', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'Embedded C', level: 85 }
    ]
  },
  {
    name: 'Electronics & Hardware',
    color: 'neon',
    skills: [
      { name: 'Microcontrollers/Microprocessors', level: 90 },
      { name: 'Motor Drivers', level: 85 },
      { name: 'Communication Modules', level: 80 },
      { name: 'PCB Design', level: 75 }
    ]
  },
  {
    name: 'Tools & Technologies',
    color: 'purple',
    skills: [
      { name: 'Arduino IDE', level: 90 },
      { name: 'SolidWorks', level: 75 },
      { name: 'Eagle PCB', level: 70 },
      { name: 'MATLAB', level: 65 }
    ]
  }
];

export const personalInfo = {
  name: 'Priyanshu Yadav',
  title: 'Electronics & Robotics Engineer',
  tagline: 'building innovative embedded systems and robotics solutions',
  email: 'priyanshu2331054@akgec.ac.in',
  phone: '+91-9115054532',
  location: 'Ghaziabad, Uttar Pradesh',
  bio: 'BTech ECE student passionate about robotics, embedded systems, and electronics design. Active member of Phoenix Robotics Society and SAE, with hands-on experience in building RC vehicles, Formula Student cars, and conducting technical workshops. Specialized in microcontroller programming, motor control systems, and PCB design.',
  stats: {
    projectsCompleted: 15,
    yearsExperience: 2
  }
};
