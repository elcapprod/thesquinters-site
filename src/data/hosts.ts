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
    bio: 'Founder of The Squinters and visionary who pulled together a bunch of Sydney Uni footy mates to talk all things Giants in 2019. Golden Egg offical, occasional quizmaster and permanent President of the pod.',
    segments: ['Quiz with Needles', 'Institutional memory']
  },
  {
    name: 'Sparrow',
    role: 'Co-founder · The Stoic',
    image: '/assets/hosts/sparrow.jpg',
    bio: 'A former rugby man turned committed AFL tragic who helped build Giants Stadium and then decided supporting the club was not emotionally demanding enough. Keeps the pod moving and the Orange Army philosophically upright.',
    segments: ['Stoic Advice from Sparrow', 'Content Chief']
  },
  {
    name: 'Ragnar Lothbrok',
    role: 'Viking · Musician · Mathematician',
    image: '/assets/hosts/ragnar-lothbrok.jpg',
    bio: 'Joined after a sustained essay campaign on Adam Tomlinson in 2023 and became pivotal to the pod’s revival. Has actually played the game, watches every match, is musically gifted, and enjoys the occasional reckless multi on the Giants. Gamble Responsibly.',
    segments: ['Rag’s Bake', 'Ragnar’s Maths', 'Rag’s Bet']
  },
  {
    name: 'Orca',
    role: 'Born-again AFL nuffie',
    image: '/assets/hosts/orca.jpg',
    bio: 'An evangelical Giants convert whose blood runs orange. Has a spreadsheet on superstitions to fill his weekends, and brings unflinching support, commitment and positivity to the pod — often including Orca Number 3 when the adults require correcting.',
    segments: ['Hairloss with Orca', 'Song of the Week',  'Plaque there Cazaly']
  }
];

export const formerHosts = ['Growler', 'Lawso', 'Bubs', 'Ro Mac', 'Cheese', 'Coco', 'Bartman', 'Dr Nangs'];
