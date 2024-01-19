/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');
const {getDefaultConfig} = require('metro-config');
const watchFolders = [];
const extraNodeModules = {};
const nodeModulesPaths = [];

module.exports = (async () => {
    const {
        resolver: {sourceExts, assetExts},
    } = await getDefaultConfig();
    return {
        transformer: {
            getTransformOptions: async () => ({
                transform: {
                    experimentalImportSupport: false,
                    inlineRequires: true,
                },
            }),
            babelTransformerPath: require.resolve('react-native-svg-transformer'),
        },
        watchFolders,
        resolver: {
            extraNodeModules,
            nodeModulesPaths: [path.join(__dirname, 'node_modules'), ...nodeModulesPaths],
            assetExts: assetExts.filter(ext => ext !== 'svg'),
            sourceExts: [...sourceExts, 'svg'],
            resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],
        },
    };
})();
