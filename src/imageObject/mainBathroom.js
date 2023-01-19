import image from '../images/main-bathroom.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const MainBathroom = {
    imageUrl: image,
    pitch: 0,
    yaw: 70,
    hotspots: [
        {
            pitch: -1,
            yaw: -10,
            id: HOUSE_SPACES.MAIN_CLOSET
        },
        {
            pitch: -1,
            yaw: -20,
            id: HOUSE_SPACES.MAIN_ROOM
        },
    ]
}

export default MainBathroom