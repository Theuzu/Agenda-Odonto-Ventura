import * as React from 'react';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import Home from '../screens/Home/index.js';
import Login from '../screens/Login/index.js';

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
    return (

        <AuthStack.Navigator>

            <AuthStack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />

        </AuthStack.Navigator>

    );
}

export default AuthRoutes;