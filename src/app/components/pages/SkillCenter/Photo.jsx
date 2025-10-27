// import CardDataJson from "../../../../../public/db/CardData.json"; 
// import PhotoCard from "../../atoms/PhotoCard";

// const Photo = () => (
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
//     {CardDataJson.CardData.map((card, index) => (
//       <PhotoCard
//         key={index}
//         img={card.img}
//         title={card.title}
//         description={card.description}
//         company={card.company}
//         location={card.location}
//       />
//     ))}
//   </div>
// );

// export default Photo;
import React from "react";
import PhotoCard from "../../atoms/PhotoCard";
import CardDataJson from "../../../../../public/db/CardData.json";

const Photo = () => {
  return (
   <div className="bg-[#FFF8EB]">
     <div className="py-16  px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {CardDataJson.CardData.map((card, index) => (
          <PhotoCard
            key={index}
            img={card.img}
            title={card.title}
            description={card.description}
            company={card.company}
            location={card.location}
          />
        ))}
      </div>
    </div>
   </div>
  );
};

export default Photo;
