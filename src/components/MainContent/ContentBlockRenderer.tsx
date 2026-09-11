import type { LearningBlock } from "../data/learningContent";

type ContentBlockRendererProps = { blocks: LearningBlock[] };

function ContentBlockRenderer({ blocks }: ContentBlockRendererProps) {
    return <div className="content-block-list">{blocks.map((block, index) => {
        switch (block.type) {
            case "text": return <p key={index}>{block.text}</p>;
            case "code": return <pre className="theme-code" key={index}><code>{block.code}</code></pre>;
            case "info": return <aside className="theme-explanation" key={index}><h3>{block.title ?? "Hinweis"}</h3><p>{block.text}</p></aside>;
            case "list": return <section className="content-list-block" key={index}>{block.title && <h3>{block.title}</h3>}<ul>{block.items.map(item => <li key={item}>{item}</li>)}</ul></section>;
            case "comparison": return <section className="comparison-block" key={index}><h3>{block.title ?? "Vergleich"}</h3><div><article><strong>{block.left.label}</strong><p>{block.left.text}</p></article><article><strong>{block.right.label}</strong><p>{block.right.text}</p></article></div></section>;
            case "tab": return <section className="special-content-block" key={index}><h3>{block.title}</h3>{block.tuning && <small>Stimmung: {block.tuning}</small>}<pre><code>{block.content}</code></pre></section>;
            case "notation": return <section className="special-content-block" key={index}><h3>{block.title}</h3><pre><code>{block.content}</code></pre></section>;
            case "table": return <table className="content-table" key={index}><thead><tr>{block.headers.map(header => <th key={header}>{header}</th>)}</tr></thead><tbody>{block.rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}</tr>)}</tbody></table>;
        }
    })}</div>;
}

export default ContentBlockRenderer;
