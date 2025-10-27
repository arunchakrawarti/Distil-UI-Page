import React from 'react'
import Card7 from '../../atoms/Card7'

const Placement = () => {
  const arr = [
    { title: "90+", profile: "Placement Rate" },
    { title: "100+", profile: "Industry Sectors" },
    { title: "12+", profile: "Years of Excellence" }
  ]

  return (
    <div className="flex flex-wrap justify-center gap-8 py-12">
      {arr.map((item, i) => (
        <div 
          key={i} 
          className="shadow-lg rounded-xl w-full sm:w-[356px]" 
        >
          <Card7
            title={item.title}
            profile={item.profile}
            cardWidth="100%"    
            cardHeight="156px"
          />
        </div>
      ))}
    </div>
  )
}

export default Placement
