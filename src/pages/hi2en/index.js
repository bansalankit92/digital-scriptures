import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {useState} from "react";
import hi2en from "../../lib/hi2en";
import styles from './index.module.css';

export default function Transliteration() {
    const {siteConfig} = useDocusaurusContext();

    const [original, setOriginal] = useState('')
    const [englishTxt, setEnglishTxt] = useState('')

    const transliterate = () => {
        setEnglishTxt(hi2en(original))
    }


    return (
        <Layout
            title='Transliteration Hindi'
            description={`${siteConfig.customFields.description}`}>
            <main>
                <button className="button button--secondary button--lg" onClick={transliterate}>
                    Transliterate to Hindi
                </button>
                <div className={styles.diff}>
                    <div className={styles.contain}>
                        <div className="inline-div">
                            <p align="center">Original Hindi Text</p>
                            <textarea className={styles.txtarea} value={original}
                                      onChange={e => setOriginal(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className={styles.contain}>
                        <div className=" ">
                            <p align="center">English</p>
                            <textarea className={styles.txtarea} value={englishTxt}
                                      onChange={e => setEnglishTxt(e.target.value)}></textarea>
                        </div>
                    </div>
                </div>
                <table>
                    <tr>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>
                </table>


            </main>
        </Layout>
    )
        ;
}
