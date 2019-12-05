const normal = {
    name:        'Justin Xu',
    date:        'Hover over the icons above to see more...',
    implements:  'A second-year computer science student who enjoys problem '
                 + 'solving, music, and washing dishes.',
    description: ''
};

hover(normal);


const adetos = new Project(
    'adetos',
    'ADETOS',
    'Apr 2017 - Nov 2018',
    'Google Sheets, Google Script',
    'Version 3.1 of a digital assistant for organizing double-elimination '
    + 'tournaments. It supports the creation of arbitrarily many separate '
    + 'brackets with up to 64 players each, distributing byes fairly between '
    + 'teams. While running the tournament itself, it automatically '
    + 'prioritizes matches to be played next, and collects the scores once '
    + 'they are completed. The creation of ADETOS was motivated by a large-'
    + 'scale table tennis tournament being planned by my high school, '
    + 'requiring a similarly-scaled system for organizing it. ADETOS was co-'
    + 'created with classmate Siddarth Narasimhan.',
    'https://docs.google.com/spreadsheets/d/1JsttjsZt6USt7h1Z66PhwibUmafxuH1Mwk'
    + 'zk2tNlDag/edit?usp=sharing',
    'adetos.png'
);

const hexagonal_2048 = new Project(
    'hexagonal_2048',
    'Hexagonal 2048',
    'Jul 2017 -',
    'JavaScript, p5.js',
    'Made for the final project in an introductory game design course, this '
    + 'game applies the rules of the popular game 2048 to a hexagonal grid. '
    + 'This project was recently reopened to clean up the code and add new '
    + 'features. Use the QWEASD keys to control the board.',
    'https://xujustinj.github.io/Hexagonal-2048/',
    '2048.png'
);

const ulam = new Project(
    'ulam',
    'A Geometric Explanation for Prime-rich Lines on the Ulam Spiral',
    'Nov 2016 - Feb 2018',
    'LaTeX, Java',
    'For the IB Extended Essay, I wrote a mathematics paper that ended up '
    + 'requiring me to greatly overstep my mathematical and technical ability '
    + 'at the time of writing it. As a result of my ambition, I achieved both '
    + 'a high mark and a kickstart in learning modular arithmetic and LaTeX.',
    'https://xujustinj.github.io/Extended-Essay/',
    'ulam.png'
);

const water = new Project(
    'water',
    'Water',
    'May 2015 -',
    'LMMS, Musescore',
    'Having enjoyed electronic music since middle school, I made it my IB '
    + 'Personal Project to learn to use software to become a great producer - '
    + 'a goal which I ultimately fell short on, lacking sufficient technical '
    + 'skill and knowledge. The songs I made have become some of my fondest '
    + 'high school nostalgia.',
    'https://soundcloud.com/watered-music/',
    'water.png'
);

const concertino = new Project(
    'concertino',
    'Concertino',
    'Dec 2016 - Mar 2017',
    'Microsoft Excel, Visual Basic for Applications',
    'This spreadsheet was created for a grade 11 information technology '
    + 'course. I consulted my piano teacher as my client, and designed a '
    + 'scheduling tool to suit his needs. It needed to contain a database and '
    + 'also display the schedule in a calendar. At the time I figured that I '
    + 'could use VBA to set up macros and forms to emulate MS Access in Excel, '
    + 'where I could display the calendar on a sheet. In hindsight, it was '
    + 'probably better off building Concertino in Access and using VBA to '
    + 'emulate Excel instead.',
    'https://xujustinj.github.io/Concertino/',
    'concertino.png'
);
