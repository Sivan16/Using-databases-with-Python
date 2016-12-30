myData = [
[50.0676785,19.9070824, 'Dormitory no. 14 "Kapitol" of AGH University of Science and Technology in Cracov, Poland, Witolda Budryka 2, 30-072 Kraków, Poland'],
[52.2296756,21.0122287, 'Warsaw, Poland'],
[30.0068972,31.5005988, 'American University Housing District, Cairo Governorate, Egypt'],
[33.4232051,-111.8879509, 'State Ave, Tempe, AZ 85281, USA'],
[33.9094658,-83.4604372, 'Information Technology Services, 2500 Daniels Bridge Rd, Athens, GA 30606, USA'],
[28.3580163,75.5887989, 'BITS, Pilani, Rajasthan 333031, India'],
[43.1294077,-77.5479304, 'Babcock Dr, Rochester, NY 14610, USA'],
[25.2685304,82.9904737, 'Banaras Hindu University Campus, Varanasi, Uttar Pradesh, India'],
[12.9426914,77.5053145, 'Bangalore University Rd, Bengaluru, Karnataka 560056, India'],
[64.8852156,-147.8009743, 'Baylor Blvd, Fairbanks, AK 99709, USA'],
[39.9304437,116.3076925, 'Capital Normal University, Haidian, Beijing, China, 100037'],
[53.8931837,27.547338, 'Monument to Fallen Professors and Students of the Belarusian State University, Minsk, Belarus'],
[33.0430635,-96.7254958, 'Belgrade Dr, Plano, TX 75023, USA'],
[42.5030209,-89.0295642, 'College St, Beloit, WI 53511, USA'],
[53.8931837,27.547338, 'Monument to Fallen Professors and Students of the Belarusian State University, Minsk, Belarus'],
[32.0184325,34.738834, 'Derech Ben Gurion, Bat Yam, Israel'],
[10.6779821,78.7379529, 'Bharathidasan University Bus Stop, Mathur, Mandaiyur, Tamil Nadu 620024, India'],
[42.3400834,-71.1669754, 'Boston College, Boston, MA 02467, USA'],
[35.2827524,-120.6596156, 'San Luis Obispo, CA, USA'],
[34.1515641,-117.3354402, 'N State St, San Bernardino, CA, USA'],
[30.5491798,-96.2980214, 'Westminster, College Station, TX 77845, USA'],
[33.6520436,-117.8286548, 'Columbia, Irvine, CA 92612, USA'],
[52.0742111,-0.6300115, 'Cranfield University Bldg, 45 College Rd, Cranfield, Bedford, Central Bedfordshire MK43 0AL, UK'],
[50.0755381,14.4378005, 'Prague, Czech Republic'],
[41.6130323,-70.9704787, 'Dartmouth, MA, USA'],
[37.319538,-122.0433207, 'Campus Dr, Cupertino, CA 95014, USA'],
[51.3670777,7.4632841, 'Hagen, Germany'],
[48.464717,35.046183, 'Dnepropetrovsk, Dnipropetrovsk Oblast, Ukraine'],
[38.4794593,-94.6085663, 'Drexel, MO, USA'],
[30.267153,-97.7430608, 'Austin, TX, USA'],
[41.9197689,-91.649501, 'Duke St SW, Cedar Rapids, IA 52404, USA'],
[50.862282,-2.4998561, 'E M Mitchell & Sons, Hermitage, Dorchester, Dorset DT2 7BB, UK'],
[48.8635276,2.3272053, 'Allée Centrale, 75001 Paris, France'],
[36.0982762,-79.5115433, 'Elon, NC, USA'],
[55.4883363,8.4468283, 'Business Academy South West, Spangsbjerg Kirkevej, 6700 Esbjerg, Denmark'],
[-2.3256889,-80.8535199, 'Escuela Superior Politécnica del Litoral (ESPOL), Ancón, Ecuador'],
[51.1877226,6.7938734, 'Fachhochschule Düsseldorf, 40225 Düsseldorf, Germany'],
[47.80949,13.05501, 'Salzburg, Austria'],
[45.2671352,19.8335496, 'Novi Sad, Serbia'],
[40.755915,-73.42743, 'State University / Farmingdale, Melville, NY 11735, USA'],
[30.3135522,-81.6004765, 'Atlantic University Cir, Jacksonville, FL 32207, USA'],
[39.9678929,-82.9829416, 'Elijah Pierce Ave, Columbus, OH 43203, USA'],
[26.1529683,91.6639235, 'Gauhati University, Jalukbari, Guwahati, Assam, India'],
[38.83419,-77.307587, 'George Mason University, Braddock, VA 22030, USA'],
[38.0529062,-78.5096431, 'Law School (David A. Harrison III Law Grounds), Charlottesville, VA 22901, USA'],
[32.5297685,-83.90536, 'State University Dr, Fort Valley, GA 31030, USA'],
[42.9097484,-85.7630885, 'Grandville, MI, USA'],
[50.778044,6.060226, 'Research Group Software Construction - RWTH Aachen University, Ahornstraße 55, 52074 Aachen, Germany'],
[31.779299,35.197143, 'The Hebrew University, Jerusalem'],
[17.4447918,78.3483098, 'IIIT, Gachibowli, Hyderabad, Telangana 500032, India'],
[26.5203418,80.2324799, 'IIT Kanpur Air Strip, Nankari, Kalyanpur, Kanpur, Uttar Pradesh 208016, India'],
[59.3954789,24.6643169, 'IT College, 12616 Tallinn, Estonia'],
[65.3174411,25.3734596, '91100 Ii, Finland'],
[45.4381291,12.3253617, 'Università Iuav di Venezia Palazzo Badoer, 30125 Venezia, Italy'],
[41.8313959,-87.6272312, 'Iit Tower, Chicago, IL 60616, USA'],
[40.6331249,-89.3985283, 'Illinois, USA'],
[12.9914929,80.2336907, 'Indian Institute Of Technology, Chennai, Tamil Nadu, India'],
[22.320423,87.309422, 'AIESEC IIT Kharagpur, Indian Institute of Technology Kharagpur, IIT Kharagpur, Kharagpur, West Bengal 721302, India'],
[23.7956531,86.4303859, 'Dhanbad, Jharkhand, India'],
[39.1670467,-86.5269373, 'Indiana University, Bloomington, IN 47405, USA'],
[39.174335,-86.505469, 'Hilltop Garden and Nature Center at Indiana University, 2367 E 10th St, Bloomington, IN 47408, USA'],
[26.7391812,-11.6646723, 'Institut Supérieur de Technologie, Samara 72000'],
[43.8612402,125.3207967, 'Changchun Institute of Technology Modern Business Centre, Guilin Road, Chaoyang, Changchun, Jilin, China, 130021'],
[17.9972951,-94.5625527, 'Instituto Tecnológico, Minatitlán, Ver., Mexico'],
[17.385044,78.486671, 'Hyderabad, Telangana, India'],
[52.2869741,104.3050183, 'Irkutsk, Irkutsk Oblast, Russia'],
[22.4828735,88.394867, 'Jadavpur University Lake, Sahid Smirity Colony, Pancha Sayar, Kolkata, West Bengal 700094'],
[17.4930263,78.3906218, 'Jawaharlal Nehru Technological University, Kukatpally, Hyderabad, Telangana, India'],
[28.543087,77.1658378, 'Jawaharlal Nehru University, New Delhi, Delhi, India'],
[22.3404614,114.2607123, 'Hong Kong University Of Science And Technology Staff Quarters House Block 8, Clear Water Bay, Hong Kong'],
[39.439999,-91.5978512, 'Rte K, Missouri, USA'],
[46.3339075,17.4542123, 'Kutas, Hungary'],
[42.2555542,-85.6407559, 'College Cir, Kalamazoo, MI 49008, USA'],
[54.8985207,23.9035965, 'Kaunas, Lithuania'],
[54.8985207,23.9035965, 'Kaunas, Lithuania'],
[55.8304307,49.0660806, 'Kazan, Tatarstan, Russia'],
[41.152199,-81.415802, 'Kent State University Airport, 4020 Kent Rd, Stow, OH 44224, USA'],
[49.9935,36.230383, 'Kharkiv, Kharkiv Oblast, Ukraine'],
[13.7164911,100.4874338, 'Thon Buri, Bangkok, Thailand'],
[53.2948229,69.4047872, 'Kokshetau 020000, Kazakhstan'],
[50.4501,30.5234, 'Kiev, Ukraine'],
[46.4619251,-80.9664623, 'University Laurentian, Copper Cliff, ON P0M 1N0, Canada'],
[-32.9443117,-60.6956338, 'Alvarado, Rosario, Santa Fe, Argentina'],
[49.839683,24.029717, 'Lviv, Lviv Oblast, Ukraine'],
[10.6578666,78.7451667, 'University Rd, Mandaiyur, Tamil Nadu 620024, India'],
[53.4129429,59.0016233, 'Magnitogorsk, Chelyabinsk Oblast, Russia'],
[34.3020001,48.8145943, 'Malayer, Hamedan, Iran'],
[64.859787,-147.7224427, 'Marietta Ave, Fairbanks, AK 99701, USA'],
[24.4337071,54.6178356, 'Masdar Institute PRT Station - Abu Dhabi - United Arab Emirates'],
[44.786568,20.4489216, 'Belgrade, Serbia'],
[42.726655,-84.46993, 'Michigan State University, East Lansing, MI 48823, USA'],
[39.8729896,116.4796427, 'Beijing University of Technology the Science Building, Chaoyang, Beijing, China, 100124'],
[-35.4158638,149.0897893, 'Monash ACT 2904, Australia'],
[-37.914517,145.1303881, 'Monash College, Wellington Rd, Clayton VIC 3168, Australia'],
[-38.3105571,146.4292232, 'Monash University Gippsland Student Lounge, 7N Mary Grant Bruce Dr, Churchill VIC 3842, Australia'],
[25.6866142,-100.3161126, 'Monterrey, N.L., Mexico'],
[55.755826,37.6173, 'Moscow, Russia'],
[55.755826,37.6173, 'Moscow, Russia'],
[55.7066609,37.5169664, 'Lomonosov Moscow State University, MSU Institute of Mechanics, Michurinskiy pr., 1, Moskva, Russia, 119192'],
[22.2557869,84.9125553, 'NIT Backpost, Sector 1, Rourkela, Odisha 769008, India'],
[35.712815,135.9711705, 'Nyu, Mihama, Mikata District, Fukui Prefecture 919-1201, Japan'],
[21.1470404,79.0397862, 'Nagpur University Campus, Nagpur, Maharashtra 440033, India'],
[31.204638,121.5853839, 'Nanyang Technological University Shanghai Office, Pudong, Shanghai, China, 201203'],
[31.3260152,75.5761829, 'Jalandhar, Punjab, India'],
[16.4226352,120.5906046, 'National Baguio University, Bokawkan, Baguio, Benguet, Philippines'],
[28.0530332,-82.4553299, 'N Central Ave, Tampa, FL, USA'],
[42.340075,-71.0895367, 'Northeastern, Boston, MA 02115, USA'],
[15.9447035,120.5815111, 'Lyceum NorthWestern University, Urdaneta City, Pangasinan, Philippines'],
[55.1170375,36.5970818, 'Obninsk, Kaluga Oblast, Russia'],
[36.8838958,-76.3040214, 'Old Dominion University, 5115 Hampton Blvd, Norfolk, VA 23508, USA'],
[42.254429,-121.785164, 'Oregon Institute of Technology, Klamath Falls, OR 97601, USA'],
[19.4478319,-70.6832457, 'Tanque PUCMM, Santiago De Los Caballeros 51000, Dominican Republic'],
[40.7933949,-77.8600012, 'State College, PA, USA'],
[45.4723536,9.1964496, 'Via del Vecchio Politecnico, 20121 Milano, Italy'],
[44.4267674,26.1025384, 'Bucharest, Romania'],
[12.0263438,79.8492812, 'Pondicherry University, Kalapet, Puducherry 605014, India'],
[-33.0444219,-71.6066334, 'Pontificia Universidad Catolica De Valparaiso - Gimpert, Valparaíso, Valparaíso, Región de Valparaíso, Chile'],
[45.513099,-122.6885447, 'Portland State University Community Garden, SW 12th Ave, Portland, OR 97201, USA'],
[39.9673126,-86.0577399, 'Lynwood Farm Purdue University, Carmel, IN 46033, USA'],
[26.3462258,43.7633239, 'College of Engineering, 419, Buraydah 52571, Saudi Arabia'],
[18.9331831,72.8341894, 'KP Shethi Building, Janmabhoomi Marg, Kala Ghoda, Fort, Mumbai, Maharashtra 400001, India'],
[41.1228928,-74.0865966, 'College Rd, Monsey, NY 10952, USA'],
[43.0800758,-77.6737734, 'Rochester Institute of Technology, Rochester, NY 14623, USA'],
[10.7295115,79.0196067, 'Sastra University Road, Tirumalaisamudram, Tamil Nadu 613401, India'],
[27.7518284,-82.6267345, 'St Petersburg, FL, USA'],
[27.7518284,-82.6267345, 'St Petersburg, FL, USA'],
[27.7518284,-82.6267345, 'St Petersburg, FL, USA'],
[37.7634766,-122.4390923, 'States St, San Francisco, CA 94114, USA'],
[37.3229926,-121.8832, 'State St, San Jose, CA 95110, USA'],
[31.1790057,121.4219573, 'Shanghai Sixth Peoples Hospital Affiliated to Shanghai Jiao Tong University In-patient Department, Xuhui, Shanghai, China, 200231'],
[35.7569204,51.3277804, 'Tehran, Tehran, Moradi Alley, Pounak Dormitory (Affl. Sharif University of Technology), Iran'],
[28.6379654,-106.094602, 'Simon Bolívar, Chihuahua, Chih., Mexico'],
[52.124815,-106.589195, 'Simon Fraser Crescent, Saskatoon, SK S7H, Canada'],
[54.7903112,32.0503663, 'Smolensk, Smolensk Oblast, Russia'],
[38.3380748,-122.6750043, 'Sonoma State University, California 94928, USA'],
[39.6726798,-105.0250535, 'S Federal Blvd, Denver, CO, USA'],
[37.424106,-122.1660756, 'Stanford, CA, USA'],
[43.4553461,-76.5104973, 'Oswego, NY, USA'],
[-33.8812733,18.6264694, 'Stellenbosch University, Cape Town, 7530, South Africa'],
[42.0594537,-71.0819465, 'Stonehill College Rd, Easton, MA, USA'],
[59.393847,24.6650872, 'Tallinn University of Technology Stadium, 12616 Tallinn, Estonia'],
[59.393847,24.6650872, 'Tallinn University of Technology Stadium, 12616 Tallinn, Estonia'],
[61.4981508,23.7610254, '33100 Tampere, Finland'],
[30.0564126,31.2102065, 'Tanta, Al Agouzah, Giza Governorate, Egypt'],
[32.666739,-97.28993, 'Tarrant County College, Fort Worth, TX 76119, USA'],
[46.7712101,23.6236353, 'Cluj-Napoca, Romania'],
[32.778949,35.019648, 'Technion/ Sports Building, Haifa'],
[32.1036377,34.8046418, 'Tel Aviv - University, Tel Aviv-Yafo'],
[31.771177,35.194163, 'J-M college of Engineering, Jerusalem'],
[53.4751017,-2.2353695, 'University of Manchester, 72 Sackville St, Manchester, Manchester M1 3NJ, UK'],
[-33.9592646,18.4607236, 'University Ave S, Rondebosch, Cape Town, 7700, South Africa'],
[38.0269358,-84.5059723, 'University Dr, Lexington, KY, USA'],
[42.4036847,-71.120482, 'South Hall Tufts University, 30 Lower Campus Rd, Somerville, MA 02144, USA'],
[37.8764984,-122.2804342, 'California St, Berkeley, CA, USA'],
[40.5382913,-78.3528584, 'Ucla Ln, Altoona, PA 16602, USA'],
[32.8866612,-117.2413398, 'UC San Diego School of Management, La Jolla, CA 92093, USA'],
[40.110833,-88.226944, 'UIUC Engineering Hall, Urbana, IL 61801, USA'],
[-34.9221963,138.5922272, 'Yungondi Building, North Terrace, Adelaide SA 5000, Australia'],
[-34.4414891,-58.7595663, 'Universidad de Buenos Aires, Manuel Alberti, Buenos Aires, Argentina'],
[40.7127837,-74.0059413, 'New York, NY, USA'],
[46.4062583,8.9040484, 'Usc, 6749, Switzerland'],
[43.0447617,-89.4245627, 'University of Wisconsin-Madison Arboretum, 1207 Seminole Hwy, Madison, WI 53711, USA'],
[18.4074917,-66.062465, 'Ave Central, San Juan, San Juan, Puerto Rico'],
[40.4469796,-3.7278167, 'Av. Complutense, Madrid, Madrid, Spain'],
[4.7500846,-74.032709, 'Universidad Cooperativa de Colombia Bloque 31, Bogotá, Colombia'],
[19.3188895,-99.1843676, 'National Autonomous University of Mexico, Mexico City, Federal District, Mexico'],
[10.1345309,-85.4467445, 'Universidad Nacional, 150, Nicoya, Costa Rica'],
[-4.009976,-79.2085378, 'Colombia, Loja, Ecuador'],
[20.5898607,-100.3751526, 'Bolivia, Plaza de las Americas, 76048 Santiago de Querétaro, Qro., Mexico'],
[-34.4414891,-58.7595663, 'Universidad de Buenos Aires, Manuel Alberti, Buenos Aires, Argentina'],
[40.480453,-3.3638513, 'Universidad, 28801 Alcalá de Henares, Madrid, Spain'],
[3.4321247,-76.5461709, 'Parqueadero Universidad Del Valle, Cali, Cali, Valle del Cauca, Colombia'],
[19.0303192,-98.1903344, 'Universidad de Oriente, Avenida 21 Oriente 1816, Zona Sin Asignación de Nombre de Col 39, Azcarate, Puebla, Pue., Mexico'],
[14.6360021,-90.5095397, 'Bufete Popular Universidad de San Carlos, Guatemala City, Guatemala'],
[41.6518587,-4.7215284, 'Universidad, 47002 Valladolid, Valladolid, Spain'],
[4.8602595,-74.0333032, 'Universidad De La Sabana, Chía, Chía, Cundinamarca, Colombia'],
[22.2567635,-97.8345654, 'Guatemala, Cd Madero, Tamps., Mexico'],
[-6.7515086,-35.6437193, 'Universidade Federal da Paraíba - CAVN - R. Santos Dumont, Bananeiras - PB, 58220-000, Brazil'],
[19.3490169,-99.1991009, 'Calz Sta Catarina, Ciudad de México, D.F., Mexico'],
[-30.0699518,-51.118329, 'Ac. Universidade Federal do Rio Grande do Sul, Porto Alegre - RS, Brazil'],
[-22.8626877,-43.2258954, 'Cidade Universitária, Rio de Janeiro - State of Rio de Janeiro, Brazil'],
[38.7139308,-9.1971988, 'Av. Universidade Técnica, Lisboa, Portugal'],
[41.557583,-8.397568, 'Universidade do Minho, 4710 Braga, Portugal'],
[-7.771949,110.374874, 'Pusat Studi Keamanan dan Perdamaian Universitas Gadjah Mada (PSKP UGM), Sinduadi, Mlati, Sleman Regency 55281, Indonesia'],
[39.4813156,-0.3505, 'Universitat Politècnica, 46022 Valencia, Valencia, Spain'],
[50.4079951,4.4482526, 'Université Catholique de Louvain ET. DUTIL. PUB, 6000 Charleroi, Belgium'],
[53.3053439,-6.220654, 'Ucd Post Office, University College Dublin, Stillorgan Rd, Belfield, Dublin 4, Ireland'],
[48.15038,11.5831501, 'Munich Center for Dispute Resolution, Veterinärstraße 5, 80539 München, Germany'],
[41.0757602,-81.5113878, 'University of Akron, Akron, OH, USA'],
[33.428283,-111.750401, 'N Alberta, Mesa, AZ 85205, USA'],
[14.6311122,121.0925464, 'Amsterdam, Marikina, Metro Manila, Philippines'],
[35.4747303,-93.4673475, 'University, Clarksville, AR 72830, USA'],
[33.6813785,-117.8207916, 'Athens, Irvine, CA 92614, USA'],
[33.0430635,-96.7254958, 'Belgrade Dr, Plano, TX 75023, USA'],
[32.485186,-99.7334839, 'Birmingham, Abilene, TX 79601, USA'],
[42.3423603,-7.8552788, 'Av. Buenos Aires, 32004 Ourense, Orense, Spain'],
[52.2016671,0.1177882, 'University Of Cambridge, Cambridge, Cambridge, Cambridgeshire CB2, UK'],
[35.2436124,-97.4164768, 'Central Pkwy, Norman, OK 73071, USA'],
[28.0282578,-82.3924269, 'Chicago Ave, Temple Terrace, FL 33617, USA'],
[31.7801651,-106.4981503, 'Cincinnati Ave, El Paso, TX 79902, USA'],
[40.0082221,-105.2591119, 'Colorado Ave & University Heights, Boulder, CO 80302, USA'],
[14.6007987,121.0511111, 'Connecticut, San Juan, Metro Manila, Philippines'],
[28.6450197,-106.1127292, 'Dallas, Campestre III Etapa, 31213 Chihuahua, Chih., Mexico'],
[47.5584793,21.620443, 'Debrecen, Debrecen University-Botanical Garden, 4032 Hungary'],
[33.7105331,-117.7759092, 'Delaware, Irvine, CA 92620, USA'],
[49.5737593,11.0273891, 'Friedrich Alexander University of Erlangen Nuremberg - Informatik, Martensstraße, 91058 Erlangen, Germany'],
[44.9715569,-93.231866, 'Essex St SE, Minneapolis, MN 55455, USA'],
[51.8887362,-8.4947274, 'Evora, Magazine Rd, Coolgarten Park, Cork, Ireland'],
[28.0735403,-82.4373589, 'University, FL, USA'],
[57.6954209,11.9853213, 'Gothenburg University Library, Renströmsgatan 4, 412 55 Göteborg, Sweden'],
[54.0865463,13.3923414, 'Greifswald, Germany'],
[32.8831914,-117.24534, 'Hamburg Square, La Jolla, CA 92037, USA'],
[33.4229288,-111.8883942, 'Hawaii, Tempe, AZ 85281, USA'],
[32.083852,34.79197, 'Helsinki St, Tel Aviv-Yafo, Israel'],
[8.5080482,4.5849938, 'Kwara State University, Ilorin, Nigeria'],
[9.7297203,79.9482992, 'Jaffna College, AB21, Sri Lanka'],
[38.8991444,-94.7254893, 'University Of Kansas, Overland Park, KS 66213, USA'],
[10.0440105,76.3252442, 'University Road, Ernakulam, Kerala, India'],
[51.5266171,-0.1260773, 'University Of London, 1-11 Cartwright Gardens, Kings Cross, London WC1H 9EB, UK'],
[33.6784104,-117.814595, 'Malaga, Irvine, CA 92614, USA'],
[14.6349377,121.0560147, 'Malaya, Diliman, Lungsod Quezon, Kalakhang Maynila, Philippines'],
[53.4751017,-2.2353695, 'University of Manchester, 72 Sackville St, Manchester, Manchester M1 3NJ, UK'],
[42.2783714,-83.7371794, 'University of Michigan, Ann Arbor, MI, USA']
];
