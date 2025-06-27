

export const metadata = {
    title: "Page Not Found"
}

export default function NotFound() {
    return (
        <div className="px-2 w-full">
            <div className="w-full mx-auto py-4 flex flex-col justify-center
            items-center ">
                <h2 className="text-2xl mb-2">Page Not Found</h2>
                <h3 className="text-sm">The page you requested does not exists</h3>
            </div>
        </div>
    )
}