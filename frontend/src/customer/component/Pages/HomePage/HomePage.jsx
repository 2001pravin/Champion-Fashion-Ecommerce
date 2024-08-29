import React from 'react'
import MainCarosal from '../../HomeCarosal/MainCarosal';
import HomeSectionCarosal from '../../HomeSectionCarosal/HomeSectionCarosal';
import { mens_kurta } from '../../Data/mens_kurta';



const HomePage = () =>{
    return(
        <div>
            <MainCarosal/>
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarosal data={mens_kurta} sectionName={"Man's kurta"}/>
                <HomeSectionCarosal data={mens_kurta} sectionName={"Man's kurta"}/>
                <HomeSectionCarosal data={mens_kurta} sectionName={"Man's kurta"}/>
                <HomeSectionCarosal data={mens_kurta} sectionName={"Man's kurta"}/>
                <HomeSectionCarosal data={mens_kurta} sectionName={"Man's kurta"}/>
                <HomeSectionCarosal data={mens_kurta} sectionName={"Man's kurta"}/>
               
               
            </div>
        </div>
    )
}

export default HomePage;