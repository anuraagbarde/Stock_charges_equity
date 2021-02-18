import React from 'react';
import { Avatar, ListItem } from 'react-native-elements';
import { View} from 'react-native';
import Anchor from './anchor'


const linkedinURL = 'https://linkedin.com/in/anuraagbarde/'
const Author = () => {

    const title = 'Anuraag barde';
    const role = 'Developer/Computer Engineer';
    const avatar_url = 'https://avatars.githubusercontent.com/u/43986189?s=128'
    return (
        <View>
            <ListItem key={title}>
                <Avatar
                    title= {linkedinURL}
                    size="medium"
                    source={{ uri: avatar_url }}
                />
                <ListItem.Content>
                    <ListItem.Title><Anchor href={linkedinURL}>{title}</Anchor></ListItem.Title>
                    {/* <ListItem.SubTitle>{role}</ListItem.SubTitle> */}
                </ListItem.Content>
                <ListItem.Chevron />
            </ListItem>
        </View>
     );
}

export default Author;


