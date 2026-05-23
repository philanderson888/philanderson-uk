import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CharityWork() {
  const ukCharities = [
    {
      name: "Visit Churches",
      description: "Helps maintain and conserve Britain's historic churches",
      url: "https://visitchurches.org.uk"
    },
    {
      name: "Christian Concern",
      description: "Engages on a wide range of issues which affect UK society",
      url: "https://christianconcern.com/issues"
    }
  ];

  const localInitiatives = [
    {
      name: "Street Pastors",
      description: "Supporting vulnerable people in urban areas",
      url: "https://www.streetpastors.org"
    },
    {
      name: "Food Bank Aid",
      description: "Helping local communities in need",
      url: "https://foodbankaid.org.uk/what-we-do/"
    },
    {
      name: "North Enfield Food Bank",
      description: "Local food bank serving the North Enfield community",
      url: "https://northenfield.foodbank.org.uk"
    }
  ];

  const internationalMissions = [
    {
      name: "WEC International",
      description: "Inspired by 'the Cambridge Seven' who gave up their worldly wealth to reach the unreached, WEC International continues their legacy by bringing the Gospel to the most unreached parts of the world.",
      url: "https://www.wecinternational.org",
      history: "Founded in the spirit of the Cambridge Seven, who famously abandoned wealth and privilege to serve as missionaries in China, WEC International carries forward their vision of reaching those who have never heard the Gospel."
    },
    {
      name: "Full Gospel Assembly Pakistan",
      description: "Providing Christian education and community support through schools and outreach programs in Pakistan.",
      url: "https://fgaschools.org",
      history: "Serving the Pakistani community through education and spiritual development, focusing on providing quality Christian education to children."
    },
    {
      name: "The Salvation Army Pakistan",
      description: "Offering spiritual and social services to communities across Pakistan through various programs and initiatives.",
      url: "https://salvationarmypakistan.org",
      history: "Working to meet human needs and spread the gospel in Pakistan through community service and spiritual guidance."
    },
    {
      name: "Church of Pakistan",
      description: "A united Protestant Church serving the Christian community in Pakistan through various ministries and outreach programs.",
      url: "https://cop.org.pk",
      history: "Uniting Protestant Christians in Pakistan and providing spiritual leadership and community support across the nation."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <h1 className="text-3xl font-bold text-warm-900">Charity Work</h1>

      {/* UK Charity Work */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-warm-800 mb-6">Charity Work in the UK</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-warm-800 mb-4">Local Initiatives</h3>
            <div className="space-y-4">
              {localInitiatives.map((initiative, index) => (
                <a
                  key={index}
                  href={initiative.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-warm-50 rounded-lg hover:bg-warm-100 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-warm-900">{initiative.name}</h4>
                      <p className="text-warm-600 text-sm mt-1">{initiative.description}</p>
                    </div>
                    <ExternalLink className="text-warm-600" size={20} />
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium text-warm-800 mb-4">Helpful Charity Links</h3>
            <div className="space-y-4">
              {ukCharities.map((charity, index) => (
                <a
                  key={index}
                  href={charity.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-warm-50 rounded-lg hover:bg-warm-100 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-warm-900">{charity.name}</h4>
                      <p className="text-warm-600 text-sm mt-1">{charity.description}</p>
                    </div>
                    <ExternalLink className="text-warm-600" size={20} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* International Missions */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-warm-800 mb-6">International Missions</h2>
        <div className="space-y-6">
          {/* Mission Organizations */}
          <div>
            <h3 className="text-xl font-medium text-warm-800 mb-4">Mission Organizations</h3>
            <div className="space-y-6">
              {internationalMissions.map((mission, index) => (
                <div key={index} className="bg-warm-50 rounded-lg p-6 border border-warm-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-warm-900">{mission.name}</h4>
                    <a
                      href={mission.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warm-600 hover:text-warm-800 transition-colors flex items-center gap-2"
                    >
                      <span>Visit Website</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <p className="text-warm-600 mb-4">{mission.description}</p>
                  <div className="bg-white rounded p-4 border border-warm-200">
                    <p className="text-warm-600 italic">{mission.history}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/persecuted-christians"
            className="block p-6 bg-warm-50 rounded-lg hover:bg-warm-100 transition-colors border border-warm-200"
          >
            <h3 className="text-xl font-medium text-warm-800 mb-2">Supporting Persecuted Christians</h3>
            <p className="text-warm-600 mb-4">
              Providing aid and support to Christians in poverty-stricken regions through various ministries and initiatives.
            </p>
            <div className="flex items-center gap-2 text-warm-600 hover:text-warm-800">
              <span>Learn more about our supported ministries</span>
              <ExternalLink size={16} />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}