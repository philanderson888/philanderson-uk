import React from 'react';
import { Rocket, History, ExternalLink } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

export function Space() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <Breadcrumb
        items={[
          { label: 'Wiki', path: '/wiki' },
          { label: 'Space', path: '/space' }
        ]}
      />

      <h1 className="text-3xl font-bold text-warm-900">Space Exploration</h1>

      {/* Missions Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <History className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">Missions</h2>
        </div>

        <div className="space-y-8">
          <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
            <h3 className="text-xl font-semibold text-warm-800 mb-2">2025</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-warm-700 mb-2">Blue Origin NS-31 Mission (April 2025)</h4>
                <img
                  src="https://www.blueorigin.com/_next/image?url=https%3A%2F%2Fd1o72l87sylvqg.cloudfront.net%2Fblue-origin%2FNS31_L-0-Crew.jpeg&w=3840&q=75"
                  alt="NS-31 All-Female Crew"
                  className="rounded-lg w-full h-64 object-cover mb-4"
                />
                <div className="prose text-warm-600">
                  <p className="mb-4">
                    A historic milestone in space exploration as Blue Origin's New Shepard rocket launched the first all-female crew since 1963. This groundbreaking mission marks a significant step forward in breaking gender barriers in space flight, traditionally a male-dominated field.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>First all-female crew in over 60 years</li>
                    <li>Sub-orbital flight lasting 12 minutes</li>
                    <li>Successful vertical landing of the booster</li>
                    <li>Safe capsule return via parachute landing in the desert</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rockets Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Rocket className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">Rockets</h2>
        </div>

        <div className="grid gap-8">
          {/* New Shepard */}
          <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
            <h3 className="text-xl font-semibold text-warm-800 mb-4">New Shepard</h3>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src="https://d1o72l87sylvqg.cloudfront.net/blue-origin/newshepard-specs_vessel.png"
                    alt="Blue Origin New Shepard Rocket"
                    className="rounded-lg w-full h-64 object-contain bg-white"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-warm-600">
                    Blue Origin's New Shepard is a reusable suborbital rocket system designed to take astronauts and research payloads past the Kármán line – the internationally recognized boundary of space.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-warm-600">
                    <li>Vertical takeoff and landing capability</li>
                    <li>Fully autonomous flight operations</li>
                    <li>Capacity for 6 passengers</li>
                    <li>Named after Mercury astronaut Alan Shepard</li>
                  </ul>
                </div>
              </div>
              
              {/* New Shepard Capsule */}
              <div>
                <h4 className="text-lg font-medium text-warm-700 mb-4">Reusable Capsule</h4>
                <img
                  src="https://www.reuters.com/resizer/v2/CMJ5Y3ZHUZJTDESEM7H4C63J64.jpg?auth=f44af138ba91310ec469d18d673417d1778f653ce094dc17444ada41453679e1&width=1920&quality=80"
                  alt="Blue Origin New Shepard Reusable Capsule"
                  className="rounded-lg w-full h-64 object-cover"
                />
                <p className="mt-4 text-warm-600">
                  The New Shepard capsule features large windows for optimal viewing during spaceflight and is designed for safe, reliable return through the atmosphere.
                </p>
              </div>
            </div>
          </div>

          {/* New Glenn */}
          <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
            <h3 className="text-xl font-semibold text-warm-800 mb-4">New Glenn</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src="https://cdn.mos.cms.futurecdn.net/dRN4JBAQwvJgwDoquBEE83.jpg"
                  alt="Blue Origin New Glenn Rocket"
                  className="rounded-lg w-full h-64 object-cover"
                />
              </div>
              <div className="space-y-4">
                <p className="text-warm-600">
                  The New Glenn is Blue Origin's orbital launch vehicle, designed for both commercial and government missions. It represents the company's entry into the heavy-lift launch market.
                </p>
                <ul className="list-disc list-inside space-y-2 text-warm-600">
                  <li>7-meter-diameter reusable first stage</li>
                  <li>Powered by BE-4 engines</li>
                  <li>Designed for 25 mission reuse</li>
                  <li>Named after astronaut John Glenn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}