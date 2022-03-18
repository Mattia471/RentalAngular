import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {MyArray} from "../configCustom/table/config";

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
    ;
    return {users};
  }



  genId(users: MyArray[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
