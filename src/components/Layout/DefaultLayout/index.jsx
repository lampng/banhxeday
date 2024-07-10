import Header from './Header';
import Footer from './Footer';
function DefaultLayout({ children }) {
    return (
        <>
            <div className="w-full h-full p-0 m-0 overflow-hidden">
                <Header />
                <div className="">{children}</div>
                <Footer />
            </div>
        </>
    );
}

export default DefaultLayout;
