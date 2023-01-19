import image from '../images/study.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const Study = {
    imageUrl: image,
    pitch: 0,
    yaw: -90,
    hotspots: [
        {
            pitch: -30,
            yaw: 45,
            id: HOUSE_SPACES.ENTRANCE
        },
        {
            pitch: -1,
            yaw: 100,
            id: HOUSE_SPACES.TERRACE
        },
        {
            pitch: -20,
            yaw: 175,
            id: HOUSE_SPACES.LIVING
        },
    ]
}

export default Study