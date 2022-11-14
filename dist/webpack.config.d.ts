import HtmlWebpackPlugin = require("html-webpack-plugin");
export const mode: string;
export namespace entry {
    const index: string;
}
export namespace output {
    const path: string;
    const filename: string;
}
export namespace resolve {
    const extensions: string[];
}
export namespace module {
    const rules: ({
        test: RegExp;
        use: string;
        exclude: RegExp;
    } | {
        test: RegExp;
        use: (string | {
            loader: string;
            options: {
                lessOptions: {
                    javascriptEnabled: boolean;
                };
            };
        })[];
        exclude?: undefined;
    })[];
}
export const plugins: HtmlWebpackPlugin[];
