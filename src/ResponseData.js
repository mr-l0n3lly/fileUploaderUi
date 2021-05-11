import React, {useMemo, useState} from 'react'
import {getToken} from './Utils/Common'

import Uploady, {UPLOADER_EVENTS, useUploady} from '@rpldy/uploady'
import UploadButton from '@rpldy/upload-button'

import UploadProgress from './UploadProgress'

const ResponseData = () => {
    const [response, setResponse] = useState([])

    const listeners = useMemo(
        () => ({
            [UPLOADER_EVENTS.ITEM_FINISH]: (item) => {
                setResponse(item.uploadResponse.data.data)
            },
        }),
        []
    )

    return (
        <Uploady
            listeners={listeners}
            clearPendingOnAdd
            destination={{
                url: 'http://104.131.52.57:3000/api/v1/upload/file',
                headers: {
                    Authorization: getToken(),
                },
            }}
            accept=".xlsx"
        >
            <UploadButton />
            <br />
            <UploadProgress />

            <ul>
                {response.map((item) => {
                    return <li>{item}</li>
                })}
            </ul>
            <br />
        </Uploady>
    )
}

export default ResponseData
