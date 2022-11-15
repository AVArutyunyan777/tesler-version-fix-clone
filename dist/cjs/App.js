"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewWidget = void 0;
const react_1 = __importDefault(require("react"));
require("antd/dist/antd.less");
require("@formily/antd/esm/style.less");
const antd_1 = require("@formily/antd");
const core_1 = require("@formily/core");
const react_2 = require("@formily/react");
const Text = (_a) => {
    var { value, mode, content } = _a, props = __rest(_a, ["value", "mode", "content"]);
    const tagName = mode === 'normal' || !mode ? 'div' : mode;
    return react_1.default.createElement(tagName, props, value || content);
};
const SchemaField = (0, react_2.createSchemaField)({
    components: {
        Space: antd_1.Space,
        FormGrid: antd_1.FormGrid,
        FormLayout: antd_1.FormLayout,
        FormTab: antd_1.FormTab,
        FormCollapse: antd_1.FormCollapse,
        ArrayTable: antd_1.ArrayTable,
        ArrayCards: antd_1.ArrayCards,
        FormItem: antd_1.FormItem,
        DatePicker: antd_1.DatePicker,
        Checkbox: antd_1.Checkbox,
        Cascader: antd_1.Cascader,
        Editable: antd_1.Editable,
        Input: antd_1.Input,
        NumberPicker: antd_1.NumberPicker,
        Switch: antd_1.Switch,
        Password: antd_1.Password,
        PreviewText: antd_1.PreviewText,
        Radio: antd_1.Radio,
        Reset: antd_1.Reset,
        Select: antd_1.Select,
        Submit: antd_1.Submit,
        TimePicker: antd_1.TimePicker,
        Transfer: antd_1.Transfer,
        TreeSelect: antd_1.TreeSelect,
        Upload: antd_1.Upload,
        // Card,
        // Slider,
        // Rate,
        Text
    },
});
console.log(SchemaField);
const PreviewWidget = (props) => {
    const form = react_1.default.useMemo(() => (0, core_1.createForm)(), []);
    const { form: formProps, schema } = props.tree;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(antd_1.Form, Object.assign({}, formProps, { form: form }),
            react_1.default.createElement(SchemaField, { schema: schema }))));
};
exports.PreviewWidget = PreviewWidget;
const Preview = (data) => {
    const schema = data.initialJson;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(exports.PreviewWidget, { tree: schema })));
};
exports.default = Preview;
//# sourceMappingURL=App.js.map