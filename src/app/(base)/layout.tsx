import { Footer, Header } from './components'


export default function BaseLayout(
    {
        children,
    }: {
        children: React.ReactNode
    }
) {
    return (
        <main>
            <Header />
            {children}
            <Footer />

        </main>
    )
}
