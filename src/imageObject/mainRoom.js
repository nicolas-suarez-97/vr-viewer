import image from '../images/main-room.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const MainRoom = {
    imageUrl: image,
    pitch: 0,
    yaw: 30,
    hotspots: [
        {
            pitch: -1,
            yaw: 50,
            id: HOUSE_SPACES.GARDEN_2
        },
        {
            pitch: -1,
            yaw: -30,
            id: HOUSE_SPACES.MAIN_CLOSET
        },
        {
            pitch: -1,
            yaw: -80,
            id: HOUSE_SPACES.CORRIDOR
        },
    ]
}

export default MainRoom