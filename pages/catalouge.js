import Head from "next/head";
import PdfViewer from "../components/pdfViewer";
// import PDF from "../assets/pdf.pdf";

const HomePage = () => {
    const pdfUrl = "/formenvorgang-sml-web-close.pdf"; // Update this path to your PDF file

    return (
        <div>
            <Head>
                <title>PDF Viewer</title>
                <meta name="description" content="A simple PDF viewer example with Next.js" />
            </Head>

            <main>
                <h1>PDF Viewer</h1>
                <PdfViewer pdfUrl={pdfUrl} />
            </main>
        </div>
    );
};

export default HomePage;
