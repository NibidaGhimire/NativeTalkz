// // import React, { useState } from 'react';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import { createStackNavigator } from '@react-navigation/stack';
// // import Login from './src/Login'; 
// // import Home from './src/Home'; 
// // import PhraseBox from './src/PhraseBox'; 
// // import DiscussionForum from './src/DiscussionForum'; 
// // import UserProfile from './src/UserProfile'; 
// // import Notifications from './src/Notifications'; 
// // // import Videos from './src/Videos'; 

// // const Tab = createBottomTabNavigator();
// // const Stack = createStackNavigator();

// // const App = () => {
// //   const [isLoggedIn, setIsLoggedIn] = useState(false);


// //   const handleLogin = () => {

// //     setIsLoggedIn(true);
// //   };


// // return (
// //   <NavigationContainer>
// //     {isLoggedIn ? (
// //       <Tab.Navigator>
// //         <Tab.Screen name="Home" component={Home} 
// //           options={{ 
// //               title: '' ,
// //           headerTitleStyle: {
// //             color: '#fff', // Lavender title color
// //           },
// //           headerStyle: {
// //             backgroundColor: '#b195d2',
// //           },
// //           }} />
// //         <Tab.Screen name="PhraseBox" component={PhraseBox} 
// //           options={{ 
// //               title: '' ,
// //           headerTitleStyle: {
// //             color: '#fff', // Lavender title color
// //           },
// //           headerStyle: {
// //             backgroundColor: '#b195d2',
// //           },
// //           }} />
// //           <Tab.Screen name="DiscussionForum" component={DiscussionForum} 
// //           options={{ title: '',
// //           headerTitleStyle: {
// //             color: '#e6e6fa', // Lavender title color
// //           },
// //           headerStyle: {
// //             backgroundColor: '#b195d2',
// //           },
// //           }} />

// //           <Tab.Screen name="Notifications" component={Notifications} 
// //           options={{ title: '',
// //           headerTitleStyle: {
// //             color: '#e6e6fa', // Lavender title color
// //           },
// //           headerStyle: {
// //             backgroundColor: '#b195d2',
// //           },
// //           }} />

// //           <Tab.Screen name="UserProfile" component={UserProfile} 
// //           options={{ title: 'User Profile',
// //           headerTitleStyle: {
// //             color: '#e6e6fa', // Lavender title color
// //           }, 
// //           headerStyle: {
// //             backgroundColor: '#b195d2',
// //           },
// //            }} />

// //           {/* <Tab.Screen name="Videos" component={Videos} options={{ title: 'Videos' }} /> */}
// //       </Tab.Navigator>
// //     ) : (
// //       <Stack.Navigator initialRouteName="Login">
// //         <Stack.Screen
// //           name="Login"
// //           component={Login}
// //           options={{
// //             title: 'Welcome!',
// //             headerTitleStyle: {
// //               color: '#e6e6fa', // Lavender title color
// //             },
// //             headerStyle: {
// //               backgroundColor: '#b195d2',
// //             },
// //           }}
// //           initialParams={{ onLogin: handleLogin }}
// //         />
// //         {/* Include the Home screen in the stack */}
// //         <Stack.Screen
// //           name="Home"
// //           component={Home}
// //           options={{
// //             title: 'Home',
// //             headerTitleStyle: {
// //               color: '#e6e6fa', // Lavender title color
// //             },
// //             headerStyle: {
// //               backgroundColor: '#b195d2',
// //             },
// //           }}
// //         />
// //       </Stack.Navigator>
// //     )}
// //   </NavigationContainer>
// // );
// // };
// // export default App;



// import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Login from './src/Login';
// import Home from './src/Home';
// import Signup from './src/Signup';
// import PhraseBox from './src/PhraseBox';
// import DiscussionForum from './src/DiscussionForum';
// import UserProfile from './src/UserProfile';
// import Notifications from './src/Notifications';

// const Stack = createStackNavigator();

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setIsLoggedIn(true);
//   };

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Login">
//         <Stack.Screen
//           name="Login"
//           component={Login}
//           options={{
//             title: 'Welcome!',
//             headerTitleStyle: {
//               color: '#e6e6fa', // Lavender title color
//             },
//             headerStyle: {
//               backgroundColor: '#b195d2',
//             },
//           }}
//           initialParams={{ onLogin: handleLogin }}
//         />
//         <Stack.Screen
//           name="Signup"
//           component={Signup} // Add the Signup component here
//           options={{
//             title: 'Signup',
//             headerTitleStyle: {
//               color: '#e6e6fa', // Lavender title color
//             },
//             headerStyle: {
//               backgroundColor: '#b195d2',
//             },
//           }}
//         />
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{
//             title: 'Home',
//             headerTitleStyle: {
//               color: '#e6e6fa', // Lavender title color
//             },
//             headerStyle: {
//               backgroundColor: '#b195d2',
//             },
//           }}
//         />
//         <Stack.Screen
//           name="PhraseBox"
//           component={PhraseBox}
//           options={{
//             title: 'Phrase Box',
//             headerTitleStyle: {
//               color: '#e6e6fa', // Lavender title color
//             },
//             headerStyle: {
//               backgroundColor: '#b195d2',
//             },
//           }}
//         />
//         <Stack.Screen
//           name="DiscussionForum"
//           component={DiscussionForum}
//           options={{
//             title: 'Discussion Forum',
//             headerTitleStyle: {
//               color: '#e6e6fa', // Lavender title color
//             },
//             headerStyle: {
//               backgroundColor: '#b195d2',
//             },
//           }}
//         />
//         <Stack.Screen
//           name="Notifications"
//           component={Notifications}
//           options={{
//             title: 'Notifications',
//             headerTitleStyle: {
//               color: '#e6e6fa', // Lavender title color
//             },
//             headerStyle: {
//               backgroundColor: '#b195d2',
//             },
//           }}
//         />
//         <Stack.Screen
//           name="UserProfile"
//           component={UserProfile}
//           options={{
//             title: 'User Profile',
//             headerTitleStyle: {
//               color: '#e6e6fa', // Lavender title color
//             },
//             headerStyle: {
//               backgroundColor: '#b195d2',
//             },
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Login';
import Home from './src/Home';
import Signup from './src/Signup';
import PhraseBox from './src/PhraseBox';
import DiscussionForum from './src/DiscussionForum';
import UserProfile from './src/UserProfile';
import Notifications from './src/Notifications';
import UserContribution from './src/UserContribution'; // Import UserContribution

const Stack = createStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Welcome!',
            headerTitleStyle: {
              color: '#e6e6fa', // Lavender title color
            },
            headerStyle: {
              backgroundColor: '#b195d2',
            },
          }}
          initialParams={{ onLogin: handleLogin }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            title: 'Signup',
            headerTitleStyle: {
              color: '#e6e6fa',
            },
            headerStyle: {
              backgroundColor: '#b195d2',
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerTitleStyle: {
              color: '#e6e6fa',
            },
            headerStyle: {
              backgroundColor: '#b195d2',
            },
          }}
        />
        <Stack.Screen
          name="PhraseBox"
          component={PhraseBox}
          options={{
            title: 'Phrase Box',
            headerTitleStyle: {
              color: '#e6e6fa',
            },
            headerStyle: {
              backgroundColor: '#b195d2',
            },
          }}
        />
        <Stack.Screen
          name="DiscussionForum"
          component={DiscussionForum}
          options={{
            title: 'Discussion Forum',
            headerTitleStyle: {
              color: '#e6e6fa',
            },
            headerStyle: {
              backgroundColor: '#b195d2',
            },
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{
            title: 'Notifications',
            headerTitleStyle: {
              color: '#e6e6fa',
            },
            headerStyle: {
              backgroundColor: '#b195d2',
            },
          }}
        />
        <Stack.Screen
          name="UserProfile"
          component={UserProfile}
          options={{
            title: 'User Profile',
            headerTitleStyle: {
              color: '#e6e6fa',
            },
            headerStyle: {
              backgroundColor: '#b195d2',
            },
          }}
        />
        <Stack.Screen
          name="UserContribution" // Add the UserContribution screen
          component={UserContribution}
          options={{
            title: 'User Contribution',
            headerTitleStyle: {
              color: '#e6e6fa',
            },
            headerStyle: {
              backgroundColor: '#b195d2',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
