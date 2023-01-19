import image from '../images/terrace.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const Terrace = {
    imageUrl: image,
    pitch: 0,
    yaw: 0,
    hotspots: [
        {
            pitch: -20,
            yaw: -1,
            id: HOUSE_SPACES.GARDEN_5
        },
        {
            pitch: -15,
            yaw: 60,
            id: HOUSE_SPACES.GARDEN_4
        },
        {
            pitch: -1,
            yaw: -160,
            id: HOUSE_SPACES.STUDY
        },
    ]
}

export default Terrace