import Layout from "@/layout";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function FiveHundred() {

    const [errorHidden, showHideError] = useState(true)
    const router = useRouter();
    const hrLine = (count = 10) => {
        let line = '';
        for (let index = 0; index < count; index++) {
            line += '_';
        }
        return line;
    }
    const errorToClipboard = () => {
        navigator.clipboard.writeText(router.query.stack);
    }
    console.log(router);
    const
        mailtoBreak = '%0D',
        imageAlt = 'developer working to fix problem gif',
        paragraph = 'Something has caused the site to malfunction, but do not worry our skilled technicians know about this and are working tirelessy to resolve the problem as soon as possible.',
        mailtoHref = "mailto:webmaster@infinityarc.net?subject=Internal-Server-Error"
        ;
    return (
        <Layout pageTitle="500:Internal Error">
            <div className="m-auto w-4/6 pt-10">
                <h1 className="text-6xl mb-4 text-center">Woops!!!!!!!</h1>
                <h1 className="text-3xl">Error 500<small className="">: Internal Server Error</small></h1>
                <hr className="my-3" />
                <ul className="list-disc">
                    <li className="list-item list-inside list">
                        {paragraph}
                    </li>
                </ul>

                <Image className="m-auto" src="/internal-error.gif" width="250" height="250" alt={imageAlt}></Image>
                <div className="flex justify-between content-center">
                    <a
                        className="text-center block text-blue-500 hover:underline"
                        href={`${mailtoHref}&body=${mailtoBreak}${mailtoBreak}${hrLine(50)}${mailtoBreak}Error Message:${router.query.message} ${mailtoBreak} Error Stack: ${router.query.stack}`}
                        title="Contact Support">Contact Support</a>
                    <button
                        onClick={() => showHideError(!errorHidden)}
                        className="bg-gray-700 shadow rounded-md p-3 my-3 text-yellow-300 hover:bg-gray-200 hover:text-slate-700" type="button">
                        {errorHidden ? 'View Details' : 'Hide Details'}
                    </button>
                </div>
                <div hidden={errorHidden}>
                    <div className="flex justify-between bg-rose-300 rounded p-4 text-rose-900">
                        <code>
                            <pre>
                                {router.query.stack}
                            </pre>
                        </code>
                        <button onClick={errorToClipboard}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}