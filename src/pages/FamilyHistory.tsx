import React from 'react';
import { History, School, Church, Home } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

export function FamilyHistory() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <Breadcrumb
        items={[
          { label: 'Personal', path: '/personal' },
          { label: 'Family History', path: '/family-history' }
        ]}
      />

      <h1 className="text-3xl font-bold text-warm-900">Family History</h1>

      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <History className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">John Faithfull Anderson (Dad)</h2>
        </div>

        <div className="space-y-6">
          <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Home className="text-warm-600 mt-1" size={20} />
                <div>
                  <h3 className="text-lg font-medium text-warm-800">Early Life</h3>
                  <p className="text-warm-600">
                    Born in 1934, the family lived in Godalming. They stayed in a house called 'The Lodge' which had a swimming pool. In 1934, they were in a school house called 'Sutton Cottage' on Charterhouse Hill.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <School className="text-warm-600 mt-1" size={20} />
                <div>
                  <h3 className="text-lg font-medium text-warm-800">Father's Career</h3>
                  <p className="text-warm-600">
                    His father Ted (Edward) worked as head of English at Charterhouse school for boys. In 1935, Ted went to Cambridge to train for 1 year to become a chaplain, leaving his wife at home with John. Later, the Charterhouse headmaster became headmaster of Eton and offered Ted the job of chaplain at Eton, but he refused due to poor health.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <History className="text-warm-600 mt-1" size={20} />
                <div>
                  <h3 className="text-lg font-medium text-warm-800">War Years</h3>
                  <p className="text-warm-600">
                    In 1939, aged 5, the war broke out. The family remained in Godalming during this period.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Church className="text-warm-600 mt-1" size={20} />
                <div>
                  <h3 className="text-lg font-medium text-warm-800">Religious Journey</h3>
                  <p className="text-warm-600">
                    One of Rev Ted's Anglican priest friends converted to become a Roman Catholic priest. This may have influenced Rev Ted's wife, who later converted to Roman Catholicism. Following his mother's path, John also converted and became a devout Roman Catholic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}