declare module "*.vue" {
    import { DefineComponent } from "vue";
    const compoents: DefineComponent<{}, {}, any>;
    export default compoents;
}