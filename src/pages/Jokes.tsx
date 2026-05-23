import React, { useState } from 'react';
import { Laugh, Code, Database, Network, Calculator, Brain, Dumbbell, Church, Rocket } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

interface Joke {
  text: string;
  punchline?: string;
}

interface JokeCategory {
  title: string;
  icon: React.ElementType;
  jokes: Joke[];
}

const jokeCollection: JokeCategory[] = [
  {
    title: "General",
    icon: Laugh,
    jokes: [
      { text: "Did you hear about the two egg whites who got involved in a fight?", punchline: "It was no yolk!" },
      { text: "Why was the violin stressed?", punchline: "Because it was highly strung!" },
      { text: "What do you call a lazy kangaroo?", punchline: "A pouch potato!" },
      { text: "I started a hot air balloon business...", punchline: "But it never took off!" },
      { text: "Why did the tomato turn red?", punchline: "Because it saw the salad dressing!" },
      { text: "I tried to catch some fog...", punchline: "But I mist!" },
      { text: "Why do astronauts use Apple Macs in space?", punchline: "Because they can't open Windows!" },
      { text: "What do you call an old snowman?", punchline: "Water!" },
      { text: "Why did the scarecrow win an award?", punchline: "Because he was outstanding in his field!" },
      { text: "What do you call a belt made out of watches?", punchline: "A waist of time!" },
      { text: "What do you call a bear with no teeth?", punchline: "A gummy bear!" },
      { text: "What do you call a pile of cats?", punchline: "A meowtain!" },
      { text: "What do you call a fake noodle?", punchline: "An impasta!" },
      { text: "What do you call a cow with no legs?", punchline: "Ground beef!" },
      { text: "What do you call a fish with no eyes?", punchline: "Fsh!" },
      { text: "What do you call a sleeping bull?", punchline: "A bulldozer!" },
      { text: "What's the world's smallest biscuit?", punchline: "Shortbread!" },
      { text: "Why do I eat snails?", punchline: "Because I don't like fast food!" },
      { text: "Something smells around here...", punchline: "It's between your left eye and your right eye!" },
      { text: "New restaurant opened on the moon...", punchline: "Great food, but no atmosphere!" }
    ]
  },
  {
    title: "Tech & Programming",
    icon: Code,
    jokes: [
      { text: "Why did the programmer quit his job?", punchline: "Because he didn't get arrays!" },
      { text: "Why did the programmer leave the fairground?", punchline: "Because he didn't like the way they handled loops!" },
      { text: "Knock knock... Race condition... Who's there?" },
      { text: "What's a programmer's favorite pub?", punchline: "The Foo Bar!" },
      { text: "Why do Java programmers wear glasses?", punchline: "Because they don't C#!" },
      { text: "There are 10 types of people in this world...", punchline: "Those who understand binary and those who don't!" },
      { text: "It's so refreshing to keep pressing the F5 key all day!" },
      { text: "I was going to tell you a joke about memory...", punchline: "But I can't remember it!" }
    ]
  },
  {
    title: "Database",
    icon: Database,
    jokes: [
      { text: "Three SQL databases walked into a NoSQL bar...", punchline: "But they left because they couldn't find a table!" },
      { text: "SQL query walks into a bar, sees two tables...", punchline: "Can I join you?" }
    ]
  },
  {
    title: "Networking",
    icon: Network,
    jokes: [
      { text: "Why was the UDP packet getting annoyed?", punchline: "Because no one would acknowledge him!" }
    ]
  },
  {
    title: "Math",
    icon: Calculator,
    jokes: [
      { text: "What's the fine line in math?", punchline: "The one between the numerator and denominator!" },
      { text: "What will mathematicians do to avoid negative numbers?", punchline: "Stop at nothing!" }
    ]
  },
  {
    title: "Space",
    icon: Rocket,
    jokes: [
      { text: "Did you hear about the claustrophobic astronaut?", punchline: "He just needed a little space!" }
    ]
  },
  {
    title: "Religious",
    icon: Church,
    jokes: [
      { text: "Need an ark?", punchline: "I Noah guy!" },
      { 
        text: "A woman dies and has a vision where God gives her 30 more years. She gets plastic surgery to look good, but when she dies again...",
        punchline: "God didn't recognize her!"
      }
    ]
  },
  {
    title: "Fitness",
    icon: Dumbbell,
    jokes: [
      { text: "Why did I bring my ladder to the gym?", punchline: "I had to step up my workouts!" }
    ]
  }
];

export function Jokes() {
  const [randomJoke, setRandomJoke] = useState<Joke | null>(null);
  const [showPunchline, setShowPunchline] = useState(false);

  const getRandomJoke = () => {
    const allJokes = jokeCollection.flatMap(category => category.jokes);
    const randomIndex = Math.floor(Math.random() * allJokes.length);
    setRandomJoke(allJokes[randomIndex]);
    setShowPunchline(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <Breadcrumb
        items={[
          { label: 'Wiki', path: '/wiki' },
          { label: 'Jokes & Humor', path: '/jokes' }
        ]}
      />

      <h1 className="text-3xl font-bold text-warm-900">Jokes & Humor</h1>

      {/* Random Joke Section */}
      <section className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Laugh className="text-warm-600" size={24} />
            <h2 className="text-2xl font-semibold text-warm-800">Random Joke</h2>
          </div>
          <button
            onClick={getRandomJoke}
            className="px-4 py-2 bg-warm-100 text-warm-700 rounded-lg hover:bg-warm-200 transition-colors"
          >
            Get Random Joke
          </button>
        </div>
        
        {randomJoke && (
          <div className="space-y-4">
            <p className="text-warm-800 text-lg">{randomJoke.text}</p>
            {randomJoke.punchline && (
              <div className="space-y-2">
                {!showPunchline && (
                  <button
                    onClick={() => setShowPunchline(true)}
                    className="text-warm-600 hover:text-warm-800 transition-colors"
                  >
                    Show punchline...
                  </button>
                )}
                {showPunchline && (
                  <p className="text-warm-600 italic">{randomJoke.punchline}</p>
                )}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Categorized Jokes */}
      {jokeCollection.map((category, index) => (
        <section key={index} className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center gap-3 mb-6">
            <category.icon className="text-warm-600" size={24} />
            <h2 className="text-2xl font-semibold text-warm-800">{category.title}</h2>
          </div>
          
          <div className="space-y-6">
            {category.jokes.map((joke, jokeIndex) => (
              <div key={jokeIndex} className="bg-warm-50 rounded-lg p-6 border border-warm-200">
                <p className="text-warm-800">{joke.text}</p>
                {joke.punchline && (
                  <p className="text-warm-600 mt-2 italic">{joke.punchline}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}