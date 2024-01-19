import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import {screens} from './src/screens';

const enhancedScreens = Object.keys(screens).map(key => {
    const component = screens[key];

    return {
        key,
        Screen: component,
    };
});

enhancedScreens.forEach(({key, Screen}) => {
    Navigation.registerComponent(
        key,
        () => props => {
            return (
                <Provider store={store}>
                    <Screen {...props} />
                </Provider>
            );
        },
        () => Screen,
    );
});

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: 'Home',
                        },
                    },
                ],
            },
        },
    });
});
