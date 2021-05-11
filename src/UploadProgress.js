import React, {useState} from 'react'

import {Line} from 'rc-progress'
import {useItemProgressListener} from '@rpldy/uploady'

const UploadProgress = () => {
    const [progress, setProgess] = useState(0)

    const progressData = useItemProgressListener()

    if (progressData && progressData.completed > progress) {
        setProgess(() => progressData.completed)
    }

    return (
        progressData && (
            <Line
                style={{height: '10px', marginTop: '20px'}}
                strokeWidth={2}
                strokeColor={progress === 100 ? '#00a626' : '#2db7f5'}
                percent={progress}
            />
        )
    )
}

export default UploadProgress
