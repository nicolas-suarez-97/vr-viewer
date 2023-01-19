import image from '../images/front-1.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const Front1 = {
    imageUrl: image,
    pitch: 0,
    yaw: 0,
    hotspots: [
        {
            pitch: -1,
            yaw: -1,
            id: HOUSE_SPACES.ENTRANCE
        },
        {
            pitch: -1,
            yaw: -57,
            id: HOUSE_SPACES.GARAGE
        },
        {
            pitch: -1,
            yaw: -80,
            id: HOUSE_SPACES.PARK
        }
    ]
}

export default Front1