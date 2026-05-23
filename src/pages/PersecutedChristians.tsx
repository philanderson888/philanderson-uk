import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

export function PersecutedChristians() {
  const ministries = [
    {
      name: "Shakaib's Ministry",
      location: "Pakistan",
      description: "Founded in 2017 by Shakaib's father, this ministry has grown to support 35 orphans in a Christian colony in Pakistan. The ministry is now led by Shakaib after his father's passing, with support from his wife and brother. They provide care, education, and spiritual guidance to orphans while being part of a small but growing church of 37 Christians.",
      achievements: [
        "Supporting 35 orphans with housing and care",
        "Providing daily education classes",
        "Conducting evangelistic missions",
        "Recent mission brought 3 new souls to salvation",
        "Raised nearly £5,000 through GoFundMe"
      ],
      team: [
        "Shakaib - Ministry Leader",
        "Shakaib's Wife - Education and Orphan Care",
        "Shakaib's Brother - Support Staff"
      ],
      images: [
        {
          url: "https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/2025-03-shakaib-ministry-orphan-children.jpeg",
          alt: "Orphan children under the care of Shakaib's Ministry"
        },
        {
          url: "https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/2025-04-shakaib-womens-ministry-evangelistic-meeting.jpeg",
          alt: "Women's evangelistic meeting gathering"
        }
      ],
      donationLink: "https://www.gofundme.com/f/god-loves-ministry-orphanage"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <Breadcrumb
        items={[
          { label: 'Charity Work', path: '/charity-work' },
          { label: 'Persecuted Christians', path: '/persecuted-christians' }
        ]}
      />

      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-warm-900">Supporting Persecuted Christians</h1>

        {/* Main Image and Scripture Section */}
        <div className="space-y-4">
          <div className="rounded-lg border border-warm-200 overflow-hidden">
            <img
              src="https://philanderson888-public-image-s3-bucket.s3.eu-west-2.amazonaws.com/2025-03-helping-orphans_anonymized.jpg"
              alt="Helping orphans and spreading the gospel"
              className="w-full h-auto"
            />
          </div>
          <div className="bg-warm-50 rounded-lg p-6 border border-warm-200 text-center">
            <p className="text-warm-800 text-xl md:text-2xl font-semibold mb-4">
              "Go into all the world and preach the gospel. He who believes and is baptised will be saved"
            </p>
            <p className="text-warm-700 text-lg md:text-xl italic">
              "... and the least that you do to these little children of mine, you do unto Me ..."
            </p>
          </div>
        </div>
        
        <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
          <p className="text-warm-600">
            We support various ministries working with persecuted Christians around the world, 
            providing aid, education, and spiritual support to those facing persecution for their faith.
          </p>
        </div>

        <div className="space-y-8">
          {ministries.map((ministry, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm p-8 border border-warm-200"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Heart className="text-warm-600" size={24} />
                  <h2 className="text-2xl font-semibold text-warm-800">{ministry.name}</h2>
                </div>

                <div className="space-y-4">
                  <p className="text-warm-600">{ministry.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-warm-800 mb-3">Achievements</h3>
                      <ul className="space-y-2">
                        {ministry.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2 text-warm-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-warm-400"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-warm-800 mb-3">Ministry Team</h3>
                      <ul className="space-y-2">
                        {ministry.team.map((member, i) => (
                          <li key={i} className="flex items-center gap-2 text-warm-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-warm-400"></div>
                            <span>{member}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {ministry.images && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-warm-800">Ministry Impact</h3>
                      <div className="grid gap-6">
                        {ministry.images.map((image, i) => (
                          <div key={i} className="space-y-2">
                            <div className="overflow-hidden rounded-lg border border-warm-200">
                              <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-auto"
                              />
                            </div>
                            <p className="text-warm-600 text-sm italic text-center">{image.alt}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="pt-4">
                    <a
                      href={ministry.donationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-warm-600 text-white rounded-md hover:bg-warm-700 transition-colors"
                    >
                      Support This Ministry
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}