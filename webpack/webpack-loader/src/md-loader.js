module.exports = function (source) {
    // console.log(source);
    return `
        import React from 'react';
        import Markdown from 'markdown-to-jsx';
        export default function Post(){
            return(
                <Markdown>
                    ${source}
                </Markdown>
            )
        }
    `
}