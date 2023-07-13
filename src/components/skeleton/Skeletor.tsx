import React, { useState } from 'react'
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const Skeletor = () => {
    return (
        <div>
            <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <p>
                    <Skeleton count={3} />
                </p>
            </SkeletonTheme>
        </div>
    )
}

export default Skeletor