import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {useState} from "react";
import hi2en from "../../lib/hi2en";
import styles from './index.module.css';

export default function Transliteration() {
    const {siteConfig} = useDocusaurusContext();

    const [original, setOriginal] = useState('')
    const [transformedData, setTransformedData] = useState([])

    const [filesStartWith, setFilesStartWith] = useState("##");
    const [slugStartsWith, setSlugStartsWith] = useState();
    const [keywords, setKeywords] = useState('Sahib Bandgi books,');
    const [fileCount, setFileCount] = useState(1);
    const [shouldTransliterate, setShouldTransliterate] = useState(false);
    const [shouldDownload, setShouldDownload] = useState(true);

    // const transliterate = () => {
    //     setTransformedData(hi2en(original))
    // }

    const transformAndCreateFiles = async () => {
        const line = original.split("\n");
        let count = fileCount;

        const arr = [];
        let emptyDoc = {
            title: "",
            slug: "",
            count: "",
            body: [],
            fileName: "",
        };
        let doc = JSON.parse(JSON.stringify(emptyDoc));

        line.forEach((x) => {
            const start = false;
            let slug;
            if (slugStartsWith && x.split(" ")[0] === slugStartsWith) {
                // save content as document
                if (doc?.title && doc?.body?.length > 0) {
                    const body = doc.body.join("  \n");
                    arr.push({...doc, body});
                    doc=JSON.parse(JSON.stringify(emptyDoc));
                }
                //new slug
                doc.slug = x.replaceAll("#", "").replaceAll(".", "").trim().toLowerCase().replaceAll(" ", "-");
            } else {
                if (x.split(" ")[0] === (filesStartWith)) {
                    // redundant code
                    if (doc?.title && doc?.body?.length > 0) {
                        const body = doc.body.join("  \n");
                        arr.push({...doc, body});
                        doc=JSON.parse(JSON.stringify(emptyDoc));
                    }


                    count++;

                    const title = x.replaceAll("#", "").replaceAll(".", "").trim();
                    // console.log(title);

                    if (shouldTransliterate) {
                        slug = hi2en(title)
                            .replace(/[^a-zA-Z ]/g, "")
                            // .replaceAll("aa", "a")
                            .replaceAll("th", "t")
                            .replaceAll(" ", "-")
                            .toLowerCase();
                    } else {
                        slug = doc.slug || title.substring(0, 20).replaceAll(" ", "-").toLowerCase();
                    }

                    console.log(slug, count);
                    const fileName = `${count}_${slug}.md`;
                    doc = {
                        title,
                        slug,
                        count,
                        body: [],
                        fileName
                    };
                } else {
                    doc.body.push(x);
                }
            }
        });
        // last
        if (doc?.title && doc?.body?.length > 0) {
            const body = doc.body.join("  \n");
            arr.push({...doc, body});
        }
        console.log(arr)
        setTransformedData(arr);
        createTextAndDownload(arr);

    }


    async function download(filename, text) {
        const element = document.createElement("a");
        // remove the square brackets around data; it's already an array
        const file = new Blob([text], {type: "text/plain"});
        element.href = URL.createObjectURL(file);
        element.download = filename;
        element.click();
    }

    const createTextAndDownload = async (arr = transformedData) => {

        for (const x of arr) {

            const transliterateText = `
            ## Transliteration

${hi2en(x.body)
                // .replaceAll("aa", "a")
                // .replaceAll("th", "t")
                .replaceAll(" .a ", " ")
                .toLowerCase()}
`


            const text = `---
title: ${x.title}
keywords: ["${x.title}",${keywords}]
description: ${x.body.substring(0, 155).replaceAll("\n", " ").trim()}
slug: ${x.slug}
---

${x.body}

${shouldTransliterate ? transliterateText : ''}
  `;

            console.log(text);
            if (shouldDownload) {
                await new Promise(r => setTimeout(r, 100));
                // Start file download.
                await download(x.fileName, text);
            }
        }

    }


    return (
        <Layout
            title='Create Doc files'
            description={`${siteConfig.customFields.description}`}>
            <main>
                <div>
                    Slug Starts with <input type="text" value={slugStartsWith}
                                            onChange={(e) => setSlugStartsWith(e.target.value)}/>

                </div>
                <div>
                    (Title)Files Starts with * <input type="text" value={filesStartWith}
                                                      onChange={(e) => setFilesStartWith(e.target.value)}/>

                </div>
                <div>
                    Keywords * <input type="text" value={keywords}
                                      onChange={(e) => setKeywords(e.target.value)}/>

                </div>
                <div>
                    File Count Start * <input type="number" value={fileCount}
                                              onChange={(e) => setFileCount(e.target.value)}/>

                </div>
                <div>
                    Add Transliteration <input type="checkbox" checked={shouldTransliterate}
                                               defaultChecked={shouldTransliterate}
                                               onChange={() => setShouldTransliterate(!shouldTransliterate)}/>

                </div>
                <div>
                    Download files <input type="checkbox" checked={shouldDownload}
                                          defaultChecked={shouldDownload}
                                          onChange={() => setShouldDownload(!shouldDownload)}/>

                </div>

                <button className="button button--secondary button--lg" onClick={transformAndCreateFiles}>
                    Transform/Create files
                </button>
                {/*<button className="button button--secondary button--lg margin-left--sm" onClick={transformAndCreateFiles}>*/}
                {/*    Download files*/}
                {/*</button>*/}
                <div className={styles.diff}>
                    <div className={styles.contain}>
                        <div className="inline-div">
                            <p align="center">MD Text</p>
                            <textarea className={styles.txtarea} value={original}
                                      onChange={e => setOriginal(e.target.value)}></textarea>
                        </div>
                    </div>
                    {/*<div className={styles.contain}>*/}
                    {/*    <div className=" ">*/}
                    {/*        <p align="center">Docs list</p>*/}
                    {/*        {JSON.stringify(transformedData)}*/}
                    {/*        <textarea className={styles.txtarea} value={transformedData}*/}
                    {/*                  onChange={e => setTransformedData(e.target.value)}></textarea>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>


            </main>
        </Layout>
    )
        ;
}
