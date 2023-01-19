import image from '../images/entrance.jpg'
import { HOUSE_SPACES } from '../utils/contants'

const Entrance = {
    imageUrl: image,
    pitch: 0,
    yaw: 0,
    hotspots: [
        {
            pitch: -1,
            yaw: -5,
            id: HOUSE_SPACES.LIVING
        },
        {
            pitch: -1,
            yaw: -38,
            id: HOUSE_SPACES.DINNING
        },
        {
            pitch: -1,
            yaw: 180,
            id: HOUSE_SPACES.FRONT_1
        },
        {
            pitch: -1,
            yaw: 38,
            id: HOUSE_SPACES.TV_ROOM
        },
        {
            pitch: 20,
            yaw: -70,
            id: HOUSE_SPACES.STUDY
        },
        {
            pitch: -1,
            yaw: -130,
            id: HOUSE_SPACES.KITCHEN
        },
    ]
}

export default Entrance