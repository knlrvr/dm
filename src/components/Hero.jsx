export default function Hero() {
    return (
        <main className="bg-white dark:bg-gray-900">
            <div className="p-4 flex flex-col text-center max-w-5xl mx-auto">
                <h1 className="text-xl mb-4 font-mono dark:text-gray-200">  
                    Dungeon Master Resouces, Tips & Hints
                </h1>
                <hr />
                <p className="p-4 dark:text-gray-200">
                    Resources for being the <strong>best</strong> DM. Or not. You could also be the <strong>worst</strong>.
                    It&apos;s really up to you. 
                    <br />
                    <em>Enjoy!</em>
                </p>
                <hr />
                <p className="text-xs dark:text-gray-500 mt-1 max-w-3xl mx-auto">
                    This is not an exhaustive list of everything you may need behind the screen.
                    This is only a (growing) compilation of the resources and tips I have found
                    to be useful for me. 
                </p>
            </div>
        </main>
    )
}