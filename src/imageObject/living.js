import image from '../images/living.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const Living = {
    imageUrl: image,
    pitch: 0,
    yaw: 60,
    hotspots: [
        {
            pitch: -1,
            yaw: -1,
            id: HOUSE_SPACES.ENTRANCE
        },
        {
            pitch: 40,
            yaw: -1,
            id: HOUSE_SPACES.STUDY
        },
        {
            pitch: -1,
            yaw: 40,
            id: HOUSE_SPACES.DINNING
        },
        {
            pitch: -1,
            yaw: -18,
            id: HOUSE_SPACES.TV_ROOM
        },
        {
            pitch: -1,
            yaw: 180,
            id: HOUSE_SPACES.GARDEN_4
        },
    ]
}

export default Living