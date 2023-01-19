import image from '../images/laundry.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const Laundry = {
    imageUrl: image,
    pitch: 0,
    yaw: 70,
    hotspots: [
        {
            pitch: -1,
            yaw: 124,
            id: HOUSE_SPACES.AUX_ROOM
        },
        {
            pitch: -1,
            yaw: 195,
            id: HOUSE_SPACES.GARAGE
        },
        {
            pitch: -1,
            yaw: -100,
            id: HOUSE_SPACES.KITCHEN
        },
    ]
}

export default Laundry