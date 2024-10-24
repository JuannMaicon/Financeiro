import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Pagina1 from '../pages/Pagina1';
import Pagina2 from '../pages/Pagina2';

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
  return(
    <AuthStack.Navigator>
      <AuthStack.Screen 
        name="Pagina1"
        component={Pagina1}
        options={{
          headerShown: false,
        }}
      />

<AuthStack.Screen
        name="Pagina2"
        component={Pagina2}
        options={{
          headerStyle:{
            backgroundColor: '#3b3dbf',
            borderBottomWidth: 1,
            borderBottomColor: '#00b94a'
          },
          headerTintColor: '#FFF',
          headerTitle: 'Voltar',
          headerBackTitleVisible: false,
        }}
      />
    </AuthStack.Navigator>
  )
}

export default AuthRoutes;