import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {UsersModel} from "../model/users";
//import {MyArray} from "../../configCustom/table/config";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
        {
          "id": 72,
          "name": "Raf",
          "surname": "Blick",
          "email": "rblick0@prlog.org",
          "birthdate": "10/28/2021"
        },
        {
          "id": 55,
          "name": "Kelli",
          "surname": "Libreros",
          "email": "klibreros1@europa.eu",
          "birthdate": "04/17/2021"
        },
        {
          "id": 77,
          "name": "Gerianne",
          "surname": "Mackleden",
          "email": "gmackleden2@miibeian.gov.cn",
          "birthdate": "08/04/2021"
        },
        {
          "id": 4,
          "name": "Adrienne",
          "surname": "Spight",
          "email": "aspight3@senate.gov",
          "birthdate": "12/31/2021"
        },
        {
          "id": 38,
          "name": "Brian",
          "surname": "Digan",
          "email": "bdigan4@ftc.gov",
          "birthdate": "02/17/2022"
        },
        {
          "id": 23,
          "name": "Cully",
          "surname": "Deery",
          "email": "cdeery5@tinyurl.com",
          "birthdate": "06/03/2021"
        },
        {
          "id": 23,
          "name": "Jere",
          "surname": "Adams",
          "email": "jadams6@1688.com",
          "birthdate": "09/12/2021"
        },
        {
          "id": 20,
          "name": "Avery",
          "surname": "Petersen",
          "email": "apetersen7@ucla.edu",
          "birthdate": "10/05/2021"
        },
        {
          "id": 46,
          "name": "Deva",
          "surname": "Week",
          "email": "dweek8@yale.edu",
          "birthdate": "03/25/2021"
        },
        {
          "id": 57,
          "name": "Ray",
          "surname": "McKerley",
          "email": "rmckerley9@cbsnews.com",
          "birthdate": "08/31/2021"
        },
        {
          "id": 54,
          "name": "Tristan",
          "surname": "Crommett",
          "email": "tcrommetta@printfriendly.com",
          "birthdate": "06/28/2021"
        },
        {
          "id": 87,
          "name": "Cariotta",
          "surname": "Wrightson",
          "email": "cwrightsonb@tamu.edu",
          "birthdate": "02/22/2022"
        },
        {
          "id": 79,
          "name": "Britt",
          "surname": "Delnevo",
          "email": "bdelnevoc@reddit.com",
          "birthdate": "11/11/2021"
        },
        {
          "id": 97,
          "name": "Henri",
          "surname": "Cristofari",
          "email": "hcristofarid@sciencedirect.com",
          "birthdate": "09/28/2021"
        },
        {
          "id": 74,
          "name": "Jarid",
          "surname": "Rove",
          "email": "jrovee@w3.org",
          "birthdate": "06/01/2021"
        },
        {
          "id": 75,
          "name": "Ariel",
          "surname": "Milton-White",
          "email": "amiltonwhitef@sakura.ne.jp",
          "birthdate": "07/29/2021"
        },
        {
          "id": 49,
          "name": "Leslie",
          "surname": "Gascoigne",
          "email": "lgascoigneg@ca.gov",
          "birthdate": "07/26/2021"
        },
        {
          "id": 53,
          "name": "Karlene",
          "surname": "Seagrove",
          "email": "kseagroveh@storify.com",
          "birthdate": "09/04/2021"
        },
        {
          "id": 3,
          "name": "Nat",
          "surname": "Capel",
          "email": "ncapeli@phoca.cz",
          "birthdate": "11/16/2021"
        },
        {
          "id": 44,
          "name": "Alie",
          "surname": "Rizzillo",
          "email": "arizzilloj@cbslocal.com",
          "birthdate": "02/24/2022"
        },
        {
          "id": 81,
          "name": "Skell",
          "surname": "Bearsmore",
          "email": "sbearsmorek@4shared.com",
          "birthdate": "05/18/2021"
        },
        {
          "id": 29,
          "name": "Sharyl",
          "surname": "Kitt",
          "email": "skittl@cnn.com",
          "birthdate": "06/07/2021"
        },
        {
          "id": 54,
          "name": "Spencer",
          "surname": "Nicolson",
          "email": "snicolsonm@yahoo.com",
          "birthdate": "05/20/2021"
        },
        {
          "id": 52,
          "name": "Mead",
          "surname": "Dewick",
          "email": "mdewickn@uiuc.edu",
          "birthdate": "09/14/2021"
        },
        {
          "id": 5,
          "name": "Caddric",
          "surname": "Cashmore",
          "email": "ccashmoreo@upenn.edu",
          "birthdate": "08/30/2021"
        },
        {
          "id": 64,
          "name": "Ameline",
          "surname": "Rustan",
          "email": "arustanp@examiner.com",
          "birthdate": "05/07/2021"
        },
        {
          "id": 94,
          "name": "Fan",
          "surname": "Tippetts",
          "email": "ftippettsq@cmu.edu",
          "birthdate": "03/22/2021"
        },
        {
          "id": 78,
          "name": "Ailina",
          "surname": "Reichhardt",
          "email": "areichhardtr@zdnet.com",
          "birthdate": "02/07/2022"
        },
        {
          "id": 19,
          "name": "Isadore",
          "surname": "Curado",
          "email": "icurados@jigsy.com",
          "birthdate": "07/03/2021"
        },
        {
          "id": 81,
          "name": "Dorotea",
          "surname": "Udell",
          "email": "dudellt@indiegogo.com",
          "birthdate": "08/12/2021"
        },
        {
          "id": 90,
          "name": "Hammad",
          "surname": "Breche",
          "email": "hbrecheu@mediafire.com",
          "birthdate": "07/13/2021"
        },
        {
          "id": 92,
          "name": "Goraud",
          "surname": "Howsden",
          "email": "ghowsdenv@over-blog.com",
          "birthdate": "02/22/2022"
        },
        {
          "id": 27,
          "name": "Mathias",
          "surname": "Jaray",
          "email": "mjarayw@delicious.com",
          "birthdate": "01/13/2022"
        },
        {
          "id": 96,
          "name": "Collete",
          "surname": "Lillo",
          "email": "clillox@census.gov",
          "birthdate": "08/16/2021"
        },
        {
          "id": 83,
          "name": "Teodoro",
          "surname": "Havik",
          "email": "thaviky@cbslocal.com",
          "birthdate": "09/26/2021"
        },
        {
          "id": 71,
          "name": "Deloria",
          "surname": "Stroulger",
          "email": "dstroulgerz@webeden.co.uk",
          "birthdate": "06/02/2021"
        },
        {
          "id": 22,
          "name": "Lilith",
          "surname": "Keepin",
          "email": "lkeepin10@cnn.com",
          "birthdate": "08/23/2021"
        },
        {
          "id": 9,
          "name": "Isa",
          "surname": "Dubarry",
          "email": "idubarry11@noaa.gov",
          "birthdate": "01/07/2022"
        },
        {
          "id": 50,
          "name": "Felice",
          "surname": "Tilling",
          "email": "ftilling12@addtoany.com",
          "birthdate": "08/10/2021"
        },
        {
          "id": 62,
          "name": "Hershel",
          "surname": "Dey",
          "email": "hdey13@furl.net",
          "birthdate": "12/01/2021"
        },
        {
          "id": 73,
          "name": "Truda",
          "surname": "Headan",
          "email": "theadan14@harvard.edu",
          "birthdate": "01/06/2022"
        },
        {
          "id": 78,
          "name": "Michelina",
          "surname": "Rumbold",
          "email": "mrumbold15@yellowbook.com",
          "birthdate": "03/26/2021"
        },
        {
          "id": 57,
          "name": "Ricky",
          "surname": "Longhurst",
          "email": "rlonghurst16@google.com.hk",
          "birthdate": "07/28/2021"
        },
        {
          "id": 47,
          "name": "Welby",
          "surname": "Tuppeny",
          "email": "wtuppeny17@phpbb.com",
          "birthdate": "02/20/2022"
        },
        {
          "id": 55,
          "name": "Harlen",
          "surname": "Redington",
          "email": "hredington18@apple.com",
          "birthdate": "11/29/2021"
        },
        {
          "id": 48,
          "name": "Hank",
          "surname": "McTrustram",
          "email": "hmctrustram19@opensource.org",
          "birthdate": "11/21/2021"
        },
        {
          "id": 97,
          "name": "Marybelle",
          "surname": "Weatherburn",
          "email": "mweatherburn1a@prweb.com",
          "birthdate": "03/18/2021"
        },
        {
          "id": 48,
          "name": "Melisandra",
          "surname": "Grzegorecki",
          "email": "mgrzegorecki1b@pinterest.com",
          "birthdate": "07/20/2021"
        },
        {
          "id": 33,
          "name": "Hardy",
          "surname": "Redsall",
          "email": "hredsall1c@wikipedia.org",
          "birthdate": "02/07/2022"
        },
        {
          "id": 9,
          "name": "Obidiah",
          "surname": "Berrie",
          "email": "oberrie1d@google.com.hk",
          "birthdate": "10/15/2021"
        },
        {
          "id": 37,
          "name": "Michal",
          "surname": "Bingell",
          "email": "mbingell1e@yandex.ru",
          "birthdate": "02/28/2022"
        },
        {
          "id": 50,
          "name": "Rey",
          "surname": "Bengtsen",
          "email": "rbengtsen1f@drupal.org",
          "birthdate": "05/26/2021"
        },
        {
          "id": 10,
          "name": "Errol",
          "surname": "Cruikshank",
          "email": "ecruikshank1g@home.pl",
          "birthdate": "12/23/2021"
        },
        {
          "id": 40,
          "name": "Templeton",
          "surname": "Winscum",
          "email": "twinscum1h@about.com",
          "birthdate": "08/14/2021"
        },
        {
          "id": 73,
          "name": "Kelbee",
          "surname": "Gutman",
          "email": "kgutman1i@cisco.com",
          "birthdate": "07/27/2021"
        },
        {
          "id": 41,
          "name": "Carlotta",
          "surname": "Stagge",
          "email": "cstagge1j@geocities.com",
          "birthdate": "03/26/2021"
        },
        {
          "id": 77,
          "name": "Blayne",
          "surname": "Bartul",
          "email": "bbartul1k@plala.or.jp",
          "birthdate": "08/03/2021"
        },
        {
          "id": 32,
          "name": "Caresse",
          "surname": "Morey",
          "email": "cmorey1l@washingtonpost.com",
          "birthdate": "10/24/2021"
        },
        {
          "id": 91,
          "name": "Ami",
          "surname": "Berens",
          "email": "aberens1m@ucsd.edu",
          "birthdate": "01/15/2022"
        },
        {
          "id": 1,
          "name": "Glenden",
          "surname": "Ca",
          "email": "gca1n@constantcontact.com",
          "birthdate": "10/03/2021"
        },
        {
          "id": 45,
          "name": "Colleen",
          "surname": "Whieldon",
          "email": "cwhieldon1o@tumblr.com",
          "birthdate": "09/01/2021"
        },
        {
          "id": 26,
          "name": "Hewie",
          "surname": "Polle",
          "email": "hpolle1p@hao123.com",
          "birthdate": "05/04/2021"
        },
        {
          "id": 84,
          "name": "Mireielle",
          "surname": "Best",
          "email": "mbest1q@techcrunch.com",
          "birthdate": "03/12/2022"
        },
        {
          "id": 99,
          "name": "Marylynne",
          "surname": "Colloby",
          "email": "mcolloby1r@webmd.com",
          "birthdate": "01/27/2022"
        },
        {
          "id": 38,
          "name": "Illa",
          "surname": "Crisall",
          "email": "icrisall1s@reuters.com",
          "birthdate": "03/18/2021"
        },
        {
          "id": 12,
          "name": "Reynard",
          "surname": "Benettini",
          "email": "rbenettini1t@merriam-webster.com",
          "birthdate": "05/04/2021"
        },
        {
          "id": 92,
          "name": "Netta",
          "surname": "Parkhouse",
          "email": "nparkhouse1u@state.gov",
          "birthdate": "01/26/2022"
        },
        {
          "id": 13,
          "name": "Eddy",
          "surname": "Klossek",
          "email": "eklossek1v@slashdot.org",
          "birthdate": "10/27/2021"
        },
        {
          "id": 48,
          "name": "Kristos",
          "surname": "Dyos",
          "email": "kdyos1w@pbs.org",
          "birthdate": "08/20/2021"
        },
        {
          "id": 47,
          "name": "Tamarah",
          "surname": "Semper",
          "email": "tsemper1x@europa.eu",
          "birthdate": "11/28/2021"
        },
        {
          "id": 87,
          "name": "Udale",
          "surname": "Drinkwater",
          "email": "udrinkwater1y@hibu.com",
          "birthdate": "12/23/2021"
        },
        {
          "id": 72,
          "name": "Tobin",
          "surname": "Didball",
          "email": "tdidball1z@devhub.com",
          "birthdate": "08/19/2021"
        },
        {
          "id": 78,
          "name": "Jerry",
          "surname": "Neal",
          "email": "jneal20@dailymail.co.uk",
          "birthdate": "12/04/2021"
        },
        {
          "id": 27,
          "name": "Winne",
          "surname": "Prydden",
          "email": "wprydden21@redcross.org",
          "birthdate": "12/30/2021"
        },
        {
          "id": 5,
          "name": "Nikolos",
          "surname": "Prangley",
          "email": "nprangley22@aol.com",
          "birthdate": "06/13/2021"
        },
        {
          "id": 64,
          "name": "Brana",
          "surname": "Beahan",
          "email": "bbeahan23@devhub.com",
          "birthdate": "12/07/2021"
        },
        {
          "id": 20,
          "name": "Lavina",
          "surname": "Waterfield",
          "email": "lwaterfield24@state.gov",
          "birthdate": "08/26/2021"
        },
        {
          "id": 21,
          "name": "Elisabeth",
          "surname": "Bryer",
          "email": "ebryer25@ezinearticles.com",
          "birthdate": "05/29/2021"
        },
        {
          "id": 69,
          "name": "Juliette",
          "surname": "Fossick",
          "email": "jfossick26@tripadvisor.com",
          "birthdate": "05/20/2021"
        },
        {
          "id": 53,
          "name": "Zitella",
          "surname": "Rawdales",
          "email": "zrawdales27@cloudflare.com",
          "birthdate": "07/15/2021"
        },
        {
          "id": 34,
          "name": "Thea",
          "surname": "Folbig",
          "email": "tfolbig28@mayoclinic.com",
          "birthdate": "02/01/2022"
        },
        {
          "id": 92,
          "name": "Barde",
          "surname": "Castel",
          "email": "bcastel29@usatoday.com",
          "birthdate": "09/02/2021"
        },
        {
          "id": 88,
          "name": "Luelle",
          "surname": "Dearl",
          "email": "ldearl2a@un.org",
          "birthdate": "05/13/2021"
        },
        {
          "id": 94,
          "name": "Eldredge",
          "surname": "Casper",
          "email": "ecasper2b@rakuten.co.jp",
          "birthdate": "08/17/2021"
        },
        {
          "id": 52,
          "name": "Shaun",
          "surname": "Surtees",
          "email": "ssurtees2c@tiny.cc",
          "birthdate": "11/18/2021"
        },
        {
          "id": 89,
          "name": "Arabel",
          "surname": "Lory",
          "email": "alory2d@patch.com",
          "birthdate": "10/11/2021"
        },
        {
          "id": 1,
          "name": "Norbert",
          "surname": "Ortiga",
          "email": "nortiga2e@cocolog-nifty.com",
          "birthdate": "02/11/2022"
        },
        {
          "id": 75,
          "name": "Fanchette",
          "surname": "Harrinson",
          "email": "fharrinson2f@trellian.com",
          "birthdate": "12/20/2021"
        },
        {
          "id": 48,
          "name": "Indira",
          "surname": "Wintle",
          "email": "iwintle2g@networksolutions.com",
          "birthdate": "02/24/2022"
        },
        {
          "id": 78,
          "name": "Tessi",
          "surname": "Bloan",
          "email": "tbloan2h@microsoft.com",
          "birthdate": "10/08/2021"
        },
        {
          "id": 21,
          "name": "Dannie",
          "surname": "Oxenford",
          "email": "doxenford2i@toplist.cz",
          "birthdate": "03/17/2021"
        },
        {
          "id": 13,
          "name": "Ernesto",
          "surname": "Coffey",
          "email": "ecoffey2j@statcounter.com",
          "birthdate": "08/23/2021"
        },
        {
          "id": 97,
          "name": "Millicent",
          "surname": "Isherwood",
          "email": "misherwood2k@reverbnation.com",
          "birthdate": "03/26/2021"
        },
        {
          "id": 72,
          "name": "Audry",
          "surname": "Andrat",
          "email": "aandrat2l@toplist.cz",
          "birthdate": "11/19/2021"
        },
        {
          "id": 66,
          "name": "Beale",
          "surname": "Roscow",
          "email": "broscow2m@spotify.com",
          "birthdate": "05/19/2021"
        },
        {
          "id": 12,
          "name": "Micky",
          "surname": "Lindeman",
          "email": "mlindeman2n@angelfire.com",
          "birthdate": "01/22/2022"
        },
        {
          "id": 16,
          "name": "Aldus",
          "surname": "Askey",
          "email": "aaskey2o@posterous.com",
          "birthdate": "08/26/2021"
        },
        {
          "id": 19,
          "name": "Briggs",
          "surname": "Casaccio",
          "email": "bcasaccio2p@nydailynews.com",
          "birthdate": "06/17/2021"
        },
        {
          "id": 51,
          "name": "Neill",
          "surname": "Gray",
          "email": "ngray2q@netvibes.com",
          "birthdate": "12/10/2021"
        },
        {
          "id": 27,
          "name": "Julee",
          "surname": "Vasyukov",
          "email": "jvasyukov2r@cbsnews.com",
          "birthdate": "06/26/2021"
        }
      ]
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
    return {users,cars};
  }



  /*genId(users: UsersModel[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }*/
}
