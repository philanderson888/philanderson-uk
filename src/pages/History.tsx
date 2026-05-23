import React from 'react';
import { History as HistoryIcon } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

export function History() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <Breadcrumb
        items={[
          { label: 'Wiki', path: '/wiki' },
          { label: 'History', path: '/history' }
        ]}
      />

      <h1 className="text-3xl font-bold text-warm-900">Historical Events</h1>

      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <HistoryIcon className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">Middle East</h2>
        </div>

        <div className="space-y-6">
          <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
            <h3 className="text-xl font-semibold text-warm-800 mb-4">
              A Brief History of the Conflict Between Israel and the Gaza Strip
            </h3>
            <div className="prose text-warm-600 space-y-4">
              <p>
                The conflict between Israel and the Gaza Strip is rooted in the broader Israeli-Palestinian conflict, which traces back to the early 20th century during the decline of the Ottoman Empire and the rise of Jewish and Arab nationalism. Tensions escalated after the establishment of the State of Israel in 1948, which led to war with neighboring Arab countries and the displacement of hundreds of thousands of Palestinians.
              </p>
              <p>
                The Gaza Strip, a small coastal territory, was under Egyptian control from 1948 to 1967. During the Six-Day War in 1967, Israel captured Gaza along with the West Bank. Over the next few decades, the territory became a flashpoint for resistance against Israeli occupation.
              </p>
              <p>
                In 2005, Israel unilaterally withdrew its military and settlements from Gaza. However, after the Islamist political group Hamas won the 2006 Palestinian elections and seized full control of Gaza in 2007, Israel and Egypt imposed a blockade, citing security concerns due to Hamas's refusal to recognize Israel and its use of violence.
              </p>
              <p>
                Since then, the region has seen repeated cycles of violence, including rocket attacks from Gaza and Israeli airstrikes, causing significant civilian casualties and humanitarian crises. Peace efforts have repeatedly stalled, and the situation remains tense, with both sides holding deep grievances and security concerns.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}