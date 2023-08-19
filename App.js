import { StatusBar, SafeAreaView } from 'react-native';

import Cesta from './src/telas/Cesta/Cesta';
import mock from './src/mocks/cesta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
