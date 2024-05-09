import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {
  title: String;
};

const RoundButton = ({title}: Props): React.JSX.Element => (
  <TouchableOpacity>
    <Text>{title}</Text>
  </TouchableOpacity>
);
export default RoundButton;