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
];
