import React, { Component } from 'react';
import { Image } from 'react-native';
import { Box, Text } from 'react-native-design-utility'
import { images } from '../contants/images';

const OnboardingLogo = () =>(
    <Box center >
        <Box mb="sm">
            <Image source={images.logo} />
        </Box>
        <Box mb="sm">

        <Text size="2xl">in<Text color="green" size="2xl">Store</Text></Text>
        </Box>
        <Text size="sm">easy grocery shopping.</Text>
    </Box>
)

export default OnboardingLogo;