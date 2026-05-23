import React from 'react';
import { Calendar, DollarSign } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

export function Money() {
  const businessSubscriptions = [
    {
      name: "Canva",
      description: "Image generation software",
      url: "https://www.canva.com/settings/billing-and-teams",
      amount: "£100",
      frequency: "Yearly",
      dueDate: "November",
      tags: ["Design", "Image Generation"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <Breadcrumb
        items={[
          { label: 'Personal', path: '/personal' },
          { label: 'Money', path: '/money' }
        ]}
      />

      <h1 className="text-3xl font-bold text-warm-900">Money Management</h1>

      {/* Subscription Payments Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold text-warm-800 mb-6">Subscription Payments</h2>
        
        {/* Business Subscriptions */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-warm-700">Business Subscriptions</h3>
          <div className="grid gap-6">
            {businessSubscriptions.map((subscription, index) => (
              <a
                key={index}
                href={subscription.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-warm-50 rounded-lg hover:bg-warm-100 transition-colors border border-warm-200"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h4 className="text-xl font-medium text-warm-900">{subscription.name}</h4>
                    <p className="text-warm-600">{subscription.description}</p>
                    <div className="flex items-center gap-4 text-warm-600">
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        Due: {subscription.dueDate}
                      </span>
                      <span>{subscription.amount} / {subscription.frequency}</span>
                    </div>
                    <div className="flex gap-2 mt-2">
                      {subscription.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-warm-100 text-warm-700 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Personal Subscriptions */}
        <div className="mt-8 space-y-6">
          <h3 className="text-xl font-semibold text-warm-700">Personal Subscriptions</h3>
          <p className="text-warm-600">Personal subscription payments will appear here.</p>
        </div>
      </section>
    </div>
  );
}