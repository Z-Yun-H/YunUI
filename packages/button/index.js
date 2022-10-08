import Button from './src/button.vue';

export const ButtonDefault = {
    install(app) {
        app.component('yun-btn', Button);
    },
};
export {Button}
