import React from 'react';
import { Flame, Shield, Users, Church, Crown, Heart, Briefcase, Scale } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

export function Prayers() {
  const releasingSpirit = [
    'Faith', 'Hope', 'Love', 'Mercy', 'Dominion', 'Blessing', 'Righteousness',
    'Glory', 'Favour', 'Fruitfulness', 'Evangelism', 'Preaching', 'Soul Winning',
    'Fire', 'Church Building', 'Power', 'Miracles', 'Healing', 'Deliverance',
    'Church Visibility', 'Communication', 'Harmony', 'Wisdom', 'Dedication',
    'Commitment', 'Worship', 'Gifts Of The Spirit To Be Released', 'Grace',
    'Church to stand against evil with a unified front', 'Sacrifice',
    'Interdependence', 'Fruit of the Spirit - Love Joy Peace Patience Goodness Gentleness Meekness Self Control Longsuffering',
    'Angelic Visitation', 'Supplication', 'Prayer', 'Fasting', 'Giving',
    'Generosity', 'Liberality', 'Endurance', 'Calvary', 'Communion', 'Freedom',
    'Forgiveness', 'Mercy', 'Long Sightedness', 'Cooperation', 'Submission',
    'Adherence', 'Urgency', 'Humility', 'Fear of the Lord', 'Joy', 'Love',
    'Peace', 'Sacrifice', 'Surrender', 'Strength In Jesus', 'Faith for finances',
    'Faith for provision', 'Trust in the Lord', 'Submission one to another'
  ];

  const bindingPowers = [
    'Dulness', 'Satan', 'Anti Christ', 'Pride', 'Presumption', 'Arrogance',
    'High and Lifted Up Sprit', 'Fleshliness', 'Worldliness', 'Self-sufficiency',
    'Legalism', 'Independence', 'Dead Religion', 'False Religion', 'Idolatry',
    'Pagan Worship', 'Covetousness', 'Swearing', 'Adultery', 'Fornication',
    'Homo', 'Les', 'Best', 'Mast', 'Debauchery', 'Cynicism', 'Orgy', 'Effeminate',
    'Anger', 'Gluttony', 'Lust', 'Bitterness', 'Envy', 'Sloth', 'Nakedness',
    'Shame', 'Darkness', 'Dryness', 'Boredom with the church', 'Boredom with life',
    'Complacency', 'Laziness', 'Compromise', 'Jealousy', 'Envy', 'Strife', 'Lust',
    'Pride', 'Nakedness', 'Shame', 'Poverty', 'Drunkenness', 'Drug-taking',
    'Dead Catholicism', 'Dead Protestantism', 'Dead Christianity', 'Jehovah\'s Witness',
    'Mormon', 'Free Mason', 'Occult', 'Spiritualism', 'Clairvoyance',
    'Fortune Tellling', 'Horoscopes', 'Astrology', 'Tarot Card Reading',
    'Hindu', 'Islam', 'Buddhism', 'Eastern Religions'
  ];

  const immediateFamily = [
    'Zoe',
    'Philippa',
    'Christa',
    'Philip',
    'James',
    'John',
    'Hannah',
    'Dad',
    'Mum'
  ];

  const distantFamily = [
    'Robin',
    'Evelyn',
    'Michael',
    'Brigit',
    'Michael Saunders and Liz',
    'Robert and Nel',
    'Mark Anderson',
    'Rosie Goodbody',
    'Alan and Joy Goodbody'
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <Breadcrumb
        items={[
          { label: 'Personal', path: '/personal' },
          { label: 'Prayers', path: '/prayers' }
        ]}
      />

      <h1 className="text-3xl font-bold text-warm-900">Prayer Points</h1>

      {/* Releasing The Spirit Of Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Flame className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">Releasing The Spirit Of</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {releasingSpirit.map((item, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-warm-50 text-warm-700 rounded-lg border border-warm-200"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Binding Spiritual Powers Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">Binding Spiritual Powers</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {bindingPowers.map((item, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-warm-50 text-warm-700 rounded-lg border border-warm-200"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Family Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Users className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">Family</h2>
        </div>
        
        {/* Immediate Family */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-warm-700 mb-4">Immediate Family</h3>
          <div className="flex flex-wrap gap-2">
            {immediateFamily.map((member, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-warm-50 text-warm-700 rounded-lg border border-warm-200"
              >
                {member}
              </span>
            ))}
          </div>
        </div>

        {/* More Distant Family */}
        <div>
          <h3 className="text-xl font-semibold text-warm-700 mb-4">More Distant Family</h3>
          <div className="flex flex-wrap gap-2">
            {distantFamily.map((member, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-warm-50 text-warm-700 rounded-lg border border-warm-200"
              >
                {member}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Church Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Church className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">Church</h2>
        </div>
        <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
          <p className="text-warm-600 italic">Prayer points for the church will be added here.</p>
        </div>
      </section>

      {/* Pastors And Leaders Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Crown className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">Pastors And Leaders</h2>
        </div>
        <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
          <p className="text-warm-600 italic">Prayer points for pastors and leaders will be added here.</p>
        </div>
      </section>

      {/* Friends Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Heart className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">Friends</h2>
        </div>
        <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
          <p className="text-warm-600 italic">Prayer points for friends will be added here.</p>
        </div>
      </section>

      {/* Work Colleagues Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">Work Colleagues</h2>
        </div>
        <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
          <p className="text-warm-600 italic">Prayer points for work colleagues will be added here.</p>
        </div>
      </section>

      {/* Social Issues Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Scale className="text-warm-600" size={24} />
          <h2 className="text-2xl font-semibold text-warm-800">Social Issues</h2>
        </div>
        <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-warm-400"></div>
              <p className="text-warm-600">For the 90,000 prisoners in UK prisons - for their salvation, rehabilitation, and transformation</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}