import {Dimensions, PixelRatio} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const pixelRatio = PixelRatio.get();

const baseFont = 14;

const adjustFont = (size) => {
    const newSize = size * width / 320;
    if (pixelRatio === 2) {
        // iphone 5s and older Androids
        return newSize - 2;
    }
    if (pixelRatio === 3) {
        // iphone 6-7 plus
        return newSize;
    }
    return newSize;
};

export default adjustFont;