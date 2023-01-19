import image from '../images/corridor.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const Corridor = {
    imageUrl: image,
    pitch: 0,
    yaw: 90,
    hotspots: [
        {
            pitch: -1,
            yaw: 0,
            id: HOUSE_SPACES.MAIN_ROOM
        },
        {
            pitch: -1,
            yaw: 88,
            id: HOUSE_SPACES.ROOM_2
        },
        {
            pitch: -1,
            yaw: 145,
            id: HOUSE_SPACES.ROOM_3
        },
        {
            pitch: -5,
            yaw: -155,
            id: HOUSE_SPACES.TV_ROOM
        },
    ]
}

export default Corridor