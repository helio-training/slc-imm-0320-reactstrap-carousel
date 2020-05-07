import React from 'react'

export const Content = ({item}) => {
    return (
        <div>
            <div>
                {item.caption}
            </div>
            <div>
                Back
            </div>
        </div>
    )
}