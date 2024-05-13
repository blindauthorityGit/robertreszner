import Head from "next/head";
import PdfViewer from "../components/pdfViewer";
import MainContainer from "../components/layout/mainContainer";

const HomePage = () => {
    const pdfUrl = "/formenvorgang-sml-web-close.pdf"; // Ensure the PDF file is in the public directory

    return (
        <MainContainer width="w-full px-6 sm:px- sm:pl-12 col-span-12 md:col-span-9 md:ml-[320px] overflow-hidden">
            <Head>
                <title>PDF Viewer</title>
                <meta name="description" content="A simple PDF viewer example with Next.js" />
            </Head>

            <main className="col-span-12">
                <h1>PDF Viewer</h1>
                <PdfViewer pdfUrl={pdfUrl} />
            </main>
        </MainContainer>
    );
};

export default HomePage;
