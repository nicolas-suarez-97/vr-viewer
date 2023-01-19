import image from '../images/main-closet.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const MainCloset = {
    imageUrl: image,
    pitch: 0,
    yaw: 0,
    hotspots: [
        {
            pitch: -1,
            yaw: -145,
            id: HOUSE_SPACES.MAIN_ROOM
        },
        {
            pitch: -1,
            yaw: 140,
            id: HOUSE_SPACES.MAIN_BATHROOM
        },
    ]
}

export default MainCloset