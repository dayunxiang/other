module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        'semi': ['warn', 'always'],                          // 语句强制分号结尾
        'quotes': ['warn', 'single'],                        // 强制使用单引号
        'eqeqeq': 'warn',                                    // 必须使用全等
        'camelcase': 'warn',                                 // 强制驼峰法命名
        'new-parens': 'warn',                                // new时,构造函数要有括号
        'max-params': ['warn', 3],                           // 函数最多只能有3个参数
        'comma-style': ['warn', 'last'],                     // 禁止在行首写逗号
        'key-spacing': ['warn', {
            'beforeColon': false,
            'afterColon': true
        }
        ],                                              // 对象字面量中冒号的前后空格
        'brace-style': ['warn', '1tbs', {
            'allowSingleLine': true
        }
        ],                                              // if while function 后面的{必须与if在同一行
        'default-case': 'warn',                              // switch语句强制default分支
        'dot-location': ['warn', 'property'],                // 链式调用的时候，点号必须放在第二行开头处，禁止放在第一行结尾处
        'comma-dangle': ['warn', 'never'],                   // 数组和对象键值对最后一个元素不能带末尾的逗号
        'semi-spacing': ['warn', {
            before: false,
            after: true
        }
        ],                                              // 一行有多个语句时，分号前面禁止有空格，分号后面必须有空格
        'comma-spacing': ['warn', {
            'before': false,
            'after': true
        }
        ],                                              // 控制逗号前后的空格
        'arrow-spacing': ['warn', {
            before: true,
            after: true
        }
        ],                                              // 箭头函数的箭头前后必须有空格
        'spaced-comment': ['warn', 'always'],                // 注释后必须有一个空格
        'newline-after-var': 'warn',                         // 变量声明后是否需要空一行
        'space-before-blocks': ['warn', 'always'],           // if, function 等的大括号之前必须要有空格，比如 if (a) {
        'switch-colon-spacing': ['warn', {
            after: true,
            before: false
        }
        ],                                              // case 的冒号前禁止有空格，冒号后必须有空格
        'lines-around-comment': ['warn', {
            beforeLineComment: true,
            beforeBlockComment: true
        }],                                             // 注释前必须有空行
        'array-bracket-spacing': ['warn', 'never'],          // 数组[]内侧两头不要空格
        'space-before-function-paren': ['warn', 'never'],    // 函数定义时括号前面要不要有空格
        'no-var': 'warn',                                    // 不能使用var声明变量
        'no-eval': 'warn',                                   // 禁止使用 eval
        'no-empty': 'warn',                                  // 块语句中的内容不能为空
        'no-undef': 'warn',                                  // 不能有未定义的变量
        'no-dupe-keys': 'warn',                              // 对象不能定义重复的key
        'no-multi-str': 'warn',                              // 字符串不能用\换行
        'no-dupe-args': 'warn',                              // 函数参数不能重复
        'no-extra-semi': 'warn',                             // 禁止不必要的分号
        'no-func-assign': 'warn',                            // 禁止重复的函数声明
        'no-spaced-func': 'warn',                            // 函数调用时 函数名与()之间不能有空格
        'no-unused-vars': ['warn', {
            vars: 'all',
            args: 'after-used'
        }
        ],                                              // 不能有声明后未被使用的变量或参数
        'no-func-assign': 'warn',                            // 禁止将一个函数声明重新赋值，如：function foo() {} foo = bar
        'no-cond-assign': 'warn',                            // 禁止在条件表达式中使用赋值语句
        'no-fallthrough': 'warn',                            // switch 的 case 内必须有 break, return 或 throw
        'no-implied-eval': 'warn',                           // 禁止使用隐式eval
        'no-multi-spaces': 'warn',                           // 不能用多余的空格
        'no-sparse-arrays': 'warn',                          // 禁止在数组中出现连续的逗号，如 let foo = [,,]
        'no-duplicate-case': 'warn',                         // switch中的case标签不能重复
        'no-useless-concat': 'warn',                         // 禁止出现没必要的字符串连接
        'no-empty-function': ['warn', {
            allow: [
                'functions',
                'arrowFunctions'
            ]
        }
        ],                                              // 不允许有空函数，除非是将一个空函数设置为某个项的默认值
        'no-trailing-spaces': 'warn',                        // 一行结束后面不要有空格
        'no-floating-decimal': 'warn',                       // 禁止省略浮点数中的0 .5 3.
        'no-use-before-define': 'warn',                      // 未定义前不能使用
        'no-constant-condition': 'warn',                     // 禁止在条件中使用常量表达式 if(true) if(1)
        'no-inner-declarations': ['warn', 'both'],           // 禁止在 if 代码块内出现函数声明
        'no-multiple-empty-lines': ['warn', {
            max: 2
        }
        ],                                               // 空行最多不能超过2行
        'indent': 'off',
        'semi': ['warn', 'always'],
        'space-before-function-paren': ['warn', 'never'],
        'vue/no-async-in-computed-properties': 'warn',
        'vue/no-dupe-keys': 'warn',
        'vue/attribute-hyphenation': 'warn',
        'vue/html-closing-bracket-newline': 'warn',
        'vue/html-closing-bracket-spacing': 'warn',
        'vue/html-end-tags': 'warn',
        'vue/html-indent': 'warn',
        'vue/html-quotes': 'warn',
        'vue/html-self-closing': 'warn',
        'vue/max-attributes-per-line': 'warn',
        'vue/multiline-html-element-content-newline': 'warn',
        'vue/mustache-interpolation-spacing': 'warn',
        'vue/name-property-casing': 'warn',
        'vue/no-multi-spaces': 'warn',
        'vue/no-spaces-around-equal-signs-in-attribute': 'warn',
        'vue/no-template-shadow': 'warn',
        'vue/prop-name-casing': 'warn',
        'vue/require-default-prop': 'warn',
        'vue/require-prop-types': 'warn',
        'vue/singleline-html-element-content-newline': 'warn',
        'vue/v-bind-style': 'warn',
        'vue/v-on-style': 'warn',
        'vue/attributes-order': 'warn',
        'vue/no-confusing-v-for-v-if': 'warn',
        'vue/no-v-html': 'warn',
        'vue/order-in-components': 'warn',
        'vue/this-in-template': 'warn',
        'vue/no-duplicate-attributes': 'warn',
        'vue/no-parsing-error': 'warn',
        'vue/no-reserved-keys': 'warn',
        'vue/no-shared-component-data': 'warn',
        'vue/no-side-effects-in-computed-properties': 'warn',
        'vue/no-template-key': 'warn',
        'vue/no-textarea-mustache': 'warn',
        'vue/no-unused-components': 'warn',
        'vue/no-unused-vars': 'warn',
        'vue/no-use-v-if-with-v-for': 'warn',
        'vue/require-component-is': 'warn',
        'vue/require-prop-type-constructor': 'warn',
        'vue/require-render-return': 'warn',
        'vue/require-v-for-key': 'warn',
        'vue/require-valid-default-prop': 'warn',
        'vue/return-in-computed-property': 'warn',
        'vue/use-v-on-exact': 'warn',
        'vue/valid-template-root': 'warn',
        'vue/valid-v-bind': 'warn',
        'vue/valid-v-cloak': 'warn',
        'vue/valid-v-else-if': 'warn',
        'vue/valid-v-else': 'warn',
        'vue/valid-v-for': 'warn',
        'vue/valid-v-html': 'warn',
        'vue/valid-v-if': 'warn',
        'vue/valid-v-model': 'warn',
        'vue/valid-v-on': 'warn',
        'vue/valid-v-once': 'warn',
        'vue/valid-v-pre': 'warn',
        'vue/valid-v-show': 'warn',
        'vue/valid-v-text': 'warn',
        'vue/script-indent': ['warn', 4, {
            'baseIndent': 1,
            'switchCase': 0,
            'ignores': []
        }],
        'vue/html-indent': ['warn', 4, {
            'attribute': 1,
            'baseIndent': 1,
            'closeBracket': 0,
            'alignAttributesVertically': true,
            'ignores': []
        }]
    },
    'extends': [
        'plugin:vue/recommended',
        '@vue/standard'
    ]
}
