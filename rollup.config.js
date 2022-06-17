import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';
import typescript from 'rollup-plugin-typescript2';

dotenv.config();

export default [
    {
        input: 'src/main.ts',
        output: {
            file: 'bundle.js',
        },
        plugins: [
            resolve({browser: true}),
            typescript(),
            replace({
                values: {
                    'process.env.SERVER_URL': JSON.stringify(process.env.SERVER_URL),
                },
                preventAssignment: true,
            }),
            // terser(),
        ],
    },
    {
        input: 'src/email.ts',
        output: {
            file: 'email_bundle.js',
        },
        plugins: [
            resolve({browser: true}),
            typescript(),
            replace({
                values: {
                    'process.env.SERVER_URL': JSON.stringify(process.env.SERVER_URL),
                },
                preventAssignment: true,
            }),
            // terser(),
        ],
    }
    ];