"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreviewWidget = void 0;
const react_1 = require("react");
require("antd/dist/antd.min.css");
const globalStyles_1 = require("./globalStyles");
const antd_1 = require("@formily/antd");
const core_1 = require("@formily/core");
const react_2 = require("@formily/react");
const antd_2 = require("antd");
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
        Card: antd_2.Card,
        Slider: antd_2.Slider,
        Rate: antd_2.Rate,
    },
});
const PreviewWidget = (props) => {
    const form = (0, react_1.useMemo)(() => (0, core_1.createForm)(), []);
    const formProps = props.tree.form;
    const schema = props.tree.schema;
    console.log(formProps);
    console.log(form);
    console.log(schema);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(antd_1.Form, Object.assign({}, formProps, { form: form }),
            react_1.default.createElement(SchemaField, { schema: schema }))));
};
exports.PreviewWidget = PreviewWidget;
const fromData = {
    'form': {
        'labelCol': 6,
        'wrapperCol': 12
    },
    'schema': {
        'type': 'object',
        'properties': {
            '76agnxnid72': {
                'type': 'void',
                'x-component': 'Card',
                'x-component-props': {
                    'title': 'Страхователь',
                    'style': {
                        'display': 'block',
                        'flexDirection': 'row',
                        'flexWrap': 'wrap',
                        'justifyContent': 'flex-start',
                        'alignContent': 'flex-end',
                        'alignItems': 'center'
                    }
                },
                'x-designable-id': '76agnxnid72',
                'x-index': 0,
                'properties': {
                    'mnjsx1ul2jg': {
                        'type': 'void',
                        'x-component': 'FormGrid',
                        'x-validator': [],
                        'x-component-props': {},
                        'x-designable-id': 'mnjsx1ul2jg',
                        'x-index': 0,
                        'properties': {
                            '109ck662n04': {
                                'type': 'void',
                                'x-component': 'FormGrid.GridColumn',
                                'x-validator': [],
                                'x-component-props': {
                                    'style': {
                                        'display': 'flex',
                                        'flexDirection': 'column',
                                        'flexWrap': 'nowrap',
                                        'justifyContent': 'flex-start',
                                        'alignItems': 'flex-end',
                                        'width': 'inherit',
                                        'alignContent': 'center',
                                        'margin': '0px 0px 0px 0px'
                                    },
                                    'gridSpan': 1
                                },
                                'x-designable-id': '109ck662n04',
                                'x-index': 0,
                                'properties': {
                                    'LAST_NAME': {
                                        'type': 'string',
                                        'title': 'Фамилия',
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-validator': [],
                                        'x-component-props': {
                                            'size': 'middle',
                                            'style': {
                                                'display': 'flex',
                                                'flexDirection': 'row',
                                                'flexWrap': 'wrap',
                                                'justifyContent': 'center',
                                                'alignItems': 'center'
                                            }
                                        },
                                        'x-decorator-props': {
                                            'colon': false,
                                            'labelWidth': 'inherit',
                                            'wrapperWidth': '350px',
                                            'wrapperCol': 0,
                                            'layout': 'vertical'
                                        },
                                        'x-pattern': 'readOnly',
                                        'name': 'LAST_NAME',
                                        'x-designable-id': 'vea3l7kdc2g',
                                        'x-index': 0
                                    },
                                    'BIRTH_DATE': {
                                        'type': 'string',
                                        'title': 'Дата рождения',
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-validator': [],
                                        'x-component-props': {
                                            'size': 'middle'
                                        },
                                        'x-decorator-props': {
                                            'colon': false,
                                            'labelWidth': 'inherit',
                                            'wrapperWidth': '350px',
                                            'wrapperCol': 0,
                                            'layout': 'vertical'
                                        },
                                        'x-pattern': 'readOnly',
                                        'x-designable-id': 'teyc1ghvriq',
                                        'x-index': 1,
                                        'name': 'BIRTH_DATE'
                                    },
                                    'CITIZENSHIP': {
                                        'type': 'string',
                                        'title': 'Гражданство',
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-validator': [],
                                        'x-component-props': {
                                            'size': 'middle'
                                        },
                                        'x-decorator-props': {
                                            'colon': false,
                                            'labelWidth': 'inherit',
                                            'wrapperWidth': '350px',
                                            'wrapperCol': 0,
                                            'layout': 'vertical'
                                        },
                                        'x-pattern': 'readOnly',
                                        'x-designable-id': 'ha1cqohqeym',
                                        'x-index': 2,
                                        'name': 'CITIZENSHIP'
                                    }
                                }
                            },
                            'rq4zwha8pkm': {
                                'type': 'void',
                                'x-component': 'FormGrid.GridColumn',
                                'x-validator': [],
                                'x-component-props': {
                                    'gridSpan': 1,
                                    'style': {
                                        'display': 'flex',
                                        'flexDirection': 'column',
                                        'flexWrap': 'nowrap',
                                        'alignItems': 'flex-end',
                                        'justifyContent': 'flex-start',
                                        'alignContent': 'center',
                                        'margin': '0px 10px 0px 0px'
                                    }
                                },
                                'x-designable-id': 'rq4zwha8pkm',
                                'x-index': 1,
                                'properties': {
                                    'FIRST_NAME': {
                                        'type': 'string',
                                        'title': 'Место рождения',
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-validator': [],
                                        'x-component-props': {
                                            'size': 'middle',
                                            'maxLength': null
                                        },
                                        'x-decorator-props': {
                                            'colon': false,
                                            'wrapperWidth': '350px',
                                            'layout': 'vertical'
                                        },
                                        'x-pattern': 'readOnly',
                                        'name': 'FIRST_NAME',
                                        'x-designable-id': '21m3vr5fuf7',
                                        'x-index': 0
                                    },
                                    'INN_FL': {
                                        'type': 'string',
                                        'title': 'ИНН',
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-validator': [],
                                        'x-component-props': {
                                            'size': 'middle',
                                            'maxLength': null
                                        },
                                        'x-decorator-props': {
                                            'colon': false,
                                            'wrapperWidth': '350px',
                                            'layout': 'vertical'
                                        },
                                        'x-pattern': 'readOnly',
                                        'name': 'INN_FL',
                                        'x-designable-id': 'dly9189a5w1',
                                        'x-index': 1
                                    }
                                }
                            },
                            'peztusfsz8h': {
                                'type': 'void',
                                'x-component': 'FormGrid.GridColumn',
                                'x-validator': [],
                                'x-component-props': {
                                    'gridSpan': 1,
                                    'style': {
                                        'display': 'flex',
                                        'flexDirection': 'column',
                                        'flexWrap': 'nowrap',
                                        'justifyContent': 'flex-start',
                                        'alignItems': 'flex-end',
                                        'margin': '0px 10px 0px 0px'
                                    }
                                },
                                'x-designable-id': 'peztusfsz8h',
                                'x-index': 2,
                                'properties': {
                                    'MIDDLE_NAME': {
                                        'type': 'string',
                                        'title': 'Отчество',
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-validator': [],
                                        'x-component-props': {
                                            'size': 'middle'
                                        },
                                        'x-decorator-props': {
                                            'colon': false,
                                            'wrapperWidth': '350px',
                                            'layout': 'vertical'
                                        },
                                        'x-pattern': 'readOnly',
                                        'name': 'MIDDLE_NAME',
                                        'x-designable-id': 'yu6hyjchkf2',
                                        'x-index': 0
                                    },
                                    'GENDER': {
                                        'type': 'string',
                                        'title': 'Пол',
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-validator': [],
                                        'x-component-props': {
                                            'size': 'middle'
                                        },
                                        'x-decorator-props': {
                                            'colon': false,
                                            'wrapperWidth': '350px',
                                            'layout': 'vertical'
                                        },
                                        'x-pattern': 'readOnly',
                                        'name': 'GENDER',
                                        'x-designable-id': 'sjcd1ltb55i',
                                        'x-index': 1
                                    },
                                    'MARITAL_STATUS': {
                                        'type': 'string',
                                        'title': 'Семейное положение',
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-validator': [],
                                        'x-component-props': {
                                            'size': 'middle'
                                        },
                                        'x-decorator-props': {
                                            'colon': false,
                                            'wrapperWidth': '350px',
                                            'layout': 'vertical'
                                        },
                                        'x-pattern': 'readOnly',
                                        'name': 'MARITAL_STATUS',
                                        'x-designable-id': 'k36fz5tx7uu',
                                        'x-index': 2
                                    }
                                }
                            }
                        }
                    }
                }
            },
            'yjuxukkng7w': {
                'type': 'void',
                'x-component': 'Card',
                'x-component-props': {
                    'title': 'Контактные данные',
                    'style': {
                        'display': 'block',
                        'flexDirection': 'row',
                        'flexWrap': 'wrap',
                        'justifyContent': 'flex-start',
                        'alignContent': 'flex-end',
                        'alignItems': 'center'
                    }
                },
                'x-designable-id': 'yjuxukkng7w',
                'x-index': 1,
                'properties': {
                    'd522pig9336': {
                        'type': 'void',
                        'x-component': 'FormGrid',
                        'x-validator': [],
                        'x-component-props': {},
                        'x-designable-id': 'd522pig9336',
                        'x-index': 0,
                        'properties': {
                            'xn7xuil3uiu': {
                                'type': 'void',
                                'x-component': 'FormGrid.GridColumn',
                                'x-validator': [],
                                'x-component-props': {
                                    'style': {
                                        'display': 'flex',
                                        'flexDirection': 'column',
                                        'flexWrap': 'nowrap',
                                        'justifyContent': 'flex-start',
                                        'alignItems': 'flex-end',
                                        'width': 'inherit',
                                        'alignContent': 'center',
                                        'margin': '0px 10px 0px 0px'
                                    },
                                    'gridSpan': 1
                                },
                                'x-designable-id': 'xn7xuil3uiu',
                                'x-index': 0,
                                'properties': {
                                    'qd9qvo5de8t': {
                                        'type': 'string',
                                        'title': 'Мобильный телефон',
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-validator': [],
                                        'x-component-props': {
                                            'size': 'middle'
                                        },
                                        'x-decorator-props': {
                                            'colon': false,
                                            'labelWidth': 'inherit',
                                            'wrapperWidth': '350px',
                                            'wrapperCol': 0,
                                            'layout': 'vertical'
                                        },
                                        'x-pattern': 'readOnly',
                                        'x-designable-id': 'qd9qvo5de8t',
                                        'x-index': 0
                                    }
                                }
                            },
                            '1bkppjxhae7': {
                                'type': 'void',
                                'x-component': 'FormGrid.GridColumn',
                                'x-validator': [],
                                'x-component-props': {
                                    'gridSpan': 1,
                                    'style': {
                                        'display': 'flex',
                                        'flexDirection': 'column',
                                        'flexWrap': 'nowrap',
                                        'alignItems': 'flex-end',
                                        'justifyContent': 'flex-start',
                                        'alignContent': 'center',
                                        'margin': '0px 10px 0px 0px'
                                    }
                                },
                                'x-designable-id': '1bkppjxhae7',
                                'x-index': 1,
                                'properties': {
                                    'e2vxm26fnuo': {
                                        'type': 'string',
                                        'title': 'Email',
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-validator': [],
                                        'x-component-props': {
                                            'size': 'middle',
                                            'maxLength': null
                                        },
                                        'x-decorator-props': {
                                            'colon': false,
                                            'wrapperWidth': '350px',
                                            'layout': 'vertical'
                                        },
                                        'x-pattern': 'readOnly',
                                        'x-designable-id': 'e2vxm26fnuo',
                                        'x-index': 0
                                    }
                                }
                            },
                            'xahivo904ay': {
                                'type': 'void',
                                'x-component': 'FormGrid.GridColumn',
                                'x-validator': [],
                                'x-component-props': {
                                    'gridSpan': 1,
                                    'style': {
                                        'display': 'flex',
                                        'flexDirection': 'column',
                                        'flexWrap': 'nowrap',
                                        'justifyContent': 'flex-start',
                                        'alignItems': 'flex-end',
                                        'margin': '0px 10px 0px 0px'
                                    }
                                },
                                'x-designable-id': 'xahivo904ay',
                                'x-index': 2,
                                'properties': {
                                    'GENDER': {
                                        'type': 'string',
                                        'title': 'Домашний телефон',
                                        'x-decorator': 'FormItem',
                                        'x-component': 'Input',
                                        'x-validator': [],
                                        'x-component-props': {
                                            'size': 'middle'
                                        },
                                        'x-decorator-props': {
                                            'colon': false,
                                            'wrapperWidth': '350px',
                                            'layout': 'vertical'
                                        },
                                        'x-pattern': 'readOnly',
                                        'name': 'GENDER',
                                        'x-designable-id': 'xjc1m8xifo2',
                                        'x-index': 0
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        'x-designable-id': 'e5rz5u6r9fr'
    }
};
const Preview = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(globalStyles_1.default, null),
        react_1.default.createElement(exports.PreviewWidget, { tree: fromData })));
};
exports.default = Preview;
//# sourceMappingURL=App.js.map