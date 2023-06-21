
function Layout({ children }) {
    return (
        <main className="w-11/12 lg:w-2/3 flex flex-col items-center mt-8 mx-auto ">
            {children}
        </main>
    )
}

export { Layout }