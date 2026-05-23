import React, { useState } from 'react';
import { Clock, Calendar, CalendarDays, CalendarCheck, Repeat, BookOpen, Music, Brain, ChevronDown, ChevronUp } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

export function Routines() {
  const [showDeclarations, setShowDeclarations] = useState(false);

  const declarations = [
    "I am blessed",
    "I am more than an overcomer",
    "I have everything I need to fulfill all the good pleasure of God's holy will for my life",
    "I can see souls saved",
    "I can see the gospel preached",
    "I can see people healed",
    "I can see people delivered",
    "I can see people find the will of God for their lives",
    "I can help people pray",
    "I can help people be organised and be an effective Christian"
  ];

  const dailyRoutines = [
    {
      title: "Early Morning Routine",
      time: "3:45 AM - 4:00 AM",
      activities: [
        "Wake up at 3:45 AM",
        "Prepare for prayer meeting"
      ]
    },
    {
      title: "Morning Prayer & Study",
      time: "4:00 AM - 4:30 AM",
      activities: [
        "Join Pastor Praise's prayer meeting on Clubhouse",
        {
          type: 'declarations',
          label: 'Daily Declarations',
          content: declarations
        },
        "Complete at least 3 Duolingo lessons to activate brain",
        "Bible reading and study following yearly plan",
        "Take notes during Bible study"
      ]
    },
    {
      title: "Daily Planning",
      time: "4:30 AM - 4:40 AM",
      activities: [
        "Review Google Calendar",
        "Plan schedule for the day",
        "Set priorities and goals"
      ]
    },
    {
      title: "Technical Learning",
      time: "4:40 AM - 5:15 AM",
      activities: [
        "Review technical notes and terms",
        "Write fresh notes to reinforce learning",
        "Keep brain active and engaged with new concepts"
      ]
    },
    {
      title: "Morning Development & Learning",
      time: "5:15 AM - 5:30 AM",
      activities: [
        "Practice building websites and apps from scratch",
        "Work with various technology stacks",
        "Focus on: Docker, Kubernetes, AWS Lambda, AWS Elastic Beanstalk, Terraform",
        "Prepare gym bag for workout"
      ]
    },
    {
      title: "Family Morning",
      time: "5:45 AM - 7:00 AM",
      activities: [
        "Get kids up for study and prayer (weekdays)",
        "Head to gym for cardio (running/walking) or occasional weights",
        "Prayer time during cardio"
      ]
    },
    {
      title: "Family Check-in",
      time: "7:00 AM - 7:10 AM",
      activities: [
        "Check in with kids using purple daily logs",
        "Review plans and homework",
        "Remind John about skincare routine",
        "Prepare healthy breakfast (eggs and vegetables)"
      ]
    },
    {
      title: "Musical Practice",
      time: "8:00 AM",
      activities: [
        "Play at least one note on the piano",
        "Focus on Grade 4 exam preparation",
        "Practice sight reading"
      ]
    },
    {
      title: "Daytime Focus",
      time: "10:00 AM - 4:00 PM",
      activities: [
        "Avoid sofa and TV to prevent daytime drowsiness",
        "Stay alert and productive",
        "Consider kids' evening activities (phones, games, etc.)",
        "Take pre-workout drink at 4 PM"
      ]
    },
    {
      title: "Evening Prayer & Workout",
      time: "5:00 PM - 9:00 PM",
      activities: [
        "One hour or more of prayer",
        "Prepare for gym",
        "Clean hallway and cat litter area",
        "Polish corridor floor",
        "3-hour gym session with prayer/weights",
        "Shower and return home"
      ]
    },
    {
      title: "Evening Wind-down",
      time: "7:00 PM - 8:00 PM",
      activities: [
        "Maintain quiet environment at home",
        "Whisper when speaking to kids"
      ]
    },
    {
      title: "Night Stack",
      time: "8:00 PM - 10:00 PM",
      activities: [
        "Complete Duolingo lessons",
        "Bible reading",
        "Update Strava fitness statistics",
        "Check bank statements (Monzo, MBNA)",
        "Review emails and messages",
        "Check social media notifications",
        "Open Kindle for reading",
        "Write down 5 dream-achieving tasks",
        "Review day's productivity",
        "Identify tasks that aligned with destiny"
      ]
    }
  ];

  const weeklyRoutines = [
    {
      title: "Monday",
      activities: [
        "7:00 AM - Check Hannah's weekly school journal and sign it"
      ]
    },
    {
      title: "Tuesday",
      activities: [
        "6:00 PM - 8:00 PM - Youth online Bible study (James and Hannah)"
      ]
    },
    {
      title: "Wednesday",
      activities: [
        "7:45 PM - 9:30 PM - Bible study group (online or in-person)",
        "Join online from gym around 8:30 PM - 9:30 PM if at gym",
        "Consider attending more in-person meetings"
      ]
    },
    {
      title: "Friday",
      activities: [
        "Contact Philip for upcoming week's calendar events",
        "6:15 PM - Hannah's gym preparation and transport",
        "6:30 PM - 8:30 PM - Weekly prayer meeting (in-person or online)",
        "8:00 PM - Set weekend message boundary until Sunday 8:00 PM",
        "Review previous week and plan next week"
      ]
    },
    {
      title: "Saturday",
      activities: [
        "Copy and paste last 7 days Monzo transactions into finances WhatsApp chat",
        "Review previous week and plan next week (if not done Friday)",
        "Monthly review and planning (end/start of month)"
      ]
    },
    {
      title: "Sunday",
      activities: [
        "6:00 AM - Prepare for early ministry (fortnightly, 6:45 AM - 12:00 PM)",
        "Pack: drinks, snacks, notes, electronics, gym bag",
        "9:00 AM - Visit Screen 8 three times before service (if on ministry)",
        "11:00 AM - Be present in foyer to greet people after service",
        "11:45 AM - Visit coffee area up to 3 times to be sociable"
      ]
    }
  ];

  const monthlyRoutines = [
    {
      title: "Ministry Planning",
      activities: [
        "Review ministry goals",
        "Plan upcoming events",
        "Meet with ministry team"
      ]
    },
    {
      title: "Personal Review",
      activities: [
        "Review goals and progress",
        "Financial planning and giving",
        "Set new objectives"
      ]
    },
    {
      title: "Family Planning",
      activities: [
        "Family budget review",
        "Plan special family activities",
        "Individual time with each child"
      ]
    }
  ];

  const listeningOptions = [
    {
      title: "Daily Listening Options",
      activities: [
        "Joyce Meyer (German YouTube)",
        "Joel Osteen sermons",
        "Watch Later YouTube playlist",
        "Syntax FM podcast",
        "Darknet Diaries podcast",
        "Other podcasts",
        "UCB1 radio"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <Breadcrumb
        items={[
          { label: 'Personal', path: '/personal' },
          { label: 'Routines', path: '/routines' }
        ]}
      />

      <h1 className="text-3xl font-bold text-warm-900">Daily, Weekly and Monthly Routines</h1>

      {/* Daily Routines Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Clock className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">Daily Routines</h2>
        </div>
        <div className="grid gap-6">
          {dailyRoutines.map((routine, index) => (
            <div key={index} className="bg-warm-50 rounded-lg p-6 border border-warm-200">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-warm-800">{routine.title}</h3>
                <span className="text-warm-600 text-sm bg-warm-100 px-3 py-1 rounded-full">
                  {routine.time}
                </span>
              </div>
              <ul className="space-y-2">
                {routine.activities.map((activity, actIndex) => (
                  <li key={actIndex}>
                    {typeof activity === 'string' ? (
                      <div className="flex items-center gap-2 text-warm-600">
                        <Repeat size={16} className="text-warm-400" />
                        <span>{activity}</span>
                      </div>
                    ) : activity.type === 'declarations' ? (
                      <div className="space-y-2">
                        <button
                          onClick={() => setShowDeclarations(!showDeclarations)}
                          className="flex items-center gap-2 text-warm-600 hover:text-warm-800 transition-colors w-full"
                        >
                          <Repeat size={16} className="text-warm-400" />
                          <span className="flex-1 text-left">{activity.label}</span>
                          {showDeclarations ? (
                            <ChevronUp size={16} className="text-warm-400" />
                          ) : (
                            <ChevronDown size={16} className="text-warm-400" />
                          )}
                        </button>
                        {showDeclarations && (
                          <div className="ml-6 mt-2 p-4 bg-white rounded-lg border border-warm-200 space-y-2">
                            {activity.content.map((declaration, i) => (
                              <p key={i} className="text-warm-600">• {declaration}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Weekly Routines Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">Weekly Routines</h2>
        </div>
        <div className="grid gap-6">
          {weeklyRoutines.map((routine, index) => (
            <div key={index} className="bg-warm-50 rounded-lg p-6 border border-warm-200">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-warm-800">{routine.title}</h3>
              </div>
              <ul className="space-y-2">
                {routine.activities.map((activity, actIndex) => (
                  <li key={actIndex} className="flex items-center gap-2 text-warm-600">
                    <CalendarCheck size={16} className="text-warm-400" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Monthly Routines Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <CalendarDays className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">Monthly Routines</h2>
        </div>
        <div className="grid gap-6">
          {monthlyRoutines.map((routine, index) => (
            <div key={index} className="bg-warm-50 rounded-lg p-6 border border-warm-200">
              <h3 className="text-xl font-semibold text-warm-800 mb-4">{routine.title}</h3>
              <ul className="space-y-2">
                {routine.activities.map((activity, actIndex) => (
                  <li key={actIndex} className="flex items-center gap-2 text-warm-600">
                    <CalendarDays size={16} className="text-warm-400" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Listening Options Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Music className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">Listening Options</h2>
        </div>
        <div className="grid gap-6">
          {listeningOptions.map((option, index) => (
            <div key={index} className="bg-warm-50 rounded-lg p-6 border border-warm-200">
              <h3 className="text-xl font-semibold text-warm-800 mb-4">{option.title}</h3>
              <ul className="space-y-2">
                {option.activities.map((activity, actIndex) => (
                  <li key={actIndex} className="flex items-center gap-2 text-warm-600">
                    <Music size={16} className="text-warm-400" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}