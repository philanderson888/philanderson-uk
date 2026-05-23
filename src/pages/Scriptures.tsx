import React, { useState } from 'react';
import { Book, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Breadcrumb } from '../components/Breadcrumb';

interface Scripture {
  reference: string;
  text: string;
  chapter: string;
}

export function Scriptures() {
  const [currentPage, setCurrentPage] = useState(1);
  const scriptsPerPage = 20;

  const scriptures: Scripture[] = [
    {
      reference: "Deuteronomy 15:10",
      text: "Give generously to him and do so without a grudging heart; then because of this the Lord your God will bless you in all your work and in everything you put your hand to.",
      chapter: "Deuteronomy%2015"
    },
    {
      reference: "Joshua 1:8",
      text: "This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night, that thou mayest observe to do according to all that is written therein: for then thou shalt make thy way prosperous, and then thou shalt have good success",
      chapter: "Joshua%201"
    },
    {
      reference: "Joshua 1:9",
      text: "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the Lord your God is with you wherever you go.",
      chapter: "Joshua%201"
    },
    {
      reference: "1 Chronicles 28:20",
      text: "BE STRONG AND OF GOOD COURAGE, AND DO THE WORK. DO NOT BE AFRAID NOR DISCOURAGED, FOR THE LORD GOD, MY GOD, IS WITH YOU. HE WILL NOT FAIL YOU NOR FORSAKE YOU UNTIL ALL THE WORK FOR THE SERVICE OF THE TEMPLE OF THE LORD IS FINISHED.",
      chapter: "1%20Chronicles%2028"
    },
    {
      reference: "1 Chronicles 29:9",
      text: "Then the people rejoiced because they had offered so willingly, for they made their offering to the Lord with a whole heart, and King David also rejoiced greatly.",
      chapter: "1%20Chronicles%2029"
    },
    {
      reference: "Psalm 4:3",
      text: "But know that the Lord hath set apart him that is godly for himself: the Lord will hear when I call unto him.",
      chapter: "Psalm%204"
    },
    {
      reference: "Psalm 5:11",
      text: "But let all those that put their trust in you rejoice: let them ever shout for joy, because you defend them: let them also that love your name be joyful in thee.",
      chapter: "Psalm%205"
    },
    {
      reference: "Psalms 6:9",
      text: "The Lord has heard my supplication; the Lord will receive my prayer.",
      chapter: "Psalm%206"
    },
    {
      reference: "Psalm 38:18",
      text: "I will declare mine iniquity; I will be sorry for my sin.",
      chapter: "Psalm%2038"
    },
    {
      reference: "Psalm 68:19",
      text: "Blessed be the Lord who daily loadeth us with benefits, even the God of our salvation.",
      chapter: "Psalm%2068"
    },
    {
      reference: "Psalm 119:9-11",
      text: "How shall a young man cleanse his way? By taking heed to it according to Thy Word. With my whole heart have I sought thee: O let me not wander from thy commandments",
      chapter: "Psalm%20119"
    },
    {
      reference: "Proverbs 3:5",
      text: "Trust in the lord with of your heart and lean not on your own understanding.",
      chapter: "Proverbs%203"
    },
    {
      reference: "Proverbs 3:9-10",
      text: "Honor the Lord from your wealth and from the first of all your produce; So your barns will be filled with plenty and your vats will overflow with new wine.",
      chapter: "Proverbs%203"
    },
    {
      reference: "Proverbs 3:27",
      text: "Do not withhold good from those to whom it is due, when it is in your power to do it.",
      chapter: "Proverbs%203"
    },
    {
      reference: "Proverbs 11:24-25",
      text: "There is one who scatters, and yet increases all the more, and there is one who withholds what is justly due, and yet it results only in want. The generous man will be prosperous, and he who waters will himself be watered.",
      chapter: "Proverbs%2011"
    },
    {
      reference: "Isaiah 12:6",
      text: "Great is the Holy One in the midst of thee so cry out and SHOUT thou inhabitant of Zion!",
      chapter: "Isaiah%2012"
    },
    {
      reference: "Amos 3:3",
      text: "Can two walk together, except they be agreed?",
      chapter: "Amos%203"
    },
    {
      reference: "Matthew 1:21",
      text: "And He shall bring forth a son, and thou shalt call His Name Jesus, for he shall save his people from their sins",
      chapter: "Matthew%201"
    },
    {
      reference: "Matthew 3:2",
      text: "Repent ye: for the kingdom of heaven is at hand. (John the Baptist preaching)",
      chapter: "Matthew%203"
    },
    {
      reference: "Matthew 3:16-17",
      text: "And Jesus, when he was baptized, went up straightway out of the water: and, lo, the heavens were opened unto him, and he saw the Spirit of God descending like a dove, and lighting upon him: And lo a voice from heaven, saying, This is my beloved Son, in whom I am well pleased.",
      chapter: "Matthew%203"
    },
    {
      reference: "Matthew 4:3",
      text: "And when the tempter came to him, he said, If thou be the Son of God ...",
      chapter: "Matthew%204"
    },
    {
      reference: "Matthew 5:3",
      text: "Blessed are the poor in spirit : for theirs is the kingdom of heaven",
      chapter: "Matthew%205"
    },
    {
      reference: "Matthew 5:5",
      text: "Blessed Are The Meek For They Shall Inherit The Earth",
      chapter: "Matthew%205"
    },
    {
      reference: "Matthew 5:6",
      text: "Blessed are they which do hunger and thirst after righteousness : for they shall be filled.",
      chapter: "Matthew%205"
    },
    {
      reference: "Matthew 6:14",
      text: "If you forgive men their trespasses (wrongdoing), your Heavenly Father will also forgive you.",
      chapter: "Matthew%206"
    },
    {
      reference: "Luke 13:3",
      text: "Except ye repent, ye shall all likewise perish",
      chapter: "Luke%2013"
    },
    {
      reference: "Luke 24:47",
      text: "And that repentance and remission (forgiveness) of sins should be preached in his name among all nations, beginning at Jerusalem.",
      chapter: "Luke%2024"
    },
    {
      reference: "John 3:16",
      text: "For God so loved the world, he gave his only begotten Son that whosoever believeth in him shall not perish but have everlasting life.",
      chapter: "John%203"
    },
    {
      reference: "John 14:6",
      text: "I am the way, the truth and the life : no man comes unto the father, but by me.",
      chapter: "John%2014"
    },
    {
      reference: "John 1:12",
      text: "But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name.",
      chapter: "John%201"
    },
    {
      reference: "John 10:27-28",
      text: "My sheep hear my voice and I know them, and they follow me: and I give unto them eternal life; and they shall never perish, neither shall any man pluck them out of my hand.",
      chapter: "John%2010"
    },
    {
      reference: "John 17:24-26",
      text: "Father, I desire that they also whom You gave Me may be with Me where I am, THAT THEY MAY BEHOLD MY GLORY which You have given Me; for You loved Me before the foundation of the world. \"O righteous Father! The world has not known You, but I have known You; and these have known that You sent Me.\" And I have declared to them Your name, and WILL DECLARE IT, THAT THE LOVE WITH WHICH YOU LOVED ME MAY BE IN THEM, and I in them.",
      chapter: "John%2017"
    },
    {
      reference: "Acts 4:29-31",
      text: "GRANT TO YOUR SERVANTS THAT WITH ALL BOLDNESS THEY MAY SPEAK YOUR WORD, BY STRETCHING OUT YOUR HAND TO HEAL, AND THAT SIGNS AND WONDERS MAY BE DONE through the name of Your holy Servant Jesus. And when they had prayed, the place where they were assembled together was shaken; and they were all filled with the Holy Spirit, and they spoke the word of God with boldness.",
      chapter: "Acts%204"
    },
    {
      reference: "Acts 17:30",
      text: "God commands all men everywhere to repent",
      chapter: "Acts%2017"
    },
    {
      reference: "Romans 1:16",
      text: "I am not ashamed of the Gospel of Christ for it is the power of God unto salvation for everyone who believes",
      chapter: "Romans%201"
    },
    {
      reference: "Romans 3:10",
      text: "There is none righteous, no not one",
      chapter: "Romans%203"
    },
    {
      reference: "Romans 3:23",
      text: "All have sinned, and come short of the glory of god.",
      chapter: "Romans%203"
    },
    {
      reference: "Romans 4:4-5",
      text: "Now to him that worketh is the reward not reckoned of grace, but of debt. But to him that worketh not, but believeth on him that justifieth the ungodly, his faith is counted for righteousness.",
      chapter: "Romans%204"
    },
    {
      reference: "Romans 4:20",
      text: "Abraham staggered not at the promise of God through unbelief; but was strong in faith, giving glory to God",
      chapter: "Romans%204"
    },
    {
      reference: "Romans 5:2",
      text: "We REJOICE IN HOPE OF THE GLORY OF GOD",
      chapter: "Romans%205"
    },
    {
      reference: "Romans 5:12",
      text: "DEATH ENTERS BY SIN",
      chapter: "Romans%205"
    },
    {
      reference: "Romans 6:23",
      text: "For the wages of sin is death, but the gift of god is eternal life through Jesus Christ our lord.",
      chapter: "Romans%206"
    },
    {
      reference: "Romans 10:14",
      text: "how shall they hear without a preacher?",
      chapter: "Romans%2010"
    },
    {
      reference: "Romans 10:15",
      text: "How beautiful are the feet of them that preach the gospel of peace",
      chapter: "Romans%2010"
    },
    {
      reference: "Romans 10:17",
      text: "So then faith cometh by hearing and hearing by the word of god.",
      chapter: "Romans%2010"
    },
    {
      reference: "Romans 12:21",
      text: "Be not overcome of evil, but overcome evil with good",
      chapter: "Romans%2012"
    },
    {
      reference: "Romans 15:5-7",
      text: "Now may the God of patience and comfort GRANT YOU TO BE LIKE-MINDED toward one another, according to Christ Jesus, THAT YOU MAY WITH ONE MIND AND ONE MOUTH glorify the God and Father of our Lord Jesus.",
      chapter: "Romans%2015"
    },
    {
      reference: "Romans 15:13",
      text: "Now may the God of hope FILL YOU WITH ALL JOY AND PEACE IN BELIEVING, THAT YOU MAY ABOUND IN HOPE by the power of the Holy Spirit.",
      chapter: "Romans%2015"
    },
    {
      reference: "1 Corinthians 1:21",
      text: "It pleased God by the foolishness of preaching to save them that believe",
      chapter: "1%20Corinthians%201"
    },
    {
      reference: "2 Corinthians 4:6",
      text: "For God, who commanded the light to shine out of darkness, hath shined in our hearts, to give the light of the knowledge of the glory of God in the face of Jesus Christ.",
      chapter: "2%20Corinthians%204"
    },
    {
      reference: "2 Corinthians 6:14",
      text: "Be ye not unequally yoked together with unbelievers: for what fellowship hath righteousness with unrighteousness? and what communion hath light with darkness?",
      chapter: "2%20Corinthians%206"
    },
    {
      reference: "Philippians 1:9",
      text: "I pray, that YOUR LOVE MAY ABOUND still more and more in knowledge and all discernment, that you may APPROVE THE THINGS THAT ARE EXCELLENT, that you may be sincere and without offense till the day of Christ, being FILLED WITH THE FRUITS OF RIGHTEOUSNESS which are by Jesus Christ, to the glory and praise of God",
      chapter: "Philippians%201"
    },
    {
      reference: "Colossians 1:9",
      text: "We do not cease to pray for you, and to ask that you may be filled with the KNOWLEDGE OF HIS WILL in all wisdom and spiritual understanding;",
      chapter: "Colossians%201"
    },
    {
      reference: "Colossians 1:10",
      text: "that you may have a WALK WORTHY OF THE LORD, fully pleasing Him, BEING FRUITFUL in every good work and increasing in the knowledge of God;",
      chapter: "Colossians%201"
    },
    {
      reference: "Colossians 1:11",
      text: "STRENGTHENED WITH ALL MIGHT, according to His glorious power, for all patience and longsuffering with joy;",
      chapter: "Colossians%201"
    },
    {
      reference: "Colossians 1:12",
      text: "giving thanks to the Father who has qualified us to be partakers of the inheritance of the saints in the light.",
      chapter: "Colossians%201"
    },
    {
      reference: "1 Thessalonians 3:9",
      text: "we rejoice for your sake before our God,",
      chapter: "1%20Thessalonians%203"
    },
    {
      reference: "1 Thessalonians 3:10",
      text: "night and day praying exceedingly THAT WE MAY SEE YOUR FACE and PERFECT WHAT IS LACKING in your faith.",
      chapter: "1%20Thessalonians%203"
    },
    {
      reference: "1 Thessalonians 3:11",
      text: "Now God Himself and our Father, and our Lord Jesus Christ, DIRECT OUR WAY TO YOU.",
      chapter: "1%20Thessalonians%203"
    },
    {
      reference: "1 Thessalonians 3:12",
      text: "And may the Lord make you increase and ABOUND IN LOVE to one another, and toward all men, even as we do toward you",
      chapter: "1%20Thessalonians%203"
    },
    {
      reference: "1 Thessalonians 3:13",
      text: "so that He may ESTABLISH YOUR HEARTS BLAMELESS IN HOLINESS before our God and Father at the coming of our Lord Jesus Christ with all His saints.",
      chapter: "1%20Thessalonians%203"
    },
    {
      reference: "2 Thessalonians 1:11",
      text: "Therefore we also pray always for you THAT OUR GOD WOULD COUNT YOU WORTHY OF THIS CALLING, AND FULFILL ALL THE GOOD PLEASURE OF HIS GOODNESS AND THE WORK OF FAITH WITH POWER,",
      chapter: "2%20Thessalonians%201"
    },
    {
      reference: "2 Thessalonians 1:12",
      text: "that the name of our Lord Jesus Christ may be glorified in you, and you in Him, according to the grace of our God and the Lord Jesus Christ.",
      chapter: "2%20Thessalonians%201"
    },
    {
      reference: "2 Thessalonians 3:1",
      text: "pray for us, THAT THE WORD OF THE LORD MAY RUN SWIFTLY AND BE GLORIFIED, just as it is with you,",
      chapter: "2%20Thessalonians%203"
    },
    {
      reference: "2 Thessalonians 3:2",
      text: "and that we may be delivered from unreasonable and wicked men; for not all have faith.",
      chapter: "2%20Thessalonians%203"
    },
    {
      reference: "2 Thessalonians 3:3",
      text: "But the Lord is faithful, who will establish you and keep you from the evil one.",
      chapter: "2%20Thessalonians%203"
    },
    {
      reference: "2 Thessalonians 3:4",
      text: "And we have confidence in the Lord concerning you, both that you do and will do the things we command you.",
      chapter: "2%20Thessalonians%203"
    },
    {
      reference: "2 Thessalonians 3:5",
      text: "NOW MAY THE LORD DIRECT YOUR HEARTS INTO THE LOVE OF GOD AND INTO THE PATIENCE OF CHRIST.",
      chapter: "2%20Thessalonians%203"
    },
    {
      reference: "2 Timothy 4:2",
      text: "Preach the WORD; Be INSTANT IN SEASON AND OUT OF SEASON; REPROVE; REBUKE; EXHORT WITH ALL LONGSUFFERING AND DOCTRINE.",
      chapter: "2%20Timothy%204"
    },
    {
      reference: "1 Timothy 4:15",
      text: "Meditate upon these things; give yourself wholly to them; that your profiting may appear to all.",
      chapter: "1%20Timothy%204"
    },
    {
      reference: "James 1:2-3",
      text: "Be happy when you have many trials because this will try your faith and produce patience in you",
      chapter: "James%201"
    },
    {
      reference: "James 1:5",
      text: "If any person lacks wisdom then let him ask it from God who gives to all people generously",
      chapter: "James%201"
    },
    {
      reference: "James 4:17",
      text: "Therefore to the person who knows to do good, and does it not - to that person this is sin",
      chapter: "James%204"
    },
    {
      reference: "1 John 1:5",
      text: "God is love and in him is no darkness",
      chapter: "1%20John%201"
    },
    {
      reference: "1 John 5:12",
      text: "He who has the Son hath life; and he that has not the Son of God does not have life",
      chapter: "1%20John%205"
    },
    {
      reference: "Acts 26:15-23",
      text: "And I said, Who art thou, Lord? And he said, I am Jesus whom thou persecutest. But rise, and stand upon thy feet: for I have appeared unto thee for this purpose, to make thee a minister and a witness both of these things which thou hast seen, and of those things in the which I will appear unto thee; Delivering thee from the people, and from the Gentiles, unto whom now I send thee, To open their eyes, and to turn them from darkness to light, and from the power of Satan unto God, that they may receive forgiveness of sins, and inheritance among them which are sanctified by faith that is in me. Whereupon, O king Agrippa, I was not disobedient unto the heavenly vision: But shewed first unto them of Damascus, and at Jerusalem, and throughout all the coasts of Judaea, and then to the Gentiles, that they should repent and turn to God, and do works meet for repentance. For these causes the Jews caught me in the temple, and went about to kill me. Having therefore obtained help of God, I continue unto this day, witnessing both to small and great, saying none other things than those which the prophets and Moses did say should come: That Christ should suffer, and that he should be the first that should rise from the dead, and should shew light unto the people, and to the Gentiles.",
      chapter: "Acts%2026"
    },
    {
      reference: "Matthew 1:23",
      text: "Behold a virgin shall be with child, and shall bring forth a son, and they shall call His Name Emmanuel which being interpreted is, God with us.",
      chapter: "Matthew%201"
    }
  ];

  // Calculate pagination
  const indexOfLastScript = currentPage * scriptsPerPage;
  const indexOfFirstScript = indexOfLastScript - scriptsPerPage;
  const currentScripts = scriptures.slice(indexOfFirstScript, indexOfLastScript);
  const totalPages = Math.ceil(scriptures.length / scriptsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <Breadcrumb
        items={[
          { label: 'Personal', path: '/personal' },
          { label: 'Scriptures', path: '/scriptures' }
        ]}
      />

      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-warm-900">Scriptures</h1>
        
        <div className="bg-warm-50 rounded-lg p-6 border border-warm-200">
          <p className="text-warm-600 italic">
            Note: These are personal paraphrases of scripture passages and should not be taken as literal translations. 
            They reflect personal understanding and interpretation of the biblical text.
          </p>
          <p className="text-warm-600 mt-2">
            Total Scriptures: {scriptures.length}
          </p>
        </div>

        <div className="grid gap-6">
          {currentScripts.map((scripture, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 border border-warm-200"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Book className="text-warm-600" size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg font-semibold text-warm-800">
                      {scripture.reference}
                    </h2>
                    <a
                      href={`https://www.biblegateway.com/passage/?search=${scripture.chapter}&version=NKJV`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warm-600 hover:text-warm-800 transition-colors flex items-center gap-1"
                    >
                      <span className="text-sm">Read in NKJV</span>
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <p className="text-warm-600">
                    {scripture.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-warm-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-warm-50"
          >
            <ChevronLeft size={20} className="text-warm-600" />
          </button>
          <span className="text-warm-600">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-warm-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-warm-50"
          >
            <ChevronRight size={20} className="text-warm-600" />
          </button>
        </div>
      </div>
    </div>
  );
}