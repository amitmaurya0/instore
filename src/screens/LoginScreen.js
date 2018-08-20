import React, { Component } from 'react';
import { Alert, Animated } from 'react-native';
import { Box, Text } from 'react-native-design-utility';
import OnboardingLogo from '../commons/OnboardingLogo';
import LoginButton from '../commons/LoginButton';
import { FacebookApi } from '../api/facebook';
import { GoogleApi } from '../api/Google';

const BoxAnimated = Animated.createAnimatedComponent(Box);


export default class LoginScreen extends Component {
    state = { 
        opacity: new Animated.Value(0),
        position: new Animated.Value(0),
    }
    
    opacityAnim = () =>{
        Animated.timing(this.state.opacity,{
            toValue:1,
            duration:200,
            delay:100
        }).start();
    }
    positionAnim = () =>{
        Animated.timing(this.state.position,{
            toValue:1,
            duration:300,
            useNativeDriver: true
        }).start();
    }

    componentDidMount(){
        Animated.parallel([this.opacityAnim(), this.positionAnim()])
        this.positionAnim(); 
    }
 
    onGoolePress = async () =>{
        try {
            const token = await GoogleApi.loginAsync();
            console.log('token:', token);
        } catch (error) {
            console.log('error', error)
        }
    }

    onFaceookPress = async () =>{
        try {
            const token = await FacebookApi.loginAsync();
            console.log('token:', token);
        } catch (error) {
            console.log('error', error)
        }
    }

    render() {
        const { opacity } = this.state;
        const logoTranslate = this.state.position.interpolate({
            inputRange: [0,1],
            outputRange: [150,0]
        })
        return (
            <Box f={1} center bg="white">
                <BoxAnimated f={1} style={{transform:[
                    {
                        translateY:logoTranslate
                    }
                ]}}>

                    <Box f={1} center> 
                        <OnboardingLogo />
                    </Box>
                </BoxAnimated>
                <BoxAnimated f={0.9} w={1} style={{opacity}}>
                    <LoginButton type="google" onPress={this.onGoolePress}>Continue with Google</LoginButton>
                    <LoginButton type="facebook" onPress={this.onFaceookPress}>Continue with Facebook</LoginButton>
                </BoxAnimated>
            </Box>
        );
    }
}