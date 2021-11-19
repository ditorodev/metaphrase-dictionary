import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text&family=Work+Sans:ital,wght@0,300;0,400;1,300&display=swap" rel="stylesheet" />
                </Head>
                <body className="bg-black text-maintext h-screen">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument