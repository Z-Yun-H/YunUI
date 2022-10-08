import { ButtonDefault } from './button';

const YunUIPlugin = {
    install(app) {
        ButtonDefault.install?.(app);
    },
};

export default YunUIPlugin;
export * from './button'
