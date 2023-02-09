import Head from "next/head";

export default function Layout(props) {
    console.log(props);
    const pageTitle = props.pageTitle ? props.pageTitle : 'Job Description Generator';
    return (
    <>
        <Head>
            <title>{pageTitle}</title>
            <meta name="description" content="AI Job Description Generator" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {props.children}
    </>
    )
}