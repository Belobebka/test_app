import {ScreenNames, screens} from '../../screens';
import {LayoutComponent, Navigation} from 'react-native-navigation';
import {ComponentType} from 'react';

export interface NavProps {
    componentId: string;
}

export type GetScreenPassProps<T extends ScreenNames> = Omit<
    (typeof screens)[T] extends ComponentType<infer P> ? P : never,
    keyof NavProps
>;

export type ScreenLayoutComponentParam<T extends ScreenNames> = Omit<LayoutComponent<GetScreenPassProps<T>>, 'name'> & {
    name: T;
};

export async function navPush<T extends ScreenNames>(
    componentId: string,
    component: ScreenLayoutComponentParam<T>,
): Promise<string> {
    // @ts-ignore
    const passProps: GetScreenPassProps<T> = {
        ...component.passProps,
        navTransitionType: 'push',
    } as GetScreenPassProps<T>;

    return Navigation.push(componentId, {
        component: {
            ...component,
            passProps,
        },
    });
}
