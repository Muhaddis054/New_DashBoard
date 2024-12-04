"use client";

import React, { useState } from "react";

type SectorData = {
    [sector: string]: {
      [subsector: string]: string[];
    };
  };

const  sectorData: SectorData = {
  "Textile Sector": {
    "Textile Sector": ["704 - Textile Sector"],
    "Spinning, Weaving, Finishing of Textiles": [
      "340210 - Safa Textiles Ltd.",
      "340007 - Ahmed Hassan Textile Mills Ltd.",
      "340132 - Khyber Textile Mills Ltd.",
      "340006 - Adil Textile Mills Ltd.",
      "340026 - Apollo Textile Mills Ltd.",
    "340093 - Gulistan Textile Mills Ltd.",
    "340163 - Mubarak Textile Mills Ltd.",
    "340059 - Dar Es Salaam Textile Mills Ltd.",
    "340056 - D.M. Textile Mills Ltd.",
    "340178 - Nishat Mills Ltd.",
    "340092 - Gulistan Spinning Mills Ltd.",
    "340027 - Artistic Denim Mills Ltd.",
    "340221 - Sapphire Textile Mills Ltd.",
    "340133 - Kohat Textile Mills Ltd.",
    "340034 - Azgard Nine Ltd.",
    "340111 - Ideal Spinning Mills Ltd.",
    "340206 - Ruby Textile Mills Ltd.",
    "340154 - Masood Textile Mills Ltd.",
    "340218 - Waves Home Appliances Ltd (formerly samin textile ltd.)",
    "340060 - Data Textiles Ltd.",
    "340106 - Hira Textile Mills Ltd.",
    "340088 - Glamour Textile Mills Ltd.",
    "340223 - Saritow Spinning Mills Ltd.",
    "340102 - Hamid Textile Mills Ltd.",
    "340793 - INTERLOOP (Pvt) Ltd.",
    "340266 - Zahidjee Textile Mills Ltd.",
    "340220 - Sapphire Fibres Ltd.",
    "340084 - Gadoon Textile Mills Ltd.",
    "340252 - The Crescent Textile Mills Ltd.",
    "340143 - Landmark Spinning Industries Ltd.",
    "340112 - Idrees Textile Mills Ltd.",
    "340029 - Ashfaq Textile Mills Ltd.",
    "340140 - Kohinoor Textile Mills Ltd.",
    "340045 - Chakwal Spinning Mills Ltd.",
    "340081 - Fazal Cloth Mills Ltd.",
    "340097 - Haji Mohammad Ismail Mills Ltd.",
    "340197 - Quetta Textile Mills Ltd.",
    "340244 - Taha Spinning Mills Ltd.",
    "340063 - Dewan Khalid Textile Mills Ltd.",
    "340173 - Nazir Cotton Mills Ltd.",
    "340017 - Allawasaya Textile & Finishing Mills Ltd.",
    "340094 - Gulshan Spinning Mills Ltd.",
    "340228 - Shadman Cotton Mills Ltd.",
    "340089 - Globe Textile Mills (OE) Ltd.",
    "330011 - Crescent Cotton Mills Ltd.",
    "340217 - Salman Noman Enterprises Ltd.",
    "340061 - Dawood Lawrencepur Ltd.",
    "340157 - Mian Textile Industries Ltd.",
    "340232 - Shahtaj Textile Ltd.",
    "340118 - AN textile Mills Ltd.(Formerly Ishaq Textile Mills Ltd.)",
    "340041 - Blessed Textiles Ltd.",
    "340225 - G3 Technologies Limited (Formerly Service Fabrics Limited)",
    "340272 - Amtex Ltd.",
    "340135 - Kohinoor Industries Ltd.",
    "340139 - Kohinoor Spinning Mills Ltd.",
    "340247 - Tata Textile Mills Ltd.",
    "340264 - Yousaf Weaving Mills Ltd.",
    "340100 - Hala Enterprises Ltd.",
    "340035 - Babri Cotton Mills Ltd.",
    "340070 - Elahi Cotton Mills Ltd.",
    "340167 - Nadeem Textile Mills Ltd.",
    "340164 - Mukhtar Textile Mills Ltd.",
    "340131 - Arctic Textile Mills Limited (Formerly Khurshid Spinning Mills Limited)",
    "340125 - Jubilee Spinning & Weaving Mills Ltd.",
    "340062 - Dewan Farooque Spinning Mills Ltd.",
    "340243 - Suraj Cotton Mills Ltd.",
    "340127 - Karim Cotton Mills Ltd.",
    "340177 - Nishat (Chunian) Ltd.",
    "340079 - Fatima Enterprises Ltd.",
    "340215 - Salfi Textile Mills Ltd.",
    "340184 - Olympia Mills Limited (Formerly Olympia Spinning & Weaving Mills Limited)",
    "340095 - Hafiz Ltd. (Formerly Hafiz Textile Mills Ltd.)",
    "340200 - Beco Steel Limited (Formerly Ravi Textile Mills Ltd.)",
    "340226 - Service Industries Textiles Ltd.",
    "340051 - Crescent Fibers Ltd.",
    "340234 - Shams Textile Mills Ltd.",
    "340137 - Kohinoor Mills Ltd.",
    "340151 - Mahmood Textile Mills Ltd.",
    "723 - Spinning, Weaving, Finishing of Textiles",
    "340130 - Khalid Siraj Textile Mills Ltd.",
    "340170 - Feroze1888 Mills Ltd.",
    "340120 - Island Textile Mills Ltd.",
    "340049 - Colony Textile Mills Limited",
    "340240 - Sunrays Textile Mills Ltd.",
    "340064 - Dewan Mushtaq Textile Mills Ltd.",
    "340213 - Sajjad Textile Mills Ltd.",
    "340211 - Saif Textile Mills Ltd.",
    "340166 - N.P. Spinning Mills Ltd.",
    "340193 - Premium Textile Mills Ltd.",
    "340152 - Maqbool Textile Mills Ltd.",
    "340087 - Ghazi Fabrics International Ltd.",
    "340075 - Faisal Spinning Mills Ltd.",
    "340073 - Ellcot Spinning Mills Ltd.",
    "340204 - Reliance Weaving Mills Ltd.",
    "340113 - Indus Dyeing & Manufacturing Co. Ltd.",
    "340119 - Ishtiaq Textile Mills Ltd.",
    "340271 - Zephyr Textiles Ltd.",
    "340030 - Asim Textile Mills Ltd.",
    "340189 - Paramount Spinning Mills Ltd.",
    "340219 - Sana Industries Ltd.",
    "340090 - Globe Textile Mills Ltd.",
    "340233 - Shahzad Textile Mills Ltd.",
    "340194 - Prosperity Weaving Mills Ltd.",
    "340057 - D.S. Industries Ltd.",
    "340124 - Janana De Malucho Textile Mills Ltd.",
    "340048 - Chenab Ltd.",
    "340015 - Ali Asghar Textile Mills Ltd.",
    "340267 - Zahur Cotton Mills Ltd.",
    "340069 - Din Textile Mills Ltd.",
    "340222 - Sargodha Spinning Mills Ltd.",
    "340039 - Bhanero Textile Mills Ltd.",
    "340227 - Shadab Textile Mills Ltd.",
    "340066 - Dewan Textile Mills Ltd.",
    "340203 - Reliance Cotton Spinning Mills Ltd.",
    "340110 - I.C.C. Industries Ltd.(Formally ICC Textiles Ltd.)",
    "340123 - J.K. Spinning Mills Ltd.",
    "340040 - Bilal Fibres Ltd.",
    "340122 - J.A. Textile Mills Ltd.",
    "340254 - Towellers Ltd.",
    "340216 - Sally Textile Mills Ltd.",
    "340201 - Redco Textiles Ltd.",
    "340169 - Nagina Cotton Mills Ltd.",
    "340159 - Mohammad Farooq Textile Mills Ltd.",
    "340032 - Ayesha Textile Mills Ltd."
    ],
    "Made-up textile articles": [
      "340028 - Aruj Industries (Formerly Aruj Garment Accessories Ltd.)",
      "340091 - Gul Ahmed Textile Mills Ltd.",
      "340077 - Fateh Sports Wear Ltd.",
      "724 - Made-up textile articles",
      "340117 - International Knitwear Ltd.",
    ],
    "Other textiles n.e.s.": [
      "340037 - Bannu Woollen Mills Ltd.",
    "340108 - Ibrahim Fibres Ltd.",
    "340181 - Noor Silk Mills Ltd.",
    "340207 - Rupali Polyester Ltd.",
    "340239 - Suhail Jute Mills Ltd.",
    "340253 - The National Silk & Rayon Mills Ltd.",
    "340012 - Al-Abid Silk Mills Ltd.",
    "340085 - Gatron (Industries) Ltd.",
    "340255 - Image Pakistan Limited  (Formerly Tri-Star Polyester Limited)",
    "340065 - Dewan Salman Fibre Ltd.",
    "340188 - Pakistan Synthetics Ltd.",
    "340208 - S.G. Allied Businesses Ltd. (Formerly: S.G. Fibers Ltd.)",
    "440013 - AEL Textiles Limited (Formerly Arshad Energy Limited)",
    "340052 - Crescent Jute Products Ltd.",
    "725 - Other textiles n.e.s."
    ]
  },
  "Sugar": {
    "Sugar": [
      "330038 - The Premier Sugar Mills & Distillery Co. Ltd.",
    "330018 - Haseeb Waqas Sugar Mills Ltd.",
    "330023 - Mehran Sugar Mills Ltd.",
    "330006 - Ansari Sugar Mills Ltd.",
    "330007 - Baba Farid Sugar Mills Ltd.",
    "330001 - Abdullah Shah Ghazi Sugar Mills Ltd.(Al-Asif Sugar Mills Ltd.)",
    "330032 - Shahmurad Sugar Mills Ltd.",
    "330005 - Al-Noor Sugar Mills Ltd.",
    "330010 - Imperial Sugar Ltd.",
    "330034 - Shakarganj Limited",
    "330035 - Sindh Abadgar'S Sugar Mills Ltd.",
    "330022 - Jauharabad Sugar Mills Limtied",
    "330029 - Sakrand Sugar Mills Ltd.",
    "330002 - Adam Sugar Mills Ltd.",
    "330016 - Habib Sugar Mills Ltd.",
    "330031 - Sanghar Sugar Mills Ltd.",
    "330039 - The Thal Industries Corporation Ltd.",
    "726 - Sugar",
    "330027 - Noon Sugar Mills Ltd.",
    "330036 - Tandlianwala Sugar Mills Ltd.",
    "330009 - Chashma Sugar Mills Ltd.",
    "330015 - Habib Rice Products Limited (Formerly Habib ADM Ltd.)",
    "330003 - Al-Abbas Sugar Mills Ltd.",
    "330020 - JDW Sugar Mills Ltd.",
    "330033 - Shahtaj Sugar Mills Ltd.",
    "330019 - Tariq Corporation Limited (formerly Husein Sugar Mills)",
    "330025 - Mirpurkhas Sugar Mills Ltd.",
    "330012 - Dewan Sugar Mills Ltd."
    ]
  },
  "Food": {
    "Food": [
      "300810 - Organic Meat Co Pvt Ltd",
      "300021 - National Foods Ltd.",
      "300028 - Quice Food Industries Ltd.",
      "300844 - At-Tahur Limited",
      "300022 - Nestle Pakistan Ltd.",
      "300005 - Clover Pakistan Ltd.",
      "300023 - Fauji Foods Ltd. (Formerly Noon Pakistan)",
    "300027 - Punjab Oil Mills Ltd.",
    "300019 - Murree Brewery Co. Ltd.",
    "300010 - Ismail Industries Ltd.",
    "300037 - Unilever Pakistan Foods Ltd.",
    "300016 - Mitchell's Fruit Farms Ltd.",
    "460001 - Goodluck Industries Ltd.",
    "300031 - S.S. Oil Mills Ltd.",
    "300842 - Unity Foods Limited",
    "300041 - Frieslandcampina Engro Pakistan Limited (Formerly Engro Food Ltd.)",
    "727 - Food",
    "460024 - Al-Shaheer Corporation",
    "300030 - Rafhan Maize Products Co. Ltd.",
    "300845 - Bunnys Limited",
    "300843 - Matco Foods Limited",
    "300035 - Shezan International Ltd.",
    "300017 - Morafco Industries Ltd."
    ]
  },
  "Chemicals, Chemical Products and Pharmaceuticals": {
    "Chemicals, Chemical Products and Pharmaceuticals": [
      "360005 - Berger Paints Pakistan Ltd.",
      "360727 - Engro Fertilizers Ltd.",
      "360078 - Akzo Nobel Pakistan Ltd.",
      "360023 - Highnoon Laboratories Ltd.",
      "360051 - Wah Nobel Chemicals Ltd.",
      "360816 - GlaxoSmithKline Consumer Healthcare Pakistan Limited",
      "360034 - Pakistan Gum & Chemicals Ltd.",
      "360057 - Ghani Global Holdings Limited (Formerly Ghani Gases Limited)",
      "360024 - Lucky Core Industries Limited (Formerly ICI Pakistan Ltd).",
      "360006 - Biafo Industries Ltd.",
      "360056 - Fatima Fertilizer Co. Ltd.",
      "360042 - Sardar Chemical Industries Ltd.",
      "360030 - Nimir Industrial Chemicals Ltd.",
      "706 - Chemicals, Chemical Products and Pharmaceuticals",
      "360019 - Fauji Fertilizer Co. Ltd.",
      "360007 - Pakistan Oxygen  Limited",
      "360017 - Engro Polymer & Chemicals Ltd.",
      "360004 - Bawany Air Products Ltd.",
      "360043 - The Searle Company Ltd. (formerly Searle Pakistan Ltd.)",
      "360048 - Sitara Peroxide Ltd.",
      "460005 - United Distributors Pakistan Ltd.",
      "360817 - Citi Pharma Limited",
      "360015 - Dynea Pakistan Ltd.",
      "360022 - GlaxoSmithKline Pakistan Limited",
      "340225 - G3 Technologies Limited (Formerly Service Fabrics Limited)",
      "360690 - MACTER INTERNATIONAL Ltd.",
      "360028 - Leiner Pak Gelatine Ltd.",
      "360014 - Descon Oxychem Ltd.",
      "360010 - Colgate-Palmolive (Pakistan) Ltd.",
      "360055 - Agritech Ltd.",
      "360033 - Otsuka Pakistan Ltd.",
      "360025 - Ittehad Chemicals Ltd.",
      "360009 - Archroma Pakistan Ltd. (Formerly Clariant Pakistan Ltd)",
      "360047 - Sitara Chemical Industries Ltd.",
      "360041 - Sanofi-aventis Pakistan Ltd.",
      "360031 - AGP Limited",
      "360002 - Abbott Laboratories (Pakistan) Ltd.",
      "350006 - Mandviwala  Mauser Plastic Industries Ltd.",
      "360013 - Nimir Resins Limited",
      "360008 - Buxly Paints Ltd.",
      "360020 - Ferozsons Laboratories Ltd.",
      "360029 - Lotte Chemical Pakistan Ltd.",
      "360052 - Wyeth Pakistan Ltd.",
      "360044 - Shaffi Chemical Industries Ltd.",
      "360018 - Fauji Fertilizer Bin Qasim Ltd.",
      "360037 - Pakistan PVC Ltd.",
      "360011 - Data Agro Ltd."
    ]
  },
  "Manufacturing": {
    "Manufacturing": [
    "410002 - Siddiqsons Tin Plate Ltd.",
    "460004 - United Brands Ltd.",
    "360045 - Shield Corporation Ltd.",
    "320003 - Pakistan Tobacco Co. Ltd.",
    "712 - Manufacturing",
    "350001 - Al-Khair Gadoon Ltd.",
    "410503 - AMRELI STEELS (Pvt) Ltd.",
    "350005 - MACPAC Films Ltd.",
    "360054 - ZIL Ltd.",
    "400015 - Dost Steels Ltd.",
    "400025 - Huffaz Seamless Pipe Industries Ltd.",
    "350003 - Eco Pack Ltd.",
    "420010 - Treet Corporation Ltd.",
    "340200 - Beco Steel Limited (Formerly Ravi Textile Mills Ltd.)",
    "421077 - Mughal Iron & Steel Industries",
    "400029 - KSB Pumps Co. Ltd.",
    "350011 - Tri-Pack Films Ltd.",
    "410006 - AISHA STEEL MILLS LTD .",
    "420005 - Gillette Pakistan Ltd.",
    "420003 - Fateh Industries Ltd.",
    "350002 - Bata Pakistan Ltd.",
    "400038 - Pakistan Engineering Co. Ltd.",
    "420001 - Diamond Industries Ltd.",
    "420855 - Synthetic Products Enterprises Ltd",
    "410617 - Pakistan Aluminium Beverage Cans Limited",
    "410514 - Ittefaq Iron Industries",
    "350008 - Pak Leather Crafts Ltd.",
    "400027 - International Industries Ltd.",
    "400012 - Dadex Eternit Ltd.",
    "410001 - MetaTech Health Limited (Formerly Hashimi Can Co. Ltd.)",
    "420006 - GOC (Pak) Limited",
    "350009 - Service Industries Ltd.",
    "400056 - International Steel Ltd.",
    "320002 - Philip Morris (Pakistan) Ltd.",
    "400011 - Crescent Steel & Allied Products Ltd.",
    "340250 - Thal Ltd.",
    "400030 - Metropolitan Steel Corporation Ltd.",
    "350301 - Service Global Footwear Limited",
    "410618 - Agha Steel Industries Limited.",
    "350004 - Leather Up Ltd.",
    "320001 - Khyber Tobacco Co. Ltd."
    ]
    },
    "Mineral products": {
    "Mineral products": [
    "728 - Mineral products",
    "380038 - Tariq Glass Industries Ltd.",
    "380023 - Karam Ceramics Ltd.",
    "380003 - Balochistan Glass Ltd.",
    "380553 - Ghani Global Glass Limited",
    "380020 - Ghani Value Glass Ltd.",
    "380037 - Shabbir Tiles And Ceramics Ltd.",
    "380042 - Safe Mix Concrete Ltd.",
    "380018 - Frontier Ceramics Ltd.",
    "380019 - Ghani Glass Ltd."
    ]
    },
    "Cement": {
    "Cement": [
    "380015 - Fauji Cement Co. Ltd.",
    "380017 - Flying Cement Co. Ltd.",
    "380024 - Kohat Cement Co. Ltd.",
    "380039 - Thatta Cement Ltd.",
    "380008 - Dadabhoy Cement Industries Ltd.",
    "380034 - Pioneer Cement Ltd.",
    "380001 - Power Cement",
    "380028 - Maple Leaf Cement Factory Ltd.",
    "380011 - Dewan Cement Ltd.",
    "380002 - Attock Cement Pakistan Ltd.",
    "380027 - Lucky Cement Ltd.",
    "380007 - D.G. Khan Cement Co. Ltd.",
    "380016 - Fecto Cement Ltd.",
    "729 - Cement",
    "380004 - Bestway Cement Ltd.",
    "380006 - Cherat Cement Co. Ltd.",
    "380021 - Gharibwal Cement Ltd.",
    "380010 - Dandot Cement Co. Ltd."
    ]
    },
    "Motor Vehicles, Trailers & Autoparts": {
    "Motor Vehicles, Trailers & Autoparts": [
    "400021 - Ghandhara Nissan Ltd.",
    "400014 - Dewan Farooque Motors Ltd.",
    "400019 - Ghandhara Industries Ltd.",
    "400005 - Atlas Honda Ltd.",
    "400018 - Ghandhara Tyre and Rubber Company Limited (formerly General Tyre & Rubber Co.)",
    "400024 - Honda Atlas Cars (Pakistan) Ltd.",
    "400022 - Ghani Automobiles Industries Ltd.",
    "350300 - Panther Tyres Limited",
    "400036 - Pak Suzuki Motor Co. Ltd.",
    "400026 - Indus Motor Co. Ltd.",
    "400031 - Millat Tractors Ltd.",
    "400046 - Sazgar Engineering Works Ltd.",
    "370001 - Al-Ghazi Tractors Ltd.",
    "400010 - Bolan Castings Ltd.",
    "400016 - Exide Pakistan Ltd.",
    "481046 - Loads Ltd.",
    "400007 - Baluchistan Wheels Ltd.",
    "400023 - Hinopak Motors Ltd.",
    "714 - Motor Vehicles, Trailers & Autoparts",
    "400013 - Dewan Automotive Engineering Ltd.",
    "440002 - Atlas Battery Ltd.",
    "400003 - Agriauto Industries Ltd."
    ]
    },
    "Fuel and Energy Sector": {
    "Fuel and Energy Sector": [
    "440669 - LALPIR POWER Ltd.",
    "440023 - Oil & Gas Development Co. Ltd.",
    "440029 - Burshane LPG (Pakistan) Ltd.",
    "440039 - Nishat Chunian Power Ltd.",
    "440033 - Sui Northern Gas Pipelines Ltd.",
    "440016 - Kohinoor Energy Ltd.",
    "440018 - Kohinoor Power Co. Ltd.",
    "440040 - Pakgen Power Ltd.",
    "440014 - Japan Power Generation Ltd.",
    "440015 - K-Electric (formerly KESC)",
    "440019 - Kot Addu Power Co. Ltd.",
    "440031 - Sitara Energy Ltd.",
    "440001 - Altern Energy Ltd.",
    "440028 - S.G. Power Ltd.",
    "440672 - Engro Powergen Qadirpur Ltd.",
    "440517 - SAIF POWER Ltd.",
    "440037 - Tri-Star Power Ltd.",
    "710 - Fuel and Energy Sector",
    "440021 - Mari Petroleum Co. Ltd. (Formerly Mari Gas Co. Ltd.)",
    "440034 - Sui Southern Gas Co. Ltd.",
    "440032 - Southern Electric Power Co. Ltd.",
    "440038 - Nishat Power Ltd.",
    "440035 - The Hub Power Co. Ltd.",
    "440013 - AEL Textiles Limited (Formerly Arshad Energy Limited)"
    ]
    },
    "Information and Communication Services": {
    "Information and Communication Services": [
    "490007 - Pakistan Telecommunication Co. Ltd.",
    "480003 - Pakistan National Shipping Corporation.",
    "480002 - Pakistan International Airlines Corporation Ltd.",
    "480001 - Pakistan Int. Container Terminal Ltd.",
    "491166 - Systems Ltd",
    "491302 - Octopus Digital Limited.",
    "140056 - Hallmark Company Limited",
    "480501 - Pakistan International Bulk Terminal Ltd.",
    "490003 - Media Times Ltd.",
    "490009 - Telecard Ltd.",
    "500003 - TRG Pakistan Ltd.",
    "490013 - Worldcall Telecom Ltd.",
    "490917 - AVANCEON Ltd.",
    "490006 - Pak Datacom Ltd.",
    "490004 - Netsol Technologies Ltd.",
    "491064 - AIR LINK COMMUNICATION",
    "490002 - Hum Network Ltd.",
    "711 - Information and Communication Services"
    ]
    },
    "Coke and Refined Petroleum Products": {
    "Coke and Refined Petroleum Products": [
    "440030 - Shell Pakistan Ltd.",
    "440007 - Cnergyico PK Limited (Formerly Byco Petroleum Pakistan Limited)",
    "440003 - Attock Petroleum Ltd.",
    "440004 - Attock Refinery Ltd.",
    "440025 - Pakistan Petroleum Ltd.",
    "440026 - Pakistan Refinery Ltd.",
    "440024 - Pakistan Oilfields Ltd.",
    "440022 - National Refinery Ltd.",
    "440673 - Hascol Petroleum Ltd.",
    "440027 - Pakistan State Oil Co. Ltd.",
    "705 - Coke and Refined Petroleum Products",
    "461583 - Hi-Tech Lubricants Limited"
    ]
    },
    "Paper, Paperboard and Products": {
    "Paper, Paperboard and Products": [
    "510014 - Security Papers Ltd.",
    "510005 - Century Paper & Board Mills Ltd.",
    "510006 - Cherat Packaging Ltd.",
    "510009 - Merit Packaging Ltd.",
    "510011 - Packages Ltd.",
    "510556 - Roshan Packages Ltd.",
    "510008 - Dadabhoy Sack Ltd.",
    "510003 - Balochistan Particle Board Ltd.",
    "709 - Paper, Paperboard and Products",
    "510012 - Pakistan Paper Products Ltd."
    ]
    },
    "Electrical Machinery and Apparatus": {
    "Electrical Machinery and Apparatus": [
    "400028 - Johnson & Philips (Pakistan) Ltd.",
    "380013 - Emco Industries Ltd.",
    "400037 - Pakistan Cables Ltd.",
    "400048 - Siemens (Pakistan) Engineering Co. Ltd.",
    "400049 - Waves Singer Pakistan Ltd.",
    "340218 - Waves Home Appliances Ltd (formerly samin textile ltd.)",
    "707 - Electrical Machinery and Apparatus",
    "400035 - Pak Elektron Ltd.",
    "400052 - The Climax Engineering Co. Ltd.",
    "400002 - Ados Pakistan Ltd."
    ]
    },
    "Other Services Activities": {
    "Other Services Activities": [
    "380022 - Javedan Corporation Ltd.",
    "460002 - IBL HealthCare Ltd.",
    "450002 - Pakistan Hotels Developers Ltd.",
    "430003 - Haydari Construction Co. Ltd.",
    "715 - Other Services Activities",
    "500008 - TPL Corp Limited",
    "631310 - TPL Trakker Limited",
    "430002 - Gammon Pakistan Ltd.",
    "430001 - Dadabhoy Construction Tech. Ltd.",
    "450003 - Pakistan Services Ltd.",
    "460003 - Pace (Pakistan) Ltd.",
    "500001 - Shifa International Hospitals Ltd."
    ]
    },
};



const SectorSelection = () => {
    const [selectedSector, setSelectedSector] = useState<string>('');
    const [selectedSubsector, setSelectedSubsector] = useState<string>('');
    const [selectedOrganization, setSelectedOrganization] = useState<string>('');
  
    // Handle sector change
    const handleSectorChange = (sector: string) => {
      setSelectedSector(sector);
      setSelectedSubsector(''); // Reset subsector
      setSelectedOrganization(''); // Reset organization
    };
  
    // Handle subsector change
    const handleSubsectorChange = (subsector: string) => {
      setSelectedSubsector(subsector);
      setSelectedOrganization(''); // Reset organization
    };
  
    // Handle organization change
    const handleOrganizationChange = (organization: string) => {
      setSelectedOrganization(organization);
    };
  
    return (
      <div className="p-8 flex flex-wrap gap-4 " >
  
        {/* Sector Dropdown */}
        <div className="mb-4">
          <label htmlFor="sector-select">Select Sector:</label>
          <select
            id="sector-select"
            value={selectedSector}
            onChange={(e) => handleSectorChange(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="">--Select a Sector--</option>
            {Object.keys(sectorData).map((sector) => (
              <option key={sector} value={sector}>
                {sector}
              </option>
            ))}
          </select>
        </div>
  
        {/* Subsector Dropdown */}
        {selectedSector && (
          <div className="mb-4">
            <label htmlFor="subsector-select">Select Subsector:</label>
            <select
              id="subsector-select"
              value={selectedSubsector}
              onChange={(e) => handleSubsectorChange(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">--Select a Subsector--</option>
              {Object.keys(sectorData[selectedSector]).map((subsector) => (
                <option key={subsector} value={subsector}>
                  {subsector}
                </option>
              ))}
            </select>
          </div>
        )}
  
        {/* Organization Dropdown */}
        {selectedSubsector && (
          <div className="mb-4">
            <label htmlFor="organization-select">Select Organization:</label>
            <select
              id="organization-select"
              value={selectedOrganization}
              onChange={(e) => handleOrganizationChange(e.target.value)}
              className="w-full p-2 border rounded-md"
            >
              <option value="">--Select an Organization--</option>
              {sectorData[selectedSector][selectedSubsector]?.map((organization, index) => (
                <option key={index} value={organization}>
                  {organization}
                </option>
              ))}
            </select>
          </div>
        )}
  
        
      </div>
    );
  };
  
  export default SectorSelection;