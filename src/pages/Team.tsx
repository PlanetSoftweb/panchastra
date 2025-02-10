import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'KD',
    role: 'Founder & CEO',
    description: 'Visionary leader with expertise in AR/VR technology and architectural innovation.',
    skills: ['AR/VR Development', 'Business Strategy', 'Innovation Leadership'],
    achievements: ['Forbes 30 Under 30', '10+ Years in Tech', 'Multiple Patents'],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'UG',
    role: 'Founder & CTO',
    description: 'Technical genius behind our cutting-edge AR/VR solutions.',
    skills: ['System Architecture', 'AI/ML', 'Cloud Infrastructure'],
    achievements: ['PhD in Computer Science', '15+ Research Papers', 'Tech Innovation Award'],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'BR',
    role: 'Founder & COO',
    description: 'Operations mastermind ensuring smooth delivery of our solutions.',
    skills: ['Operations Management', 'Project Planning', 'Team Leadership'],
    achievements: ['MBA from IIM', 'Scaled 3 Startups', 'Excellence in Operations'],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  },
  {
    name: 'KS',
    role: 'Founder & Creative Director',
    description: 'Creative force driving the artistic vision of our platform.',
    skills: ['UI/UX Design', '3D Modeling', 'Creative Direction'],
    achievements: ['Design Awards', 'Art Direction', 'Industry Recognition'],
    social: {
      linkedin: '#',
      twitter: '#',
      github: '#'
    }
  }
];

const values = [
  { icon: '🎯', title: 'Innovation', description: 'Pushing boundaries in AR/VR technology' },
  { icon: '🤝', title: 'Collaboration', description: 'Working together to achieve excellence' },
  { icon: '💡', title: 'Creativity', description: 'Thinking outside the box' },
  { icon: '🚀', title: 'Excellence', description: 'Striving for the highest quality' }
];

function Team() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://media-hosting.imagekit.io//bd330ac8b46a4e2b/Dramatic%20cinematic%20wallpaper,%20cool-toned,%20Apple-esque%20lighting,%20black%20and%20blue%20AI%20line%20gradient,%20blues,%20greens,%20purples,%20film-like%20composition%20and%20lighting%20for%20an%20ARVR%20company.jpg?Expires=1833784121&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=U2Bf90itwcQPjg215DNweAUCQ7T1BpZQTkJsgZYROMGqaje3Fby~C-z1Ivm4jE4dx5DfOHIDI7srzerr-1LAMpZKKXbNw05RCqeEY7NtjBB0VDmkg2TQl40lj4IegtL1iHIAIjpceLlMfbJ-nThXbn-D7rkY2n8KtowI9IcpjvhQEPCjI~MCzTFf7vW6CNVwyl3ICq4Ji754egC1C0d31BeaZtov~YFmy6bNkXz1D0qHd00V9MvTuJdiQIMdG19l~rLe5~xC0vEXcMqsxGhfwA4sW2noxUwzTbRDpWOXrsRooQjGBP1cKfVAmmFRzyPZnafApZDDd-DXpx8zvtz~0g__" 
            alt="Team VR"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold title-font mb-4">Our Team</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the visionaries shaping the future of architectural visualization
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-card p-8 h-full hover:bg-white/5 transition-all duration-300">
                  {/* Profile Section */}
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 mx-auto mb-6 relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
                      <div className="relative w-full h-full bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary group-hover:scale-110 transition-transform duration-300">
                        <span className="text-5xl font-bold title-font text-primary">
                          {member.name}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-gray-400 text-sm mb-6">{member.description}</p>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">EXPERTISE</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">ACHIEVEMENTS</h4>
                    <ul className="text-sm text-gray-400 space-y-2">
                      {member.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <motion.a
                        key={platform}
                        href={url}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                      >
                        <span className="capitalize text-sm">{platform[0]}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Company Values */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold title-font text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 text-center hover:bg-white/5 transition-colors"
                >
                  <span className="text-4xl mb-4 block">{value.icon}</span>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Join Us Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center glass-card p-12"
          >
            <h2 className="text-3xl font-bold title-font mb-6">Join Our Journey</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              We're always looking for talented individuals who share our vision of revolutionizing
              architectural visualization through technology. Join us in shaping the future.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:shadow-xl hover:shadow-white/20 transition-all duration-300"
              >
                Join Our Team
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Team;