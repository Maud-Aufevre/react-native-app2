import React from 'react';
import { Text, Image, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'

const PostData = ({post}) => {
   
    return ( 
        <View>
            
        <Card>
            <Card.Title>{post.news_desk} {post.section_name}</Card.Title>
            <Card.Divider/>
            <Card.Image source={{uri: post.multimedia[0].url}} />
            <Text style={{marginBottom: 10}}>
                {post.abstract}
            </Text>
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' />
        </Card>
        </View>
}
 
export default PostData;