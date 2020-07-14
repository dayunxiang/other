module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/assets/style/_mixin.scss";`
            }
        }
    }
};
