const webItems = [
    {
      src: "/web/fashionMockup.png",
      href: "https://fashion.posspole.com",
      alt: "Fashion mockup website",
    },
    {
      src: "/web/chapristoreMockup.png",

      alt: "Chapri Store mockup",
    },
    {
      src: "/web/posspoleMockup.png",
      href: "https://posspole.com",
      alt: "Posspole website mockup",
    },
    {
      src: "/web/vendovault.png",
      href: "https://vendovault.in",
      alt: "Posspole website mockup",
    },
    {
      src: "/web/reonMockup.png",
      href: "https://reonskills.com",
      alt: "Reon Skills website mockup",
    },
    {
      src: "/web/vceMockup.png",

      alt: "VCE website mockup",
    },
  ];
const designItems = [
    { src: "/branding/melangeMockup.jpg", alt: "Melange branding mockup" },
    {
      src: "/branding/revothsavamockup.jpg",
      alt: "Revothsava branding mockup",
    },
    { src: "/branding/fashionMockup.jpg", alt: "Fashion branding mockup" },
    {
      src: "/branding/reonskillsMockup.jpg",
      alt: "Reon Skills branding mockup",
    },
    {
      src: "/branding/dh-idli.jpg",
      alt: "Reon Skills branding mockup",
    },
    { src: "/branding/mug_design.jpg", alt: "Custom mug design" },
    {
      src: "/branding/sanjeevanimockup.jpg",
      alt: "Sanjeevani branding mockup",
    },
    {
      src: "/branding/dhMorning.jpg",
      alt: "Sanjeevani branding mockup",
    },
  ];
const motionItems = [
    {
      src: "/branding/maye.jpg", // your thumbnail
      href: "https://youtu.be/NkrfACyn4ig?si=7Imlj3vf_IsimOUI",
      alt: "Motion video thumbnail",
      ctaLabel: "Watch",
    },
    {
      src: "/branding/reonskills.jpg", // your thumbnail
      href: "https://youtu.be/o9tZNeTvE1E",
      alt: "Motion video thumbnail",
      ctaLabel: "Watch",
    },
    {
      src: "/branding/posspole.png", // your thumbnail
      href: "https://youtu.be/6u5xUOYIrSw",
      alt: "Motion video thumbnail",
      ctaLabel: "Watch",
    },
    {
      src: "/branding/newYear.png", // your thumbnail
      href: "https://youtu.be/lpXa4gvQdeM",
      alt: "Motion video thumbnail",
      ctaLabel: "Watch",
    },

    {
      src: "/branding/womensDay.png", // your thumbnail
      href: "https://youtu.be/iSuCVR8Zsts",
      alt: "Motion video thumbnail",
      ctaLabel: "Watch",
    },
    {
      src: "/branding/posspoleVerticles.png", // your thumbnail
      href: "https://youtu.be/UbSn-e2FDRw",
      alt: "Motion video thumbnail",
      ctaLabel: "Watch",
    },
  ];
const eventsItems = [
    {
      src: "/exhibition/reonskils_exhibition.png",
      alt: "Reon Skills exhibition booth",
    },
    { src: "/exhibition/TIE.JPG", alt: "TIE event setup" },
    { src: "/exhibition/posspole_exhibition.jpg", alt: "TIE event setup" },
  ];
const names={"fashionMockup":"Posspole Fashion","chapristoreMockup":"Chapri Store","posspoleMockup":"Posspole","vendovault":"VendoVault","reonMockup":"Reon Skills","vceMockup":"VCE","melangeMockup":"Mélange","revothsavamockup":"Revothsava","reonskillsMockup":"Reon Skills","dh-idli":"Deccan Herald · Food","mug_design":"Custom merchandise","sanjeevanimockup":"Sanjeevani","dhMorning":"Deccan Herald · Morning","maye":"Maye","reonskills":"Reon Skills","posspole":"Posspole","newYear":"New Year film","womensDay":"Women’s Day film","posspoleVerticles":"Posspole Verticals","reonskils_exhibition":"Reon Skills booth","TIE":"TiE event","posspole_exhibition":"Posspole exhibition"};
function normalize(items,category){return items.map(item=>({...item,id:item.src,category,type:item.ctaLabel?"external-video":"image",title:names[item.src.split("/").pop().split(".")[0]]||item.alt,alt:item.alt}));}
const extras=[
{src:"/hero/bag_banner.jpg",title:"Product campaign · Bags"},
{src:"/hero/beltbanner.jpg",title:"Product campaign · Belts"},
{src:"/branding/mdbox.jpg",title:"MD Sweets · Packaging"},
{src:"/branding/anokhipipes.jpg",title:"Anokhi Pipes · Brand design"},
{src:"/branding/maye.jpg",title:"Maye · Visual artwork"},
{src:"/branding/reonskills.jpg",title:"Reon Skills · Campaign design"},
{src:"/branding/posspole.png",title:"Posspole · Campaign creative"},
{src:"/branding/newYear.png",title:"New Year · Campaign creative"},
{src:"/branding/womensDay.png",title:"Women’s Day · Campaign creative"},
{src:"/branding/posspoleVerticles.png",title:"Posspole Verticals · Creative"}
].map(x=>({...x,id:x.src+"-design",category:"Brand & design",type:"image",alt:x.title}));
const videos=[
["redefine.mp4","Redefine · Logo in motion","redefine.jpg","Motion & films"],
["redefine2.mp4","Redefine · Brand system","redefine2.jpg","Motion & films"],
["fathermuller1.mp4","Father Muller · Editorial design","fathermuller1.jpg","Motion & films"],
["iphone.mp4","Digital experience · Product mockup","iphone.jpg","Motion & films"],
["posspole_exhi.mp4","Posspole · Booth concept in 3D","posspole_exhi.jpg","Events & fabrication"],
["redefine-original.mp4","Redefine · Original identity film","redefine-original.jpg","Motion & films"]
].map(([file,title,poster,category])=>({id:file,src:`/videos/${file}`,poster:`/posters/${poster}`,title,category,type:"video",alt:title}));
const photos=[
["M2E_9979.JPG","Under the spotlight","A performer on stage under blue concert lighting"],
["M2E_1335.JPG","Between the moments","Guests sharing a moment on stage"],
["M2E_9497.JPG","Centre stage","A vocalist framed by illuminated stage arches"],
["M2E_8304.JPG","In full voice","A singer performing beside a concert screen"],
["M2E_7626.JPG","Light, louder","A performer amid beams of stage light"],
["M2E_0785.JPG","The live session","A live band and vocalist on stage"]
].map(([file,title,alt])=>({id:file,src:`/photography/${file}`,title,alt,category:"Cinematography & photography",type:"image",portrait:!["M2E_1335.JPG","M2E_0785.JPG"].includes(file)}));
export const portfolio=[...normalize(webItems,"Web & digital"),...normalize(designItems,"Brand & design"),...extras,...videos,...normalize(motionItems,"Motion & films"),...normalize(eventsItems,"Events & fabrication"),...photos];
export const filters=["All work","Brand & design","Web & digital","Motion & films","Cinematography & photography","Events & fabrication"];
export const featured=[portfolio.find(x=>x.src==="/branding/melangeMockup.jpg"),portfolio.find(x=>x.src==="/web/vendovault.png"),portfolio.find(x=>x.src==="/exhibition/reonskils_exhibition.png"),photos[2]];
export const photographs=photos;
export const localVideos=videos;
export const brandLogos=[
["/companies/reonskills.svg","Reon Skills"],["/companies/posspole.svg","Posspole"],["/companies/redefine.svg","Redefine"],["/companies/revothasava.svg","Revothsava"],["/companies/vces.svg","VCE"],["/companies/fathermuller.webp","Father Muller"],["/companies/omkar.svg","Omkar"],["/companies/sanjeevani.svg","Sanjeevani"],["/companies/aarogyaseva.webp","Aarogya Seva"],["/companies/DH-E-paper-logo.png","Deccan Herald"],["/companies/Chesney.png","Chesney"],["/companies/md sweets-01.png","MD Sweets"]];
