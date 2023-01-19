import image from '../images/park.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const Park = {
    imageUrl: image,
    pitch: 0,
    yaw: -90,
    hotspots: [
        {
            pitch: -1,
            yaw: 180,
            id: HOUSE_SPACES.GARAGE
        },
        {
            pitch: -1,
            yaw: 150,
            id: HOUSE_SPACES.GARDEN_5
        },
    ]
}

export default Park