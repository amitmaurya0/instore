import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { TouchableOpacity, Image } from 'react-native';
import { images } from '../contants/images';
import { FontAwesome } from '@expo/vector-icons';
import { theme } from '../contants/theme';

const bgColor = type =>{
    switch(type) {
        case 'google':
            return 'googleBlue';
        break;
        case 'facebook':
            return 'facebookBlue';
        break;
        default:
            return 'white'
        break;
    }
}

const LoginButton = ({children, type, onPress}) => (
    <TouchableOpacity onPress={onPress}>
        <Box dir="row" mb="sm" align="center" shadow={1} bg={bgColor(type)} w="80%" self="center" p="2xs" radius="2xs">
            <Box mr="sm">
                <Box bg="white" h={32} w={32} radius="2xs" center style={{position:'relative'}}>
                    {type === 'google' && <Image source={images.googleColorIcon} />}
                    {type === 'facebook' && <FontAwesome name="facebook" color={theme.color.facebookBlue} size={30} style={{position:'absolute', right:5, bottom: -3}}/>}
                </Box>
            </Box>
            <Box>
                <Text color="white" size="md">{children}</Text>
            </Box>
        </Box>
    </TouchableOpacity>
)

export default LoginButton;