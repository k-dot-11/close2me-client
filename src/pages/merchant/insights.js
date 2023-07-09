import { Flex } from "@chakra-ui/react";
import React from "react";
import GoogleMapReact from 'google-map-react';

const Insights = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627,
        },
        zoom: 11,
    };
    return (
        <Flex p={3} flexDirection="column">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            />
        </Flex>
    );
};

export default Insights;
