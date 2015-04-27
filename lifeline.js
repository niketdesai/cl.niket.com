var data = [
  {
    "release": "com.desai.niket 3.1",
    "year": 2015,
    "img": "img/26.jpg",
    "changes" : [
      "I move to Bangalore, India, to join Flipkart as Chief of Staff.",
      "Countries visited: Denmark, England, Hong Kong, India, Sweden, Taipei",
    ],
  },
  {
    "release": "com.desai.niket 3.1",
    "year": 2014,
    "img": "img/26.jpg",
    "changes" : [
      "Motorola is sold to electronics manufacturer Lenovo. I return to Google in search of a new role.",
      "Extensively traveled to Motorola's Chicago-based HQ, and become acquainted with the great windy city.",
      "Attend 15 weddings around the world. I'm in two of them.",
      "Countries visited: England, India, Jordan, Korea, Spain",
    ],
  },
  {
    "release": "com.desai.niket 3.0",
    "year": 2013,
    "changes" : [
      "I continue to work at Google, but have joined Motorola as a Product Manager to reinvigorate the once venerable company under Punit Soni",
      "I saw the third launch of Space X's Dragon at Cape Canaveral with Nat Welch.",
      "Trained at a ",
      "Underwent BEP Chemotherapy to stop Cancer from spreading throughout my body. It was, and will be, the worst experience in my entire life.",
      "Underwent Septoplasty surgery to help me sleep and rest from residual issues related to chemotherapy.",
      "Countries visited: India, Korea, Malaysia, Singapore, Malaysia",
    ],
  },
  {
    "release": "com.desai.niket 2.",
    "year": 2012,
    "img": "img/24.jpg",
    "changes" : [
      "I was diagnosed with Cancer at PAMF in Mountain View with my Dad and Matt Pies present.",
      "Underwent two GA surgeries: Radical Orchiectemy, Retroperitoneal Lymph Node Dissection (RPLND).",
      "Serve as groomsman in Xander's wedding in SLO. Attend 4 weddings.",
      "I dated 1 woman.",
      "Countries visited: England, Finland, Hong Kong, India Mexico, Singapore" ,
      
    ],
  },
  {
    "release": "com.desai.niket 2.3",
    "img": "",
    "year": 2011,
    "changes" : [
      "Punchd was acquired by Google, into the Mobile Apps Lab, under Marissa Mayer's Geo Unit",
      "Punchd ",
      "Countries visited: France, Hong Kong, India, Macau" ,
    ],
  },
  {
    "release" : "com.desai.niket 2.2",
    "year": 2010,
    "img" : "",
    "changes" : [
      "Countries visited: Germany",
    ]
  },
  {
    "release" : "com.desai.niket 2.1",
    "img": "img/21.jpg",
    "year": 2009,
    "changes" : [
      "Countries visited: ",
    ]
  },
  {
    "release" : "com.desai.niket 2.0",
    "year": 2008,
    "changes" : [
      "Countries visited: ",
    ]
  },
  {
    "release": "com.desai.niket 1.9",
    "year": 2007,
    "changes": [
      "Countries visited: ",
    ]
  },
  {
    "release" : "com.desai.niket 1.8",
    "year": 2006,
    "changes" : [
      "Countries visited: ",
    ]
  },
  {
    "release" : "com.desai.niket 1.7",
    "year": 2005,
    "changes" : [
      "Achieved Eagle Scout rank with the BSA, capping a 10 year journey.",
      "Countries visited: France, Italy, Spain",
    ]
  },
  {
    "release" : "com.desai.niket 1.6",
    "year": 2004,
    "changes" : [
      "Countries visited: Singapore",
    ]
  },
  {
    "release" : "com.desai.niket 1.5",
    "year": 2003,
    "changes" : [
      "Countries visited: India",
    ]
  },
  {
    "release" : "com.desai.niket 1.5",
    "year": 2002,
    "changes" : [
      "Countries visited: China, India, Indonesia, Malaysia",
    ]
  },
  {
    "release" : "com.desai.niket 1.5",
    "year": 2001,
    "changes" : [
      "Countries visited: Australia, India, Indonesia, Malaysia, New Zealand ",
    ]
  },
  {
    "release" : "com.desai.niket 1.5",
    "year": 2000,
    "changes" : [
      "Countries visited: Cambodia, Malaysia, Thailand, Vietnam",
    ]
  },
  {
    "release" : "com.desai.niket 1.0",
    "year": 1999,
    "changes" : [
      "I moved to Singapore with family",
      "Countries visited: India, Indonesia, Singapore",
    ]
  },
  {
    "release" : "com.desai.niket 0.9",
    "year": 1998,
    "changes" : [
      "Countries visited: England, France",
    ]
  },
  {
    "release" : "com.desai.niket 0.5",
    "year": 1993,
    "changes" : [
      "Moved into 1227 St. Matthew Way, Los Altos, CA.",
      "Began Kindergarten at Montclaire Elementary School.",
    ]
  },
  {
    "release" : "com.desai.niket 0.4",
    "year": 1992,
    "changes" : [
      "Started pre-school and Ellen Thatcher. Met Aaron Shaw and Paul Morrill, became good friends.",
    ]
  },
  {
    "release" : "com.desai.niket 0.1",
    "year": 1989,
    "img": "img/1.jpg",
    "changes" : [
      "Countries visited: ",
    ]
  },
  {
    "release" : "com.desai.niket 0.1",
    "year": 1988,
    "img": "img/1.jpg",
    "changes" : [
      "Countries visited: India",
    ]
  },
  {
    "release" : "com.desai.niket 0.0",
    "year": 1987,
    "changes" : [
      "Project Init on [REDACTED], 1987 5:07AM. Initial maintainers Meena Desai and Naushik Desai. Birthed at Good Samaritan in San Jose, CA.",
    ]
  },
];

// The actual javascript for the page.
document.addEventListener('DOMContentLoaded', function() {
  data.forEach(function(ev, i){
    // Containing div for each release.
    var release = document.createElement('div');
    var className = 'release';
    if (release.classList) {
        release.classList.add(className);
    } else {
        release.className += ' ' + className;
    }

    // img code.
    var img, imga = null;
    if (ev.img != undefined && ev.img != "") {
      imga = document.createElement('a');
      imga.setAttribute('href', ev.img);
      img = document.createElement('img');
      img.setAttribute('src', ev.img);
      imga.appendChild(img);
    }

    // Unorded list of changes.
    var changeUl = document.createElement('ul');
    var className = 'changelist';
    if (changeUl.classList) {
        changeUl.classList.add(className);
    } else {
        changeUl.className += ' ' + className;
    }

    ev.changes.forEach(function(change, k) {
      var li = document.createElement('li');
      li.innerHTML = change;
      changeUl.appendChild(li);
    });

    // Insert release into page.
    var h2 = document.createElement('h2');
    className = 'clearfix';
    h2.innerHTML = ev.release;
    if (imga != null) {
      release.appendChild(imga);
    }
    release.appendChild(h2);
    release.appendChild(changeUl);
    if (release.classList) {
        release.classList.add(className);
    } else {
        release.className += ' ' + className;
    }
    document.getElementById('data').appendChild(release);
  });
});
