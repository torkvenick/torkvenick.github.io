export interface Breed {
  dog: string;
  imgs: string[];
  dogs?: string[];
  isChosen?: boolean;
}

export enum DogName {
  lhasaApso = 'lhasa apso',
  cavalierKingCharlesSpaniel = 'cavalier king charles spaniel',
  keeshond = 'keeshond',
  keesduitseStaandeLanghaarHond = 'keesduitse staande langhaar hond',
  labradorRetriever = 'labrador retriever',
  leeuwhondje = 'leeuwhondje',
  kerryBlueTerrier = 'kerry blue terrier',
  ierseSetter = 'ierse setter',
  akitaInu = 'akita inu',
  ijslandseHond = 'ijslandse hond',
  dandyDinmontTerrier = 'dandy dinmont terrier',
  curlyCoatedRetriever = 'curly coated retriever',
  leonberger = 'leonberger',
  laekenseHerder = 'laekense herder',
  ierseWolfshond = 'ierse wolfshond',
  borderTerrier = 'border terrier',
  lakelandTerrier = 'lakeland terrier',
  landseer = 'landseer',
  lagottoRomagnolo = 'lagotto romagnolo',
  ierseWaterspaniel = 'ierse waterspaniel',
  chihuahua = 'chihuahua',
  amerikaanseCockerSpaniel = 'amerikaanse cocker spaniel',
  borderCollie = 'border collie',
  griffonKorthals = 'griffon korthals',
  shibaInu = 'shiba inu',
  chesapeakBayRetriever = 'chesapeak bay retriever',
  novaScotiaDuckTollingRetriever = 'nova scotia duck tolling retriever',
  australianCattleDog = 'australian cattle dog',
  anatolischeHerdershond = 'anatolische herdershond',
  americanAkita = 'american akita',
  foxterrierDraadhaar = 'foxterrier draadhaar',
  bosanskiOstrodlakiGonicBarak = 'bosanski ostrodlaki gonic barak',
  westHighlandWhiteTerrier = 'west highland white terrier',
  epagneulBreton = 'epagneul breton',
  shetlandSheepdog = 'shetland sheepdog',
  finseSpits = 'finse spits',
  bolognezer = 'bolognezer',
  russischeTerrier = 'russische terrier',
  bouvierDesArdenne = 'bouvier des ardenne',
  epagneulNainContinentalPapillon = 'epagneul nain continental papillon',
  ruwharigeTeckel = 'ruwharige teckel',
  imaalTerrierOfIerseGlen = 'imaal terrier of ierse glen',
  welshCorgiPembroke = 'welsh corgi pembroke',
  hrvatski = 'hrvatski',
  bedlingtonTerrier = 'bedlington terrier',
  ierseTerrier = 'ierse terrier',
  duitseStaandeDraadhaar = 'duitse staande draadhaar',
  langharigeSintBernard = 'langharige sint bernard',
  hovawart = 'hovawart',
  japanseChinSpaniel = 'japanse chin spaniel',
  griffonBoulet = 'griffon boulet',
  beardedCollie = 'bearded collie',
  russischeToyTerrier = 'russische toy terrier',
  ceskyTerrier = 'cesky terrier',
  riesenSchnauzer = 'riesen schnauzer',
  afghaanseWindhond = 'afghaanse windhond',
  schotseHerdershond = 'schotse herdershond',
  kromfohrlander = 'kromfohrlander',
  hollandseSmoushond = 'hollandse smoushond',
  petitBrabancon = 'petit brabancon',
  bergamasco = 'bergamasco',
  norwichTerrier = 'norwich terrier',
  flatcoatedRetriever = 'flatcoated retriever',
  newfoundlander = 'newfoundlander',
  griffonNivernais = 'griffon nivernais',
  frieseStabij = 'friese stabij',
  yorkshireTerrier = 'yorkshire terrier',
  deerhound = 'deerhound',
  epagneulNainContinentalPhalene = 'epagneul nain continental phalene',
  drentsePatrijshond = 'drentse patrijshond',
  elkhound = 'elkhound',
  tervuerenseHerder = 'tervuerense herder',
  cotonDeTulear = 'coton de tulear',
  pekingees = 'pekingees',
  parsonRussellTerrier = 'parson russell terrier',
  bouvierDesFlandres = 'bouvier des flandres',
  americanIndianDog = 'american indian dog',
  clumberSpaniel = 'clumber spaniel',
  whiteSwissShepherdDog = 'white swiss shepherd dog',
  steirischeRauhhaarBracke = 'steirische rauhhaar bracke',
  grandBassetGriffonVendéen = 'grand basset griffon vendéen',
  silkyTerrier = 'silky terrier',
  finseLappenhond = 'finse lappenhond',
  groenendaeler = 'groenendaeler',
  bassetFauveDeBretagne = 'basset fauve de bretagne',
  perroDeAguaEspañol = 'perro de agua español',
  markiesje = 'markiesje',
  australianShepherd = 'australian shepherd',
  zuidRussischeOwcharka = 'zuid russische owcharka',
  tibetaanseSpaniel = 'tibetaanse spaniel',
  havanezer = 'havanezer',
  australianTerrier = 'australian terrier',
  duitseWachtelhond = 'duitse wachtelhond',
  bernerSennenhond = 'berner sennenhond',
  otterhound = 'otterhound',
  gordenSetter = 'gorden setter',
  picardischeHerder = 'picardische herder',
  bichonPoilFrise = 'bichon poil frise',
  sussexSpaniel = 'sussex spaniel',
  engelseToyTerriër = 'engelse toy terriër',
  griffonBleuDeGascogne = 'griffon bleu de gascogne',
  samojeed = 'samojeed',
  dwergPoedel = 'dwerg poedel',
  pomeranian = 'pomeranian',
  fieldSpaniel = 'field spaniel',
  duitseHerder = 'duitse herder',
  shihTzu = 'shih-tzu',
  kuvasz = 'kuvasz',
  mopshond = 'mopshond',
  barbet = 'barbet',
  skyeTerrier = 'skye terrier',
  affenPinscher = 'affen pinscher',
  schapendoes = 'schapendoes',
  alaskaMalamute = 'alaska malamute',
  norfolkterrier = 'norfolk Terrier',
  hollandseHerder = 'hollandse herder',
  airdaleTerrier = 'airdale terrier',
  engelseSpringerSpaniel = 'engelse springer spaniel',
  schotseTerrier = 'schotse terrier',
  goldenRetriever = 'golden retriever',
  spinoneItaliano = 'spinone italiano',
  maltezer = 'maltezer',
  scottishDeerhound = 'scottish deerhound',
  weimaranerLangharige = 'weimaraner langharige',
  chow = 'chow',
  mudiHongaarseHerdershond = 'mudi hongaarse herdershond',
  saarlooswolfhond = 'saarlooswolfhond',
  zweedseLappenhond = 'zweedse lappenhond',
  volpinoItaliano = 'volpino italiano',
  hokkaido = 'hokkaido',
  engelseCockerSpaniel = 'engelse cocker spaniel',
  witteDwergschnauzer = 'witte dwergschnauzer',
  welshSpringerSpaniel = 'welsh springer spaniel',
  barsoi = 'barsoi',
  duitseJachtTerrier = 'duitse jacht terrier',
  cairnTerrier = 'cairn terrier',
  langharigeDwergTeckel = 'langharige dwerg teckel',
  welshTerrier = 'welsh terrier',
  rhodesianRidgeback = 'rhodesian ridgeback',
  caoDaSerraDeAires = 'cao da serra de aires',
  tornjak = 'tornjak',
  americanStafford = 'american stafford',
  briard = 'briard',
  mechelseHerdershond = 'mechelse herdershond',
  caoDeSerraDeEstrella = 'cao de serra de estrella',
  bassetArtesiaNormandie = 'basset artesian normandie',
  portugeseWaterhond = 'portugese waterhond',
  komondor = 'komondor',
  engelseShepherd = 'engelse shepherd',
  groenlandseHond = 'groenlandse hond',
  engelseSetter = 'engelse setter',
  welshCorgiGardigan = 'welsh corgi gardigan',
  tibetaanseMastiff = 'tibetaanse mastiff',
  nizinny = 'nizinny',
  kooikerhondje = 'kooikerhondje',
  epagneulPicardie = 'epagneul picardie',
  wetterhound = 'wetterhound',
  viszlaDraadhaar = 'viszla draadhaar',
  oldEnglishSheepdog = 'old english sheepdog',
  schipperke = 'schipperke',
}

export const Breeds: Breed[] = [
  {
    dog: DogName.lhasaApso,
    imgs: [
      'https://dogsbestlife.com/wp-content/uploads/2021/03/lhasa-apso-scaled.jpeg',
      'https://www2.zoolyx.be/wp-content/uploads/2018/11/lhasa_apso-scaled.jpg',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_original/public/2021-02/BREED%20Hero%20Desktop_0074_lhasa_apso.webp?itok=fK9lY6js',
    ],
  },
  {
    dog: DogName.cavalierKingCharlesSpaniel,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0143_king_charles_spaniel2.jpg?itok=m-c0cnSF',
      'https://s3.eu-central-1.amazonaws.com/hund-gewicht/dog/8901252528/613f5a23e535b874000522.jpg',
      'https://img.pixers.pics/pho_wat(s3:700/FO/23/42/06/50/700_FO23420650_f7f0f777b546090e6e7e11d97fe6ca63.jpg,611,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,391,650,jpg)/fotobehang-cavalier-king-charles-spaniel-5-jaar-oud.jpg.jpg',
    ],
  },
  {
    dog: DogName.keeshond,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0110_german_spitz_klein.jpg?itok=CAyhoHOY',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Keeshond_Majic_standing_cropped.jpg/800px-Keeshond_Majic_standing_cropped.jpg',
      'https://assets.bazoeki.com/eyJidWNrZXQiOiJhc3NldHMuYmF6b2VraS5jb20iLCJrZXkiOiJhc3NldHMvaW1nL2hlYWRlci1kb2ctaW1hZ2VzL2tlZXNob25kLnBuZyIsImVkaXRzIjp7InBuZyI6eyJxdWFsaXR5IjoxMDAsInByb2dyZXNzaXZlIjpmYWxzZX0sInJlc2l6ZSI6eyJ3aWR0aCI6NTQwLCJmaXQiOiJjb3ZlciJ9LCJzaGFycGVuIjp0cnVlfX0=',
    ],
  },
  {
    dog: DogName.keesduitseStaandeLanghaarHond,
    imgs: [
      'https://www.puppytest.nl/media/zjqlunxm/duitse-staande-langhaar.jpg',
      'https://static.wixstatic.com/media/e1c7cd_206c94f6ad8940649890a41f2a417d38~mv2_d_1426_1920_s_2.jpg/v1/fill/w_550,h_748,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/75264775_721204231692576_120653381183628.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-7/duitse-staande-langhaar/glp-ou-0099.jpg',
    ],
  },
  {
    dog: DogName.labradorRetriever,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0040_retriever_labrador.jpg?itok=NvwfmeXF',
      'https://www.omlet.nl/images/cache/438/512/Dog-Labrador_Retriever-A_healthy_adult_Labrador_sitting%2C_waiting_for_some_attention_from_it%27s_owner.jpg',
      'https://t2.ea.ltmcdn.com/en/razas/0/0/1/labrador-retriever_100_0_600.jpg',
    ],
  },
  {
    dog: DogName.leeuwhondje,
    imgs: [
      'https://www.hondencentrum.com/images/og-thumbnail/Leeuwhondje2.jpg',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Lowchen%20%28Little%20Lion%20Dog%291.jpg?itok=Y9x8mZ2Z',
      'https://gekop.com/wp-content/uploads/2014/02/1295-Honden-shutterstock-Leeuwhondje.jpg',
    ],
  },
  {
    dog: DogName.kerryBlueTerrier,
    imgs: [
      'https://www.nieuwehond.nl/wp-content/uploads/2016/09/kerry-blue-terrier-Depositphotos_33407753_S-1200x675.jpg',
      'https://www.omlet.nl/images/cache/371/512/Dog-Kerry_Blue_Terrier-A_lovely_Kerry_Blue_Terrier_sitting_neatly%2C_awaiting_some_attention.jpg',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0080_kerry_blue_terrier.jpg?itok=jGBtYWTz',
    ],
  },
  {
    dog: DogName.ierseSetter,
    imgs: [
      'https://www.hondenrassen.nl/public/img/content/setter_rood.jpg',
      'https://omy.dog/photo/F7E1CAD7-D484-4265-9E24-3015B912F3F6/original',
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0069_irish_setter.jpg',
    ],
  },
  {
    dog: DogName.akitaInu,
    imgs: [
      'https://gekop.com/wp-content/uploads/2013/10/542-Honden-shutterstock-akita-inu.jpg',
      'https://assets.felicanis.be/wp-content/uploads/akita-inu-683x1024.jpg',
      'https://i.pinimg.com/originals/0d/66/ee/0d66ee6da8aa47159243b2acac42fb09.jpg',
    ],
  },
  {
    dog: DogName.ijslandseHond,
    imgs: [
      'https://www.nieuwehond.nl/wp-content/uploads/2016/09/IJslandse-hond-Depositphotos_105049762_S.jpg',
      'https://www.nieuwehond.nl/wp-content/uploads/2016/09/IJslandse-hond-Depositphotos_82393860_S.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/4/44/Ulfur.jpg',
    ],
  },
  {
    dog: DogName.dandyDinmontTerrier,
    imgs: [
      'https://www.dogalize.com/wp-content/uploads/2017/03/Dandie-Dinmont-Terrier.jpg',
      'https://www.dogtime.com/assets/uploads/2011/01/file_23064_dandie-dinmont-terrier-460x290.jpg',
      'http://lhic.nl/wp-content/uploads/2021/02/Dandy-Dinmont-Terrier-hond.jpg',
    ],
  },
  {
    dog: DogName.curlyCoatedRetriever,
    imgs: [
      'https://petlur.com/storage/app/public/breeds/dog/curly-coated-retriever.png',
      'https://breed-assets.wisdompanel.com/dog/curly-coated-retriever/Curly_Coated_Retriever_Color_Small_File.png',
      'https://cdn.royalcanin-weshare-online.io/TyIGHmsBaxEApS7LiB3m/v1/bd173h-hub-curly-coated-retriever-adult-black-and-white?fm=jpg&auto=compress',
    ],
  },
  {
    dog: DogName.leonberger,
    imgs: [
      'https://www.zoo-mar.pl/wp-content/uploads/2016/02/leonberger.jpg',
      'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=460,height=600,fit=cover/animal/breed/pictures/613f5a2385378949260103.jpg',
      'https://www.purina.pl/sites/default/files/2018-02/leonberger_400x378.jpg',
    ],
  },
  {
    dog: DogName.laekenseHerder,
    imgs: [
      'https://gekop.com/wp-content/uploads/2014/02/1356-Honden-shutterstock-Laekense-Herdershond.jpg',
      'https://www.omlet.nl/images/cache/512/512/Dog-Belgian_Shepherd_Dog_%28Laekenois%29-A_lovely_Belgian_Shepherd_Dog_%28Laekenois%29_sitting_down.jpg',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0168_belgian_shepherd_lakenois.jpg?itok=nHTJo9G1',
    ],
  },
  {
    dog: DogName.ierseWolfshond,
    imgs: [
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-10/ierse-wolfshond/irw-ou-0021.jpg',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0089_irish_wolfhound.jpg?itok=3Pck2fM-',
      'https://s3.eu-central-1.amazonaws.com/tipaw-pictures/b34dccb5-0cac-4a4d-a2a8-6283979aa894.jpg',
    ],
  },
  {
    dog: DogName.borderTerrier,
    imgs: [
      'https://www.omlet.us/images/cache/512/341/Dog-Border_Terrier-An-adult_Border_Terrier_with_a_long_and_thick_coat.jpg',
      'https://www.thekennelclub.org.uk/media/1527/border-terrier-standing.jpg?mode=pad&width=1000&rnd=132143779710000000',
      'https://www.dogtime.com/assets/uploads/2011/01/file_23058_border-terrier.jpg',
    ],
  },
  {
    dog: DogName.lakelandTerrier,
    imgs: [
      'https://media.istockphoto.com/id/1293258655/photo/lakeland-terrier.jpg?s=612x612&w=0&k=20&c=4N-UWRv6rKq6E0eGNwrsmOOvbpMfSSoLNc1jyTNDt-Y=',
      'https://123tinki.com/wp-content/uploads/sites/2/2016/11/Lakeland-terrier-e1479118428586.jpg',
      'https://www.purina.nl/sites/default/files/breed_library/lakeland_terrier.jpg',
    ],
  },
  {
    dog: DogName.landseer,
    imgs: [
      'https://cdn.royalcanin-weshare-online.io/YCIcHmsBaxEApS7LjB2v/v5/bd241h-hub-landseer-adult-black-and-white',
      'https://thumbs.dreamstime.com/b/landseer-dog-pure-breed-playing-fun-lovely-puppy-landseer-dog-pure-breed-water-training-sea-beach-lake-work-rescue-162727787.jpg',
      'https://www.hundeo.com/wp-content/uploads/2019/01/Landseer_2.jpg',
    ],
  },
  {
    dog: DogName.lagottoRomagnolo,
    imgs: [
      'https://www.lagottotartufo.it/fileadmin/_processed_/8/9/csm_caratteristiche_lagotto_romagnolo_1_ba64698fd7.jpg',
      'https://www.dogtime.com/assets/uploads/2018/07/lagotto-romagnolo-dog-breed-pictures-header.jpg',
      'https://s36700.pcdn.co/wp-content/uploads/2015/06/Peperonata-Lagotto-Romagnolo-05.jpg.optimal.jpg',
    ],
  },
  {
    dog: DogName.ierseWaterspaniel,
    imgs: [
      'https://media-be.chewy.com/wp-content/uploads/2021/06/25115515/IrishWaterSpaniel-FeaturedImage.jpg',
      'https://breed-assets.wisdompanel.com/dog/irish-water-spaniel/Irish_Water_Spaniel_Color_Small_File.png',
      'https://www.purina.nl/sites/default/files/breed_library/irish_water_spaniel.jpg',
    ],
  },
  {
    dog: DogName.chihuahua,
    imgs: [
      'https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-07/Chihuahua-Smooth-Coat.jpg?itok=J40w8Swm',
      'https://www.petbarn.com.au/petspot/app/uploads/2015/01/30.-Chihuahua.jpg',
      'https://www.licg.nl/media/1275/chihuahua740x433.jpg',
    ],
  },
  {
    dog: DogName.amerikaanseCockerSpaniel,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0122_spaniel_american_cocker.jpg',
      'https://gekop.com/wp-content/uploads/2013/10/054-Honden-shutterstock-am-cocker-spaniel.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-8/amerikaanse-cocker-spaniel/acs-ou-0009.jpg',
    ],
  },
  {
    dog: DogName.borderCollie,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0018_border_collie.jpg',
      'https://www.akc.org/wp-content/uploads/2017/11/Border-Collie-On-White-01.jpg',
      'https://cdn.britannica.com/25/234625-050-6070814C/Border-Collie-dog.jpg',
    ],
  },
  {
    dog: DogName.griffonKorthals,
    imgs: [
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-7/griffon-korthals/grk-ou-0014.jpg',
      'https://cdn.webshopapp.com/shops/324873/files/382848618/griffon-korthals.jpg',
      'http://in05.hostcontrol.com/resources/b2c34fd5e7b7a2/c884e60a62.JPEG',
    ],
  },
  {
    dog: DogName.shibaInu,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0084_japanese_shiba_inu.jpg?itok=_ryhqMa9',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Taka_Shiba.jpg/1200px-Taka_Shiba.jpg',
      'https://image.petmd.com/files/styles/863x625/public/2022-10/Shiba-Inu.jpeg',
    ],
  },
  {
    dog: DogName.chesapeakBayRetriever,
    imgs: [
      'https://www.purina.com.au/-/media/project/purina/main/breeds/dog/dog_chesapeake-bay-retriever_desktop.jpg?h=475&la=en&w=825&hash=E901FC0696A374EEEB4DA413BFD4B776',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2022%2F01%2F11%2Fchesapeake-bay-retriever-sitting-in-the-sun-661221626-2000.jpg',
      'https://www.thekennelclub.org.uk/media/1299/retriever-chesapeake-bay-standing.jpg?mode=pad&width=1000&rnd=132140430600000000',
    ],
  },
  {
    dog: DogName.novaScotiaDuckTollingRetriever,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0107_nova_scotia_ducke_toller.jpg',
      'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=675,fit=cover/animal/breed/dog/adult/5f77466d0abdb973826258.jpg',
      'https://www.nativebreed.org/wp-content/uploads/2020/07/Nova-Scotia-Duck-Tolling-Retriever-1024x682.jpg',
    ],
  },
  {
    dog: DogName.australianCattleDog,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0004_australian_cattle_dog_0.jpg',
      'https://media-be.chewy.com/wp-content/uploads/2021/06/16153832/AustralianCattleDog-FeaturedImage-1024x615.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/ACD-blue-spud.jpg/640px-ACD-blue-spud.jpg',
    ],
  },
  {
    dog: DogName.anatolischeHerdershond,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Anatolian%20Shepherd%20Dog1.jpg?itok=F7Io4Pba',
      'https://fastly.jwwb.nl/public/p/c/o/temp-tafkmrgopywxnvnxqbkv/Anatolische-Herdershond.jpg',
      'https://www.hondenrassen.nl/public/img/content/pebbles_13052008-20110922114500.jpg',
    ],
  },
  {
    dog: DogName.americanAkita,
    imgs: [
      'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/06154034/Akita-standing-outdoors-in-the-summer.jpg',
      'https://image.jimcdn.com/app/cms/image/transf/none/path/s53b36d06bb1bc5e5/image/iea74cdb9a08eab13/version/1620740965/image.jpg',
      'https://www.thekennelclub.org.uk/media/1670/akita-standing.jpg?mode=pad&width=1000&rnd=132143812230000000',
    ],
  },
  {
    dog: DogName.foxterrierDraadhaar,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0050_fox_terrier_wire.jpg',
      'https://omy.dog/photo/E90F7B59-7D7B-4213-A037-852C7EEA65C5/thumbnail',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-3/foxterrier-draadhaar/fox-ou-0083.jpg',
    ],
  },
  {
    dog: DogName.bosanskiOstrodlakiGonicBarak,
    imgs: [
      'https://jelenadogshows.com/sr/wp-content/uploads/2021/05/BOSANSKI-OSTRODLAKI-GONIC-BARAK.jpg',
      'https://bosnjani.com/wp-content/uploads/2020/11/9957763.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/BIR_Grupp_6-_BOSANSKI_OSTRODLAKI_GONIC-BARAK%2C_Sandy_%2823866392689%29.jpg/800px-BIR_Grupp_6-_BOSANSKI_OSTRODLAKI_GONIC-BARAK%2C_Sandy_%2823866392689%29.jpg',
    ],
  },
  {
    dog: DogName.westHighlandWhiteTerrier,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0139_west_highland_white_terrier.jpg',
      'https://hondxl.nl/storage/5163/conversions/West_Highland_White_Terrier_Krakow-thumb_wide.jpg',
      'https://s3.eu-central-1.amazonaws.com/tipaw-pictures/9d098bc1-d305-475b-bb5f-ecd3ddf62cc6.jpg',
    ],
  },
  {
    dog: DogName.epagneulBreton,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0151_brittany.jpg?itok=MZUdZNmM',
      'https://www.beestig.be/sites/default/files/styles/article_header/public/artikel/teaser_achtergrond/epagneul_breton_hond.jpg?itok=5NbbIrJA',
      'https://dejacht.nl/flora-en-fauna/jachthondenrassen/staande-honden/continentaal-1/epagneul-breton/epagneul-breton-wmc-10.jpg/',
    ],
  },
  {
    dog: DogName.shetlandSheepdog,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0116_shetland_sheepdog.jpg',
      'https://www.akc.org/wp-content/uploads/2017/11/Shetland-Sheepdog-On-White-01.jpg',
      'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=675,fit=cover/animal/breed/dog/adult/5cb5a163d90be203279750.jpg',
    ],
  },
  {
    dog: DogName.finseSpits,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0049_finnish_spitz.jpg',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Finnish%20Spitz2.jpg?itok=nk-7lMzr',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Finnish%20Spitz1.jpg?itok=RzliHFEm',
    ],
  },
  {
    dog: DogName.bolognezer,
    imgs: [
      'https://www.hondenrassen.nl/public/img/content/bolognezer.jpg',
      'https://www.purina.nl/sites/default/files/breed_library/bolognese.jpg',
      'https://egcn.nl/images/bolognezer/1/bolognezer.jpg',
    ],
  },
  {
    dog: DogName.russischeTerrier,
    imgs: [
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-2/zwarte-russische-terrier/brt-ou-0006.jpg',
      'https://assets.bazoeki.com/eyJidWNrZXQiOiJhc3NldHMuYmF6b2VraS5jb20iLCJrZXkiOiJhc3NldHMvaW1nL2hlYWRlci1kb2ctaW1hZ2VzL1pSVC1yYXNkZXRhaWwucG5nIiwiZWRpdHMiOnsicG5nIjp7InF1YWxpdHkiOjEwMCwicHJvZ3Jlc3NpdmUiOmZhbHNlfSwicmVzaXplIjp7IndpZHRoIjo1NDAsImZpdCI6ImNvdmVyIn0sInNoYXJwZW4iOnRydWV9fQ==',
      'https://www.omlet.nl/images/cache/512/422/Dog-Black_Russian_Terrier-Two_beautiful_adult_Black_Russian_Terriers_content_in_each_others_company.jpg',
    ],
  },
  {
    dog: DogName.bouvierDesArdenne,
    imgs: [
      'https://jardinage.lemonde.fr/images/dossiers/2019-12/bouvier-des-ardennes-1-073856.jpg',
      'https://cdn.royalcanin-weshare-online.io/8mlWHWsBG95Xk-RBXfiT/v1/bd38h-hub-bouvier-des-ardennes-black-and-white?fm=jpg&auto=compress',
      'https://media.ooreka.fr/public/image/3-306021-2563-full-13058055.jpg',
    ],
  },
  {
    dog: DogName.epagneulNainContinentalPapillon,
    imgs: [
      'https://egcn.nl/images/Epapillon/1/Epagneul-Nain-Continental-Papillon.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-9/epagneul-nain-continental-papillon/pap-ou-0039.jpg',
      'https://img.passeportsante.net/1200x675/2022-08-17/epagneul-papillon.webp',
    ],
  },
  {
    dog: DogName.ruwharigeTeckel,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0129_dachshund_wire_standard.jpg?itok=x0VONqvK',
      'https://st2.depositphotos.com/1806346/11156/i/600/depositphotos_111561602-stock-photo-miniature-wirehaired-dachshund.jpg',
      'http://teckelpedia.nl/wp-content/uploads/2021/03/43212686-rasechte-ruwharige-teckel-binnen-in-de-studio-en-geA%C2%AFsoleerd-op-een-zwarte-achtergrond-.jpg',
    ],
  },
  {
    dog: DogName.imaalTerrierOfIerseGlen,
    imgs: [
      'https://brit-petfood.com/file/nodes/product/irishglenofimaalterier.jpg',
      'https://www.akc.org/wp-content/uploads/2017/11/Glen-of-Imaal-Terrier-On-White-01.jpg',
      'https://animals.net/wp-content/uploads/2018/10/Glen-of-Imaal-Terrier-2-650x425.jpg',
    ],
  },
  {
    dog: DogName.welshCorgiPembroke,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0004_welsh_corgi_pembroke.jpg?itok=OUx5d899',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Welchcorgipembroke.JPG/1200px-Welchcorgipembroke.JPG',
      'https://img.myloview.com/stickers/cute-ginger-and-white-dog-of-welsh-corgi-pembroke-breed-wearing-red-bow-tie-on-bright-blue-background-funny-face-expression-pretty-look-indoors-studio-700-189956361.jpg',
    ],
  },
  {
    dog: DogName.hrvatski,
    imgs: [
      'https://www.hondenpage.com/foto/collect/48473.jpg',
      'https://www.hondenrassen.nl/public/img/content/mudi.jpg',
      'https://huisdieradvies.nl/wp-content/uploads/2020/08/shutterstock_1025988370-1.jpg',
    ],
  },
  {
    dog: DogName.bedlingtonTerrier,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0170_bedlington_terrier.jpg?itok=1jH0awnP',
      'https://www.thekennelclub.org.uk/media/1524/bedlington-terrier-standing.jpg?mode=pad&width=1000&rnd=132143779360000000',
      'https://thumbs.dreamstime.com/b/bedlington-terrier-groep-volwassenen-die-op-gras-staan-170215596.jpg',
    ],
  },
  {
    dog: DogName.ierseTerrier,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0090_irish_terrier.jpg?itok=4Wp-o3re',
      'https://media.os.fressnapf.com/cms/2020/07/ratgeber_hund_rasse_portraits_irish_terrier_1200x527.jpg?t=cmsimg_920',
      'https://media.graphassets.com/output=format:webp/pwVQG0rKQo22hKNrV5Fv',
    ],
  },
  {
    dog: DogName.duitseStaandeDraadhaar,
    imgs: [
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-7/duitse-staande-hond-draadhaar/gwp-ou-0019.jpg',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0108_german_wirehaired_pointer.jpg?itok=lCamGSlg',
      'https://assets.bazoeki.com/eyJidWNrZXQiOiJhc3NldHMuYmF6b2VraS5jb20iLCJrZXkiOiJhc3NldHMvaW1nL2hlYWRlci1kb2ctaW1hZ2VzL0R1aXRzZS1TdGFhbmRlLURyYWFkaGFhci1fLTIucG5nIiwiZWRpdHMiOnsicG5nIjp7InF1YWxpdHkiOjEwMCwicHJvZ3Jlc3NpdmUiOmZhbHNlfSwicmVzaXplIjp7IndpZHRoIjo1NDAsImZpdCI6ImNvdmVyIn0sInNoYXJwZW4iOnRydWV9fQ==',
    ],
  },
  {
    dog: DogName.langharigeSintBernard,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0129_saint_bernard.jpg',
      'https://media.graphassets.com/output=format:webp/6RehNGj3SkWvSL1vaj7R',
      'https://media.graphassets.com/output=format:webp/WSYyl6K9QwuyDlXy0x98',
    ],
  },
  {
    dog: DogName.hovawart,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0065_hovawart.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/Helos_11.jpg',
      'https://i.ytimg.com/vi/ue0yZ6Uf5Ak/sddefault.jpg',
    ],
  },
  {
    dog: DogName.japanseChinSpaniel,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero%20Japanese%20Chin.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-9/japanse-spaniel/tmp00cd6.jpg',
      'https://gekop.com/wp-content/uploads/2014/02/1341-Honden-shutterstock-Japanse-Spaniel.jpg',
    ],
  },
  {
    dog: DogName.griffonBoulet,
    imgs: [
      'https://chien.ouest-atlantis.com/images/tele/griffon-poil-laineux-025.jpg',
      'https://cdn.dogsplanet.com/wp-content/uploads/2019/10/griffon-darr%C3%AAt-%C3%A0-poil-dur.jpg',
      'https://ohota-rybalka-kirov.ru/wp-content/uploads/2021/10/Griffon-Bule1.jpg',
    ],
  },
  {
    dog: DogName.beardedCollie,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Bearded%20Collie1.jpg?itok=8kkAyl75',
      'https://www.zooplus.nl/magazine/wp-content/uploads/2018/07/bearded-collie.jpg',
      'https://www.puppytest.nl/media/wienp1fq/bearded-collie.jpg',
    ],
  },
  {
    dog: DogName.russischeToyTerrier,
    imgs: [
      'https://www.witjesverzendhuis.com/media/wysiwyg/blog/DSC_1741.jpg',
      'https://www.dogbible.com/app/images/russkiy-toy-rassenbeschreibung-7bd14d.jpeg',
      'https://www.edogs.de/magazin/wp-content/uploads/Russkiy-Toy-im-Stehen.jpg',
    ],
  },
  {
    dog: DogName.ceskyTerrier,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0142_cesky_terrier_0.jpg?itok=aQ_xqnHB',
      'https://www.thekennelclub.org.uk/media/1539/cesky-terrier-standing.jpg?mode=pad&width=1000&rnd=132143787130000000',
      'https://www.spokojenypes.cz/ImgP.ashx?co=/ImgGalery/Img1/Atlas/170428105300-22930533-xl-jpg.jpg&fd=a2&pa=1',
    ],
  },
  {
    dog: DogName.riesenSchnauzer,
    imgs: [
      'https://www.omlet.nl/images/cache/512/384/Giant-Schnauzer-Outside.jpg',
      'https://www.crbsp.be/nl/wp-content/uploads/sites/2/2020/01/riesen1.jpg',
      'https://i.pinimg.com/736x/ef/65/15/ef6515a8adaa862d98fd7d5feaf4442b--big-black-giant-schnauzer.jpg',
    ],
  },
  {
    dog: DogName.afghaanseWindhond,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0188_afghan_hound.jpg?itok=PdEsj6ga',
      'https://hond.nl/wp-content/uploads/2021/10/2-afghaanse-windhonden.jpeg',
      'https://gelukkigehonden.nl/wp-content/uploads/afghaanse-windhond.webp',
    ],
  },
  {
    dog: DogName.schotseHerdershond,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0136_collie_rough.jpg?itok=njmakFvB',
      'https://www.dierenrecht.nl/sites/default/files/styles/full/public/2019-09/schotse-herdershond-langhaar.jpg?h=78756f26&itok=R7b7sqD7',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-1/schotse-herdershond-langhaar/col-ou-0045.jpg',
    ],
  },
  {
    dog: DogName.kromfohrlander,
    imgs: [
      'https://www.hundeo.com/wp-content/uploads/2019/03/Kromfohrla%CC%88nder-Profilbild.jpg',
      'https://cdn-fastly.petguide.com/media/2022/02/16/8212220/kromfohrlander.jpg?size=720x845&nocrop=1',
      'https://www.tieranzeigen.at/magazin/hunde/hunderassen/kromfohrlaender/kromfohrlaender-xl.jpg',
    ],
  },
  {
    dog: DogName.hollandseSmoushond,
    imgs: [
      'https://smoushond.nl/wp-content/uploads/2021/05/11.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-2/hollandse-smoushond/dsm-ou-0027.jpg',
      'http://lhic.nl/wp-content/uploads/2021/03/hollandse-smoushond-karakter.jpg',
    ],
  },
  {
    dog: DogName.petitBrabancon,
    imgs: [
      'https://i.pinimg.com/originals/c6/ae/e5/c6aee59b62cc4e4fd88fb329b4c5a233.jpg',
      'https://www.canibest.com/www/canibest/static/images/illustrations/fiche-race-chien-petit-brabancon.jpg',
      'https://img.freepik.com/fotos-premium/petit-brabancon-tumbado-junto-griffon-bruxellois-mirando-camara_191971-6468.jpg?w=2000',
    ],
  },
  {
    dog: DogName.bergamasco,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Bergamasco1.jpg?itok=sjflbCLr',
      'https://www.dogsnsw.org.au/media/img/BrowseAllBreed/Bergmasco-Shepherd-Dog.jpg',
      'https://www.petful.com/wp-content/uploads/2014/09/Bergamasco.jpg',
    ],
  },
  {
    dog: DogName.norwichTerrier,
    imgs: [
      'https://www.dogtime.com/assets/uploads/2011/01/file_23078_norwich-terrier.jpg',
      'http://cdn.akc.org/content/article-body-image/norwich_hero.jpg',
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0090_norwich_terrier.jpg',
    ],
  },
  {
    dog: DogName.flatcoatedRetriever,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0041_retriever_flat_coated.jpg?itok=n83-1jlj',
      'https://www.onzehond.nl/wp-content/uploads/2020/02/Schermafbeelding-2020-02-20-om-10.06.18-1280x720.png',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Retriever%20%28Flat%20Coated%291.jpg?itok=p_3okvAs',
    ],
  },
  {
    dog: DogName.newfoundlander,
    imgs: [
      'https://www.puppygroep.nl/wp-content/uploads/2019/06/informatie-over-newfoundlander-honden-en-puppys-groot.jpg',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0063_newfoundland.jpg?itok=yeY7Oqyt',
      'https://www.hondenras.be/wp-content/uploads/2018/11/twee-zwarte-en-een-bruine-newfoundlander-op-een-bank.jpg',
    ],
  },
  {
    dog: DogName.griffonNivernais,
    imgs: [
      'https://mag.bullebleue.fr/sites/mag/files/img/races/chien/griffon-nivernais.jpg',
      'https://www.petmapz.com/wp-content/uploads/2015/05/Griffon-Nivernais.jpg',
      'https://www.centrale-canine.fr/sites/default/files/2017-09/GRIFFON%20NIVERNAIS_0159_tete.jpg',
    ],
  },
  {
    dog: DogName.frieseStabij,
    imgs: [
      'https://www.dierenrecht.nl/sites/default/files/styles/full/public/2021-12/Friese%20stabij%20stabyhoun_0.jpg?h=a64dbe25&itok=r7bPcOtb',
      'https://www.sudewyn.nl/images/images/20210605b.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-7/stabyhoun/stabyhoun-20.jpg',
    ],
  },
  {
    dog: DogName.yorkshireTerrier,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0141_yorkshire_terrier.jpg',
      'https://t2.ea.ltmcdn.com/en/posts/3/5/2/caring_for_a_yorkshire_terrier_things_you_should_know_253_600_square.jpg',
      'https://cdn.britannica.com/48/233848-050-C8254DF7/Yorkshire-Terrier-dog.jpg',
    ],
  },
  {
    dog: DogName.deerhound,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Deerhound1.jpg?itok=OoUiV5-K',
      'https://www.thekennelclub.org.uk/media/2152/deerhound-standing.jpg?mode=pad&width=1000&rnd=132140458560000000',
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0045_deerhound.jpg',
    ],
  },
  {
    dog: DogName.epagneulNainContinentalPhalene,
    imgs: [
      'https://www.santevet.com/upload/admin/images/article/Chien%202/races_de_chiens/%C3%A9pagneul%20nain%20papillon%20123rf.jpg',
      'https://www.blogcanin.com/wp-content/uploads/2017/07/phalene-810x592.jpg',
      'https://www.cfencrt.com/wp-content/uploads/2019/10/IMG_6101-1024x683.jpg',
    ],
  },
  {
    dog: DogName.drentsePatrijshond,
    imgs: [
      'https://szh.nl/wp-content/uploads/2019/02/Drentse-patrijs-Djenaa-Sanne-foto-fam-Bosing-e1550503068281.jpg',
      'https://www.thedogpen.nl/wp-content/uploads/2020/05/drent-scaled.jpg',
      'https://assets.bazoeki.com/eyJidWNrZXQiOiJhc3NldHMuYmF6b2VraS5jb20iLCJrZXkiOiJhc3NldHMvaW1nL2FydGljbGVzL0ZPS0tFUlZJU0lURS1JSS0zMy5wbmciLCJlZGl0cyI6eyJwbmciOnsicXVhbGl0eSI6ODIsInByb2dyZXNzaXZlIjpmYWxzZX0sInJlc2l6ZSI6eyJ3aWR0aCI6MTIwMCwiaGVpZ2h0Ijo2MzAsImZpdCI6ImNvdmVyIn0sInNoYXJwZW4iOnRydWV9fQ==?mtime=1649872805',
    ],
  },
  {
    dog: DogName.elkhound,
    imgs: [
      'https://www.thekennelclub.org.uk/media/1382/norwegian-elkhound-standing.jpg?mode=pad&width=1000&rnd=132140461650000000',
      'https://canadiandogs.com/wp-content/uploads/Norwegian-Elkhound-1.jpg',
      'https://web5q.lifelearn.com/animalhealthclinic/wp-content/uploads/2011/06/NorwegianElkhound1of1.jpg',
    ],
  },
  {
    dog: DogName.tervuerenseHerder,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0166_belgian_shepherd_tervueren.jpg?itok=WapZ_H1Z',
      'https://www.dierenrecht.nl/sites/default/files/styles/full/public/2019-11/belgische-herder-tervueren.jpg?h=10d202d3&itok=cJSgIxiE',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Belgian%20Shepherd%20Dog%20Tervueren1.jpg?itok=lirJ65FJ',
    ],
  },
  {
    dog: DogName.cotonDeTulear,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0134_coton_de_tulear.jpg?itok=tiOUMxDg',
      'https://huisdierengids.com/wp-content/uploads/2021/08/De-coton-de-tulear-e1628779433521.jpg',
      'https://media-be.chewy.com/wp-content/uploads/2021/07/07141739/coton-de-tulear.jpg',
    ],
  },
  {
    dog: DogName.pekingees,
    imgs: [
      'https://www.puppytest.nl/media/flnd1hr1/pekingees.jpg',
      'https://media.istockphoto.com/id/612831982/nl/foto/dog-breed-pekingese.jpg?s=612x612&w=0&k=20&c=06PKmxero-WYGSnOI4hrNrh0oCk24YbrmIxUA4qK4Co=',
      'https://omy.dog/photo/5C255A6B-0B88-41CD-9550-D7BBF947BB93/original',
    ],
  },
  {
    dog: DogName.parsonRussellTerrier,
    imgs: [
      'https://www.thekennelclub.org.uk/media/1575/parson-russell-terrier-standing.jpg?mode=pad&width=1000&rnd=132143799420000000',
      'https://www.akc.org/wp-content/uploads/2017/11/Parson-Russell-Terrier-standing-in-three-quarter-view-on-a-white-background.jpg',
      'https://cdn.britannica.com/00/234900-050-0BEFCBC6/Parson-Jack-Russell-Terrier-dog-broken-coat.jpg',
    ],
  },
  {
    dog: DogName.bouvierDesFlandres,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0022_bouvoir_des_flandres.jpg',
      'https://www.k9rl.com/wp-content/uploads/2016/01/Bouvier-des-Flandres-800x510.jpg',
      'https://www.thekennelclub.org.uk/media/1761/bouvier-des-flandres-standing.jpg?mode=pad&width=1000&rnd=132143872490000000',
    ],
  },
  {
    dog: DogName.americanIndianDog,
    imgs: [
      'https://animalcorner.org/wp-content/uploads/2020/05/Native-American-Indian-Dog-2.jpg',
      'https://www.dogbreedinfo.com/images25/NativeAmericanIndianDogPurebredFang2YearsOld1.jpg',
      'https://www.101dogbreeds.com/wp-content/uploads/2018/11/Native-American-Indian-Dog-Images.jpg',
    ],
  },
  {
    dog: DogName.clumberSpaniel,
    imgs: [
      'https://www.akc.org/wp-content/uploads/2017/11/Clumber-Spaniel-On-White-011.jpg',
      'https://www.thesprucepets.com/thmb/hzsfE_0MgtLgnW-wOCKX7Poawsc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ClumberSpanielProfile-8c3c7dccea054abaadc9be5ab94bb572.jpg',
      'http://cdn.akc.org/content/hero/clumber_hero.jpg',
    ],
  },
  {
    dog: DogName.whiteSwissShepherdDog,
    imgs: [
      'https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-08/GettyImages-1316796073.jpg?h=73b765de&itok=n9IciP79',
      'https://www.dog-breeds-expert.com/wp-content/uploads/2022/09/WhiteSwissShepherd9-1024x682.jpg',
      'https://bangomagz.com/wp-content/uploads/2022/09/WSSH.jpg',
    ],
  },
  {
    dog: DogName.steirischeRauhhaarBracke,
    imgs: [
      'https://www.hundeo.com/wp-content/uploads/2019/01/Steirische-Rauhhaarbracke-Profilbild.jpg',
      'https://www.hundund.de/hunderassen/steirischerauhhaarigehochgebirgsbracke/fotos/bracko.jpg',
      'https://www.vdh.de/welpen/uploads/zrfancy/966_767.jpg',
    ],
  },
  {
    dog: DogName.grandBassetGriffonVendéen,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0007_basset_griffon_vendeen_grande_0.jpg',
      'https://www.dogsnsw.org.au/media/img/BrowseAllBreed/Grand-Basset-Griffon-Vendeen.jpg',
      'https://www.akc.org/wp-content/uploads/2018/01/Grand-Basset-Griffon-Vendeen-on-White-01.jpg',
    ],
  },
  {
    dog: DogName.silkyTerrier,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Australian%20Silky%20Terrier1.jpg?itok=8lgxZgqA',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0182_australian_silky_terrier.jpg?itok=cl91bCGP',
      'https://petsnurturing.com/wp-content/uploads/2021/10/silky-terrier.jpg',
    ],
  },
  {
    dog: DogName.finseLappenhond,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero%20Finnish%20Lapphund%20%281%29.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-5/finse-lappenhond/fil-ou-0001.jpg',
      'https://static.wixstatic.com/media/dcd2c1_2bc71679ecd44579be0b8922b16ac2d6~mv2_d_3888_2592_s_4_2.jpg/v1/fill/w_2500,h_1666,al_c/dcd2c1_2bc71679ecd44579be0b8922b16ac2d6~mv2_d_3888_2592_s_4_2.jpg',
    ],
  },
  {
    dog: DogName.groenendaeler,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile%20Belgian%20Shepherd%20Dog%20Groenendael.jpg?itok=4PB0amQL',
      'https://www.beestig.be/sites/default/files/styles/article_header/public/artikel/teaser_achtergrond/groenendaeler_op_grasveld.jpg?itok=iASttu_I',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-1/belgische-herdershond-groenendaeler/bgd-ou-0020.jpg',
    ],
  },
  {
    dog: DogName.bassetFauveDeBretagne,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0178_basset_fauve_de_bretagne.jpg?itok=s5dNSbWp',
      'https://www.thekennelclub.org.uk/media/2082/basset-fauve-de-bretagne-standing.jpg?mode=pad&width=1000&rnd=132140453280000000',
      'https://hondenwereld.nl/wp-content/uploads/2020/10/Basset-Fauve-de-Bretagne-scaled.jpeg',
    ],
  },
  {
    dog: DogName.perroDeAguaEspañol,
    imgs: [
      'https://upload.wikimedia.org/wikipedia/commons/9/9f/Perro_agua.jpg',
      'https://www.terranea.es/assets/images/razas/perro_de_agua_espanol.jpg',
      'https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0014_spanish_water_dog.jpg?itok=ejjy5jT7',
    ],
  },
  {
    dog: DogName.markiesje,
    imgs: [
      'https://egcn.nl/images/markiesje/1/markiesje.jpg',
      'https://i0.wp.com/www.cynophilia.nl/wp-content/uploads/2021/03/Markiesje-nu.jpg?resize=782%2C587&ssl=1',
      'https://egcn.nl/images/markiesje/1/markiesje.jpg',
    ],
  },
  {
    dog: DogName.australianShepherd,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Australian%20Shepherd%20Dog1.jpg?itok=F3xHE2Nk',
      'https://www.hundeo.com/wp-content/uploads/2019/02/Australian-Shepherd-Profil.jpg',
      'https://centralparkpuppies.com/wp-content/uploads/2021/09/australian-shepherd-dog.jpg',
    ],
  },
  {
    dog: DogName.zuidRussischeOwcharka,
    imgs: [
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-1/zuid-russische-ovcharka1/zuid-russische-ovcharka',
      'https://cdn.shortpixel.ai/spai/w_1003+q_lossy+ex_1+ret_img+to_webp/https://hond.nl/wp-content/uploads/2022/08/Zuid-Russische-Owcharka-buiten.jpeg',
      'https://www.bhv-themax.be/wp-content/uploads/2014/05/8a-667x500.jpg',
    ],
  },
  {
    dog: DogName.tibetaanseSpaniel,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0133_tibetan_spaniel.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-9/tibetaanse-spaniel/tibetaanse-spaniel-multi-kampioen-d.t.-just-living-my-life.jpg',
      'https://www.hondenrassen.nl/public/img/content/tibetaanse_spaniel.jpg',
    ],
  },
  {
    dog: DogName.havanezer,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Havanese1.jpg?itok=EZ3u2-ch',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0099_havanese.jpg?itok=XYwuqRKc',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Havanese1.jpg?itok=EZ3u2-ch',
    ],
  },
  {
    dog: DogName.australianTerrier,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Australian%20Terrier1.jpg?itok=0YtPPsSP',
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero%20Australian%20Terrier_0.jpg',
      'https://m8r6w9i6.rocketcdn.me/wp-content/uploads/2022/04/Australian-Terrier-Dog-Breed.jpeg',
    ],
  },
  {
    dog: DogName.duitseWachtelhond,
    imgs: [
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-8/duitse-wachtelhond/duitse-wachtelhond',
      'http://www.bhv-themax.be/wp-content/uploads/2014/05/87-667x500.jpg',
      'https://i0.wp.com/www.cynophilia.nl/wp-content/uploads/2021/06/Duitse-Wachtelhond-nu-boven.jpg?resize=530%2C370&ssl=1',
    ],
  },
  {
    dog: DogName.bernerSennenhond,
    imgs: [
      'https://bernersennen.nl/templates/yootheme/cache/Dante2014-fc1e2ffa.jpeg',
      'https://www.onzehond.nl/wp-content/uploads/2019/09/BernerSennenhond4.jpg',
      'https://hond.nl/wp-content/uploads/2021/05/Berner-Sennen-in-het-bos.jpg',
    ],
  },
  {
    dog: DogName.otterhound,
    imgs: [
      'https://www.akc.org/wp-content/uploads/2017/11/Otterhound-On-White-03.jpg',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0057_otterhound.jpg?itok=aS5hWVS5',
      'https://www.dogtime.com/assets/uploads/2011/01/file_23034_otterhound-460x290.jpg',
    ],
  },
  {
    dog: DogName.gordenSetter,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0060_gordon_setter_0.jpg',
      'https://www.shutterstock.com/image-photo/gordon-setter-hunting-dog-standing-600w-561898600.jpg',
      'https://www.hondenrassen.nl/public/img/content/gordon_setter.jpg',
    ],
  },
  {
    dog: DogName.picardischeHerder,
    imgs: [
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-1/picardische-herdershond/img_4448.jpg',
      'http://www.vandebovendijksehoeve.nl/media/1037/indy.jpg',
      'https://i.pinimg.com/736x/53/40/9b/53409be886ddf83f55733784da388f12--kids.jpg',
    ],
  },
  {
    dog: DogName.bichonPoilFrise,
    imgs: [
      'https://gelukkigehonden.nl/wp-content/uploads/bichon-frise.jpg',
      'https://www.zooplus.nl/magazine/wp-content/uploads/2018/04/fotolia_14003950.jpg',
      'https://cdn.britannica.com/54/236454-050-B406A11E/Bichon-frise-dog.jpg',
    ],
  },
  {
    dog: DogName.sussexSpaniel,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/sussex_spaniel.jpg',
      'https://www.dogtime.com/assets/uploads/2011/01/file_22994_sussex-spaniel-460x290.jpg',
      'https://www.akc.org/wp-content/uploads/2017/11/Sussex-Spaniel-On-White-01.jpg',
    ],
  },
  {
    dog: DogName.engelseToyTerriër,
    imgs: [
      'https://www.purina.nl/sites/default/files/breed_library/english_toy_terrier_black_%26_tan.jpg',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/English%20Toy%20Terrier%20%28Black%20%26%20Tan%291.jpg?itok=QnouHj7p',
      'https://st2.depositphotos.com/1146155/5722/i/950/depositphotos_57220583-stock-photo-black-english-toy-terrier.jpg',
    ],
  },
  {
    dog: DogName.griffonBleuDeGascogne,
    imgs: [
      'https://www.hundeo.com/wp-content/uploads/2019/10/Griffon-Bleu-De-Gascogne-Profilbild.jpg',
      'https://home.hccnet.nl/pl.de.haas/images/loulou5.jpg',
      'https://c8.alamy.com/compfr/pfg2e6/petit-griffon-bleu-de-gascogne-chien-vue-de-cote-jusqu-a-pfg2e6.jpg',
    ],
  },
  {
    dog: DogName.samojeed,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0110_samoyed.jpg',
      'https://www.puppygroep.nl/wp-content/uploads/2020/06/somajeed-in-het-bos.jpg',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Samoyed1.jpg?itok=qFaFC9l-',
    ],
  },
  {
    dog: DogName.dwergPoedel,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0048_poodle_miniature.jpg?itok=Tw30ekxG',
      'https://www.omlet.nl/images/cache/512/341/Dog-Miniature_Poodle-A_Miniature_Poodle_with_an_beautiful%2C_well_groomed_coat.jpg',
      'https://www.dierennieuws.nl/wp-content/uploads/2019/06/poedel.jpg',
    ],
  },
  {
    dog: DogName.pomeranian,
    imgs: [
      'https://www.purina.co.nz/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0051_pomeranian.jpg?itok=B0aNzA3u',
      'https://www.allthingsdogs.com/wp-content/uploads/2020/01/White-Pomeranian-Feature.jpg',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F03%2F12%2Fpomeranian-beach-1190837479-2000.jpg',
    ],
  },
  {
    dog: DogName.fieldSpaniel,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0127_spaniel_field.jpg',
      'https://www.omlet.nl/images/cache/1024/682/Field-Spaniel-Outside.jpg',
      'https://www.hondenrassenwijzer.nl/wp-content/uploads/2019/09/fieldspaniel.jpg',
    ],
  },
  {
    dog: DogName.duitseHerder,
    imgs: [
      'https://www.beeztees.nl/wp-content/uploads/2014/10/Herder-shutterstock_164440220.jpg',
      'https://fastly.jwwb.nl/public/z/o/z/temp-jytaruuzxbytvzqbmqlk/0qtxgs/gsd-ou-0068-1.jpg',
      'https://www.beestig.be/sites/default/files/styles/article_header/public/artikel/teaser_achtergrond/duitse_herder.jpg?itok=TSMSOvHI',
    ],
  },
  {
    dog: DogName.shihTzu,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2020-12/Shih%20Tzu2.jpg?itok=hv3bDAtB',
      'https://www.akc.org/wp-content/uploads/2017/11/Shih-Tzu-On-White-01.jpg',
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0117_shih_tzu.jpg',
    ],
  },
  {
    dog: DogName.kuvasz,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0097_hungarian_kuvasz.jpg?itok=_FAj9XYG',
      'https://www.hondenrassen.nl/public/img/content/kuvasz.jpg',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F09%2F30%2Fkuvasz-lying-down-on-mountain-384431190-2000.jpg',
    ],
  },
  {
    dog: DogName.mopshond,
    imgs: [
      'https://hond.nl/wp-content/uploads/2021/05/Mopshond-buiten-staand.jpg',
      'https://media.os.fressnapf.com/cms/2020/04/Ratgeber-Rassenportrait-Mops_1200x527.jpg?t=seoimg_703',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-9/mopshond/pug-ou-0041.jpg',
    ],
  },
  {
    dog: DogName.barbet,
    imgs: [
      'https://www.thekennelclub.org.uk/media/2709/barbet-headshot.jpg?mode=pad&width=1000&rnd=132140370090000000',
      'https://www.hondenrassenwijzer.nl/wp-content/uploads/2019/08/barbet-800x532.jpg',
      'https://www.akc.org/wp-content/uploads/2017/11/Barbet-standing-in-the-snow.jpg',
    ],
  },
  {
    dog: DogName.skyeTerrier,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0119_skye_terrier.jpg',
      'https://www.hundeo.com/wp-content/uploads/2019/01/Skye-Terrier-Profil.jpg',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F11%2F18%2Fskye-terrier-standing-on-gravel-1500600518-2000.jpg',
    ],
  },
  {
    dog: DogName.affenPinscher,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0189_affenpinscher_0.jpg?itok=V7xe3SUe',
      'https://www.dogtime.com/assets/uploads/2011/01/file_23096_affenpinscher-460x290.jpg',
      'https://www.omlet.co.uk/images/cache/512/495/Dog-Affenpinscher-A_cute_little_affenpinscher_with_a_lovely_scruffy_coat.jpg',
    ],
  },
  {
    dog: DogName.schapendoes,
    imgs: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Schapendoes.jpg/1200px-Schapendoes.jpg',
      'https://www.hondenrassen.nl/public/img/content/schapendoes.jpg',
      'https://www.zeeuwsestrange.nl/wp-content/uploads/2019/05/51109446_2659830084027954_6199786734885011456_o.jpg',
    ],
  },
  {
    dog: DogName.alaskaMalamute,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0186_alaskan_malamute.jpg?itok=lJL27qRM',
      'https://s3.eu-central-1.amazonaws.com/tipaw-pictures/d7a69dec-4069-42cd-9dc0-cb28f9d45715.jpg',
      'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/09151144/Alaskan-Malamute-standing-in-the-grass1.jpg',
    ],
  },
  {
    dog: DogName.norfolkterrier,
    imgs: [
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-3/norfolk-terrier/nft-ou-0043.jpg',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F05%2F13%2Fnorfolk-terrier-running-tongue-grass-1931762279-2000.jpg',
      'https://media.istockphoto.com/id/587527480/photo/typical-norfolk-terrier-in-the-garden.jpg?s=612x612&w=0&k=20&c=RQkYk-FONrginWVEceKrjfkdhDEAUD3MRQsvJN2EjMg=',
    ],
  },
  {
    dog: DogName.hollandseHerder,
    imgs: [
      'https://s3.eu-central-1.amazonaws.com/tipaw-pictures/b7b8e611-d304-4f21-9d71-c0057be898c2.jpg',
      'https://www.hondencentrum.com/images/og-thumbnail/Hollandseherderkorthaar.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-1/hh-korthaar/ela-lula-van-stavast2.jpg',
    ],
  },
  {
    dog: DogName.airdaleTerrier,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0187_airedale_terrier.jpg?itok=CIJBMOic',
      'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/30202205/Airedale-Terrier-standing-stacked-outdoors.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-3/airedale-terrier/airedale-terrier1.jpg',
    ],
  },
  {
    dog: DogName.engelseSpringerSpaniel,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0019_spaniel_english_springer.jpg?itok=xluOwM8v',
      'https://s3.eu-central-1.amazonaws.com/tipaw-pictures/0866bfb0-12bb-4093-96c5-b4aebb357821.jpg',
      'https://www.esscn.nl/images/images/website/stand-foto-show.jpg',
    ],
  },
  {
    dog: DogName.schotseTerrier,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0113_scottish_terrier.jpg',
      'https://omy.dog/photo/64361B21-B2FB-46E2-AA4D-45397F6786B9/original',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-3/schotse-terrier/ste-ou-0031.jpg',
    ],
  },
  {
    dog: DogName.goldenRetriever,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0059_golden_retriever.jpg',
      'https://www.zooplus.nl/magazine/wp-content/uploads/2018/01/fotolia_66749097.jpg',
      'https://www.dierennieuws.nl/wp-content/uploads/2017/12/golden-retriever-800x445.jpg',
    ],
  },
  {
    dog: DogName.spinoneItaliano,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0073_italian_spinone.jpg',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Italian%20Spinone1_0.jpg?itok=Jb77hfy1',
      'https://www.razzedicani.net/wp-content/uploads/2018/02/spinone-italiano2-e1519131995820.jpg',
    ],
  },
  {
    dog: DogName.maltezer,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0072_maltese.jpg?itok=P6qQoS8R',
      'https://www.consumentenhond.nl/wp-content/uploads/2021/08/portrait-of-cute-maltese-dog-in-the-backyard-768x525.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-9/maltezer/mal-ou-0060.jpg',
    ],
  },
  {
    dog: DogName.scottishDeerhound,
    imgs: [
      'https://www.vitake.net/wp-content/uploads/2019/07/deerhound-3.jpg',
      'https://upload.wikimedia.org/wikipedia/en/5/5b/Deerhound_Fernhill%27s_Kendra.jpg',
      'https://www.akc.org/wp-content/uploads/2017/11/ScottishDeerhound_BreedStandards_004.jpg',
    ],
  },
  {
    dog: DogName.weimaranerLangharige,
    imgs: [
      'https://i.pinimg.com/originals/db/3d/a5/db3da5e52cde36247750aae2ad0f043e.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-7/weimaraner-langhaar/wel-ou-0010.jpg',
      'https://www.chesphoni.nl/wp-content/uploads/2014/10/IMG_3848.jpg',
    ],
  },
  {
    dog: DogName.chow,
    imgs: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/ChowChow2Szczecin.jpg/800px-ChowChow2Szczecin.jpg',
      'https://www.lhic.nl/wp-content/uploads/2022/11/shutterstock_1875668464-Chow-Chow.jpg',
      'https://cdn.britannica.com/79/8179-050-F1398EAA/Chow-chow.jpg',
    ],
  },
  {
    dog: DogName.mudiHongaarseHerdershond,
    imgs: [
      'https://www.beestig.be/sites/default/files/styles/content_big/public/content/grote_afbeeldingen/witte_mudi.jpg?itok=K_nHkw7F',
      'https://upload.wikimedia.org/wikipedia/commons/c/c4/Hondenras_Mudi.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-1/mudi1/mudi1.jpg',
    ],
  },
  {
    dog: DogName.saarlooswolfhond,
    imgs: [
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-1/saarlooswolfhond/0-swh-standfoto.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-1/saarlooswolfhond/saa-ou-0022.jpg',
      'https://saarlooswolfhondenweblog.files.wordpress.com/2005/11/113.jpg',
    ],
  },
  {
    dog: DogName.zweedseLappenhond,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0011_swedish_lapphund.jpg?itok=xeP7Hrw7',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-5/zweedse-lappenhond/zweedse-lappenhond',
      'https://www.hondenrassenwijzer.nl/wp-content/uploads/2019/09/zweedse-lappenhond-ras-1920x1272.jpg',
    ],
  },
  {
    dog: DogName.volpinoItaliano,
    imgs: [
      'https://www.inseparabile.com/wp-content/uploads/2020/05/volpino-italiano.jpg',
      'https://t1.ea.ltmcdn.com/it/razas/1/1/6/volpino-italiano_611_0_orig.jpg',
      'https://www.cani.it/img/08f31d947673fcd5ca42cb5c0625410e/154.jpg',
    ],
  },
  {
    dog: DogName.hokkaido,
    imgs: [
      'http://lhic.nl/wp-content/uploads/2021/03/Hokkaido-hond.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/7/79/Hokkaido_02.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-5/hokkaido/04ab186972.jpg',
    ],
  },
  {
    dog: DogName.engelseCockerSpaniel,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0124_spaniel_cocker.jpg',
      'https://www.nieuwehond.nl/wp-content/uploads/2016/09/Engelse-Cocker-Spaniel-Depositphotos_17392277_S-1200x675.jpg',
      'https://www.licg.nl/media/1291/engelse-cocker-spaniel740x433.jpg',
    ],
  },
  {
    dog: DogName.witteDwergschnauzer,
    imgs: [
      'https://previews.123rf.com/images/f8grapher/f8grapher1310/f8grapher131000054/22996819-een-kleine-witte-zout-dwergschnauzer-hond-staan-%E2%80%8B%E2%80%8Bop-het-gras-die-zeer-gelukkig-onderscheiden-zich-d.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-2/dwergschnauzer-wit/dwergschnauzer-wit.jpg',
      'https://st2.depositphotos.com/1000504/7899/i/950/depositphotos_78993390-stock-photo-white-schnauzer-puppies.jpg',
    ],
  },
  {
    dog: DogName.welshSpringerSpaniel,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0126_spaniel_welsh_springer.jpg',
      'https://www.omlet.nl/images/cache/512/326/Dog-Welsh_Springer_Spaniel-Two_wonderful%2C_little_Welsh_Springer_Spaniel_puppies_lying_together.jpg',
      'https://fullofdogs.com/wp-content/uploads/2020/03/welshspringer1.jpg',
    ],
  },
  {
    dog: DogName.barsoi,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2020-12/Borzoi1.jpg?itok=-syl1Th5',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-10/barsoi/bor-ou-0029.jpg',
      'https://www.zooplus.nl/magazine/wp-content/uploads/2018/06/Barsoi-Hund-1.jpg',
    ],
  },
  {
    dog: DogName.duitseJachtTerrier,
    imgs: [
      'https://www.nieuwehond.nl/wp-content/uploads/2016/09/Duitse-jachtterrier-Depositphotos_19208957_S.jpg',
      'https://www.hondenrassen.nl/public/img/content/duitse_jacht_terrier.jpg',
      'https://www.hondenpage.com/foto/collect/70853.jpg',
    ],
  },
  {
    dog: DogName.cairnTerrier,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0031_Cairn_terrier.jpg',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F10%2F21%2Fcairn-terrier-red-collar-standing-grass-206553233_-2000.jpg',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2020-12/Cairn%20Terrier2.jpg?itok=GloSG0Kh',
    ],
  },
  {
    dog: DogName.langharigeDwergTeckel,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0133_dachshund_long_standard.jpg?itok=deAwxx-i',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Dachshund%20%28Miniature%20Long-Haired%291.jpg?itok=-8ErurBQ',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Dachshund%20%28Miniature%20Long-Haired%292.jpg?itok=EgsVdVq-',
    ],
  },
  {
    dog: DogName.welshTerrier,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0138_welsh_terrier.jpg',
      'https://www.thesprucepets.com/thmb/y5mSd_HAIzZ78i_mAkCfgAy4dJg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/CaptureLightGettyImages-503133445-8a40828e37d840568998bdf58956ac13.jpg',
      'https://www.akc.org/wp-content/uploads/2016/01/Welsh-Terrier.jpg',
    ],
  },
  {
    dog: DogName.rhodesianRidgeback,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0108_rhodesian_ridgeback.jpg',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Rhodesian%20Ridgeback2.jpg?itok=UEnm3y1T',
      'https://www.akc.org/wp-content/uploads/2017/11/Rhodesian-Ridgeback-standing-in-profile-outdoors.jpg',
    ],
  },
  {
    dog: DogName.caoDaSerraDeAires,
    imgs: [
      'https://upload.wikimedia.org/wikipedia/commons/4/49/Cao_de_Serra_de_Aires600.jpg',
      'https://estrela-animal.b-cdn.net/wp-content/uploads/2018/05/cao-serra-aires-1.jpg',
      'https://dogs-ptmagazine.com/wp-content/uploads/2018/11/banner_aires.jpg',
    ],
  },
  {
    dog: DogName.tornjak,
    imgs: [
      'https://www.hundeo.com/wp-content/uploads/2019/04/Tornjak-Profilbild.jpg',
      'https://www.akc.org/wp-content/uploads/2017/11/Tornjak-standing-in-the-woods.jpg',
      'https://www.dogsnsw.org.au/media/img/BrowseAllBreed/Tornjak.jpg',
    ],
  },
  {
    dog: DogName.americanStafford,
    imgs: [
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-3/american-staffordshire-terrier/ast-ou-0002.jpg',
      'https://hartvoordieren.nl/wp-content/uploads/sites/3/2018/01/shutterstock_83344639-730x413.jpg',
      'https://cdn.britannica.com/72/235372-050-B5FC844B/American-Staffordshire-terrier-dog.jpg',
    ],
  },
  {
    dog: DogName.briard,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0025_briard.jpg',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Briard2.jpg?itok=6m2udgfb',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Briard_fauve.JPG/1200px-Briard_fauve.JPG',
    ],
  },
  {
    dog: DogName.mechelseHerdershond,
    imgs: [
      'https://hond.nl/wp-content/uploads/2020/04/mechelse-herder.jpeg',
      'https://gelukkigehonden.nl/wp-content/uploads/mechelse-herder.jpg',
      'https://www.dierenrecht.nl/sites/default/files/styles/full/public/2019-09/belgische-herdershond-mechelse.jpg?h=d0c8828b&itok=iAi4aWaJ',
    ],
  },
  {
    dog: DogName.caoDeSerraDeEstrella,
    imgs: [
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-2/cao-da-serra-da-estrela-langhaar/cao-da-serra-da-estrela-langhaar1.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Estrela_Mountain_Dog_6_month_old_male.jpg/640px-Estrela_Mountain_Dog_6_month_old_male.jpg',
      'https://www.nieuwehond.nl/wp-content/uploads/2020/04/Cao-Da-Serra-Da-Estrela-Depositphotos_353153606_S.jpg',
    ],
  },
  {
    dog: DogName.bassetArtesiaNormandie,
    imgs: [
      'https://i.pinimg.com/originals/91/a1/8c/91a18c6af1d8ad3b25889310083d5902.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-6/basset-artesien-normand/ban-ou-0007.jpg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Grupp_6_BASSET_ART%C3%89SIEN_NORMAND%2C_Skogvaktarens_Queen_Sally_%2824180074612%29.jpg/1200px-Grupp_6_BASSET_ART%C3%89SIEN_NORMAND%2C_Skogvaktarens_Queen_Sally_%2824180074612%29.jpg',
    ],
  },
  {
    dog: DogName.portugeseWaterhond,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0099_portuguese_water_dog.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-8/cao-de-agua-portugues/pwd-ou-0077.jpg',
      'https://www.nieuwehond.nl/wp-content/uploads/2016/09/Portugese-Waterhond.jpg',
    ],
  },
  {
    dog: DogName.komondor,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Komondor1.jpg?itok=xrX3IA1b',
      'https://www.nieuwehond.nl/wp-content/uploads/2016/09/Komondor-Depositphotos_239581658_S.jpg',
      'https://media-be.chewy.com/wp-content/uploads/2021/06/03152710/Komondor-FeaturedImage-1024x615.jpg',
    ],
  },
  {
    dog: DogName.engelseShepherd,
    imgs: [
      'https://i.pinimg.com/originals/c1/af/3b/c1af3beedce76f855b8d3773ba21317c.jpg',
      'https://www.startpunthonden.nl/img/rassen/English-Shepherd.jpg',
      'https://thumbs.dreamstime.com/b/engelse-herder-cross-dog-standing-49217579.jpg',
    ],
  },
  {
    dog: DogName.groenlandseHond,
    imgs: [
      'https://gelukkigehonden.nl/wp-content/uploads/groenlandhond.jpg',
      'https://www.nieuwehond.nl/wp-content/uploads/2016/09/Groenlandse-hond-1-1200x675.jpg',
      'https://cdn.shortpixel.ai/spai/w_788+q_lossy+ex_1+ret_img+to_webp/https://hond.nl/wp-content/uploads/2021/07/Groenlandse-honden.jpeg',
    ],
  },
  {
    dog: DogName.engelseSetter,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-02/BREED%20Hero%20Mobile_0122_english_setter.jpg?itok=mV68movI',
      'https://s3.eu-central-1.amazonaws.com/tipaw-pictures/8c331a90-1879-40d6-9665-8715867a0bd0.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-7/engelse-setter/ens-ou-0015.jpg',
    ],
  },
  {
    dog: DogName.welshCorgiGardigan,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0136_welsh_corgi_cardigan.jpg',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Welsh%20Corgi%20%28Cardigan%292.jpg?itok=S9RlOCb1',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Welsh%20Corgi%20%28Cardigan%291.jpg?itok=Kq2TVlNT',
    ],
  },
  {
    dog: DogName.tibetaanseMastiff,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0132_tibetan_mastiff.jpg',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Tibetan%20Mastiff1.jpg?itok=zCwmDEXz',
      'https://hond.nl/wp-content/uploads/2021/05/Drie-Tibetaanse-Mastiff-honden.jpg',
    ],
  },
  {
    dog: DogName.nizinny,
    imgs: [
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-1/polski-owczarek-nizinny/01.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-1/polski-owczarek-nizinny/04.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-1/polski-owczarek-nizinny/06.jpg',
    ],
  },
  {
    dog: DogName.kooikerhondje,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Kooikerhondje1.jpg?itok=AQjrgNnR',
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0077_kooikerhondje.jpg',
      'http://in02.hostcontrol.com/resources/32e3ced61c7003/e28dbecb2c.jpg',
    ],
  },
  {
    dog: DogName.epagneulPicardie,
    imgs: [
      'https://fanimalo.com/wp-content/uploads/2019/11/epagneul-picard.jpeg',
      'https://lemagduchien.ouest-france.fr/images/dossiers/2020-01/mini/epagneul-picard-111719-650-400.jpg',
      'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=1200,height=675,fit=cover/animal/breed/dog/adult/5d405707d85b2779661020.jpg',
    ],
  },
  {
    dog: DogName.wetterhound,
    imgs: [
      'https://www.licg.nl/media/1312/wetterhoun740x433.jpg',
      'https://www.nieuwehond.nl/wp-content/uploads/2016/09/Wetterhoun.jpg',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-8/wetterhoun/wetterhoun-1.jpg',
    ],
  },
  {
    dog: DogName.viszlaDraadhaar,
    imgs: [
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Hungarian%20Wire%20Haired%20Vizsla1.jpg?itok=WBDmrnoL',
      'https://www.houdenvanhonden.nl/globalassets/rassen/fci-7/vizsla-draadhaar/viw-ou-0048.jpg',
      'https://www.puppygroep.nl/wp-content/uploads/2020/02/Bruine-vizsla-op-het-spoor.jpg',
    ],
  },
  {
    dog: DogName.oldEnglishSheepdog,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0091_old_english_sheepdog.jpg',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2020-12/Old%20English%20Sheepdog2.jpg?itok=DqUiHCdm',
      'https://www.omlet.nl/images/cache/512/340/Dog-Old_English_Sheepdog-A_maturing_traditional_black_and_white_Old_English_Sheepdog_showing_off_its_fringe.jpg',
    ],
  },
  {
    dog: DogName.schipperke,
    imgs: [
      'https://www.purina.nl/sites/default/files/2021-02/BREED%20Hero_0111_schipperke.jpg',
      'https://www.purina.nl/sites/default/files/styles/ttt_image_510/public/2021-01/Schipperke1.jpg?itok=WyMo7XN1',
      'https://aniekwendt.nl/wp-content/uploads/elementor/thumbs/hondenras-schipperke--pyf7xsu5fny45x6bdpefop1b3wy781k7mvove6jha8.webp',
    ],
  },
];
