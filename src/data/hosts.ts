export type Host = {
  name: string;
  role: string;
  image: string;
  bio: string;
  segments: string[];
};

export const hosts: Host[] = [
  {
    name: 'Needles',
    role: 'Founder · The Renaissance Man',
    image: '/assets/hosts/needles.jpg',
    bio: 'Founder of The Squinters and the man who pulled a collection of Sydney Uni footy mates into a microphone-shaped problem in 2019. Trackside oracle, occasional quizmaster and permanent President of the pod.',
    segments: ['Quiz with Needles', 'Institutional memory']
  },
  {
    name: 'Sparrow',
    role: 'Co-founder · The Stoic',
    image: '/assets/hosts/sparrow.jpg',
    bio: 'A former rugby man turned committed AFL tragic who helped build Giants Stadium and then decided supporting the club was not emotionally demanding enough. Keeps the pod moving and the Orange Army philosophically upright.',
    segments: ['Stoic Advice from Sparrow', 'Website wrangling']
  },
  {
    name: 'Ragnar Lothbrok',
    role: 'Viking · Musician · Mathematician',
    image: '/assets/hosts/ragnar-lothbrok.jpg',
    bio: 'Joined after a sustained essay campaign about Adam Tomlinson and became pivotal to the pod’s revival. Actually played the game, watches every match, writes the songs and occasionally proves September mathematically.',
    segments: ['Rag’s Bake', 'Ragnar’s Maths', 'Rag’s Bet']
  },
  {
    name: 'Orca',
    role: 'Born-again AFL nuffie',
    image: '/assets/hosts/orca.jpg',
    bio: 'An evangelical Giants convert whose blood now runs orange. Brings weekly commitment, strong opinions, songs for every mood and regular perspective from Orca Number 3 when the adults require correction.',
    segments: ['Hairloss with Orca', 'Song of the Week']
  }
];

export const formerHosts = ['Growler', 'Lawso', 'Bubs', 'Ro Mac', 'Cheese', 'Coco', 'Bartman', 'Dr Nangs'];
