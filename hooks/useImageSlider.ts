import { useCallback, useState } from "react";

type ReturnType = [number, () => void, () => void]

const useImageSlider = (imageList : string[]): ReturnType => {
    const [imageNumber, setImageNumber] = useState<number>(0);

    const nextImage = useCallback(() => {
        if (imageNumber !== imageList.length - 1) {
            setImageNumber(imageNumber + 1)
        }
    }, [imageNumber])

    const prevImage = useCallback(() => {
        if (imageNumber !== 0) {
            setImageNumber(imageNumber - 1)
        }
    },[imageNumber])
    
    return [imageNumber, nextImage, prevImage]
}

export default useImageSlider;