"use client";

import React, { useState } from "react";
import { years } from '@/components/years'

const sectorData = [

    {
        "sector": "Textile Sector",
        "subSectors": [
            {
                "subSector": "Spinning, Weaving, Finishing of Textiles",
                "orgNames": [
                    "Crescent Cotton Mills Ltd.",
                    "Adil Textile Mills Ltd.",
                    "Ahmed Hassan Textile Mills Ltd.",
                    "Ali Asghar Textile Mills Ltd.",
                    "Allawasaya Textile & Finishing Mills Ltd.",
                    "Apollo Textile Mills Ltd.",
                    "Artistic Denim Mills Ltd.",
                    "Ashfaq Textile Mills Ltd.",
                    "Asim Textile Mills Ltd.",
                    "Ayesha Textile Mills Ltd.",
                    "Azgard Nine Ltd.",
                    "Babri Cotton Mills Ltd.",
                    "Bhanero Textile Mills Ltd.",
                    "Bilal Fibres Ltd.",
                    "Blessed Textiles Ltd.",
                    "Chakwal Spinning Mills Ltd.",
                    "Chenab Ltd.",
                    "Colony Textile Mills Limited",
                    "Crescent Fibers Ltd.",
                    "D.M. Textile Mills Ltd.",
                    "D.S. Industries Ltd.",
                    "Dar Es Salaam Textile Mills Ltd.",
                    "Data Textiles Ltd.",
                    "Dawood Lawrencepur Ltd.",
                    "Dewan Farooque Spinning Mills Ltd.",
                    "Dewan Khalid Textile Mills Ltd.",
                    "Dewan Mushtaq Textile Mills Ltd.",
                    "Dewan Textile Mills Ltd.",
                    "Din Textile Mills Ltd.",
                    "Elahi Cotton Mills Ltd.",
                    "Ellcot Spinning Mills Ltd.",
                    "Faisal Spinning Mills Ltd.",
                    "Fatima Enterprises Ltd.",
                    "Fazal Cloth Mills Ltd.",
                    "Gadoon Textile Mills Ltd.",
                    "Ghazi Fabrics International Ltd.",
                    "Glamour Textile Mills Ltd.",
                    "Globe Textile Mills (OE) Ltd.",
                    "Globe Textile Mills Ltd.",
                    "Gulistan Spinning Mills Ltd.",
                    "Gulistan Textile Mills Ltd.",
                    "Gulshan Spinning Mills Ltd.",
                    "Hafiz Ltd. (Formerly Hafiz Textile Mills Ltd.)",
                    "Haji Mohammad Ismail Mills Ltd.",
                    "Hala Enterprises Ltd.",
                    "Hamid Textile Mills Ltd.",
                    "Hira Textile Mills Ltd.",
                    "I.C.C. Industries Ltd.(Formally ICC Textiles Ltd.)",
                    "Ideal Spinning Mills Ltd.",
                    "Idrees Textile Mills Ltd.",
                    "Indus Dyeing & Manufacturing Co. Ltd.",
                    "AN textile Mills Ltd.(Formerly Ishaq Textile Mills Ltd.)",
                    "Ishtiaq Textile Mills Ltd.",
                    "Island Textile Mills Ltd.",
                    "J.A. Textile Mills Ltd.",
                    "J.K. Spinning Mills Ltd.",
                    "Janana De Malucho Textile Mills Ltd.",
                    "Jubilee Spinning & Weaving Mills Ltd.",
                    "Karim Cotton Mills Ltd.",
                    "Khalid Siraj Textile Mills Ltd.",
                    "Arctic Textile Mills Limited (Formerly Khurshid Spinning Mills Limited)",
                    "Khyber Textile Mills Ltd.",
                    "Kohat Textile Mills Ltd.",
                    "Kohinoor Industries Ltd.",
                    "Kohinoor Mills Ltd.",
                    "Kohinoor Spinning Mills Ltd.",
                    "Kohinoor Textile Mills Ltd.",
                    "Landmark Spinning Industries Ltd.",
                    "Mahmood Textile Mills Ltd.",
                    "Maqbool Textile Mills Ltd.",
                    "Masood Textile Mills Ltd.",
                    "Mian Textile Industries Ltd.",
                    "Mohammad Farooq Textile Mills Ltd.",
                    "Mubarak Textile Mills Ltd.",
                    "Mukhtar Textile Mills Ltd.",
                    "N.P. Spinning Mills Ltd.",
                    "Nadeem Textile Mills Ltd.",
                    "Nagina Cotton Mills Ltd.",
                    "Feroze1888 Mills Ltd.",
                    "Nazir Cotton Mills Ltd.",
                    "Nishat (Chunian) Ltd.",
                    "Nishat Mills Ltd.",
                    "Olympia Mills Limited (Formerly Olympia Spinning & Weaving Mills Limited)",
                    "Paramount Spinning Mills Ltd.",
                    "Premium Textile Mills Ltd.",
                    "Prosperity Weaving Mills Ltd.",
                    "Quetta Textile Mills Ltd.",
                    "Beco Steel Limited (Formerly Ravi Textile Mills Ltd.)",
                    "Redco Textiles Ltd.",
                    "Reliance Cotton Spinning Mills Ltd.",
                    "Reliance Weaving Mills Ltd.",
                    "Ruby Textile Mills Ltd.",
                    "Safa Textiles Ltd.",
                    "Saif Textile Mills Ltd.",
                    "Sajjad Textile Mills Ltd.",
                    "Salfi Textile Mills Ltd.",
                    "Sally Textile Mills Ltd.",
                    "Salman Noman Enterprises Ltd.",
                    "Waves Home Appliances Ltd (formerly samin textile ltd.)",
                    "Sana Industries Ltd.",
                    "Sapphire Fibres Ltd.",
                    "Sapphire Textile Mills Ltd.",
                    "Sargodha Spinning Mills Ltd.",
                    "Saritow Spinning Mills Ltd.",
                    "G3 Technologies Limited (Formerly Service Fabrics Limited)",
                    "Service Industries Textiles Ltd.",
                    "Shadab Textile Mills Ltd.",
                    "Shadman Cotton Mills Ltd.",
                    "Shahtaj Textile Ltd.",
                    "Shahzad Textile Mills Ltd.",
                    "Shams Textile Mills Ltd.",
                    "Sunrays Textile Mills Ltd.",
                    "Suraj Cotton Mills Ltd.",
                    "Taha Spinning Mills Ltd.",
                    "Tata Textile Mills Ltd.",
                    "The Crescent Textile Mills Ltd.",
                    "Towellers Ltd.",
                    "Yousaf Weaving Mills Ltd.",
                    "Zahidjee Textile Mills Ltd.",
                    "Zahur Cotton Mills Ltd.",
                    "Zephyr Textiles Ltd.",
                    "Amtex Ltd.",
                    "INTERLOOP (Pvt) Ltd."
                ]
            },
            {
                "subSector": "Made-up textile articles",
                "orgNames": [
                    "Aruj Industries (Formerly Aruj Garment Accessories Ltd.)",
                    "Fateh Sports Wear Ltd.",
                    "Gul Ahmed Textile Mills Ltd.",
                    "International Knitwear Ltd."
                ]
            },
            {
                "subSector": "Other textiles n.e.s.",
                "orgNames": [
                    "Al-Abid Silk Mills Ltd.",
                    "Bannu Woollen Mills Ltd.",
                    "Crescent Jute Products Ltd.",
                    "Dewan Salman Fibre Ltd.",
                    "Gatron (Industries) Ltd.",
                    "Ibrahim Fibres Ltd.",
                    "Noor Silk Mills Ltd.",
                    "Pakistan Synthetics Ltd.",
                    "Rupali Polyester Ltd.",
                    "S.G. Allied Businesses Ltd. (Formerly: S.G. Fibers Ltd.)",
                    "Suhail Jute Mills Ltd.",
                    "The National Silk & Rayon Mills Ltd.",
                    "Image Pakistan Limited  (Formerly Tri-Star Polyester Limited)",
                    "AEL Textiles Limited (Formerly Arshad Energy Limited)"
                ]
            }
        ]
    },
    {
        "sector": "Sugar",
        "subSectors": [
          {
            "subSector": "Sugar",
            "orgNames": [
              "Abdullah Shah Ghazi Sugar Mills Ltd.(Al-Asif Sugar Mills Ltd.)",
              "Adam Sugar Mills Ltd.",
              "Al-Abbas Sugar Mills Ltd.",
              "Al-Noor Sugar Mills Ltd.",
              "Ansari Sugar Mills Ltd.",
              "Baba Farid Sugar Mills Ltd.",
              "Chashma Sugar Mills Ltd.",
              "Imperial Sugar Ltd.",
              "Dewan Sugar Mills Ltd.",
              "Faran Sugar Mills Ltd.",
              "Habib Rice Products Limited (Formerly Habib ADM Ltd.)",
              "Habib Sugar Mills Ltd.",
              "Haseeb Waqas Sugar Mills Ltd.",
              "Tariq Corporation Limited (formerly Husein Sugar Mills)",
              "JDW Sugar Mills Ltd.",
              "Khairpur Sugar Mills Ltd.",
              "Jauharabad Sugar Mills Limtied",
              "Mehran Sugar Mills Ltd.",
              "Mirpurkhas Sugar Mills Ltd.",
              "Mirza Sugar Mills Ltd.",
              "Noon Sugar Mills Ltd.",
              "Sakrand Sugar Mills Ltd.",
              "Sanghar Sugar Mills Ltd.",
              "Shahmurad Sugar Mills Ltd.",
              "Shahtaj Sugar Mills Ltd.",
              "Shakarganj Limited",
              "Sindh Abadgar'S Sugar Mills Ltd.",
              "Tandlianwala Sugar Mills Ltd.",
              "The Premier Sugar Mills & Distillery Co. Ltd.",
              "The Thal Industries Corporation Ltd."
            ]
          }
        ]
      },
      {
        "sector": "Food",
        "subSectors": [
          {
            "subSector": "Food",
            "orgNames": [
              "Clover Pakistan Ltd.",
              "Ismail Industries Ltd.",
              "Mitchell's Fruit Farms Ltd.",
              "Morafco Industries Ltd.",
              "Murree Brewery Co. Ltd.",
              "National Foods Ltd.",
              "Nestle Pakistan Ltd.",
              "Fauji Foods Ltd. (Formerly Noon Pakistan)",
              "Punjab Oil Mills Ltd.",
              "Quice Food Industries Ltd.",
              "Rafhan Maize Products Co. Ltd.",
              "S.S. Oil Mills Ltd.",
              "Shezan International Ltd.",
              "Unilever Pakistan Foods Ltd.",
              "Frieslandcampina Engro Pakistan Limited (Formerly Engro Food Ltd.)",
              "Organic Meat Co Pvt Ltd",
              "Unity Foods Limited",
              "Matco Foods Limited",
              "At-Tahur Limited",
              "Bunnys Limited",
              "Goodluck Industries Ltd.",
              "Al-Shaheer Corporation Ltd.",
              "Seasons Foods Pvt Ltd.",
              "Amin Bakhsh Sons Ltd."
            ]
          }
        ]
      },
    {
        "sector": "Chemicals, Chemical Products and Pharmaceuticals",
        "subSectors": [
            {
                "subSector": "Chemicals, Chemical Products and Pharmaceuticals",
                "orgNames": [
                    "340017 - Allawasaya Textile & Finishing Mills Ltd."
                ]
            }
        ]
    },
    {
        "sector": "Manufacturing",
        "subSectors": [
            {
                "subSector": "Manufacturing",
                "orgNames": [
                    "340026 - Apollo Textile Mills Ltd."
                ]
            }
        ]
    },
    {
        "sector": "Mineral products",
        "subSectors": [
            {
                "subSector": "Mineral products",
                "orgNames": [
                    "340027 - Artistic Denim Mills Ltd."
                ]
            }
        ]
    },
    {
        "sector": "Cement",
        "subSectors": [
            {
                "subSector": "Cement",
                "orgNames": [
                    "340029 - Ashfaq Textile Mills Ltd."
                ]
            }
        ]
    },
    {
        "sector": "Motor Vehicles, Trailers & Autoparts",
        "subSectors": [
            {
                "subSector": "Motor Vehicles, Trailers & Autoparts",
                "orgNames": [
                    "340030 - Asim Textile Mills Ltd."
                ]
            }
        ]
    },
    {
        "sector": "Fuel and Energy Sector",
        "subSectors": [
            {
                "subSector": "Fuel and Energy Sector",
                "orgNames": [
                    "340032 - Ayesha Textile Mills Ltd."
                ]
            }
        ]
    },
    {
        "sector": "Information and Communication Services",
        "subSectors": [
            {
                "subSector": "Information and Communication Services",
                "orgNames": [
                    "340034 - Azgard Nine Ltd."
                ]
            }
        ]
    },
    {
        "sector": "Coke and Refined Petroleum Products",
        "subSectors": [
            {
                "subSector": "Coke and Refined Petroleum Products",
                "orgNames": [
                    "340035 - Babri Cotton Mills Ltd."
                ]
            }
        ]
    },
    {
        "sector": "Paper, Paperboard and Products",
        "subSectors": [
            {
                "subSector": "Paper, Paperboard and Products",
                "orgNames": [
                    "340039 - Bhanero Textile Mills Ltd."
                ]
            }
        ]
    },
    {
        "sector": "Electrical Machinery and Apparatus",
        "subSectors": [
            {
                "subSector": "Electrical Machinery and Apparatus",
                "orgNames": [
                    "340040 - Bilal Fibres Ltd."
                ]
            }
        ]
    },
    {
        "sector": "Other Services Activities",
        "subSectors": [
            {
                "subSector": "Other Services Activities",
                "orgNames": [
                    "340041 - Blessed Textiles Ltd."
                ]
            }
        ]
    }
]



type SectorSelectionProps = {
    sectors: string[];
    subSectors: string[];
    orgNames: string[];
    onSectorChange: (value: string) => void;
    onSubSectorChange: (value: string) => void;
    onOrgNameChange: (value: string) => void;
    
};

function SectorSelection(props: SectorSelectionProps) {
    const { sectors, subSectors, orgNames, onSectorChange, onSubSectorChange, onOrgNameChange } = props;

    return (
        <div className="flex flex-wrap gap-4 p-4">



            {/* Sector Dropdown */}
            <select
                className="flex-1 p-2 border rounded-md"
                onChange={(e) => onSectorChange(e.target.value)}
            >
                <option value="">Select Sector</option>
                {sectors.map((sector) => (
                    <option key={sector} value={sector}>
                        {sector}
                    </option>
                ))}
            </select>

            {/* Sub Sector Dropdown */}
            <select
                className="flex-1 p-2 border rounded-md"
                onChange={(e) => onSubSectorChange(e.target.value)}
            >
                <option value="">Select Sub Sector</option>
                {subSectors.map((subSector) => (
                    <option key={subSector} value={subSector}>
                        {subSector}
                    </option>
                ))}
            </select>

            {/* Organization Name Dropdown */}
            <select
                className="flex-1 p-2 border rounded-md"
                onChange={(e) => onOrgNameChange(e.target.value)}
            >
                <option value="">Select Org Name</option>
                {orgNames.map((orgName) => (
                    <option key={orgName} value={orgName}>
                        {orgName}
                    </option>
                ))}
            </select>

            {/* Years Dropdown */}
            <select className="flex-1 p-2 border rounded-md">
                <option value="">Select Year</option>
                {years.map((year) => (
                    <option key={year} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </div>
    );
}

function SectorsSelection() {
    const [selectedSector, setSelectedSector] = useState<string>("");
    const [selectedSubSector, setSelectedSubSector] = useState<string>("");
    const [selectedOrgName, setSelectedOrgName] = useState<string>("");

    // Dynamically filter sub-sectors and org names based on sector selection
    const subSectors = sectorData
        .find((sector) => sector.sector === selectedSector)?.subSectors || [];

    const orgNames =
        subSectors
            .find((subSector) => subSector.subSector === selectedSubSector)
            ?.orgNames || [];

    return (
        <div >

            <SectorSelection
                sectors={sectorData.map((data) => data.sector)}
                subSectors={subSectors.map((item) => item.subSector)}
                orgNames={orgNames}
                onSectorChange={(value) => {
                    setSelectedSector(value);
                    setSelectedSubSector(""); // Reset sub-sector when sector changes
                    setSelectedOrgName(""); // Reset org name when sector changes
                }}
                onSubSectorChange={(value) => {
                    setSelectedSubSector(value);
                    setSelectedOrgName(""); // Reset org name when sub-sector changes
                }}
                onOrgNameChange={(value) => setSelectedOrgName(value)}
            />
        </div>
    );
}

export default SectorsSelection;
