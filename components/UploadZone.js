import React, { Component } from 'react'
import DropzoneComponent from 'react-dropzone-component';

const componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: '/uploadHandler'
};


    //const componentConfig = { postUrl: 'no-url' };
    const djsConfig = { autoProcessQueue: false }
    const eventHandlers = { addedfile: (file) => console.log(file) }

export default class UploadZone extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <DropzoneComponent config={componentConfig}
                eventHandlers={eventHandlers}
                djsConfig={djsConfig} />
            </div>
            
        )
    }
}