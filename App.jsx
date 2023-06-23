// import { Provider } from 'react-redux';
// import { NativeBaseProvider, Box} from 'native-base';
// import { NavigationContainer } from '@react-navigation/native';

// import Main from './components/Main';
// import store from './lib/redux/store';

// export default function App() {
//   return (
//     <Provider store={store}>
//       <NativeBaseProvider>
//         <NavigationContainer>
//           <Box safeArea flex={1}>
//             <Main />
//           </Box>
//         </NavigationContainer>
//       </NativeBaseProvider>
//     </Provider>
//   );
// }


import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";


WebBrowser.maybeCompleteAuthSession();


export default function App() {
  const [token, setToken] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    iosClientId: "654611793707-nesft6qm4fbaf3iqlmrqtugp78lbmibu.apps.googleusercontent.com",

  });

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo();
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setUserInfo(user);
    } catch (error) {
      console.error('ERROR WHILE FETCHING USER INFO: ', error);
    }
  };

  return (
    <View style={styles.container}>
      {userInfo === null ? (
        <Button
          title="Sign in with Google"
          disabled={!request}
          onPress={() => {
            promptAsync();
          }}
        />
      ) : (
        <Text style={styles.text}>{userInfo.name}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
