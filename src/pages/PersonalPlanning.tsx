import React from 'react';
import { Video, Heart, DollarSign, Briefcase, Code, BookOpen, Youtube, Users, Notebook as Robot, GraduationCap, Home, AlertTriangle, BarChart } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

export function PersonalPlanning() {
  const videoIdeas = [
    {
      title: 'Tech With Phil - The Docker Man Series',
      description: 'Educational video series covering Docker fundamentals and advanced concepts',
      topics: [
        'Docker basics and installation',
        'Container management',
        'Docker Compose',
        'Docker networking',
        'Best practices and production deployment'
      ]
    }
  ];

  const growthBlockers = [
    {
      title: "Inconsistent Wake-up Time",
      description: "Failure to get up consistently at the right time each morning (3:45 AM or earlier, if I wake up naturally before that time)",
      impact: "Disrupts daily routine and spiritual disciplines"
    },
    {
      title: "Daytime Drowsiness",
      description: "Snoozing uncontrollably during the day - much better to be tired and stay awake and to go to bed early as a result",
      impact: "Reduces productivity and wastes valuable time"
    },
    {
      title: "Media Consumption",
      description: "Watching TV and films and movies, even documentaries during the day, which waste time and often lead to me also snoozing as well so it's a double waste of time",
      impact: "Creates a cycle of time waste and drowsiness"
    },
    {
      title: "Spiritual Inconsistency",
      description: "Spiritually not maintaining that consistency of intense prayer so I am not fully prepared to deal with the intense battles of life when they arise",
      impact: "Leaves me vulnerable during spiritual challenges"
    }
  ];

  const moneyMakingIdeas = [
    {
      title: "Traditional Employment",
      icon: Briefcase,
      description: "Regular job as a primary source of income",
      activities: [
        "Full-time software engineering positions",
        "Technical leadership roles",
        "Senior development positions"
      ]
    },
    {
      title: "Investment Portfolio",
      icon: DollarSign,
      description: "Various investment opportunities for wealth building",
      activities: [
        "Stock market investments",
        "Cryptocurrency",
        "Mutual funds",
        "Retirement accounts"
      ]
    },
    {
      title: "Property Investments",
      icon: Home,
      description: "Real estate investment opportunities",
      activities: [
        "Residential properties",
        "Commercial properties",
        "Property development",
        "Real estate investment trusts (REITs)"
      ]
    },
    {
      title: "App Development",
      icon: Code,
      description: "Creating and monetizing software applications",
      activities: [
        "Mobile apps",
        "Web applications",
        "SaaS products",
        "Enterprise solutions"
      ]
    },
    {
      title: "Content Creation",
      icon: BookOpen,
      description: "Writing and publishing content",
      activities: [
        "Technical books",
        "Programming guides",
        "Educational content",
        "Online courses"
      ]
    },
    {
      title: "YouTube Channel",
      icon: Youtube,
      description: "Creating video content across various topics",
      activities: [
        "Technical tutorials and walkthroughs",
        "Tech news and updates",
        "Personal interest topics",
        "Scripture and daily encouragement",
        "Fitness and workout videos"
      ]
    },
    {
      title: "Freelance Services",
      icon: Code,
      description: "Offering development services to clients",
      activities: [
        "Website development",
        "Custom application development",
        "Technical consulting",
        "Project management"
      ]
    },
    {
      title: "Kingdom Service",
      icon: Heart,
      description: "Serving in ministry and religious organizations",
      activities: [
        "Volunteer work",
        "Paid ministry positions",
        "Technical support for churches",
        "Religious organization consulting"
      ]
    },
    {
      title: "Technical Support Services",
      icon: Users,
      description: "Local and online technical assistance",
      activities: [
        "Hardware management",
        "Software support",
        "System administration",
        "IT consulting",
        "Local advertising for services",
        "Online support platforms"
      ]
    },
    {
      title: "Robotics Marketplace",
      icon: Robot,
      description: "Creating a platform for robot enthusiasts",
      activities: [
        "Building a robotics marketplace website",
        "Connecting buyers and sellers",
        "Robot rental services",
        "Robotics community building"
      ]
    },
    {
      title: "Technical Education",
      icon: GraduationCap,
      description: "Teaching and training services",
      activities: [
        "One-on-one technical tutoring",
        "Creating technical courses",
        "Recording tutorial videos",
        "Docker and tech stack walkthroughs",
        "Beginner-friendly tech guides"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <Breadcrumb
        items={[
          { label: 'Personal', path: '/personal' },
          { label: 'Personal Planning', path: '/personal-planning' }
        ]}
      />

      <h1 className="text-3xl font-bold text-warm-900">Personal Planning & Development</h1>

      {/* Blockers To Growth Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">Blockers To Growth</h2>
        </div>
        <div className="grid gap-6">
          {growthBlockers.map((blocker, index) => (
            <div key={index} className="bg-warm-50 rounded-lg p-6 border border-warm-200">
              <h3 className="text-xl font-semibold text-warm-800 mb-2">{blocker.title}</h3>
              <p className="text-warm-600 mb-3">{blocker.description}</p>
              <div className="flex items-center gap-2 text-warm-500 text-sm">
                <AlertTriangle size={16} />
                <span>Impact: {blocker.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Money Making Ideas Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <DollarSign className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">Money Making Ideas</h2>
        </div>
        <div className="grid gap-6">
          {moneyMakingIdeas.map((idea, index) => (
            <div key={index} className="bg-warm-50 rounded-lg p-6 border border-warm-200">
              <div className="flex items-center gap-3 mb-4">
                <idea.icon className="text-warm-600" size={20} />
                <h3 className="text-xl font-semibold text-warm-800">{idea.title}</h3>
              </div>
              <p className="text-warm-600 mb-4">{idea.description}</p>
              <ul className="space-y-2">
                {idea.activities.map((activity, actIndex) => (
                  <li key={actIndex} className="flex items-center gap-2 text-warm-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-warm-400"></div>
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Analysis Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <BarChart className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">Social Media Analysis</h2>
        </div>
        <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
          <a
            href="https://studio.youtube.com/channel/UCsQLfjesONWETmed0386WqA/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22views%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-warm-600 hover:text-warm-900 transition-colors"
          >
            <Youtube size={20} />
            <span>View YouTube Analytics (Most Viewed Videos)</span>
          </a>
        </div>
      </section>

      {/* Video Ideas Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Video className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">Video Ideas</h2>
        </div>

        <div className="space-y-8">
          {videoIdeas.map((idea, index) => (
            <div 
              key={index}
              className="bg-warm-50 rounded-lg p-6 border border-warm-200"
            >
              <h3 className="text-xl font-semibold text-warm-800 mb-3">
                {idea.title}
              </h3>
              <p className="text-warm-600 mb-4">{idea.description}</p>
              
              <h4 className="font-medium text-warm-700 mb-2">Potential Topics:</h4>
              <ul className="list-disc list-inside space-y-2 text-warm-600">
                {idea.topics.map((topic, topicIndex) => (
                  <li key={topicIndex}>{topic}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Charity Persecution Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Heart className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">Charity ... Persecution ...</h2>
        </div>

        <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
          <p className="text-warm-600 italic">
            "The secret is, don't say a word about this to anyone ever. If you have to say something then say it in writing."
          </p>
        </div>
      </section>
    </div>
  );
}