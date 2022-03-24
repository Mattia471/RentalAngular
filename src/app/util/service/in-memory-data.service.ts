import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {UsersModel} from "../model/users";

//import {MyArray} from "../../configCustom/table/config";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [{
      "id": 1,
      "name": "Antonia",
      "surname": "Weight",
      "email": "aweight0@mail.ru",
      "birthdate": "1991-01-31"
    }, {
      "id": 2,
      "name": "Fidelia",
      "surname": "Berthomier",
      "email": "fberthomier1@ustream.tv",
      "birthdate": "2007-02-16"
    }, {
      "id": 3,
      "name": "Gilligan",
      "surname": "Pickthall",
      "email": "gpickthall2@about.com",
      "birthdate": "1997-12-21"
    }, {
      "id": 4,
      "name": "Torrie",
      "surname": "Shelmardine",
      "email": "tshelmardine3@so-net.ne.jp",
      "birthdate": "2015-12-30"
    }, {
      "id": 5,
      "name": "Zelma",
      "surname": "Baelde",
      "email": "zbaelde4@ucsd.edu",
      "birthdate": "1998-01-05"
    }, {
      "id": 6,
      "name": "Leighton",
      "surname": "Milan",
      "email": "lmilan5@tiny.cc",
      "birthdate": "2019-09-21"
    }, {
      "id": 7,
      "name": "Garth",
      "surname": "Brotherhead",
      "email": "gbrotherhead6@wordpress.org",
      "birthdate": "1998-05-17"
    }, {
      "id": 8,
      "name": "Mace",
      "surname": "Leacy",
      "email": "mleacy7@reuters.com",
      "birthdate": "1990-04-03"
    }, {
      "id": 9,
      "name": "Amy",
      "surname": "Docharty",
      "email": "adocharty8@google.it",
      "birthdate": "1991-01-19"
    }, {
      "id": 10,
      "name": "Curcio",
      "surname": "Dowzell",
      "email": "cdowzell9@unicef.org",
      "birthdate": "2012-07-03"
    }, {
      "id": 11,
      "name": "Cleo",
      "surname": "Matelaitis",
      "email": "cmatelaitisa@economist.com",
      "birthdate": "2003-07-04"
    }, {
      "id": 12,
      "name": "Kylen",
      "surname": "Boddam",
      "email": "kboddamb@myspace.com",
      "birthdate": "2005-02-11"
    }, {
      "id": 13,
      "name": "Nicolina",
      "surname": "Glazebrook",
      "email": "nglazebrookc@globo.com",
      "birthdate": "2008-05-23"
    }, {
      "id": 14,
      "name": "Donnamarie",
      "surname": "Whitehall",
      "email": "dwhitehalld@example.com",
      "birthdate": "1993-03-01"
    }, {
      "id": 15,
      "name": "Catina",
      "surname": "Winckles",
      "email": "cwincklese@prlog.org",
      "birthdate": "2008-11-18"
    }, {
      "id": 16,
      "name": "Yorke",
      "surname": "Simion",
      "email": "ysimionf@fc2.com",
      "birthdate": "2014-11-10"
    }, {
      "id": 17,
      "name": "Jeramie",
      "surname": "Fleming",
      "email": "jflemingg@goo.gl",
      "birthdate": "1995-10-20"
    }, {
      "id": 18,
      "name": "Phyllis",
      "surname": "Bleaden",
      "email": "pbleadenh@buzzfeed.com",
      "birthdate": "2003-02-19"
    }, {
      "id": 19,
      "name": "Jacquenetta",
      "surname": "Boyle",
      "email": "jboylei@nps.gov",
      "birthdate": "2013-10-22"
    }, {
      "id": 20,
      "name": "Samantha",
      "surname": "Gardner",
      "email": "sgardnerj@seattletimes.com",
      "birthdate": "1999-03-11"
    }, {
      "id": 21,
      "name": "Joeann",
      "surname": "Scarsbrook",
      "email": "jscarsbrookk@so-net.ne.jp",
      "birthdate": "1999-08-16"
    }, {
      "id": 22,
      "name": "Nicolis",
      "surname": "Lebarree",
      "email": "nlebarreel@ebay.com",
      "birthdate": "2019-08-03"
    }, {
      "id": 23,
      "name": "Dave",
      "surname": "Parradye",
      "email": "dparradyem@cbc.ca",
      "birthdate": "2004-05-19"
    }, {
      "id": 24,
      "name": "Godart",
      "surname": "Benet",
      "email": "gbenetn@nbcnews.com",
      "birthdate": "2010-11-03"
    }, {
      "id": 25,
      "name": "Val",
      "surname": "Niesing",
      "email": "vniesingo@unc.edu",
      "birthdate": "2012-09-22"
    }, {
      "id": 26,
      "name": "Angy",
      "surname": "Bernardt",
      "email": "abernardtp@umich.edu",
      "birthdate": "2013-06-19"
    }, {
      "id": 27,
      "name": "Jorrie",
      "surname": "Wither",
      "email": "jwitherq@washingtonpost.com",
      "birthdate": "2018-08-03"
    }, {
      "id": 28,
      "name": "Sherlocke",
      "surname": "Paddemore",
      "email": "spaddemorer@yellowpages.com",
      "birthdate": "2012-10-19"
    }, {
      "id": 29,
      "name": "Steffane",
      "surname": "Holyard",
      "email": "sholyards@china.com.cn",
      "birthdate": "2007-04-02"
    }, {
      "id": 30,
      "name": "Liuka",
      "surname": "Critchard",
      "email": "lcritchardt@usatoday.com",
      "birthdate": "2005-08-17"
    }, {
      "id": 31,
      "name": "Jackelyn",
      "surname": "Whales",
      "email": "jwhalesu@mozilla.org",
      "birthdate": "2018-03-25"
    }, {
      "id": 32,
      "name": "George",
      "surname": "Elmhirst",
      "email": "gelmhirstv@zimbio.com",
      "birthdate": "2005-09-30"
    }, {
      "id": 33,
      "name": "Seth",
      "surname": "Gores",
      "email": "sgoresw@smugmug.com",
      "birthdate": "2003-02-26"
    }, {
      "id": 34,
      "name": "Violette",
      "surname": "Corro",
      "email": "vcorrox@flickr.com",
      "birthdate": "1991-05-07"
    }, {
      "id": 35,
      "name": "Mel",
      "surname": "Schulz",
      "email": "mschulzy@rakuten.co.jp",
      "birthdate": "2010-12-01"
    }, {
      "id": 36,
      "name": "Jerri",
      "surname": "Schieferstein",
      "email": "jschiefersteinz@abc.net.au",
      "birthdate": "2000-12-14"
    }, {
      "id": 37,
      "name": "Bea",
      "surname": "Gervaise",
      "email": "bgervaise10@wix.com",
      "birthdate": "1998-03-04"
    }, {
      "id": 38,
      "name": "Dinah",
      "surname": "Shanley",
      "email": "dshanley11@state.tx.us",
      "birthdate": "2009-11-01"
    }, {
      "id": 39,
      "name": "Alaric",
      "surname": "Reiner",
      "email": "areiner12@google.es",
      "birthdate": "2015-04-18"
    }, {
      "id": 40,
      "name": "Arty",
      "surname": "Browncey",
      "email": "abrowncey13@cyberchimps.com",
      "birthdate": "2002-02-13"
    }, {
      "id": 41,
      "name": "Parnell",
      "surname": "Ingle",
      "email": "pingle14@foxnews.com",
      "birthdate": "2001-08-31"
    }, {
      "id": 42,
      "name": "Temple",
      "surname": "Notman",
      "email": "tnotman15@deviantart.com",
      "birthdate": "2005-03-14"
    }, {
      "id": 43,
      "name": "Maximilian",
      "surname": "Flicker",
      "email": "mflicker16@npr.org",
      "birthdate": "1995-10-09"
    }, {
      "id": 44,
      "name": "Eyde",
      "surname": "Byham",
      "email": "ebyham17@xinhuanet.com",
      "birthdate": "1993-09-11"
    }, {
      "id": 45,
      "name": "Elsie",
      "surname": "Farahar",
      "email": "efarahar18@eepurl.com",
      "birthdate": "2010-07-12"
    }, {
      "id": 46,
      "name": "Katey",
      "surname": "MacDougall",
      "email": "kmacdougall19@usgs.gov",
      "birthdate": "2019-04-18"
    }, {
      "id": 47,
      "name": "Moishe",
      "surname": "Eveque",
      "email": "meveque1a@telegraph.co.uk",
      "birthdate": "1998-05-11"
    }, {
      "id": 48,
      "name": "Dyan",
      "surname": "Pagelsen",
      "email": "dpagelsen1b@patch.com",
      "birthdate": "2000-03-21"
    }, {
      "id": 49,
      "name": "Bree",
      "surname": "Ren",
      "email": "bren1c@booking.com",
      "birthdate": "2013-06-18"
    }, {
      "id": 50,
      "name": "Franni",
      "surname": "Pervew",
      "email": "fpervew1d@arstechnica.com",
      "birthdate": "2018-11-26"
    }, {
      "id": 51,
      "name": "Willem",
      "surname": "Rudall",
      "email": "wrudall1e@hatena.ne.jp",
      "birthdate": "2022-01-17"
    }, {
      "id": 52,
      "name": "Selma",
      "surname": "Harland",
      "email": "sharland1f@spiegel.de",
      "birthdate": "2009-02-19"
    }, {
      "id": 53,
      "name": "Morena",
      "surname": "Manilow",
      "email": "mmanilow1g@wikispaces.com",
      "birthdate": "2001-04-16"
    }, {
      "id": 54,
      "name": "Ugo",
      "surname": "O'Lahy",
      "email": "uolahy1h@miibeian.gov.cn",
      "birthdate": "2014-03-23"
    }, {
      "id": 55,
      "name": "Julienne",
      "surname": "Ruthven",
      "email": "jruthven1i@sun.com",
      "birthdate": "1996-07-27"
    }, {
      "id": 56,
      "name": "Solly",
      "surname": "Kensitt",
      "email": "skensitt1j@earthlink.net",
      "birthdate": "1998-03-28"
    }, {
      "id": 57,
      "name": "Tabitha",
      "surname": "Dumke",
      "email": "tdumke1k@weibo.com",
      "birthdate": "2001-05-05"
    }, {
      "id": 58,
      "name": "Ninetta",
      "surname": "Bardell",
      "email": "nbardell1l@yahoo.com",
      "birthdate": "1999-09-03"
    }, {
      "id": 59,
      "name": "Amye",
      "surname": "Tribble",
      "email": "atribble1m@google.es",
      "birthdate": "2004-05-29"
    }, {
      "id": 60,
      "name": "Cynde",
      "surname": "De la Harpe",
      "email": "cdelaharpe1n@chicagotribune.com",
      "birthdate": "1998-05-19"
    }, {
      "id": 61,
      "name": "Rogerio",
      "surname": "Shyram",
      "email": "rshyram1o@cornell.edu",
      "birthdate": "2006-11-10"
    }, {
      "id": 62,
      "name": "Nils",
      "surname": "Meadmore",
      "email": "nmeadmore1p@forbes.com",
      "birthdate": "2003-12-08"
    }, {
      "id": 63,
      "name": "Conan",
      "surname": "Damrell",
      "email": "cdamrell1q@tinyurl.com",
      "birthdate": "2001-05-25"
    }, {
      "id": 64,
      "name": "Noah",
      "surname": "Waterfield",
      "email": "nwaterfield1r@yelp.com",
      "birthdate": "1994-04-15"
    }, {
      "id": 65,
      "name": "Janot",
      "surname": "Pietrusiak",
      "email": "jpietrusiak1s@dmoz.org",
      "birthdate": "2019-02-04"
    }, {
      "id": 66,
      "name": "Obediah",
      "surname": "Miche",
      "email": "omiche1t@gmpg.org",
      "birthdate": "1997-11-01"
    }, {
      "id": 67,
      "name": "Melvin",
      "surname": "Girault",
      "email": "mgirault1u@archive.org",
      "birthdate": "1993-08-14"
    }, {
      "id": 68,
      "name": "Fran",
      "surname": "Teaz",
      "email": "fteaz1v@vistaprint.com",
      "birthdate": "2020-08-03"
    }, {
      "id": 69,
      "name": "Homerus",
      "surname": "Ambrosio",
      "email": "hambrosio1w@last.fm",
      "birthdate": "2021-12-11"
    }, {
      "id": 70,
      "name": "Moreen",
      "surname": "Yakobowitz",
      "email": "myakobowitz1x@seattletimes.com",
      "birthdate": "2015-05-09"
    }, {
      "id": 71,
      "name": "Ring",
      "surname": "Newcome",
      "email": "rnewcome1y@howstuffworks.com",
      "birthdate": "2018-09-21"
    }, {
      "id": 72,
      "name": "Roana",
      "surname": "Bellefonte",
      "email": "rbellefonte1z@jiathis.com",
      "birthdate": "2017-04-21"
    }, {
      "id": 73,
      "name": "Clarence",
      "surname": "Bellward",
      "email": "cbellward20@salon.com",
      "birthdate": "1997-12-02"
    }, {
      "id": 74,
      "name": "Doria",
      "surname": "Scaddon",
      "email": "dscaddon21@example.com",
      "birthdate": "2010-10-15"
    }, {
      "id": 75,
      "name": "Cathe",
      "surname": "Sanz",
      "email": "csanz22@techcrunch.com",
      "birthdate": "1992-09-22"
    }, {
      "id": 76,
      "name": "Jamie",
      "surname": "Strafen",
      "email": "jstrafen23@home.pl",
      "birthdate": "2018-05-10"
    }, {
      "id": 77,
      "name": "Chloette",
      "surname": "Courcey",
      "email": "ccourcey24@is.gd",
      "birthdate": "1990-12-12"
    }, {
      "id": 78,
      "name": "Amalea",
      "surname": "Inglese",
      "email": "ainglese25@free.fr",
      "birthdate": "2019-08-02"
    }, {
      "id": 79,
      "name": "Goldie",
      "surname": "Larmour",
      "email": "glarmour26@github.com",
      "birthdate": "1997-04-01"
    }, {
      "id": 80,
      "name": "Kissee",
      "surname": "Di Matteo",
      "email": "kdimatteo27@google.com.au",
      "birthdate": "2011-01-19"
    }, {
      "id": 81,
      "name": "Cayla",
      "surname": "Pherps",
      "email": "cpherps28@apple.com",
      "birthdate": "2000-08-19"
    }, {
      "id": 82,
      "name": "Marissa",
      "surname": "Parratt",
      "email": "mparratt29@amazon.co.uk",
      "birthdate": "2012-09-10"
    }, {
      "id": 83,
      "name": "Ozzie",
      "surname": "Radden",
      "email": "oradden2a@canalblog.com",
      "birthdate": "2014-01-20"
    }, {
      "id": 84,
      "name": "Jessamine",
      "surname": "Comberbeach",
      "email": "jcomberbeach2b@nasa.gov",
      "birthdate": "2012-11-03"
    }, {
      "id": 85,
      "name": "Siana",
      "surname": "Blomefield",
      "email": "sblomefield2c@youtube.com",
      "birthdate": "2006-09-26"
    }, {
      "id": 86,
      "name": "Prentice",
      "surname": "Hassur",
      "email": "phassur2d@people.com.cn",
      "birthdate": "2011-07-23"
    }, {
      "id": 87,
      "name": "Eugenius",
      "surname": "Ateggart",
      "email": "eateggart2e@e-recht24.de",
      "birthdate": "2019-09-03"
    }, {
      "id": 88,
      "name": "Dorolice",
      "surname": "Danter",
      "email": "ddanter2f@nytimes.com",
      "birthdate": "2008-01-16"
    }, {
      "id": 89,
      "name": "Joscelin",
      "surname": "Berriball",
      "email": "jberriball2g@delicious.com",
      "birthdate": "2004-10-19"
    }, {
      "id": 90,
      "name": "Tandie",
      "surname": "Brudenell",
      "email": "tbrudenell2h@posterous.com",
      "birthdate": "2016-10-03"
    }, {
      "id": 91,
      "name": "Darby",
      "surname": "Buchanan",
      "email": "dbuchanan2i@ihg.com",
      "birthdate": "1995-10-21"
    }, {
      "id": 92,
      "name": "Tiphani",
      "surname": "Pockey",
      "email": "tpockey2j@360.cn",
      "birthdate": "1991-02-20"
    }, {
      "id": 93,
      "name": "Wilhelm",
      "surname": "Antecki",
      "email": "wantecki2k@theatlantic.com",
      "birthdate": "2000-10-19"
    }, {
      "id": 94,
      "name": "Osborn",
      "surname": "D'Elias",
      "email": "odelias2l@adobe.com",
      "birthdate": "2011-06-07"
    }, {
      "id": 95,
      "name": "Portia",
      "surname": "Joseff",
      "email": "pjoseff2m@mysql.com",
      "birthdate": "2005-02-12"
    }, {
      "id": 96,
      "name": "Seth",
      "surname": "Bruggen",
      "email": "sbruggen2n@webmd.com",
      "birthdate": "2018-10-10"
    }, {
      "id": 97,
      "name": "Isidro",
      "surname": "Pellissier",
      "email": "ipellissier2o@ebay.com",
      "birthdate": "2007-06-02"
    }, {
      "id": 98,
      "name": "Josi",
      "surname": "Barok",
      "email": "jbarok2p@phoca.cz",
      "birthdate": "2019-07-16"
    }, {
      "id": 99,
      "name": "Fanni",
      "surname": "Nilges",
      "email": "fnilges2q@narod.ru",
      "birthdate": "1994-06-30"
    }, {
      "id": 100,
      "name": "Huntlee",
      "surname": "Elgey",
      "email": "helgey2r@godaddy.com",
      "birthdate": "2017-09-10"
    }]
    const cars = [{
        "id": 1,
        "licenseplate": "1GYS4LKJXFR802574",
        "manufacturer": "Toyota",
        "model": "Tercel",
        "type": "Kia",
        "year": 1998
      }, {
        "id": 2,
        "licenseplate": "WAUKGAFB0AN208514",
        "manufacturer": "Lotus",
        "model": "Exige",
        "type": "Infiniti",
        "year": 2008
      }, {
        "id": 3,
        "licenseplate": "WA1BV94LX7D226434",
        "manufacturer": "Chevrolet",
        "model": "Corvette",
        "type": "Ford",
        "year": 1992
      }, {
        "id": 4,
        "licenseplate": "5N1AR1NB5BC523859",
        "manufacturer": "BMW",
        "model": "Z8",
        "type": "Volkswagen",
        "year": 2001
      }, {
        "id": 5,
        "licenseplate": "JN1BJ0HR0DM824543",
        "manufacturer": "Mitsubishi",
        "model": "Galant",
        "type": "Mitsubishi",
        "year": 1993
      }, {
        "id": 6,
        "licenseplate": "1G4CU541634655662",
        "manufacturer": "Subaru",
        "model": "SVX",
        "type": "Mercury",
        "year": 1997
      }, {
        "id": 7,
        "licenseplate": "5GAER13788J396812",
        "manufacturer": "Oldsmobile",
        "model": "Silhouette",
        "type": "Toyota",
        "year": 1999
      }, {
        "id": 8,
        "licenseplate": "WA1WGAFP4EA358245",
        "manufacturer": "Land Rover",
        "model": "LR3",
        "type": "Mercury",
        "year": 2005
      }, {
        "id": 9,
        "licenseplate": "WA1WMAFE6CD472296",
        "manufacturer": "Ford",
        "model": "Club Wagon",
        "type": "Chrysler",
        "year": 1995
      }, {
        "id": 10,
        "licenseplate": "JN8AE2KP7D9368421",
        "manufacturer": "Toyota",
        "model": "Venza",
        "type": "Saab",
        "year": 2013
      }, {
        "id": 11,
        "licenseplate": "WAU4FAFL7AA624183",
        "manufacturer": "Chevrolet",
        "model": "Equinox",
        "type": "Subaru",
        "year": 2010
      }, {
        "id": 12,
        "licenseplate": "WAUHF98P48A554393",
        "manufacturer": "GMC",
        "model": "Sierra 2500",
        "type": "Cadillac",
        "year": 2004
      }, {
        "id": 13,
        "licenseplate": "5N1AA0NC5DN833057",
        "manufacturer": "Subaru",
        "model": "Brat",
        "type": "Suzuki",
        "year": 1987
      }, {
        "id": 14,
        "licenseplate": "3GYFNJE62BS755414",
        "manufacturer": "Volkswagen",
        "model": "Jetta",
        "type": "Pontiac",
        "year": 1999
      }, {
        "id": 15,
        "licenseplate": "5J8TB4H3XDL472984",
        "manufacturer": "Plymouth",
        "model": "Grand Voyager",
        "type": "Buick",
        "year": 1993
      }, {
        "id": 16,
        "licenseplate": "1G4GG5E35CF626781",
        "manufacturer": "Cadillac",
        "model": "XLR-V",
        "type": "Toyota",
        "year": 2008
      }, {
        "id": 17,
        "licenseplate": "5TDBKRFH3ES447639",
        "manufacturer": "Nissan",
        "model": "Murano",
        "type": "Chrysler",
        "year": 2004
      }, {
        "id": 18,
        "licenseplate": "JM1CW2BL4C0542401",
        "manufacturer": "Toyota",
        "model": "Avalon",
        "type": "Hyundai",
        "year": 2001
      }, {
        "id": 19,
        "licenseplate": "1GKS1GKC6FR199148",
        "manufacturer": "Honda",
        "model": "S2000",
        "type": "Oldsmobile",
        "year": 2006
      }, {
        "id": 20,
        "licenseplate": "WAUET48H76K372234",
        "manufacturer": "Eagle",
        "model": "Talon",
        "type": "Volvo",
        "year": 1993
      }, {
        "id": 21,
        "licenseplate": "1G6DF8E51C0963645",
        "manufacturer": "Volkswagen",
        "model": "Touareg",
        "type": "Daewoo",
        "year": 2012
      }, {
        "id": 22,
        "licenseplate": "4F2CY0C77AK918400",
        "manufacturer": "Buick",
        "model": "Rendezvous",
        "type": "Pontiac",
        "year": 2002
      }, {
        "id": 23,
        "licenseplate": "4A4JM2AS1BE400944",
        "manufacturer": "BMW",
        "model": "1 Series",
        "type": "Pontiac",
        "year": 2012
      }, {
        "id": 24,
        "licenseplate": "KMHHT6KD4DU962907",
        "manufacturer": "Chevrolet",
        "model": "Malibu",
        "type": "Mercedes-Benz",
        "year": 1997
      }, {
        "id": 25,
        "licenseplate": "JTDKN3DP0D3619074",
        "manufacturer": "Volkswagen",
        "model": "Eurovan",
        "type": "Pontiac",
        "year": 1993
      }, {
        "id": 26,
        "licenseplate": "WAUSH98E56A803621",
        "manufacturer": "Isuzu",
        "model": "Amigo",
        "type": "Toyota",
        "year": 1994
      }, {
        "id": 27,
        "licenseplate": "JN8AF5MR8FT295577",
        "manufacturer": "Suzuki",
        "model": "SJ",
        "type": "Dodge",
        "year": 1985
      }, {
        "id": 28,
        "licenseplate": "WAUDGAFL8BA375150",
        "manufacturer": "Chrysler",
        "model": "PT Cruiser",
        "type": "Subaru",
        "year": 2005
      }, {
        "id": 29,
        "licenseplate": "WBAUU3C56AA656565",
        "manufacturer": "Dodge",
        "model": "Dakota Club",
        "type": "Kia",
        "year": 1992
      }, {
        "id": 30,
        "licenseplate": "WBA5M4C51FD515158",
        "manufacturer": "Infiniti",
        "model": "M",
        "type": "Infiniti",
        "year": 2011
      }, {
        "id": 31,
        "licenseplate": "3VW217AU2FM006367",
        "manufacturer": "Suzuki",
        "model": "Esteem",
        "type": "Chevrolet",
        "year": 2002
      }, {
        "id": 32,
        "licenseplate": "JN1CV6FE1FM057722",
        "manufacturer": "Honda",
        "model": "CR-V",
        "type": "Saab",
        "year": 2004
      }, {
        "id": 33,
        "licenseplate": "5GALRBED4AJ884130",
        "manufacturer": "Aston Martin",
        "model": "V12 Vantage",
        "type": "Cadillac",
        "year": 2012
      }, {
        "id": 34,
        "licenseplate": "1G6DW67V180811373",
        "manufacturer": "Mercedes-Benz",
        "model": "S-Class",
        "type": "Porsche",
        "year": 1997
      }, {
        "id": 35,
        "licenseplate": "WAUBNBFB6BN560784",
        "manufacturer": "Ford",
        "model": "Fiesta",
        "type": "Mazda",
        "year": 2011
      }, {
        "id": 36,
        "licenseplate": "1G4HP52K544434516",
        "manufacturer": "BMW",
        "model": "Z4 M",
        "type": "Volkswagen",
        "year": 2009
      }, {
        "id": 37,
        "licenseplate": "WAUDGBFL3CA365407",
        "manufacturer": "Ford",
        "model": "Bronco II",
        "type": "Ford",
        "year": 1987
      }, {
        "id": 38,
        "licenseplate": "1FTEX1E88AK870412",
        "manufacturer": "Pontiac",
        "model": "Sunfire",
        "type": "Toyota",
        "year": 2004
      }, {
        "id": 39,
        "licenseplate": "WBAUL73538V860642",
        "manufacturer": "Ford",
        "model": "Mustang",
        "type": "Toyota",
        "year": 1991
      }, {
        "id": 40,
        "licenseplate": "3N1CN7AP8EL545640",
        "manufacturer": "Ford",
        "model": "Ranger",
        "type": "Chevrolet",
        "year": 2001
      }, {
        "id": 41,
        "licenseplate": "1GYS4JEFXBR122776",
        "manufacturer": "Mazda",
        "model": "B-Series Plus",
        "type": "Lincoln",
        "year": 1996
      }, {
        "id": 42,
        "licenseplate": "5UXFB935X2L912005",
        "manufacturer": "Plymouth",
        "model": "Breeze",
        "type": "Buick",
        "year": 2000
      }, {
        "id": 43,
        "licenseplate": "WBALM73509E534534",
        "manufacturer": "Suzuki",
        "model": "Sidekick",
        "type": "Ford",
        "year": 1995
      }, {
        "id": 44,
        "licenseplate": "5J6TF1H37AL200688",
        "manufacturer": "Lexus",
        "model": "SC",
        "type": "Buick",
        "year": 2002
      }, {
        "id": 45,
        "licenseplate": "1FTMF1EW8AK131327",
        "manufacturer": "Dodge",
        "model": "Ram Van 3500",
        "type": "Isuzu",
        "year": 1998
      }, {
        "id": 46,
        "licenseplate": "1N6AA0EK5FN305580",
        "manufacturer": "Ferrari",
        "model": "FF",
        "type": "Mitsubishi",
        "year": 2012
      }, {
        "id": 47,
        "licenseplate": "1G6DH8EG8A0381664",
        "manufacturer": "Ford",
        "model": "E350",
        "type": "Buick",
        "year": 2008
      }, {
        "id": 48,
        "licenseplate": "2C3CDXFG9DH820307",
        "manufacturer": "BMW",
        "model": "330",
        "type": "GMC",
        "year": 2006
      }, {
        "id": 49,
        "licenseplate": "SCFBF03B07G179843",
        "manufacturer": "Pontiac",
        "model": "G5",
        "type": "Suzuki",
        "year": 2008
      }, {
        "id": 50,
        "licenseplate": "WBAVT13516K287885",
        "manufacturer": "Nissan",
        "model": "Sentra",
        "type": "Saab",
        "year": 1995
      }, {
        "id": 51,
        "licenseplate": "4A31K5DF4CE251053",
        "manufacturer": "Pontiac",
        "model": "G5",
        "type": "Buick",
        "year": 2009
      }, {
        "id": 52,
        "licenseplate": "1FTMF1CW1AK846260",
        "manufacturer": "Volkswagen",
        "model": "Passat",
        "type": "Porsche",
        "year": 2006
      }, {
        "id": 53,
        "licenseplate": "WBADN63481G890483",
        "manufacturer": "GMC",
        "model": "Savana 3500",
        "type": "Toyota",
        "year": 1997
      }, {
        "id": 54,
        "licenseplate": "WP0CA2A80FS237742",
        "manufacturer": "Cadillac",
        "model": "DeVille",
        "type": "Audi",
        "year": 2005
      }, {
        "id": 55,
        "licenseplate": "3VW8S7AT9FM659518",
        "manufacturer": "BMW",
        "model": "3 Series",
        "type": "Plymouth",
        "year": 1993
      }, {
        "id": 56,
        "licenseplate": "5NPDH4AE7FH134365",
        "manufacturer": "Acura",
        "model": "CL",
        "type": "Chevrolet",
        "year": 1999
      }, {
        "id": 57,
        "licenseplate": "WBAUP3C57BV035465",
        "manufacturer": "GMC",
        "model": "Acadia",
        "type": "Chevrolet",
        "year": 2012
      }, {
        "id": 58,
        "licenseplate": "WAU3FAFR4AA878854",
        "manufacturer": "Pontiac",
        "model": "G3",
        "type": "Pontiac",
        "year": 2010
      }, {
        "id": 59,
        "licenseplate": "JTEBU5JR1F5935266",
        "manufacturer": "Lincoln",
        "model": "MKZ",
        "type": "Toyota",
        "year": 2007
      }, {
        "id": 60,
        "licenseplate": "WAUVF78K29A202314",
        "manufacturer": "Lotus",
        "model": "Elise",
        "type": "BMW",
        "year": 2011
      }, {
        "id": 61,
        "licenseplate": "19UUA65584A398792",
        "manufacturer": "Toyota",
        "model": "RAV4",
        "type": "Hummer",
        "year": 1999
      }, {
        "id": 62,
        "licenseplate": "WBABW53466P688375",
        "manufacturer": "Dodge",
        "model": "Grand Caravan",
        "type": "Volkswagen",
        "year": 2006
      }, {
        "id": 63,
        "licenseplate": "1C3CDWBA9CD230681",
        "manufacturer": "Ford",
        "model": "Aspire",
        "type": "Bentley",
        "year": 1995
      }, {
        "id": 64,
        "licenseplate": "WAUDH78E36A250688",
        "manufacturer": "Lotus",
        "model": "Evora",
        "type": "Honda",
        "year": 2012
      }, {
        "id": 65,
        "licenseplate": "WAUYP54B71N449328",
        "manufacturer": "GMC",
        "model": "Yukon XL 2500",
        "type": "Mazda",
        "year": 2012
      }, {
        "id": 66,
        "licenseplate": "3VW1K7AJ1DM411616",
        "manufacturer": "Mazda",
        "model": "929",
        "type": "Audi",
        "year": 1994
      }, {
        "id": 67,
        "licenseplate": "WAULC58E03A353903",
        "manufacturer": "Toyota",
        "model": "Celica",
        "type": "Suzuki",
        "year": 1976
      }, {
        "id": 68,
        "licenseplate": "WAUVF98K89A700481",
        "manufacturer": "Lamborghini",
        "model": "Gallardo",
        "type": "Dodge",
        "year": 2003
      }, {
        "id": 69,
        "licenseplate": "3GYFNAE35ES675339",
        "manufacturer": "Suzuki",
        "model": "Swift",
        "type": "Ford",
        "year": 2001
      }, {
        "id": 70,
        "licenseplate": "3GYFK22289G351286",
        "manufacturer": "Infiniti",
        "model": "Q",
        "type": "Mercedes-Benz",
        "year": 1997
      }, {
        "id": 71,
        "licenseplate": "JN8AZ2NC0B9872724",
        "manufacturer": "Land Rover",
        "model": "LR3",
        "type": "Volkswagen",
        "year": 2006
      }, {
        "id": 72,
        "licenseplate": "WUARU78E07N078668",
        "manufacturer": "Nissan",
        "model": "Frontier",
        "type": "Lincoln",
        "year": 2001
      }, {
        "id": 73,
        "licenseplate": "WBAVB33586K608187",
        "manufacturer": "Spyker",
        "model": "C8 Double 12 S",
        "type": "GMC",
        "year": 2006
      }, {
        "id": 74,
        "licenseplate": "JTHFE2C22F2227464",
        "manufacturer": "BMW",
        "model": "3 Series",
        "type": "Nissan",
        "year": 2004
      }, {
        "id": 75,
        "licenseplate": "JN8AZ2KR1BT990485",
        "manufacturer": "Aston Martin",
        "model": "V8 Vantage",
        "type": "Volvo",
        "year": 2007
      }, {
        "id": 76,
        "licenseplate": "WBAUC9C57DV985603",
        "manufacturer": "Dodge",
        "model": "Ram 2500 Club",
        "type": "Dodge",
        "year": 1997
      }, {
        "id": 77,
        "licenseplate": "WBAYM1C56DD314056",
        "manufacturer": "Dodge",
        "model": "Ram",
        "type": "Ferrari",
        "year": 2011
      }, {
        "id": 78,
        "licenseplate": "2B3CK2CV6AH867587",
        "manufacturer": "Nissan",
        "model": "300ZX",
        "type": "Cadillac",
        "year": 1994
      }, {
        "id": 79,
        "licenseplate": "JM3ER2A59B0174063",
        "manufacturer": "Toyota",
        "model": "Camry",
        "type": "Dodge",
        "year": 1992
      }, {
        "id": 80,
        "licenseplate": "KMHTC6AD4EU972088",
        "manufacturer": "Mercedes-Benz",
        "model": "600SEL",
        "type": "Cadillac",
        "year": 1992
      }, {
        "id": 81,
        "licenseplate": "WAUDGAFL4BA933608",
        "manufacturer": "Dodge",
        "model": "Colt",
        "type": "Porsche",
        "year": 1992
      }, {
        "id": 82,
        "licenseplate": "5GAKRAED9BJ528571",
        "manufacturer": "Suzuki",
        "model": "Sidekick",
        "type": "Aston Martin",
        "year": 1994
      }, {
        "id": 83,
        "licenseplate": "1G6AX5SX2F0074264",
        "manufacturer": "Bentley",
        "model": "Continental",
        "type": "Mercedes-Benz",
        "year": 2010
      }, {
        "id": 84,
        "licenseplate": "WAUDFAFL3CN266950",
        "manufacturer": "GMC",
        "model": "Envoy XUV",
        "type": "Pontiac",
        "year": 2005
      }, {
        "id": 85,
        "licenseplate": "SCFAD01AX6G287350",
        "manufacturer": "Lincoln",
        "model": "Navigator",
        "type": "Volkswagen",
        "year": 2008
      }, {
        "id": 86,
        "licenseplate": "WAUEH98E08A209924",
        "manufacturer": "Ford",
        "model": "Contour",
        "type": "Acura",
        "year": 1995
      }, {
        "id": 87,
        "licenseplate": "KNALN4D77E5187211",
        "manufacturer": "Acura",
        "model": "MDX",
        "type": "Smart",
        "year": 2005
      }, {
        "id": 88,
        "licenseplate": "WAUML64B33N840723",
        "manufacturer": "Maybach",
        "model": "62",
        "type": "Ford",
        "year": 2012
      }, {
        "id": 89,
        "licenseplate": "WDDEJ8GB9AA145063",
        "manufacturer": "Mercedes-Benz",
        "model": "CLK-Class",
        "type": "Mercedes-Benz",
        "year": 2000
      }, {
        "id": 90,
        "licenseplate": "JN8AF5MR2ET601039",
        "manufacturer": "BMW",
        "model": "X3",
        "type": "Volvo",
        "year": 2004
      }, {
        "id": 91,
        "licenseplate": "WDDEJ7GB5CA994541",
        "manufacturer": "GMC",
        "model": "Vandura 1500",
        "type": "Citroën",
        "year": 1993
      }, {
        "id": 92,
        "licenseplate": "WAUGVAFR0CA474683",
        "manufacturer": "Mercedes-Benz",
        "model": "M-Class",
        "type": "Mitsubishi",
        "year": 2008
      }, {
        "id": 93,
        "licenseplate": "1FMCU5K34AK157373",
        "manufacturer": "Toyota",
        "model": "Tacoma",
        "type": "Maybach",
        "year": 1995
      }, {
        "id": 94,
        "licenseplate": "5UXFE83548L617217",
        "manufacturer": "Saturn",
        "model": "VUE",
        "type": "Buick",
        "year": 2003
      }, {
        "id": 95,
        "licenseplate": "WBA3N3C52EK631350",
        "manufacturer": "BMW",
        "model": "545",
        "type": "Kia",
        "year": 2005
      }, {
        "id": 96,
        "licenseplate": "1FTMF1E87AK475345",
        "manufacturer": "Dodge",
        "model": "Ram Van 3500",
        "type": "Oldsmobile",
        "year": 1998
      }, {
        "id": 97,
        "licenseplate": "1G6AB5RA4F0843217",
        "manufacturer": "Infiniti",
        "model": "Q",
        "type": "Ford",
        "year": 2003
      }, {
        "id": 98,
        "licenseplate": "SCBBR9ZA3DC855121",
        "manufacturer": "Mitsubishi",
        "model": "Outlander Sport",
        "type": "GMC",
        "year": 2011
      }, {
        "id": 99,
        "licenseplate": "4JGBF2FE8BA220453",
        "manufacturer": "Buick",
        "model": "Century",
        "type": "Nissan",
        "year": 2003
      }, {
        "id": 100,
        "licenseplate": "1G6AE5SX8F0483987",
        "manufacturer": "Lexus",
        "model": "GX",
        "type": "Volkswagen",
        "year": 2011
      }]
    ;
    return {users, cars};
  }


  /*genId(users: UsersModel[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }*/
}
