// import React from 'react'
// import 'antd/dist/antd.less';
// // import '@formily/antd/esm/style.less';
// import {
//     Form,
//     FormItem,
//     DatePicker,
//     Checkbox,
//     Cascader,
//     Editable,
//     Input,
//     NumberPicker,
//     Switch,
//     Password,
//     PreviewText,
//     Radio,
//     Reset,
//     Select,
//     Space,
//     Submit,
//     TimePicker,
//     Transfer,
//     TreeSelect,
//     Upload,
//     FormGrid,
//     FormLayout,
//     FormTab,
//     FormCollapse,
//     ArrayTable,
//     ArrayCards,
// } from '@formily/antd';
// import {IFormilySchema} from '@designable/formily-transformer';
// import {createForm} from '@formily/core';
// import {createSchemaField} from '@formily/react';
// // import {Card} from 'antd';
//
//
// export interface PreviewWidgetProps {
//     tree: IFormilySchema
// }
//
// const Text: React.FC<{
//     value?: string;
//     content?: string;
//     mode?: 'normal' | 'h1' | 'h2' | 'h3' | 'p';
// }> = ({ value, mode, content, ...props }) => {
//     const tagName = mode === 'normal' || !mode ? 'div' : mode;
//     return React.createElement(tagName, props, value || content);
// };
//
// const SchemaField = createSchemaField({
//     components: {
//         Space,
//         FormGrid,
//         FormLayout,
//         FormTab,
//         FormCollapse,
//         ArrayTable,
//         ArrayCards,
//         FormItem,
//         DatePicker,
//         Checkbox,
//         Cascader,
//         Editable,
//         Input,
//         NumberPicker,
//         Switch,
//         Password,
//         PreviewText,
//         Radio,
//         Reset,
//         Select,
//         Submit,
//         TimePicker,
//         Transfer,
//         TreeSelect,
//         Upload,
//         // Card,
//         // Slider,
//         // Rate,
//         Text
//     },
// })
//
// console.log(SchemaField)
//
// export const PreviewWidget: React.FC<PreviewWidgetProps> = (props: PreviewWidgetProps) => {
//     const form = React.useMemo(() => createForm(), []);
//     const { form: formProps, schema } = props.tree
//
//
//     return (
//         <div>
//             <Form
//                 {...formProps}
//                 form={form}
//             >
//                 <SchemaField schema={schema} />
//             </Form>
//         </div>
//     )
// }
//
// export interface FormViewComponentProps {
//     initialJson: any
//     style?: React.CSSProperties
// }

// const form = {
//     'form': {
//         'labelCol': 6,
//         'wrapperCol': 12
//     },
//     'schema': {
//         'type': 'object',
//         'properties': {
//             '76agnxnid72': {
//                 'type': 'void',
//                 'x-component': 'Card',
//                 'x-component-props': {
//                     'title': '????????????????????????',
//                     'style': {
//                         'display': 'block',
//                         'flexDirection': 'row',
//                         'flexWrap': 'wrap',
//                         'justifyContent': 'flex-start',
//                         'alignContent': 'flex-end',
//                         'alignItems': 'center'
//                     }
//                 },
//                 'x-designable-id': '76agnxnid72',
//                 'x-index': 0,
//                 'properties': {
//                     'mnjsx1ul2jg': {
//                         'type': 'void',
//                         'x-component': 'FormGrid',
//                         'x-validator': [],
//                         'x-component-props': {},
//                         'x-designable-id': 'mnjsx1ul2jg',
//                         'x-index': 0,
//                         'properties': {
//                             '109ck662n04': {
//                                 'type': 'void',
//                                 'x-component': 'FormGrid.GridColumn',
//                                 'x-validator': [],
//                                 'x-component-props': {
//                                     'style': {
//                                         'display': 'flex',
//                                         'flexDirection': 'column',
//                                         'flexWrap': 'nowrap',
//                                         'justifyContent': 'flex-start',
//                                         'alignItems': 'flex-end',
//                                         'width': 'inherit',
//                                         'alignContent': 'center',
//                                         'margin': '0px 0px 0px 0px'
//                                     },
//                                     'gridSpan': 1
//                                 },
//                                 'x-designable-id': '109ck662n04',
//                                 'x-index': 0,
//                                 'properties': {
//                                     'LAST_NAME': {
//                                         'type': 'string',
//                                         'title': '??????????????',
//                                         'x-decorator': 'FormItem',
//                                         'x-component': 'Input',
//                                         'x-validator': [],
//                                         'x-component-props': {
//                                             'size': 'middle',
//                                             'style': {
//                                                 'display': 'flex',
//                                                 'flexDirection': 'row',
//                                                 'flexWrap': 'wrap',
//                                                 'justifyContent': 'center',
//                                                 'alignItems': 'center'
//                                             }
//                                         },
//                                         'x-decorator-props': {
//                                             'colon': false,
//                                             'labelWidth': 'inherit',
//                                             'wrapperWidth': '350px',
//                                             'wrapperCol': 0,
//                                             'layout': 'vertical'
//                                         },
//                                         'x-pattern': 'readOnly',
//                                         'name': 'LAST_NAME',
//                                         'x-designable-id': 'vea3l7kdc2g',
//                                         'x-index': 0
//                                     },
//                                     'BIRTH_DATE': {
//                                         'type': 'string',
//                                         'title': '???????? ????????????????',
//                                         'x-decorator': 'FormItem',
//                                         'x-component': 'Input',
//                                         'x-validator': [],
//                                         'x-component-props': {
//                                             'size': 'middle'
//                                         },
//                                         'x-decorator-props': {
//                                             'colon': false,
//                                             'labelWidth': 'inherit',
//                                             'wrapperWidth': '350px',
//                                             'wrapperCol': 0,
//                                             'layout': 'vertical'
//                                         },
//                                         'x-pattern': 'readOnly',
//                                         'x-designable-id': 'teyc1ghvriq',
//                                         'x-index': 1,
//                                         'name': 'BIRTH_DATE'
//                                     },
//                                     'CITIZENSHIP': {
//                                         'type': 'string',
//                                         'title': '??????????????????????',
//                                         'x-decorator': 'FormItem',
//                                         'x-component': 'Input',
//                                         'x-validator': [],
//                                         'x-component-props': {
//                                             'size': 'middle'
//                                         },
//                                         'x-decorator-props': {
//                                             'colon': false,
//                                             'labelWidth': 'inherit',
//                                             'wrapperWidth': '350px',
//                                             'wrapperCol': 0,
//                                             'layout': 'vertical'
//                                         },
//                                         'x-pattern': 'readOnly',
//                                         'x-designable-id': 'ha1cqohqeym',
//                                         'x-index': 2,
//                                         'name': 'CITIZENSHIP'
//                                     }
//                                 }
//                             },
//                             'rq4zwha8pkm': {
//                                 'type': 'void',
//                                 'x-component': 'FormGrid.GridColumn',
//                                 'x-validator': [],
//                                 'x-component-props': {
//                                     'gridSpan': 1,
//                                     'style': {
//                                         'display': 'flex',
//                                         'flexDirection': 'column',
//                                         'flexWrap': 'nowrap',
//                                         'alignItems': 'flex-end',
//                                         'justifyContent': 'flex-start',
//                                         'alignContent': 'center',
//                                         'margin': '0px 10px 0px 0px'
//                                     }
//                                 },
//                                 'x-designable-id': 'rq4zwha8pkm',
//                                 'x-index': 1,
//                                 'properties': {
//                                     'FIRST_NAME': {
//                                         'type': 'string',
//                                         'title': '?????????? ????????????????',
//                                         'x-decorator': 'FormItem',
//                                         'x-component': 'Input',
//                                         'x-validator': [],
//                                         'x-component-props': {
//                                             'size': 'middle',
//                                             'maxLength': null
//                                         },
//                                         'x-decorator-props': {
//                                             'colon': false,
//                                             'wrapperWidth': '350px',
//                                             'layout': 'vertical'
//                                         },
//                                         'x-pattern': 'readOnly',
//                                         'name': 'FIRST_NAME',
//                                         'x-designable-id': '21m3vr5fuf7',
//                                         'x-index': 0
//                                     },
//                                     'INN_FL': {
//                                         'type': 'string',
//                                         'title': '??????',
//                                         'x-decorator': 'FormItem',
//                                         'x-component': 'Input',
//                                         'x-validator': [],
//                                         'x-component-props': {
//                                             'size': 'middle',
//                                             'maxLength': null
//                                         },
//                                         'x-decorator-props': {
//                                             'colon': false,
//                                             'wrapperWidth': '350px',
//                                             'layout': 'vertical'
//                                         },
//                                         'x-pattern': 'readOnly',
//                                         'name': 'INN_FL',
//                                         'x-designable-id': 'dly9189a5w1',
//                                         'x-index': 1
//                                     }
//                                 }
//                             },
//                             'peztusfsz8h': {
//                                 'type': 'void',
//                                 'x-component': 'FormGrid.GridColumn',
//                                 'x-validator': [],
//                                 'x-component-props': {
//                                     'gridSpan': 1,
//                                     'style': {
//                                         'display': 'flex',
//                                         'flexDirection': 'column',
//                                         'flexWrap': 'nowrap',
//                                         'justifyContent': 'flex-start',
//                                         'alignItems': 'flex-end',
//                                         'margin': '0px 10px 0px 0px'
//                                     }
//                                 },
//                                 'x-designable-id': 'peztusfsz8h',
//                                 'x-index': 2,
//                                 'properties': {
//                                     'MIDDLE_NAME': {
//                                         'type': 'string',
//                                         'title': '????????????????',
//                                         'x-decorator': 'FormItem',
//                                         'x-component': 'Input',
//                                         'x-validator': [],
//                                         'x-component-props': {
//                                             'size': 'middle'
//                                         },
//                                         'x-decorator-props': {
//                                             'colon': false,
//                                             'wrapperWidth': '350px',
//                                             'layout': 'vertical'
//                                         },
//                                         'x-pattern': 'readOnly',
//                                         'name': 'MIDDLE_NAME',
//                                         'x-designable-id': 'yu6hyjchkf2',
//                                         'x-index': 0
//                                     },
//                                     'GENDER': {
//                                         'type': 'string',
//                                         'title': '??????',
//                                         'x-decorator': 'FormItem',
//                                         'x-component': 'Input',
//                                         'x-validator': [],
//                                         'x-component-props': {
//                                             'size': 'middle'
//                                         },
//                                         'x-decorator-props': {
//                                             'colon': false,
//                                             'wrapperWidth': '350px',
//                                             'layout': 'vertical'
//                                         },
//                                         'x-pattern': 'readOnly',
//                                         'name': 'GENDER',
//                                         'x-designable-id': 'sjcd1ltb55i',
//                                         'x-index': 1
//                                     },
//                                     'MARITAL_STATUS': {
//                                         'type': 'string',
//                                         'title': '???????????????? ??????????????????',
//                                         'x-decorator': 'FormItem',
//                                         'x-component': 'Input',
//                                         'x-validator': [],
//                                         'x-component-props': {
//                                             'size': 'middle'
//                                         },
//                                         'x-decorator-props': {
//                                             'colon': false,
//                                             'wrapperWidth': '350px',
//                                             'layout': 'vertical'
//                                         },
//                                         'x-pattern': 'readOnly',
//                                         'name': 'MARITAL_STATUS',
//                                         'x-designable-id': 'k36fz5tx7uu',
//                                         'x-index': 2
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 },
//             },
//             'yjuxukkng7w': {
//                 'type': 'void',
//                 'x-component': 'Card',
//                 'x-component-props': {
//                     'title': '???????????????????? ????????????',
//                     'style': {
//                         'display': 'block',
//                         'flexDirection': 'row',
//                         'flexWrap': 'wrap',
//                         'justifyContent': 'flex-start',
//                         'alignContent': 'flex-end',
//                         'alignItems': 'center'
//                     }
//                 },
//                 'x-designable-id': 'yjuxukkng7w',
//                 'x-index': 1,
//                 'properties': {
//                     'd522pig9336': {
//                         'type': 'void',
//                         'x-component': 'FormGrid',
//                         'x-validator': [],
//                         'x-component-props': {},
//                         'x-designable-id': 'd522pig9336',
//                         'x-index': 0,
//                         'properties': {
//                             'xn7xuil3uiu': {
//                                 'type': 'void',
//                                 'x-component': 'FormGrid.GridColumn',
//                                 'x-validator': [],
//                                 'x-component-props': {
//                                     'style': {
//                                         'display': 'flex',
//                                         'flexDirection': 'column',
//                                         'flexWrap': 'nowrap',
//                                         'justifyContent': 'flex-start',
//                                         'alignItems': 'flex-end',
//                                         'width': 'inherit',
//                                         'alignContent': 'center',
//                                         'margin': '0px 10px 0px 0px'
//                                     },
//                                     'gridSpan': 1
//                                 },
//                                 'x-designable-id': 'xn7xuil3uiu',
//                                 'x-index': 0,
//                                 'properties': {
//                                     'qd9qvo5de8t': {
//                                         'type': 'string',
//                                         'title': '?????????????????? ??????????????',
//                                         'x-decorator': 'FormItem',
//                                         'x-component': 'Input',
//                                         'x-validator': [],
//                                         'x-component-props': {
//                                             'size': 'middle'
//                                         },
//                                         'x-decorator-props': {
//                                             'colon': false,
//                                             'labelWidth': 'inherit',
//                                             'wrapperWidth': '350px',
//                                             'wrapperCol': 0,
//                                             'layout': 'vertical'
//                                         },
//                                         'x-pattern': 'readOnly',
//                                         'x-designable-id': 'qd9qvo5de8t',
//                                         'x-index': 0
//                                     }
//                                 }
//                             },
//                             '1bkppjxhae7': {
//                                 'type': 'void',
//                                 'x-component': 'FormGrid.GridColumn',
//                                 'x-validator': [],
//                                 'x-component-props': {
//                                     'gridSpan': 1,
//                                     'style': {
//                                         'display': 'flex',
//                                         'flexDirection': 'column',
//                                         'flexWrap': 'nowrap',
//                                         'alignItems': 'flex-end',
//                                         'justifyContent': 'flex-start',
//                                         'alignContent': 'center',
//                                         'margin': '0px 10px 0px 0px'
//                                     }
//                                 },
//                                 'x-designable-id': '1bkppjxhae7',
//                                 'x-index': 1,
//                                 'properties': {
//                                     'e2vxm26fnuo': {
//                                         'type': 'string',
//                                         'title': 'Email',
//                                         'x-decorator': 'FormItem',
//                                         'x-component': 'Input',
//                                         'x-validator': [],
//                                         'x-component-props': {
//                                             'size': 'middle',
//                                             'maxLength': null
//                                         },
//                                         'x-decorator-props': {
//                                             'colon': false,
//                                             'wrapperWidth': '350px',
//                                             'layout': 'vertical'
//                                         },
//                                         'x-pattern': 'readOnly',
//                                         'x-designable-id': 'e2vxm26fnuo',
//                                         'x-index': 0
//                                     }
//                                 }
//                             },
//                             'xahivo904ay': {
//                                 'type': 'void',
//                                 'x-component': 'FormGrid.GridColumn',
//                                 'x-validator': [],
//                                 'x-component-props': {
//                                     'gridSpan': 1,
//                                     'style': {
//                                         'display': 'flex',
//                                         'flexDirection': 'column',
//                                         'flexWrap': 'nowrap',
//                                         'justifyContent': 'flex-start',
//                                         'alignItems': 'flex-end',
//                                         'margin': '0px 10px 0px 0px'
//                                     }
//                                 },
//                                 'x-designable-id': 'xahivo904ay',
//                                 'x-index': 2,
//                                 'properties': {
//                                     'GENDER': {
//                                         'type': 'string',
//                                         'title': '???????????????? ??????????????',
//                                         'x-decorator': 'FormItem',
//                                         'x-component': 'Input',
//                                         'x-validator': [],
//                                         'x-component-props': {
//                                             'size': 'middle'
//                                         },
//                                         'x-decorator-props': {
//                                             'colon': false,
//                                             'wrapperWidth': '350px',
//                                             'layout': 'vertical'
//                                         },
//                                         'x-pattern': 'readOnly',
//                                         'name': 'GENDER',
//                                         'x-designable-id': 'xjc1m8xifo2',
//                                         'x-index': 0
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             },
//         },
//         'x-designable-id': 'e5rz5u6r9fr'
//     }
// }

import React from 'react';

class Preview extends React.Component {
    
    render() {
        return (
        <div>
            <h1>Hello World</h1>
        </div>);
    }
}

export default Preview;
