import React from "react";
import Image from "next/image";

import avatar from "/public/avatars/sample.png";
import SvgRibbon from "@/public/icons/Ribbon";

type Props = {
    isBestMatch?: boolean;
    imagePath?: string;
    name: string;
    age: number;
    address: string;
    distance: number;
    hireNumber: number;
    offerMin: number;
    offerMax: number;
    workItems: string[];
    matchPercentage: number;
    onConnect: () => void;
};

const RecommendedClient: React.FC<Props> = ({
    isBestMatch,
    imagePath,
    name,
    age,
    address,
    distance,
    hireNumber,
    offerMin,
    offerMax,
    workItems,
    matchPercentage,
    onConnect
}) => {
    return (
        <div className={isBestMatch ? "border border-borderGreySelectColor shadow-md" : ""}>
            {isBestMatch && 
                <div className="block">
                    <SvgRibbon></SvgRibbon>
                </div>
            }
            <div className="flex p-4 m-2 font-arial justify-center border border-borderGreyColor">
                <Image
                    className="w-20 h-20 rounded-xl border-2   border-pink-600 mr-5"
                    src={avatar}
                    alt="Avatar"
                ></Image>
                <div className="inline-flex flex-col justify-center gap-x-2 w-4/5">
                    <div className="flex items-center mb-2">
                        <p className="text-black font-bold mr-2">{name}</p>
                        <p className="text-distlineColor text-sm mr-auto">{age + "yrs/old"}</p>
                        <p className="text-primary font-bold">
                            {matchPercentage + "% Match"}
                        </p>
                    </div>
                    <div className="flex">
                        <p className="text-distlineColor text-sm mr-2">{address}</p>
                        <p className="text-distlineColor text-sm">{distance + " miles away"}</p>
                    </div>
                    <div className="flex mb-2">
                    <div className="flex items-center mr-6">
                        <p className="text-sm font-bold mr-2">Hires:</p>
                        <p className="text-sm text-distlineColor">{hireNumber + " caregivers"}</p>
                    </div>
                    <div className="flex items-center">
                        <p className="text-sm font-bold mr-2">Offer:</p>
                        <p className="text-sm text-distlineColor">
                        {"$" + offerMin + " - " + offerMax + "/hr"}
                        </p>
                    </div>
                    </div>
                    <div className="flex items-center">
                        {workItems.map((item, index) => (
                            <span key={index} className="bg-red-200 rounded-3xl font-bold text-zinc-800 text-xs m-1 p-1">
                            {item}
                            </span>
                        ))}
                    </div>
                </div>
                <span className="flex items-center cursor-pointer" onClick={() => onConnect}>
                    <p className="bg-primary pl-3 pt-1 pr-3 pb-1 rounded-full text-white">
                    Connect
                    </p>
                </span>
            </div>
        </div>
    );
};

export default RecommendedClient;