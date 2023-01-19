import React, { useState } from 'react'
import { Pannellum } from 'pannellum-react'
import './App.css'
import { HOUSE_SPACES } from './utils/contants'
import {
    Front1,
    AuxRoom,
    Corridor,
    Dinning,
    Entrance,
    Garage,
    Garden1,
    Garden2,
    Garden3,
    Garden4,
    Garden5,
    Kitchen,
    Laundry,
    Living,
    MainBathroom,
    MainCloset,
    MainRoom,
    Park,
    Room2,
    Room2Bathroom,
    Room3,
    Room3Bathroom,
    Study,
    Terrace,
    TvRoom ,
} from './imageObject'

function App() {
    const [currentImage, setCurrentImage] = useState(Front1)
    const spacesArray = [
        {name: 'frente', id: HOUSE_SPACES.FRONT_1},
        {name: 'entrada', id: HOUSE_SPACES.ENTRANCE},
        {name: 'comedor', id: HOUSE_SPACES.DINNING},
        {name: 'cocina', id: HOUSE_SPACES.KITCHEN},
        {name: 'garage', id: HOUSE_SPACES.GARAGE},
        {name: 'sala', id: HOUSE_SPACES.LIVING},
        {name: 'habitación principal', id: HOUSE_SPACES.MAIN_ROOM},
        {name: 'habitación 2', id: HOUSE_SPACES.ROOM_2},
        {name: 'habitación 3', id: HOUSE_SPACES.ROOM_3},
        {name: 'jardín', id: HOUSE_SPACES.GARDEN_4},
        {name: 'sala de tv', id: HOUSE_SPACES.TV_ROOM},
        {name: 'estudio', id: HOUSE_SPACES.STUDY},
        {name: 'terraza', id: HOUSE_SPACES.TERRACE}
    ]

    const houseMap = {
        auxRoom: AuxRoom,
        corridor: Corridor,
        dinning: Dinning,
        entrance: Entrance,
        front1: Front1,
        garage: Garage,
        garden1: Garden1,
        garden2: Garden2,
        garden3: Garden3,
        garden4: Garden4,
        garden5: Garden5,
        kitchen: Kitchen,
        laundry: Laundry,
        living: Living,
        mainBathroom: MainBathroom,
        mainCloset: MainCloset,
        mainRoom: MainRoom,
        park: Park,
        room2: Room2,
        room2Bathroom: Room2Bathroom,
        room3: Room3,
        room3Bathroom: Room3Bathroom,
        study: Study,
        terrace: Terrace,
        tvRoom: TvRoom,
    }

    const handleClick = (hotspotId) => {
        setCurrentImage(houseMap[hotspotId])
    }

    return (
        <div>
            <Pannellum
                width="100%"
                height="100vh"
                image={currentImage.imageUrl}
                pitch={currentImage.pitch}
                yaw={currentImage.yaw}
                hfov={100}
                autoLoad
            >
                {currentImage.hotspots.map((hotspot) => (
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={hotspot.pitch}
                        yaw={hotspot.yaw}
                        handleClick={() => handleClick(hotspot.id)}
                    />
                ))}
            </Pannellum>
            <div className={'spaces'}>
                <div className={'spaces__container'}>
                    {spacesArray.map((space) => (
                        <div className={'spaces__item'} onClick={() => handleClick(space.id)}>{space.name}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default App
