import React from 'react';
import { Eye, Target, Heart, Star, Briefcase } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

export function Vision() {
  const personalVision = [
    {
      title: "Spiritual Growth",
      description: "To grow deeper in my relationship with God, becoming more Christ-like in character and service.",
      goals: [
        "Daily prayer and Bible study",
        "Active church involvement and leadership",
        "Mentoring others in their faith journey"
      ]
    },
    {
      title: "Family Life",
      description: "To be a loving, present, and godly influence in my family's life, nurturing strong relationships and spiritual growth.",
      goals: [
        "Regular family devotions and prayer times",
        "Quality time with each family member",
        "Creating lasting memories through shared experiences"
      ]
    },
    {
      title: "Professional Development",
      description: "To excel in software development while maintaining a strong ethical foundation and positive influence in the workplace.",
      goals: [
        "Continuous learning and skill development",
        "Mentoring junior developers",
        "Building meaningful tech solutions that benefit society"
      ]
    },
    {
      title: "Ministry Impact",
      description: "To use my technical skills and resources for Kingdom advancement and community benefit.",
      goals: [
        "Developing technology solutions for churches",
        "Supporting missionary work through technical expertise",
        "Creating platforms for Christian education and outreach"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <Breadcrumb
        items={[
          { label: 'Personal', path: '/personal' },
          { label: 'Vision', path: '/vision' }
        ]}
      />

      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-warm-900">Vision Of My Life</h1>
        
        <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
          <div className="flex items-center gap-3 mb-4">
            <Target className="text-warm-600" size={24} />
            <p className="text-lg font-medium text-warm-800">Life Goal</p>
          </div>
          <p className="text-warm-600 text-lg italic">
            "If I had to boil my life goal down into one sentence, it would be to evangelise the world and lead 4 billion souls to Christ."
          </p>
        </div>

        <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="text-warm-600" size={24} />
            <p className="text-lg font-medium text-warm-800">Core Vision Statement</p>
          </div>
          <p className="text-warm-600">
            To live a life that glorifies God through technology, ministry, and family, creating lasting positive impact in both the digital and spiritual realms.
          </p>
        </div>

        <div className="grid gap-6">
          {personalVision.map((section, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 border border-warm-200">
              <div className="flex items-center gap-3 mb-4">
                {index === 0 && <Heart className="text-warm-600" size={24} />}
                {index === 1 && <Star className="text-warm-600" size={24} />}
                {index === 2 && <Briefcase className="text-warm-600" size={24} />}
                {index === 3 && <Target className="text-warm-600" size={24} />}
                <h2 className="text-xl font-semibold text-warm-800">{section.title}</h2>
              </div>
              <p className="text-warm-600 mb-4">{section.description}</p>
              <div className="space-y-2">
                {section.goals.map((goal, goalIndex) => (
                  <div key={goalIndex} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-warm-400"></div>
                    <p className="text-warm-600">{goal}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}