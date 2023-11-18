import {Text, View} from 'react-native';
import {TUser} from '../app/API';

type UserDetailProps = {
    user: TUser;
};
function UserDetail(props: UserDetailProps) {
    return (
        <View>
            <Text>USER DETAIL {props.user.name}</Text>
        </View>
    );
}

export default UserDetail;
