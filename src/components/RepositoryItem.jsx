import React from 'react'
import { View, StyleSheet, Image } from "react-native";
import StyledText from './StyledText';
import RepositoryStats from './RepositoryStats'
import theme from '../theme';

const RepositoryItemHeader = ({ownerAvatarurl, fullName, description, language}) => (
    <View>
        <Image style={styles.image} source={{uri: ownerAvatarurl}}/>
        <StyledText fontSize='subheading' fontWeight='bold' > FullName: {fullName}
        </StyledText>
        <StyledText > Description: {description}</StyledText>
        <StyledText style={styles.language}> Language: {language}</StyledText>
    </View>
)

const RepositoryItem = (props) => (
            <View key={props.id} style={styles.container}>
                <RepositoryItemHeader {...props}/>
                <RepositoryStats {...props} />
                </View>
)

const styles = StyleSheet.create({
    container: {
        padding:20,
        paddingBottom:5,
        paddingTop: 5,
    },
    language: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden'
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4,
    }
})

export default RepositoryItem
  