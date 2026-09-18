export type MatchOutcome = "win" | "loss" | "draw";

export type MatchDetails = {
  opponentId: string;
  fixtureLabel: string;
  result?: string;
  outcome?: MatchOutcome;
  gwsScore?: number;
  opponentScore?: number;
  margin?: number;
  venueId: string;
  dateTime: string;
  dateTimeLabel: string;
  matchReportUrl?: string;
};

export type FurtherReadingLink = {
  label: string;
  url: string;
};

export type EpisodeSnapshot = {
  title: string;
  body: string;
  dateTime?: string;
  dateTimeLabel?: string;
  links?: FurtherReadingLink[];
};

export type EpisodeSegment = {
  id: string;
  startTime?: string;
  note?: string;
};

export type Episode = {
  episodeNumber: number;
  year: number;
  round?: number | null;
  title: string;
  slug: string;
  summary: string;
  body: string[];
  spotifyUrl: string;
  appleUrl: string;
  published?: string;
  publishedLabel?: string;
  episodeType?: string;
  hosts?: string[];
  guests?: string[];
  contributors?: string[];
  segments?: EpisodeSegment[];
  topics?: string[];
  snapshot?: EpisodeSnapshot;
  lastGame?: MatchDetails;
  nextGame?: MatchDetails;
  furtherReading?: FurtherReadingLink[];
};

export const episodes: Episode[] = [
{
  "episodeNumber": 140,
  "year": 2026,
  "round": null,
  "title": "NO. 140 - 2026 EMERGENCY POD: Toby Greene leaves GWS for Geelong",
  "slug": "no-140-2026-emergency-pod-toby-greene-geelong",
  "summary": "Toby Greene is leaving GWS for Geelong. Sparrow, Ragnar and special guest Yash jump on for an emergency pod to process the news, reflect on Toby's legacy and look at what comes next for the Giants.",
  "episodeType": "emergency-pod",
  "hosts": [
    "ragnar-lothbrok",
    "sparrow"
  ],
  "guests": [
    "Yash"
  ],
  "contributors": [
    "Needles",
    "Orca",
    "Andy",
    "Number 3",
    "Al",
    "Elsie",
    "Alicia"
  ],
  "snapshot": {
    "title": "Toby Greene leaves GWS",
    "body": "Toby Greene has advised the GIANTS of his intention to move back to Victoria for family reasons, with a view to join the Geelong Football Club.",
    "dateTime": "2026-09-17T09:11:00+10:00",
    "dateTimeLabel": "Announced Thursday 17 September 2026 · 9:11am AEST",
    "links": [
      {
        "label": "GIANTS club statement",
        "url": "https://www.gwsgiants.com.au/news/2131841/club-statement-toby-greene"
      },
      {
        "label": "Squinters reaction on X",
        "url": "https://x.com/TheSquinters/status/2100371947750326621"
      }
    ]
  },
  "segments": [
    { "id": "rags-bake" },
    { "id": "ragnars-maths" },
    { "id": "rags-bet" }
  ],
  "topics": [
    "toby-greene",
    "list-management",
    "geelong-cats",
    "player-movement"
  ],
  "body": [
    "We knew it might be coming.",
    "That doesn't make it hurt any less.",
    "Toby Greene has told the GIANTS he's leaving GWS and heading to Geelong, bringing one of the biggest chapters in club history to an end.",
    "Sparrow, Ragnar and special guest Yash jump on for an emergency pod to process the news, reflect on Toby's legacy, and speculate on how the Giants look post-TFG.",
    "Loyal Listeners have their say, Orca and Needles check in from afar, and we try to make sense of the end of an era.",
    "We love you Toby. We'll miss you mate.",
    "Stay Strong Orange Army, and remember:",
    "Never Surrender."
  ],
  "spotifyUrl": "https://open.spotify.com/episode/4ntXrligvrHQwLaDTGbPXn?si=e78c9c2aa7e34e66",
  "appleUrl": "https://podcasts.apple.com/au/podcast/never-surrender-a-gws-giants-afl-podcast/id1467696542?i=1000790357111",
  "published": "2026-09-17",
  "publishedLabel": "17 September 2026"
},
{
  "episodeNumber": 139,
  "year": 2026,
  "round": 24,
  "title": "NO. 139 - 2026 R24: The Season is Done... But THERE IS HOPE! We Think So Anyway... Farewell Briggsy, Hoges & The Package 🧡",
  "slug": "no-139-2026-r24-adelaide",
  "summary": "Season 2026 is done. Rags, Sparrow, Orca and Needles unpack the Adelaide loss, the injury carnage, Toby's future, the farewells to Briggsy, Hoges and The Package, and somehow find a little hope for 2027.",
  "episodeType": "season-review",
  "hosts": ["ragnar-lothbrok", "sparrow", "orca", "needles"],
  "lastGame": {
    "opponentId": "adelaide-crows",
    "fixtureLabel": "Adelaide v GWS GIANTS — Round 24",
    "result": "Adelaide 24.13 (157) def. GWS Giants 15.11 (101) by 56 points",
    "outcome": "loss",
    "gwsScore": 101,
    "opponentScore": 157,
    "margin": 56,
    "venueId": "adelaide-oval",
    "dateTime": "2026-08-22T19:40:00+09:30",
    "dateTimeLabel": "Saturday 22 August 2026 · 8:10pm AEST / 7:40pm ACST",
    "matchReportUrl": "https://www.afl.com.au/afl/matches/8243#match-report"
  },
  "furtherReading": [
    {
      "label": "Mongrel Punt review",
      "url": "https://themongrelpunt.com/afl-season-2026/2026/08/23/r24-adelaide-v-gws-the-big-statements/"
    }
  ],
  "body": [
    "Rags, Sparrow, Orca and POD PRESIDENT NEEDLES 😱 gather in the dust, under the fading glow of the sun setting on Season 2026, to reflect on one simple question:",
    "What the hell happened in Season 2026?",
    "There were moments of joy — THRASHING THE LIONS.",
    "Moments of disillusion — Carlton.",
    "And moments of shock and horror — West Coast. Essendon.",
    "But amid the wreckage, we found some genuine gems.",
    "Basilico’s on Parramatta Road.",
    "A footballer with a magnificent rat’s tail.",
    "And a phoenix rising from the ashes to give us something to believe in...",
    "...until he got injured.",
    "Like the rest of the team.",
    "So, is there pressure on the players heading into 2027 to drag this club back into September? Of course.",
    "But surely the people whose actual job is to get the players fit and ready to play football are under an even bigger microscope? You're on notice, Jacko and Dazza O'Neill.",
    "Maybe it really was just bad luck.",
    "Or maybe, just maybe, there’s a voodoo witch doctor somewhere in Footscray sticking pins into tiny orange-and-charcoal dolls.",
    "At this point, either feels plausible.",
    "Then there’s Toby. Will he stay? We bloody hope so. The DNA of the club.",
    "But after everything that man has given this club, he’s earned the right to do whatever the hell he wants.",
    "What a legend, and what a privilege it's been having him lead our club.",
    "And then come the farewells. Farewell Briggsy. Farewell Hoges. Farewell Package. Thank you kindly for the blood, sweat and tears. Go well, Orange soldiers, into whatever assignments come next. 🧡",
    "And somehow... that brings us here.",
    "It feels horribly premature, but this is it.",
    "No more songs.",
    "No more soliloquies.",
    "No more unnecessary late-night essays masquerading as podcast descriptions.",
    "Well... until next season.",
    "In the meantime — THIS WEBSITE IS BACK.",
    "www.thesquinters.com",
    "Bigger, better and destined for plenty more tinkering over the off-season.",
    "But we want it to look like our club and our supporter base — so send us your photos of the Orange Army, Giants games, away trips, scarves, flags, strange rituals and whatever else you've captured along the way.",
    "thesquinterspodcast@gmail.com",
    "Thank you to everyone who listened, messaged, reviewed, contributed, abused us, corrected us and rode the emotional rollercoaster of 2026 alongside us.",
    "Until next season...",
    "NEVER SURRENDER."
  ],
  "spotifyUrl": "https://open.spotify.com/episode/7df2dvrXCcotyHxMJlTIQo?si=b73864baa3a64e39",
  "appleUrl": "https://podcasts.apple.com/au/podcast/never-surrender-a-gws-giants-afl-podcast/id1467696542?i=1000786281983",
  "published": "2026-08-27",
  "publishedLabel": "27 August 2026"
},
{
    "episodeNumber": 138,
    "year": 2026,
    "round": 23,
    "title": "NO. 138 - 2026 R23: EAGLES LOSING STREAK KEPT IN TACT!!! Now Let's Ruin Tex's Farewell Party",
    "slug": "no-138-2026-r23-west-coast",
    "summary": "The Giants keep West Coast's losing streak intact with a 54-point win, the AFLW side opens with a win, and attention turns to spoiling Tex Walker's farewell at Adelaide Oval.",
    "episodeType": "regular",
    "hosts": [
        "ragnar-lothbrok",
        "sparrow"
    ],
    "lastGame": {
        "opponentId": "west-coast-eagles",
        "fixtureLabel": "GWS GIANTS v West Coast Eagles — Round 23",
        "result": "GIANTS 16.15 (111) def West Coast 7.15 (57) by 54 points",
        "outcome": "win",
        "gwsScore": 111,
        "opponentScore": 57,
        "margin": 54,
        "venueId": "engie-stadium",
        "dateTime": "2026-08-16T13:40:00+10:00",
        "dateTimeLabel": "Sunday 16 August 2026 · 1:40pm AEST",
        "matchReportUrl": "https://www.afl.com.au/afl/matches/8233#match-report"
    },
    "nextGame": {
        "opponentId": "adelaide-crows",
        "fixtureLabel": "Adelaide v GIANTS",
        "venueId": "adelaide-oval",
        "dateTime": "2026-08-22T19:40:00+09:30",
        "dateTimeLabel": "Saturday 22 August 2026 · 8:10pm AEST / 7:40pm ACST"
    },
    "body": [
        "A 9 game losing streak by the Eagles has been upheld by the Giants!!! That's a big win.",
        "And we have the chance to spoil the party for big Tex Walker. This is our GF.",
        "When you can't make the Encouragement Award of 10th place in the AFL Finals, these milestones become monumental.",
        "So we rejoice in our 54 point thumping over the Eagles, AND A WIN TO THE WOMENS SIDE!!! yeah the girls 🙌🏻 and we look forward to keeping our winning form at Adelaide Oval.",
        "There's plenty to like about this end to a somewhat dissapointing season: the kids. Rattus, Harvey, Gru, Delana, Rowston, Fonti, Angove, Angwin.... Great signs for what's coming in the next Orange Crop.",
        "Did we see the last of the Great Man, Toby Greene, at the Beanstalk? Felt like it. But Loyal Listener Dan remains optimistic, giving us hope...",
        "Regardless, all eyes on Adelaide Oval — Let's ruffle some Crow Feathers and spoil the party.",
        "Finish strong, embrace the Orange Tinted Linings, and...",
        "NEVER SURRENDER!"
    ],
    "spotifyUrl": "https://open.spotify.com/episode/1Ayf8azUfKPOxWJbaeUIsU?si=967e0cc01d084654",
    "appleUrl": "https://podcasts.apple.com/au/podcast/never-surrender-a-gws-giants-afl-podcast/id1467696542?i=1000784578303",
    "published": "2026-08-20",
    "publishedLabel": "20 August 2026"
},
{
    "episodeNumber": 137,
    "year": 2026,
    "round": 22,
    "title": "NO. 137 - 2026 R22: The Sun Sets on 2026... YOU'RE WELCOME, DIMMA! Surely West Coast Can't Beat Us Twice...",
    "slug": "137-2026-r22-the-sun-sets-on-2026-youre-welcome-dimma-surely-west-coast-cant-beat-us-twice",
    "summary": "The season looks cooked—unless Orca's Predicator has other ideas. The Squinters find Orange Tinted Linings, start the 2027 Manifesto and look ahead to West Coast.",
    "body": [
        "Sparrow brought the pessimism:",
        "\"That's it, we're cooked...\"",
        "THEN ORCA RUNS HIS PREDICATOR AND WE'RE MEETING THE HAWKS IN A PRELIM!!!",
        "That's what the Orange Crush is for — lifting us up through the dark moments of August pain.",
        "But let's cut to the facts: we have developed a rather concerning habit of breaking incredible runs of losses and gifting a delightful W to struggling teams.",
        "Which is lovely, but it has to stop.",
        "That's the first item in our Season 2027 Manifesto.",
        "The second? Work out how to keep troops on the paddock.",
        "Two more soldiers down...",
        "BRING IN KEEFFE!!! Heard he's still playing. Or maybe that coach in the Ressies that first debuted in the late 90s. Desperate times, desperate measures...",
        "But seriously... how good's Delana?",
        "What a breakout game.",
        "Silver linings, folks.",
        "Well... Orange Tinted Linings.",
        "And this weekend — GO THE GIRLS!",
        "Get around them for Game 1 of the AFLW season after we smash the Eagles.",
        "NEVER SURRENDER!!"
    ],
    "spotifyUrl": "https://open.spotify.com/episode/7GON52InZ8T7xnq6rs2gQ2?si=cb5442508c92443b",
    "appleUrl": "https://podcasts.apple.com/au/podcast/never-surrender-a-gws-giants-afl-podcast/id1467696542?i=1000783114093",
    "published": "2026-08-13",
    "publishedLabel": "13 August 2026"
},
{
    "episodeNumber": 136,
    "year": 2026,
    "round": 21,
    "title": "NO. 136 - 2026 R21: A Power Outage Sparks Hope in Adelaide... OUR SEASON IS STILL ALIVE!!! Well, Kind Of...",
    "slug": "136-2026-r21-a-power-outage-sparks-hope-in-adelaide-our-season-is-still-alive-well-kind-of",
    "summary": "A Power outage in Adelaide sparks a flicker of hope before Carlton dims it again. Sparrow and Orca talk finals dreams, Whitfield, Stringer, Hairloss, Song of the Week and the Suns.",
    "body": [
        "A flicker of hope from a Power outage in Adelaide... then WHACK! Carlton flogs the Lions and puts our season back in the dark on life support.",
        "Could that ripple on the Parramatta River become a surging Orange Tsunami flooding deep into September? We can only dream.",
        "And dream we will.",
        "Dreams of Whitfield dialling back the clock and kicking them from 50 out on an angle.",
        "Dreams of Stringer and his fish oil supplement dynasties.",
        "Dreams of the greats who have donned the number 31 for the Giants. Jarrod Brander, we remember and salute you.",
        "Get into this week's dose of The Squinters with Sparrow and Orca. Hair loss, Song of the Week, Squintfest options... it's all there.",
        "And, of course, we look ahead to our clash at the Golden Egg against our Expansion Cup rivals, the Suns.",
        "Oh, and if you make it to Canberra, check out the Mount Ainslie 500 on behalf of Sparrow, on the 500over10.com website: https://www.500over10.com/courses/au/canberra/mount-ainslie/",
        "Report back with your time.",
        "That's it. Enough cross-pollinating of podcast interests.",
        "Giants for the win, gamble responsibly which is not at all, and...",
        "NEVER SURRENDER"
    ],
    "spotifyUrl": "https://open.spotify.com/episode/7IRm8n9xB9YegyH7Z4aBWm?si=0e61ba891d1342e7",
    "appleUrl": "https://podcasts.apple.com/au/podcast/never-surrender-a-gws-giants-afl-podcast/id1467696542?i=1000780057399",
    "published": "2026-08-05",
    "publishedLabel": "5 August 2026"
},
  {
    "episodeNumber": 135,
    "year": 2026,
    "round": 20,
    "title": "NO. 135 - 2026 - R20: The ANZAC Bridge Shifts Further East... 1,045 Metres of Misery!!! And Is There Any Power Left in 2026?",
    "slug": "135-2026-r20-the-anzac-bridge-shifts-further-east",
    "summary": "A seven-goal opening quarter, 1,045 metres of misery and Finn going down. The Squinters commiserate, reflect and load up for one last attempt to keep 2026 alive.",
    "body": [
      "Yes, that was a tough watch.",
      "Any time an opposition player racks up more than 1,000 metres gained against you, it’s going to be a tough watch. When the Swans kick seven goals in the opening quarter and lead by 53 points at half-time, it becomes something else entirely.",
      "And then Finn went down.",
      "Is there any hope?",
      "Define hope…",
      "What we do have is a strong football club, a healthy culture, an awesome supporter base and a media storm brewing that seems heavy on noise and light on substance.",
      "We expect better from you, Cal Twomey.",
      "So here it is: direct from Giants fans, for Giants fans. An opportunity to listen, commiserate and reflect on the season that could have been—had something resembling half our best side been available at the same time.",
      "There were at least a few flickers amid the wreckage: Cogs kicked three and had plenty of High Speed Metres, the youngsters kept cracking in, and the Orange Army stayed loud despite being given very little to work with.",
      "And, of course, a special shout-out to the club doctor—also on crutches.",
      "Seriously, can we take a trick?",
      "Probably not in 2026. Nonetheless, we’re loading up for Port Adelaide and one final attempt to keep the season alive.",
      "Never Surrender."
    ],
    "spotifyUrl": "https://open.spotify.com/episode/6SiNdMRaB4HlWpJgFJ7kht?si=c307cc0fb647472b",
    "appleUrl": "https://podcasts.apple.com/au/podcast/never-surrender-a-gws-giants-afl-podcast/id1467696542?i=1000779107431",
    "published": "2026-07-30T22:09:00+10:00",
    "publishedLabel": "30 July 2026"
  },
  {
    "episodeNumber": 134,
    "year": 2026,
    "round": 19,
    "title": "NO. 134 - 2026 - R19: Bombers. We move on... BRING ON THE BATTLE OF THE BRIDGE!!",
    "slug": "134-2026-r19-bombers-we-move-on-bring-on-the-battle-of-the-bridge",
    "summary": "Well, there goes the July Run. We'll take down Empires, but the rats and mice in the drains will never cease to trouble us. Best we just delete the last game against the Bombers from our memory bank and move on.",
    "body": [
      "Well, there goes the July Run. We'll take down Empires, but the rats and mice in the drains will never cease to trouble us.",
      "Best we just delete the last game against the Bombers from our memory bank and move on.",
      "Reboot.",
      "Look forward.",
      "Battle Of The Bridge.",
      "Biggest Rivalry in Australia.",
      "At stake: bragging rights. Strutting rights on Bronte. The Anzac bloody bridge. And maybe even our place in the top 8, sorry top 10, whatever the encouragement awards policy now covers.",
      "Whatever—we just have to win.",
      "Let's hope for more than 23 high speed fkn metres from our leaders this time.",
      "NEVER SURRENDER"
    ],
    "spotifyUrl": "https://open.spotify.com/episode/6qoiFQZmk1r2cahsCcRWnR?si=22f90ffec4ef4c3b",
    "appleUrl": "https://podcasts.apple.com/au/podcast/never-surrender-a-gws-giants-afl-podcast/id1467696542?i=1000778045839"
  },
  {
    "episodeNumber": 133,
    "year": 2026,
    "round": 18,
    "title": "NO. 133 - 2026 - R18: Something's in the Air in July… and No Collarbone Will Be Spared",
    "slug": "133-2026-r18-something-s-in-the-air-in-july-and-no-collarbone-will-be-spare",
    "summary": "The beauty of maths is that it’s completely objective. It’s science. It’s truth. It’s the foundational cornerstone of accumulated knowledge and humanity’s long, noble journey towards enlightenment. And so, Ragnar’s Maths continues its relentless pursuit of…",
    "body": [
      "The beauty of maths is that it’s completely objective. It’s science. It’s truth. It’s the foundational cornerstone of accumulated knowledge and humanity’s long, noble journey towards enlightenment.",
      "And so, Ragnar’s Maths continues its relentless pursuit of truth by predicting—nay, mathematically proving—what will happen this month:",
      "We won’t lose.",
      "But… ahhh, bugger.",
      "This weekend we play a team sitting on the bottom of the ladder. We generally play poorly in situations like this. Anything could happen, and humanity’s journey towards enlightenment may yet perform a spectacular U-turn.",
      "Ragnar, Sparrow and Orca are here to dive in and reassure the Orange Army.",
      "For now, we'll rejoice in the magnificent victory against a side that—for most of the game—was probably the better team.",
      "Unfortunately for them, when Clarry’s magnificent shoulder arrives at full force, accompanied by a commitment to the football only an overexcited kelpie could rival, chances are you’re about to lose.",
      "Where have we heard that before?",
      "That’s right: Rag’s Bet.",
      "Currently in administration. Possibly insolvent. Almost certainly irresponsible. RIP.",
      "However, should you wish to support the cause—and Ragnar’s deeply unhealthy relationship with speculative wagering—please visit the Buy Me a Coffee link below.",
      "Just kidding. All proceeds will go towards flights to the Grand Final.",
      "BECAUSE MARK OUR WORDS: THAT’S A MATHEMATICAL CERTAINTY.",
      "We’ll see.",
      "But until then, we’ll Never Surrender."
    ],
    "spotifyUrl": "https://open.spotify.com/episode/12bfrqHBt7DcBz976KWnow?si=4cd5e148bca84a6f",
    "appleUrl": "https://podcasts.apple.com/au/podcast/never-surrender-a-gws-giants-afl-podcast/id1467696542?i=1000777019366"
  },
  {
    "episodeNumber": 132,
    "year": 2026,
    "round": 17,
    "title": "NO. 132 - 2026 - R17: The July Streak Has Begun...LFG!!!! 🚀",
    "slug": "132-2026-r17-the-july-streak-has-begun-lfg",
    "summary": "Firstly, and most importantly: WELCOME BACK NEEDLES! Yes, the President of The Squinters, the Renaissance Man, the trackside oracle, returns to his dodgy mic after attending the Golden Egg with fellow OG Bartman to deliver high-quality uninformed opinions a…",
    "body": [
      "Firstly, and most importantly: WELCOME BACK NEEDLES!",
      "Yes, the President of The Squinters, the Renaissance Man, the trackside oracle, returns to his dodgy mic after attending the Golden Egg with fellow OG Bartman to deliver high-quality uninformed opinions and insights you can only get on this golden piece of podcasting mastery.",
      "And what a game to return for.",
      "The Giants, with half the list held together by duct tape, fuelled by youthful zest and the faint smell of September, have knocked off the ladder-leading Dockers and ended their 14-game winning streak.",
      "The Package delivered a career-high seven. Toby did Toby things. The young’uns stood up. Callaghan worked. Idun marked everything. Whitfield was brilliant before getting concussed. And somehow, against a very legit football team, the Orange Tsunami emerged from Burley Griffin.",
      "Maybe it was the polite Canberra crowd. We love you Canberra.",
      "There is so much to discuss: the pressure, the clearance dominance, the defensive grit, the forward-line chaos — did we mention we had no key forward? Cads and Package 4Lyfe",
      "And of course, it's July, so throw the house on a win over the Cats this weekend (no, chances are you're about to lose), or at least get there to watch a quality game... CAUSE WE'RE BACK BABY!!!",
      "Clear the diary for September, because who knows?",
      "Whenever there’s a sniff, we'll Never Surrender."
    ],
    "spotifyUrl": "https://open.spotify.com/episode/4kxHcUV4mW03wq9Asjby4Q?si=222428e88a0243d9",
    "appleUrl": "https://podcasts.apple.com/au/podcast/never-surrender-a-gws-giants-afl-podcast/id1467696542?i=1000775954800"
  },
  {
    "episodeNumber": 131,
    "year": 2026,
    "round": 16,
    "title": "NO. 131 - 2026 - R16: Ragnars Maths Gives Us Hope: 13–1 in July Baby!!!",
    "slug": "131-2026-r16-ragnars-maths-gives-us-hope-131-in-july-baby",
    "summary": "Ragnar is detoxing. Stormy's calf is busted.",
    "body": [
      "Ragnar is detoxing.",
      "Stormy's calf is busted.",
      "The AFL YouTube Channel is dropping the ball.",
      "And we suck on a Friday night.",
      "But there's hope!",
      "Get used to this name: Ethan Matthews. Perfect time to get injured, young fella. Put him on ice, and hide him in the garage. Nothing to see here... 👀",
      "And sure, there's tough games coming up in July — starting with the Dockers at Golden Egg — but Ragnar's Math's doesn't lie: Kingsley's July Record Is Ridiculous. So throw the house on it and Chances Are You're About To Lose.",
      "What Could You Be Buying Instead?",
      "Gamble Responsibly.",
      "We love you Stoney's Dad.",
      "And $6 beers are $6 beers, Guildford Hotel. Not $6:09. You're on notice as well.",
      "That is all. Enjoy the pod. Great job fellas. Spaz will be back soon...",
      "Never Surrender."
    ],
    "spotifyUrl": "https://open.spotify.com/episode/0Ac9ArCL1QH6dKPikPEr0R?si=b824dec1bc734cc1",
    "appleUrl": "https://podcasts.apple.com/au/podcast/never-surrender-a-gws-giants-afl-podcast/id1467696542?i=1000775173102"
  },
  {
    "episodeNumber": 130,
    "year": 2026,
    "round": 15,
    "title": "NO. 130 - 2026 - R15: A Blue Tsunami Dumped Us on Parramatta Road… BUT WHAT A SPOT IT TURNED OUT TO BE!!",
    "slug": "130-2026-r15-a-blue-tsunami-dumped-us-on-parramatta-road-but-what-a-spot-it",
    "summary": "When two waves collide, there’s a displacement of energy. And when those waves are Orange and Blue, it’s not yet the month we don’t lose in — July, obviously — and you’ve got players slipping over, missing targets, and podcasters wandering around forlornly…",
    "body": [
      "When two waves collide, there’s a displacement of energy.",
      "And when those waves are Orange and Blue, it’s not yet the month we don’t lose in — July, obviously — and you’ve got players slipping over, missing targets, and podcasters wandering around forlornly looking for somewhere to eat and commiserate… sometimes, somehow, the footy gods deliver.",
      "Not on the scoreboard. With pizza.",
      "Hats off to Basilico Pizza in Homebush for cheering us up with proper soul food: wood-fired pizzas, fresh toppings, and bases better than any you'd find on Lygon Street, Carlton. So that's a win at least.",
      "Rags, Sparrow, Orca and Number 3 take you to the game, ride the emotion of it all, and then debrief in a converted petrol station in GREATER Western Sydney.",
      "Just the stuff to get you through the week before Friday’s game against the Hawks. Which will be tough...",
      "Stick fat, Orange Army, and Never Surrender. July is almost here.",
      "Basilico Pizza: 161 Parramatta Road, Homebush. ⭐️⭐️⭐️⭐️⭐️"
    ],
    "spotifyUrl": "https://open.spotify.com/episode/4RVQBpejqDCNaUqY2xOiRu?si=52fd4945d47c47a2",
    "appleUrl": "https://podcasts.apple.com/au/podcast/never-surrender-a-gws-giants-afl-podcast/id1467696542?i=1000773602578"
  },
  {
    "episodeNumber": 129,
    "year": 2026,
    "round": 14,
    "title": "NO. 129 - 2026 - R14: Sure, We Lost to the Saints... BUT: A SPECIAL EPISODE from Deep in the Bowels of the Beanstalk!!!",
    "slug": "129-2026-r14-sure-we-lost-to-the-saints-but-a-special-episode-from-deep-in",
    "summary": "Did we lose? Sure. Kingers, post game: “We’re better than our ladder position”, plus “Hoges was a mistake”. Frankly, we agree.",
    "body": [
      "Did we lose? Sure.",
      "Kingers, post game: “We’re better than our ladder position”, plus “Hoges was a mistake”. Frankly, we agree.",
      "BUT...",
      "Was Stormy magnificent? Absolutely.",
      "Did Bluey have his own pill? Damn right. (Check his stats on that stats thing on Mongrel Punt — astounding. Bluey or Phoenix for the Kevin Sheedy Award in October).",
      "Nevertheless... T'was still a loss, and losses mean only one thing: we must galvanise and come together. This week: literally, for once.",
      "Join Rags and Orca as they go DEEP WITHIN THE BOWELS OF THE BEANSTALK to commiserate, speculate, and provide the usual unauthorised and uninformed opinions.",
      "PLUS: INTERVIEWS WITH THE BANNER CREW!!!",
      "The heart and soul of the club. Absolute legends. Great to get them on the pod.",
      "AND A NEW SONG FROM BRAVO BISON!!!",
      "We turn our eyes to the Blues. Let's get to the Beanstalk on Saturday arvo and have it rockin and rollin as the Giants look to bounce back. The timeslot, the weather, the fact it’s almost July — and we never lose in July — all shapes as a cracker.",
      "Plus, Hoges has a point to prove. And Stormy is the best player in the AFL.",
      "We love you, Toby. Don’t leave us, Toby. Drinks and spearfishing are on us, Toby.",
      "Never Surrender."
    ],
    "spotifyUrl": "https://open.spotify.com/episode/0gI4cVJhShF1haBHS6k5g1?si=c5391235c0a2426b",
    "appleUrl": "https://podcasts.apple.com/au/podcast/never-surrender-a-gws-giants-afl-podcast/id1467696542?i=1000773208299"
  },
  {
    "episodeNumber": 128,
    "year": 2026,
    "round": 13,
    "title": "NO. 128 - 2026 - R13: Fresh Off the Bye, Let’s Keep Rollin’... Split the Kayo Screen and Bring on the Saints!",
    "slug": "128-2026-r13-fresh-off-the-bye-lets-keep-rollin-split-the-kayo-screen-and-b",
    "summary": "Just when we were gaining some momentum, fresh off the Road Train back from Alice, we put our feet up and forgot about footy for a week... And then the AFL decided to put the Giants on at the same time the Socceroos kick off their World Cup campaign.",
    "body": [
      "Just when we were gaining some momentum, fresh off the Road Train back from Alice, we put our feet up and forgot about footy for a week...",
      "And then the AFL decided to put the Giants on at the same time the Socceroos kick off their World Cup campaign.",
      "Will our heads be elsewhere? Toby has confirmed: yes, this is likely.",
      "Will the Tsunami retreat to a gentle lapping on the fringes of the Marvel turf? There’s every chance.",
      "Hypothetically, technically and realistically, we should continue to march up the ladder given the big ins this week, the form that’s been building, and the fact that the Saints would be demoralised after letting that one slip against the Swannies. And three Ls in a row. Ouch.",
      "Plus, we’re just a better side than the Saints.",
      "But nothing is a given in this beautiful, chaotic, unpredictable sport called Australian Rules Football. And nothing is predictable — other than the Giants making the top four and going on to win our first cup — with this enigmatic team known as the GREATER Western Sydney Giants.",
      "Is this stressful? Sure.",
      "Do we love it? You bet.",
      "Gamble responsibly.",
      "So sit back, split the Kayo screen down the middle, mute the soccer, and enjoy Finn slicing the Saints to pieces, Hoges coming back and kicking a baker’s dozen, and maybe something special from Gothard once again...",
      "Never Surrender."
    ],
    "spotifyUrl": "https://open.spotify.com/episode/0lNSrEBRmUt0jtd0bEF67c?si=7bdab2a8b7c24a65",
    "appleUrl": "https://podcasts.apple.com/au/podcast/never-surrender-a-gws-giants-afl-podcast/id1467696542?i=1000772166984"
  },
  {
    "episodeNumber": 127,
    "year": 2026,
    "round": 12,
    "title": "NO. 127 - 2026 - R12: Traeger Park is the new GMHBA Stadium... WE DO NOT LOSE IN ALICE!!! Park that Road Train at The Beanstalk",
    "slug": "127-2026-r12-traeger-park-is-the-new-gmhba-stadium-we-do-not-lose-in-alice",
    "summary": "What’s better than watching us towel up the Dees in beautiful Central Australia, at the foot of the MacDonnell Ranges, with the Tanami Transport Road Train parked in behind the goals? NOT BLOODY MUCH!!",
    "body": [
      "What’s better than watching us towel up the Dees in beautiful Central Australia, at the foot of the MacDonnell Ranges, with the Tanami Transport Road Train parked in behind the goals?",
      "NOT BLOODY MUCH!!",
      "We love that ground. We kick straight. The opposition don’t. Bad Kicking is Bad Footy. We win.",
      "So on that note, let’s just claim Traeger Park as another ground to call our temporary home over the Easter Show period. Homebush, Canberra, Alice — all part of the “Greater” Western Sydney. Another tick in the “keep the name” column, Scotty... and Tim (Reed, number one fan of the pod. We see you Tim).",
      "So yeah, another won. TWO IN A ROW!!! Not quite as dominant as the DRUBBING of the Brisbane Cubs, but convincing nonetheless. Are we now perfectly placed? YES, in an Orange Tinted Shades kind of way — how we like it — not on top, but nicely positioned for a strong, storming, Stormy sprint to the finish.",
      "RagsBet/SpazBet this week suggests loading up at odds of $24 for the Cup to come home to Tom Wills Oval. (Gamble responsibly; for gambling help call 1800 858 858). It’ll only get shorter as we knock teams off after the bye.",
      "Enjoy the bye, wear your Big Freeze Beanie for Neale Daniher and all those impacted by MND, and we’ll meet again via the airwaves soon...",
      "Maybe next week. We’ll see.",
      "Till then, Never Surrender."
    ],
    "spotifyUrl": "https://open.spotify.com/episode/5yV38jE3JYAa0nu4t9Y8Ow?si=80dfa41484b64cb0",
    "appleUrl": "https://podcasts.apple.com/au/podcast/never-surrender-a-gws-giants-afl-podcast/id1467696542?i=1000771137560"
  },
  {
    "episodeNumber": 126,
    "year": 2026,
    "round": 11,
    "title": "NO. 126 - 2026 - R11: An Orange Tsunami Wipes Out the Timid Lions... A RECORD WIN!!! And Load the Road Train — We're Off to the Alice",
    "slug": "126-2026-r11-an-orange-tsunami-wipes-out-the-timid-lions-a-record-win-and-l",
    "summary": "What. A. Game. Well, when it’s a 14-goal-to-0 third quarter — sorry, they did kick three behinds — it’s not so much a game as a belting. Brutal. Relentless. A training drill against the U12s Parramatta Lions. An Orange Tide that can’t be stopped. Yes, you c…",
    "body": [
      "What. A. Game.",
      "Well, when it’s a 14-goal-to-0 third quarter — sorry, they did kick three behinds — it’s not so much a game as a belting. Brutal. Relentless. A training drill against the U12s Parramatta Lions. An Orange Tide that can’t be stopped. Yes, you could even say an Orange Tsunami. Maybe that’s the purest display we’ve seen of the OT in quite a while.",
      "I mean, if you want instant gratification, just put Stormy’s work at the centre clearance on loop for a while and you’ll be a happy member of the Orange Crush. Best player in the league* — according to Ragnar et al.",
      "Sparrow, Ragnar Lothbrok and Team Orca are here to break it all down, reflect on whatever it was we witnessed this past Sunday, and look forward to the trip to Alice, where the Tanami Transport road train, sitting in front of the spectacular MacDonnell Ranges, once again — hopefully — witnesses an Alice Ambush against the Demons. Cue Sparrow’s Soliloquy..",
      "Did we mention there’s ANOTHER SONG? A tribute to our great skipper, of course, off the back of the speculation that he’s leaving for Geelong, his poor form against the Eagles, and the simply stunning game he played against Brisbane.",
      "Did we mention those big oily shoulders carrying the team? No? Well, here’s a tip: HE’S HAD A BLOODY BROKEN FOOT for the past five or so weeks!!! Man, that guy is tough. Build a new stadium in Punchbowl and name it after him.",
      "Lap it up, Squinters, and Never Surrender."
    ],
    "spotifyUrl": "https://open.spotify.com/episode/6yVTfvdgjkWh4GP23bCo5H?si=20ea5c1772f64263",
    "appleUrl": "https://podcasts.apple.com/au/podcast/never-surrender-a-gws-giants-afl-podcast/id1467696542?i=1000769916575"
  },
  {
    "episodeNumber": 125,
    "year": 2026,
    "round": 10,
    "title": "NO. 125 - 2026 - R10: The Giants dealt a blow by ....(who??!!) BAILEY WILLIAMS!!! I mean, c'mon... (this time of year is tough for the Orange Army).",
    "slug": "no-125-2026-r10-west-coast",
    "summary": "All we can do is look forward. Rags, Sparrow and Orca try to forget Bailey Williams and the Harley Show, take Stoic Advice from Seneca and march on to Brisbane at the Beanstalk.",
    "episodeType": "regular",
    "hosts": [
      "ragnar-lothbrok",
      "sparrow",
      "orca"
    ],
    "guests": [],
    "lastGame": {
      "opponentId": "west-coast-eagles",
      "fixtureLabel": "West Coast Eagles v GWS GIANTS — Round 10",
      "result": "West Coast 13.10 (88) def. GWS Giants 10.11 (71) by 17 points",
      "outcome": "loss",
      "gwsScore": 71,
      "opponentScore": 88,
      "margin": 17,
      "venueId": "optus-stadium",
      "dateTime": "2026-05-17T18:15:00+10:00",
      "dateTimeLabel": "Sunday 17 May 2026 · 6:15pm AEST",
      "matchReportUrl": "https://www.afl.com.au/afl/matches/8128#match-report"
    },
    "nextGame": {
      "opponentId": "brisbane-lions",
      "fixtureLabel": "GWS GIANTS v Brisbane Lions",
      "venueId": "engie-stadium",
      "dateTime": "2026-05-24T12:30:00+10:00",
      "dateTimeLabel": "Sunday 24 May 2026 · 12:30pm AEST"
    },
    "furtherReading": [
      {
        "label": "Mongrel Punt review",
        "url": "https://themongrelpunt.com/afl-season-2026/2026/05/17/r10-west-coast-v-gws-the-mongrel-review/"
      }
    ],
    "segments": [
      {
        "id": "ragnar-parody-song",
        "startTime": "00:20",
        "note": "“We All Backed Down” — Tom Petty parody about the West Coast loss."
      },
      {
        "id": "stoic-advice",
        "startTime": "09:46",
        "note": "Explicitly introduced as a new segment. Seneca used to deal with the Toby Greene/Geelong anxiety: don't suffer twice — once over Jezza in the past and once over something Toby hasn't actually done yet."
      },
      {
        "id": "stay-or-pay",
        "startTime": "12:43",
        "note": "A one-off game about Toby Greene. Each host rates from 1 = Giants for life to 10 = gone."
      },
      {
        "id": "rags-bake",
        "startTime": "18:10",
        "note": "The official bake begins as Rags leads off the West Coast review."
      },
      {
        "id": "ragnars-maths",
        "startTime": "29:19",
        "note": "Team age comparison with West Coast, Clayton Oliver and the Mongrel Punt's 30/20/10 club, plus other statistical nonsense."
      },
      {
        "id": "rags-bet",
        "startTime": "46:11",
        "note": "Previous week's bet lost; this week's bet was Brisbane at the line. Includes the responsible gambling insert."
      },
      {
        "id": "hairloss",
        "startTime": "55:20",
        "note": "Orca gives the Hairloss nomination to wrestler Osborne after being called a “bald headed freak” at a wrestling show."
      },
      {
        "id": "song-of-the-week",
        "startTime": "57:12",
        "note": "Don't Look Back in Anger — Oasis, representing making peace with the Giants after the West Coast loss."
      }
    ],
    "topics": [
      "toby-greene",
      "clayton-oliver",
      "gws-injuries",
      "gws-ceo",
      "western-sydney",
      "canberra"
    ],
    "body": [
      "All we can do is look forward.",
      "Not look back — or west — and pretend that Bailey Willams and the Harley Show never happened.",
      "Sure it's denial.",
      "Sure it fails to deal with the problem.",
      "But the pain is too deep.",
      "Let's just all get down to GMHBA stadium in Geelong and beat the Ca...oh wait, no Cats game this year to reserrect our season... damnit.",
      "SO IT'S TO THE BEANSTALK WE MARCH!!!",
      "Pony Up Orange Army. Take some stoic advice from Seneca via Sparrow, enjoy the latest tune from Ragnar, and reflect with reflections from Orca, and let's lift each other up and out of the Guildford Hotel gutter.",
      "Onwards and upwards in our quest for 10th on the ladder!",
      "Never Surrender."
    ],
    "spotifyUrl": "https://open.spotify.com/episode/33uRgoHX1p2sJZr77WDM0D?si=1218cd75cdd64abc",
    "appleUrl": "https://podcasts.apple.com/au/podcast/never-surrender-a-gws-giants-afl-podcast/id1467696542?i=1000768743686",
    "published": "2026-05-20",
    "publishedLabel": "20 May 2026"
  }
,
  {
    "episodeNumber": 124,
    "year": 2026,
    "round": 9,
    "title": "NO. 124 - 2026 - R9: A WIN against the Bombers back at the Beanstalk!! PLUS, a preview of the Eagles game, Rag's bets, we hear from Jimmy, A NEW SONG, and more...!!!",
    "slug": "no-124-2026-r9-essendon",
    "summary": "This episode was massive. Not so much cause we played so well in our win over the Bombers — it was actually mostly ugly to watch — but MAN there's some GREATER WESTERN SYDNEY GIANTS chat out there at the moment.",
    "episodeType": "regular",
    "hosts": [
      "ragnar-lothbrok",
      "sparrow",
      "orca"
    ],
    "guests": [],
    "lastGame": {
      "opponentId": "essendon-bombers",
      "fixtureLabel": "GWS GIANTS v Essendon Bombers — Round 9",
      "result": "GWS Giants 16.7 (103) def. Essendon 13.11 (89) by 14 points",
      "outcome": "win",
      "gwsScore": 103,
      "opponentScore": 89,
      "margin": 14,
      "venueId": "engie-stadium",
      "dateTime": "2026-05-09T16:15:00+10:00",
      "dateTimeLabel": "Saturday 9 May 2026 · 4:15pm AEST",
      "matchReportUrl": "https://www.afl.com.au/afl/matches/8115#match-report"
    },
    "nextGame": {
      "opponentId": "west-coast-eagles",
      "fixtureLabel": "West Coast Eagles v GWS GIANTS",
      "venueId": "optus-stadium",
      "dateTime": "2026-05-17T18:15:00+10:00",
      "dateTimeLabel": "Sunday 17 May 2026 · 6:15pm AEST"
    },
    "furtherReading": [
      {
        "label": "Mongrel Punt review",
        "url": "https://themongrelpunt.com/afl-season-2026/2026/05/09/r9-gws-v-essendon-the-good-bad-and-ugly/"
      }
    ],
    "segments": [
      {
        "id": "rags-bet",
        "note": "Rag's Bet."
      },
      {
        "id": "ragnars-maths",
        "note": "Ragnar's Maths."
      },
      {
        "id": "ragnar-parody-song",
        "note": "Brent Daniels parody song — Ragnar performs the new Daniel / Elton John-inspired song."
      },
      {
        "id": "hairloss",
        "note": "Hairloss with Orca."
      },
      {
        "id": "song-of-the-week",
        "note": "Frontier Psychiatrist by The Avalanches; effectively the death of Song of the Week because of the copyright dramas."
      }
    ],
    "topics": [
      "josh-kelly",
      "comeback-win",
      "toby-greene",
      "brent-daniels",
      "gws-injuries",
      "toby-bedford",
      "young-players-list-development",
      "umpiring-afl-media-narratives"
    ],
    "body": [
      "This episode was massive. Not so much cause we played so well in our win over the Bombers — it was actually mostly ugly to watch (hence Sparrow's long run at half-time) — but MAN there's some GREATER WESTERN SYDNEY (GWS, Scotty) GIANTS chat out there at the moment.",
      "And being the 𝑜̶𝑛̶𝑙̶𝑦̶ original unfiltered, unauthorised, and uninformed Giants fancast, it naturally falls on us to discuss all that's happening in the Orange Army.",
      "Toby's NOT leaving, the Kid with Lid is a miracle healer, and Connor Idun is the Smother GOAT. They're the main headlines you need to know.",
      "So sit back, extend your drive to work by another 15 minutes (thanks Zoom Premium), and enjoy the banter — AND THE NEW SONG FROM RAGS!!!",
      "Never Surrender."
    ],
    "spotifyUrl": "https://open.spotify.com/episode/20Wqfi9RMjbwx5CDdkHKzF?si=e06daeeea97c4bd7",
    "appleUrl": "https://podcasts.apple.com/au/podcast/never-surrender-a-gws-giants-afl-podcast/id1467696542?i=1000767577774",
    "published": "2026-05-13",
    "publishedLabel": "13 May 2026"
  }

];

export function spotifyEmbedUrl(url: string): string {
  const match = url.match(/episode\/([^?]+)/);
  return match ? `https://open.spotify.com/embed/episode/${match[1]}?utm_source=generator&theme=0` : url;
}
