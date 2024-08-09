import { images } from "../assets";

import UncommanBadage from "../../assets/uncommanBadage.svg";
import UniqueBadage from "../../assets/uniqueBadage.svg";
import RareBadage from "../../assets/rareBadage.svg";
import CommanBadage from "../../assets/commanBadage.svg";
import TitleIcon from "../../assets/title.svg";

import { colors } from "./colors";
import { Text, View } from "react-native";
import { verticalScale } from "./Mertics";
import { isiPad } from "./CommonFun";

export const MonthlyGraphdata = [
  { value: 300, label: "1" ,frontColor: '#FFC22F'},
  { value: 1000, label: "2",frontColor: '#FFC22F' },
  { value: 500, label: "3",frontColor: '#FFC22F' },
  { value: 1050, label: "" ,frontColor: '#FFC22F'},
  { value: 1200, label: "" ,frontColor: '#FFC22F'},
  { value: 500, label: "",frontColor: '#FFC22F' },
  { value: 700, label: "" ,frontColor: '#FFC22F'},
  { value: 900, label: "15",frontColor: '#FFC22F' },
  { value: 1000, label: "",frontColor: '#FFC22F' },
  { value: 450, label: "",frontColor: '#FFC22F' },
  { value: 1000, label: "" ,frontColor: '#FFC22F'},
  { value: 300, label: "",frontColor: '#FFC22F' },

  // { value: 650, label: '4' },
  { value: 1200, label: "", frontColor: '#FFC22F' },
  ,
];

export const DailyGraphdata = [
  { value: 300, label: "0" ,frontColor: '#FFC22F'},
  { value: 1000, label: "",frontColor: '#FFC22F' },
  { value: 500, label: "",frontColor: '#FFC22F' },
  { value: 1050, label: "" ,frontColor: '#FFC22F'},
  { value: 1200, label: "" ,frontColor: '#FFC22F'},
  { value: 500, label: "",frontColor: '#FFC22F' },
  { value: 700, label: "" ,frontColor: '#FFC22F'},
  { value: 900, label: "15",frontColor: '#FFC22F' },
  { value: 1000, label: "",frontColor: '#FFC22F' },
  { value: 450, label: "",frontColor: '#FFC22F' },
  { value: 1000, label: "" ,frontColor: '#FFC22F'},
  { value: 300, label: "",frontColor: '#FFC22F' },

  // { value: 650, label: '4' },
  { value: 1200, label: "", frontColor: '#FFC22F' },
  ,
];

export  const AllTimeGraphData = [
  { value: 300, label: "1" ,frontColor: '#FFC22F',
  
},
  { value: 1000, label: "",frontColor: '#FFC22F' },
  { value: 500, label: "",frontColor: '#FFC22F' },
  { value: 1050, label: "182" ,frontColor: '#FFC22F',

},
  { value: 700, label: "" ,frontColor: '#FFC22F'},
  { value: 900, label: "",frontColor: '#FFC22F' },
  { value: 1000, label: "",frontColor: '#FFC22F',
  showStrip: true,
  stripHeight: 190,
  stripColor: 'transparent',
  dataPointLabelComponent: () => {
    return (
        <View
        style={{
            paddingHorizontal: 8,
            paddingVertical: 5,
            borderRadius: 4,
        }}>
        <Text style={{color: "#626262" ,fontSize:verticalScale(13),fontFamily:"ClashDisplay-Medium"}}>1000</Text>
        </View>
    )},
    dataPointLabelShiftY:  isiPad?-50: -30,
    dataPointLabelShiftX: -4
 },
    { value: 1200, label: "", frontColor: '#FFC22F' ,
  
},
  ,
];

export const onlineFriends = [
  {
    image: images.user3,
    friend: "3374",
    name: "Justine R.",
    des: "In AP US History ",
    inOnline: true,
  },
  {
    image: images.user2,
    friend: " 802",
    name: " Jacob S.",
    des: "In Home Screen",
    inOnline: true,
  },
];

export const rankingData=[
  {name:"Roosevelt HS",sat:"SAT at",id:"#2",image:images.roosevelt},
  {name:"Missouri",sat:"SAT in",id:"#52",image:images.map2},

]
export const BadgesData=[
  {image:images.uniqueApolloBadge},
  {image:images.raeCannonBadge},
  {image:images.uncommanBadge1},


]
export const friendData=[
  {image:images.user10,isOnline:true},
  {image:images.user12},
  {image:images.user13,isOnline:true},
  {image:images.user14},
  {image:images.user15},
  {image:images.user16},
]
export const userHistoryData=[
  { userProfile:images.user10,gole:"3-2",user1Image:images.user11,points:"36",win:true,user1Online:true},
  { userProfile:images.user12,gole:"1-3",user1Image:images.user13,points:"-40",win:false,user1Online:true},
  { userProfile:images.user14,gole:"3-0",user1Image:images.user15,points:"+20",win:true,user1Online:false},
  { userProfile:images.user16,gole:"0-3",user1Image:images.user17,points:"-16",win:false,user1Online:false},



]

export const groupParties = [
  {
    image: images.user3,
    friend: "3374",
    title: "3rd Period Calc 😃",
    des: "In Calculus II",
    inOnline: true,
    Parties: [
      {
        img: images.user3,
      },
      {
        img: images.user2,
      },
    ],
  },
  {
    image: images.user2,
    friend: " 802",
    title: "SAT Study Group",
    des: "In SAT Prep",
    inOnline: true,
    Parties: [
      {
        img: images.user4,
      },
      {
        img: images.user5,
      },
    ],
  },
];

export const FindFriends = [
  {
    name: "Community Name here",
    followers: "1.1M",
    rooseveltBadge: images.roosevelt,
    monsterBadge: images.monsterBadge,
    image: images.user6,
  },
  {
    name: "Community Name here",
    followers: "1.1M",
    rooseveltBadge: images.roosevelt,
    tagBadge: images.sashBadge,
    image: images.user7,
  },
  {
    name: "Community Name here",
    followers: "1.1M",
    rooseveltBadge: images.roosevelt,
    image: images.user8,
  },
  {
    name: "Community Name here",
    followers: "1.1M",
    rooseveltBadge: images.roosevelt,
    image: images.user9,
  },
  {
    name: "Community Name here",
    followers: "1.1M",
    rooseveltBadge: images.roosevelt,
    image: images.user10,
  },
  {
    name: "Community Name here",
    followers: "1.1M",
    rooseveltBadge: images.roosevelt,
    image: images.user11,
  },
  {
    name: "Community Name here",
    followers: "1.1M",
    rooseveltBadge: images.roosevelt,
    image: images.user12,
  },
  {
    name: "Community Name here",
    followers: "1.1M",
    rooseveltBadge: images.roosevelt,
    image: images.user13,
  },
  {
    name: "Community Name here",
    followers: "1.1M",
    rooseveltBadge: images.roosevelt,
    image: images.user14,
  },
];

export const leaderBoardUserData = [
  {
    name: "Carol Lyons",
    points: "590 ELO",
    rooseveltBadge: images.athletics,
    image: images.user15,
    count: "4",
  },
  {
    name: "Zain Vaccaro",
    points: "448 ELO",
    rooseveltBadge: images.athletics,
    image: images.user16,
    count: "5",
  },
  {
    name: "You",
    points: "448 points",
    rooseveltBadge: images.roosevelt,
    image: images.user17,
    count: "890",
  },
];

export const country=[
  {name:"Uganda",image:images.uganda},
  {name:"Ukraine",image:images.ukraine},
  {name:"United Arab Emirates",image:images.unitedArab},
  {name:"United Kindom",image:images.unitedkingdom},
  {name:"United States",image:images.unitedState},
  {name:"Uruguay",image:images.uruguay},
  {name:"Uzbekistan",image:images.uzbekistan},


]

 export const rewardRanks: any = [
  {
    startName: "Beginner",
    nextName: "Prodigy",
    min: 0,
    max: 499,
    minImage: images.beginner,
    maxImage: images.prodigy,
    minImageShadowColor: "#C0F0FA",
    maxImageShadowColor: "#F0BDCC",
    data: [
      {
        bedageImage: images.uniqueBadge,
        name: "Unique Badge",
        nameColor: "#9E00FF",
        value: "0.75%",
      },
      {
        bedageImage: images.rareBadge,
        name: "Rare Badge",
        nameColor: "#A20000",
  
        value: "2.25%",
      },
  
      {
        bedageImage:images.uncommanBadge,
        name: "Uncommon Badge",
        nameColor: "#007CD6",
        value: "7%",
      },
  
      {
        bedageImage:images.commanBadage,
        name: "Common Badge",
        nameColor: colors.black,
        value: "40%",
      },
      {
        bedageImage:images.title,
        name: "Title",
        isTitle:true,
        nameColor: colors.black,
        value: "50%",
      },
    ]
  },
  {
    startName: "Prodigy",
    nextName: "Elite",
    min: 500,
    max: 1249,
    minImage: images.prodigy,
    maxImage: images.elite,

    minImageShadowColor: "#F0BDCC",
    maxImageShadowColor: "#1C361A",
    data: [
      {
        bedageImage: images.uniqueBadge,
        name: "Unique Badge",
        nameColor: "#9E00FF",
        value: "1.25%",
      },
      {
        bedageImage: images.rareBadge,
        name: "Rare Badge",
        nameColor: "#A20000",
  
        value: "3.75%",
      },
  
      {
        bedageImage:images.uncommanBadge,
        name: "Uncommon Badge",
        nameColor: "#007CD6",
        value: "10.5%",
      },
  
      {
        bedageImage:images.commanBadage,
        name: "Common Badge",
        nameColor: colors.black,
        value: "40%",
      },
      {
        bedageImage:images.title,
        name: "Title",
        isTitle:true,
        nameColor: colors.black,
        value: "44.5%",
      },
    ]
  },
  {
    startName: "Elite",
    nextName: "Mastermind",

    min: 1250,
    max: 1999,
    minImage: images.elite,
    maxImage: images.mastermind,
    minImageShadowColor: "#1C361A",
    maxImageShadowColor: "#C200D3",
    data: [
      {
        bedageImage: images.uniqueBadge,
        name: "Unique Badge",
        nameColor: "#9E00FF",
        value: "2%",
      },
      {
        bedageImage: images.rareBadge,
        name: "Rare Badge",
        nameColor: "#A20000",
  
        value: "5%",
      },
  
      {
        bedageImage:images.uncommanBadge,
        name: "Uncommon Badge",
        nameColor: "#007CD6",
        value: "15%",
      },
  
      {
        bedageImage:images.commanBadage,
        name: "Common Badge",
        nameColor: colors.black,
        value: "46%",
      },
      {
        bedageImage: images.title,
        name: "Title",
        isTitle:true,
        nameColor: colors.black,
        value: "30%",
      },
    ]
  },
  {
    startName: "Mastermind",
    nextName: "King/Queen",
    min: 2000,
    max: 2249,
    minImage: images.mastermind,
    maxImage: images.kingQueen,
    minImageShadowColor: "#C200D3",
    maxImageShadowColor: "#037676",
    data: [
      {
        bedageImage: images.uniqueBadge,
        name: "Unique Badge",
        nameColor: "#9E00FF",
        value: "4%",
      },
      {
        bedageImage: images.rareBadge,
        name: "Rare Badge",
        nameColor: "#A20000",
  
        value: "8.5%",
      },
  
      {
        bedageImage:images.uncommanBadge,
        name: "Uncommon Badge",
        nameColor: "#007CD6",
        value: "25.5%",
      },
  
      {
        bedageImage:images.commanBadage,
        name: "Common Badge",
        nameColor: colors.black,
        value: "47%",
      },
      {
        bedageImage:images.title,
        name: "Title",
        isTitle:true,
        nameColor: colors.black,
        value: "15%",
      },
    ]
  },
  {
    name: "King/Queen",
    startName: "King/Queen",
    nextName: "Legend",
    min: 2250,
    max: 2499,
    minImage: images.kingQueen,
    maxImage: images.legend,
    minImageShadowColor: "#037676",
    maxImageShadowColor: "#F6DE8A",
    data: [
      {
        bedageImage: images.uniqueBadge,
        name: "Unique Badge",
        nameColor: "#9E00FF",
        value: "6%",
      },
      {
        bedageImage: images.rareBadge,
        name: "Rare Badge",
        nameColor: "#A20000",
  
        value: "12%",
      },
  
      {
        bedageImage:images.uncommanBadge,
        name: "Uncommon Badge",
        nameColor: "#007CD6",
        value: "40%",
      },
  
      {
        bedageImage:images.commanBadage,
        name: "Common Badge",
        nameColor: colors.black,
      
        value: "42%",
      },
     
    ]
  },
  {
    name: "Legend",
    startName: "Legend",
    nextName: "",
    min: 2500,
    max: Infinity,
    minImage: images.prodigy,
    maxImage: null,
    minImageShadowColor: "#F6DE8A",
    data: [
      {
        bedageImage: images.uniqueBadge,
        name: "Unique Badge",
        nameColor: "#9E00FF",
        value: "<0.5%",
      },
      {
        bedageImage: images.rareBadge,
        name: "Rare Badge",
        nameColor: "#A20000",
  
        value: "9.5%",
      },
  
      {
        bedageImage:images.uncommanBadge,
        name: "Uncommon Badge",
        nameColor: "#007CD6",
        value: "25%",
      },
  
      {
        bedageImage:images.commanBadage,
        name: "Common Badge",
        nameColor: colors.black,
        value: "65%",
      },
   
    ]
  },
]
