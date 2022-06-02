const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var books = [
  {
    "ISBN": 9789000307975,
    "categories": 'Action and Adventure',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "Vrienden voor het  ",
    "author": "Maeve Binchy",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/5/3/6/6/1001004011806635.jpg",
    "price": {
      "currency": "EUR",
      "value": 10,
      "displayValue": "10.00"
    }
  }, {
    "ISBN": 9780552159722,
    "categories": 'Action and Adventure',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "Deception point",
    "author": "Dan Brown",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/8/8/9/8/1001004006878988.jpg",
    "price": {
      "currency": "EUR",
      "value": 9.99,
      "displayValue": "9.99"
    }
  },
  {
    "ISBN": 9789022558027,
    "categories": 'Classics',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "Magic staff",
    "author": "Terry Brooks",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/2/2/5/2/9200000002212522.jpg",
    "price": {
      "currency": "EUR",
      "value": 17.5,
      "displayValue": "17.50"
    }
  },
  {
    "ISBN": 9781841499789,
    "categories": 'Classics',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "Bloodfire Quest",
    "author": "Terry Brooks",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/7/0/0/7/9200000009027007.jpg",
    "price": {
      "currency": "EUR",
      "value": 24.5,
      "displayValue": "24.50"
    }
  },
  {
    "ISBN": 9781409117933,
    "categories": 'Classics',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "A Week in Winter",
    "author": "Maeve Binchy",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/6/2/8/0/9200000008070826.jpg",
    "price": {
      "currency": "EUR",
      "value": 11.99,
      "displayValue": "11.99"
    }
  },
  {
    "ISBN": 9789460681387,
    "categories": 'Comic Book or Graphic Novel',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "Blue Curacao",
    "author": "Linda van Rijn",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/0/9/4/2/9200000010732490.jpg",
    "price": {
      "currency": "EUR",
      "value": 48.99,
      "displayValue": "48.99"
    }
  },
  {
    "ISBN": 9780751548525,
    "categories": 'Comic Book or Graphic Novel',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "Safe Haven",
    "author": "Nicholas Sparks",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/0/5/2/3/9200000010683250.jpg",
    "price": {
      "currency": "EUR",
      "value": 33.8,
      "displayValue": "33.80"
    }
  },
  {
    "ISBN": 9789023429258,
    "categories": 'Comic Book or Graphic Novel',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "De wereld volgens  ",
    "author": "John Irving",
    "price": {
      "currency": "EUR",
      "value": 19.9,
      "displayValue": "19.90"
    }
  },
  {
    "ISBN": 9789460680854,
    "categories": 'Comic Book or Graphic Novel',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "Winter Chalet",
    "author": "Linda van Rijn",
    "price": {
      "currency": "EUR",
      "value": 15,
      "displayValue": "15.00"
    }
  },
  {
    "ISBN": 9789023464044,
    "categories": 'Comic Book or Graphic Novel',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "De Vliegeraar",
    "author": "Khaled Hosseini",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/6/3/5/1/1001004010981536.jpg",
    "price": {
      "currency": "EUR",
      "value": 6.99,
      "displayValue": "6.99"
    }
  },
  {
    "ISBN": 9789024529445,
    "categories": 'Detective and Mystery',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "De delta deceptie",
    "author": "Dan Brown",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/5/0/5/5/1001004006225505.jpg",
    "price": {
      "currency": "EUR",
      "value": 14.95,
      "displayValue": "14.95"
    }
  },
  {
    "ISBN": 9789044309904,
    "categories": 'Detective and Mystery',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "Hou je mond!",
    "author": "Sophie Kinsella",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/8/3/1/6/1001004002056138.jpg",
    "price": {
      "currency": "EUR",
      "value": 10,
      "displayValue": "10.00"
    }
  },
  {
    "ISBN": 9789023467786,
    "categories": 'Detective and Mystery',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "In een mens",
    "author": "John Irving",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/0/7/8/7/9200000000037870.jpg",
    "price": {
      "currency": "EUR",
      "value": 19.9,
      "displayValue": "19.90"
    }
  },
  {
    "ISBN": 9780751548556,
    "categories": 'Detective and Mystery',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "The lucky one",
    "author": "Nicholas Sparks",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/7/0/3/7/1001004011797307.jpg",
    "price": {
      "currency": "EUR",
      "value": 9.8,
      "displayValue": "9.80"
    }
  },
  {
    "ISBN": 9780751542974,
    "categories": 'Detective and Mystery',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "Best of me",
    "author": "Nicholas Sparks",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/4/6/2/8/9200000001208264.jpg",
    "price": {
      "currency": "EUR",
      "value": 13.8,
      "displayValue": "13.80"
    }
  },
  {
    "ISBN": 9789000316090,
    "categories": 'Literary Fiction',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "Hotel aan zee",
    "author": "Maeve Binchy",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/7/2/1/0/9200000009850127.jpg",
    "price": {
      "currency": "EUR",
      "value": 14.99,
      "displayValue": "14.99"
    }
  },
  {
    "ISBN": 9789024561858,
    "categories": 'Literary Fiction',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "Inferno",
    "author": "Dan Brown",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/8/9/9/9/9200000010839998.jpg",
    "price": {
      "currency": "EUR",
      "value": 17.49,
      "displayValue": "17.49"
    }
  },
  {
    "ISBN": 9789046113110,
    "categories": 'Literary Fiction',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "In het hart",
    "author": "David Baldacci",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/2/6/2/1/1001004005971262.jpg",
    "price": {
      "currency": "EUR",
      "value": 5,
      "displayValue": "5.00"
    }
  },
  {
    "ISBN": 9781447229902,
    "categories": 'Literary Fiction',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "The Hit",
    "author": "David Baldacci",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/6/5/2/3/9200000009123256.jpg",
    "price": {
      "currency": "EUR",
      "value": 21.99,
      "displayValue": "21.99"
    }
  },
  {
    "ISBN": 9789044339482,
    "categories": 'Art & Photograph',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "De Tennisparty",
    "author": "Sophie Kinsella",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/3/7/6/4/9200000009984673.jpg",
    "price": {
      "currency": "EUR",
      "value": 18.5,
      "displayValue": "18.50"
    }
  },
  {
    "ISBN": 9780552778459,
    "categories": 'Art & Photograph',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "In One Person",
    "author": "John Irving",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/3/4/5/9/9200000009409543.jpg",
    "price": {
      "currency": "EUR",
      "value": 25,
      "displayValue": "25.00"
    }
  },
  {
    "ISBN": 9789400501157,
    "categories": 'Art & Photograph',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "De aanslag",
    "author": "David Baldacci",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/4/8/2/7/9200000010047284.jpg",
    "price": {
      "currency": "EUR",
      "value": 19.99,
      "displayValue": "19.99"
    }
  },
  {
    "ISBN": 9789044339338,
    "categories": 'Art & Photograph',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "Mag ik je nummer even?",
    "author": "Sophie Kinsella",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/3/0/9/4/9200000009984903.jpg",
    "price": {
      "currency": "EUR",
      "value": 10,
      "displayValue": "10.00"
    }
  },
  {
    "ISBN": 9789022556627,
    "categories": 'Detective and Mystery',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "Jarka Ruus",
    "author": "Terry Brooks",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/7/8/9/9/1001004011269987.jpg",
    "price": {
      "currency": "EUR",
      "value": 18.95,
      "displayValue": "18.95"
    }
  },
  {
    "ISBN": 9789460680755,
    "categories": 'Detective and Mystery',
    "NumberOfPages": generateRandomNumber(30, 100),
    "title": "Last Minute",
    "author": "Linda van Rijn",
    "image": "http://s.s-bol.com/imgbase0/imagebase/large/FC/2/5/6/7/1001004011817652.jpg",
    "price": {
      "currency": "EUR",
      "value": 4.99,
      "displayValue": "4.99"
    }
  },
]